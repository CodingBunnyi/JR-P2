import React from 'react';
import styled from 'styled-components';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

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
  @media screen and (max-width: 1024px) {
    margin-top: 3rem;
  }
`;

const CurrentTemperature = styled.span`
  font-size: 5rem;
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
    text-align: center;
  }
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


const SHANGHAI_CITY_ID = '1796231';

const getCurrentCityWeather = () => OpenWeatherMap.get(`weather`, {
  params: {
    id: SHANGHAI_CITY_ID,
  },
}).then((response) => response.data);

class Current extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
    };

    this.handleDataChange = this.handleDataChange.bind(this);
  };

  handleDataChange(newData) {
    this.setState({
      data: newData,
    });
  };

  componentDidMount() {
    getCurrentCityWeather().then(this.handleDataChange);
  }
  
  render() {
    const { data } = this.state;

    console.log(data);

    if(!data) {
      return 'Loading';
    }

    return (
      <CurrentContainer>
      <Left>
        <CurrentTemperatureContainer>
          <CurrentTemperature>{data.main.temp} &#176;</CurrentTemperature>
        </CurrentTemperatureContainer>

        <CurrentWeatherContainer>
          <CurrentWeather>{data.weather[0].main}</CurrentWeather>
        </CurrentWeatherContainer>

        <CurrentMetasContainer>
          <HumidityContainer>
            <Metatitle>HUMIDITY</Metatitle>
            <br />
            <MetaValue>{data.main.humidity} %</MetaValue>
          </HumidityContainer>

          <VerticalLine />

          <WindContainer>
            <Metatitle>WIND</Metatitle>
            <br />
            <MetaValue>{data.wind.speed} KM/H</MetaValue>
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