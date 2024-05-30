// src/redux/jobActions.ts
import { AppThunk } from "./store";
import { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } from "./jobSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { getDatabase, get, ref, set, push } from "firebase/database";
import { Job } from "../typescripts/Interface";
export const fetchJobs = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchJobsStart());

    const dbRef = ref(db, "jobs");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const jobs = await Object.values(snapshot.val());
      dispatch(fetchJobsSuccess(jobs as Job[]));
    }
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchJobsFailure(errorMessage));
  }
};
