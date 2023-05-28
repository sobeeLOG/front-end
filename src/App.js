import React,{useEffect} from "react";
import styled, { ThemeProvider } from "styled-components";
import Router from './components/common/Router';
import { isMobile } from 'react-device-detect';
import GlobalStyles from "./components/common/globalStyle";
import theme from "./components/common/theme";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <div>
      <GlobalStyles/>
      {!isMobile ? 
        <WrapScreen>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </WrapScreen> : 
        <WrapMobileScreen>
          <ThemeProvider theme={theme}>
            <Router />
          </ThemeProvider>
        </WrapMobileScreen>}
    </div>
    
  );
}

const WrapScreen = styled.div`
  margin:0rem 40.5rem;
  border:1px;
  font-size: 62.5%;
`
const WrapMobileScreen = styled.div`
  height:100vh;
  overflow: hidden;
  font-size: 62.5%;
`

export default App;