import { LinearProgress, Button } from "@mui/material";
interface IProps {
  question: { question: string; answer: boolean };
  next: (answer: boolean) => void;
  activeQuestion: number;
  quiz: { question: string; answer: boolean }[];
}
const Question = ({ question, next, activeQuestion, quiz }: IProps) => {
  return (
    <div>
      <h1>
        <LinearProgress
          variant="determinate"
          value={(100 / quiz.length) * (activeQuestion + 1)}
        />
      </h1>
      <h2>{question.question}</h2>
      <Button onClick={() => next(true)}>True</Button>
      <Button onClick={() => next(false)}>False</Button>
    </div>
  );
};

export default Question;
