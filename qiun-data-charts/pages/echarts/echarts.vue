<template>
  <view class="content">
    <!-- config-echarts.js中的seriesTemplate为option.series模板，可以作为series中的默认配置，:chartData.series中的配置如果有相同的，会覆盖掉 seriesTemplate 中的配置 -->
		<qiun-title-bar title="柱状图" />
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="chartsData.Column1" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
    </view>
    <qiun-title-bar title="堆叠柱状图" />
    <view class="charts-box">
      <qiun-data-charts type="column" :eopts="{xAxis:{axisLabel:{color:'#FF0000'}}}" :chartData="chartsData.Column2" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
    </view>
		<qiun-title-bar title="折线图" />
    <view class="charts-box">
      <qiun-data-charts type="line" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="曲线图" />
    <view class="charts-box">
      <!-- 此处改变的是 seriesTemplate 模板中的默认配置，不必每个series都传smooth:true，将会覆盖:chartData.series 实现更低的代码量 -->
      <qiun-data-charts type="line" :opts="{extra:{line:{type:'curve'}}}" :eopts="{seriesTemplate:{smooth:true}}" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="区域图" />
    <view class="charts-box">
      <qiun-data-charts type="area" :eopts="{seriesTemplate:{areaStyle:{opacity:0.2}}}" :chartData="chartsData.Line2" :echartsH5="true" :echartsApp="true"/>
    </view>
    <qiun-title-bar title="渐变色区域图" />
    <view class="charts-box">
      <qiun-data-charts type="area" :chartData="chartsData.Line3" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="饼图" />
    <view class="charts-box">
      <qiun-data-charts type="pie" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="环形图"/>
		<view class="charts-box">
		  <qiun-data-charts type="ring" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="面积玫瑰图"/>
		<view class="charts-box">
		  <qiun-data-charts type="rose" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="漏斗图"/>
		<view class="charts-box">
		  <qiun-data-charts type="funnel" :chartData="chartsData.PieA" :echartsH5="true" :echartsApp="true"/>
		</view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';

export default {
  data() {
    return {
      chartsData: {},
    };
  },
  onReady() {
    setTimeout(() => {
      this.getServerData();
    }, 1000);
  },
  methods: {
    getServerData() {
      this.chartsData.Column1=JSON.parse(JSON.stringify(demodata.Column))
      //处理堆叠柱状图的series
      let duidie = JSON.parse(JSON.stringify(demodata.Column))
      for (var i = 0; i < duidie.series.length; i++) {
        duidie.series[i].stack = 'one'
        duidie.series[i].barWidth = '50%'
        duidie.series[i].label = {position: 'inside',color:'#FFFFFF'}
      }
      this.chartsData.Column2=duidie
      
      this.chartsData.Line1=JSON.parse(JSON.stringify(demodata.Line))
      
      let areadata = JSON.parse(JSON.stringify(demodata.Line))
      areadata.series = areadata.series.reverse()
      this.chartsData.Line2=areadata
      
      //渐变色区域图
      let linearareadata={
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        series:[{
          name: "成交量A",
          smooth:true,
          areaStyle:{
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: '#1890FF' // 0% 处的颜色
              }, {
                  offset: 1, color: '#FFFFFF' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          data: [100, 80, 95, 150, 112, 132]
        }]
      }
      this.chartsData.Line3=linearareadata
      
      this.chartsData.PieA=JSON.parse(JSON.stringify(demodata.PieA))
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
