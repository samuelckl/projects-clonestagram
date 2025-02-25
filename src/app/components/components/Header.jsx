import { Link } from "react-router-dom";
import logo from "../logo.png";
function Header() {

  return (
    <div className="w-full bg-black flex justify-start p-4">
    <Link to="/">
      <img src={logo} alt="Logo" className="w-48 h-auto" />
    </Link>
  </div>
  );
}

export default Header;