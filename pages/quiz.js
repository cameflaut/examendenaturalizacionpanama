import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import quizData from "../public/quiz.json"; // Importing your JSON data

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNext = () => {
    setCurrentQuestionIndex((prev) => prev + 1);
    setSelectedOption(null);
  };

  const handleBack = () => {
    setCurrentQuestionIndex((prev) => prev - 1);
    setSelectedOption(null);
  };

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="container">
      <QuestionCard
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOption}
        onOptionSelect={setSelectedOption}
      />
      <div>
        {currentQuestionIndex > 0 && <button onClick={handleBack}>Atrás</button>}
        {currentQuestionIndex < quizData.length - 1 ? (
          <button onClick={handleNext}>Siguiente</button>
        ) : (
          <button onClick={() => alert("Quiz terminado!")}>Finalizar</button>
        )}
      </div>
    </div>
  );
}
