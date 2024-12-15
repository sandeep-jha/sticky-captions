import { useAppSelector } from "@/store/hooks";
import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useDispatch } from "react-redux";
import {
  setCurrentCaption,
  setCurrentTime,
  setTotaltime,
} from "@/store/videoSlice";

type Props = {};

const Reactplayer = (props: Props) => {
  const captions = useAppSelector((state) => state.allCaptions.captions);
  const { videoUrl, currentTime, currentCaption } = useAppSelector(
    (state) => state.currentVideo.video
  );
  const dispatch = useDispatch();
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let totalTime: number = playerRef?.current?.getDuration();
    console.log(totalTime);
    if (videoUrl && totalTime) dispatch(setTotaltime(totalTime));
  }, [playerRef?.current?.totalTime]);

  useEffect(() => {
    let caption: string = captions.filter(
      (ele: CaptionObject) =>
        currentTime >= ele.startTime && currentTime <= ele.endTime
    )[0]?.caption;
    dispatch(setCurrentCaption(caption));
  }, [currentTime, captions]);

  return (
    <div className="mr-4 h-full w-[350px] sm:w-[450px] md:w-[650px]">
      {videoUrl ? (
        <>
          <ReactPlayer
            className="reactPlayer"
            ref={playerRef}
            url={videoUrl}
            controls={true}
            width={"100%"}
            onProgress={(progress) =>
              dispatch(setCurrentTime(progress.playedSeconds))
            }
          />
          <div className="bg-white sketch_border border-t-0 mx-0 text-justify w-full">
            {currentCaption}
          </div>
        </>
      ) : (
        <div className="w-fit md:w-[650px] h-[50%] animated-gradient text-foreground flex justify-center items-center text-2xl px-10 sketch_border">
          enter title and URL in Add video section or use sample video and enjoy
          watching.
        </div>
      )}
    </div>
  );
};

export default Reactplayer;
