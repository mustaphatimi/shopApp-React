import React, { useContext, useState } from "react";
import { SignInContext } from "../contexts/SignInContext";
import { useFormik } from "formik";
import * as Yup from "yup";

import { IoMdCloseCircle } from "react-icons/io";

const SignIn = () => {
  const { isSignInOpen, handleCloseSignIn } = useContext(SignInContext);
  const [showWrongPassword, setShowWrongPassword] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required").min(2, "Username must be at least 2 characters"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch("https://fakestoreapi.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Login success:", data.token);
        //   document.cookie = `authToken=${data.token}; path=/; secure; HttpOnly`; //Not using this (HttpOnly) as i'm testing locally
          document.cookie = `authToken=${data.token}; path=/; secure`;
          handleCloseSignIn();
          resetForm();
        } else {
          const errorData = await response.json();
          console.error("Login failed:", errorData);
          setShowWrongPassword(true);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setShowWrongPassword(true);
      }
    },
  });

  const handleSignInClick = () => {
    handleCloseSignIn();
  };

  return (
    <>
      {isSignInOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-40 z-10"
          onClick={handleSignInClick}
        ></div>
      )}

      <div
        className={`${
          isSignInOpen ? "left-1/2 transform -translate-x-1/2" : "-left-full"
        }  border-b  w-full bg-white fixed top-3 sm:top-1/4 shadow-2xl sm:w-[380px] transition-all duration-300 z-20 rounded-lg`}
      >
        <div className="flex items-center justify-between py-4 border-b px-4 lg:px-6">
          <div className="text-base font-semibold">Sign in</div>
          <div
            onClick={handleSignInClick}
            className="cursor-pointer flex justify-center"
          >
            <IoMdCloseCircle className="text-2xl" />
          </div>
        </div>

        <div className="px-4 lg:px-6 py-4">
          <h3 className="text-[17px] sm:text-xl font-semibold mb-5">
            Welcome back
          </h3>

          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm  mb-1" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full border p-2 rounded"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-sm  mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border p-2 rounded"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            <div
              onClick={() => {
                alert("Noting like that for now. Smiles");
              }}
              className="text-sm mb-2"
            >
              <span className="underline cursor-pointer hover:no-underline">
                Forgot Password?
              </span>
            </div>

            {showWrongPassword && (
              <div className="rounded-sm my-3">
                <p className="bg-[#e4584e24] text-[#E4584E] px-3 py-2 text-xs">
                  Please make sure your username and password combination is correct
                </p>
              </div>
            )}

            <button
              type="submit"
              className={`${
                formik.isValid
                  ? "bg-black hover:bg-opacity-90"
                  : "bg-gray-400 cursor-not-allowed"
              } text-white py-2 px-4 w-full rounded disabled:opacity-80 `}
              disabled={!formik.isValid}
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="px-4 lg:px-6 py-4  text-center border-t text-black text-sm">
          New to myshup?{" "}
          <span
            className="opacity-100 underline hover:no-underline text-black cursor-pointer font-medium"
            onClick={() => {
              alert("Noting like that for now. Smiles");
            }}
          >
            Create Account
          </span>
        </div>
      </div>
    </>
  );
};

export default SignIn;
