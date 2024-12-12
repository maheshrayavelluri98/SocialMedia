import "./comment.css";

import CommentData from "../../FackApis/CommetData";
import CurrentUserData from "../../FackApis/CurrentUserData";
import { Link } from "react-router-dom";

export default function Comments() {
  return (
    <div className="comments">
      <div className="write-box">
        <form action="#">
          <div className="user">
            <img src={CurrentUserData.map((user) => user.ProfieImage)} alt="" />
            <input type="text" placeholder="Write a Comment" />
            <button type="submit" className="btn btn-primary">
              {" "}
              Send{" "}
            </button>
          </div>
        </form>
      </div>
      {CommentData.map((Comment) => (
        <Link to="/profile/id">
          <div className="user" key={Comment.id}>
            <img src={Comment.commentProfile} alt="" />
            <div>
              <h5> {Comment.name} </h5>
              <p> {Comment.CommeText} </p>
            </div>
            <small> 1h </small>
          </div>
        </Link>
      ))}
    </div>
  );
}
