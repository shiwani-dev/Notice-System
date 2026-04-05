import React from "react";

function Login() {
  return (
    <div>
      <div className="text-xl justify-self-center shadow-2xl p-10 rounded-2xl w-100 h-fit m-30">
        <form onSubmit="submit" className="justify-center">
          <legend className="text-4xl m-4">
            <b>Login</b>
          </legend>
          <label>Name:</label>
          <br />
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="text"
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            className="border rounded-xl p-2 mb-4 w-full"
            type="text"
            placeholder="eg:yourname@gmail.com"
          />
          <br />
          <label>Password:</label>
          <br />
          <input className="border rounded-xl p-2 mb-4 w-full" type="text" />
          <br />
          <div className="flex justify-center ">
            <button
              className="p-4 w-30 bg-emerald-500 rounded-xl hover:shadow-2xl hover:bg-emerald-400 text-white"
              type="submit"
            >
              Login
            </button>
            <br />
          </div>
          <p className="text-sm text-center mt-2"> Haven't signed up yet? Sign up</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
