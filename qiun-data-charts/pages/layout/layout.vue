<template>
  <view class="content">
    <qiun-title-bar title="在swiper中使用"/>
    <swiper style="height: 330px;" :indicator-dots="true">
      <swiper-item>
        <view class="charts-box">
          <qiun-data-charts type="line" :chartData="chartsData.Column1" :canvas2d="true" canvasId="swiperida" :inScrollView="true" :pageScrollTop="pageScrollTop"/>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="charts-box">
          <qiun-data-charts type="column" :chartData="chartsData.Column1" :canvas2d="true" canvasId="swiperidb" :inScrollView="true" :pageScrollTop="pageScrollTop"/>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="charts-box">
          <qiun-data-charts type="area" :chartData="chartsData.Column1" :canvas2d="true" canvasId="swiperidc" :inScrollView="true" :pageScrollTop="pageScrollTop"/>
        </view>
      </swiper-item>
    </swiper>
    <qiun-title-bar title="在scroll-view中使用"/>
    <scroll-view style="height: 400px;" :scroll-y="true">
      <view class="charts-box">
        <!-- 如果您的scroll-view可能和我这个一样，既有页面滚动，还有scroll-view滚动，这种情况下，需要动态传入offsetTop的值为页面滚动条滚动的距离 -->
        <qiun-data-charts type="column" :chartData="chartsData.Column1" :canvas2d="true" canvasId="scroll-viewid" :inScrollView="true" :pageScrollTop="pageScrollTop"/>
      </view>
      <view style="height: 300px;background: #1890FF;">
        
      </view>
    </scroll-view>
    <qiun-title-bar title="父元素fixed定位"/>
    <view class="botton-box">
      <button class="uni-button" type="default" @click="openfixed">点击显示弹出层</button>
    </view>
    <qiun-title-bar title="使用v-for生成图表"/>
    <block v-for="(item, index) in list" :key="index">
      <view class="charts-box">
        <qiun-data-charts :type="item.type" :chartData="item.chartData" :canvas2d="true" :canvasId="item.id"/>
      </view>
    </block>
    <view class="fix-class" v-if="fixedzt">
      <view class="fix-bottom">
        <view class="close-title" @click="openfixed">点击此处关闭弹窗</view>
        <qiun-title-bar title="父元素fixed定位"/>
        <view class="charts-box">
          <qiun-data-charts type="area" :chartData="chartsData.Column1" :canvas2d="true" canvasId="fixedcanvasid" :inScrollView="true" :pageScrollTop="pageScrollTop"/>
        </view>
      </view>
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
      pageScrollTop:0,
      fixedzt:false,
      absolutezt:false,
      list:[]
    };
  },
  onReady() {
    //模拟从服务器获取数据
    this.getServerData()
    
    //模拟v-for数据变化
    setTimeout(() => {
      this.list=[
        {id:"xlsldkfjiw1",type:'area',chartData:JSON.parse(JSON.stringify(demodata.Column))},
        {id:"docldkfjiw2",type:'line',chartData:JSON.parse(JSON.stringify(demodata.Line))},
        {id:"pptldkfjiw3",type:'column',chartData:JSON.parse(JSON.stringify(demodata.Column))}
      ]
    },5000)
  },
  onPageScroll(e) {
    this.pageScrollTop = e.scrollTop
  },
  methods: {
    getServerData() {
      setTimeout(() => {
      	//因部分数据格式一样，这里不同图表引用同一数据源的话，需要深拷贝一下构造不同的对象
      	//开发者需要自行处理服务器返回的数据，应与标准数据格式一致，注意series的data数值应为数字格式
        //***注意***我是为了演示数据看起来有条理，才把chartData挂载到一个对象中，您实际项目一定不要这么做，应该每个图形一个根节点属性
        
        this.chartsData.Column1=JSON.parse(JSON.stringify(demodata.Column))
        
        this.list=[
          {id:"xlsldkfjiw1",type:'line',chartData:JSON.parse(JSON.stringify(demodata.Line))},
          {id:"docldkfjiw2",type:'column',chartData:JSON.parse(JSON.stringify(demodata.Column))},
          {id:"pptldkfjiw3",type:'area',chartData:JSON.parse(JSON.stringify(demodata.Line))}
        ]
        
      	//这里的chartsData原本是空对象，因Vue不允许在已经创建的实例上动态添加新的根级响应式属性，所以这里使用this.$forceUpdate()强制视图更新。当然也可以使用this.$set()方法将相应属性添加到嵌套的对象上。
      	//所以，不建议我这样的做法，建议直接把数据绑定到this上，否则chartData再次变更数据的时候，组件会检测不到数据变化，无法进行更新！！！
      	this.$forceUpdate();
      }, 1500);
    },
    openfixed(){
      this.fixedzt = !this.fixedzt
    },
    openabsolute(){
      
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
.botton-box{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}
.fix-class{
  position: fixed;
  top:0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.3);
}
.fix-bottom{
  position: fixed;
  bottom:0;
  height: 400px;
  width: 100vw;
  border-radius: 15px 15px 0px 0px;
  background: #FFFFFF;
}
.close-title{
  border-bottom: 1px solid #999999;
  text-align: center;
  line-height: 30px;
  height: 30px;
}
</style>
