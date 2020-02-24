import React from "react";
import Story from "./Story";
import images from "../images";

const StoriesContainer = () => (
  <div className="container">
    {images.map(image => (
      <Story key={image.id} image={image} />
    ))}
  </div>
);

export default StoriesContainer;
