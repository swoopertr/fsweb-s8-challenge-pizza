import { Link } from "react-router-dom";
import "./home.css";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home">
        <img className="home-logo" src="images/iteration-1-images/logo.svg" />
        <p className="home-text">
          KOD ACIKTIRIR <br /> PİZZA, DOYURUR{" "}
        </p>

        <Link className="btn" to="/order">
          ACIKTIM
        </Link>
      </div>
    </div>
  );
}
