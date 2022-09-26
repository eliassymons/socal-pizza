import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

export default function Header(props) {
  return (
    <header className="header">
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/menu" className="nav-link">
            Menu
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/cart" className="nav-link">
            Cart
            {props.cartTotal.length > 0 ? (
              <Badge className="badge" bg="danger">
                {props.cartTotal.length}
              </Badge>
            ) : (
              ""
            )}
          </Link>
        </Nav.Item>
      </Nav>
    </header>
  );
}
