import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

import HeaderCustom from "../../components/HeaderCustom";

import { getCurrentWeatherByCityName } from '../../config/localizationServices'
import TableDetails from "../../components/TableDetails";


const TITLE_TEXT = "Wyszukaj pogodę";


const SearchWeather = ({classes}) => {
  const [cityName, setCityName] = useState('');
  const [searchedCityName, setSearchedCityName] = useState('');

  const [temperature, setTemperature] = useState(0);
  const [feels_like, setFeels_like] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [pressure, setPressure] = useState(0);

  const [noResult, setNoResult] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await getCurrentWeatherByCityName(cityName);
      setTemperature(data.main.temp);
      setFeels_like(data.main.feels_like);
      setHumidity(data.main.humidity);
      setPressure(data.main.pressure);
      setNoResult('');
      setSearchedCityName(cityName)

    } catch (e) {
      console.log(e);
      setSearchedCityName('');
      setNoResult('nie znaleziono pasujących wyników')
    }
  };

  const handleChange = (event) => {
    setCityName(event.target.value)
  };

  const handleClear = () => {
    setSearchedCityName('');
    setCityName('');
  };


  return (
    <>
      <HeaderCustom title={TITLE_TEXT} variant="h4"/>

      <form
        noValidate autoComplete="off"
        onSubmit={(event) => handleSubmit(event)}
        className={classes.formContainer}
      >
        <TextField
          id="cityName"
          label="miasto"
          value={cityName}
          onChange={handleChange}
        />
        <Button className={classes.button} disabled={!cityName} type='submit' variant="outlined">Pokaż pogodę</Button>
        <Button
          disabled={!cityName}
          variant="outlined"
          onClick={handleClear}
        >
          <ClearIcon/>
        </Button>
      </form>

      {searchedCityName
      && <>
        <span>Aktualna pogoda dla miasta: <strong>{searchedCityName.toUpperCase()}</strong></span><br/>

        <TableDetails
          temperature={temperature}
          feels_like={feels_like}
          humidity={humidity}
          pressure={pressure}
        />
      </>
      }
      {noResult}
    </>
  )
};


SearchWeather.displayName = 'SearchWeather';

SearchWeather.propTypes = {
  classes: PropTypes.object.isRequired,
//   prefix: PropTypes.string.isRequired,
//   disabled: PropTypes.bool,
};

export default SearchWeather