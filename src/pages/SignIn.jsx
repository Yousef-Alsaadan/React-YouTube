import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [errorMess, setErrorMess] = useState(
    "border-[#b6b6b6] focus:border-[#A8C7FA] focus-within:border-[#A8C7FA] focus:border-[2px]"
  );
  const [mess, setMess] = useState([]);

  const [sign, setSign] = useState([]);
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://66f02a49f2a8bce81be52e94.mockapi.io/users")
      .then(function (response) {
        setSign(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const submit = () => {
    if (userName === "" || pass === "") {
      errorLog("Please fill in all fields!");
      return;
    }

    const user = sign.find((data) => data.user === userName);
    if (!user) {
      errorLog("Username is not found!");
      return;
    }

    if (user.pass !== pass) {
      errorLog("The password is wrong!");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ user: user.user }));
    localStorage.setItem("search", JSON.stringify({ search: "" }));

    navigate("/");
  };

  const errorLog = (text) => {
    const errorMessage =
      errorMess ===
      "border-[#b6b6b6] focus:border-[#A8C7FA] focus-within:border-[#A8C7FA] focus:border-[2px]"
        ? "input-error"
        : "input-error";
    setErrorMess(errorMessage);
    setMess(text);
  };

  return (
    <div>
      <div className="bg-[#1E1F20] h-screen w-screen flex items-center justify-center google_font text-white">
        <div className="bg-[#0E0E0E] lg:w-[1200px] lg:h-3/5 w-full h-full mx-auto lg:rounded-[2rem] flex lg:flex-row flex-col lg:justify-between p-8 gap-6">
          <div className="flex flex-col gap-6">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 40 48"
              aria-hidden="true"
              jsname="jjf7Ff"
            >
              <path
                fill="#4285F4"
                d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"
              ></path>
              <path
                fill="#34A853"
                d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"
              ></path>
              <path
                fill="#FABB05"
                d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"
              ></path>
              <path
                fill="#E94235"
                d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"
              ></path>
            </svg>

            <h1 className="font-normal text-4xl">Sign in</h1>

            <p className="font-normal text-base">to continue to YouTube</p>
          </div>

          <div className="flex flex-col items-center gap-12 justify-center lg:w-1/2">
            <div className="w-full flex flex-col gap-4">
              <input
                type="text"
                placeholder="Username"
                className={`input py-8 input-bordered ${errorMess} w-full bg-transparent placeholder:text-[#b6b6b6] rounded-[5px]`}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />

              <input
                type="password"
                placeholder="Enter your password"
                className={`input py-8 input-bordered ${errorMess} w-full bg-transparent placeholder:text-[#b6b6b6] rounded-[5px`}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />

              <p className="text-error">{mess}</p>
            </div>

            <p className="text-sm text-[#c4c7c5]">
              Not your computer? Use Guest mode to sign in privately.{" "}
              <span className="text-[#a8c7fa] cursor-pointer hover:underline">
                Learn more about using Guest mode
              </span>
            </p>

            <div className="lg:self-end lg:w-auto flex justify-between w-full">
              <Link
                to="/createaccount"
                className="btn btn-ghost rounded-full hover:bg-[#141517] text-[#a8c7fa]"
              >
                Create account
              </Link>

              <button
                onClick={submit}
                className="btn btn-primary border-none rounded-full bg-[#a8c7fa] text-[#062e6f] hover:bg-[#B6D0FB]"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
