// Couple
    $(function() {
  $('#couple').highcharts({
    chart: {
        type: 'bar',
        backgroundColor : null
    },
    colors: ['#CBA148', '#107671', '#004C59'],
    title: {
      text: 'Stacked bar chart'
    },
    xAxis: {
      categories: ['Living together couple', 'Living apart couple', 'Not in a couple but has been', 'Has never been in a couple']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage (%)'
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'Not at all satisfied',
      data: [5, 3, 19, 16]

    }, {
      name: 'Little satisfied',
      data: [16, 11, 29, 29]
    }]
  });
});

// Gauge
(function(){
    
var legend1 = "<span style='font-weight:100'>A little</span>",
    legend2 = "<span style='font-weight:100'>A lot</span>",
    legend3 = "<span style='font-weight:100'>Not at<br/> all</span>";




$(function () {
    
    if (!Highcharts.theme) {
        Highcharts.setOptions({
            chart: {
                backgroundColor: 'none'
            },
            colors: ['#CBA148', '#0092B9', '#107671']
        });
    }
    // 

    Highcharts.chart('gauge', {

        chart: {
            type: 'solidgauge',
            marginTop: 0
        },

        title: {
            text: '',
        },

        tooltip: {
            borderWidth : 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '15px',
                fontFamily: 'Gill Sans'
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth, labelHeight) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 150
                };
            }
        },

        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for 'un peu H'
                outerRadius: '112%',
                innerRadius: '100%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),            
                borderWidth:0,


            }, { // Track for 'un peu F'
                outerRadius: '100%',
                innerRadius: '88%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.3).get(),
                 borderWidth:0,


            }, { // Track for Beaucoup H
                outerRadius: '87%',
                innerRadius: '75%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
								borderWidth:0,


            }, { // Track for Beaucoup F
                outerRadius: '75%',
                innerRadius: '63%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tout H
                outerRadius: '62%',
                innerRadius: '50%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Pas du tou F
                outerRadius: '50%',
                innerRadius: '38%',
                backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2]).setOpacity(0.3).get(),
                borderWidth: 0
            }]
        },

        yAxis: {
            min: 0,
            max: 60,
            lineWidth: 0,
            tickPositions: []
        },

        plotOptions: {
            solidgauge: {
                borderWidth: 17,
                dataLabels: {
                    enabled: false
                },
                linecap : 'round',
                stickyTracking: false
            }
        },

        series: [{
            name: '(men) <br/><b>a little :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '106%',
                innerRadius: '106%',
                y: 40
            }]
        }, {
            name: '(women) <br/><b>a little :</b>',
            borderColor:Highcharts.getOptions().colors[0],
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '94%',
                innerRadius: '94%',
                y: 51
            }]
        } , {
            name: '(men) <br/><b>a lot :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '81%',
                innerRadius: '81%',
                y: 49
            }]
        }, {
            name: '(women) <br/><b>a lot :</b>',
            borderColor:Highcharts.getOptions().colors[1],
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '69%',
                innerRadius: '69%',
                y: 36
            }]
        } , {
            name: '(men) <br/><b>not at all :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '56%',
                innerRadius: '56%',
                y: 11
            }]
        }, {
            name: '(women) <br/><b>not at all :</b>',
            borderColor:Highcharts.getOptions().colors[2],
						data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '44%',
                innerRadius: '44%',
                y: 15
            }]
        }]
    },

    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
    function callback() {

        // Move icon
        this.renderer.text(legend1, -55, 5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 26)
            .add(this.series[2].group);

        // Exercise icon
        this.renderer.text(legend2, -65, 10)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 61)
            .add(this.series[2].group);

        // Stand icon
        this.renderer.text(legend3,-50,5)
            .attr({
                'stroke': '#303030',
                'stroke-linecap': 'round',
                'stroke-linejoin': 'round',
                'stroke-width': 0,
                'zIndex': 10
            })
            .translate(190, 96)
            .add(this.series[2].group);
    });


});

})();

// Highcharts1
(function(){
    $(function () {
    $('#highchart1').highcharts({
        data: {
            columns: [
                [null, 'Non religious people', 'non attending catholic', 'other religious people','attending catholic'], // categories
                ["Never sucked or licked his/her partner's genitals", 11, 12, 21,23], // first series
                ["Never sodomized his/her partner", 45, 47, 45,63] // second series
            ]
        },
        colors : ['#0092B9','#004C59'],
        chart: {
            type: 'column',
            backgroundColor : null
        },
        title: {
            text: ''
        },
        yAxis: {
            allowDecimals: false,
            title :'',
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },

    });
});
})();

// Nombre
(function(){
    $(function () {
    $('#nombre').highcharts({
        chart: {
            type: 'bar',
            backgroundColor : null
        },
             		colors: ['#004C59','#107671'],

        title: {
            text: ''
        },
        xAxis: {
            categories: ['1','Between 2 and 3','Between 4 and 5','Between 6 and 10','More than 10']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percentage (%)'
            }
        },
        tooltip: {
            valueSuffix: '%'
            },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [ {
            name: 'Not at all satisfied',
            data: [7,10,9,9,9]
     
        },
        {
            name: 'Little satisfied',
            data: [18,18,21,20,20]
        }]
    });
});
})();

//Polsodo
    $(function () {
    $('#polsodo').highcharts({ 
        chart : {
            backgroundColor : null
        },
        colors: ['#CBA148', '#107671', '#004C59'],
        title: {
            text: '',
            x: -20 //center
        },
       
        xAxis: {
            categories: ['Front de Gauche', 'PS','Europe Ecologie les Verts','Modem-UDI','UMP','Front National']
        },
        yAxis: {
            title: {
                text: 'Percentage (%)'
            },
             tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + ' :</b><br/>' +
                    this.point.y + '% among ' + this.point.name.toLowerCase();
            }
        },
        
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '%'
        },
        legend: {
            layout: 'vertical',
            align: 'center',
            verticalAlign: 'bottom',
            borderWidth: 0
        },
        series: [{
            name: 'Have had sex with more than two people at the same time',
            data: [22, 17, 16, 13, 14, 21],
            visible : false
        }, {
            name: 'Have had an homosexual sex intercourse',
            data: [16, 15, 18, 11, 10, 15],
            visible : false
        }, {
            name: 'Has performed anal sex',
            data: [55, 53, 51, 49, 50, 57]
            
        }]
        
        
    });
});


// Treemap
    $(function () {
    $('#treemap').highcharts({
    		chart : {
        	   type : 'treemap',
                backgroundColor : null
            },
    		plotOptions : {
        	treemap : {
							allowDrillToNode : true,
              interactByLeaf : true,
              layoutAlgorithm : 'stripes',
              tooltip : {
              	pointFormat : '<b>{point.name}</b>'
              }
            }
        },
        series: [{
        	levels: [{
                level: 1,
                layoutAlgorithm : 'stripes',
                layoutStartingDirection : 'horizontal',
                borderWidth : 5,
                dataLabels: {
                align : 'left',
                    enabled: true,
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold',
                        color : '#FFFFFF'
                    }
                }
            },{
            		level : 2,
                layoutStartingDirection : 'horizontal',
                dataLabels :{
                align : 'left',
                	enabled : true,
                  style : {
                  	fontSize : '13px'
                   },
                  color : '#FFFFFF'
                }
            },{
            		level : 3,
                layoutStartingDirection : "vertical",
                dataLabels : {
                	enabled : true,
									color : 'rgb(230,230,230)',
                  verticalAlign : 'bottom',
                  align : 'right'
                }
            }],
            data: [{
                id: 'D',
                name: 'Graduated from college',
            }, {
                id: 'R',
                name: 'Did not graduated from college',
            },{
            		id: 'DH',
                name: 'Men',
                parent : 'D'
            }, {
            		id: 'DF',
                name: 'Women',
                parent : 'D'
            },{
                name: 'Often : 48%',
                parent: 'DH',
                color : '#107671',
                value: 78.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 13%',
                parent: 'DH',
                color : '#004C59',
                value : 21.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 36%',
                parent: 'DF',
                color : '#CBA148',
                value : 72,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 14%',
                parent : 'DF',
                color : '#B67823',
                value : 28,
                dataLabels : {
                format : "Never"
                }
            },{
            		id: 'RH',
                name: 'Hommes',
                parent : 'R',
            }, {
                id: 'RF',
                name: 'Femmes',
                parent : 'R',
            },{
                name: 'Often : 50%',
                parent: 'RH',
  							color: '#107671',
                value: 84.7,
                  dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 9%',
                parent: 'RH',   
                color : '#004C59',
                value : 15.3,
                dataLabels : {
                format : "Never"
                }
            },{
            		name : 'Often : 29%',
                parent: 'RF',
                value : 61.7,
                color : '#CBA148',
                dataLabels :{
                format : "Often"
                }
            },{
            		name : 'Never : 18%',
                parent : 'RF',
                value : 38.3,
                color : '#B67823',
                dataLabels : {
                format : "Never"
                }
            }],

        }],
        title: {
            text: ''
        }
    });
});

// vieillir
    $(function () {
    $('#vieillir').highcharts({
        chart: {
            type: 'area',
            backgroundColor : null
        },
        colors:['rgba(248,215,201,1)','rgba(0,146,185,0.3)','rgba(203,161,72,0.5)'],
        legend : {
        	width : 50,
        },
        title: {
            text: ''
        },
        xAxis: {
            title : {
                text: "Age category"
            },
            categories: ['Less than 35','Between 35 and 50','More than 50']
        },
        yAxis: {
            title: {
                text: "Percentage among age category"
            },
            floor : 20
        },
        tooltip: {
            pointFormat: '{series.name} : <b>{point.y}%</b><br/>'
        },
        plotOptions: {
            area: {
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'At least twice a week',
            data: [33,31,21]
        },{
            name: 'About once a week',
            data: [46,46,46],
            visible : false
        },{
            name: 'Never',
            data: [21,23,33]
        }]
    });
});