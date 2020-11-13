import React from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import cvc from './styles/theme/cvc';
import sub from './styles/theme/sub';
import blackfriday from './styles/theme/blackfriday';

import Remarcacao from './pages/Remarcacao';

const App:React.FC = (props: any ) => {

  return (
    <ThemeProvider theme={window.location.search.includes('cvc') ? cvc : window.location.search.includes('blackfriday') ? blackfriday : sub} >
      <Remarcacao />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
