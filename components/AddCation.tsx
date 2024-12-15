import { updateCaptions } from "@/store/captionsSlice";
import React, { MouseEventHandler, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CardWrapper from "./CardWrapper";
import { useAppSelector } from "@/store/hooks";
import formatSeconds from "@/utils/UtilityFunctions";

type Props = {};

const AddCation = (props: Props) => {
  const [newCaption, setNewCaption] = useState<string>("");
  const { currentTime, totalTime } = useAppSelector(
    (state) => state.currentVideo.video
  );
  const [startTime, setStartTime] = useState<number>(currentTime);
  const [endTime, setEndtTime] = useState<number>(totalTime);
  const [maxTime, setMaxTime] = useState<number>(totalTime);

  const dispatch = useDispatch();

  const addCaptionHandler: MouseEventHandler = () => {
    let captionObj: CaptionObject = {
      caption: newCaption,
      startTime,
      endTime,
    };
    dispatch(updateCaptions(captionObj));
    setNewCaption("");
    setStartTime(currentTime);
    setEndtTime(currentTime);
  };

  useEffect(() => {
    // console.log(totalTime);

    setMaxTime(totalTime);
  }, [totalTime]);

  return (
    <CardWrapper classname="mb-8 lg-mb-0">
      <div className="flex flex-col items-center w-80 p-5">
        <p className="text-2xl font-bold">New Caption</p>
        <div className="flex justify-between my-2 w-full">
          <label htmlFor="newCaption">Caption:</label>
          <textarea
            name="newCaption"
            id="newCaption"
            value={newCaption}
            onChange={(e) => setNewCaption(e.target.value)}
            className="border-2 border-solid border-black"
          />
        </div>
        <div className="w-full flex justify-between my-2">
          <div>
            <label className="mr-2" htmlFor="startTime">
              Start: {formatSeconds(startTime || currentTime)}
            </label>
            <input
              type="range"
              name="startTime"
              id="startTime"
              min={currentTime}
              max={maxTime}
              value={startTime}
              onChange={(e) => setStartTime(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="startTime">
              End: {formatSeconds(endTime)}
            </label>
            <input
              className="slider"
              type="range"
              name="endTime"
              id="endTime"
              min={startTime}
              max={maxTime}
              value={endTime}
              onChange={(e) => setEndtTime(parseInt(e.target.value))}
            />
          </div>
        </div>
        <button
          className="sketch_border sketch_btn my-2"
          onClick={addCaptionHandler}
        >
          Add Caption
        </button>
      </div>
    </CardWrapper>
  );
};

export default AddCation;
