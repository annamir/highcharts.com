$(function() {
	$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function(data) {

		// Create the chart
		window.chart = new Highcharts.StockChart({
			chart : {
				renderTo : 'container'
			},

			rangeSelector : {
				selected : 1
			},

			title : {
				text : 'AAPL Stock Price'
			},

			xAxis : {
				maxZoom : 14 * 24 * 3600000 // fourteen days
			},

			series : [{
				name : 'AAPL Stock Price',
				data : data,
				type : 'areaspline',
				threshold : null,
				tooltip : {
					yDecimals : 2
				},
				fillColor : {
					linearGradient : {
						x1: 0, 
						y1: 0, 
						x2: 0, 
						y2: 1
					},
					stops : [[0, Highcharts.getOptions().colors[0]], [1, 'rgba(0,0,0,0)']]
				}
			}]
		});
	});
});