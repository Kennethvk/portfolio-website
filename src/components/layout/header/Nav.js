import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className={props.className}>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
