import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

export default function MenuItem(props) {
  return (
    <Card className="card swing-in-top-fwd">
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/images/${props.image}`}
        className="card-img"
        alt="pizza"
      />
      <Card.Body className="card-body">
        <Card.Title>{props.name}</Card.Title>
        <h5>${props.price}</h5>
        <p className="card-desc">{props.description}</p>

        <Button
          variant="primary"
          type="button"
          className="add-btn"
          value={props.price}
          onClick={props.handleClick}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
