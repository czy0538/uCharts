/*
 * uCharts®
 * 高性能跨平台图表库，支持H5、APP、小程序（微信/支付宝/百度/头条/QQ/360）、Vue、Taro等支持canvas的框架平台
 * Copyright (c) 2021 QIUN®秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */

// 通用配置项

// 主题颜色配置：如每个图表类型需要不同主题，请在对应图表类型上更改color属性
const color = ['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'];

module.exports = {
  "type": ["pie", "ring", "rose", "word", "funnel", "map", "arcbar", "line", "column", "area", "radar", "gauge",
    "candle", "mix"
  ],
  "categories": ["line", "column", "area", "radar", "gauge", "candle", "mix"],
  "instance": {},
  "option": {},
  //以上数据请勿改动
  //下面是自定义format配置，因除H5端外的其他端无法通过props传递函数，只能通过此属性对应下标的方式来替换
  "format": {
    "yAxisDemo1": function(val) {
      return val + '元'
    },
    "yAxisDemo2": function(val) {
      return val.toFixed(2)
    },
    "tooltipDemo1": function(item, category, index, opts) {
      if (item.name == '成交量A') {
        return '随便用' + item.data + '年'
      } else {
        return '这俩我没改' + item.data + '天'
      }
    }
  },
  //下面是自定义配置，请添加项目所需的通用配置
  "pie": {
    type: 'pie',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
      padding: 5,
      lineHeight: 11,
      margin: 0,
    },
    dataLabel: true,
    extra: {
      pie: {
        border: true,
        borderColor: '#FFFFFF',
        borderWidth: 3
      }
    }
  },
  "ring": {
    type: 'ring',
    color: color,
    padding: [5, 5, 5, 5],
    legend: {
      show: true,
      position: 'right',
      float: 'center',
      itemGap: 10,
      padding: 5,
      lineHeight: 26,
      margin: 5,
      borderWidth: 1
    },
    disablePieStroke: true,
    dataLabel: true,
    subtitle: {
      name: '70%',
      color: '#7cb5ec',
      fontSize: 25,
    },
    title: {
      name: '收益率',
      color: '#666666',
      fontSize: 15,
    },
    extra: {
      pie: {
        offsetAngle: 0,
        ringWidth: 40,
        labelWidth: 15
      }
    }
  },
  "rose": {
    type: 'rose',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
      position: 'left',
      float: 'center',
      itemGap: 10,
      padding: 5,
      lineHeight: 26,
      margin: 5,
      borderWidth: 1
    },
    dataLabel: true,
    extra: {
      rose: {
        type: 'area',
        minRadius: 50,
        activeOpacity: 0.5,
        offsetAngle: 0,
        labelWidth: 15
      }
    }
  },
  "word": {
    type: 'word',
    color: color,
    extra: {
      word: {
        type: 'normal'
      }
    }
  },
  "funnel": {
    type: 'funnel',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
      padding: 5,
      lineHeight: 11,
      margin: 0,
    },
    dataLabel: true,
    extra: {
      funnel: {
        border: true,
        borderWidth: 2,
        borderColor: '#FFFFFF'
      }
    }
  },
  "map": {
    type: 'map',
    color: color,
    padding: [0, 0, 0, 0],
    legend: {
      show: false
    },
    dataLabel: true,
    extra: {
      map: {
        border: true,
        borderWidth: 1,
        borderColor: '#666666',
        fillOpacity: 0.6
      }
    }
  },
  "arcbar": {
    type: 'arcbar',
    color: color,
    legend: {
      show: false
    },
    dataLabel: true,
    title: {
      name: '百分比',
      color: '#00FF00',
      fontSize: 25
    },
    subtitle: {
      name: '默认标题',
      color: '#666666',
      fontSize: 15
    },
    extra: {
      arcbar: {
        type: 'default',
        width: 12,
      }
    }
  },
  "line": {
    color: color,
    grid: {
      top: "15px",
      left: "25px",
      right: "15px",
      bottom: "35px"
    },
    xAxis: {
      type: 'category',
      data: ['2020-12-10', '2020-12-11', '2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16',  '2020-12-17', '2020-12-18']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [10, 5, 1, 8, 0, 1, 30, 20, 13],
      type: 'line', 
    }]
  },
  "column": {
    type: 'column',
    color: color,
    padding: [15, 5, 0, 15],
    legend: {
      show: true,
      padding: 5,
      lineHeight: 11,
      margin: 0,
    },
    animation: true,
    dataLabel: true,
    xAxis: {
      disableGrid: true,
    },
    yAxis: {
      data: [{
        position: 'right',
        axisLine: false,
        format: (val) => {
          return val.toFixed(0)
        },
      }]
    },
    extra: {
      column: {
        type: 'group',
        width: 30
      }
    }
  },
  "area": {
    type: 'area',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
    },
    dataLabel: true,
    dataPointShape: true,
    xAxis: {
      disableGrid: true,
    },
    yAxis: {
      gridType: 'dash',
      gridColor: '#CCCCCC',
      dashLength: 8,
      splitNumber: 5,
    },
    extra: {
      area: {
        type: 'straight',
        opacity: 0.2,
        addLine: true,
        width: 2,
        gradient: false
      }
    }
  },
  "radar": {
    type: 'radar',
    color: color,
    padding: [0, 15, 0, 15],
    legend: {
      show: true,
      position: 'right',
      float: 'center',
      itemGap: 10,
      padding: 5,
      lineHeight: 26,
      margin: 5,
      borderWidth: 1
    },
    animation: true,
    dataLabel: true,
    extra: {
      radar: {
        max: 200,
        gridType: 'radar' //radar或者circle可选，网格样式，默认radar
      }
    }
  },
  "gauge": {
    type: 'gauge',
    color: color,
    legend: {
      show: false
    },
    animation: true,
    dataLabel: true,
    title: {
      name: '字符串类型',
      color: '#00FF00',
      fontSize: 25,
      offsetY: 50,
    },
    subtitle: {
      name: '字符串类型',
      color: '#666666',
      fontSize: 15,
      offsetY: -50,
    },
    extra: {
      gauge: {
        type: 'default',
        width: 30,
        startAngle: 0.75,
        endAngle: 0.25,
        startNumber: 0,
        endNumber: 100,
        splitLine: {
          fixRadius: 0,
          splitNumber: 10,
          width: 30,
          color: '#FFFFFF',
          childNumber: 5,
          childWidth: 30 * 0.4,
        },
        pointer: {
          width: 30 * 0.8,
          color: 'auto'
        }
      }
    }
  },
  "candle": {
    type: 'candle',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
      padding: 5,
      lineHeight: 11,
      margin: 8,
    },
    enableMarkLine: true,
    enableScroll: true,
    dataLabel: false,
    dataPointShape: true,
    xAxis: {
      disableGrid: true,
      labelCount: 4,
      itemCount: 40,
      scrollShow: true,
      scrollAlign: 'right',
    },
    yAxis: {
      gridType: 'dash',
      splitNumber: 5,
      format: (val) => {
        return val.toFixed(0)
      }
    },
    extra: {
      candle: {
        color: {
          upLine: '#f04864',
          upFill: '#f04864',
          downLine: '#2fc25b',
          downFill: '#2fc25b'
        },
        average: {
          show: true,
          name: ['MA5', 'MA10', 'MA30'],
          day: [5, 10, 20],
          color: ['#1890ff', '#2fc25b', '#facc14']
        }
      },
      tooltip: {
        bgColor: '#000000',
        bgOpacity: 0.7,
        gridType: 'dash',
        dashLength: 5,
        gridColor: '#1890ff',
        fontColor: '#FFFFFF',
        //horizentalLine:true,
        xAxisLabel: true,
        yAxisLabel: true,
        labelBgColor: '#DFE8FF',
        labelBgOpacity: 0.95,
        labelAlign: 'left',
        labelFontColor: '#666666'
      },
      markLine: {
        type: 'dash',
        dashLength: 5,
        data: [{
          value: 2150,
          lineColor: '#f04864',
          showLabel: true
        }, {
          value: 2350,
          lineColor: '#f04864',
          showLabel: true
        }]
      }
    }
  },
  "mix": {
    type: 'mix',
    color: color,
    padding: [15, 15, 0, 15],
    legend: {
      show: true,
      position: 'bottom',
      float: 'center',
      padding: 5,
      lineHeight: 11,
      margin: 6,
    },
    dataLabel: true,
    dataPointShape: true,
    xAxis: {
      disableGrid: true,
    },
    yAxis: {
      data: [{
        calibration: true,
        position: 'left',
        title: '折线',
        titleFontSize: 12,
        format: (val) => {
          return val.toFixed(0) + '度'
        }
      }, {
        calibration: true,
        position: 'right',
        min: 0,
        max: 200,
        title: '柱状图',
        titleFontSize: 12,
        format: (val) => {
          return val.toFixed(0) + '元'
        }
      }, {
        calibration: true,
        position: 'right',
        min: 0,
        max: 200,
        title: '点',
        titleFontSize: 12
      }],
      showTitle: true,
      gridType: 'dash',
      dashLength: 4,
      splitNumber: 5
    },
    extra: {
      column: {
        width: 20
      }
    }
  },
  "point": {
    type: 'point',
    color: color,
    padding: [15, 30, 0, 15],
    legend: {
      show: true
    },
    dataLabel: false,
    dataPointShape: true,
    xAxis: {
      disableGrid: true,
      labelCount: 4
    },
    yAxis: {
      gridType: 'dash',
      gridColor: '#CCCCCC',
      dashLength: 8,
      splitNumber: 4,
      format: val => {
        return val.toFixed(1);
      }
    },
    extra: {
      point: {}
    }
  },
  "bubble": {
    type: 'bubble',
    color: color,
    padding: [15, 30, 0, 15],
    legend: {
      show: true
    },
    dataLabel: true,
    xAxis: {
      disableGrid: true,
      labelCount: 4
    },
    yAxis: {
      gridType: 'dash',
      gridColor: '#CCCCCC',
      dashLength: 8,
      splitNumber: 4,
      format: val => {
        return val.toFixed(1);
      }
    },
    extra: {
      bubble: {}
    }
  }
}
