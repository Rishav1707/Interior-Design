import { useState } from "react";
import "./NavBar.css";


const NavBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const handleclick = () => {
    setisOpen(!isOpen);
  };
  return (
    <div className="nav">
      <div className="extra-div"></div>
      <div className="nav-header">
        <img src="" alt=""/>
        <div className={`nav-content ${isOpen?"show":"hide"}`}>
          <h4 className="nav-content-title">About</h4>
          <h4 className="nav-content-title">Product</h4>
          <h4 className="nav-content-title">Project</h4>
          <h4 className="nav-content-title">Services</h4>
        </div>
        <div className="ham-burger" onClick={handleclick}>
          <div className="ham-lines-1"></div>
          <div className="ham-lines-2"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
