import React, { useEffect, useRef, useState } from "react";
import "./Posts.css";
import Header from "../Header/Header";
import VideoBackground from "../Background/VideoBackground";
import Footer from "../Footer/Footer";
import RelatedPosts from "../RelatedPosts/RelatedPosts";
import PostsContent from "../postsContent/PostsContent";
import AsideSection from "../AsideSection/AsideSection";
import { useParams } from "react-router-dom";

const Posts: React.FC = () => {
  const postRef = useRef<HTMLDivElement>(null);
  const scrollToPost = () => {
    if (postRef.current) {
      postRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [width, setWidth] = useState<number>(0);
  const updateWidth = (): void => {
    if (postRef.current) {
      setWidth(postRef.current.offsetWidth);
    }
  };
  const params = useParams();
  useEffect(() => {
    scrollToPost();
  }, [params]);
  console.log(width);

  useEffect(() => {
    // Cập nhật width lần đầu khi component mount
    updateWidth();

    // Thêm event listener khi component mount
    window.addEventListener("resize", updateWidth);

    // Loại bỏ event listener khi component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    if (width < 700) {
      // setItemsPerPage(6);
    } else {
      // setItemsPerPage(9);
    }
  }, [width]);
  return (
    <div className="posts" ref={postRef}>
      <Header></Header>
      <div className="wrap-posts">
        <PostsContent></PostsContent>
        <div className="related-posts__header">
          {width > 700 ? "Bài viết liên quan" : "Bài mới nhất"}{" "}
        </div>
        {width > 700 ? (
          <RelatedPosts></RelatedPosts>
        ) : (
          <AsideSection></AsideSection>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Posts;
