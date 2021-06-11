import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = async (e) => {
    e.preventDefault();
    const response = await fetch("./signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (response.status === 400 || !data) {
      window.alert("Invalid Details");
      console.log("Invalid Details");
    } else {
      window.alert(" Signin Successful");
      console.log("Signin Successful");
      history.push("/");
    }
  };

  return (
    <div>
      {/* <h1>this is Sign In</h1> */}
      <div className="mb-5 pb-5  ">
        <div className="text-center">
          <h1 className="display-4">Sign In</h1>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-10 col-lg-7  mx-auto">
              <form>
                <div className="mb-3 form-group">
                  <label htmlFor="Email" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Enter Your Email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="InputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="InputPassword1"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me.
                  </label>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="sign in"
                    onClick={signinUser}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
