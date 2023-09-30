import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [colorChange, setcolorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setcolorChange(true);
    } else {
      setcolorChange(false);
    }
  };

  useEffect(() => {
    changeNavbarColor();
    window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const [isOpen, setisOpen] = useState(false);
  const handleclick = () => {
    setisOpen(!isOpen);
  };

  const handledown = () => {
    document.querySelector(".nav-content").classList.add("hide");
  };

  return (
    <div className="nav">
      <div id="home" className="extra-div"></div>
      <div className={colorChange ? "nav-header bg-color" : "nav-header"}>
        <img src="" alt="" />
        <div className={`nav-content ${isOpen ? "show" : "hide"}`}>
          <a href="#home" onClick={handledown}>
            <h4 className="nav-content-title">Home</h4>
          </a>
          <a href="#about" onClick={handledown}>
            <h4 className="nav-content-title">About</h4>
          </a>
          <a href="#product" onClick={handledown}>
            <h4 className="nav-content-title">Product</h4>
          </a>
          <a href="#services" onClick={handledown}>
            <h4 className="nav-content-title">Services</h4>
          </a>
          <a href="#project" onClick={handledown}>
            <h4 className="nav-content-title">Project</h4>
          </a>
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
