// src/redux/jobActions.ts
import { AppThunk } from "./store";
import {
  fetchImageStart,
  fetchImageSuccess,
  fetchImageFailure,
} from "./bgSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { getDatabase, get, ref, set, push } from "firebase/database";
import { BG } from "../typescripts/Interface";
export const fetchBg = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchImageStart());
    const bgRef = ref(db, "bg");
    const snapshot = await get(bgRef);
    const bgData = snapshot.val();
    if (bgData) {
      dispatch(fetchImageSuccess(bgData));
    } else {
      dispatch(fetchImageFailure("No background data available"));
    }
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchImageFailure(errorMessage));
  }
};
