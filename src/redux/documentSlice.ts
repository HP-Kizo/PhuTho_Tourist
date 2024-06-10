// src/redux/jobSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { DocumentTable, Reports } from "../typescripts/Interface";

interface DocumentState {
  reports: Reports[];
  documentTable: DocumentTable[];
  loading: boolean;
  error: string | null;
}

const initialState: DocumentState = {
  reports: [],
  documentTable: [],
  loading: false,
  error: null,
};

const DocumentSlice = createSlice({
  name: "Document",
  initialState,
  reducers: {
    fetchDocumentStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDocumentSuccess(state, action: PayloadAction<DocumentState>) {
      state.reports = action.payload.reports;
      state.documentTable = action.payload.documentTable;
      state.loading = false;
    },
    fetchDocumentFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchDocumentStart,
  fetchDocumentSuccess,
  fetchDocumentFailure,
} = DocumentSlice.actions;

export default DocumentSlice.reducer;
