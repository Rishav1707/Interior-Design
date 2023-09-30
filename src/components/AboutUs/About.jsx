import "./About.css";
import AboutImg from "../../assets/AboutImg.jpg";
import ButtonArrow from "../../assets/button-arrow.png";

const About = () => {
  return (
    <div id="about" className="About">
      <div className="About-img">
        <img src={AboutImg} width={170} height={170} alt="" />
      </div>
      <div className="About-Text">
        <div className="About-Laptop-Medium-para">
          <p>
            <span>The key difference between ordinary and special.</span> No
            matter the season, our spaces are as nuanced as the lifestyle they
            reflect, <span>don&apos;t just dream it.</span>
          </p>
        </div>
        <div className="About-content-container">
          <div className="About-content">
            <h3>
              300<span>+</span>
            </h3>
            <p>Success project</p>
          </div>
          <div className="About-content">
            <h3>
              200<span>+</span>
            </h3>
            <p>Product launches</p>
          </div>
          <div className="About-content">
            <h3>
              180<span>K</span>
            </h3>
            <p>Happy customer</p>
          </div>
        </div>
        <div className="About-Laptop-Medium-button">
          <button>
            About Us{" "}
            <img src={ButtonArrow} width={24} height={24} alt="button-arrow" />
          </button>
        </div>
      </div>
      <div className="About-paragraph">
        <p>
          <span>The key difference between ordinary and special.</span> No
          matter the season, our spaces are as nuanced as the lifestyle they
          reflect, <span>don&apos;t just dream it.</span>
        </p>
        <div className="All-button">
          <button>
            About Us{" "}
            <img src={ButtonArrow} width={24} height={24} alt="button-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
