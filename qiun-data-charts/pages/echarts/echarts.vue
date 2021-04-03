<template>
  <view class="content">
    <!-- config-echarts.js中的seriesTemplate为option.series模板，可以作为series中的默认配置，:chartData.series中的配置如果有相同的，会覆盖掉 seriesTemplate 中的配置 -->
		<qiun-title-bar title="柱状图+动态更新数据" />
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="colunmdata" :echartsH5="true" :echartsApp="true" @complete="complete"/>
    </view>
    <qiun-title-bar title="堆叠柱状图+点击获取索引" />
    <view class="charts-box">
      <!-- 注意：这里的opts是uCharts的配置，eopts是ECharts的配置，不要搞混，如果不需要用在各种小程序端，是不需要传uCharts的opts的，只需要传eopts即可！！！ -->
      <qiun-data-charts type="column" :opts="{extra:{column:{type:'stack'}}}" :eopts="{xAxis:{axisLabel:{color:'#FF0000'}}}" :chartData="chartsData.Column2" :echartsH5="true" :echartsApp="true" @getIndex="getIndex"/>
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
      <!-- 注意：这里的opts是uCharts的配置，eopts是ECharts的配置，不要搞混，如果不需要用在各种小程序端，是不需要传uCharts的opts的，只需要传eopts即可！！！这里加opts是为了覆盖uCharts的rose图的默认图例配置的位置 -->
      <qiun-data-charts type="area" :opts="{yAxis:{data:[{min:0}]},extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="chartsData.Line3" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="饼图" />
    <view class="charts-box">
      <qiun-data-charts type="pie" :chartData="chartsData.Pie1" :echartsH5="true" :echartsApp="true"/>
    </view>
		<qiun-title-bar title="环形图+动态更新option"/>
		<view class="charts-box">
      <!-- 演示动态改变eopts -->
		  <qiun-data-charts type="ring" :opts="{legend:{position:'bottom'}}" :eopts="ringOpts" :chartData="chartsData.Pie2" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="面积玫瑰图"/>
		<view class="charts-box">
       <!-- 注意：这里的opts是uCharts的配置，eopts是ECharts的配置，不要搞混，如果不需要用在各种小程序端，是不需要传uCharts的opts的，只需要传eopts即可！！！这里加opts是为了覆盖uCharts的rose图的默认图例配置的位置 -->
		  <qiun-data-charts type="rose" :opts="{legend:{position:'bottom'}}" :chartData="chartsData.Pie3" :echartsH5="true" :echartsApp="true"/>
		</view>
		<qiun-title-bar title="漏斗图"/>
		<view class="charts-box">
		  <qiun-data-charts type="funnel" :chartData="chartsData.Pie4" :echartsH5="true" :echartsApp="true"/>
		</view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';

export default {
  data() {
    return {
      colunmdata:{},
      chartsData: {},
      ringOpts:{}
    };
  },
  onReady() {
    setTimeout(() => {
      this.getServerData();
    }, 1000);
    
    //演示变更数据后显示loading状态，如果不想展示loading状态，则不需要此步，可以注释掉看效果
    setTimeout(() => {
      this.colunmdata.series=[];
    }, 4000);
    
    setTimeout(() => {
      //模拟新的柱状图
      this.colunmdata=JSON.parse(JSON.stringify(demodata.Line));
      //测试动态绑定的eopts
      this.ringOpts={
        color:['#FF00FF','#AAFF11'],
        legend:{show:false}
      }
    }, 5000);
  },
  methods: {
    getServerData() {
      this.colunmdata=JSON.parse(JSON.stringify(demodata.Column));
      
      //因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      //开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
      //***注意***我是为了演示数据看起来有条理，才把chartData挂载到一个对象中，您实际项目一定不要这么做，应该每个图形一个根节点属性，***例如上面this.colunmdata这种做法***
      this.chartsData.Pie1=JSON.parse(JSON.stringify(demodata.PieA))
      this.chartsData.Pie2=JSON.parse(JSON.stringify(demodata.PieA))
      this.chartsData.Pie3=JSON.parse(JSON.stringify(demodata.PieA))
      this.chartsData.Pie4=JSON.parse(JSON.stringify(demodata.PieA))
      this.chartsData.Line1=JSON.parse(JSON.stringify(demodata.Line))
      
      
      //处理堆叠柱状图的series
      let duidie = JSON.parse(JSON.stringify(demodata.Column))
      for (var i = 0; i < duidie.series.length; i++) {
        duidie.series[i].stack = 'one'
        duidie.series[i].barWidth = '50%'
        duidie.series[i].label = {position: 'inside',color:'#FFFFFF'}
      }
      //这里需要注意，一定要定义一个临时的变量再统一赋值给chartData，否则chartData具有监听属性，只要有变化就会导致重新渲染
      this.chartsData.Column2=duidie
      
      
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
      
      this.$forceUpdate();
    },
    complete(e) {
      console.log("渲染完成事件",e);
    },
    getIndex(e){
      console.log("获取点击索引事件",e);
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
