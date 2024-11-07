/* eslint-disable react/prop-types */
import Card from "./Card";

export default function Row({ card1, card2 }) {
  return (
    <div className="row">
      <Card
        title={card1.title}
        color={card1.color}
        func={card1.funcTorun}
      ></Card>
      <Card
        title={card2.title}
        color={card2.color}
        func={card2.funcTorun}
      ></Card>
    </div>
  );
}
