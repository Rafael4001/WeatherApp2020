import { connect } from 'react-redux';
import { getLatAndLong } from './../../store/reducers/localization'

import TodayWeather from './TodayWeather'


const mapStateToProps = state => ({
  localization: getLatAndLong(state.localization.currentLatitude, state.localization.currentLongitude)
});

export default connect(
  mapStateToProps
)(TodayWeather)