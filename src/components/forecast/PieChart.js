import React, { PropTypes } from 'react';
import ReactHighcharts from 'react-highcharts';

const PieChart = ({ data }) => {

  const styles = {
    container: {
    },
  };

  const config = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false,
      width: 70,
      height: 70,
      spacing: [0, 0, 0, 0],
      margin: [0, 0, 0, 0],
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    title: {
      text: data[0][1],
      align: 'center',
      verticalAlign: 'middle',
      y: 5,
      style: { "color": 'white', "fontSize": "13px" },
    },
    colors: ['#61AEEA', '#fff', '#ED8B5E'],
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        startAngle: 0,
        endAngle: 360,
        center: ['50%', '50%'],
        borderColor: 'transparent',
      }
    },
    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [{
      type: 'pie',
      name: 'Browser share',
      innerSize: '85%',
      data: data
    }]
  };

  return (
    <div style={styles.container}>
      <ReactHighcharts config={config} />
    </div>

  );
};

PieChart.propTypes = {
  data: PropTypes.array
};

export default PieChart;
