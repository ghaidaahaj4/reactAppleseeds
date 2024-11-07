/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
export default function Card({ title, color, func }) {
  const [res, change] = useState(" ");
  const [imgUrl, changeImg] = useState("");

  async function handleRes() {
    const r = await func();
    if (r.startsWith("https:")) {
      changeImg(r);
      change("see the img");
    } else {
      change(r);
    }
  }

  return (
    <div
      className={`card ${color} `}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <h1>{title}</h1>
      <button onClick={handleRes}>
        <FontAwesomeIcon icon={faPaperPlane} />
        Send Request
      </button>
      <p>{res}</p>
    </div>
  );
}
