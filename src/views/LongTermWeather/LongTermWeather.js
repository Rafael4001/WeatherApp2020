import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RowTable from '../../components/RowTable'
import HeaderCustom from "../../components/HeaderCustom";
import { getCurrentWeather, getLongTermWeather } from '../../utlities/localizationServices'

const LONG_TERM_WEATHER_TEXT = "Pogoda długoterminowa";

class LongTermWeather extends Component {
  state = {
    daysTable: [],
    currentCity: '',
  };

  async componentDidMount() {
    try {
      const data = await getLongTermWeather(this.props.localization.latitude, this.props.localization.longitude);
      const currentCityData = await getCurrentWeather(this.props.localization.latitude, this.props.localization.longitude);
      if (data) {
        this.setState({
          daysTable: data.daily.data,
          currentCity: currentCityData.name
        })
      }
    } catch (e) {
      alert(e)
    }
  }


  render() {
    const {daysTable, currentCity} = this.state;

    return (
      <>
        <HeaderCustom title={LONG_TERM_WEATHER_TEXT} variant="h4"/>
        <span>Aktualna pogoda dla: <strong>{currentCity}</strong></span>

        {(daysTable.length === 0)
          ? <span>loading...</span>
          : daysTable.map(item => (
            <RowTable
              key={item.time}
              apparentTemperatureHigh={item.apparentTemperatureHigh}
              apparentTemperatureLow={item.apparentTemperatureLow}
              humidity={item.humidity * 100}
              icon={item.icon}
              pressure={item.pressure}
              temperatureHigh={item.temperatureHigh}
              temperatureLow={item.temperatureLow}
              time={item.time}
            />
          ))
        }
      </>
    )
  }
};


LongTermWeather.propTypes = {
  localization: PropTypes.object.isRequired,
};

LongTermWeather.displayName = 'LongTermWeather';

export default LongTermWeather