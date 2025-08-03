import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Static predefined questions
const questions = [
  "Hello, please introduce yourself.",
  "What are your strengths as a developer?",
  "Tell me about your recent project.",
  "How do you handle project deadlines under pressure?",
  "Which technologies are you currently learning?",
  "Why should we hire you for this role?",
  "Do you have any questions for us?"
];

// Track candidate progress using a simple variable (reset after interview)
let questionIndex = 0;

// app.post('/next-question', (req, res) => {
//   const { answer } = req.body;
//   console.log("Candidate answered:", answer);

//   if (questionIndex < questions.length) {
//     const nextQuestion = questions[questionIndex];
//     questionIndex++;
//     res.json({ question: nextQuestion });
//   } else {
//     res.json({ question: "Thank you for your time. The interview is now complete." });
//     questionIndex = 0; // Reset for next interview
//   }
// });

app.get('/', (req, res) => {
 res.send("Hello, please introduce yourself.");
})


app.listen(5000, () => console.log('✅ Static Interview Backend running on port 5000 🚀'));
