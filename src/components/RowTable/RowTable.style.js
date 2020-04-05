import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
  mainContainer: {
    display: 'grid',
    gridTemplateColumns: '7rem 12rem auto',
    border: '0.0625rem solid #d3d3d3',
  },
  dayInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '0.0625rem solid #d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    color: '#54549d',
    fontSize: '0.75rem'
  },
  tempInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderRight: '0.0625rem solid #d3d3d3',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    fontWeight: 'bold',
  },
  detailsInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  icon: {
    width: '1.25rem',
    margin: '0.1875rem 1rem ',
  },
  bigIcon: {
    width: '2.75rem',
    margin: '0 1rem 0 0',
  },
  detailsRowContainer: {
    width: '0.8rem',
    margin: '0.1875rem',
  },
  tempHighLowContainer: {
    display: 'grid',
    width: '10rem',
  },
  tempHigh: {
    color: '#dd5943',
    width: '4rem',
  },
  tempLow: {
    color: '#4455dd',
  },
  tempBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  tempHighApparent: {
    fontSize: '0.75rem',
    color: '#b6b6b6',
  },
});