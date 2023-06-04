import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

const StatsPage = () => {

  // Sample data for the charts
  
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['red', 'blue', 'yellow'],
      },
    ],
  };

  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Revenue',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Line Chart</h1>
      <Line data={lineChartData} />

      <h1>Pie Chart</h1>
      <Pie data={pieChartData} />

      <h1>Bar Chart</h1>
      <Bar data={barChartData} />
    </div>
  );
};

export default StatsPage;
