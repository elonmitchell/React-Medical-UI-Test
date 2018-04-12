import React from 'react';
import ReactHighcharts from 'react-highcharts';
import DateRangeFilter from './DateRangeFilter';
import { checkDateRange } from '../../utils';

const styles = {
  container: {
    paddingLeft: 16,
    paddingRight: 16
  }
};

const generateData = () => {
  // generate an array of random data
  const data = [];
  const time = (new Date()).getTime();
  for (let i = -19; i <= 0; i ++) {
    data.push({
      x: time + i * 1000,
      y: 90 + Math.floor(Math.random() * 10)
    });
  }
  return data;
};

const addData = () => {
  // generate an array of random data
  const time = (new Date()).getTime();
  return {
    x: time,
    y: 90 + Math.floor(Math.random() * 10)
  };
};

const config = {
  chart: {
    type: 'spline',
    animation: ReactHighcharts.Highcharts.svg,
    marginRight: 10,
  },
  title: {
    text: 'Live Heart Rate Change (bpm)'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150
  },
  yAxis: {
    title: {
      text: null
    },
    allowDecimals: false
  },
  legend: false,
  tooltip: {
    valueSuffix: ' bpm'
  },
  series: null
};

class HeartRate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateData(),
      range: '6M'
    };
    this.timeInstance = null;
  }

  componentDidMount() {
    this.setData();
  }  

  componentWillUnmount() {
    if (this.timeInstance) {
      clearInterval(this.timeInstance);
    }
  }

  setData() {
    if (this.timeInstance) {
      clearInterval(this.timeInstance);
    }
    this.timeInstance = setInterval(() => {
      const chart = this.refs.chart.getChart();
      chart.series[0].addPoint(addData(), true, true);
    }, 1000);
  }

  handleChange (range) {
    this.setState({ range });
  }

  render() {
    const { range } = this.state;
    config.series = [{
      name: 'Heart Rate',
      data: this.state.data.filter((point) => checkDateRange(point.x, range))
    }];
    return (
      <div style={styles.container}>
        <DateRangeFilter range={range} onChange={this.handleChange.bind(this)} />
        <ReactHighcharts config={config} ref="chart"/>
      </div>
    );
  }
}

export default HeartRate;
