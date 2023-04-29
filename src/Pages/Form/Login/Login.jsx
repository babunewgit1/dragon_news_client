import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../../../AuthProvidor/AuthProvidor";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { login } = useContext(MyContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handelLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email || !password) {
      setError("input field Can not be Empty");
      return;
    }

    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Login Successfull");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="login h-[80%] flex items-center justify-center">
      <div className="loginWrapper bg-white w-[33%] shadow-md p-16">
        <div className="loginHeading">
          <h3 className="text-2xl font-semibold text-center pb-10 border-b-2">
            Login your account
          </h3>
        </div>
        <div className="loginform">
          <form onSubmit={handelLogin}>
            <div className="inputBox mt-4">
              <label className="font-semibold block mb-3">Email address</label>
              <input
                name="email"
                className="block w-full border-0 outline-0 bg-[#F3F3F3] px-5 py-3"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="inputBox mt-4">
              <label className="font-semibold block mb-3">Password</label>
              <input
                name="password"
                autoComplete="off"
                className="block w-full border-0 outline-0 bg-[#F3F3F3] px-5 py-3"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <p className="text-red-600 font-bold my-4">{error}</p>
            <p className="text-green-500 font-bold my-4">{success}</p>
            <button
              className="bg-[#403F3F] block w-full mt-10 text-white font-semibold text-center py-4"
              type="submit"
            >
              Login
            </button>
            <div className="formPra">
              <p className="text-center font-semibold mt-10">
                Dont’t Have An Account ?
                <Link className="text-red-500" to="/form/register">
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
