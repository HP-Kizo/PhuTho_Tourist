import React, { useEffect } from "react";
import "./App.css";
import "./Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Blogs from "./pages/blogs/Blogs";
import Documents from "./pages/documents/Documents";
import Posts from "./component/posts/Posts";
import Careers from "./pages/careers/Careers";
import CareersDetail from "./component/careersDetail/careersDetail";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./redux/store";
import { fetchJobs } from "./redux/jobActions";

function App() {
  const dispatch = useAppDispatch();
  const { jobs, loading, error } = useSelector(
    (state: RootState) => state.jobs
  );
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/documents" element={<Documents />} />
        <Route path="/documents/:id" element={<Posts />} />
        <Route path="/careers" element={<Careers />} />

        <Route path="/careers/:id" element={<CareersDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
