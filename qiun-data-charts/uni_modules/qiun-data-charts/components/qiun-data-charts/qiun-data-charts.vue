<!-- 
 * qiun-data-charts 秋云高性能跨全端图表组件 v1.0.0.20210327
 * Copyright (c) 2021 QIUN® 秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 复制使用请保留本段注释，感谢支持开源！
 * 为方便更多开发者使用，如有更好的建议请提交码云 Pull Requests ！
 *
 * uCharts®官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 -->
<template>
  <view class="chartsview">
    <view v-if="mixinDatacomLoading">
      <!-- 自定义加载状态，请改这里 -->
      <qiun-loading :loadingType="loadingType" />
    </view>
    <view v-if="mixinDatacomErrorMessage && errorShow" @tap="reloading">
      <!-- 自定义错误提示，请改这里 -->
      <qiun-error :errorMessage="errorMessage" />
    </view>
    <!-- APP和H5采用renderjs渲染图表 -->
    <!-- #ifdef APP-PLUS || H5 -->
    <block v-if="echarts">
      <view
        :style="{ background: background }"
        style="width: 100%;height: 100%;"
        :id="'EC'+echartsOpts.id" 
        :prop="echartsOpts" 
        :change:prop="rdcharts.ecinit" 
        :resize="echartsResize"
        :change:resize="rdcharts.ecresize"
        v-show="showchart"
      />
    </block>
    <block v-else>
      <view
        @tap="rdcharts.tap"
        @mousemove="rdcharts.mouseMove"
        @mousedown="rdcharts.mouseDown"
        @mouseup="rdcharts.mouseUp"
        @touchstart="rdcharts.touchStart"
        @touchmove="rdcharts.touchMove"
        @touchend="rdcharts.touchEnd"
        :id="'UC'+cid"
        :prop="uchartsOpts"
        :change:prop="rdcharts.ucinit"
      >
        <canvas
          :id="cid"
          :canvasId="cid"
          :style="{ width: cWidth + 'px', height: cHeight + 'px', background: background }"
          :disable-scroll="disableScroll"
          @error="_error"
          v-if="showchart"
        />
      </view>
    </block>
    <!-- #endif -->
    <!-- 其他平台通过vue渲染图表 -->
    <!-- #ifndef APP-PLUS || H5 -->
    <block v-if="type2d">
      <view v-if="ontouch">
        <canvas
          :id="cid"
          :style="{ width: cWidth + 'px', height: cHeight + 'px', background: background }"
          type="2d"
          :disable-scroll="disScroll"
          @tap="_tap"
          @touchstart="_touchStart"
          @touchmove="_touchMove"
          @touchend="_touchEnd"
          @error="_error"
          v-show="showchart"
        />
      </view>
      <view v-if="!ontouch">
        <canvas
          :id="cid"
          :style="{ width: cWidth + 'px', height: cHeight + 'px', background: background }"
          type="2d"
          :disable-scroll="disScroll"
          @tap="_tap"
          @error="_error"
          v-show="showchart"
        />
      </view>
    </block>
    <block v-if="!type2d">
      <view v-if="ontouch">
        <canvas
          :id="cid"
          :canvasId="cid"
          :style="{ width: cWidth + 'px', height: cHeight + 'px', background: background }"
          @tap="_tap"
          @touchstart="_touchStart"
          @touchmove="_touchMove"
          @touchend="_touchEnd"
          :disable-scroll="disScroll"
          @error="_error"
          v-if="showchart"
        />
      </view>
      <view v-if="!ontouch">
        <canvas
          :id="cid"
          :canvasId="cid"
          :style="{ width: cWidth + 'px', height: cHeight + 'px', background: background }"
          :disable-scroll="disScroll"
          @tap="_tap"
          @error="_error"
          v-if="showchart"
        />
      </view>
    </block>
    <!-- #endif -->
  </view>
</template>

<script>
import uChartsMp from '../../js_sdk/u-charts/u-charts-v2.0.0.js';
import cfu from '../../js_sdk/u-charts/config-ucharts.js';
// #ifdef APP-PLUS || H5
import cfe from '../../js_sdk/u-charts/config-echarts.js';
// #endif

function deepCloneAssign(origin = {}, ...args) {
  for (let i in args) {
    for (let key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        origin[key] = args[i][key] && typeof args[i][key] === 'object' ? deepCloneAssign(Array.isArray(args[i][key]) ? [] : {}, origin[key], args[i][key]) : args[i][key];
      }
    }
  }
  return origin;
}

function formatterAssign(args,formatter) {
  for (let key in args) {
    if(typeof args[key] === 'object'){
      formatterAssign(args[key],formatter)
    }else if(key === 'format' && typeof args[key] === 'string'){
      args['formatter'] = formatter[args[key]] ? formatter[args[key]] : undefined;
    }
  }
  return args;
}

// 时间转换函数，为了匹配uniClinetDB读取出的时间与categories不同
function getFormatDate(date) {
	var seperator = "-";
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
			month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
			strDate = "0" + strDate;
	}
	var currentdate = year + seperator + month + seperator + strDate;
	return currentdate;
}

var lastMoveTime = null;

export default {
  name: 'qiun-data-charts',
  mixins: [uniCloud.mixinDatacom],
  props: {
    type: {
      type: String,
      default: null
    },
    canvasId: {
      type: String,
      default: 'uchartsid'
    },
    canvas2d: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'none'
    },
    animation: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      default() {
        return {
          categories: [],
          series: []
        };
      }
    },
    opts: {
      type: Object,
      default() {
        return {};
      }
    },
    eopts: {
      type: Object,
      default() {
        return {};
      }
    },
    loadingType: {
      type: Number,
      default: 2
    },
    errorShow: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: null
    },
    inScrollView: {
      type: Boolean,
      default: false
    },
    reshow: {
      type: Boolean,
      default: false
    },
    reload: {
      type: Boolean,
      default: false
    },
    disableScroll: {
      type: Boolean,
      default: false
    },
    ontap: {
      type: Boolean,
      default: true
    },
    ontouch: {
      type: Boolean,
      default: false
    },
    onmouse: {
      type: Boolean,
      default: true
    },
    onmovetip: {
      type: Boolean,
      default: false
    },
    echartsH5: {
      type: Boolean,
      default: false
    },
    echartsApp: {
      type: Boolean,
      default: false
    },
    tooltipShow: {
      type: Boolean,
      default: true
    },
    tooltipFormat: {
      type: String,
      default: undefined
    },
    tooltipCustom: {
      default: undefined
    },
    startDate: {
      type: String,
      default: undefined
    },
    endDate: {
      type: String,
      default: undefined
    },
    textEnum: {
      type: Array,
      default () {
        return []
      }
    },
    groupEnum: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      cid: 'uchartsid',
      inWx: false,
      inH5: false,
      inApp: false,
      type2d: false,
      disScroll: false,
      pixel: 1,
      cWidth: 375,
      cHeight: 250,
      showchart: false,
      echarts: false,
      echartsResize:false,
      uchartsOpts: {},
      echartsOpts: {},
    };
  },
  mounted() {
    this.cid = this.canvasId
    // #ifdef APP-PLUS
    this.inApp = true;
    if (this.echartsApp === true) {
      this.echarts = true;
    }
    // #endif
    // #ifdef H5
    this.inH5 = true;
    if (this.echartsH5 === true) {
      this.echarts = true;
    }
    // #endif
    if (this.canvasId == 'uchartsid' || this.canvasId == '') {
      let t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      let len = t.length
      let id = ''
      for (let i = 0; i < 32; i++) {
        id += t.charAt(Math.floor(Math.random() * len))
      }
      this.cid = id
    }
    // #ifdef MP-WEIXIN
    this.inWx = true;
    if (this.canvas2d === true) {
      this.type2d = true;
      this.pixel = uni.getSystemInfoSync().pixelRatio;
    }
    // #endif
    if (this.type2d === true && this.canvasId === 'uchartsid') {
      console.log('[uCharts]:开启canvas2d模式，必须指定canvasId，否则会出现偶尔获取不到dom节点的问题！');
    }
    this.disScroll = this.disableScroll
    if(this.echarts === true){
      if (this.type && cfe.type.includes(this.type)) {
        cfe.option[this.cid] = deepCloneAssign({}, cfe[this.type], this.eopts);
      }else{
        cfe.option[this.cid] = deepCloneAssign({}, this.eopts);
      }
      cfe.option[this.cid].id = this.cid;
      cfe.option[this.cid].lastDrawTime = Date.now();
      this.beforeInit();
    }else{
      if (this.type && cfu.type.includes(this.type)) {
        cfu.option[this.cid] = deepCloneAssign({}, cfu[this.type], this.opts);
        cfu.option[this.cid].lastDrawTime = Date.now();
        this.beforeInit();
      } else {
        this.mixinDatacomLoading = false;
        this.showchart = false;
        this.mixinDatacomErrorMessage = '参数错误：props参数中type类型不正确';
      }
    }
    uni.onWindowResize(res => {
      setTimeout(() => {
        if(this.echarts){
          this.echartsResize = !this.echartsResize
        }else{
          this.resizeHandler()
        }
      }, 200);
    });
  },
  destroyed(){
    if(this.echarts === true){
      delete cfe.option[this.cid]
      delete cfe.instance[this.cid]
    }else{
      delete cfu.option[this.cid]
      delete cfu.instance[this.cid]
    }
    uni.offWindowResize(()=>{})
  },
  watch: {
    chartDataProps: {
      handler(val, oldval) {
        if (typeof val === 'object') {
          if (JSON.stringify(val) !== JSON.stringify(oldval)) {
            this.checkData(val);
          }
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = '参数错误：chartData数据类型错误';
        }
      },
      immediate: false,
      deep: true
    },
    localdata:{
      handler(val, oldval) {
        if (JSON.stringify(val) !== JSON.stringify(oldval)) {
          this.localdataInit(val);
        }
      },
      immediate: false,
      deep: true
    },
    optsProps: {
      handler(val, oldval) {
        //渲染防抖
        // let currTime = Date.now();
        // let duration = currTime - cfu.option[this.cid].lastDrawTime;
        // if (cfu.option[this.cid].animation==true && duration < 1000) return;
        if (typeof val === 'object') {
          if (JSON.stringify(val) !== JSON.stringify(oldval)) {
            cfu.option[this.cid] = deepCloneAssign({}, cfu[this.type], val);
            this.checkData(this.chartData);
          }
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = '参数错误：opts数据类型错误';
        }
      },
      immediate: false,
      deep: true
    },
    eoptsProps: {
      handler(val, oldval) {
        //渲染防抖
        // let currTime = Date.now();
        // let duration = currTime - cfe.option[this.cid].lastDrawTime;
        // if (cfe.option[this.cid].animation==true && duration < 1000) return;
        if (typeof val === 'object') {
          if (JSON.stringify(val) !== JSON.stringify(oldval)) {
            if (this.type && cfe.type.includes(this.type)) {
              cfe.option[this.cid] = deepCloneAssign({}, cfe[this.type], val);
            }else{
              cfe.option[this.cid] = deepCloneAssign({}, val);
            }
            this.checkData(this.chartData);
          }
        } else {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = '参数错误：eopts数据类型错误';
        }
      },
      immediate: false,
      deep: true
    },
    reshow(val, oldval) {
      if (val === true) {
        if(this.echarts === true){
            this.echartsResize = !this.echartsResize
        }
        this._clearChart();
        this.checkData(this.chartData, true);
      }
    },
    reload(val, oldval) {
      if (val === true) {
        this.reloading();
      }
    },
    mixinDatacomErrorMessage(val, oldval) {
      if (val && this.errorShow) {
        console.log('[秋云图表组件]' + val);
      }
    },
    errorMessage(val, oldval) {
      if (val && this.errorShow && val !== null && val !== 'null' && val !== '') {
        this.showchart = false;
        this.mixinDatacomLoading = false;
        this.mixinDatacomErrorMessage = val;
      } else {
        this.reloading();
      }
    }
  },
  computed: {
    optsProps() {
      return JSON.parse(JSON.stringify(this.opts));
    },
    eoptsProps() {
      return JSON.parse(JSON.stringify(this.eopts));
    },
    chartDataProps() {
      return JSON.parse(JSON.stringify(this.chartData));
    },
  },
  methods: {
    beforeInit(){
      if (typeof this.chartData === 'object' && this.chartData != null && this.chartData.series !== undefined && this.chartData.series.length > 0) {
        this.mixinDatacomLoading = true;
        this.checkData(this.chartData);
      }else if(this.localdata.length>0){
        this.mixinDatacomLoading = true;
        this.localdataInit(this.localdata);
      }else if(this.collection !== ''){
        this.getCloudData();
      }else{
        this.mixinDatacomLoading = true;
      }
    },
    localdataInit(resdata){
      //替换enum类型为正确的描述
      if(this.groupEnum.length>0){
        for (let i = 0; i < resdata.length; i++) {
          for (let j = 0; j < this.groupEnum.length; j++) {
            if(resdata[i].group === this.groupEnum[j].value){
              resdata[i].group = this.groupEnum[j].text
            }
          }
        }
      }
      if(this.textEnum.length>0){
        for (let i = 0; i < resdata.length; i++) {
          for (let j = 0; j < this.textEnum.length; j++) {
            if(resdata[i].text === this.textEnum[j].value){
              resdata[i].text = this.textEnum[j].text
            }
          }
        }
      }
      let needCategories = false;
      let tmpData = {categories:[], series:[]}
      let tmpcategories = []
      let tmpseries = [];
      //拼接categories
      if(this.echarts === true){
        needCategories = cfe.categories.includes(this.type)
      }else{
        needCategories = cfu.categories.includes(this.type)
      }
      if(needCategories === true){
        //如果props中的chartData带有categories，则优先使用chartData的categories
        if(this.chartData && this.chartData.categories && this.chartData.categories.length>0){
          tmpcategories = this.chartData.categories
        }else{
          //如果是日期类型的数据，不管是本地数据还是云数据，都按起止日期自动拼接categories
          if(this.startDate && this.endDate){
            let idate = new Date(this.startDate)
            let edate = new Date(this.endDate)
            while (idate <= edate) {
            	tmpcategories.push(getFormatDate(idate))
            	idate = idate.setDate(idate.getDate() + 1)
            	idate = new Date(idate)
            }
          //否则从结果中去重并拼接categories
          }else{
            let tempckey = {};
            resdata.map(function(item, index) {
              if (item.text != undefined && !tempckey[item.text]) {
                tmpcategories.push(item.text)
                tempckey[item.text] = true
              }
            });
          }
        }
        tmpData.categories = tmpcategories
      }
      //拼接series
      let tempskey = {};
      resdata.map(function(item, index) {
        if (item.group != undefined && !tempskey[item.group]) {
          tmpseries.push({ name: item.group, data: [] });
          tempskey[item.group] = true;
        }
      });
      //如果没有获取到分组名称(可能是带categories的数据，也可能是不带的饼图类)
      if (tmpseries.length == 0) {
        tmpseries = [{ name: '默认分组', data: [] }];
        //如果是需要categories的图表类型
        if(needCategories === true){
          for (let j = 0; j < tmpcategories.length; j++) {
            let seriesdata = 0;
            for (let i = 0; i < resdata.length; i++) {
              if (resdata[i].text == tmpcategories[j]) {
                seriesdata = resdata[i].value;
              }
            }
            tmpseries[0].data.push(seriesdata);
          }
        //如果是饼图类的图表类型
        }else{
          for (let i = 0; i < resdata.length; i++) {
            tmpseries[0].data.push({"name": resdata[i].text,"value": resdata[i].value});
          }
        }
      //如果有分组名
      } else {
        for (let k = 0; k < tmpseries.length; k++) {
          //如果有categories
          if (tmpcategories.length > 0) {
            for (let j = 0; j < tmpcategories.length; j++) {
              let seriesdata = 0;
              for (let i = 0; i < resdata.length; i++) {
                if (tmpseries[k].name == resdata[i].group && resdata[i].text == tmpcategories[j]) {
                  seriesdata = resdata[i].value;
                }
              }
              tmpseries[k].data.push(seriesdata);
            }
          //如果传了group而没有传text，即没有categories（正常情况下这种数据是不符合数据要求规范的）
          } else {
            for (let i = 0; i < resdata.length; i++) {
              if (tmpseries[k].name == resdata[i].group) {
                tmpseries[k].data.push(resdata[i].value);
              }
            }
          }
        }
      }
      tmpData.series = tmpseries
      this.checkData(tmpData)
    },
    reloading() {
      this.showchart = false;
      this.mixinDatacomErrorMessage = null;
      if (this.collection !== '') {
        this.mixinDatacomLoading = false;
        this.onMixinDatacomPropsChange(true);
      } else {
        this.mixinDatacomLoading = true;
        this.beforeInit();
      }
    },
    checkData(chartData, reshow) {
      let cid = this.cid
      let drawData = deepCloneAssign({}, chartData);
      if (drawData.series !== undefined && drawData.series.length > 0) {
        if (this.echarts === true) {
          if(cfe.option[cid].xAxis && cfe.option[cid].xAxis.type && cfe.option[cid].xAxis.type === 'category'){
            cfe.option[cid].xAxis.data = drawData.categories
          }
          if(cfe.option[cid].yAxis && cfe.option[cid].yAxis.type && cfe.option[cid].yAxis.type === 'category'){
            cfe.option[cid].yAxis.data = drawData.categories
          }
          cfe.option[cid].series = []
          for (var i = 0; i < drawData.series.length; i++) {
            cfe.option[cid].seriesTemplate = cfe.option[cid].seriesTemplate ? cfe.option[cid].seriesTemplate : {}
            let Template = deepCloneAssign({},cfe.option[cid].seriesTemplate,drawData.series[i])
            cfe.option[cid].series.push(Template)
          }
          this.mixinDatacomErrorMessage = null;
          this.init();
        }else{
          cfu.option[cid].categories = drawData.categories;
          cfu.option[cid].series = drawData.series;
          this.mixinDatacomErrorMessage = null;
          this._clearChart();
          this.init();
        }
      }
    },
    resizeHandler() {
      if (this.mixinDatacomLoading == true) {
        return;
      }
      let currTime = Date.now();
      let lastDrawTime = cfu.option[this.cid].lastDrawTime?cfu.option[this.cid].lastDrawTime:currTime-2000;
      let duration = currTime - lastDrawTime;
      if (duration < 1000) return;
      let chartdom = uni
        .createSelectorQuery()
        .in(this)
        .select('.chartsview')
        .boundingClientRect(data => {
          this.showchart = true;
          if (data.width > 0 && data.height > 0) {
            if (data.width !== this.cWidth || data.height !== this.cHeight) {
              cfu.option[this.cid].lastDrawTime = currTime;
              this.beforeInit();
            }
          } else {
            this.mixinDatacomLoading = false;
            this.showchart = false;
            this.mixinDatacomErrorMessage = '布局错误：未获取到父元素宽高尺寸';
          }
        })
        .exec();
    },
    getCloudData() {
      if (this.mixinDatacomLoading == true) {
        return;
      }
      this.mixinDatacomLoading = true;
      this.mixinDatacomGet()
        .then(res => {
          this.mixinDatacomResData = res.result.data;
          this.localdataInit(this.mixinDatacomResData);
        })
        .catch(err => {
          this.mixinDatacomLoading = false;
          this.showchart = false;
          this.mixinDatacomErrorMessage = '请求错误：' + err;
        });
    },
    onMixinDatacomPropsChange(needReset, changed) {
      if (needReset == true && this.collection !== '') {
        this.showchart = false;
        this._clearChart();
        this.getCloudData();
      }
    },
    _clearChart() {
      let cid = this.cid
      if (this.echrts !== true && cfu.option[cid] !== undefined && cfu.option[cid].canvasId && cfu.option[cid].context && cfu.option[cid].context.draw) {
        cfu.option[cid].context.clearRect(0, 0, cfu.option[cid].width, cfu.option[cid].height);
        cfu.option[cid].context.draw();
      }
    },
    init() {
      let cid = this.cid
      //为了防止uCharts改变chartData对象导致意外的更新图表
      let uchartData = deepCloneAssign({}, this.chartData);
      let chartdom = uni
        .createSelectorQuery()
        .in(this)
        .select('.chartsview')
        .boundingClientRect(data => {
          if (data.width > 0 && data.height > 0) {
            this.cWidth = data.width;
            this.cHeight = data.height;
            if(this.echarts !== true){
              cfu.option[cid].canvasId = cid;
              cfu.option[cid].background = this.background == 'none' ? '#FFFFFF' : this.background;
              cfu.option[cid].canvas2d = this.type2d;
              cfu.option[cid].pixelRatio = this.pixel;
              cfu.option[cid].animation = this.animation;
              cfu.option[cid].width = data.width * this.pixel;
              cfu.option[cid].height = data.height * this.pixel;
              cfu.option[cid].ontap = this.ontap;
              cfu.option[cid].ontouch = this.ontouch;
              cfu.option[cid].onmouse = this.onmouse;
              cfu.option[cid].onmovetip = this.onmovetip;
              cfu.option[cid].tooltipShow = this.tooltipShow;
              cfu.option[cid].tooltipFormat = this.tooltipFormat;
              cfu.option[cid].tooltipCustom = this.tooltipCustom;
            }
            //如果是H5或者App端，采用renderjs渲染图表
            if (this.inH5 || this.inApp) {
              if (this.echarts == true) {
                cfe.option[cid].ontap = this.ontap;
                cfe.option[cid].onmouse = this.onmouse;
                cfe.option[cid].tooltipShow = this.tooltipShow;
                cfe.option[cid].tooltipFormat = this.tooltipFormat;
                cfe.option[cid].tooltipCustom = this.tooltipCustom;
                this.echartsOpts = cfe.option[cid];
                this.mixinDatacomLoading = false;
                this.showchart = true;
              } else {
                this.uchartsOpts = cfu.option[cid];
                this.mixinDatacomLoading = false;
                this.showchart = true;
              }
            //如果是小程序端，采用uCharts渲染
            } else {
              cfu.option[cid] = formatterAssign(cfu.option[cid],cfu.formatter)
              this.mixinDatacomErrorMessage = null;
              this.mixinDatacomLoading = false;
              this.showchart = true;
              if (this.type2d === true) {
                const query = uni.createSelectorQuery().in(this);
                query
                  .select('#' + cid)
                  .fields({ node: true, size: true })
                  .exec(res => {
                    if (res[0]) {
                      const canvas = res[0].node;
                      const ctx = canvas.getContext('2d');
                      cfu.option[cid].context = ctx;
                      canvas.width = data.width * this.pixel;
                      canvas.height = data.height * this.pixel;
                      canvas._width = data.width * this.pixel;
                      canvas._height = data.height * this.pixel;
                      this._newChart(cid);
                    } else {
                      this.showchart = false;
                      this.mixinDatacomErrorMessage = '参数错误：未获取到dom节点，请检查是否传入canvasID';
                    }
                  });
              } else {
                this.$nextTick(() => {
                  cfu.option[cid].context = uni.createCanvasContext(cid, this);
                  this._newChart(cid);
                });
              }
            }
          } else {
            this.mixinDatacomLoading = false;
            this.showchart = false;
            if (this.reshow == true) {
              this.mixinDatacomErrorMessage = '布局错误：未获取到父元素宽高尺寸！canvas-id:' + cid;
            }
          }
        })
        .exec();
    },
    // #ifndef APP-PLUS || H5
    _newChart(cid) {
      if (this.mixinDatacomLoading == true) {
        return;
      }
      this.showchart = true;
      cfu.instance[cid] = new uChartsMp(cfu.option[cid]);
      cfu.option[cid].lastDrawTime = Date.now();
      cfu.instance[cid].addEventListener('renderComplete', () => {
        this.emitMsg({name: 'complete', params: {type:"complete", complete: true, id: cid}});
        cfu.instance[cid].delEventListener('renderComplete')
      });
      cfu.instance[cid].addEventListener('scrollLeft', () => {
        this.emitMsg({name: 'scrollLeft', params: {type:"scrollLeft", scrollLeft: true, id: cid}});
      });
      cfu.instance[cid].addEventListener('scrollRight', () => {
        this.emitMsg({name: 'scrollRight', params: {type:"scrollRight", scrollRight: true, id: cid}});
      });
    },
    _updataChart() {
      
    },
    _tooltipDefault(item, category, index, opts) {
      if (category) {
        return category + ' ' + item.name + ':' + item.data;
      } else {
        if (item.properties !== undefined) {
          return item.properties.name;
        } else {
          return item.name + ':' + item.data;
        }
      }
    },
    _showTooltip(e) {
      let cid = this.cid
      let tc = cfu.option[cid].tooltipCustom
      if (tc && tc !== undefined && tc !== null) {
        let offset = undefined;
        if (tc.x >= 0 && tc.y >= 0) {
          offset = { x: tc.x, y: tc.y + 10 };
        }
        cfu.instance[cid].showToolTip(e, {
          index: tc.index,
          offset: offset,
          textList: tc.textList,
          formatter: (item, category, index, opts) => {
            if (typeof cfu.option[cid].tooltipFormat === 'string' && cfu.formatter[cfu.option[cid].tooltipFormat]) {
              return cfu.formatter[cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this._tooltipDefault(item, category, index, opts);
            }
          }
        });
      } else {
        cfu.instance[cid].showToolTip(e, {
          formatter: (item, category, index, opts) => {
            if (typeof cfu.option[cid].tooltipFormat === 'string' && cfu.formatter[cfu.option[cid].tooltipFormat]) {
              return cfu.formatter[cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this._tooltipDefault(item, category, index, opts);
            }
          }
        });
      }
    },
    _tap(e,move) {
      let cid = this.cid
      let currentIndex = null;
      let legendIndex = null;
      if (this.inScrollView === true) {
        e.type = 'click';
      }
      if (e.type == 'click') {
        let chartdom = uni
          .createSelectorQuery()
          .in(this)
          .select('.chartsview')
          .boundingClientRect(data => {
            if (e.detail.x) {
              e.changedTouches.unshift({ x: e.detail.x - data.left, y: e.detail.y - data.top });
            }
            if(move){
              if (this.tooltipShow === true) {
                this._showTooltip(e);
              }
            }else{
              currentIndex = cfu.instance[cid].getCurrentDataIndex(e);
              legendIndex = cfu.instance[cid].getLegendDataIndex(e);
              cfu.instance[cid].touchLegend(e);
              if (this.tooltipShow === true) {
                this._showTooltip(e);
              }
              this.emitMsg({name: 'getIndex', params: { type:"getIndex", event:e.changedTouches[0], currentIndex: currentIndex, legendIndex: legendIndex, id: cid}});
            }
          })
          .exec();
      } else {
        if(move){
          if (this.tooltipShow === true) {
            this._showTooltip(e);
          }
        }else{
          if(this.type2d === true){
            e.changedTouches.unshift({ x: e.detail.x, y: e.detail.y - e.currentTarget.offsetTop });
          }
          currentIndex = cfu.instance[cid].getCurrentDataIndex(e);
          legendIndex = cfu.instance[cid].getLegendDataIndex(e);
          cfu.instance[cid].touchLegend(e);
          if (this.tooltipShow === true) {
            this._showTooltip(e);
          }
          this.emitMsg({name: 'getIndex', params: {type:"getIndex", event:e.changedTouches[0], currentIndex: currentIndex, legendIndex: legendIndex, id: cid}});
        }
      }
    },
    _touchStart(e) {
      let cid = this.cid
      lastMoveTime=Date.now();
      if(cfu.option[cid].enableScroll === true){
        cfu.instance[cid].scrollStart(e);
        this.emitMsg({name:'getTouchStart', params:{type:"touchStart", event:e.changedTouches[0], id:cid}});
      }
    },
    _touchMove(e) {
      let cid = this.cid
      let currMoveTime = Date.now();
      let duration = currMoveTime - lastMoveTime;
      if (duration < Math.floor(1000 / 60)) return;//每秒60帧
      lastMoveTime = currMoveTime;
      if(cfu.option[cid].enableScroll === true){
        cfu.instance[cid].scroll(e);
        this.emitMsg({name: 'getTouchMove', params: {type:"touchMove", event:e.changedTouches[0], id: cid}});
      }
      if(this.ontap === true && cfu.option[cid].enableScroll === false && this.onmovetip === true){
        this._tap(e,true)
      }
    },
    _touchEnd(e) {
      let cid = this.cid
      if(cfu.option[cid].enableScroll === true){
        cfu.instance[cid].scrollEnd(e);
        this.emitMsg({name:'getTouchEnd', params:{type:"touchEnd", event:e.changedTouches[0], id:cid}});
      }
      if(this.ontap === true && cfu.option[cid].enableScroll === false && this.onmovetip === true){
        this._tap(e,true)
      }
    },
    // #endif
    _error(e) {
      console.log(e);
    },
    emitMsg(msg) {
      this.$emit(msg.name, msg.params);
    }
  }
};
</script>

<!-- #ifdef APP-PLUS || H5 -->
<script module="rdcharts" lang="renderjs">
import uChartsRD from '../../js_sdk/u-charts/u-charts-v2.0.0.js';
import cfu from '../../js_sdk/u-charts/config-ucharts.js';
import cfe from '../../js_sdk/u-charts/config-echarts.js';

var that = {};
var rootdom = null;

function rdformatterAssign(args,formatter) {
  for (let key in args) {
    if(typeof args[key] === 'object'){
      rdformatterAssign(args[key],formatter)
    }else if(key === 'format' && typeof args[key] === 'string'){
      args['formatter'] = formatter[args[key]] ? formatter[args[key]] : undefined;
    }
  }
  return args;
}

export default {
  data() {
    return {
      rid:null
    }
  },
  mounted() {
    rootdom = {top:0,left:0}
  },
  destroyed(){
    delete cfu.option[this.rid]
    delete cfu.instance[this.rid]
    delete cfe.option[this.rid]
    delete cfe.instance[this.rid]
    delete that[this.rid]
  },
  methods: {
    //==============以下是ECharts的方法====================
    ecinit(newVal, oldVal, owner, instance){
      // #ifdef H5
      let dm = document.querySelectorAll('uni-main')[0]
      if(dm === undefined){
        dm = document.querySelectorAll('uni-page-wrapper')[0]
      }
      rootdom = {top:dm.offsetTop,left:dm.offsetLeft}
      // #endif
      let cid = JSON.parse(JSON.stringify(newVal.id))
      this.rid = cid
      that[cid] = this.$ownerInstance
      cfe.option[cid] = JSON.parse(JSON.stringify(newVal))
      if (typeof window.echarts === 'object') {
          this.newEChart()
      }else{
        const script = document.createElement('script')
        // #ifdef APP-PLUS
        script.src = './uni_modules/qiun-data-charts/static/app-plus/echarts.min.js'
        // #endif
        // #ifdef H5
        script.src = './uni_modules/qiun-data-charts/static/h5/echarts.min.js'
        // #endif
        script.onload = this.newEChart
        document.head.appendChild(script)
      }
    },
    ecresize(newVal, oldVal, owner, instance){
      if(cfe.instance[this.rid]){
        cfe.instance[this.rid].resize()
      }
    },
    newEChart(){
      let cid = this.rid
      if(cfe.instance[cid] === undefined){
        cfe.instance[cid] = echarts.init(that[cid].$el.children[0])
        //ontap开启后才触发click事件
        if(cfe.option[cid].ontap === true){
          cfe.instance[cid].on('click', resdata => {
            let event = JSON.parse(JSON.stringify({
              x:resdata.event.offsetX,y:resdata.event.offsetY
            }))
            that[cid].callMethod('emitMsg',{name:"getIndex", params:{type:"getIndex", event:event, currentIndex:resdata.dataIndex, value:resdata.data, seriesName: resdata.seriesName,id:cid}})
          })
        }
        this.updataEChart(cid,cfe.option[cid])
      }else{
        this.updataEChart(cid,cfe.option[cid])
      }
    },
    updataEChart(cid,option){
      if(option.tooltip){
        option.tooltip.show = option.tooltipShow?true:false;
        option.tooltip.position = this.tooltipPosition()
        //tooltipFormat方法，替换组件的tooltipFormat为config-echarts.js内对应的方法
        if (typeof option.tooltipFormat === 'string' && cfe.formatter[option.tooltipFormat]) {
          option.tooltip.formatter = option.tooltip.formatter ? option.tooltip.formatter : cfe.formatter[option.tooltipFormat]
        }
      }
      // 颜色渐变添加的方法
      if (option.series) {
      	for (let i in option.series) {
      		let linearGradient = option.series[i].linearGradient
      		if (linearGradient) {
      			option.series[i].color = new echarts.graphic.LinearGradient(linearGradient[0],linearGradient[1],linearGradient[2],linearGradient[3],linearGradient[4])
      		}
      	}
      }
      //替换option内format属性为formatter的预定义方法
      option = rdformatterAssign(option,cfe.formatter)
      cfe.instance[cid].setOption(option, option.notMerge)
    },
    tooltipPosition(){
      return (point, params, dom, rect, size) => {
      	let x = point[0]
      	let y = point[1]
      	let viewWidth = size.viewSize[0]
      	let viewHeight = size.viewSize[1]
      	let boxWidth = size.contentSize[0]
      	let boxHeight = size.contentSize[1]
      	let posX = x + 30 
      	let posY = y + 30 
      	if (posX + boxWidth > viewWidth) { 
      		posX = x - boxWidth - 30
      	}
      	if (posY + boxHeight > viewHeight) {
      		posY = y - boxHeight - 30
      	}
      	return [posX, posY]
      }
    },
    //==============以下是uCharts的方法====================
    ucinit(newVal, oldVal, owner, instance){
      // #ifdef H5
      let dm = document.querySelectorAll('uni-main')[0]
      if(dm === undefined){
        dm = document.querySelectorAll('uni-page-wrapper')[0]
      }
      rootdom = {top:dm.offsetTop,left:dm.offsetLeft}
      // #endif
      let cid = JSON.parse(JSON.stringify(newVal.canvasId))
      this.rid = cid
      that[cid] = this.$ownerInstance
      cfu.option[cid] = JSON.parse(JSON.stringify(newVal))
      cfu.option[cid] = rdformatterAssign(cfu.option[cid],cfu.formatter)
      let canvasdom = document.getElementById(cid)
      cfu.option[cid].context = canvasdom.children[0].getContext("2d")
      this.newUChart(cid)
    },
    newUChart(cid) {
      cfu.instance[cid] = new uChartsRD(cfu.option[cid])
      cfu.option[cid].lastDrawTime = Date.now();
      cfu.instance[cid].addEventListener('renderComplete', () => {
        that[cid].callMethod('emitMsg',{name:"complete",params:{type:"complete",complete:true,id:cid}})
        cfu.instance[cid].delEventListener('renderComplete')
      });
      cfu.instance[cid].addEventListener('scrollLeft', () => {
        that[cid].callMethod('emitMsg',{name:"scrollLeft",params:{type:"scrollLeft",scrollLeft:true,id:cid}})
      });
      cfu.instance[cid].addEventListener('scrollRight', () => {
        that[cid].callMethod('emitMsg',{name:"scrollRight",params:{type:"scrollRight",scrollRight:true,id:cid}})
      });
    },
    updataUChart(){

    },
    tooltipDefault(item, category, index, opts) {
      if (category) {
        return category + ' ' + item.name + ':' + item.data;
      } else {
        if (item.properties !== undefined) {
          return item.properties.name;
        } else {
          return item.name + ':' + item.data;
        }
      }
    },
    showTooltip(e,cid) {
      let tc = cfu.option[cid].tooltipCustom
      if (tc && tc !== undefined && tc !== null) {
        let offset = undefined;
        if (tc.x >= 0 && tc.y >= 0) {
          offset = { x: tc.x, y: tc.y + 10 };
        }
        cfu.instance[cid].showToolTip(e, {
          index: tc.index,
          offset: offset,
          textList: tc.textList,
          formatter: (item, category, index, opts) => {
            if (typeof cfu.option[cid].tooltipFormat === 'string' && cfu.formatter[cfu.option[cid].tooltipFormat]) {
              return cfu.formatter[cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this.tooltipDefault(item, category, index, opts);
            }
          }
        });
      } else {
        cfu.instance[cid].showToolTip(e, {
          formatter: (item, category, index, opts) => {
            if (typeof cfu.option[cid].tooltipFormat === 'string' && cfu.formatter[cfu.option[cid].tooltipFormat]) {
              return cfu.formatter[cfu.option[cid].tooltipFormat](item, category, index, opts);
            } else {
              return this.tooltipDefault(item, category, index, opts);
            }
          }
        });
      }
    },
    tap(e) {
      let cid = this.rid
      let ontap = cfu.option[cid].ontap
      let tooltipShow = cfu.option[cid].tooltipShow
      if(ontap == false) return;
      let currentIndex=null
      let legendIndex=null
      let rchartdom = document.getElementById('UC'+cid).getBoundingClientRect()
      let tmpe = {}
      if(e.detail.x){//tap或者click的事件
        tmpe = { x: e.detail.x - rchartdom.left, y:e.detail.y - rchartdom.top + rootdom.top}
      }else{//mouse的事件
        tmpe = { x: e.clientX - rchartdom.left, y:e.clientY - rchartdom.top + rootdom.top}
      }
      e.changedTouches.unshift(tmpe)
      currentIndex=cfu.instance[cid].getCurrentDataIndex(e)
      legendIndex=cfu.instance[cid].getLegendDataIndex(e)
      cfu.instance[cid].touchLegend(e)
      if(tooltipShow==true){
        this.showTooltip(e,cid)
      }
      that[cid].callMethod('emitMsg',{name:"getIndex",params:{type:"getIndex",event:tmpe,currentIndex:currentIndex,legendIndex:legendIndex,id:cid}})
    },
    touchStart(e) {
      let cid = this.rid
      let ontouch = cfu.option[cid].ontouch
      if(ontouch == false) return;
      cfu.instance[cid].scrollStart(e)
      that[cid].callMethod('emitMsg',{name:"getTouchStart",params:{type:"touchStart",event:e.changedTouches[0],id:cid}})
    },
    touchMove(e) {
      let cid = this.rid
      let ontouch = cfu.option[cid].ontouch
      if(ontouch == false) return;
      cfu.instance[cid].scroll(e)
      that[cid].callMethod('emitMsg',{name:"getTouchMove",params:{type:"touchMove",event:e.changedTouches[0],id:cid}})
      if(cfu.option[cid].ontap === true && cfu.option[cid].enableScroll === false && cfu.option[cid].onmovetip === true){
        let rchartdom = document.getElementById('UC'+cid).getBoundingClientRect()
        let tmpe = { x: e.changedTouches[0].clientX - rchartdom.left, y:e.changedTouches[0].clientY - rchartdom.top + rootdom.top}
        e.changedTouches.unshift(tmpe)
        if(cfu.option[cid].tooltipShow === true){
          this.showTooltip(e,cid)
        }
      }
    },
    touchEnd(e) {
      let cid = this.rid
      let ontouch = cfu.option[cid].ontouch
      if(ontouch == false) return;
      cfu.instance[cid].scrollEnd(e)
      that[cid].callMethod('emitMsg',{name:"getTouchEnd",params:{type:"touchEnd",event:e.changedTouches[0],id:cid}})
    },
    mouseDown(e) {
      let cid = this.rid
      let onmouse = cfu.option[cid].onmouse
      if(onmouse == false) return;
      let rchartdom = document.getElementById('UC'+cid).getBoundingClientRect()
      let tmpe = {}
      tmpe = { x: e.clientX - rchartdom.left, y:e.clientY - rchartdom.top + rootdom.top}
      e.changedTouches.unshift(tmpe)
      cfu.instance[cid].scrollStart(e)
      cfu.option[cid].mousedown=true;
      that[cid].callMethod('emitMsg',{name:"getTouchStart",params:{type:"mouseDown",event:tmpe,id:cid}})
    },
    mouseMove(e) {
      let cid = this.rid
      let onmouse = cfu.option[cid].onmouse
      let tooltipShow = cfu.option[cid].tooltipShow
      if(onmouse == false) return;
      let rchartdom = document.getElementById('UC'+cid).getBoundingClientRect()
      let tmpe = {}
      tmpe = { x: e.clientX - rchartdom.left, y:e.clientY - rchartdom.top + rootdom.top}
      e.changedTouches.unshift(tmpe)
      if(cfu.option[cid].mousedown){
        cfu.instance[cid].scroll(e)
        that[cid].callMethod('emitMsg',{name:"getTouchMove",params:{type:"mouseMove",event:tmpe,id:cid}})
      }else if(cfu.instance[cid]){
        if(tooltipShow==true){
          this.showTooltip(e,cid)
        }
      }
    },
    mouseUp(e) {
      let cid = this.rid
      let onmouse = cfu.option[cid].onmouse
      if(onmouse == false) return;
      let rchartdom = document.getElementById('UC'+cid).getBoundingClientRect()
      let tmpe = {}
      tmpe = { x: e.clientX - rchartdom.left, y:e.clientY - rchartdom.top + rootdom.top}
      e.changedTouches.unshift(tmpe)
      cfu.instance[cid].scrollEnd(e)
      cfu.option[cid].mousedown=false;
      that[cid].callMethod('emitMsg',{name:"getTouchEnd",params:{type:"mouseUp",event:tmpe,id:cid}})
    },
    error(e) {
      console.log(e)
    }
  }
}
</script>
<!-- #endif -->

<style scoped>
.chartsview {
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
</style>
