/* eslint-disable no-unused-vars */
import React from "react";
import useAuth from "../hooks/useAuth";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";

const SocialAuth = () => {
  const { logInWithGoogle, logInWithGithub } = useAuth();

  const handleSocialLogIn = (media) => {
    media().then(() => {
      console.log("log In with google successfully").catch((err) => {
        console.log(err);
      });
    });
  };
  return (
    <div>
      <div className="media-btn flex flex-col gap-3">
        <button
          className="btn btn-outline w-full "
          onClick={() => handleSocialLogIn(logInWithGoogle)}
        >
          <AiOutlineGoogle className="text-xl"></AiOutlineGoogle>
          <h1>Log In with Google</h1>
        </button>
        <button
          className="btn btn-outline w-full"
          onClick={() => handleSocialLogIn(logInWithGithub)}
        >
          <AiOutlineGithub className="text-xl" />
          <h1>Log In with Github</h1>
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
