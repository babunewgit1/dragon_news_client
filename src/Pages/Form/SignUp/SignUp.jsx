import React, { useContext, useState } from "react";
import { MyContext } from "../../../AuthProvidor/AuthProvidor";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [accept, setAccept] = useState(false);
  const { createUser } = useContext(MyContext);

  const handelSingUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setError("Please use atlest 6 letter");
      return;
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please use 1 uppercase letter");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess("Register successfull");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handelAccept = (e) => {
    setAccept(e.target.checked);
  };

  return (
    <div className="login h-[90%] flex items-center justify-center">
      <div className="loginWrapper bg-white w-[33%] shadow-md p-16">
        <div className="loginHeading">
          <h3 className="text-2xl font-semibold text-center pb-10 border-b-2">
            Register your account
          </h3>
        </div>
        <div className="loginform">
          <form onSubmit={handelSingUp}>
            <div className="inputBox mt-4">
              <label className="font-semibold block mb-3">Your Name</label>
              <input
                name="name"
                className="block w-full border-0 outline-0 bg-[#F3F3F3] px-5 py-3"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="inputBox mt-4">
              <label className="font-semibold block mb-3">Photo URL</label>
              <input
                name="photo"
                className="block w-full border-0 outline-0 bg-[#F3F3F3] px-5 py-3"
                type="text"
                placeholder="Enter your Photo URL"
              />
            </div>
            <div className="inputBox mt-4">
              <label className="font-semibold block mb-3">Email</label>
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
            <div className="checkboxform mt-3">
              <div className="form-control">
                <label className="label justify-start gap-4 cursor-pointer">
                  <input
                    onChange={handelAccept}
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">
                    Accept <strong>Term</strong> & <strong>Conditions</strong>
                  </span>
                </label>
              </div>
            </div>
            <p className="text-red-600 font-bold my-4">{error}</p>
            <p className="text-green-500 font-bold my-4">{success}</p>
            <button
              className="bg-[#403F3F] block w-full mt-10 text-white font-semibold text-center py-4"
              type="submit"
              disabled={!accept}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
