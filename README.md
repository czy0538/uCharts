# 🎊 喜讯！《uCharts 高性能跨全端图表》荣获插件大赛一等奖。
## 感谢 DCloud 以及 MPvue 团队的鼓励和认可！感谢各位开发者的问题反馈和赞赏！uCharts 团队一定不负众望，为大家打造完美、易用、高性能的图表而奋斗！再次感谢！

## 最近1个月更新
* [x] 2019.08.05 增加`漏斗图`（体验版），图表类型`funnel`。
* [x] 2019.08.02 增加`词云图`（体验版），图表类型`word`,支持横向`normal`横纵混排`vertical`，详见demo。
* [x] 2019.08.02 修复圆弧进度图进度不正确的bug。感谢`jusn`[详见](https://gitee.com/uCharts/uCharts/issues/IZVC1?from=project-issue)。
* [x] 2019.07.27 修复雷达图在IOS下不显示区域的bug。
* [x] 2019.07.27 新增opts.extra.radar.opacity参数，雷达图区域背景颜色透明度。
* [x] 2019.07.27 新增直角坐标系图表MarkLine标记线功能，详见文档扩展配置。
* [x] 2019.07.27 优化多处基本数据重复计算，提升整体性能。
* [x] 2019.07.26 修复K线图average.show为false报错的bug。
* [x] 2019.07.26 修复支付宝小程序平台单页多次调用图表，填充边距倍增的bug。
* [x] 2019.07.26 修复饼图、圆环图、玫瑰图在dataLabel为false时，tooltip事件无法显示的bug。
* [x] 2019.07.26 增加饼图、圆环图、玫瑰图的 activeRadius 属性。
* [x] 2019.07.25 修复ToolTip在点击相对画布底部的情况下超出画布显示不完整的bug。
* [x] 2019.07.25 修复多行图例点击获取索引错误的bug。
* [x] 2019.07.25 修复更新图表数据时padding、Y轴标签、图例等其他基础数据未同步更新的bug。
* [x] 2019.07.25 调整了padding及chartData挂载到opts，为后续性能提升做准备，格式化整体代码格式。
* [x] 2019.07.23 修复X轴Y轴网格、辅助线为线段时，线段偶尔重叠的bug。
* [x] 2019.07.23 增加opts.seriesMA，数据格式同opts.series, K线图自定义折线数据列表，内容同series，仅在opts.extra.candle.average.show为false时调用此数据，（默认调用此数据）。
* [x] 2019.07.22 修改tooltip水平标签逻辑。
* [x] 2019.07.22 修复K线图X轴Y轴标签在IOS下背景框显示不完整的bug。
* [x] 2019.07.21 【重要】升级为1.8.0Beta版本，增加图例位置自定义及图例点击事件，修复直角坐标系中绘图不精确的问题，修复饼图类半径计算问题，修复一些已知bug。如需稳定版，请用码云地址[uCharts v1.7.0](https://gitee.com/uCharts/uCharts/repository/archive/v1.7.0)
* [x] 2019.07.19 增加 `opts.colors` 图表配色方案，不传则使用系统默认配置。
* [x] 2019.07.14 增加 `opts.area` 图表主区域配置，为将来多Y轴、图例位置自定义做准备。
* [x] 2019.07.14 增加 `opts.legend` 图例设置，未来将支持上下左右布局图例，目前仍为底部图例。
* [x] 2019.07.14 增加 `opts.padding` Array 默认 [10, 10, 10, 10] 画布填充边距，顺序为上右下左，同css，但必须4位 。
* [x] 2019.07.13 修改updateData方法，不仅仅限于`categories`及`series`更新，支持全部opts参数更新，支持变更图表类型，等同于new uCharts({})。
* [x] 2019.07.13 更正 `饼图、圆环图、玫瑰图` 的扩展配置`labelWidth`，之前的`lableWidth`拼写错误，更新版本后请注意替换，给您带来的不便请谅解。
* [x] 2019.07.12 增加 `opts.extra.gauge.labelFormat` 仪表盘数据标签格式化。示例：opts.extra.gauge.labelFormat:function(val){return val.toFixed(2)}。
* [x] 2019.07.12 修复温度计图表个别情况下边框留空问题。
* [x] 2019.07.09 新增 `opts.xAxis.gridEval` X轴网格线显示间隔，即假设为2时，是隔一个刻度显示间隔 |
* [x] 2019.07.09 新增 `opts.series.addPoint` 参数，混合图中是否增加折线或区域图上的标记点，仅针对 `line` , `area` 有效。
* [x] 2019.07.09 修复混合图中类型为`point`的时候，如设置 `opts.dataPointShape` 为false的情况下不显示标记点的bug。
* [x] 2019.07.09 修改 `module.exports` 方法，增加判断，兼容vue及H5方式普通引用。
* [x] 2019.07.07 修复自定义数据标签在饼图无效的bug。
* [x] 2019.07.04 新增 `opts.duration` 动画展示时长单位毫秒。

# [uCharts 官方网站](https://www.ucharts.cn)
# <https://www.ucharts.cn>

# [码云 gitee 开源地址](https://gitee.com/uCharts/uCharts)
# `小伙伴们，需要 star 哦~~~`

# [在线文档（参数在 API 章节）](http://doc.ucharts.cn)
# [在线文档（备用地址）](https://www.kancloud.cn/qiun/ucharts/content)

## QQ交流群：371774600
## 口令【`gitee`】
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/QQqrcode.png?raw=true)



## 快速体验

一套代码编到 7 个平台，依次扫描二维码，亲自体验 uCharts 图表跨平台效果！iOS 因 demo 比较简单无法上架，请自行编译。

![](https://box.kancloud.cn/58092090f2bccc6871ca54dbec268811_654x479.png)


## [更新记录](https://www.kancloud.cn/qiun/ucharts/content/%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95.md)

## 未来计划（V1.0 至 2.0 版本）
- [ ] 2019.07.xx 计划加入 `条状图`、`漏斗图`。
- [ ] 2019.07.xx 推迟计划加入 `第二种仪表盘样式`，增加[《亲手教您如何改造 uCharts，打造您的专属图表》]()教程。
- [ ] 2019.07.xx 计划加入 `渐变颜色填充` 功能，支持`柱状图、区域图、混合图、圆弧进度条`。
- [ ] 2019.07.xx 计划修复折线图样式为曲线时，个别情况下曲线超出 `X` 轴的问题。
- [ ] 2019.07.xx 计划加入 `辅助线（标记线）` 功能，支持 `柱状图、折线图、区域图、K线图、混合图`。
- [ ] 2019.07.xx 计划修复x轴文案旋转遮挡不完整并覆盖滚动条，增加XY轴线配置，增加图表起始点为X轴0点开始的配置。
- [ ] 2019.07.xx 计划加入双 `Y` 轴功能，支持 `Y` 轴双坐标系。

## 未来计划（全新 V2.0 版本）
## 2019.5.20 重要又浪漫的日期，uCharts 团队正式成立了。
## 我们将以追求极致、追求完美的极客精神来打造 uCharts。uCharts2.0 版本正在前期策划中，将以全新结构重写 uCharts，支持多 `Y` 轴、多 `X` 轴、自定义图例位置、以及更多图表类型，请各位敬请期待。

## 支持图表类型
- 饼图 `Pie`
- 圆环图 `Ring`
- 线图 `Line`（直线、曲线）
- 柱状图 `Column`（分组、堆叠、温度计）
- 区域图 `Area`（直线、曲线）
- 雷达图 `Radar`
- 圆弧进度图 `Arcbar`
- 仪表盘 `Gauge`
- K线图  `Candle`
- 混合图 `Mix`（支持 Point、Line 直线曲线、Column、Area 直线曲线）
- 玫瑰图 `Rose`（面积模式、半径模式）
- 词云图 `Word`（横向、横纵混排）
- 条状图 `Bar`（开发中）
- 漏斗图 `Funnel`（开发中）



## 插件特点
- 改造后的插件可以跨端使用，支持 H5、小程序（微信/支付宝/百度/头条/QQ/360）、APP，调用简单方便、性能及体验极佳。
- 虽然没有 Echarts 及 F2 图表功能强大，但可以实现一套业务逻辑各端通用，并解决了支付宝小程序图表显示模糊等问题。
- 支持单页面多图表，demo 中单页 10 个图表，响应速度超快。
- 支持入场动画及 `ToolTip` 动画效果。
- 独特支持 `横屏模式`。

## 为何不用 Echarts？
- 相比 Echarts 及 F2 的复杂的设置，本插件几乎等于傻瓜式的配置。
- Echarts 在跨端使用更复杂，本插件只需要简单的两个 `<canvas>` 标签轻松区别搞定，代码整洁易维护。
- Echarts 在 `iOS` 端图表显示错位，只能引用网页解决。
- 本插件打包后的体积相比 Echarts 小很多很多，所以性能更好。
- 如果您是 `uni-app` 初学者，那么强烈建议您使用 uCharts，并且目前可以跨全端通用，减少工作量，增强一致性体验。
- 图表样式均可自定义，懂 `JS` 的都可以读懂插件源码，直接修改 `u-charts.js` 源码即可。
- 本插件经过大量测试，反复论证并加以改造而成，请各位放心使用。

## uni-app 图表选型参考流程

![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/xuanxing.png?raw=true)

## 亲手教您如何改造uCharts，打造您的专属图表
- 为何要改造 uCharts?
- 并不是所有图表插件直接拿来就可以满足客户需求，如果您的 UI 设计师设计一个图表，如下图:

![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/example.gif?raw=true)

- 您会发现这个图表即使在 echarts 里也不是很好实现，那么就需要我们自己动手去实现。下面就让我们一起来完成，本文旨在抛砖引玉，希望各位朋友能够更好的应用 uCharts 来完成您的项目，如果您有更好的设计，请提交您的 PR 到 Github [uCharts跨端图表](https://github.com/16cheng/uCharts)，帮助更多朋友，感谢您的付出及贡献！

## [uCharts 跨端图表改造教程（暂未完成，请关注）]()


## 图表示例
![](https://img.kancloud.cn/0f/8e/0f8e525821ab2fe671095ece89ff6a1a_460x342.gif)
![](https://box.kancloud.cn/1d5e2c60898de86f5f33f93020ff029e_468x342.gif)
![](https://box.kancloud.cn/63e5833a7ccd8308b0f8ab59522c36c1_468x349.gif)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/mix.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/mix2.gif?raw=true)
![](https://box.kancloud.cn/2f00fcf5a8ce7a9593aea3bc14b8f150_468x411.gif)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/yibiaopan.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/arcbar.gif?raw=true)
![](https://box.kancloud.cn/af4fb86f40538d85da3e8def8669b87d_468x342.gif)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineA.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineA-scroll.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/dashLine.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/area.gif?raw=true)
![](https://box.kancloud.cn/1a7b5b2908751cbb3f135e5071e42f1b_468x345.gif)
![](https://box.kancloud.cn/a3c42919a45fbf93db028fe9a0975adc_468x345.gif)
![](https://box.kancloud.cn/fe5f988bfb017c5d46d695e4626bd656_468x345.gif)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/radar.gif?raw=true)
![](https://github.com/16cheng/uCharts/blob/master/example/uni-app/static/lineB.gif?raw=true)


## 常见问题

各位遇到问题请先参考以下问题，如果仍不能解决，请留言。

### 通用问题
 - 如果用在您的项目上图表不显示，请先运行 demo 页面，如果 demo 页面也无法显示，请查看全局样式是否定义了 `canvas` 的样式，如有请取消。
- 图表`背景颜色`问题，很多朋友设置图表背景颜色时候，只修改了 `view` 和 `canvas` 的 `css`，忘记了修改实例化参数中的 `background:'#FFFFFF'`，导致图表画板右侧有一道白条（这个是图表配置中的右边距），所以特修改了 demo 中的 `柱状图` 的背景颜色供大家参考。
- 如果遇到 `图表与预期尺寸不符合`，请检查 `canvas` 标签上的 `css` 与 `cWidth`、`cHeihgt` 设置的值是否相符，`css` 请用 `upx` 为单位，`cWidth`、`cHeihgt` 的单位为 `px`，请参考 demo 用 `uni.upx2px()` 方法转换。
- 如遇到开启拖拽，而实际 `无法拖拽` 的情况，请先检查 `canvas` 标签是否绑定的 `touch` 事件。
- 如果涉及到 `v-if` 切换显示图表组件，第二次可能会变空白，建议用 `v-show` 替代 `v-if` 切换显示图表组件。

### 头条问题
- 头条小程序目前不支持拖拽事件，后续官方支持的话，不必更换 `JS` 文件，直接可用。

### 支付宝问题
- 在高分屏模式下，如果发现图表已显示，但位置不正确，请检查上级 `view` 容器的 `样式`，为了解决高分屏 `canvas` 模糊问题，使用了css的 `transform`，所以请修改上级样式使 `canvas` 容器缩放至相应位置。
- 如果将 `canvas` 放在多级<view>组件下，遇到 `ToolTip` 不显示或点击区域不正确，请在 `touch` 事件中增加以下代码解决。

# `支付宝小程序 IDE 中不显示，但运行到真机是可以显示的，请真机测试。`