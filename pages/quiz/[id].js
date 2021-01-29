import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

const QuizDaGaleraPage = ({ dbExternal }) => {
  return (
    <ThemeProvider theme={dbExternal.theme}>
      <QuizScreen
        externalQuestions={dbExternal.questions}
        externalBg={dbExternal.bg}
      />
    </ThemeProvider>
  );
};

export default QuizDaGaleraPage;

export const getServerSideProps = async (context) => {
  const [projectName, githubUser] = context.query.id.split('___');
  const dbExternal = await fetch(
    `https://${projectName}.${githubUser}.vercel.app/api/db`,
  )
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Falha em pegar os dados');
    })
    .then((resObject) => {
      return resObject;
    })
    .catch((err) => {
      console.error(err);
    });

  return {
    props: {
      dbExternal,
    },
  };
};
