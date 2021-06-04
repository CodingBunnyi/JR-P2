import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';

const OtherCitiesContainer = styled.div`
  padding: 0 48px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 24px 36px;
    border-top: 1px solid rgba(0,0,0,.2);
  }
`;

const City = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 0;
  background-color: white;
  cursor: pointer;
  text-align: left;
  padding: 0;
`;

const CityName = styled.h3`
  width: 120px;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1rem;
`;

const CityTemperature = styled.span`
  font-size: 1.25rem;
  color: rgba(0,0,0,.5);
`;

const WeatherImg = styled.img`
  margin-left: 1rem;
  width: 50px;
`;

const OtherCities = () => {
  return (
    <OtherCitiesContainer>
      <SubTitle>
        Other Cities
      </SubTitle>

      <City>
        <CityName>SuZhou</CityName>
        
        <CityTemperature>21 &#176;</CityTemperature>
        
        <WeatherImg src="http://openweathermap.org/img/wn/04d.png" alt="Clouds"/>

      </City>

      <City>
        <CityName>WuXi</CityName>
        
        <CityTemperature>18 &#176;</CityTemperature>
        
        <WeatherImg src="http://openweathermap.org/img/wn/11d@2x.png" alt="Thunderstorm"/>

      </City>

      <City>
        <CityName>KunShan</CityName>
        
        <CityTemperature>21 &#176;</CityTemperature>
        
        <WeatherImg src="http://openweathermap.org/img/wn/01d@2x.png" alt="Clear"/>

      </City>
    </OtherCitiesContainer>
  );
};

export default OtherCities;