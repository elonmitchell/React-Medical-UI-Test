import React from 'react';
import PieChart from './PieChart';
import LineChart from './LineChart';

const styles = {
  container: {
    backgroundColor: '#7ac3fa',
    display: 'flex',
    flexFlow: 'wrap',
    width: '100%'
  },
  cellContainer: {
    borderRight: 'solid 1px white',
    borderBottom: 'solid 1px white',
  },
  rowContainer: {
    padding: 20,
    height: 120,
    display: 'flex',
    justifyContent: 'space-around'
  },
  labelGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dateNumber: {
    fontSize: 38,
    fontWeight: '100',
    color: 'white',
    display: 'block',
    lineHeight: 1,
  },
  dateName: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  categoryContainer: {
    padding: 20,
    height: 120,
    display: 'flex',
    justifyContent: 'center'
  },
  categoryFirstContainer: {
    border: 'solid 1px white',
    borderRight: 'none',
    borderRadius: '5px 0 0 5px',
    padding: '10px 20px 10px 20px',
  },
  categoryMiddleContainer: {
    border: 'solid 1px white',
    borderRight: 'none',
    padding: '10px 20px 10px 20px',
  },
  categoryLastContainer: {
    border: 'solid 1px white',
    borderRadius: '0 5px 5px 0',
    padding: '10px 20px 10px 20px',
  },
  categoryNumber: {
    fontSize: 22,
    fontWeight: '100',
    color: 'white',
    display: 'block',
  },
  categoryName: {
    fontSize: 9,
    fontWeight: 'bold',
    color: 'white',
  },
};

class Summary extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.cellContainer} className="col-xs-12 col-md-6 col-lg-3">
          <div style={styles.rowContainer} className="row center-md middle-md around-md">
            <div style={styles.labelGroup}>
              <label style={styles.dateNumber}>22</label>
              <label style={styles.dateName}>DAYS</label>
            </div>
            <div style={styles.labelGroup}>
              <label style={styles.dateNumber}>08</label>
              <label style={styles.dateName}>HOURS</label>
            </div>
            <div style={styles.labelGroup}>
              <label style={styles.dateNumber}>07</label>
              <label style={styles.dateName}>MINUTES</label>
            </div>
          </div>
        </div>
        <div style={styles.cellContainer} className="col-xs-12 col-md-6 col-lg-5">
          <div style={styles.categoryContainer} className="row center-md middle-md">
            <div style={styles.categoryFirstContainer}>
              <label style={styles.categoryNumber}>892</label>
              <label style={styles.categoryName}>CLIENTS</label>
            </div>
            <div style={styles.categoryMiddleContainer}>
              <label style={styles.categoryNumber}>165</label>
              <label style={styles.categoryName}>SALES</label>
            </div>
            <div style={styles.categoryMiddleContainer}>
              <label style={styles.categoryNumber}>89%</label>
              <label style={styles.categoryName}>% SALES</label>
            </div>
            <div style={styles.categoryMiddleContainer}>
              <label style={styles.categoryNumber}>120</label>
              <label style={styles.categoryName}>BOOKED</label>
            </div>
            <div style={styles.categoryLastContainer}>
              <label style={styles.categoryNumber}>12%</label>
              <label style={styles.categoryName}>PIPELINE</label>
            </div>
          </div>
        </div>
        <div style={styles.cellContainer} className="col-xs-12 col-md-6 col-lg-2">
          <div style={styles.rowContainer} className="row center-md middle-md around-md">
            <PieChart
              data={
                [
                  ['PieChart 1', 79],
                  ['PieChart 2', 41],
                ]
              }
            />
            <PieChart
              data={
                [
                  ['PieChart 1', 47],
                  ['PieChart 2', 31],
                  ['PieChart 3', 31],
                ]
              }
            />
          </div>
        </div>
        <div style={styles.cellContainer} className="col-xs-12 col-md-6 col-lg-2">
          <div style={styles.rowContainer} className="row center-md middle-md around-md">
            <LineChart
              data={
                [100.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 196.4, 194.1, 95.6, 154.4]
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
