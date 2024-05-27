import React from "react";
import "./App.css";
import "./Reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Blogs from "./pages/blogs/Blogs";
import Documents from "./pages/documents/Documents";
import Posts from "./component/posts/Posts";
import Careers from "./pages/careers/Careers";
import CareersDetail from "./component/careersDetail/careersDetail";

function App() {
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
