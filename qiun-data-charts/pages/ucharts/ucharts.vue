<template>
  <view class="content">
    <qiun-title-bar title="基本柱状图"/>
    <!--
    极简调用示例，只需指定type及chartData即可。
    图表默认配置请修改js_sdk/u-charts/config-ucharts.js对应图表类型下配置 
    注：1、更新前请自行备份config.js，以免被覆盖
    2、此方式调用组件chartData需自行按图表类型需求的数据格式拼接
    配置参数请用在线生成工具(http://demo.ucharts.cn/)生成
    3、reshow属性用于强制重新渲染图表，用于切换tab时重新渲染，如组件父元素没有v-show，则不必传此参数。
    4、我的class="charts-box"这个样式，指定了高度，如果你的父元素有固定高度，请修改为height:100%
    -->
    <view class="charts-box">
      <qiun-data-charts type="column" :chartData="chartsData.Column1" />
    </view>
    <qiun-title-bar title="堆叠柱状图"/>
    <!-- 只需要在:opts中传入与config-ucharts.js中默认配置不同的属性即可覆盖默认配置，既保证了全局图表样式的统一性，也减少了代码量与包体积 -->
    <view class="charts-box">
      <qiun-data-charts type="column" :opts="{extra:{column:{type:'stack'}}}" :chartData="chartsData.Column2"/>
    </view>
    <qiun-title-bar title="温度计图表"/>
    <view class="charts-box">
      <qiun-data-charts type="column" :opts="{extra:{column:{type:'meter'}}}" :chartData="chartsData.Column3"/>
    </view>
    <qiun-title-bar title="柱状图滚动条"/>
    <!-- 开启滚动条，需要开启拖动功能，即:ontouch="true" -->
    <view class="charts-box">
      <qiun-data-charts type="column" :opts="{enableScroll:true,xAxis:{scrollShow:true,itemCount:4,disableGrid:true}}" :ontouch="true" :chartData="chartsData.Column4"/>
    </view>
    <qiun-title-bar title="圆角+渐变+半透明柱状图"/>
    <view class="charts-box">
      <qiun-data-charts type="column" :opts="{color:['#FAC858','#EE6666'],extra:{column:{linearType:'custom',seriesGap:5,linearOpacity:0.5,barBorderCircle:true,customColor:['#FA7D8D','#EB88E2']}}}" :chartData="chartsData.Column6"/>
    </view>
    <qiun-title-bar title="基本折线图"/>
    <view class="charts-box">
      <qiun-data-charts type="line" :chartData="chartsData.Line1"/>
    </view>
    <qiun-title-bar title="基本曲线图"/>
    <view class="charts-box">
      <qiun-data-charts type="line" :opts="{extra:{line:{type:'curve'}}}" :chartData="chartsData.Line2"/>
    </view>
    <qiun-title-bar title="基本时序图"/>
    <view class="charts-box">
      <qiun-data-charts type="line" :opts="{extra:{line:{type:'step'}}}" :chartData="chartsData.Line3"/>
    </view>
    <qiun-title-bar title="折线图滚动条"/>
    <!-- 开启滚动条，需要开启拖动功能，即:ontouch="true" -->
    <view class="charts-box">
      <qiun-data-charts type="line" :opts="{enableScroll:true,xAxis:{scrollShow:true,itemCount:4,disableGrid:true}}" :chartData="chartsData.Line4" :ontouch="true"/>
    </view>
    <qiun-title-bar title="基本区域图"/>
    <view class="charts-box">
      <qiun-data-charts type="area" :chartData="chartsData.Area1"/>
    </view>
    <qiun-title-bar title="渐变色区域图"/>
    <view class="charts-box">
      <qiun-data-charts type="area" :opts="{extra:{area:{type:'curve',addLine:true,gradient:true}}}" :chartData="chartsData.Area2"/>
    </view>
    <qiun-title-bar title="多坐标系混合图"/>
    <view class="charts-box" style="height: 400px;">
      <qiun-data-charts type="mix" :chartData="chartsData.Mix1"/>
    </view>
    <qiun-title-bar title="基本饼状图"/>
    <view class="charts-box">
      <qiun-data-charts type="pie" :chartData="chartsData.Pie1"/>
    </view>
    <qiun-title-bar title="环形图+渐变色"/>
    <view class="charts-box">
      <qiun-data-charts type="ring" :opts="{extra:{ring:{ringWidth: 60,linearType:'custom'}}}" :chartData="chartsData.Ring1"/>
    </view>
    <qiun-title-bar title="面积玫瑰图"/>
    <view class="charts-box">
      <qiun-data-charts type="rose" :chartData="chartsData.Rose1"/>
    </view>
    <qiun-title-bar title="半径玫瑰图"/>
    <view class="charts-box">
      <qiun-data-charts type="rose" :opts="{extra:{rose:{type:'radius'}}}" :chartData="chartsData.Rose2"/>
    </view>
    <qiun-title-bar title="圆弧进度条+渐变色"/>
    <!-- 这里的title.name和subtitle.name如果需要联动chartData，请定义一个变量同步传入:opts和:chartData中 -->
    <view class="charts-box">
      <qiun-data-charts type="arcbar" :opts="{title:{name:'80%',color:'#2fc25b',fontSize:35},subtitle:{name:'正确率',color:'#666666',fontSize:25},extra:{arcbar:{linearType: 'custom'}}}" :chartData="chartsData.Arcbar1"/>
    </view>
    <qiun-title-bar title="多重圆弧进度条"/>
    <view class="charts-box">
      <qiun-data-charts type="arcbar" :opts="{title:{name:'指标',color:'#1890ff',fontSize:35},subtitle:{},extra:{arcbar:{type:'circle',startAngle:1.5}}}" :chartData="chartsData.Arcbar2"/>
    </view>
    <qiun-title-bar title="多边形雷达图"/>
    <view class="charts-box">
      <qiun-data-charts type="radar" :opts="{extra:{radar:{border:true}}}" :chartData="chartsData.Radar1"/>
    </view>
    <qiun-title-bar title="圆形雷达图"/>
    <view class="charts-box">
      <qiun-data-charts type="radar" :opts="{extra:{radar:{gridType:'circle'}}}" :chartData="chartsData.Radar2"/>
    </view>
    <qiun-title-bar title="基本仪表盘"/>
    <!-- 这里的title.name和subtitle.name如果需要联动chartData，请定义一个变量同步传入:opts和:chartData中 -->
    <view class="charts-box">
      <qiun-data-charts type="gauge" :opts="{title:{name: '60Km/H',color: '#2fc25b',fontSize: 25,offsetY:50},subtitle: {name: '实时速度',color: '#666666',fontSize: 15,offsetY:-50}}" :chartData="chartsData.Gauge1"/>
    </view>
    <qiun-title-bar title="其他仪表盘"/>
    <view class="charts-box">
      <qiun-data-charts type="gauge" :opts="{title:{offsetY:0},subtitle:{offsetY:0},extra:{gauge:{type:'progress',width:20,splitLine:{fixRadius:-10,width:15,},}}}" :chartData="chartsData.Gauge2"/>
    </view>
    <qiun-title-bar title="词云图"/>
    <view class="charts-box">
      <qiun-data-charts type="word" :chartData="chartsData.Word1"/>
    </view>
    <qiun-title-bar title="漏斗图"/>
    <view class="charts-box">
      <qiun-data-charts type="funnel" :chartData="chartsData.Funnel1"/>
    </view>
    <qiun-title-bar title="K线图"/>
    <view class="charts-box" style="height: 400px;">
      <qiun-data-charts type="candle" :ontouch="true" :chartData="chartsData.Candle1"/>
    </view>
    <qiun-title-bar title="地图"/>
    <view class="charts-box" style="height: 400px;">
      <qiun-data-charts type="map" :chartData="chartsData.Map1"/>
    </view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';
import mapdata from '@/mockdata/mapdata.json'
//下面是uCharts的配置文件及qiun-data-charts组件的公用中转参数，可以从本配置文件中获取uCharts实例、opts配置、format配置（APP端因采用renderjs无法从此配置文件获取uCharts实例）
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js';

export default {
  data() {
    return {
      chartsData: {},
    };
  },
  onReady() {
    //模拟从服务器获取数据
    this.getServerData()
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
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
      	this.chartsData.Map1={series:mapdata.features}
      	this.chartsData.Candle1=JSON.parse(JSON.stringify(demodata.Candle))
      	//这里的chartsData原本是空对象，因Vue不允许在已经创建的实例上动态添加新的根级响应式属性，所以这里使用this.$forceUpdate()强制视图更新。当然也可以使用this.$set()方法将相应属性添加到嵌套的对象上。
      	//所以，不建议我这样的做法，建议直接把数据绑定到this上
      	this.$forceUpdate();
      }, 1500);
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
