// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import LoginImage from "../../../assets/img/login-bg.jpeg";
import { ReactComponent as GitIcon } from "../../../icons/github.svg?react";
import Card from "../../../components/ui/structural/Card";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { observer } from "mobx-react-lite";
import loginWithGoogle from "../../../globalStore/users/actions/loginWithGoogle";
import { redirect } from "react-router";
import { Button } from "primereact/button";

export default observer(() => {
  return (
    <Card>
      <div className="h-32 md:h-auto md:w-1/2">
        <img aria-hidden="true" className="object-cover w-full h-full" src={LoginImage} alt="Login page" />
      </div>
      <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
        <div className="w-full">
          <GoogleOAuthProvider clientId={import.meta.env.VITE_AUTH_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                // @todo fix this type error
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                await loginWithGoogle(credentialResponse);
                redirect("/");
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </GoogleOAuthProvider>
          <hr className="my-8" />
          <Button
            className="p-button-lg"
            icon={<GitIcon className="w-4 h-4 mr-2" aria-hidden="true" />}
            iconPos="left"
            label="Github"
          />
        </div>
      </main>
    </Card>
  );
});
