import { Routes, Route } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import Quiz from "./components/Quiz";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Logo_FC_Bayern_München_%282002–2017%29.svg"
                className="App-logo"
                alt="logo"
              />
              <p>Welcome to Bayern München trivia quiz!</p>
              <Button
                variant="outlined"
                onClick={() => (window.location.href = "/quiz")}
              >
                Start
              </Button>
            </>
          }
        />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
