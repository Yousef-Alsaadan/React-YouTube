import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div className="bg-[#F1F1F1] flex flex-col justify-center items-center gap-4 h-screen">
        <div>
          <img src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png" />
        </div>

        <div className="text-center">
          <p>This page isn't available. Sorry about that.</p>
          <p>Try searching for something else.</p>
        </div>

        <div className="flex gap-4 items-center">
          <div className="">
            <Link to="/">
              <div className="flex items-end">
                <img src="https://www.gstatic.com/youtube/img/branding/youtubelogo/1x/youtubelogo_30.png" />
                <sub className="text-[#167ac6] text-[11px]">SA</sub>
              </div>
            </Link>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="text-base h-7 border border-solid border-[#ccc] pl-1"
            />

            <Link
              to="/"
              className="bg-[#f8f8f8] border border-solid border-[#ccc] h-7 px-8 flex items-center transform hover:bg-[#f0f0f0]"
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#9A9A9A"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
