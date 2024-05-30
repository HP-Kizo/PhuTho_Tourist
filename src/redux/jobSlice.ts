// src/redux/jobSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Job } from "../typescripts/Interface";

interface JobState {
  jobs: Job[];
  loading: boolean;
  error: string | null;
}

const initialState: JobState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchJobsSuccess(state, action: PayloadAction<Job[]>) {
      state.jobs = action.payload;
      state.loading = false;
    },
    fetchJobsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchJobsStart, fetchJobsSuccess, fetchJobsFailure } =
  jobSlice.actions;

export default jobSlice.reducer;
