import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoubleBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Debt',
          type: 'bar', // Specify bar type for this dataset
          backgroundColor: '#9048EC',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderRadius: 5,
          borderWidth: 0,
          data: [10, 20, 30, 40, 50, 60],
        },
        {
          label: 'Credit',
          type: 'bar', // Specify line type for this dataset
          fill: false,
          backgroundColor: '#C196F8',
          borderRadius: 5,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 0,
          data: [30, 40, 20, 50, 25, 17],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        },
       
      },
    };

    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });
  }, []);

  return <canvas ref={chartRef} width="400" height="200" />;
};

export default DoubleBarChart;
