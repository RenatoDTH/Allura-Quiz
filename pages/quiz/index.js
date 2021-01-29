import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

const { ThemeProvider } = require('styled-components');

const QuizPage = () => {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen externalQuestions={db.questions} externalBg={db.bg} />
    </ThemeProvider>
  );
};

export default QuizPage;
