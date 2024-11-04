import QuizTitle from "./QuizTitle";
import Q1 from "./Q1/Q1";
import "./style.css";
import Q2 from "./Q2/Q2";

function Quiz() {
  return (
    <div className="quiz">
      <QuizTitle />
      <Q1 />
      <Q2 />
    </div>
  );
}

export default Quiz;
