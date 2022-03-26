<!-- 
 * qiun-data-charts 秋云高性能跨全端图表组件
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
<view class="charts" id="boxid{{cid}}">
  <view wx:if="{{mixinDatacomLoading}}">
    <!-- 自定义加载状态，请改这里 -->
    <qiun-loading loadingType="{{loadingType}}" />
  </view>
  <view wx:if="{{mixinDatacomErrorMessage && errorShow}}" bindtap="reloading">
    <!-- 自定义错误提示，请改这里 -->
    <qiun-error errorMessage="{{errorMessage}}" />
  </view> 
  <view wx:if="{{type2d == true}}">
    <view wx:if="{{ontouch == true}}" bindtap="_tap">
      <canvas
        id="{{cid}}"
        canvas-id="{{cid}}"
        style="width: {{cWidth}}px; height: {{cHeight}}px; background: {{background}}"
        type="2d"
        disable-scroll="{{disableScroll}}"
        bindtouchstart="_touchStart"
        bindtouchmove="_touchMove"
        bindtouchend="_touchEnd"
        binderror="_error"
        wx:if="{{showchart == true}}"
      />
    </view>
    <view wx:if="{{ontouch == false}}" bindtap="_tap">
      <canvas
        id="{{cid}}"
        canvas-id="{{cid}}"
        style="width: {{cWidth}}px; height: {{cHeight}}px; background: {{background}}"
        type="2d"
        disable-scroll="{{disableScroll}}"
        binderror="_error"
        wx:if="{{showchart == true}}"
      />
    </view>
  </view>
  <view wx:if="{{type2d == false}}">
    <view wx:if="{{ontouch == true}}" bindtap="_tap">
      <canvas
        id="{{cid}}"
        canvas-id="{{cid}}"
        style="width: {{cWidth}}px; height: {{cHeight}}px; background: {{background}}"
        bindtouchstart="_touchStart"
        bindtouchmove="_touchMove"
        bindtouchend="_touchEnd"
        disable-scroll="{{disableScroll}}"
        binderror="_error"
        wx:if="{{showchart == true}}"
      />
    </view>
    <view wx:if="{{ontouch == false}}" >
      <canvas
        id="{{cid}}"
        canvas-id="{{cid}}"
        style="width: {{cWidth}}px; height: {{cHeight}}px; background: {{background}}"
        disable-scroll="{{disableScroll}}"
        bindtouchstart="_tap"
        binderror="_error"
        wx:if="{{showchart == true}}"
      />
    </view>
  </view>
</view>