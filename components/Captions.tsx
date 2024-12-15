import { setCaptions } from "@/store/captionsSlice";
import { useAppSelector } from "@/store/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardWrapper from "./CardWrapper";
import { setcurrentVideo } from "@/store/videoSlice";
import { seedCaptions, seedVideo } from "@/assets/seedData";
import formatSeconds from "@/utils/UtilityFunctions";

type Props = {};

const Captions = (props: Props) => {
  const dispatch = useDispatch();
  const captions = useAppSelector((state) => state.allCaptions.captions);
  const { videoUrl } = useAppSelector((state) => state.currentVideo.video);

  const sampleVideoHandler = () => {
    dispatch(setcurrentVideo(seedVideo));
    dispatch(setCaptions(seedCaptions));
  };

  return (
    <CardWrapper classname="mt-8 xl:mt-0 w-fit">
      <div className="p-5 w-fit">
        {videoUrl ? (
          <div>
            <p className="text-2xl font-bold w-full flex justify-center mx-auto">
              All Captions
            </p>
            {captions.map(
              (
                { id, caption, startTime, endTime }: CaptionObject,
                i: number
              ) => {
                return (
                  caption && (
                    <div key={i} className="my-2">
                      <p className="w-fit timestamp">
                        {formatSeconds(startTime == -1 ? 0 : startTime)}
                      </p>
                      <p className="max-w-[350px]">{caption}</p>
                    </div>
                  )
                );
              }
            )}
          </div>
        ) : (
          <div className="px-4 flex flex-col items-center">
            <p className="text-2xl font-bold">Sample Video</p>
            <p className="my-2 text-lg font-medium">Title: Piya Tose Naina</p>
            <p className="text-lg font-medium">
              Url: https://youtu.be/OjOgtPm43AE?si=7bpJYzBNz7_8X-Wv
            </p>
            <button
              className="sketch_border sketch_btn my-2"
              onClick={sampleVideoHandler}
            >
              Use Sample Video
            </button>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default Captions;
