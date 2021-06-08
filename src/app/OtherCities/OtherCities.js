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
  flex: 1;
`;

const CityTemperature = styled.span`
  font-size: 1.25rem;
  color: rgba(0,0,0,.5);
`;

const WeatherImg = styled.img`
  margin-left: 1rem;
  width: 50px;
`;

const MoreCitiesButton = styled.button`
  border: 0;
  padding: 0;
  background-color: transparent;
  font-weight: 300;
  display: ${({ toggle }) => toggle ? 'none' : 'block'};
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const OtherCitiesSection = styled.div`
  display: ${({ toggle }) => toggle ? 'flex' : 'none'};
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
    }
  }

  toggleMoreCities() {
    this.setState({
      toggle: true,
    })
  }

  render() {
    const { toggle } = this.state;

    return (
      <OtherCitiesContainer>
        <MoreCitiesButton toggle={toggle} onClick={()=>this.toggleMoreCities()}>
          View More Cities...
        </MoreCitiesButton>
  
        <OtherCitiesSection toggle={toggle}>
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
        </OtherCitiesSection>
      </OtherCitiesContainer>
    );
  }
  
};

export default OtherCities;