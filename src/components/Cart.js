import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Cart(props) {
  const avgSum = props.sum.toFixed(2);
  const taxTotal = (avgSum * 1.15).toFixed(2);
  console.log(props.cartTotal);
  return (
    <div className="cart">
      <h2>{props.cartTotal.length > 0 ? "Your cart" : "Your cart is empty"}</h2>
      {props.cartTotal.length === 0 ? (
        <button className="btn" type="button">
          <Link to="/menu" className="nav-link">
            Order Now
          </Link>
        </button>
      ) : (
        ""
      )}
      <div
        className="cart-info"
        style={props.cartTotal < 1 ? { display: "none" } : { display: "block" }}
      >
        <div className="cart-items">
          <h4>
            {props.cartTotal.length}{" "}
            {props.cartTotal.length === 1 ? `item` : "items"}
          </h4>
          <h4 className="money">{props.cartTotal ? `$${avgSum}` : ""}</h4>
        </div>{" "}
        <Button className="remove-btn" variant="danger" onClick={props.remove}>
          Remove Items
        </Button>
        <div className="tax-total">
          <h3>{props.cartTotal ? "Total with tax" : ""}</h3>
          <h3 className="money">${taxTotal}</h3>
        </div>
      </div>
    </div>
  );
}
