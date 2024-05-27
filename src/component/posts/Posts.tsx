import React, { useEffect, useRef, useState } from "react";
import "./Posts.css";
import Header from "../header/Header";
import VideoBackground from "../background/VideoBackground";
import Footer from "../footer/Footer";
import RelatedPosts from "../RelatedPosts/RelatedPosts";
import PostsContent from "../postsContent/PostsContent";

const Posts: React.FC = () => {
  const [postHeight, setPostHeight] = useState<number>(0);
  const postsRef = useRef<HTMLDivElement>(null);

  console.log(postHeight);

  useEffect(() => {
    if (postsRef.current) {
      setPostHeight(postsRef.current.clientHeight + 168 - 1080);
    }
  }, []);
  return (
    <div className="posts">
      <Header></Header>
      <div className="wrap-posts" ref={postsRef}>
        <PostsContent></PostsContent>
        <RelatedPosts></RelatedPosts>
      </div>
      <div style={{ height: `${postHeight}px` }}></div>
      <Footer />
    </div>
  );
};

export default Posts;
