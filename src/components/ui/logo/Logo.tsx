import Sun from "../../../assets/icons/sun.svg";
import Cloud from "../../../assets/icons/cloud.svg";
import { Link } from "react-router";
import "./logo.scss";

export const Logo = () => {
  return (
    <div className="header-logo">
      <Link to="/">
        <div className="header-logo_icons">
          <img className="sun-icon" src={Sun} alt="Sun icon" />
          <img className="cloud-icon" src={Cloud} alt="Cloud icon" />
        </div>
        <h1>WeatherCast</h1>
      </Link>
    </div>
  );
};
