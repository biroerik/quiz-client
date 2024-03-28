import Button from "@mui/material/Button";

interface IProps {
  quiz: { question: string; answer: boolean }[];
  answers: boolean[];
}
const Results = ({ quiz, answers }: IProps) => {
  return (
    <div>
      <h1>Results</h1>
      {quiz.map((q, i) => (
        <p style={{ color: q.answer === answers[i] ? "green" : "red" }} key={i}>
          {q.question + " (your answer:" + answers[i] + ")"}
        </p>
      ))}
      <Button onClick={() => window.location.reload()}>Play Again</Button>
    </div>
  );
};

export default Results;
