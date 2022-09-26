import MenuItem from "./MenuItem";
import pizzaMenu from "../pizzaMenu";

export default function Menu(props) {
  let sum = props.sum;
  const cards = pizzaMenu.map((item) => {
    return (
      <MenuItem
        className="swing-in-top-fwd"
        key={item.name}
        image={item.image}
        name={item.name}
        price={item.price}
        description={item.description}
        handleClick={props.handleClick}
      />
    );
  });

  return <div className="menu">{cards}</div>;
}
