import React from "react";

function Comments(props) {
  return (
    <div>
      <div className="flex gap-4 justify-between">
        <div className="flex items-center gap-4">
          <div role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={props.img} />
            </div>
          </div>

          <div className="text-[#aaa] text-base max-w-[50rem]">
            <p className="text-white cursor-pointer hover:text-white break-words font-medium">
              {props.channel}
            </p>

            <p className="text-xs text-white font-normal break-words">
              {props.comment}
            </p>
          </div>
        </div>

        <div className="lg:pr-8 mt-3 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="white"
          >
            <path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Comments;
