import React, { useState, useContext, useCallback } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { dictionary } from "../json";

import { IUser } from "interfaces/user";

import { Form as Element, Label, Success, Radios } from "./styles";
import { Input, Button, Radio } from "components";

export function Form() {
  const { user, update, updateErrors } = useContext(UserContext);
  const { Text } = useLocale("Profile", dictionary);

  const [data, setData] = useState<IUser>(user!);
  const [check, setCheck] = useState<boolean>(false);

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

  return (
    <Element onSubmit={(e: any) => e.preventDefault()}>
      <Label error={updateErrors.name}>
        <Text>Name</Text>
      </Label>
      <Input
        type={"text"}
        name={"name"}
        value={data.name}
        onChange={onChangeHandler}
      />
      <Label error={updateErrors.email}>
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
            defaultChecked={user?.gender === "Male"}
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
            defaultChecked={user?.gender === "Female"}
            onChange={onChangeHandler}
          />
          <Label>
            <Text>Female</Text>
          </Label>
        </div>
      </Radios>
      <Label error={updateErrors.password}>
        <Text>Password</Text>
      </Label>
      <Input type={"password"} name={"password"} onChange={onChangeHandler} />
      <Button
        onClick={() => {
          const response = update(data);
          feedback(response);
        }}
      >
        {check ? <Success /> : <Text>Save</Text>}
      </Button>
    </Element>
  );
}
