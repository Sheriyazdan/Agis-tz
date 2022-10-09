import { useState } from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={`header`}>
      <div className={`container`}>
        <a href="https://hh.kz/resume/8181c35dff0983aa2c0039ed1f346f5372695a">
          <div className={`logo`}>
            <img src="images/logo-me.jpeg" alt="" />
            <div className={`logo-text logo_text`} >
              Sheriyazdan
            </div>
          </div>
        </a>
        <nav className={""}>
          <ul className={""}>
            <li className="">
              <Link to="/">Home page</Link>
            </li>
            <li className="">
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
