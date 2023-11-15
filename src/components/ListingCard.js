import { useState } from "react";

function ListingCard({ item, onDelete }) {
  const [favorite, setFavourite] = useState(false);
  function handleClick() {
    setFavourite(true);
  }
  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method:"DELETE",
    })
      .then((res) => res.json())
      .then(() => onDelete(item.id));
    
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details" onClick={handleClick}>
        {favorite ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.image}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
