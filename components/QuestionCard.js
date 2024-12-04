import styles from "../styles/Quiz.module.css";

const QuestionCard = ({ question, options, selectedOption, onOptionSelect }) => {
  return (
    <div className={styles["question-card"]}>
      <h2>{question}</h2>
      <div>
        {options.map((option, index) => (
          <div
            key={index}
            className={`${styles.option} ${
              selectedOption === index ? styles.selected : ""
            }`}
            onClick={() => onOptionSelect(index)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
