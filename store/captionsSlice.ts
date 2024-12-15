import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { captions: Array<CaptionObject> } = {
  captions: [
    {
      id: "",
      caption: "",
      startTime: 0,
      endTime: 0,
    },
  ],
};

export const captionsSlice = createSlice({
  name: "allCaptions",
  initialState,
  reducers: {
    setCaptions: (state, action: PayloadAction<Array<CaptionObject>>) => {
      state.captions = action.payload;
    },
    updateCaptions: (state, action: PayloadAction<CaptionObject>) => {
      state.captions = [...state.captions, action.payload].sort(
        (a, b) => a.startTime - b.startTime
      );
    },
    resetCaptions: (state) => {
      state.captions = initialState.captions;
    },
  },
});

export const { setCaptions, updateCaptions, resetCaptions } =
  captionsSlice.actions;

export default captionsSlice.reducer;
