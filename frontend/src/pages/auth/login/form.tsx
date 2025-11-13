import React from 'react';
import MailIcon from "../../../icons/mail-line.svg?react";
import InputGroup from "../../../components/ui/form/InputGroup";
import Button from "../../../components/ui/form/Button";
import Card from "../../../components/ui/structural/Card";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {observer} from "mobx-react-lite";
import loginWithGoogle from "../../../data/users/actions/loginWithGoogle";

export default observer(() => {
  return (
    <div  className="w-full">
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Login
      </h1>
      <InputGroup
        label={"Email"}
        type={"email"}
        placeholder={"john@doe.com"}
        preIcon={<MailIcon />}
      />
      <br />
      <InputGroup
        label={"Password"}
        type={"password"}
        placeholder={"*******"}
      />
      <br />
      <Button>Log In</Button>
    </div>
  );
});
