import "./Login.css";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";
import Sawo from "sawo";
const API_KEY = "737fdccf-8b92-4f5f-b18e-bb2a9b8291e1";

export default function Login() {

  const { dispatch } = useContext(Context);

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    let config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        // setPayload(payload);
        dispatch({ type: "LOGIN_SUCCESS", payload});
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);


  return (
    <div className="Login">
      <div className="Login-card">
        <div className="Login-heading">
          <span className="Login-welcome">
            Welcome to<strong> Post IT </strong>
          </span>
          <span>
            <p>Lets go password less auth</p>
          </span>
        </div>
        <div className="Login-input">
          <h1>Login </h1>
          <form className="loginForm" >
            <div
              id="sawo-container"
              style={{ height: "300px", width: "400px" }}
              className="containerStyle"
            >
              <section>
                {!isUserLoggedIn ? (
                  <div className="formContainer" id="sawo-container"></div>
                ) : (
                  <div className="loggedin">
                    <h2>User Successful Login</h2>
                  
                  </div>
                )}
              </section>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}