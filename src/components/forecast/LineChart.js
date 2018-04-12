import React, { PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

const LineChart = ({ data }) => {

  const styles = {
    container: {
    },
  };

  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 140,
      height: 70,
      spacing: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    title: {
      text: '',
    },
    colors: ['#61AEEA'],
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      column: {
        borderColor: 'transparent',
      }
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    series: [{
      data: data,
      type: 'column'
    }]
  };

  return (
    <div style={styles.container}>
      <ReactHighcharts config={config} />
    </div>

  );
};

LineChart.propTypes = {
  data: PropTypes.array
};

export default LineChart;
