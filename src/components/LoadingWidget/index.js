import { Lottie } from '@crello/react-lottie';
import Widget from '../Widget';
import loadingAnimation from '../../screens/Quiz/animations/loading.json';

const LoadingWidget = () => {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
        <Lottie
          width="200px"
          height="200px"
          className="lottie-container basic"
          config={{
            animationData: loadingAnimation,
            loop: true,
            autoplay: true,
          }}
        />
      </Widget.Content>
    </Widget>
  );
};

export default LoadingWidget;
