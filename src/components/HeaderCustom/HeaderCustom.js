import React from 'react';
import PropTypes from "prop-types";

import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";


const HeaderCustom = ({title, variant}) => {
  return (
    <Typography variant={variant}>
      {title}
      <Divider/>
    </Typography>
  )
};


HeaderCustom.propTypes = {
  title: PropTypes.string.isRequired,
};

HeaderCustom.defaultProps = {
  title: 'set Title',
  variant: 'h1',
};

HeaderCustom.displayName = 'HeaderCustom';

export default HeaderCustom;
