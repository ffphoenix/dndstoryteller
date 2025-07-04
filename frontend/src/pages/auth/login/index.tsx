import React from 'react';
import LoginImage from "../../../assets/img/login-bg.jpeg";
import MailIcon from "../../../icons/mail.svg?react";
import GitIcon from "../../../icons/github.svg?react";
import InputGroup from "../../../components/UI/Form/InputGroup";
import Button from "../../../components/UI/Form/Button";
import Card from "../../../components/UI/Structural/Card";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import {observer} from "mobx-react-lite";
import loginWithGoogle from "../../../data/users/actions/loginWithGoogle";

export default observer(() => {
  return (
    <Card>
      <div className="h-32 md:h-auto md:w-1/2">
        <img
          aria-hidden="true"
          className="object-cover w-full h-full"
          src={LoginImage}
          alt="Login page"
        />
      </div>
      <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
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
          <br />
          <hr className="my-8" />
          <GoogleOAuthProvider clientId={import.meta.env.VITE_AUTH_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={(credentialResponse) => loginWithGoogle(credentialResponse)}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>
          <Button>
            <GitIcon className="w-4 h-4 mr-2" aria-hidden="true" />
            Github
          </Button>
        </div>
      </main>
    </Card>
  );
});
