import React, {useState} from "react";



function Item({ name, category }) {
  const [isAdded, setAddedToCart] = useState(false)

 function handleClick(){
  setAddedToCart((isAdded)=> !isAdded)
 }
const liClass = isAdded ? "in-cart" : ""

const cartClass = isAdded ? "remove" : "add"
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={cartClass}>{isAdded ? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
