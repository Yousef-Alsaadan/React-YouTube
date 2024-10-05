import React from "react";
import img from "../assets/ad.png";

function Ad() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row md:gap-3 roboto_font">
        <a target="_blank" href="www.linkedin.com/in/yousef-mohammed-b01685249">
          <div className="lg:rounded-lg">
            <img
              className="lg:rounded-lg object-contain lg:h-[186px] h-[336px] w-full lg:w-[186px]"
              src={img}
            />
          </div>
        </a>

        <div className="lg:p-0 p-6 md:w-[338px] h-full">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/yousef-mohammed-b01685249"
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="text-[#aaa] text-sm lg:mt-3 lg:max-w-60 md:w-full w-[186px]">
                <h1 className="text-white text-base font-medium cursor-pointer break-words">
                  Join me on LinkedIn
                </h1>

                <p className="cursor-pointer hover:text-white break-words">
                  Yousef Mohammed | يوسف محمد
                </p>

                <p className="cursor-pointer">FullStack Web Developer</p>
              </div>

              <button className="text-[#3EA6FF] flex gap-2 items-center bg-[#263850] hover:bg-[#515561] w-fit px-4 py-2 rounded-full">
                Visit site
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    focusable="false"
                    aria-hidden="true"
                    fill="#3EA6FF"
                  >
                    <path d="M21 21H3V3h9v1H4v16h16v-8h1v9zM15 3v1h4.32l-8.03 8.03.71.71 8-8V9h1V3h-6z"></path>
                  </svg>
                </span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ad;
