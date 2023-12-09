import { useContext, useState } from "react";
// import Brightness2Icon from '@mui/icons-material/Brightness2'
// import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//import { ThemeContext } from '../../contexts/theme'
import { PROJECTS, SKILLS, CONTACT } from "../../Portfolio";
import "./Navbar.css";

const Navbar = () => {
  //const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {SKILLS.length ? (
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={toggleNavList}
              className="link link--nav"
            >
              SKILLS
            </a>
          </li>
        ) : null}
        {PROJECTS.length ? (
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={toggleNavList}
              className="link link--nav"
            >
              PROJECTS
            </a>
          </li>
        ) : null}

        {CONTACT.email ? (
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={toggleNavList}
              className="link link--nav"
            >
              CONTACT
            </a>
          </li>
        ) : null}
      </ul>

      {/* <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon nav__theme'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button> */}

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
