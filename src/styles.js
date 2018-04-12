import {typography} from 'material-ui/styles';
import {white, blue400} from 'material-ui/styles/colors';

const styles = {
  navBar: {
    fontSize: 15,
    fontWeight: typography.fontWeightMedium,
    backgroundColor: blue400,
    display: 'block',
    textAlign: 'center',
    color: white,
    letterSpacing: 2,
    lineHeight: '36px',
    textTransform: 'uppercase',
    position: 'fixed',
    top: 48,
    width: '100%',
    zIndex: 100,
    height: 36
  },
  title: {
    fontSize: 24,
    fontWeight: typography.fontWeightLight,
    marginBottom: 20
  },
  paper: {
    padding: 30
  },
  clear: {
    clear: 'both'
  }
};

export default styles;
