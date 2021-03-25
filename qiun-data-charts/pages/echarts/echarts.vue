<template>
  <view class="content">
    <view class="charts-box">
		<qiun-title-bar title="柱状图" />
		<qiun-data-charts type="column" :eopts="eCharts.column" :chartData="chartsData.Column1" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
		<qiun-title-bar title="折线图" />
		<qiun-data-charts type="line" :eopts="eCharts.line" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
		<qiun-title-bar title="曲线图" />
		<qiun-data-charts type="line" :opts="{extra:{line:{type:'curve'}}}" :eopts="eCharts.curve" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
		<qiun-title-bar title="区域图" />
		<qiun-data-charts type="area" :eopts="eCharts.area" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
		<qiun-title-bar title="饼图" />
		<qiun-data-charts type="pie" :eopts="eCharts.pie" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		<qiun-title-bar title="环形图"/>
		<view class="charts-box">
		  <qiun-data-charts type="ring" :eopts="eCharts.ring" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="面积玫瑰图"/>
		<view class="charts-box">
		  <qiun-data-charts type="rose" :eopts="eCharts.rose" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="漏斗图"/>
		<view class="charts-box">
		  <qiun-data-charts type="funnel" :eopts="eCharts.funnel" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="基本仪表盘"/>
		<view class="charts-box">
		  <qiun-data-charts type="gauge" :opts="{title:{name: '60Km/H',color: '#2fc25b',fontSize: 25,offsetY:50},subtitle: {name: '实时速度',color: '#666666',fontSize: 15,offsetY:-50}}" :chartData="chartsData.Gauge1"  :echartsH5="true" :echartsApp="true" :eopts="eCharts.gauge"/>
		</view>
		<!-- <qiun-title-bar title="K线图"/>
		<qiun-data-charts type="candle" :ontouch="true" :chartData="chartsData.Candle1" :echartsH5="true" :echartsApp="true" :eopts="eCharts.candle"/> -->
    </view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';
// import testdata from '@/mockdata/test.json';
//下面是uCharts的配置文件及qiun-data-charts组件的公用中转参数，可以从本配置文件中获取uCharts实例、opts配置、format配置（APP端因采用renderjs无法从此配置文件获取uCharts实例）
import eCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-echarts.js';
export default {
  data() {
    return {
      chartsData: {},
	  eCharts,
      echartsOpts:{
      	color:['#1890FF', '#91CB74', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
		tooltip: {
			confine:false,
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
    //APP端不能这么做，只能在config-ucharts.js内预先定义，item, category, index, opts详细解释看文档https://demo.ucharts.cn的帮助页
    setTimeout(() => {
      this.getServerData();
    }, 1000);
    // setTimeout(() => {
    //   this.chartsData = JSON.parse(JSON.stringify(demodata.Line));
    // }, 6000);
  },
  methods: {
    getServerData() {
      this.chartsData.Column1=JSON.parse(JSON.stringify(demodata.Column))
      this.chartsData.Column2=JSON.parse(JSON.stringify(demodata.Column))
      this.chartsData.Column3=JSON.parse(JSON.stringify(demodata.Column))
      this.chartsData.Column4=JSON.parse(JSON.stringify(demodata.Column))
      this.chartsData.Column6=JSON.parse(JSON.stringify(demodata.Column))
      this.chartsData.Line1=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Line2=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Line3=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Line4=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Area1=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Area2=JSON.parse(JSON.stringify(demodata.Line))
      this.chartsData.Mix1=JSON.parse(JSON.stringify(demodata.Mix))
      this.chartsData.Pie1=JSON.parse(JSON.stringify(demodata.Pie))
      this.chartsData.PieA=JSON.parse(JSON.stringify(demodata.PieA))
      this.chartsData.Ring1=JSON.parse(JSON.stringify(demodata.Pie))
      this.chartsData.Rose1=JSON.parse(JSON.stringify(demodata.Pie))
      this.chartsData.Rose2=JSON.parse(JSON.stringify(demodata.Pie))
      this.chartsData.Arcbar1=JSON.parse(JSON.stringify(demodata.Arcbar1))
      this.chartsData.Arcbar2=JSON.parse(JSON.stringify(demodata.Arcbar2))
      this.chartsData.Gauge1=JSON.parse(JSON.stringify(demodata.Gauge))
      this.chartsData.Gauge2=JSON.parse(JSON.stringify(demodata.Gauge))
      this.chartsData.Radar1=JSON.parse(JSON.stringify(demodata.Radar))
      this.chartsData.Radar2=JSON.parse(JSON.stringify(demodata.Radar))
      this.chartsData.Word1=JSON.parse(JSON.stringify(demodata.Word))
      this.chartsData.Funnel1=JSON.parse(JSON.stringify(demodata.Pie))
      this.chartsData.Candle1=JSON.parse(JSON.stringify(demodata.Candle))
      this.$forceUpdate();
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
