import React, { useState } from 'react';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import cvc from './styles/theme/cvc';
import sub from './styles/theme/sub';
import blackfriday from './styles/theme/blackfriday';
import { I18nProvider, LOCALES } from './i18n';
import Remarcacao from './pages/Remarcacao';
import Header from './components/Header';

const App: React.FC = (props: any) => {
  const [locale, setLocale] = useState(LOCALES.PORTUGUESE);

  const handleChangeFlag = (e:string)=>{
    if(e ==="bra"){
      setLocale(LOCALES.PORTUGUESE)
    }else if(e==="ar"){
      setLocale(LOCALES.SPANISH_AR)
    }
  }
  return (
    <ThemeProvider theme={window.location.search.includes('cvc') ? cvc : window.location.search.includes('blackfriday') ? blackfriday : sub} >
      <I18nProvider locale={locale}>
        <Header event={(e:any)=>handleChangeFlag(e)} />
        <Remarcacao />
      </I18nProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
