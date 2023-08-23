import React from "react";

const Login = () => {
  return (
    <div>
      <div className="Login__header">LogIn</div>
      <div className="Login__main">
        <form>
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            name="username"
            placeholder="enter your username"
            value=""
            required
          />

          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
            value=""
            required
          />
          <input type="submit" value="LogIn" />
        </form>
      </div>
    </div>
  );
};

export default Login;
