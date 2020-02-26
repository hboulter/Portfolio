import React from "react";
import Comment from "./Comment";
import "./Post.css";
import {
  faHeart,
  faComment,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ image }) => {
  return (
    <div className="card">
      <span className="flex">
        <span className="profile"></span>
        <span className="profile__name">h_dang</span>
      </span>
      <img src={image.src} alt="uh oh!" width="100%" className="image" />
      <div className="buttons">
        <span className="buttons__left">
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <FontAwesomeIcon icon={faComment} className="comment" />
          <FontAwesomeIcon icon={faInfoCircle} className="info" />
        </span>
        <span className="buttons__right">
          <FontAwesomeIcon icon={faGithub} className="github" />
        </span>
      </div>
      <h4>{image.likes}</h4>
      <p>
        <b>h_dang</b> {image.description}
      </p>
      <Comment />
    </div>
  );
};

export default Post;
