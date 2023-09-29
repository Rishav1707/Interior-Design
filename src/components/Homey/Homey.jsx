import "./Homey.css";
import Homey1 from "../../assets/homey-img1.jpg";
import Homey2 from "../../assets/homey-img2.jpg";
import Homey3 from "../../assets/homey-img3.jpg";
import Homey4 from "../../assets/homey-img4.jpg";
import ButtonArrow from "../../assets/button-arrow.png";
import ButtonArrowWhite from "../../assets/button-arrow-white.png";

const Homey = () => {
  return (
    <div className="Homey-Container">
      <div className="Homey-heading">
        <p>
          Decorate <span>every inch of the house </span>to make it feel homey
        </p>
        <p>
          Carve out a little piece of paradise with some of our top picks, the
          home of your dreams begins with the perfect palette for every room.
        </p>
      </div>
      <div className="Homey-Image">
        <img src={Homey1} width={155} height={155} alt="Img1" />
        <img src={Homey2} width={155} height={155} alt="Img2" />
        <img src={Homey3} width={155} height={155} alt="Img3" />
        <img src={Homey4} width={155} height={155} alt="Img4" />
      </div>
      <div className="Homey-Laptop-Medium-button">
        <button>
          Learn More{" "}
          <img
            src={ButtonArrowWhite}
            width={24}
            height={24}
            alt="button-arrow"
          />
        </button>
      </div>
      <div className="Homey-paragraph">
        <p>
          Carve out a little piece of paradise with some of our top picks, the
          home of your dreams begins with the perfect palette for every room.
        </p>
        <div className="All-button">
          <button>
            Start Project{" "}
            <img src={ButtonArrow} width={24} height={24} alt="button-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homey;
