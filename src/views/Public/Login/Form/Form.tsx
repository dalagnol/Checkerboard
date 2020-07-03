import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { dictionary } from "../json";
import { IAuthenticateErrors } from "interfaces/user";

import { Form as Element, Label } from "./styles";
import { Input, Button } from "components";

export function Form() {
  const [data, setData] = useState<IData>({
    credential: "",
    password: ""
  });
  const [errors, setErrors] = useState<IAuthenticateErrors>({
    credential: false,
    password: false
  });

  const { authenticate } = useContext(UserContext);
  const { Text } = useLocale("Login", dictionary);

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

  const authentication = () => {
    try {
      authenticate(data.credential, data.password);
    } catch ({ message }) {
      switch (message) {
        case "Wrong password":
          setErrors({ ...errors, password: true });
          break;
        case "User does not exist":
          setErrors({ ...errors, credential: true });
          break;
        default:
          setErrors(errors);
      }
    }
  };

  useEffect(() => {
    if (Object.values(errors).some(value => value === true)) {
      setTimeout(() => {
        setErrors({ credential: false, password: false });
      }, 1000);
    }
  }, [errors, setErrors]);

  return (
    <Element onSubmit={(e: any) => e.preventDefault()}>
      <Label error={errors.credential}>
        <Text>Credential</Text>
      </Label>
      <Input type={"text"} name={"credential"} onChange={onChangeHandler} />
      <Label error={errors.password}>
        <Text>Password</Text>
      </Label>
      <Input type={"password"} name={"password"} onChange={onChangeHandler} />
      <Button onClick={authentication}>
        <Text>Login</Text>
      </Button>
    </Element>
  );
}

interface IData {
  credential: string;
  password: string;
}
