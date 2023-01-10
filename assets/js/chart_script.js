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





if ($("#kazakhstani_chart").length > 0){
	var ctx = document.getElementById("kazakhstani_chart").getContext('2d');
	var myChart = new Chart(ctx, {
	  type: 'bar',
	  responsive: true,
	  data: {
		labels: ["1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2011", "2012", "2014", "2014", "2015", "2017", "2018", "2019"],
		datasets: [{
		  label: 'apples',
		  data: [10, 195, 380, 565, 750, 935, 1120, 1309, 1490, 1675, 1860, 2045, 2230, 2415, 2600, 2785, 2970, 3155, 3340, 3525, 3710, 3895, 4080, 4265, 4450, 4635, 4820],
		  backgroundColor: "#00B0F0"
		}],
		},
		 options: {
			responsive: true,
			plugins: {
				legend: {
				  display: false,
				},
			  },
		}
	});

}



window.onload = function() {
	if ($("#safety_chart").length > 0){
		var ctx2 = document.getElementById('safety_chart').getContext('2d');
		window.myPie = new Chart(ctx2, config2);
	}
};

