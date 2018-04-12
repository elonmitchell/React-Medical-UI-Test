import React from 'react';
import HeartRate from '../components/forecast/HeartRate';
import BloodPressure from '../components/forecast/BloodPressure';
import RespiratoryRate from '../components/forecast/RespiratoryRate';
import Summary from '../components/forecast/Summary';

const styles = {
  container: {
    width: '99.99%'
  }
}

class ForecastPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.forceUpdate();
    }, 0);
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="row m-0">
          <Summary />
          <div className="col-xs-12 col-md-6 p-0">
            <BloodPressure />
          </div>
          <div className="col-xs-12 col-md-6 p-0">
            <HeartRate />
          </div>
          <div className="col-xs-12 col-md-6 p-0">
            <RespiratoryRate />
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastPage;
