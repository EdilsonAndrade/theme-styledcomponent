import React from 'react';

import { Container } from './styles';
import DontLoseYourDream from './DontLoseYourDream';
import LetsStart from './LetsStart';

const Remarcacao: React.FC = () => {
  return (
        <Container>
          <DontLoseYourDream />
          <LetsStart />
        </Container>
  );
}

export default Remarcacao;