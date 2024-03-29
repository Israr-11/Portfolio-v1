import { header } from "../../Portfolio";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  const { homepage, title } = header;

  return (
    <header className="header center">
      <h3>
        {homepage ? (
          <a href="#home" className="link">
            React
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  );
};

export default Header;
