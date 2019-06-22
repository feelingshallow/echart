addEventListener('load',function () {

    let main=document.querySelectorAll('.main')

     let bar=echarts.init(main[0]);
    let baroption= {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };
  bar.setOption(baroption)

     let rili=echarts.init(main[1])
    var dataBJ = [
        [1,55,9,56,0.46,18,6,"良"],
        [2,25,11,21,0.65,34,9,"优"],
        [3,56,7,63,0.3,14,5,"良"],
        [4,33,7,29,0.33,16,6,"优"],
        [5,42,24,44,0.76,40,16,"优"],
        [6,82,58,90,1.77,68,33,"良"],
        [7,74,49,77,1.46,48,27,"良"],
        [8,78,55,80,1.29,59,29,"良"],
        [9,267,216,280,4.8,108,64,"重度污染"],
        [10,185,127,216,2.52,61,27,"中度污染"],
        [11,39,19,38,0.57,31,15,"优"],
        [12,41,11,40,0.43,21,7,"优"],
        [13,64,38,74,1.04,46,22,"良"],
        [14,108,79,120,1.7,75,41,"轻度污染"],
        [15,108,63,116,1.48,44,26,"轻度污染"],
        [16,33,6,29,0.34,13,5,"优"],
        [17,94,66,110,1.54,62,31,"良"],
        [18,186,142,192,3.88,93,79,"中度污染"],
        [19,57,31,54,0.96,32,14,"良"],
        [20,22,8,17,0.48,23,10,"优"],
        [21,39,15,36,0.61,29,13,"优"],
        [22,94,69,114,2.08,73,39,"良"],
        [23,99,73,110,2.43,76,48,"良"],
        [24,31,12,30,0.5,32,16,"优"],
        [25,42,27,43,1,53,22,"优"],
        [26,154,117,157,3.05,92,58,"中度污染"],
        [27,234,185,230,4.09,123,69,"重度污染"],
        [28,160,120,186,2.77,91,50,"中度污染"],
        [29,134,96,165,2.76,83,41,"轻度污染"],
        [30,52,24,60,1.03,50,21,"良"],
        [31,46,5,49,0.28,10,6,"优"]
    ];

    var dataGZ = [
        [1,26,37,27,1.163,27,13,"优"],
        [2,85,62,71,1.195,60,8,"良"],
        [3,78,38,74,1.363,37,7,"良"],
        [4,21,21,36,0.634,40,9,"优"],
        [5,41,42,46,0.915,81,13,"优"],
        [6,56,52,69,1.067,92,16,"良"],
        [7,64,30,28,0.924,51,2,"良"],
        [8,55,48,74,1.236,75,26,"良"],
        [9,76,85,113,1.237,114,27,"良"],
        [10,91,81,104,1.041,56,40,"良"],
        [11,84,39,60,0.964,25,11,"良"],
        [12,64,51,101,0.862,58,23,"良"],
        [13,70,69,120,1.198,65,36,"良"],
        [14,77,105,178,2.549,64,16,"良"],
        [15,109,68,87,0.996,74,29,"轻度污染"],
        [16,73,68,97,0.905,51,34,"良"],
        [17,54,27,47,0.592,53,12,"良"],
        [18,51,61,97,0.811,65,19,"良"],
        [19,91,71,121,1.374,43,18,"良"],
        [20,73,102,182,2.787,44,19,"良"],
        [21,73,50,76,0.717,31,20,"良"],
        [22,84,94,140,2.238,68,18,"良"],
        [23,93,77,104,1.165,53,7,"良"],
        [24,99,130,227,3.97,55,15,"良"],
        [25,146,84,139,1.094,40,17,"轻度污染"],
        [26,113,108,137,1.481,48,15,"轻度污染"],
        [27,81,48,62,1.619,26,3,"良"],
        [28,56,48,68,1.336,37,9,"良"],
        [29,82,92,174,3.29,0,13,"良"],
        [30,106,116,188,3.628,101,16,"轻度污染"],
        [31,118,50,0,1.383,76,11,"轻度污染"]
    ];

    var dataSH = [
        [1,91,45,125,0.82,34,23,"良"],
        [2,65,27,78,0.86,45,29,"良"],
        [3,83,60,84,1.09,73,27,"良"],
        [4,109,81,121,1.28,68,51,"轻度污染"],
        [5,106,77,114,1.07,55,51,"轻度污染"],
        [6,109,81,121,1.28,68,51,"轻度污染"],
        [7,106,77,114,1.07,55,51,"轻度污染"],
        [8,89,65,78,0.86,51,26,"良"],
        [9,53,33,47,0.64,50,17,"良"],
        [10,80,55,80,1.01,75,24,"良"],
        [11,117,81,124,1.03,45,24,"轻度污染"],
        [12,99,71,142,1.1,62,42,"良"],
        [13,95,69,130,1.28,74,50,"良"],
        [14,116,87,131,1.47,84,40,"轻度污染"],
        [15,108,80,121,1.3,85,37,"轻度污染"],
        [16,134,83,167,1.16,57,43,"轻度污染"],
        [17,79,43,107,1.05,59,37,"良"],
        [18,71,46,89,0.86,64,25,"良"],
        [19,97,71,113,1.17,88,31,"良"],
        [20,84,57,91,0.85,55,31,"良"],
        [21,87,63,101,0.9,56,41,"良"],
        [22,104,77,119,1.09,73,48,"轻度污染"],
        [23,87,62,100,1,72,28,"良"],
        [24,168,128,172,1.49,97,56,"中度污染"],
        [25,65,45,51,0.74,39,17,"良"],
        [26,39,24,38,0.61,47,17,"优"],
        [27,39,24,39,0.59,50,19,"优"],
        [28,93,68,96,1.05,79,29,"良"],
        [29,188,143,197,1.66,99,51,"中度污染"],
        [30,174,131,174,1.55,108,50,"中度污染"],
        [31,187,143,201,1.39,89,53,"中度污染"]
    ];

    var schema = [
        {name: 'date', index: 0, text: '日'},
        {name: 'AQIindex', index: 1, text: 'AQI指数'},
        {name: 'PM25', index: 2, text: 'PM2.5'},
        {name: 'PM10', index: 3, text: 'PM10'},
        {name: 'CO', index: 4, text: '一氧化碳（CO）'},
        {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
        {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
    ];


    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    option = {
        backgroundColor: '#404a59',
        color: [
            '#dd4444', '#fec42c', '#80F1BE'
        ],
        legend: {
            y: 'top',
            data: ['北京', '上海', '广州'],
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            x: '10%',
            x2: 150,
            y: '18%',
            y2: '10%'
        },
        tooltip: {
            padding: 10,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function (obj) {
                var value = obj.value;
                return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                    + obj.seriesName + ' ' + value[0] + '日：'
                    + value[7]
                    + '</div>'
                    + schema[1].text + '：' + value[1] + '<br>'
                    + schema[2].text + '：' + value[2] + '<br>'
                    + schema[3].text + '：' + value[3] + '<br>'
                    + schema[4].text + '：' + value[4] + '<br>'
                    + schema[5].text + '：' + value[5] + '<br>'
                    + schema[6].text + '：' + value[6] + '<br>';
            }
        },
        xAxis: {
            type: 'value',
            name: '日期',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            max: 31,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        yAxis: {
            type: 'value',
            name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [
            {
                left: 'right',
                top: '10%',
                dimension: 2,
                min: 0,
                max: 250,
                itemWidth: 30,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['圆形大小：PM2.5'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    symbolSize: [10, 70]
                },
                outOfRange: {
                    symbolSize: [10, 70],
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            },
            {
                left: 'right',
                bottom: '5%',
                dimension: 6,
                min: 0,
                max: 50,
                itemHeight: 120,
                calculable: true,
                precision: 0.1,
                text: ['明暗：二氧化硫'],
                textGap: 30,
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    colorLightness: [1, 0.5]
                },
                outOfRange: {
                    color: ['rgba(255,255,255,.2)']
                },
                controller: {
                    inRange: {
                        color: ['#c23531']
                    },
                    outOfRange: {
                        color: ['#444']
                    }
                }
            }
        ],
        series: [
            {
                name: '北京',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataBJ
            },
            {
                name: '上海',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataSH
            },
            {
                name: '广州',
                type: 'scatter',
                itemStyle: itemStyle,
                data: dataGZ
            }
        ]
    };


 rili.setOption(option)

   let pie=echarts.init(main[2])
   let option1 = {
        backgroundColor: '#2c343c',

        title: {
            text: 'Customized Pie',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#ccc'
            }
        },

        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series : [
            {
                name:'访问来源',
                type:'pie',
                radius : '55%',
                center: ['50%', '50%'],
                data:[
                    {value:335, name:'直接访问'},
                    {value:310, name:'邮件营销'},
                    {value:274, name:'联盟广告'},
                    {value:235, name:'视频广告'},
                    {value:400, name:'搜索引擎'}
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
   pie.setOption(option1)


   let ss=echarts.init(main[3])

    function createNodes(widthCount, heightCount) {
        var nodes = [];
        for (var i = 0; i < widthCount; i++) {
            for (var j = 0; j < heightCount; j++) {
                nodes.push({
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    value: 1
                });
            }
        }
        return nodes;
    }

    function createEdges(widthCount, heightCount) {
        var edges = [];
        for (var i = 0; i < widthCount; i++) {
            for (var j = 0; j < heightCount; j++) {
                if (i < widthCount - 1) {
                    edges.push({
                        source: i + j * widthCount,
                        target: i + 1 + j * widthCount,
                        value: 1
                    });
                }
                if (j < heightCount - 1) {
                    edges.push({
                        source: i + j * widthCount,
                        target: i + (j + 1) * widthCount,
                        value: 1
                    });
                }
            }
        }
        return edges;
    }

    var nodes = createNodes(50, 50);
    var edges = createEdges(50, 50);

   let option2 = {
        series: [{
            type: 'graphGL',
            nodes: nodes,
            edges: edges,
            itemStyle: {
                color: 'rgba(255,255,255,0.8)'
            },
            lineStyle: {
                color: 'rgba(255,255,255,0.8)',
                width: 3
            },
            forceAtlas2: {
                steps: 5,
                jitterTolerence: 10,
                edgeWeightInfluence: 4
            }
        }]
    };

    ss.setOption(option2)

   let aa=echarts.init(main[4])
    var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    var bgColor = '#2E2733';

    var itemStyle = {
        star5: {
            color: colors[0]
        },
        star4: {
            color: colors[1]
        },
        star3: {
            color: colors[2]
        },
        star2: {
            color: colors[3]
        }
    };

    var data = [{
        name: '虚构',
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
        children: [{
            name: '小说',
            children: [{
                name: '5☆',
                children: [{
                    name: '疼'
                }, {
                    name: '慈悲'
                }, {
                    name: '楼下的房客'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '虚无的十字架'
                }, {
                    name: '无声告白'
                }, {
                    name: '童年的终结'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '疯癫老人日记'
                }]
            }]
        }, {
            name: '其他',
            children: [{
                name: '5☆',
                children: [{
                    name: '纳博科夫短篇小说全集'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '安魂曲'
                }, {
                    name: '人生拼图版'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '比起爱你，我更需要你'
                }]
            }]
        }]
    }, {
        name: '非虚构',
        itemStyle: {
            color: colors[2]
        },
        children: [{
            name: '设计',
            children: [{
                name: '5☆',
                children: [{
                    name: '无界面交互'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '数字绘图的光照与渲染技术'
                }, {
                    name: '日本建筑解剖书'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '奇幻世界艺术\n&RPG地图绘制讲座'
                }]
            }]
        }, {
            name: '社科',
            children: [{
                name: '5☆',
                children: [{
                    name: '痛点'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '卓有成效的管理者'
                }, {
                    name: '进化'
                }, {
                    name: '后物欲时代的来临',
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '疯癫与文明'
                }]
            }]
        }, {
            name: '心理',
            children: [{
                name: '5☆',
                children: [{
                    name: '我们时代的神经症人格'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '皮格马利翁效应'
                }, {
                    name: '受伤的人'
                }]
            }, {
                name: '3☆',
            }, {
                name: '2☆',
                children: [{
                    name: '迷恋'
                }]
            }]
        }, {
            name: '居家',
            children: [{
                name: '4☆',
                children: [{
                    name: '把房子住成家'
                }, {
                    name: '只过必要生活'
                }, {
                    name: '北欧简约风格'
                }]
            }]
        }, {
            name: '绘本',
            children: [{
                name: '5☆',
                children: [{
                    name: '设计诗'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '假如生活糊弄了你'
                }, {
                    name: '博物学家的神秘动物图鉴'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '方向'
                }]
            }]
        }, {
            name: '哲学',
            children: [{
                name: '4☆',
                children: [{
                    name: '人生的智慧'
                }]
            }]
        }, {
            name: '技术',
            children: [{
                name: '5☆',
                children: [{
                    name: '代码整洁之道'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'Three.js 开发指南'
                }]
            }]
        }]
    }];

    for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children;
        for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            for (var star = 0; star < block.length; ++star) {
                var style = (function (name) {
                    switch (name) {
                        case '5☆':
                            bookScoreId = 0;
                            return itemStyle.star5;
                        case '4☆':
                            bookScoreId = 1;
                            return itemStyle.star4;
                        case '3☆':
                            bookScoreId = 2;
                            return itemStyle.star3;
                        case '2☆':
                            bookScoreId = 3;
                            return itemStyle.star2;
                    }
                })(block[star].name);

                block[star].label = {
                    color: style.color,
                    downplay: {
                        opacity: 0.5
                    }
                };

                if (block[star].children) {
                    style = {
                        opacity: 1,
                        color: style.color
                    };
                    block[star].children.forEach(function (book) {
                        book.value = 1;
                        book.itemStyle = style;

                        book.label = {
                            color: style.color
                        };

                        var value = 1;
                        if (bookScoreId === 0 || bookScoreId === 3) {
                            value = 5;
                        }

                        if (bookScore[bookScoreId]) {
                            bookScore[bookScoreId].value += value;
                        }
                        else {
                            bookScore[bookScoreId] = {
                                color: colors[bookScoreId],
                                value: value
                            };
                        }
                    });
                }
            }

            level1[i].itemStyle = {
                color: data[j].itemStyle.color
            };
        }
    }

   let option3 = {
        backgroundColor: bgColor,
        color: colors,
        series: [{
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                }
                else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [{}, {
                r0: 0,
                r: 40,
                label: {
                    rotate: 0
                }
            }, {
                r0: 40,
                r: 105
            }, {
                r0: 115,
                r: 140,
                itemStyle: {
                    shadowBlur: 2,
                    shadowColor: colors[2],
                    color: 'transparent'
                },
                label: {
                    rotate: 'tangential',
                    fontSize: 10,
                    color: colors[0]
                }
            }, {
                r0: 140,
                r: 145,
                itemStyle: {
                    shadowBlur: 80,
                    shadowColor: colors[0]
                },
                label: {
                    position: 'outside',
                    textShadowBlur: 5,
                    textShadowColor: '#333',
                },
                downplay: {
                    label: {
                        opacity: 0.5
                    }
                }
            }]
        }]
    };
    aa.setOption(option3)

})