import React from 'react';
import PropTypes from "prop-types";

import { useStyles } from './PaperCustom.style'

import Paper from "@material-ui/core/Paper";


const PaperCustom = ({children,}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.main}>
      {children}
    </Paper>
  )
};


PaperCustom.propTypes = {
  children: PropTypes.node.isRequired,
};

PaperCustom.displayName = 'PaperCustom';

export default PaperCustom;
