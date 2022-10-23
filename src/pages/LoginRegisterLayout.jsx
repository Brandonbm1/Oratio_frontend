import React from "react";

const LoginRegisterLayout = ({ children }) => {
  return (
    <section className="loginRegister">
      <article className="loginRegister_title">
        <p className="loginRegister_title-text">ORATIO</p>
      </article>
      <article className="loginRegister_body">{children}</article>
    </section>
  );
};

export default LoginRegisterLayout;
