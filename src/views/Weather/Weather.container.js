import { connect } from 'react-redux';
import { setLatAndLong } from './../../store/actions'

import WeatherStyle from './Weather'
import { getLatAndLong } from "../../store/reducers/localization";

const mapStateToProps = state => ({
  localization: getLatAndLong(state.localization.currentLatitude, state.localization.currentLongitude)
});

const mapDispatchToProps = (dispatch) => ({
  setLatAndLong: (lat, long) => dispatch(setLatAndLong(lat, long)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherStyle)

