import React, { useState,useEffect } from "react";

import ListingCard from "./ListingCard";
import Search from "./Search";
// import ListingCard from "./ListingCard";

function ListingsContainer() {

  const[listings,setListings]=useState([])
  useEffect(() => {
    fetch("  http://localhost:6001/listings")
      .then(res => res.json())
    .then(data=>setListings(data))
    
  }, [])




function handleDelete(id) {
  const filteredListings = [...listings];
  setListings(filteredListings.filter((item) => item.id !== id));
}

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} onDelete={handleDelete} />
          
        ))}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
