import React from "react";
import "./Chat.scss";

const Chat = () => {
  return (
    <section className="Chat">
    <div className="ChatApp">
      <div className="ChatApp__header">
        <h1>Chat With Us</h1>
      </div>
      <div className="ChatApp__content">
        <form className="ChatApp__form">
          <label htmlFor="">
            First Name :
            <input
              type="text"
              name="FirstNAme"
              placeholder="Type your message"
              value=""
              required
            />
          </label>
          <button className="ChatApp__button">Send</button>

          {/* 
          <label htmlFor="password">
            Password :
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              value=""
              required
            />
          </label>
          <input type="submit" value="LogIn" />
          <a href="/register">New User ? Click here to Register</a> */}
        </form>
        <div className="ChatApp__conversation">
          <div className="ChatApp__conversation--container"></div>
        </div>
      </div>
    </div>
</section>  );
};

export default Chat;
