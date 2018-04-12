import React, { PropTypes } from 'react';

const Badge = (props) => {
  const { number } = props;
  if (!number) {
    return null;
  }
  const styles = {
    container: {
      width: 24,
      height: 24,
      display: 'flex',
      position: 'absolute',
      top: 0,
      margin: 12,
      right: 4,
      alignItems: 'center'
    },
    text: {
      width: 20,
      height: 15,
      backgroundColor: '#FE9767',
      borderRadius: 2,
      lineHeight: '15px',
      fontSize: 12,
      display: 'block',
      textAlign: 'center'
    }
  };
  return (
    <div style={styles.container}>
      <span style={styles.text}>{number}</span>
    </div>
  );
};

Badge.propTypes = {
  number: PropTypes.number
};

export default Badge;
