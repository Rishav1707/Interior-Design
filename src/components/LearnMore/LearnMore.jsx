import "./LearnMore.css";
import LearnVideo from "../../assets/Learn-Video.mp4";
import ButtonArrow from "../../assets/button-arrow.png";
import PlayButton from "../../assets/PlayButton.png";

const LearnMore = () => {
  const handlePlay = () => {
    const video = document.querySelector("video");
    const button = document.getElementsByClassName("PlayButton")[0];
    video.play();
    button.style.display = "none";
  };
  return (
    <>
      <div id="product" className="LearnMore">
        <div className="LearnMore-heading">
          <p>
            Capture <span>the spirit of spring </span>in your home
          </p>
        </div>
        <div className="LearnMore-Laptop-Medium-para">
          <p>
            We provide guidance and direction in your interior design project,
            inspire your space through art and design, create a space that
            reflects who your are
          </p>
        </div>
        <div className="LearnMore-Laptop-Medium-button">
          <button>
            Learn More{" "}
            <img src={ButtonArrow} width={24} height={24} alt="button-arrow" />
          </button>
        </div>
        <div className="LearnExtra"></div>
        <div className="LearnVideo">
          <video src={LearnVideo} width={328}></video>
        </div>
        <div className="PlayButton">
          <img
            src={PlayButton}
            alt="PlayButton"
            width={40}
            height={40}
            onClick={handlePlay}
          />
        </div>
      </div>
      <div className="LearnMore-paragraph">
        <p>
          We provide guidance and direction in your interior design project ,
          inspire your space through art and design, create a space that
          reflects who your are
        </p>
        <div className="All-button">
          <button>
            Learn More{" "}
            <img src={ButtonArrow} width={24} height={24} alt="button-arrow" />
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
