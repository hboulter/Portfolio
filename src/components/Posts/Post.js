import React from "react";
import Comment from "./Comment";
import "./Post.css";

const Post = () => (
  <div className="card">
    <span className="flex">
      <span className="profile"></span>
      <span class="profile__name">h_dang</span>
    </span>
    <img src="images/upcycle.png" alt="uh oh!" width="100%" />
    <Comment />
  </div>
);

export default Post;
