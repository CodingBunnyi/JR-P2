import React from 'react';
import styled from 'styled-components';
import Current from './app/Current';
import OtherCities from './app/OtherCities';
import Forecast from './app/Forecast';
const Main = styled.div`
  min-height: 100vh;
  background-image: url('https://wallpaperaccess.com/full/2629319.png');
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AppContainer = styled.div`
  background-color: white;
  border-radius: 32px;
  margin: 60px;
  box-shadow: 0 0 16px rgb(0, 0, 0, 0.5);
`;

const AppTop = styled.div`
`;

const AppBottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 36px 0;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
  }
`;

const VerticalLine = styled.div`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.1);
`;

class App extends React.Component {
  render() {
    return (
      <Main>
        <AppContainer>
          <AppTop>
            <Current />
          </AppTop>

          <AppBottom>
            <OtherCities />
            <VerticalLine />
            <Forecast />
          </AppBottom>
        </AppContainer>
      </Main>
    )
  }
}

export default App;
