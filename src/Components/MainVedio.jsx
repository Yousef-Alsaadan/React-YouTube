import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Comments from "./Comments";

function MainVedio() {
  const [more, setMore] = useState("hidden");
  const [commentDis, setCommentDis] = useState("hidden");
  const [mobileComment, setMobileComment] = useState("hidden");
  const [comments, setComments] = useState("");
  const [comment, setComment] = useState([]);
  const [comment2, setComment2] = useState([]);

  const [video, setVideo] = useState([]);
  const [videoDetail, setVideoDetail] = useState([]);

  let { id } = useParams();
  const navigate = useNavigate();

  const userData = JSON.parse(localStorage.getItem("user"));

  const description = video.description || "";
  const title = video.title || "";

  const publishedDate = new Date(video.publishedAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const search = JSON.parse(localStorage.getItem("search"));

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${search.search}&type=video&key=AIzaSyB2NGnG2fMHcGLIvxzGRRy1wgPtvcYtYRs`
      )
      .then(function (response) {
        const user = response.data.items.find((i) => i.id.videoId === id);
        if (user) {
          setVideo(user.snippet);
        }
        console.log(search);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=AIzaSyB2NGnG2fMHcGLIvxzGRRy1wgPtvcYtYRs`
      )
      .then(function (response) {
        setVideoDetail(response.data.items[0].statistics);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${id}&key=AIzaSyB2NGnG2fMHcGLIvxzGRRy1wgPtvcYtYRs`
      )
      .then(function (response) {
        setComment2(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("https://66f02a49f2a8bce81be52e94.mockapi.io/comments")
      .then(function (response) {
        setComment(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function ClickedComment() {
    if (!userData) {
      navigate("/signin");
    }

    const commentdisBtn = commentDis === "hidden" ? "" : "hidden";
    setCommentDis(commentdisBtn);
  }

  function SendCommet() {
    if (comments === "") {
      return;
    }

    axios
      .post("https://66f02a49f2a8bce81be52e94.mockapi.io/comments", {
        user: userData.user,
        comm: comments,
        img: "https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj",
        commId: id,
      })
      .then(function (response) {
        setComments("");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function MobileComment() {
    const mobileComm = mobileComment === "hidden" ? "" : "hidden";
    setMobileComment(mobileComm);
  }

  return (
    <div>
      <div className="flex flex-col md:gap-3 roboto_font">
        <div className="md:rounded-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            className="md:rounded-2xl object-cover md:h-[526px] h-[336px] w-full xl:w-[935px]"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="md:p-0 p-6 flex flex-col gap-4 justify-between xl:w-[935px] lg:w-[526px]">
          <h1 className="text-white text-xl font-bold break-words">
            {title.slice(0, 125)}
            {title.length > 125 ? "..." : ""}
          </h1>

          <div className="flex gap-4 justify-between">
            <div className="flex items-center gap-4">
              <div role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>

              <div className="text-[#aaa] text-base">
                <p className="text-white cursor-pointer hover:text-white break-words font-medium">
                  {video.channelTitle}
                </p>

                {/* <p className="text-xs font-normal">subcsribe</p> */}
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

          <div className="bg-[#272727] flex flex-col gap-8 text-white rounded-2xl p-4">
            <div className="text-sm">
              <p className="font-medium">
                {videoDetail.viewCount} views • <span>{publishedDate}</span>
              </p>

              <div className="break-words md:max-w-[80%]">
                {more === "hidden" ? description.slice(0, 125) : description}

                <span className={`${more}`}>{description.slice(125)}</span>

                <button
                  className={more === "hidden" ? "" : "hidden"}
                  onClick={() => {
                    setMore("");
                  }}
                >
                  ...more
                </button>

                <div className={`${more} flex items-center gap-4 my-8`}>
                  <div
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>

                  <div className="text-[#aaa] text-base max-w-60">
                    <p className="text-white cursor-pointer hover:text-white break-words font-medium">
                      {video.channelTitle}
                    </p>

                    {/* <p className="text-xs font-normal">subcsribe</p> */}
                  </div>
                </div>

                <button
                  className={`${more}`}
                  onClick={() => {
                    const moreBtn = more === "" ? "hidden" : "";
                    setMore(moreBtn);
                  }}
                >
                  Show less
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4">
            <h1 className="font-bold text-white text-xl">
              {comment2.length === 0 ? "0 Comment" : `${comment.length + comment2.length}  Comment`}
            </h1>

            <div className="flex gap-4">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" />
                </div>
              </div>

              <div className="text-white w-full flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className={`pb-1 input p-0 rounded-none border-b border-b-[#b6b6b6] w-full bg-transparent placeholder:text-[#b6b6b6] focus-within:border-b-white focus:border-b-white focus-within:border-b-2 focus:border-b-2`}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  onClick={ClickedComment}
                />

                <div className={`${commentDis} place-self-end`}>
                  <button
                    onClick={() => {
                      const commentdisBtn =
                        commentDis === "hidden" ? "" : "hidden";
                      setCommentDis(commentdisBtn);
                      setComments("");
                    }}
                    className="btn min-h-10 h-10 btn-ghost rounded-full hover:bg-[#3F3F3F] text-[#fff]"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={SendCommet}
                    className={
                      comments === ""
                        ? "btn cursor-default ml-4 min-h-10 h-10 border-none rounded-full bg-[#282828] text-[#b6b6b6] hover:bg-[#282828]"
                        : `btn ml-4 min-h-10 h-10 btn-primary border-none rounded-full bg-[#65B8FF] text-[#282828] hover:bg-[#81c4ff]`
                    }
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-4">
              {comment.map((i, index) => {
                return comment != [] ? (
                  i.commId === id ? (
                    <Comments
                      key={index}
                      channel={i.user}
                      comment={i.comm}
                      img={i.img}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                );
              })}

              {comment2.map((i, index) => {
                return comment != [] ? (
                  <Comments
                    key={index}
                    channel={
                      i.snippet.topLevelComment.snippet.authorDisplayName
                    }
                    comment={i.snippet.topLevelComment.snippet.textDisplay}
                    img={
                      i.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </div>

          <div
            className="bg-[#272727] md:hidden flex flex-col gap-8 text-white rounded-2xl p-4"
            onClick={MobileComment}
          >
            <h1 className="text-xs text-white font-normal">
              {comment2.length === 0 ? "Comment 0" : `Comment ${comment.length + comment2.length}`}
            </h1>

            <div className="flex flex-col-reverse gap-4">
              {comment.length > 0 ? (
                <Comments
                  key={0}
                  channel={comment[0].user}
                  comment={comment[0].comm}
                  img={comment[0].img}
                />
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            className={`${mobileComment} fixed bottom-0 w-full left-0 bg-[#272727] flex flex-col gap-8 text-white rounded-t-2xl p-4 z-20 h-[50%] overflow-scroll`}
          >
            <div className="flex justify-center">
              <button
                className={`h-2 w-12 bg-[#3F3F3F] rounded-full`}
                onClick={MobileComment}
              ></button>
            </div>

            <div className="flex gap-4">
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://yt3.ggpht.com/a/default-user=s88-c-k-c0x00ffffff-no-rj" />
                </div>
              </div>

              <div className="text-white w-full flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className={`pb-1 input p-0 rounded-none border-b border-b-[#b6b6b6] w-full bg-transparent placeholder:text-[#b6b6b6] focus-within:border-b-white focus:border-b-white focus-within:border-b-2 focus:border-b-2`}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  onClick={ClickedComment}
                />

                <div className={`${commentDis} place-self-end`}>
                  <button
                    onClick={() => {
                      const commentdisBtn =
                        commentDis === "hidden" ? "" : "hidden";
                      setCommentDis(commentdisBtn);
                      setComments("");
                    }}
                    className="btn min-h-10 h-10 btn-ghost rounded-full hover:bg-[#3F3F3F] text-[#fff]"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={SendCommet}
                    className={
                      comments === ""
                        ? "btn cursor-default ml-4 min-h-10 h-10 border-none rounded-full bg-[#282828] text-[#b6b6b6] hover:bg-[#282828]"
                        : `btn ml-4 min-h-10 h-10 btn-primary border-none rounded-full bg-[#65B8FF] text-[#282828] hover:bg-[#81c4ff]`
                    }
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse gap-4 overflow-scroll">
              {comment.map((i, index) => {
                return comment != [] ? (
                  i.commId === id ? (
                    <Comments
                      key={index}
                      channel={i.user}
                      comment={i.comm}
                      img={i.img}
                    />
                  ) : (
                    ""
                  )
                ) : (
                  ""
                );
              })}

              {comment2.map((i, index) => {
                return comment != [] ? (
                  <Comments
                    key={index}
                    channel={
                      i.snippet.topLevelComment.snippet.authorDisplayName
                    }
                    comment={i.snippet.topLevelComment.snippet.textDisplay}
                    img={
                      i.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                  />
                ) : (
                  ""
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainVedio;
