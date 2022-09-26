import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <h1>SoCal Pizza</h1>
      <h1>
        <span>Grab a Slice</span>
      </h1>
      <img
        src={process.env.PUBLIC_URL + `/images/pizza-slice-svgrepo-com.svg`}
        alt="pizza-slice"
        className="slice-img"
      />
      <button className="btn" type="button">
        <Link to="/menu" className="nav-link">
          Order Now
        </Link>
      </button>
    </div>
  );
}
