import React, { useState, useContext } from "react";
import { UserContext } from "controllers";
import { useLocale } from "locale";
import { dictionary } from "../json";

import { Form as Element, Label } from "./styles";
import { Input, Button } from "components";

export function Form() {
  const [data, setData] = useState<IData>({
    credential: "",
    password: ""
  });

  const { authenticate, authErrors } = useContext(UserContext);
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

  return (
    <Element onSubmit={(e: any) => e.preventDefault()}>
      <Label error={authErrors.credential}>
        <Text>Credential</Text>
      </Label>
      <Input type={"text"} name={"credential"} onChange={onChangeHandler} />
      <Label error={authErrors.password}>
        <Text>Password</Text>
      </Label>
      <Input type={"password"} name={"password"} onChange={onChangeHandler} />
      <Button onClick={() => authenticate(data.credential, data.password)}>
        <Text>Login</Text>
      </Button>
    </Element>
  );
}

interface IData {
  credential: string;
  password: string;
}
