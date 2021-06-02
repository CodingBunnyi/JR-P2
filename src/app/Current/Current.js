import React from 'react';
import styled from 'styled-components';
import Temperature from '~/components/Temperature';
// import Temperature from '../../components/Temperature/';
const CurrentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('https://i.imgur.com/GhQZhaO.jpg');
  background-size: cover;
`;

const Left = styled.div`
`;

const Right = styled.div`
`;

const Shanghai = '1796231';

const getCurrentCityWeather = (handleWeatherChange) => {
  const basPath = 'https://api.openweathermap.org/data/2.5';
  const units = 'metric';
  const appid = 'c0167be7a6c2cff178697b61e8b2e2cd';

  const url = `${basPath}/weather?id=${Shanghai}&units=${units}&appid=${appid}`;

  const xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const data = JSON.parse(xhttp.responseText);
        handleWeatherChange(data);
      }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
};

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: undefined,
    };

    this.handleWeatherChange = this.handleWeatherChange.bind(this);
  };

  handleWeatherChange(newWeather) {
    this.setState({
      weather: newWeather,
    });
  };

  componentDidMount() {
    getCurrentCityWeather(this.handleWeatherChange);
  }
  
  render() {
    return (
      <CurrentContainer>
      <Left>

      </Left>

      <Right>

      </Right>
      
      </CurrentContainer>
    )
  }
};

export default Current;