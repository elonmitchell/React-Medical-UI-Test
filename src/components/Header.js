import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white, blue400 } from 'material-ui/styles/colors';

class Header extends React.Component {

  render() {
    const { styles, handleChangeRequestNavDrawer } = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 48,
        backgroundColor: '#fff',
        boxShadow: null
      },
      menuButton: {
        marginLeft: 10,
        backgroundColor: blue400,
        marginTop: 0
      },
      iconStyleLeft: {
        marginTop: 0,
        marginRight: 0
      },
      iconStyleRight: {
        marginTop: 8
      },
      iconsRightContainer: {
        marginLeft: 20
      },
      buttonText: {
        fontSize: 14,
        letterSpacing: 2
      }
    };

    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          iconStyleLeft={style.iconStyleLeft}
          iconElementLeft={
            <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
              <Menu color={white} />
            </IconButton>
          }
          iconStyleRight={style.iconStyleRight}
          iconElementRight={
            <div style={style.iconsRightContainer}>
              <FlatButton label="PROFILE" primary labelStyle={style.buttonText} containerElement={<Link to="/profile"/>}/>
              <FlatButton label="LOGOUT" labelStyle={style.buttonText} containerElement={<Link to="/login"/>}/>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
