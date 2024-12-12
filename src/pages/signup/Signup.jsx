import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>
            Social Media <br />{" "}
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            exercitationem perferendis neque pariatur quisquam voluptate ullam
            labore atque .
          </p>
          <span> Have an Account ? </span>
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>
        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="password" />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
