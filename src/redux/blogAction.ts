// src/redux/jobActions.ts
import { AppThunk } from "./store";
import {
  fetchBlogsStart,
  fetchBlogsSuccess,
  fetchBlogsFailure,
} from "./blogSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { getDatabase, get, ref, set, push } from "firebase/database";
import { Blog } from "../typescripts/Interface";

export const fetchBlogs = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchBlogsStart());
    const dbRef = ref(db, "dataBlogs");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const dataBlogs = snapshot.val();

      dispatch(fetchBlogsSuccess(dataBlogs));
    }
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchBlogsFailure(errorMessage));
  }
};
