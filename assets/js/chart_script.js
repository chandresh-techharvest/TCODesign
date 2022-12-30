//chart config js

var xValues = [2013,2014,2015,2016,2027,2018,2019,2020,2021,2022];


const config2 = {
  type: 'line',
	data: {
  	labels: xValues,
  	datasets: [{
		label: 'Actual Serious Injuries',
   		data: [NaN,7,5,4,5,10,2,1,3,0],
   		borderColor: "#FFC000",
   		fill: false,
		legend: {display: true},
    },{
		label: 'TRIR',
   		data: [0.150,0.091,0.097,0.110,0.100,0.103,0.137,0.106,0.143,0.119],
  		borderColor: "#00B0F0",
   		fill: false,
		legend: {display: true},
    }]
 	},
	 options: {
		responsive: true,
		legend: {display: true},
		plugins: {
		  legend: {
			position: 'bottom',
		  },
		  
		},
		pointBackgroundColor: '#fff',
		radius: 6,
		interaction: {
			intersect: true,
		}
	  },
}

window.onload = function() {
	var ctx2 = document.getElementById('safety_chart').getContext('2d');
	window.myPie = new Chart(ctx2, config2);
};

