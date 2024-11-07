/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export default function Card({ title, color, func }) {
  const [res, change] = useState(" ");

  async function handleRes() {
    const r = await func();
    console.log(r);
    change(r);
  }

  console.log(res);
  return (
    <div className={`card ${color}`}>
      <h1>{title}</h1>
      <button onClick={handleRes}>
        <FontAwesomeIcon icon={faPaperPlane} />
        Send Request
      </button>
      <p>{res}</p>
    </div>
  );
}
