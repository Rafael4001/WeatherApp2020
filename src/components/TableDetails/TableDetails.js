import React from 'react';
import PropTypes from "prop-types";

import { useStyles } from './TableDetails.style'

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";


const TableDetails = ({
                        temperature,
                        feels_like,
                        humidity,
                        pressure
                      }) => {
  const classes = useStyles();

  const temperatureFixed = temperature && temperature.toFixed(1);
  const feels_likeFixed = feels_like && feels_like.toFixed(1);
  const humidityFixed = humidity && humidity.toFixed(0);
  const pressureFixed = pressure && pressure.toFixed(0);

  return (
    <Table className={classes.main}>
      <TableHead>
        <TableRow>
          <TableCell>Temperatura [°C]</TableCell>
          <TableCell align="right">temp. odczuwalna [°C]</TableCell>
          <TableCell align="right">wilgotność [%]</TableCell>
          <TableCell align="right">Ciśnienie [hPa]</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell component="th" scope="row">{temperatureFixed}°C</TableCell>
          <TableCell align="right">{feels_likeFixed}°C</TableCell>
          <TableCell align="right">{humidityFixed} %</TableCell>
          <TableCell align="right">{pressureFixed} hPa</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
};


TableDetails.propTypes = {
  temperature: PropTypes.number,
  feels_like: PropTypes.number,
  humidity: PropTypes.number,
  pressure: PropTypes.number,
};

TableDetails.defaultProps = {
  temperature: null,
  feels_like: null,
  humidity: null,
  pressure: null
};

TableDetails.displayName = 'TableDetails';

export default TableDetails;
