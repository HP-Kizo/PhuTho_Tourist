// src/redux/jobActions.ts
import { AppThunk } from "./store";
import {
  fetchDocumentStart,
  fetchDocumentSuccess,
  fetchDocumentFailure,
} from "./documentSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig/firebaseConfig";
import { getDatabase, get, ref, set, push } from "firebase/database";
import { Blog } from "../typescripts/Interface";

export const fetchDocuments = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchDocumentStart());
    const dbRef = ref(db, "documents");
    const snapshot = await get(dbRef);
    if (snapshot.exists()) {
      const dataDocuments = snapshot.val();

      dispatch(fetchDocumentSuccess(dataDocuments));
    }
  } catch (error) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    dispatch(fetchDocumentFailure(errorMessage));
  }
};
