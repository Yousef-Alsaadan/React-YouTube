import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import VideoCards from "../Components/VideoCards";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Result() {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (!userData) {
      navigate("/signin");
    }

    const search = JSON.parse(localStorage.getItem("search"));

    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.search}&type=video&key=AIzaSyB2NGnG2fMHcGLIvxzGRRy1wgPtvcYtYRs`
      )
      .then(function (response) {
        setVideos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className="bg-[#0F0F0F]">
        <Navbar />

        <div className="md:p-6 md:pt-20 pt-20 grid xl:grid-cols-4 lg:place-items-center md:grid-cols-2 grid-cols-1 gap-4 gap-y-8">
          {videos.map((i, index) => {
            return (
              <VideoCards
                key={index}
                videoImg={i.snippet.thumbnails.medium.url}
                videoTitle={i.snippet.title}
                videoChannel={i.snippet.channelTitle}
                id={i.id.videoId}
                publishedAt={i.snippet.publishedAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Result;
