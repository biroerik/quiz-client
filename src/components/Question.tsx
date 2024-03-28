import { LinearProgress, Button, Box, Grid } from "@mui/material";
interface IProps {
  question: { question: string; answer: boolean };
  next: (answer: boolean) => void;
  activeQuestion: number;
  quiz: { question: string; answer: boolean }[];
}
const Question = ({ question, next, activeQuestion, quiz }: IProps) => {
  return (
    <Grid>
      <h1>
        <LinearProgress
          variant="determinate"
          value={(100 / quiz.length) * (activeQuestion + 1)}
        />
      </h1>
      <Box m={2} sx={{ p: 2, border: "2px red solid" }}>
        <h2>{question.question}</h2>
      </Box>
      <Grid item container justifyContent="space-evenly">
        <Button onClick={() => next(true)}>True</Button>
        <Button onClick={() => next(false)}>False</Button>
      </Grid>
    </Grid>
  );
};

export default Question;
