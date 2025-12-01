// Quiz questions array
const quizQuestions = [
  { question: "What is the capital of France?", answer: "paris" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is 5 + 7?", answer: "12" },
  { question: "Who is President of Russia?", answer: "vladimir putin" },
  { question: "Which language is used for web development?", answer: "javascript" }
];

// Function to run the quiz
function runQuiz() {
  let score = 0; // Initialize score

  for (let i = 0; i < quizQuestions.length; i++) {
    // Ask question
    let userAnswer = prompt(quizQuestions[i].question);

    // Normalize user input
    if (userAnswer) {
      userAnswer = userAnswer.toLowerCase().trim();
    }

    // Check answer
    if (userAnswer === quizQuestions[i].answer.toLowerCase().trim()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is: ${quizQuestions[i].answer}`);
    }
  }

  // Show final score
  alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

// Run the quiz
runQuiz();
