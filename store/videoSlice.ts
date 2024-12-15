import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { video: VideoObject } = {
  video: {
    title: "",
    videoUrl: "",
    currentTime: 0,
    totalTime: 0,
    currentCaption: "",
  },
};

export const videoSlice = createSlice({
  name: "currentVideo",
  initialState,
  reducers: {
    setcurrentVideo: (state, action: PayloadAction<VideoObject>) => {
      state.video = action.payload;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.video.currentTime = Math.floor(action.payload);
    },
    setTotaltime: (state, action: PayloadAction<number>) => {
      state.video.totalTime = Math.floor(action.payload);
    },
    setCurrentCaption: (state, action: PayloadAction<string>) => {
      state.video.currentCaption = action.payload;
    },
    resetCurrentVideo: (state) => {
      state.video = initialState.video;
    },
  },
});

export const {
  setcurrentVideo,
  setCurrentTime,
  setTotaltime,
  setCurrentCaption,
  resetCurrentVideo,
} = videoSlice.actions;

export default videoSlice.reducer;
