import { useState } from "react";

export default function Myforom() {
  const [username, changeUserName] = useState("");
  return (
    <div className="forom">
      <h1> Hello {username}</h1>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
          changeUserName(event.target.value);
        }}
      />

      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" />

      <button type="submit">Log In</button>
    </div>
  );
}
