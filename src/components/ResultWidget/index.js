import Widget from '../Widget';

const ResultWidget = ({ results }) => {
  return (
    <Widget>
      <Widget.Header>Tela de Resultado:</Widget.Header>

      <Widget.Content>
        <p>
          Você acertou{' '}
          {results.reduce((somatoria, resultado) => {
            const isAcerto = resultado === true;
            if (isAcerto) {
              return somatoria + 1;
            }
            return somatoria;
          }, 0)}{' '}
          perguntas
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              # {index + 1} Resultado: {result === true ? 'Acertou' : 'Errou'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
};

export default ResultWidget;
