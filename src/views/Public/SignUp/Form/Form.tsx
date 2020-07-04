import React, { useState, useEffect, useContext, useCallback } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { dictionary } from "../json";
import { useHistory } from "react-router-dom";
import { signin } from "routes/paths";

import { ICreateErrors, ICreateUserData } from "interfaces/user";

import {
  Form as Element,
  Label,
  Success,
  Radios,
  Link,
  ModalText
} from "./styles";
import { Input, Button, Radio } from "components";

export function Form() {
  const { create } = useContext(UserContext);
  const { Text } = useLocale("Profile", dictionary);

  const [data, setData] = useState<ICreateUserData>({
    name: "",
    email: "",
    gender: "",
    password: ""
  });
  const [check, setCheck] = useState<boolean>(false);
  const [errors, setErrors] = useState<ICreateErrors>({
    name: false,
    email: false,
    password: false,
    maxUsers: false
  });

  const { push } = useHistory();

  const feedback = useCallback(
    (response: boolean) => {
      if (response) {
        setCheck(true);
        setTimeout(() => {
          setCheck(false);
        }, 2000);
      }
    },
    [setCheck]
  );

  useEffect(() => {
    if (Object.values(errors).some((value, i) => value === true && i < 3)) {
      setTimeout(() => {
        setErrors({ ...errors, name: false, email: false, password: false });
      }, 1000);
    }
  }, [errors, setErrors]);

  const onChangeHandler = (e: any) => {
    const {
      target: { name, value }
    } = e;
    let result = {
      ...data,
      [name]: value
    };
    setData(result);
  };

  const signUpUser = () => {
    try {
      const response = create(data);
      feedback(response);
      setData({
        name: "",
        email: "",
        gender: "",
        password: ""
      });
    } catch ({ message }) {
      switch (message) {
        case "Password must have more than 6 character":
          setErrors({ ...errors, password: true });
          break;
        case "Invalid email" || "Email is already being used":
          setErrors({ ...errors, email: true });
          break;
        case "You must insert a name" || "Name is already being used":
          setErrors({ ...errors, name: true });
          break;
        case "Max number of users reached":
          setErrors({ ...errors, maxUsers: true });
          setData({
            name: "",
            email: "",
            gender: "",
            password: ""
          });
          break;
        default:
          setErrors(errors);
      }
    }
  };

  return (
    <Element onSubmit={(e: any) => e.preventDefault()} modal={errors.maxUsers}>
      {errors.maxUsers ? (
        <>
          <ModalText>
            <Text>Max number of users reached</Text>
          </ModalText>
          <Button onClick={() => setErrors({ ...errors, maxUsers: false })}>
            Okay
          </Button>
        </>
      ) : (
        <>
          <Label error={errors.name}>
            <Text>Name</Text>
          </Label>
          <Input
            type={"text"}
            name={"name"}
            value={data.name}
            onChange={onChangeHandler}
          />
          <Label error={errors.email}>
            <Text>Email</Text>
          </Label>
          <Input
            type={"text"}
            name={"email"}
            value={data.email}
            onChange={onChangeHandler}
          />
          <Label>
            <Text>Gender</Text>
          </Label>
          <Radios>
            <div>
              <Radio
                name={"gender"}
                value={"Male"}
                defaultChecked={true}
                onChange={onChangeHandler}
              />
              <Label>
                <Text>Male</Text>
              </Label>
            </div>
            <div>
              <Radio
                name={"gender"}
                value={"Female"}
                defaultChecked={false}
                onChange={onChangeHandler}
              />
              <Label>
                <Text>Female</Text>
              </Label>
            </div>
          </Radios>
          <Label error={errors.password}>
            <Text>Password</Text>
          </Label>
          <Input
            type={"password"}
            name={"password"}
            value={data.password}
            onChange={onChangeHandler}
          />
          <Button onClick={signUpUser}>
            {check ? <Success /> : <Text>Sign Up</Text>}
          </Button>
          <Link onClick={() => push(signin())}>
            <Text>Sign In</Text>
          </Link>
        </>
      )}
    </Element>
  );
}
