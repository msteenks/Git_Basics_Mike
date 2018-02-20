var myVar = setInterval(myTimer, 1500);
var counter = 5;

function myTimer() {

  counter--;
  document.getElementById('counter').innerHTML = '4013' + counter;
  document.getElementById('eenheid').innerHTML = ' ' + 'km/h';

  if(counter >= 3) {
      counter = Math.round(Math.random()*(4-9))+9; // generate new time (between 4 and 9)

  }

}

// var ctx = document.getElementById('stock');
// var myDoughnutChart = new Chart(ctx, {
//     type: 'doughnut',
//
//     data: {
//       label: ['Water', 'Food'],
//       datasets: [
//         {
//           label: 'Stock',
//           backgroundColor: ['#283137', '#58615b'],
//           borderWidth: [0, 0],
//           data: [70, 20]
//         }
//       ],
//       labels: ['Water', 'Food'],
//     },
//     options: {
//       cutoutPercentage: 80,
//     }
// });

var ctx = document.getElementById('stock');
var myDoughnutChart = new Chart(ctx, {
    type: 'radar',
    backgroundColor: '#283137',
    data: {
      labels: ['%', 'Oxygen', 'Fuel', 'Food', 'Water'],
      datasets: [
        {
          label: 'Stock',
          backgroundColor: 'rgba(40, 49, 55, 0.1)',
          borderColor: '#283137',
          borderWidth: 2,
          lineTension: 10,
          data: [0, 70, 40, 80, 100]
        }
      ]
    },
    options: {
    animation: {
      duration: 5000,
    },
    legend: {
        display: false,
    }
  }
});

var ctx = document.getElementById('planets');
var myDoughnutChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
      label: ['Earth', 'Venus', 'Mercury'],
      datasets: [
        {
          label: 'Distance',
          backgroundColor: ['#283137', '#a7a7a7', '#bdcad0'],
          borderWidth: [0, 0, 0, 0],
          data: [49, 90, 141]
        }
      ],
      labels: ['Earth', 'Venus', 'Mercury'],
    },
    options: {
      cutoutPercentage: 80,
      animation: {
        duration: 5000,
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 10,
          fontSize: 10,
        }
      }
    }
});

var ctx = document.getElementById('distance');
var myDoughnutChart = new Chart(ctx, {
    type: 'pie',
    data: {
      label: ['Distance'],
      datasets: [
        {
          label: 'distance',
          // backgroundColor: ['#283137'],
          backgroundColor: 'rgba(40, 49, 55, 0.1)',
          borderColor: '#283137',
          borderWidth: [0.75],
          data: [78]
        }
      ],
      labels: ['Distance'],
    },
    options: {
      cutoutPercentage: 80,
      animation: {
        duration: 250000,
      },
      legend: {
        display: false,
      }
    }
});
