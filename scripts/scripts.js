// UPDATEN VAN DE CHARTS
var step = 0;
var myVar = setInterval(myStock, 1000);
var duration = 200;

function myStock() {

	step++;

	if(step <= duration) {

		updateChartx(myStockChart, 1, Math.round(duration - (step / 8)));//Oxygen
		updateChartx(myStockChart, 2, Math.round(duration - (step / 2)));//Fuel
		updateChartx(myStockChart, 3, Math.round(duration - (step / 6)));//Food
		updateChartx(myStockChart, 4, Math.round(duration - (step / 4)));//Water

		updateChartDistance(step);

	}
}

function updateChartx(chart, index, newvalue) {
  chart.data.datasets[0].data[index] = newvalue;
  chart.update();
  return;
}

function updateChartDistance(stapangle) {
  updateChartx(myDistanceChart, 0, stapangle);
  updateChartx(myDistanceChart, 1, (duration-stapangle));
}

// OPLOPENDE, CONTANTE EN DALENDE SNELHEID
var opstijgen = true;
var myVar = setInterval(myTimer, 100);
var counter = 0;
var dalenInt;
function setInnerHTML() {
	document.getElementById("counter").innerHTML = counter;
	document.getElementById("eenheid").innerHTML = ' KM/H';

}

function myTimer() {
	setInnerHTML();
	if (counter >= 30000 && counter < 40000) {
		counter += 255;
	}else if (counter >= 40212){
		counter = Math.round(Math.random()*(40212-40219))+40219;
		indeLucht();
	}else{
		counter += 755;
	}

}
function indeLucht() {

	if (opstijgen == true) {
		opstijgen = false;
		setTimeout(function() {
			dalen();
			clearInterval(myVar);
			dalenInt = setInterval(dalen, 100)
		}, 145000);
	}
}

function dalen() {
	setInnerHTML();
	if (counter <= 0) {

		counter = 0;
		setInnerHTML();
		clearInterval(dalenInt);

		var x = document.getElementById('distance');
		x.style.display = "none";

		var x = document.getElementById('landed');
		x.style.display = "block";

		document.getElementById('landing').innerHTML = "";

	}else{
		if (counter >= 30000 && counter <= 45000) {
			counter -= 205;
		}else{
			counter -= 75;
		}
	}
}

// DATAVISUALISATIONS CHART.JS
var ctx = document.getElementById('stock');
var myStockChart = new Chart(ctx, {
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
				data: [0, duration, duration, duration, duration]
			}
		]
	},
	options: {
		tooltips: {
			enabled: false,
		},
		animation: {
			duration: 5000,
		},
		legend: {
			display: false,
		}
	}
});

var ctx = document.getElementById('planets');
var myPlanetsChart = new Chart(ctx, {
	type: 'polarArea',
	data: {
		label: ['Earth', 'Venus', 'Mercury'],
		datasets: [
			{
				label: 'Distance',
				backgroundColor: ['#283137', '#a7a7a7', '#bdcad0'],
				borderWidth: [0, 0, 0],
				data: [48, 73, 105]
			}
		],
		labels: ['Earth', 'Venus', 'Mercury'],
	},
	options: {
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
var myDistanceChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		label: ['', 'Distance'],
		datasets: [
			{
				label: 'distance',
				backgroundColor: 'rgba(40, 49, 55, 0.1)',
				borderColor: 'rgba(40, 49, 55, 0.8)',
				borderWidth: [0],
				data: [0, duration],
			}
		],
		labels: ['', 'Distance'],
	},
	options: {
		cutoutPercentage: 80,
		tooltips: {
			enabled: false,
		},
		legend: {
			display: false,
		}
	}
});
