import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import MainVedio from "../Components/MainVedio";
import SubVedio from "../Components/SubVedio";
import axios from "axios";
import Ad from "../Components/Ad";
import { useNavigate } from "react-router-dom";

function DisplayVideo() {
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

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="xl:p-12 md:p-6 xl:pt-20 md:pt-20 pt-20">
            <MainVedio />
          </div>

          <div className="flex flex-col gap-4 xl:pt-20 lg:pt-20 pt-4 pb-6">
            <Ad />
            {videos.map((i, index) => {
              return (
                <SubVedio
                  key={index}
                  videoImg={i.snippet.thumbnails.medium.url}
                  videoTitle={i.snippet.title}
                  videoChannel={i.snippet.channelTitle}
                  id2={i.id.videoId}
                  publishedAt={i.snippet.publishedAt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayVideo;
