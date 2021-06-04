import React from 'react';
import styled from 'styled-components';
import Temperature from '~/components/Temperature';
// import Temperature from '../../components/Temperature/';
const CurrentContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-image: url('https://i.imgur.com/GhQZhaO.jpg');
  background-size: cover;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  color: white;
  padding: 64px 0;
  position: relative;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 40px 0;
  }
`;

const Left = styled.div`
  padding:0 96px;
  @media screen and (max-width: 1024px) {
    padding: 0 24px;
  }
`;

const Right = styled.div`
  padding: 0 96px;
  @media screen and (max-width: 1024px) {
    order: -1;
    text-align: center;
    padding: 0 24px;
  }
`;

const CurrentWeatherContainer = styled.div`
  text-align: center;
`;

const CurrentTemperatureContainer = styled.div`
  text-align: center;
`;

const CurrentTemperature = styled.span`
  font-size: 5rem;
`;

const CurrentWeather = styled.span`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
`;

const CurrentMetasContainer = styled.div`
  display: flex;
  margin-top:3rem;
  justify-content: space-around;
`;

const HumidityContainer = styled.div`
  margin-right: 32px;
  text-align: center;
`;

const WindContainer = styled.div`
  margin-left: 32px;
  text-align: center;
`;

const Metatitle = styled.span`
  color: hsla(0,0%,100%,.7);
  display: inline-block;
  margin-bottom: 0.75rem;

`;

const MetaValue = styled.span`
  color: hsla(0,0%,100%,.7);
  font-size: 1.25rem;
`;

const CurrentCityContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const CurrentCity = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  margin: 0.8rem;
  border-radius: 2px;
  &:after {
    content:"";
    position: absolute;
    width: 50%;
    background-color: white;
    height:3px;
    right:0;
    left: 0;
    bottom: 0;
    margin-left:auto;
    margin-right: auto;
    margin-top: 1rem;
  }

  @media screen and (max-width: 1024px) {
    font-weight: 300;
    margin: 0.8rem;
    &:after {
      height:2px;
    }
  }
`;

const Bottom = styled.div`
  position: absolute;
  background-color: rgba(0,0,0,.5);
  height: 1.5rem;
  left: 0;
  right:0;
  bottom: 0;
`;

const VerticalLine = styled.div`
  width: 2px;
  background-color: rgba(255, 255, 255, 0.7);
`;


const Shanghai = '1796231';

// const getCurrentCityWeather = (handleWeatherChange) => {
//   const basPath = 'https://api.openweathermap.org/data/2.5';
//   const units = 'metric';
//   const appid = 'c0167be7a6c2cff178697b61e8b2e2cd';

//   const url = `${basPath}/weather?id=${Shanghai}&units=${units}&appid=${appid}`;

//   const xhttp = new XMLHttpRequest();

//   xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         const data = JSON.parse(xhttp.responseText);
//         handleWeatherChange(data);
//       }
//   };
//   xhttp.open('GET', url, true);
//   xhttp.send();
// };

class Current extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     weather: undefined,
  //   };

  //   this.handleWeatherChange = this.handleWeatherChange.bind(this);
  // };

  // handleWeatherChange(newWeather) {
  //   this.setState({
  //     weather: newWeather,
  //   });
  // };

  // componentDidMount() {
  //   getCurrentCityWeather(this.handleWeatherChange);
  // }
  
  render() {
    return (
      <CurrentContainer>
      <Left>
        <CurrentTemperatureContainer>
          <CurrentTemperature>16.14 &#176;</CurrentTemperature>
        </CurrentTemperatureContainer>

        <CurrentWeatherContainer>
          <CurrentWeather>Clouds</CurrentWeather>
        </CurrentWeatherContainer>

        <CurrentMetasContainer>
          <HumidityContainer>
            <Metatitle>HUMIDITY</Metatitle>
            <br />
            <MetaValue>66%</MetaValue>
          </HumidityContainer>

          <VerticalLine />

          <WindContainer>
            <Metatitle>WIND</Metatitle>
            <br />
            <MetaValue>0.98 K/M</MetaValue>
          </WindContainer>
        </CurrentMetasContainer>
      </Left>

      <Right>
          <CurrentCityContainer>
            <CurrentCity>ShangHai</CurrentCity>
          </CurrentCityContainer>
          
        
      </Right>

      <Bottom />
      
      </CurrentContainer>
    )
  }
};

export default Current;