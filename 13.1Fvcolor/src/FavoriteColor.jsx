import React, { useState, useEffect } from "react";

function FavoriteColor() {
  const [favoriteColor, setFavoriteColor] = useState("blue");

  useEffect(() => {
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
