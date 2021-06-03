import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';

const ForecastContainer = styled.div`
  padding: 0 48px;
  flex: 1;
`;

const ForecastWeathers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ForecastWeather = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const Day = styled.h3`
  margin: 1rem 0;
  font-weight: 400;
  font-size: 1rem;
`;

const WeatherImg = styled.img`
  width: 60px;
  
`;

const ForecastTemperature = styled.span`
  font-size: 1.25rem;
  color: rgba(0,0,0,.5);
`;



const Forecast = () => {
  return (
    <ForecastContainer>
      <SubTitle>
        Forecast
      </SubTitle>

      <ForecastWeathers>
        <ForecastWeather>
          <Day>MON</Day>
          <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>
          <ForecastTemperature>9 &#176;</ForecastTemperature>
        </ForecastWeather>

        <ForecastWeather>
          <Day>MON</Day>
          <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>
          <ForecastTemperature>9 &#176;</ForecastTemperature>
        </ForecastWeather>

        <ForecastWeather>
          <Day>MON</Day>
          <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>
          <ForecastTemperature>9 &#176;</ForecastTemperature>
        </ForecastWeather>

        <ForecastWeather>
          <Day>MON</Day>
          <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>
          <ForecastTemperature>9 &#176;</ForecastTemperature>
        </ForecastWeather>

        <ForecastWeather>
          <Day>MON</Day>
          <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>
          <ForecastTemperature>9 &#176;</ForecastTemperature>
        </ForecastWeather>

      </ForecastWeathers>


    </ForecastContainer>
  );
};

export default Forecast;