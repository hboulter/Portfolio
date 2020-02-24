import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import StoriesContainer from "./components/Stories/StoriesContainer";
import PostContainer from "./components/Posts/PostContainer";

function App() {
  return (
    <>
      <Nav />
      <StoriesContainer />
      <PostContainer />
    </>
  );
}

export default App;
