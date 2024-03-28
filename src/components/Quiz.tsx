import { useEffect, useState } from "react";
import Results from "./Results";
import Question from "./Question";
import { CircularProgress } from "@mui/material";
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
        "https://quiz-server-ivory.vercel.app/api/quiz"
      );
      const data = await response.json();
      setQuiz(data);
    };
    fetchQuiz();
  }, []);
  if (!quiz) {
    return <CircularProgress />;
  }
  const question = quiz[activeQuestion];
  return (
    <div>
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
    </div>
  );
};

export default Quiz;
