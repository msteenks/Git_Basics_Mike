var myVar = setInterval(myTimer, 100);
var counter = 100;

function myTimer() {

  counter--;
  document.getElementById('counter1').innerHTML = counter;
  document.getElementById('counter2').innerHTML = ' '+"km";

  if(counter == 0) {
      clearInterval(myVar);
      document.getElementById('counter1').innerHTML = "Prepair for landing";
      document.getElementById('counter2').innerHTML = "";

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

    data: {
      labels: ['towels', 'shower gel', 'toothpaste', 'food', 'Water'],
      datasets: [
        {
          label: 'Stock',
          backgroundColor: 'rgba(40, 49, 55, 0.1)',
          borderColor: '#283137',
          borderWidth: 2,
          data: [1, 4, 3, 8, 10]
        }
      ]
    },
    // options: {
    //   backgroundColor: '#283137'
    // }
});

var ctx = document.getElementById('fuel');
var myDoughnutChart = new Chart(ctx, {
    type: 'pie',

    data: {
      label: ['Full', 'Empty'],
      datasets: [
        {
          label: 'Fuel',
          backgroundColor: ['#283137', '#F5F5F5'],
          borderWidth: [0, 0],
          data: [60, 40]
        }
      ],
      labels: ['Full', 'Empty'],
    },
    options: {
      cutoutPercentage: 80,
    }
});
