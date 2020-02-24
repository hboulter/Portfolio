import React from "react";
import Comment from "./Comment";
import "./Post.css";

const Post = ({ image }) => {
  return (
    <div className="card">
      <span className="flex">
        <span className="profile"></span>
        <span className="profile__name">h_dang</span>
      </span>
      <img src={image.src} alt="uh oh!" width="100%" className="image" />
      <h4>{image.likes}</h4>
      <p>
        <b>h_dang</b> {image.description}
      </p>
      <Comment />
    </div>
  );
};

export default Post;
