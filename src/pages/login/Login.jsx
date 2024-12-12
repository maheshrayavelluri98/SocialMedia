import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>
            {" "}
            -<br /> Social Media <br /> -
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            exercitationem perferendis neque pariatur quisquam voluptate ullam
            labore atque .
          </p>
          <span> Don't have an Account ? </span>
          <Link to="/signup">
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
