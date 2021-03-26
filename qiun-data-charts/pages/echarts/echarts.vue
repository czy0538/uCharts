<template>
  <view class="content">
		<qiun-title-bar title="柱状图" />
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="chartsData.Column1" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
    </view>
		<qiun-title-bar title="折线图" />
    <view class="charts-box">
      <qiun-data-charts type="line" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="曲线图" />
    <view class="charts-box">
      <qiun-data-charts type="line" :opts="{extra:{line:{type:'curve'}}}" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="区域图" />
    <view class="charts-box">
      <qiun-data-charts type="area" :chartData="chartsData.Line1" :echartsH5="true" :echartsApp="true"/>
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
		<qiun-title-bar title="基本仪表盘"/>
		<view class="charts-box">
		  <qiun-data-charts type="gauge" :opts="{title:{name: '60Km/H',color: '#2fc25b',fontSize: 25,offsetY:50},subtitle: {name: '实时速度',color: '#666666',fontSize: 15,offsetY:-50}}" :chartData="chartsData.Gauge1"  :echartsH5="true" :echartsApp="true"/>
		</view>
		<!-- <qiun-title-bar title="K线图"/>
    <view class="charts-box">
      <qiun-data-charts type="candle" :ontouch="true" :chartData="chartsData.Candle1" :echartsH5="true" :echartsApp="true" /> 
    </view> -->
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
