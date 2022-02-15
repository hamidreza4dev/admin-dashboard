
'use strict';

window.chartColors = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)',
};

(function(global) {
    var MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    var COLORS = [
        '#4dc9f6',
        '#f67019',
        '#f53794',
        '#537bc4',
        '#acc236',
        '#166a8f',
        '#00a950',
        '#58595b',
        '#8549ba'
    ];

    var Samples = global.Samples || (global.Samples = {});
    var Color = global.Color;

    Samples.utils = {
        // Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
        srand: function(seed) {
            this._seed = seed;
        },

        rand: function(min, max) {
            var seed = this._seed;
            min = min === undefined ? 0 : min;
            max = max === undefined ? 1 : max;
            this._seed = (seed * 9301 + 49297) % 233280;
            return min + (this._seed / 233280) * (max - min);
        },

        numbers: function(config) {
            var cfg = config || {};
            var min = cfg.min || 0;
            var max = cfg.max || 1;
            var from = cfg.from || [];
            var count = cfg.count || 8;
            var decimals = cfg.decimals || 8;
            var continuity = cfg.continuity || 1;
            var dfactor = Math.pow(10, decimals) || 0;
            var data = [];
            var i, value;

            for (i = 0; i < count; ++i) {
                value = (from[i] || 0) + this.rand(min, max);
                if (this.rand() <= continuity) {
                    data.push(Math.round(dfactor * value) / dfactor);
                } else {
                    data.push(null);
                }
            }

            return data;
        },

        labels: function(config) {
            var cfg = config || {};
            var min = cfg.min || 0;
            var max = cfg.max || 100;
            var count = cfg.count || 8;
            var step = (max - min) / count;
            var decimals = cfg.decimals || 8;
            var dfactor = Math.pow(10, decimals) || 0;
            var prefix = cfg.prefix || '';
            var values = [];
            var i;

            for (i = min; i < max; i += step) {
                values.push(prefix + Math.round(dfactor * i) / dfactor);
            }

            return values;
        },

        months: function(config) {
            var cfg = config || {};
            var count = cfg.count || 12;
            var section = cfg.section;
            var values = [];
            var i, value;

            for (i = 0; i < count; ++i) {
                value = MONTHS[Math.ceil(i) % 12];
                values.push(value.substring(0, section));
            }

            return values;
        },

        color: function(index) {
            return COLORS[index % COLORS.length];
        },

        transparentize: function(color, opacity) {
            var alpha = opacity === undefined ? 0.5 : 1 - opacity;
            return Color(color).alpha(alpha).rgbString();
        }
    };

    // DEPRECATED
    window.randomScalingFactor = function() {
        return Math.round(Samples.utils.rand(-100, 100));
    };

    // INITIALIZATION

    Samples.utils.srand(Date.now());

}(this));

var MONTHS = ['تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

var randomScalingFactor = function() {
    return Math.round(Math.random() * 20);
};

var config = {
    type: 'line',
    data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
        datasets: [{
            label: 'محتوای شماره 1',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            fill: false,
        }, {
            label: 'محتوای شماره 2',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'جدول مصرف',
            rtl: true
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'ماه ها'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    min: 0,
                    max: 20,

                    // forces step size to be 5 units
                    stepSize: 5
                }
            }]
        },
        legend: {
            display: false
        },
    }
};

var barChartData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد'],
    datasets: [{
        label: 'محتوای شماره 1',
        backgroundColor: [
            window.chartColors.red,
            window.chartColors.orange,
            window.chartColors.yellow,
            window.chartColors.green,
            window.chartColors.blue,
            window.chartColors.purple,
            window.chartColors.red
        ],
        yAxisID: 'y-axis-1',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }, {
        label: 'محتوای شماره 2',
        backgroundColor: window.chartColors.green,
        yAxisID: 'y-axis-2',
        data: [
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor(),
            randomScalingFactor()
        ]
    }]

};

var config2 = {
    type: 'line',
    data: {
        labels: ['فروردین', 'اردیبهشت', 'خرداد'],
        datasets: [{
            label: 'پاپ آپ',
            backgroundColor: window.chartColors.red,
            borderColor: window.chartColors.red,
            data: [25, 30, 50],
            fill: false,
        }, {
            label: 'داخلی',
            fill: false,
            backgroundColor: window.chartColors.blue,
            borderColor: window.chartColors.blue,
            data: [20, 45, 22],
        },{
            label: 'نیم بها',
            fill: false,
            backgroundColor: window.chartColors.yellow,
            borderColor: window.chartColors.yellow,
            data: [10, 20, 40]
        }, {
            label: 'سرور',
            fill: false,
            backgroundColor: window.chartColors.green,
            borderColor: window.chartColors.green,
            data: [45, 25, 33]
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    min: 10,
                    max: 50
                }
            }]
        },
        legend: {
            display: false,
        }
    }
};

var randomScalingFactorChart = function() {
    return Math.round(Math.random() * 100);
};

var config3 = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                randomScalingFactorChart(),
                randomScalingFactorChart(),
                randomScalingFactorChart(),
                randomScalingFactorChart(),
                randomScalingFactorChart(),
            ],
            backgroundColor: [
                window.chartColors.red,
                window.chartColors.orange,
                window.chartColors.yellow,
                window.chartColors.green,
                window.chartColors.blue,
            ],
            label: 'محتوای شماره 1'
        }],
        labels: [
            'Red',
            'Orange',
            'Yellow',
            'Green',
            'Blue'
        ]
    },
    options: {
        responsive: true,
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myLine = new Chart(ctx, config);

    var ctx5 = document.getElementById('canvas5').getContext('2d');
    window.myPie = new Chart(ctx5, config2);

    var ctx3 = document.getElementById('canvas3').getContext('2d');
    window.myBar = new Chart(ctx3, {
        type: 'bar',
        data: barChartData,
        options: {
            responsive: true,
            title: {
                display: false,
            },
            tooltips: {
                mode: 'index',
                intersect: true
            },
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }],
            }
        }
    });

    var ctx4 = document.getElementById('canvas4').getContext('2d');
    window.myPie = new Chart(ctx4, config3);

};


var colorNames = Object.keys(window.chartColors);

document.getElementById('addDatasetChart').addEventListener('click', function() {
    var newDataset = {
        backgroundColor: [],
        data: [],
        label: 'New dataset ' + config3.data.datasets.length,
    };

    for (var index = 0; index < config3.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactorChart());

        var colorName = colorNames[index % colorNames.length];
        var newColor = window.chartColors[colorName];
        newDataset.backgroundColor.push(newColor);
    }

    config3.data.datasets.push(newDataset);
    window.myPie.update();
});

document.getElementById('randomizeDataChart').addEventListener('click', function() {
    config3.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactorChart();
        });
    });

    window.myPie.update();
});

document.getElementById('removeDatasetChart').addEventListener('click', function() {
    config3.data.datasets.splice(0, 1);
    window.myPie.update();
});

document.getElementById('randomizeData').addEventListener('click', function() {
    config.data.datasets.forEach(function(dataset) {
        dataset.data = dataset.data.map(function() {
            return randomScalingFactor();
        });
    });

    window.myLine.update();
});

document.getElementById('addDataset').addEventListener('click', function() {
    var colorName = colorNames[config.data.datasets.length % colorNames.length];
    var newColor = window.chartColors[colorName];
    var newDataset = {
        label: 'محتوای شماره ' + (config.data.datasets.length + 1),
        backgroundColor: newColor,
        borderColor: newColor,
        data: [],
        fill: false
    };

    for (var index = 0; index < config.data.labels.length; ++index) {
        newDataset.data.push(randomScalingFactor());
    }

    config.data.datasets.push(newDataset);
    window.myLine.update();
});

document.getElementById('addData').addEventListener('click', function() {
    if (config.data.datasets.length > 0) {
        var month = MONTHS[config.data.labels.length % MONTHS.length];
        config.data.labels.push(month);

        config.data.datasets.forEach(function(dataset) {
            dataset.data.push(randomScalingFactor());
        });

        window.myLine.update();
    }
});

document.getElementById('removeDataset').addEventListener('click', function() {
    config.data.datasets.splice(0, 1);
    window.myLine.update();
});

document.getElementById('removeData').addEventListener('click', function() {
    config.data.labels.splice(-1, 1); // remove the label first
    config.data.datasets.forEach(function(dataset) {
        dataset.data.pop();
    });

    window.myLine.update();
});

