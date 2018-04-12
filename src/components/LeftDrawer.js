import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {spacing, typography} from 'material-ui/styles';
import {white} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Badge from './Badge';

const LeftDrawer = (props) => {
  const { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: '#7DCFFE',
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: '#414243',
      height: 84,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      span: {
        textTransform: 'uppercase',
        letterSpacing: 3,
        fontWeight: 400
      }
    },
    menuItem: {
      color: white,
      fontSize: 14,
      paddingTop: 10,
      paddingBottom: 10
    }
  };

  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          <span style={styles.logo.span}>Medical Board</span>
        </div>
        <div>
          {props.menus.map((menu, index) =>
            <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              rightIcon={<Badge number={menu.notifications}/>}
              containerElement={<Link to={menu.link}/>}
            />
          )}
        </div>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
