import React from 'react';
import styled from 'styled-components';
import SubTitle from '~/components/SubTitle';
import OpenWeatherMap from '../../utils/OpenWeatherMap';

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
  width:100%;
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

const OTHER_CITIES= [{
  name: 'Suzhou', id: '1886760', 
}, {
  name: 'Beijing', id: '2038349',
}, {
  name: 'Guangzhou' , id:'1809858',
}];

const getOtherCitiesWeather = () => {
  const otherCitiesId = OTHER_CITIES.map((city) => city.id).join(',');

  return OpenWeatherMap.get(`group`, {
    params: {
      id: otherCitiesId,
    }
  }).then((response) => response.data);
};

class OtherCities extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      data: undefined,
    }

    this.handleDataChange = this.handleDataChange.bind(this);
  }

  toggleMoreCities() {
    this.setState({
      toggle: true,
    })
  }

  handleDataChange(newData) {
    this.setState({
      data: newData,
    });
  }

  componentDidMount() {
    getOtherCitiesWeather().then(this.handleDataChange);
  }

  render() {
    const { data } = this.state;
    const { toggle } = this.state;

    console.log(data);

    if(!data) {
      return 'Loading';
    }

    return (

      <OtherCitiesContainer>
        <MoreCitiesButton toggle={toggle} onClick={()=>this.toggleMoreCities()}>
          View More Cities...
        </MoreCitiesButton>
  
        <OtherCitiesSection toggle={toggle}>
          <SubTitle>
            Other Cities
          </SubTitle>

          {data.list.map(({id, name, main: { temp }, weather: [{ icon, main }]}) => (
            <City key={id}>
              <CityName>{name}</CityName>
              
              <CityTemperature>{temp} &#176;</CityTemperature>
              
              <WeatherImg src={`http://openweathermap.org/img/wn/${icon}.png`} alt={main}/>
  
            </City>
          ))}
          
        </OtherCitiesSection>
      </OtherCitiesContainer>
    );
  }
  
};

export default OtherCities;