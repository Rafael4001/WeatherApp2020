import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import HeaderCustom from "../../components/HeaderCustom";
import { getCurrentWeather } from "../../config/localizationServices";
import TableDetails from './../../components/TableDetails'

import { WEEK_DAYS } from "../../constants";


const TODAY_WEATHER_TEXT = "Pogoda na dziś";


class TodayWeather extends Component {
  state = {
    city: '',
    temperature: 0,
    pressure: 0,
    humidity: 0,
  };

  async componentDidMount() {
    try {
      const data = await getCurrentWeather(this.props.localization.latitude, this.props.localization.longitude);

      this.setState({
        city: data.name,
        temperature: data.main.temp,
        feels_like: data.main.feels_like,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
      })
    } catch (e) {
      console.log(e)
    }
  }


  render() {
    const {classes} = this.props;
    const {localization} = this.props;
    const weekDay = WEEK_DAYS[moment().day()].label;
    const fullDate = moment().format("DD-MM-YYYY");

    return (
      <>
        <HeaderCustom title={TODAY_WEATHER_TEXT} variant="h4"/>
        <HeaderCustom title={`${weekDay} ${fullDate} `} variant="h6"/>

        <span>Aktualna pogoda dla miasta: <strong>{this.state.city}</strong></span><br/>
        <span
          className={classes.locationDetails}>Szerokość geograficzna: <strong>{localization.latitude.toFixed(4)}</strong></span><br/>
        <span
          className={classes.locationDetails}>Długość geograficzna: <strong>{localization.longitude.toFixed(4)}</strong></span>

        <TableDetails
          temperature={this.state.temperature}
          feels_like={this.state.feels_like}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </>
    )
  }
};

TodayWeather.propTypes = {
  classes: PropTypes.object.isRequired,
  localization: PropTypes.object.isRequired,
};

TodayWeather.displayName = 'TodayWeather';

export default TodayWeather