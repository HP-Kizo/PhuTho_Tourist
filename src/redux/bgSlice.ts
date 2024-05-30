import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface BGState {
  backgroundUrl: string;
  images: string[];
  loading: boolean;
  error: string | null;
}
const initialState: BGState = {
  backgroundUrl: "",
  images: [],
  loading: false,
  error: null,
};

const ImageSlice = createSlice({
  name: "Images",
  initialState,
  reducers: {
    fetchImageStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchImageSuccess(state, action: PayloadAction<BGState>) {
      state.backgroundUrl = action.payload.backgroundUrl;
      state.images = action.payload.images;
      state.loading = false;
    },
    fetchImageFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchImageStart, fetchImageSuccess, fetchImageFailure } =
  ImageSlice.actions;

export default ImageSlice.reducer;
