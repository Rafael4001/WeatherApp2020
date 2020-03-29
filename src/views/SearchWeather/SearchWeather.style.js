import { withStyles } from '@material-ui/core/styles';
import SearchWeather from './SearchWeather'


const styles = () => ({
  formContainer: {
    display: 'flex',
    margin: '0.5rem 0',
  },
  searchPanel: {
    display: 'flex',
  },
});


export default withStyles(styles)(SearchWeather)