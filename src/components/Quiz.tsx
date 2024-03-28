import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
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
  console.log(answers);
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
    return <div>Loading...</div>;
  }
  const question = quiz[activeQuestion];
  return (
    <div>
      {!showResult ? (
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
      ) : (
        <div>
          <h1>Results</h1>
          {quiz.map((q, i) => (
            <p
              style={{ color: q.answer === answers[i] ? "green" : "red" }}
              key={i}
            >
              {q.question + " (your answer:" + answers[i] + ")"}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
