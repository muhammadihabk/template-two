const ctx = document.getElementById('analytics-chart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: '',
        data: [11, 19, 3, 5, 2, 3, 15],
        borderWidth: 2,
        borderColor: '#636363',
        tension: 0.5,
        backgroundColor: '#636363',
        pointBackgroundColor: '#636363',
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
