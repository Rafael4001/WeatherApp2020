import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from 'prop-types'

import Button from "@material-ui/core/Button";


import TodayWeather from './../TodayWeather'
import LongTermWeather from './../LongTermWeather'
import SearchWeather from './../SearchWeather'
import PaperCustom from "../../components/PaperCustom";

const ROUTES = [
  {
    path: '/TodayWeather',
    name: 'Pogoda na dziś',
    component: TodayWeather,
  },
  {
    path: '/longTermWeather',
    name: 'Pogoda długoterminowa',
    component: LongTermWeather,
  },
];


class Weather extends Component {
  state = {
    isFetching: false,
    geolocationPermission: true,
  };

  async componentDidMount() {
    await this.getCurrentLocalization();
  }

  getCurrentLocalization = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showErrorView);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  showPosition = (position) => {
    this.props.setLatAndLong(
      position.coords.latitude,
      position.coords.longitude
    );

    this.setState({
      isOk: true,
    });
  };

  showErrorView = () => {

    this.setState({
      geolocationPermission: false,
    });
  };


  render() {
    const {classes} = this.props;

    if (!this.state.geolocationPermission) {

      return (
        <div className={classes.noGeolocalizationInfo}>
          <p>
            Przepraszamy, aby korzystać z aplikacji wymagana jest zgoda na geolokalizację.
          </p>
          <p>
            Aby wyrazić zgodę na geolokalizację należy wejść w ustawienia przeglądarki przez kliknięcie ikonki
            umieszczonej w pasku adresu strony i zezwolić na geolokalizację.
          </p>
        </div>
      )

    } else if (!this.state.isOk) {
      return null
    }


    return (
      <Router>
        <div className={classes.main}>
          <ul>
            <li>
              <Link to='/'>
                <Button variant={'outlined'}>Wyszukaj pogodę</Button>
              </Link>
            </li>

            {ROUTES.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>
                  <Button variant={'outlined'}>{link.name}</Button>
                </Link>
              </li>
            ))}
          </ul>

          <PaperCustom>
            <Switch>
              {ROUTES.map((route) => (
                <Route key={route.path} {...route}/>
              ))}
              <Route path="/" component={SearchWeather}/>
            </Switch>
          </PaperCustom>
        </div>
      </Router>
    );
  }
}

Weather.propTypes = {
  classes: PropTypes.object.isRequired,
  setLatAndLong: PropTypes.func.isRequired,
};

Weather.displayName = 'Weather';

export default Weather;
