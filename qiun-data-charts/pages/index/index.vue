<template>
  <view class="content">
    <block v-for="(item, index) in list" :key="index">
      <view class="list-box" @tap="gotourl(item.url)">{{item.name}}</view>
    </block>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {name:"全端uCharts渲染",url:"../ucharts/ucharts"},
        {name:"H5、App用ECharts，其他端用uCharts渲染",url:"../echarts/echarts"},
        {name:"uniCloud数据渲染图表",url:"../unicloud/unicloud"},
        {name:"其他图表高级应用",url:"../other/other"},
      ],
    }
  },
  onReady() {
  },
  methods: {
    gotourl(url) {
      uni.navigateTo({
          url: url
      });
    },
  }
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}
.list-box{
  text-align: center;
  margin-top: 50px;
  line-height: 40px;
  width: 80%;
  border: 1 px solid #317ac3;
  border-radius: 5px;
  background: #409EFF;
  font-size: 20px;
  color: #FFFFFF;
}
</style>
