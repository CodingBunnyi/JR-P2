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

const Top = styled.div`
`;

const Bottom = styled.div`

`;

class App extends React.Component {
  render() {
    return (
      <Main>
        <AppContainer>
          <Top>
            <Current />
          </Top>
          <Bottom>
            <OtherCities />
            <Forecast />
          </Bottom>
        </AppContainer>
      </Main>
    )
  }
}

export default App;
