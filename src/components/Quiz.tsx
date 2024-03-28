import React, { useEffect } from "react";

const Quiz = () => {
  useEffect(() => {
    const FetchQuiz = async () => {
      const response = await fetch(
        "https://quiz-server-ivory.vercel.app/api/quiz"
      );
      const data = await response.json();
      console.log(data);
    };
  });
  return <div>Quiz</div>;
};

export default Quiz;
