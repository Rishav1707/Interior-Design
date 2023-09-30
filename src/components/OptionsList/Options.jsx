import "./Options.css";
import Arrow from "../../assets/button-arrow-white.png";

const Options = () => {
  return (
    <div id="services" className="Options-List">
      <ul className="List">
        <li>
          Home redesign
          <img src={Arrow} alt="button-Arrow" />
        </li>
        <li>
          Interior detailing
          <img src={Arrow} alt="button-Arrow" />
        </li>
        <li>
          Furniture layout
          <img src={Arrow} alt="button-Arrow" />
        </li>
        <li>
          Exterior finish selections
          <img src={Arrow} alt="button-Arrow" />
        </li>
        <li>
          Color and paint selection
          <img src={Arrow} alt="button-Arrow" />
        </li>
      </ul>
    </div>
  );
};

export default Options;
