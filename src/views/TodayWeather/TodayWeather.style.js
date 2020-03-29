import { withStyles } from '@material-ui/core/styles';

import TodayWeatherContainer from './TodayWeather.container'

const styles = () => ({
    locationDetails: {
      fontSize: '0.75rem',
    }
  })
;

export default withStyles(styles)(TodayWeatherContainer)