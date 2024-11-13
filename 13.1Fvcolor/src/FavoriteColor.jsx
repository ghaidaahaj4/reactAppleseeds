import React, { useState, useEffect } from "react";

function FavoriteColor() {
  // Step 1: Create a state called "favoriteColor"
  const [favoriteColor, setFavoriteColor] = useState("blue");

  // Step 4: Use useEffect to set a timeout when the component mounts
  useEffect(() => {
    // This code runs only once when the component mounts
    const timer = setTimeout(() => {
      setFavoriteColor("green"); // Change favoriteColor after 1 second
    }, 1000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Step 2: Display favoriteColor in an h1 element */}
      <h1>My favorite color is {favoriteColor}</h1>

      {/* Step 3: Create an empty div with an id */}
      <div id="colorDiv"></div>
    </div>
  );
}

export default FavoriteColor;
