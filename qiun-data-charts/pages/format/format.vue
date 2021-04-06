<template>
  <view class="content">
    <qiun-title-bar title="饼状图format"/>
    <view class="charts-box">
      <!-- 注意：因各小程序及app端通过组件均不能传递function类型参数，组件内所有formatter方法，均需使用format属性指定config-ucharts.js里事先定义好的formatter的key值，组件会自动匹配与其对应的function -->
      <!-- 饼图的format需要挂到chartData中的series[i].format上，例如pieFormatDemo.series[i].format="pieDemo"。当使用localdata数据渲染图表时，因series是组件自动拼接的，暂时不支持使用format -->
      <qiun-data-charts type="pie" :chartData="Pie1"/>
    </view>
    <qiun-title-bar title="Y轴format方法1(保留小数点及添加单位)"/>
    <view class="charts-box">
      <qiun-data-charts type="area" :opts="{yAxis:{data:[{tofix:3,unit:'万元'}]}}" :chartData="chartsData.Line1" />
    </view>
    <qiun-title-bar title="Y轴format方法2(自定义)"/>
    <view class="charts-box">
      <qiun-data-charts type="area" :opts="{yAxis:{data:[{format:'yAxisDemo1'}]}}" :chartData="chartsData.Line1" />
    </view>
    <qiun-title-bar title="series数据点format"/>
    <view class="charts-box">
      <!-- series的format需要在chartData.series中指定，注意，因为组件监听了chartData，只要有数据变化，就会触发更新，不要用循环chartData绑定的变量，需要一次性整体赋值给chartData！！！ -->
      <qiun-data-charts type="line" :chartData="chartsData.Column2"/>
    </view>
    <qiun-title-bar title="ECharts的tooltip提示窗format(H5 ECharts 其他uCharts)" />
    <view class="charts-box"> 
      <!-- tooltip的format需要在组件的props参数上传递，例如tooltipFormat="tooltipDemo1"，并需要在config-ucharts.js中的formatter节点中的tooltipDemo1中配置format方法。如果开启了echarts，则需要在config-echarts.js中的formatter节点中的tooltipDemo1中配置format方法。 -->
      <!-- 此示例开启了ECharts在H5的渲染，可以编译到H5和小程序查看不同的tooltipFormat效果 -->
      <qiun-data-charts
        type="column"
        :echartsH5="true"
        :chartData="chartsData.Line1"
        tooltipFormat="tooltipDemo1"
      />
    </view>
    <qiun-title-bar title="uCharts临时增加的tooltip提示窗format" />
    <view class="charts-box"> 
      <!-- 此方法展示在引用的config-ucharts.js中动态添加tooltip的formatter（APP不能实现） -->
      <qiun-data-charts
        type="column"
        :chartData="chartsData.Line1"
        :tooltipFormat="tooltipFormat"
      />
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
      tooltipFormat:"tooltipTemp1"
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
    
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        //***注意***我是为了演示数据看起来有条理，才把chartData挂载到一个对象中，您实际项目一定不要这么做，应该每个图形一个根节点属性，***例如本页饼图this.Pie1这种做法***
        this.chartsData.Line1=JSON.parse(JSON.stringify(demodata.Line))
        
        //数据点格式化示例
        //使用format属性指定config-ucharts.js里事先定义好的formatter的key值，组件会自动匹配与其对应的function 
      	let columnFormatDemo=JSON.parse(JSON.stringify(demodata.Column))
        for (var i = 0; i < columnFormatDemo.series.length; i++) {
          columnFormatDemo.series[i].format="seriesDemo1"
        }
        this.chartsData.Column2=columnFormatDemo
        
        //饼图格式化示例
        //使用format属性指定config-ucharts.js里事先定义好的formatter的key值，组件会自动匹配与其对应的function 
        let pieFormatDemo=JSON.parse(JSON.stringify(demodata.PieA))
        for (var i = 0; i < pieFormatDemo.series.length; i++) {
          pieFormatDemo.series[i].format="pieDemo"
        }
        this.Pie1=pieFormatDemo
        
        
      	//这里的chartsData原本是空对象，因Vue不允许在已经创建的实例上动态添加新的根级响应式属性，所以这里使用this.$forceUpdate()强制视图更新。当然也可以使用this.$set()方法将相应属性添加到嵌套的对象上。
      	//所以，不建议我这样的做法，建议直接把数据绑定到this上，否则chartData再次变更数据的时候，组件会检测不到数据变化，无法进行更新！！！
      	this.$forceUpdate();
      }, 1500);
    },
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
