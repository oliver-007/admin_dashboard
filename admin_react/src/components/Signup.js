import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, cpassword } = user;
    const response = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        cpassword: cpassword,
      }),
    });
    const data = await response.json();
    if (response.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration Successful");
      console.log("Registration Successful");
      history.push("/signin");
    }
  };

  return (
    <>
      <div className="mb-5 pb-5  ">
        <div className="text-center">
          <h1 className="display-4">Sign Up</h1>
          <hr className="w-25 mx-auto " />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6 col-10 col-lg-7  mx-auto">
              <form method="POST">
                <div className="mb-3 form-group">
                  <label htmlFor="firstname" className="form-label">
                    First Name :
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="form-control"
                    value={user.firstname}
                    onChange={handleInputs}
                    placeholder="Enter Your First Name"
                    id="firstname"
                  />
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="Lname" className="form-label">
                    Last Name :
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="form-control"
                    value={user.lastname}
                    onChange={handleInputs}
                    placeholder="Enter Your Last Name"
                    id="lastname"
                  />
                </div>

                <div className="mb-3 form-group">
                  <label htmlFor="email" className="form-label">
                    Email :
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter Email Address"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    value={user.password}
                    onChange={handleInputs}
                    id="password"
                  />
                </div>
                <div className="mb-3 form-group">
                  <label htmlFor="cpassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    className="form-control"
                    value={user.cpassword}
                    onChange={handleInputs}
                    id="cpassword"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    value="sign up"
                    onClick={PostData}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
