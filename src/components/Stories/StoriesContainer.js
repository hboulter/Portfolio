import React from "react";
import Story from "./Story";

const storiesArr = [0, 0, 0, 0];

const StoriesContainer = () => (
  <div className="container">
    {storiesArr.map(story => (
      <Story />
    ))}
  </div>
);

export default StoriesContainer;
