import React, { MouseEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { setcurrentVideo } from "@/store/videoSlice";
import CardWrapper from "./CardWrapper";

type Props = {};

const AddVideo = (props: Props) => {
  const [title, setTitle] = useState<string>("");
  const [videoUrl, setVideoUrl] = useState<string>("");
  const dispatch = useDispatch();

  const currentVideoHandler: MouseEventHandler = () => {
    if (title && videoUrl) {
      let videoObj: VideoObject = {
        title,
        videoUrl,
        currentTime: 0,
        totalTime: 0,
        currentCaption: "",
      };
      dispatch(setcurrentVideo(videoObj));
      setTitle("");
      setVideoUrl("");
    }
  };
  return (
    <CardWrapper classname="mb-8 lg-mb-0">
      <div className="w-80 p-5">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold">New Video</p>
          <div className="flex justify-between my-2 w-full">
            <label className="font-medium text-lg" htmlFor="videoTitle">
              Title:
            </label>
            <input
              type="text"
              name="videoTitle"
              id="videoTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="sketch_border"
            />
          </div>
          <div className="flex justify-between w-full">
            <label className="font-medium text-lg" htmlFor="videoUrl">
              Url:
            </label>
            <input
              type="text"
              name="videoUrl"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="sketch_border"
            />
          </div>

          <button
            className="sketch_border sketch_btn my-2"
            onClick={currentVideoHandler}
          >
            Add video
          </button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default AddVideo;
