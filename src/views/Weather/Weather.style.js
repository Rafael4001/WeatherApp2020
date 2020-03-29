import { withStyles } from '@material-ui/core/styles';
import WeatherContainer from './Weather.container'


const styles = () => ({
  main: {
    '& ul': {
      listStyle: 'none',
      padding: '1rem',
      display: 'flex',
    },

    '& a': {
      textDecoration: 'none',
    }
  },
  noGeolocalizationInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'red',
  }
});


export default withStyles(styles)(WeatherContainer)