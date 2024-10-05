import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const userData = JSON.parse(localStorage.getItem("user"));

  function Logout() {
    localStorage.clear("user");
    navigate("/signin");
  }

  function searchBtn() {
    if (searchTerm === "") {
      return;
    }
    localStorage.setItem("search", JSON.stringify({ search: searchTerm }));
    setSearchTerm("");
    if (location.pathname === "/search") {
      navigate("/");
    } else {
      navigate("/search");
    }
  }

  return (
    <div>
      <div className="navbar fixed bg-[#0F0F0F] text-white roboto_font z-10">
        <div className="navbar-start">
          <div className="lg:dropdown lg:dropdown-bottom hover:bg-[#282828] hover:rounded-full hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[#0F0F0F] z-[1] mt-3 w-52 shadow"
            >
              <div
                className="card-body"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <Link
                  to="/"
                  className="flex gap-4 items-center text-white py-2 px-4 hover:bg-[#535353]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>

                  <span>Home</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">
              <img
                height={30}
                width={82}
                src="https://freepnglogo.com/images/all_img/youtube-logo-png-image.png"
              />
              <sup className="roboto_font font-light text-[#aaa] text-[10px]">
                SA
              </sup>
            </Link>
          </div>
        </div>

        <div className="lg:navbar-center lg:flex gap-4 w-2/5 hidden">
          <label className="input input-bordered w-full border-[#303030] flex items-center gap-2 bg-transparent pr-0 rounded-full focus:border-[#065fd4] focus-within:border-[#065fd4]">
            <input
              type="text"
              className="grow placeholder:text-[#888888]"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div
              onClick={searchBtn}
              className="bg-[#ffffff14] h-full flex items-center p-4 px-6 rounded-e-full border border-solid border-[#303030] cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>
          </label>

          <div className="bg-[#272727] hover:bg-[#3D3D3D] cursor-pointer rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-mic-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
        </div>

        <div className="navbar-end">
          <div className="lg:dropdown lg:dropdown-end hover:bg-[#282828] hover:rounded-full hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                </svg>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[#282828] z-[1] mt-3 w-52 shadow"
            >
              <div
                className="card-body"
                style={{ paddingLeft: 0, paddingRight: 0 }}
              >
                <span className="text-white flex items-center py-2 px-4 gap-4 hover:bg-[#535353]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      aria-hidden="true"
                      fill="white"
                    >
                      <path d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"></path>
                    </svg>
                  </div>
                  Upload video
                </span>

                <span className="text-white flex items-center py-2 px-4 gap-4 hover:bg-[#535353]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="white"
                    >
                      <path d="M197-197q-54-55-85.5-127.5T80-480q0-84 31.5-156.5T197-763l57 57q-44 44-69 102t-25 124q0 67 25 125t69 101l-57 57Zm113-113q-32-33-51-76.5T240-480q0-51 19-94.5t51-75.5l57 57q-22 22-34.5 51T320-480q0 33 12.5 62t34.5 51l-57 57Zm170-90q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm170 90-57-57q22-22 34.5-51t12.5-62q0-33-12.5-62T593-593l57-57q32 32 51 75.5t19 94.5q0 50-19 93.5T650-310Zm113 113-57-57q44-44 69-102t25-124q0-67-25-125t-69-101l57-57q54 54 85.5 126.5T880-480q0 83-31.5 155.5T763-197Z" />
                    </svg>
                  </div>
                  Go live
                </span>

                <span className="text-white flex items-center py-2 px-4 gap-4 hover:bg-[#535353]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      focusable="false"
                      aria-hidden="true"
                      fill="white"
                    >
                      <path d="M15.01,7.34l1.64,1.64L8.64,17H6.99v-1.64L15.01,7.34 M15.01,5.92l-9.02,9.02V18h3.06l9.02-9.02L15.01,5.92L15.01,5.92z M17.91,4.43l1.67,1.67l-0.67,0.67L17.24,5.1L17.91,4.43 M17.91,3.02L15.83,5.1l3.09,3.09L21,6.11L17.91,3.02L17.91,3.02z M21,10h-1 v10H4V4h10V3H3v18h18V10z"></path>
                    </svg>
                  </div>
                  Create post
                </span>
              </div>
            </div>
          </div>

          <div className="lg:dropdown lg:dropdown-end hover:bg-[#282828] hover:rounded-full hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                </svg>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[#282828] z-[1] mt-3 w-96 h-[85vh] shadow"
            >
              <div
                className="card-body"
                style={{ padding: "0.25rem 0.25rem 1rem 0" }}
              >
                <div className="flex items-center justify-between border-b border-b-[#ffffff33]">
                  <span className="p-4 text-base">Notifications</span>

                  <div className="hover:bg-[#535353] hover:rounded-full p-3 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-gear"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                    </svg>
                  </div>
                </div>

                <div className="h-full w-full grid place-items-center text-[#717171]">
                  <div className="flex flex-col justify-center items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enableBackground="new 0 0 24 24"
                      height="94"
                      viewBox="0 0 24 24"
                      width="94"
                      focusable="false"
                      aria-hidden="true"
                      fill="#717171"
                    >
                      <path d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v5.47l-2 1.88V18h14v-.23z"></path>
                    </svg>
                    <div className="flex flex-col justify-center items-center">
                      <h1 className="font-medium text-base">
                        Your notifications live here
                      </h1>
                      <p className="text-sm font-normal text-center w-9/12">
                        Subscribe to your favorite channels to get notified
                        about their latest videos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:dropdown lg:dropdown-end hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#282828] rounded-box z-[1] mt-3 w-52 p-2 shadow"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              <li className={!userData ? `hidden` : ``}>
                <button
                  onClick={Logout}
                  className="text-white flex items-center py-2 px-4 gap-4 hover:bg-[#535353]"
                >
                  Logout
                </button>
              </li>

              <li className={!userData ? `` : `hidden`}>
                <Link
                  to="/signin"
                  className="text-white flex items-center py-2 px-4 gap-4 hover:bg-[#535353]"
                >
                  Signin
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
              </svg>
            </div>

            <div
              tabIndex={0}
              className="card card-compact rounded-full dropdown-content bg-[#282828] z-[1] mt-3 w-80 shadow"
            >
              <div className="card-body" style={{ padding: 0 }}>
                <label className="input input-bordered w-full border-[#303030] flex items-center gap-2 bg-transparent pr-0 rounded-full focus:border-[#065fd4] focus-within:border-[#065fd4]">
                  <input
                    type="text"
                    className="grow placeholder:text-[#888888]"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div
                    onClick={searchBtn}
                    className="bg-[#ffffff14] h-full flex items-center p-4 rounded-e-full border border-solid border-[#303030] cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="white"
                    >
                      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                    </svg>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:hidden dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>
                </svg>
              </button>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-[#282828] z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <div className="flex items-center justify-between border-b border-b-[#ffffff33] pb-1">
                  <div className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" />
                    </div>
                  </div>

                  <button
                    onClick={Logout}
                    className={!userData ? `hidden` : ``}
                  >
                    Logout
                  </button>

                  <Link to="/signin" className={!userData ? `` : `hidden`}>
                    Signin
                  </Link>
                </div>

                <div className="indicator gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M360-320h80v-120h120v-80H440v-120h-80v120H240v80h120v120ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Zm0-80h480v-480H160v480Zm0 0v-480 480Z" />
                  </svg>

                  <span>Create</span>
                </div>

                <div className="indicator gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
                  </svg>

                  <span>Notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
