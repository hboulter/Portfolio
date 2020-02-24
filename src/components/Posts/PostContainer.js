import React from "react";
import Post from "./Post";
import images from "../images";

const PostContainer = () => (
  <div className="container">
    {images.map(image => (
      <Post key={image.id} image={image} />
    ))}
  </div>
);

export default PostContainer;
