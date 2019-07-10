import uCharts from '../ucharts/u-charts.js';
var _self;
var canvaColumn = null;
Page({
  data: {
    cWidth: 750,
    cHeight: 500,
    pixelRatio:2
  },
  onLoad: function () {
    _self=this;
    this.cWidth=750;
    this.cHeight=500;
    this.pixelRatio=2;
    this.getServerData();
  },
  getServerData: function() {
    my.request({
      url: 'https://www.ucharts.cn/data.json',
      data: {
      },
      success: function (res) {
        console.log(res.data.data)
        let Column = { categories: [], series: [] };
        Column.categories = res.data.data.ColumnB.categories;
        Column.series = res.data.data.ColumnB.series;
        //自定义标签颜色和字体大小
        Column.series[1].textColor = 'red';
        Column.series[1].textSize = 18;
        _self.showColumn("canvasColumn", Column);
      },
      fail: () => {
        console.log("请点击右上角【详情】，启用不校验合法域名");
      },
    });
  },
  showColumn(canvasId, chartData) {
    canvaColumn = new uCharts({
      $this: this,
      canvasId: canvasId,
      type: 'column',
      legend: true,
      fontSize: 11,
      background: '#FFFFFF',
      pixelRatio: this.pixelRatio,
      animation: true,
      categories: chartData.categories,
      series: chartData.series,
      xAxis: {
        disableGrid: true,
      },
      yAxis: {
        //disabled:true
      },
      dataLabel: true,
      width: this.cWidth,
      height: this.cHeight,
      extra: {
        column: {
          type: 'group',
          width: this.cWidth * 0.45 / chartData.categories.length
        }
      }
    });

  },
  touchColumn(e) {
    canvaColumn.showToolTip(e, {
      format: function (item, category) {
        if (typeof item.data === 'object') {
          return category + ' ' + item.name + ':' + item.data.value
        } else {
          return category + ' ' + item.name + ':' + item.data
        }
      }
    });
  }
})
