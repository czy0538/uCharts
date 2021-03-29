<template>
  <view class="content">
    <qiun-title-bar title="localdata渲染图表1+点击获取索引"/>
    <view class="charts-box">
      <qiun-data-charts type="column" :localdata="chartsData.localdata" @getIndex="getIndex"/>
    </view>
    <qiun-title-bar title="localdata渲染图表2"/>
    <view class="charts-box">
      <qiun-data-charts type="pie" :localdata="chartsData.localdataB"/>
    </view>
    <qiun-title-bar title="渲染完成后显示自定义tooltip" />
    <view class="charts-box"> 
      <!-- 这个demo演示在config-ucharts.js里事先定义好的formatter 渲染完成后显示tooltip-->
      <qiun-data-charts
        type="column"
        :opts="{
          enableScroll: true,
          xAxis: { scrollShow: true, itemCount: 4, disableGrid: true },
          yAxis: { data: [{ format: 'yAxisDemo1' }] },
          extra: { column: { seriesGap: 5, barBorderCircle: true } }
        }"
        :chartData="chartsData.Column1"
        tooltipFormat="tooltipDemo1"
        :ontouch="true"
        @complete="complete"
      />
    </view>
    <qiun-title-bar title="临时的自定义的tooltip及跟手tooltip" />
    <view class="charts-box" >
      <!-- 这个demo演示用临时的自定义的tooltip（APP端不可以临时定义） 及 使用canvas2d模式在小程序端，及拖动图表时的跟手tooltip-->
      <qiun-data-charts
        type="column"
        :opts="{ enableScroll: false, extra: { column: { seriesGap: 5, barBorderCircle: true } } }"
        canvasId="canvas2dNeedId"
        :tooltipFormat="tooltipFormat"
        :chartData="chartsData.Column2"
        :canvas2d="true"
        :ontouch="true"
        :onmovetip="true"
      />
    </view>
    <qiun-title-bar title="饼状图format+动态更新数据"/>
    <view class="charts-box">
      <!-- 如果使用chartData.series=[]的方法展示重新加载数据，chartData绑定的变量一定要挂到this实例上！！！否则可能会导致监听不到数据变化的问题！！！ -->
      <qiun-data-charts type="pie" :chartData="Pie1"/>
    </view>
  </view>
</template>

<script>
//下面是演示数据，您的项目不需要引用，数据需要您从服务器自行获取
import demodata from '@/mockdata/demodata.json';

//下面是uCharts的配置文件及qiun-data-charts组件的公用中转参数，可以从本配置文件中获取uCharts实例、opts配置、format配置（APP端因采用renderjs无法从此配置文件获取uCharts实例）
//***并不是所有的页面都需要引用这个文件***引入这个configjs是为了获取组件的uCharts实例，从而操作uCharts的一些方法，例如手动显示tooltip及一些其他uCharts包含的方法及事件。
//再说一遍，只能在H5内使用，APP不行，APP不行，APP不行
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js';




export default {
  data() {
    return {
      chartsData: {},
      Pie1:{},
      tooltipFormat: 'tooltipDemo2',
    };
  },
  onLoad() {
    //tooltipFormat自定义的示例（APP端不能这么做，只能在config-ucharts.js内预先定义），item, category, index, opts详细解释看文档https://demo.ucharts.cn的帮助页
    uCharts.formatter[this.tooltipFormat] = function(item, category, index, opts) {
      //只有第一组数据和其他组别不一样，想要其他的请自由发挥
      if (index === 0) {
        return '第一组数据' + item.data + '年';
      } else {
        return '2016年以后的' + item.data + '天';
      }
    };
    //模拟从服务器获取数据
    this.getServerData()
    
    //演示变更数据后显示loading状态
    setTimeout(() => {
      this.Pie1.series=[];
    }, 4000);
    //模拟新的饼图数据
    setTimeout(() => {
      this.Pie1.series=[{
        "data": [
          {
            "name": "一班",
            "value": 90
          }, {
            "name": "二班",
            "value": 20
          }
        ]
      }];
    }, 5000);
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        //***注意***我是为了演示数据看起来有条理，才把chartData挂载到一个对象中，您实际项目一定不要这么做，应该每个图形一个根节点属性，***例如本页饼图this.Pie1这种做法***
        this.chartsData.localdata=JSON.parse(JSON.stringify(demodata.localdata))
        this.chartsData.localdataB=JSON.parse(JSON.stringify(demodata.localdataB))
      	this.chartsData.Column1=JSON.parse(JSON.stringify(demodata.Column))
        
        //数据点格式化示例
      	let columnFormatDemo=JSON.parse(JSON.stringify(demodata.Column))
        for (var i = 0; i < columnFormatDemo.series.length; i++) {
          columnFormatDemo.series[i].format="seriesDemo1"
        }
        this.chartsData.Column2=columnFormatDemo
        
        //饼图格式化示例
        let pieFormatDemo=JSON.parse(JSON.stringify(demodata.Pie))
        for (var i = 0; i < pieFormatDemo.series.length; i++) {
          pieFormatDemo.series[i].format="pieDemo"
        }
        this.Pie1=pieFormatDemo
      	//这里的chartsData原本是空对象，因Vue不允许在已经创建的实例上动态添加新的根级响应式属性，所以这里使用this.$forceUpdate()强制视图更新。当然也可以使用this.$set()方法将相应属性添加到嵌套的对象上。
      	//所以，不建议我这样的做法，建议直接把数据绑定到this上，否则chartData再次变更数据的时候，组件会检测不到数据变化，无法进行更新！！！
      	this.$forceUpdate();
      }, 1500);
    },
    complete(e) {
      console.log("渲染完成事件",e);
      //uCharts.instance[e.id]代表当前的图表实例（除APP端，APP不可在组件外调用uCharts的实例）
      console.log("uCharts实例",uCharts.instance[e.id]);
      //uCharts.option[e.id]代表当前的图表的opts（除APP端，APP不可在组件外调用uCharts的实例）
      console.log("uCharts的option",uCharts.option[e.id]);
      //下面展示渲染完成后，通过实例调用uCharts的showToolTip方法，有了uCharts实例，您也可以在其他地方调用图表的方法及数据（除APP端，APP因采用renderjs，无法获取uCharts实例）
      // #ifndef APP-PLUS
      //如果需要tooltip换行显示，也可以参照本示例，关闭组件本身的tooltip功能，即:tooltipShow="false"，然后在@getIndex事件中，通过uCharts.instance[e.id].showToolTip()方法来自定义。
      let textList = [
        { text: '默认显示的tooltip', color: null },
        { text: '类别1：某个值xxx', color: '#2fc25b' },
        { text: '类别2：某个值xxx', color: '#facc14' },
        { text: '类别3：某个值xxx', color: '#f04864' }
      ];
      uCharts.instance[e.id].showToolTip(
        { changedTouches: [{ x: 0, y: 100 }] },
        {
          index: 3,
          textList: textList
        }
      );
      // #endif
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
