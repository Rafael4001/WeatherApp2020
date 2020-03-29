import { connect } from 'react-redux';
import { getLatAndLong } from './../../store/reducers/localization'

import LongTermWeather from './LongTermWeather'


const mapStateToProps = state => ({
  localization: getLatAndLong(state.localization.currentLatitude, state.localization.currentLongitude)
});


export default connect(
  mapStateToProps
)(LongTermWeather)