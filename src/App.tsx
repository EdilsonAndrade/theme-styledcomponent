import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import cvc from './styles/theme/cvc';
import sub from './styles/theme/sub';

import Remarcacao from './pages/Remarcacao';

const App:React.FC = (props: any ) => {

  return (
    <ThemeProvider theme={window.location.search.includes('cvc') ? cvc : sub} >
      <Remarcacao />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
