import React from 'react';
import moment from 'moment';
import ReactHighcharts from 'react-highcharts';
import DateRangeFilter from './DateRangeFilter';
import { checkDateRange } from '../../utils';

const styles = {
  container: {
    paddingLeft: 16,
    paddingRight: 16
  }
};

const generateBPData = () => {
  const data = [];
  const start = +moment().subtract(100, 'day');
  for (let i = 0; i < 100; i ++) {
    data.push([
      start + i * 86400000,
      90 + Math.floor(Math.random() * Math.random() * 60)
    ]);
  }
  return data;
};

const config = {
  chart: {
    type: 'area'
  },
  title: {
    text: 'Blood Pressure rate over time (mmHg)'
  },
  subtitle: {
    text: null
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      millisecond: '%H:%M:%S.%L',
      second: '%H:%M:%S',
      minute: '%H:%M',
      hour: '%H:%M',
      day: '%e %b',
      week: '%e %b',
      month: '%b \'%y',
      year: '%Y'
    }
  },
  yAxis: {
    title: {
      text: null
    },
    allowDecimals: false
  },
  tooltip: {
    crosshairs: true,
    shared: true,
    valueSuffix: 'mmHg'
  },
  legend: {
    enabled: false
  }
};

class BloodPressure extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      range: '6M',
      data: generateBPData()
    };
  }

  handleChange (range) {
    this.setState({ range });
  }

  render() {
    const { range } = this.state;
    config.series = [{
      name: 'Blood Pressure',
      data: this.state.data ? this.state.data.filter((point) => checkDateRange(point[0], range)) : []
    }];
    return (
      <div style={styles.container}>
        <DateRangeFilter range={range} onChange={this.handleChange.bind(this)} />
        <ReactHighcharts config={config} />
      </div>
    );
  }
}

export default BloodPressure;
