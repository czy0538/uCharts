<template>
  <view class="content">
    <qiun-title-bar title="新增用户趋势"/>
    <view class="charts-box">
      <!--
      datacom组件读取uniClinetDB示例
      数据规范：
      带有categories类型的图表定义如下
      group：为series分组的name
      text：为对应categories的字段
      value：为series的分组data的值
      获取后组件会自动处理categories和series数据，无需手动拼接处理
      注意事项：
      1、如已传入chartData的categories，则优先使用chartData的categories
      2、如返回数据中无分组字段group，否则图例会显示"默认分组"，如下
      chartData={categories:["a","b","c"],series:[{name:"默认分组",data:[0,1,2]}]}
      3、如果text在数据库中定义为enum类型，则需要传入textEnum来描述正确的text值
      4、如果group在数据库中定义为enum类型，则需要传入groupEnum来描述正确的group值
      -->
      <qiun-data-charts
      	class="charts-box"
      	type="column"
      	:opts="{xAxis:{disableGrid:true,labelCount:4},yAxis:{format:''},extra:{line:{type: 'curve'}}}"
      	collection="opendb-news-articles"
      	field="publish_date,article_status"
      	:where="'publish_date >= ' + new Date(startDate).getTime() + ' && publish_date <= ' + new Date(endDate).getTime()"
      	groupby="dateToString(add(new Date(0),publish_date),'%Y-%m-%d','+0800') as text,article_status as group"
      	group-field="count(*) as value"
        :groupEnum="[{value: 0,text: '草稿箱'},{value: 1,text: '已发布'}]"
        :startDate="startDate"
        :endDate="endDate"
      />
    </view>
    <qiun-title-bar title="新增用户趋势"/>
    <view class="charts-box">
      <!--
      饼图类数据规范：
      value：代表具体数值
      text：代表value的描述
      注意事项：
      1、如果text在数据库中定义为enum类型，则需要传入textEnum来描述正确的text值
      -->
      <qiun-data-charts
      	class="charts-box"
      	type="pie"
      	collection="opendb-news-articles"
      	field="publish_date,article_status"
      	:where="'publish_date >= ' + new Date(startDate).getTime() + ' && publish_date <= ' + new Date(endDate).getTime()"
      	groupby="article_status as text"
      	group-field="count(*) as value"
        :textEnum="[{value: 0,text: '草稿箱'},{value: 1,text: '已发布'}]"
      />
    </view>
  </view>
</template>

<script>
//下面是uCharts的配置文件及qiun-data-charts组件的公用中转参数，可以从本配置文件中获取uCharts实例、opts配置、format配置（APP端因采用renderjs无法从此配置文件获取uCharts实例）
import uCharts from '@/uni_modules/qiun-data-charts/js_sdk/u-charts/config-ucharts.js';

export default {
  data() {
    return {
      startDate: '2020-12-01',
      endDate: '2020-12-31',
    };
  },
  onLoad() {
    
  },
  methods: {
    getServerData() {
      
    },
    complete(e) {
      console.log(e);
      //uCharts.instance[e.id]代表当前的图表实例（除APP端，APP不可在组件外调用uCharts的实例）
      console.log(uCharts.instance[e.id]);
      
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
