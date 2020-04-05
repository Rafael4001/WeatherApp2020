import React from 'react';
import PropTypes from "prop-types";
import moment from "moment";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useStyles } from './RowTable.style'


import {
  ICONS_WEATHER,
  HUMIDITY_ICON,
  PRESSURE_ICON, WEEK_DAYS,
} from '../../constants'

const RowTable = ({
                    humidity,
                    pressure,
                    time,
                    icon,
                    temperatureHigh,
                    temperatureLow,
                    apparentTemperatureHigh,
                    apparentTemperatureLow,
                  }) => {
  const classes = useStyles();

  const fahrenheitToCelsjusz = (value) => (
    (value - 32) / 1.8
  );

  const humidityFixed = humidity && humidity.toFixed(0);
  const pressureFixed = pressure && pressure.toFixed(0);
  const temperatureHighCelsjusz = fahrenheitToCelsjusz(temperatureHigh).toFixed(1);
  const temperatureLowCelsjusz = fahrenheitToCelsjusz(temperatureLow).toFixed(1);
  const apparentTempHighCelsjusz = fahrenheitToCelsjusz(apparentTemperatureHigh).toFixed(1);
  const apparentTempLowCelsjusz = fahrenheitToCelsjusz(apparentTemperatureLow).toFixed(1);

  const date = moment(time * 1000).format('DD-MM-YYYY');
  const day = WEEK_DAYS[moment(time * 1000).day()].label;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.dayInfoContainer}>
        <div><strong>{day}</strong></div>
        <div className={classes.date}>{date}</div>
      </div>

      <div className={classes.tempInfoContainer}>
        <img src={ICONS_WEATHER[icon].iconUrl} className={classes.bigIcon} alt={ICONS_WEATHER[icon].alt}/>
        <table>
          <thead>
          <tr align={'left'}>
            <th/>
            <th className={classes.tempHigh}>max°C</th>
            <th className={classes.tempLow}>min°C</th>
          </tr>

          </thead>
          <tbody>
          <tr align={'left'}>
            <td/>
            <td className={classes.tempHigh}>{temperatureHighCelsjusz}°C</td>
            <td className={classes.tempLow}>{temperatureLowCelsjusz}°C</td>
          </tr>
          <tr className={classes.tempHighApparent}>
            <td>odczuwalna</td>
            <td>{apparentTempHighCelsjusz}°C</td>
            <td>{apparentTempLowCelsjusz}°C</td>
          </tr>
          </tbody>
        </table>
      </div>

      <List dense className={classes.detailsInfoContainer}>
        <ListItem>
          <img src={HUMIDITY_ICON} className={classes.icon} alt={ICONS_WEATHER[icon].alt}/>
          <ListItemText>wilgotność {humidityFixed} %</ListItemText>
        </ListItem>
        <ListItem>
          <img src={PRESSURE_ICON} className={classes.icon} alt={ICONS_WEATHER[icon].alt}/>
          <ListItemText>ciśnienie {pressureFixed} hPa</ListItemText>
        </ListItem>
      </List>
    </div>
  )
};


RowTable.propTypes = {
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temperatureHigh: PropTypes.number.isRequired,
  temperatureLow: PropTypes.number.isRequired,
  apparentTemperatureHigh: PropTypes.number.isRequired,
  apparentTemperatureLow: PropTypes.number.isRequired,
};

RowTable.displayName = 'RowTable';

export default RowTable;
