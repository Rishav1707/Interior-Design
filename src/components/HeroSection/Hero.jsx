import image from "../../assets/design1.jpg";
import image1 from "../../assets/hero1.jpg";
import image2 from "../../assets/hero2.jpg";
import image3 from "../../assets/hero3.jpg";
import ButtonArrow from "../../assets/button-arrow.png";
import ButtonArrowBlack from "../../assets/button-arrow-black.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-comp">
      <div className="main-img-div">
        <img className="main-img" src={image} width={280} height={300} />
      </div>
      <div className="col-img">
        <img className="col-images" src={image2} width={80} height={80} />
        <img className="col-images" src={image1} width={80} height={80} />
        <img className="col-images" src={image3} width={80} height={80} />
      </div>
      <div className="hero-content">
        <div className="sub-hero">
          <h1 className="hero-title">
            Transform your <span className="extra-letters">space</span>
          </h1>
          <div className="content">
            <p className="hero-description">
              The mind creates the beautiful,the heart creates the home,home
              sweet home
            </p>
            <div className="btns">
              <div className="btn">
                <button className="btn-1">
                  Start Project
                  <img
                    src={ButtonArrow}
                    width={24}
                    height={24}
                    alt="button-arrow"
                  />
                </button>
              </div>
              <div className="btn">
                <button className="btn-2">
                  Learn More{" "}
                  <img
                    src={ButtonArrowBlack}
                    width={24}
                    height={24}
                    alt="button-arrow"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
