import React from "react";
import "./RelatedPosts.css";
import Card from "../card/Card";
import { ElipseOff, ElipseOn } from "../../assets/Icon";

const RelatedPosts: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://s3-alpha-sig.figma.com/img/12b2/0c50/b2c0108127cbdcb05cc247c472886675?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDcSOTuLhd8gC6dmS9JMLSR-Hjq~~OsmXr7DCUWUg9S9ij4twvOzoAZZJY3EfU0~auR31xA9ZofFLxzm3UmR2z3DhH2jzFsX8nF~soLzCezitE35j5JXzh3s9OVXOmlnWVK3y1~eE4gMvJpymxKlHPMBbTAtCQuYVeMbw2VIp457omHb-AveDIt2c-CJGnfJ1ZCW-5VDlHMzbqhvvC7p0mu0Cd5HI45PWFCtPPDmhUhcAPVr4bLWbJYgywyGT61MIAsP8b0EnJ9GxWDdoBpbGhBUFHvb2hfriWR2IwFgi2SBw4BWa2m0FT4dD6d3qmWSBZCxdittmFgiqT3Tb58XNQ__",
    },
    {
      id: 2,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://s3-alpha-sig.figma.com/img/12b2/0c50/b2c0108127cbdcb05cc247c472886675?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDcSOTuLhd8gC6dmS9JMLSR-Hjq~~OsmXr7DCUWUg9S9ij4twvOzoAZZJY3EfU0~auR31xA9ZofFLxzm3UmR2z3DhH2jzFsX8nF~soLzCezitE35j5JXzh3s9OVXOmlnWVK3y1~eE4gMvJpymxKlHPMBbTAtCQuYVeMbw2VIp457omHb-AveDIt2c-CJGnfJ1ZCW-5VDlHMzbqhvvC7p0mu0Cd5HI45PWFCtPPDmhUhcAPVr4bLWbJYgywyGT61MIAsP8b0EnJ9GxWDdoBpbGhBUFHvb2hfriWR2IwFgi2SBw4BWa2m0FT4dD6d3qmWSBZCxdittmFgiqT3Tb58XNQ__",
    },
    {
      id: 3,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://s3-alpha-sig.figma.com/img/12b2/0c50/b2c0108127cbdcb05cc247c472886675?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDcSOTuLhd8gC6dmS9JMLSR-Hjq~~OsmXr7DCUWUg9S9ij4twvOzoAZZJY3EfU0~auR31xA9ZofFLxzm3UmR2z3DhH2jzFsX8nF~soLzCezitE35j5JXzh3s9OVXOmlnWVK3y1~eE4gMvJpymxKlHPMBbTAtCQuYVeMbw2VIp457omHb-AveDIt2c-CJGnfJ1ZCW-5VDlHMzbqhvvC7p0mu0Cd5HI45PWFCtPPDmhUhcAPVr4bLWbJYgywyGT61MIAsP8b0EnJ9GxWDdoBpbGhBUFHvb2hfriWR2IwFgi2SBw4BWa2m0FT4dD6d3qmWSBZCxdittmFgiqT3Tb58XNQ__",
    },
    {
      id: 4,
      title: "Thông báo: đấu giá giữ xe tại CVHH Đầm Sen",
      views: "10N",
      author: "Admin",
      date: "20/02/2022",
      image:
        "https://s3-alpha-sig.figma.com/img/12b2/0c50/b2c0108127cbdcb05cc247c472886675?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VDcSOTuLhd8gC6dmS9JMLSR-Hjq~~OsmXr7DCUWUg9S9ij4twvOzoAZZJY3EfU0~auR31xA9ZofFLxzm3UmR2z3DhH2jzFsX8nF~soLzCezitE35j5JXzh3s9OVXOmlnWVK3y1~eE4gMvJpymxKlHPMBbTAtCQuYVeMbw2VIp457omHb-AveDIt2c-CJGnfJ1ZCW-5VDlHMzbqhvvC7p0mu0Cd5HI45PWFCtPPDmhUhcAPVr4bLWbJYgywyGT61MIAsP8b0EnJ9GxWDdoBpbGhBUFHvb2hfriWR2IwFgi2SBw4BWa2m0FT4dD6d3qmWSBZCxdittmFgiqT3Tb58XNQ__",
    },
  ];

  return (
    <div className="related-posts">
      <div className="related-posts__header">Bài viết liên quan</div>
      <div className="related-posts__list">
        {posts.map((post) => (
          <div className="related-posts__item">
            <img src={post.image} alt={post.title} className="related-image" />
            <div className="related-content">
              <div className="related-position">
                <span className="related-author">{post.author}</span>
                {ElipseOn}
              </div>
              <div className="related-header">
                <h3 className="related-title">{post.title}</h3>
              </div>

              <div className="related-tags">
                <button className="btn related-tag">Sự kiện</button>
                <button className="btn related-tag">Thông báo</button>
                <button className="btn related-tag">Tin tức</button>
              </div>
              <div className="related-info">
                <span className="related-views">{post.views} lượt xem</span>
                {ElipseOff}
                <span className="related-date">{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
