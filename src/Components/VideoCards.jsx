import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function VideoCards(props) {
  const [videoDetail, setVideoDetail] = useState([]);

  const publishedDate = new Date(props.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${props.id}&key=AIzaSyB2NGnG2fMHcGLIvxzGRRy1wgPtvcYtYRs`
      )
      .then(function (response) {
        setVideoDetail(response.data.items[0].statistics);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="flex flex-col md:gap-3 roboto_font">
        <Link to={`/video/${props.id}`}>
          <div className="md:rounded-3xl">
            <img
              className="md:rounded-3xl object-cover h-[190px] w-full lg:w-[338px]"
              src={props.videoImg}
            />
          </div>
        </Link>

        <div className="md:p-0 p-6 flex justify-between h-[150px] md:w-[338px]">
          <Link to={`/video/${props.id}`}>
            <div className="flex gap-4">
              <div role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>

              <div className="text-[#aaa] text-sm lg:mt-3 max-w-60">
                <h1 className="text-white text-base font-medium cursor-pointer break-words">
                  {props.videoTitle.slice(0, 70)}
                  {props.videoTitle.length > 70 ? "..." : ""}
                </h1>

                <p className="cursor-pointer hover:text-white break-words">
                  {props.videoChannel}
                </p>

                <p className="cursor-pointer">
                  {videoDetail.viewCount} views • <span>{publishedDate}</span>
                </p>
              </div>
            </div>
          </Link>

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
    </div>
  );
}

export default VideoCards;
