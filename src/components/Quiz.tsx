import { useEffect, useState } from "react";
import Results from "./Results";
import Question from "./Question";
import { CircularProgress, Grid } from "@mui/material";
const Quiz = () => {
  const [quiz, setQuiz] = useState<{ question: string; answer: boolean }[]>();
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const next = (answer: boolean) => {
    setAnswers((answers) => [...answers, answer]);
    if (quiz && activeQuestion + 1 < quiz.length) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };
  useEffect(() => {
    const fetchQuiz = async () => {
      const response = await fetch(
        "https://ybnlbit7il5j6uxgskgefvq5jy0sumvo.lambda-url.eu-north-1.on.aws"
      );
      const data = await response.json();
      setQuiz(data.body);
    };
    fetchQuiz();
  }, []);
  if (!quiz) {
    return <CircularProgress />;
  }
  const question = quiz[activeQuestion];
  return (
    <Grid container justifyContent="center">
      {!showResult ? (
        <Question
          question={question}
          next={next}
          activeQuestion={activeQuestion}
          quiz={quiz}
        />
      ) : (
        <Results quiz={quiz} answers={answers} />
      )}
    </Grid>
  );
};

export default Quiz;
