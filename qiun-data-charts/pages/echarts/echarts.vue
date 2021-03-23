<template>
  <view class="content">
    <qiun-title-bar title="圆角柱状图" />
    <view class="charts-box">
      <qiun-data-charts type="line" :eopts="echartsOpts" :chartData="chartsData" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
      <qiun-data-charts type="line" :eopts="echartsOpts" :chartData="chartsData" :echartsH5="true" :echartsApp="true"/>
      <qiun-data-charts type="line" :eopts="echartsOpts" :chartData="chartsData" :echartsH5="true" :echartsApp="true"/>
    </view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';
//下面是uCharts的配置文件及qiun-data-charts组件的公用中转参数，可以从本配置文件中获取uCharts实例、opts配置、format配置（APP端因采用renderjs无法从此配置文件获取uCharts实例）
import eCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-echarts.js';
export default {
  data() {
    return {
      chartsData: {},
      echartsOpts:{
      	color:['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
      tooltip: {
        confine:true,
              trigger: 'axis'
          },
          grid:{
            top:15,
            bottom:50,
            right:15,
            left:50
          },
          legend: {
            bottom:0,
              data:['意向','预购','成交']
          },
          toolbox: {
              show: false,
          },
          xAxis: {
              type: 'category',
              axisTick:{
                show:false,
              },
              axisLabel:{
                color:'#666666'
              },
              axisLine:{
                lineStyle:{
                   color: '#CCCCCC'
                }
              },
              boundaryGap: true,
              data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
              type: 'value',
              axisTick:{
                show:false,
              },
              axisLabel:{
                color:'#666666'
              },
              axisLine:{
                lineStyle:{
                   color: '#CCCCCC'
                }
              },
          },
          series: [{
              name: '成交',
              type: 'line',
              smooth: true,
              label: {
                  show: true,
                  color:'#666666'
              },
              data: [10, 12, 21, 54, 260, 830, 710]
          },
          {
              name: '预购',
              type: 'line',
              smooth: true,
              label: {
                  show: true,
                  color:'#666666'
              },
              data: [30, 182, 434, 791, 390, 30, 10]
          },
          {
              name: '意向',
              type: 'line',
              smooth: true,
              label: {
                  show: true,
                  color:'#666666'
              },
              data: [1320, 1132, 601, 234, 120, 90, 20]
          }]
      }
    };
  },
  onReady() {
    setTimeout(() => {
      this.getServerData();
    }, 1000);
    setTimeout(() => {
      this.chartsData = JSON.parse(JSON.stringify(demodata.Line));
    }, 6000);
  },
  methods: {
    getServerData() {
      this.chartsData = JSON.parse(JSON.stringify(demodata.Column));
    },
    complete(e) {
      console.log(e);
    },
    getIndex(e){
      console.log(e);
    }
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.charts-box {
  width: 100%;
  height: 300px;
}
</style>
