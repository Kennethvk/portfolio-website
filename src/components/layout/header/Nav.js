import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav className={props.className}>
      <ul>
        <Link to="/" onClick={props.onClick}>
          <li>Home</li>
        </Link>
        <Link to="/projects" onClick={props.onClick}>
          <li>Projects</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
