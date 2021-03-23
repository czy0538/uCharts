# 秋云图表组件使用帮助

全新图表组件，全端全平台支持，开箱即用，可选择uCharts引擎全端渲染，也可指定PC端或APP端`单独使用ECharts`引擎渲染图表。支持极简单的调用方式，只需指定图表类型及传入符合标准的图表数据即可，使开发者只需专注业务及数据。同时也支持datacom组件读取uniClinetDB，无需关心如何拼接数据等不必要的重复工作，大大缩短开发时间。

## 为何使用官方封装的组件？

封装组件并不难，谁都会，但组件调试却是一件令人掉头发的事，尤其是canvas封装成组件会带来一系列问题：例如封装后不显示，图表多次初始化导致抖动问题，单页面多个图表点击事件错乱，组件放在scroll-view中无法点击，在图表上滑动时页面无法滚动等等一系列问题。为解决开发者使用可视化组件的困扰，uCharts官方特推出可视化通用组件，本组件具备以下特点：

- 极简单的调用方式，默认配置下只需要传入`图表类型`及`图表数据`即可全端显示。
- 提供强大的`在线配置生成工具`，可视化中的可视化，鼠标点一点就可以生成图表，可视化从此不再难配。
- 兼容ECharts，并解决了ECharts无法使用formatter的问题，可选择`PC端或APP端单独使用ECharts`引擎渲染图表。
- H5及App采用`renderjs`渲染图表，动画流畅、性能翻倍。
- 根据父容器尺寸`弹性显示图表`，再也不必为宽高匹配及多端适配问题发愁。
- 支持`加载状态loading及error展示`，避免数据读取显示空白的尴尬。
- chartData`配置与数据解耦`，即便使用ECharts引擎也不必担心拼接option的困扰。
- 小程序端不必担心包体积过大问题，ECharts引擎将不会编译到各小程序端。
- 未来将支持通过uniCloud的`DB Schema自动生成`全端全平台图表，敬请期待！！！
- uCharts官方拥有3个2000人的QQ群支持，庞大的用户量证明我们一直在努力，本组件将持续更新，请各位放心使用，本组件问题请在`QQ3群`反馈，您的宝贵建议是我们努力的动力！！

## [点击查看DEMO演示及体验在线生成工具](https://demo.ucharts.cn)

## 致开发者

感谢各位开发者`两年`来对秋云及uCharts的支持，uCharts的进步离不开各位开发者的鼓励与贡献，为更好的帮助各位开发者在uni-app生态系统更好的应用图表，uCharts始终坚持开源，并提供社群帮助开发者解决问题。 为确保您能更好的应用图表组件，建议您先`仔细阅读本页文档`以及uCharts官方文档，而不是下载下来`直接使用`。 如遇到问题请先阅读文档，如仍然不能解决，请加入QQ群咨询，如群友均不能解决或者您有特殊需求，请在群内私聊我，因工作原因，回复不一定很及时，您可直接说问题，有时间一定会回复您。

uCharts的开源图表组件的开发，付出了大量的个人时间与精力，经过两年来的考验，不会有比较明显的bug，请各位放心使用。不求您5星评价，也不求您赞赏，`只求您对开源贡献的支持态度`，所以，当您想给`1星评价`的时候，秋云真的会`含泪希望您绕路而行……`。如果您有更好的想法，可以在`码云提交Pull Requests`以帮助更多开发者完成需求，再次感谢各位对uCharts的鼓励与支持！

## 快速体验

一套代码编到7个平台，依次扫描二维码，亲自体验uCharts图表跨平台效果！IOS因demo比较简单无法上架，请自行编译。
![](https://box.kancloud.cn/58092090f2bccc6871ca54dbec268811_654x479.png)

## 快速上手
### <font color=#FF0000> 注意前提条件【版本要求：HBuilderX 3.1.0+】 </font> 
- 1、插件市场点击右侧绿色按钮【使用HBuilderX导入插件】，或者【使用HBuilderX导入示例项目】查看完整示例工程
- 2、如果通过其他方式获取本组件，请将uni_modules目录复制到您项目的根目录（注：vue-cli项目请将uni_modules目录复制到src目录，即src/uni_modules）
- 3、页面中直接按下面用法直接调用即可，无需在页面中注册组件qiun-data-charts
- 4、注意父元素class='charts-box'这个样式需要有宽高

## 基本用法

- template代码：

```
<view class='charts-box'>
	<qiun-data-charts type='column' :chartData='chartData' ⁄>
</view>
```

- 标准数据格式：

```
chartData:{
 categories:['2016','2017','2018','2019','2020','2021'],
 series:[{
  name:'类别1',
  data:[35,8,25,37,4,20]
 },{
  name:'类别2',
  data:[70,40,65,100,44,68]
 },{
  name:'类别3',
  data:[100,80,95,150,112,132]
 }]
}
```

- 示例文件地址：`强烈建议先看本页帮助，再看下面示例文件源码！`

```
/pages/ucharts/ucharts.vue（展示用uCharts全端运行的例子）

/pages/echarts/echarts.vue（展示H5和App用ECharts，小程序端用uCharts的例子）

/pages/unicloud/unicloud.vue（展示读取uniCloud数据库后直接渲染图表的例子）

/pages/other/other.vue（其他图表高级应用的例子）
```


## 进阶用法读取uniCloud数据库并渲染图表

- template代码：

```
<qiun-data-charts
	type="line"
	:chartData="demoData"
	collection="uni-id-users"
	field="register_date"
	:where="'register_date >= ' + startdate.getTime() + ' && register_date <= ' + enddate.getTime()"
	groupby="dateToString(add(new Date(0),register_date),'%Y-%m-%d','+0800') as label,status as type"
	group-field="count(*) as value"
/>
```

- 标准数据格式：

```
chartData:{
 categories:['2016','2017','2018','2019','2020','2021'],
 series:[]
}
```

- 注意，读取uniCloud数据不需要拼接series数据，但目前暂时需要自行拼接categories传入组件，后期版本会规范标准数据属性后自动拼接，届时开发者只需查询到相应数据后即可渲染图表，大大缩减开发时间与开发难度。



## 组件基本API参数

`别看配置多就头疼，常用的就最上面四个！`

|属性名|类型|默认值|必填|说明|
| -- | -- | -- | -- | -- |
|type|String|null|`是`|图表类型，如全端用uCharts，可选值为pie、ring、rose、word、funnel、map、arcbar、line、column、area、radar、gauge、candle、mix|
|chartData|Object|见说明|`是`|图表数据，常用的标准数据格式为{categories: [],series: []}，请按不同图表类型传入对应的标准数据，具体见下面【chartData数据属性】。|
|opts|Object|{}|否|uCharts图表配置参数(option)，请参考[【在线生成工具】](https://demo.ucharts.cn)传入opts。注：传入的opts会覆盖默认config-ucharts.js中的配置，以实现同类型的图表显示不同的样式。|
|eopts|Object|{}|否|ECharts图表配置参数(option)，请参考[【ECharts配置手册】](https://echarts.apache.org/zh/option.html)传入eopts。注：传入的eopts会覆盖默认config-echarts.js中的配置，以实现同类型的图表显示不同的样式。|
|loadingType|Number|2|否|加载动画样式，0为不显示加载动画，1-5为不同的样式，见下面示例。|
|errorShow|Boolean|true|否|是否在页面上显示错误提示，true为显示错误提示图片，false时会显示空白区域|
|errorMessage|String|null|否|自定义错误信息，强制显示错误图片及错误信息，当上面errorShow为true时可用。（组件会监听该属性的变化，只要有变化，就会强制显示错误信息！）。说明：1、一般用于页面网络不好或其他情况导致图表loading动画一直显示，可以传任意(不为null或者"null"或者空"")字符串强制显示错误图片及说明。2、如果组件使用了data-come属性读取uniCloud数据，组件会自动判断错误状态并展示错误图标，不必使用此功能。3、当状态从非null改变为null或者空时，会强制调用reload重新加载并渲染图表数据。|
|echartsH5|Boolean|false|否|是否在H5端使用ECharts引擎渲染图表|
|echartsApp|Boolean|false|否|是否在APP端使用ECharts引擎渲染图表|
|canvasId|String|见说明|否|默认生成32位随机字符串。如果指定canvasId，可方便后面调用指定图表实例，否则需要通过渲染完成事件获取自动生成随机的canvasId|
|canvas2d|Boolean|false|否|是否开启canvas2d模式，用于解决微信小程序层级过高问题，仅微信小程序端可用，其他端会强制关闭canvas2d模式|
|pixelRatio|Number|1|否|像素比，图表精度比例，配合canvas2d避免微信小程序图表模糊，其他端会强制为1|
|background|String|none|否|背景颜色，默认透明none，可选css的16进制color值，如#FFFFFF|
|animation|Boolean|true|否|是否开启图表动画效果|
|inScrollView|Boolean|false|否|图表组件是否在scroll-view中，如果在请传true，否则会出现点击事件坐标不准确的现象|
|reshow|Boolean|false|否|强制重新渲染属性，如果图表组件父级用v-show包裹，初始化的时候会获取不到元素的宽高值，导致渲染失败，此时需要把父元素的v-show方法复制到reshow中，组件检测到reshow值变化并且为true的时候会强制重新渲染|
|reload|Boolean|false|否|强制重新加载属性，与上面的reshow区别在于：1、reload会重新显示loading动画；2、如果组件绑定了uniCloud数据查询，通过reload会重新执行SQL语句查询，重新请求网络。而reshow则不会显示loading动画，只是应用现有的chartData数据进行重新渲染|
|disableScroll|Boolean|false|否|当在canvas中移动时，且有绑定手势事件时，禁止屏幕滚动以及下拉刷新（赋值为true时，在图表区域内无法拖动页面滚动）|
|tooltipShow|Boolean|true|否|点击或者鼠标经过图表时，是否显示tooltip提示窗，默认显示|
|tooltipFormat|String|undefined|否|自定义格式化Tooltip显示内容，详见下面【tooltipFormat格式化】|
|tooltipCustom|Object|undefined|否|如果以上系统自带的Tooltip格式化方案仍然不满足您，您可以用此属性实现更多需求，详见下面【tooltipCustom自定义】|
|startDate|Object| |否|需为标准时间格式，【暂未启用】，用于配合uniClinetDB自动生成categories使用|
|endDate|Object| |否|需为标准时间格式，【暂未启用】，用于配合uniClinetDB自动生成categories使用|
|ontap|Boolean|true|否|是否监听@tap@cilck事件，禁用后不会触发组件点击事件|
|ontouch|Boolean|false|否|是否监听@touchstart@touchmove@touchend事件（赋值为true时，非PC端在图表区域内无法拖动页面滚动）|
|onmouse|Boolean|true|否|是否监听@mousedown@mousemove@mouseup事件，禁用后鼠标经过图表上方不会显示tooltip|
|onmovetip|Boolean|false|否|是否开启跟手显示tooltip功能（建议微信小程序开启canvas2d功能，否则原生canvas组件会很卡）|

## chartData数据属性
|属性名|类型|默认值|说明|
| -- | -- | -- | -- |
|categories|Array|[]|一般为X轴的数据点显示的类别名称，如时间或者类别|
|series|Array.Object|[]|多对象数组，一般为Y轴的数据点及相关数据点的配置，具体配置参数，请参考[【在线生成工具】](https://demo.ucharts.cn)中的定义，此处不更新属性。|

## tooltipFormat格式化

tooltipFormat类型为string字符串类型，需要指定config-ucharts.js中formatter下的属性值。因各小程序及app端通过组件均不能传递function类型参数，因此请先在config-ucharts.js内定义您想格式化的数据，然后在这里传入formatter下的key值，组件会自动匹配与其对应的function。如不定义该属性，组件会调用默认的tooltip方案，标准的tooltipFormat使用姿势如下：

```
<qiun-data-charts
  type='column'
  :chartData='chartData'
  :tooltipFormat='tooltipDemo1'
⁄>
==================
config-ucharts.js
formatter:{
  tooltipDemo1:function(item, category, index, opts){return item.data+'天'}
}
```

注意，config-ucharts.js内的formatter下的function需要携带(item, category, index, opts)参数，这4个参数都是uCharts实例内传递过来的数据，具体定义如下：

|属性名|说明|
| -- | -- |
|item|组件内计算好的当前点位的series[index]数据，其属性有data(继承series[index].format属性),color,type,style,pointShape,disableLegend,name,show|
|category|当前点位的X轴categories[index]分类名称（如果图表类型没有category，其值则为undefined）|
|index|当前点位的索引值|
|opts|全部uCharts的opts配置，包含categories、series等一切你需要的都在里面，可以根据index索引值获取其他相关数据。您可以在渲染完成后打印一下opts，看看里面都有什么，也可以自定义一些你需要的挂载到opts上，这样就可以根据需求更方便的显示自定义内容了。|

## tooltipCustom自定义

上面仅仅展示了Tooltip的自定义格式化，如果仍然仍然还不能还不能满足您的需求，只能看这里的方法了。tooltipCustom可以自定义在任何位置显示任何内容的文本，当然tooltipCustom可以和tooltipFormat格式化同时使用以达到更多不同的需求，下面展示了tooltip固定位置显示的方法：

```
<qiun-data-charts 
	type="column" 
	:chartData="chartData" 
	:tooltipCustom="{x:10,y:10}"
/>
```

tooltipCustom属性如下：

|属性名|类型|默认值|说明|
| -- | -- | -- | -- |
|x|Number|undefined|tooltip左上角相对于画布的X坐标|
|y|Number|undefined|tooltip左上角相对于画布的Y坐标|
|index|Number|undefined|相对于series或者categories中的索引值。当没有定义index或者index定义为undefined的时候，组件会自动获取当前点击的索引，并根据上面的xy位置绘制tooltip提示框。如果为0及以上的数字时，会根据您传的索引自动计算x轴方向的偏移量（仅直角坐标系有效）|
|textList|Array.Object|undefined|多对象数组，tooltip的文字组。当没有定义textList或者textList定义为undefined的时候，会调自动获取点击索引并拼接相应的textList。如传递[{text:'默认显示的tooltip',color:null},{text:'类别1：某个值xxx',color:'#2fc25b'},{text:'类别2：某个值xxx',color:'#facc14'},{text:'类别3：某个值xxx',color:'#f04864'}]这样定义好的数组，则会只显示该数组。|
|textList[i].text|String||显示的文字|
|textList[i].color|Color||左侧图表颜色|

## datacome属性及说明

- 通过配置datacome属性，可直接获取uniCloud云数据，并快速自动生成图表，使开发者只需专注业务及数据，无需关心如何拼接数据等不必要的重复工作，大大缩短开发时间。datacome属性及说明，详见[datacom组件规范](https://uniapp.dcloud.io/component/datacom?id=mixindatacom)

|属性名|类型|默认值|说明|
| -- | -- | -- | -- |
|collection|String||表名。支持输入多个表名，用 , 分割|
|field|String||查询字段，多个字段用 , 分割|
|where|String||查询条件，内容较多，另见jql文档：[详情](https://uniapp.dcloud.net.cn/uniCloud/uni-clientDB?id=jsquery)|
|orderby|String||排序字段及正序倒叙设置|
|groupby|String||对数据进行分组|
|group-field|String||对数据进行分组统计|
|distinct|Boolean|false|是否对数据查询结果中重复的记录进行去重|
|action|string||云端执行数据库查询的前或后，触发某个action函数操作，进行预处理或后处理，详情。场景：前端无权操作的数据，比如阅读数+1|
|page-data|string|add|分页策略选择。值为 add 代表下一页的数据追加到之前的数据中，常用于滚动到底加载下一页；值为 replace 时则替换当前data数据，常用于PC式交互，列表底部有页码分页按钮|
|page-current|Number|0|当前页|
|page-size|Number|0|每页数据数量|
|getcount|Boolean|false|是否查询总数据条数，默认 false，需要分页模式时指定为 true|
|getone|Boolean|false|指定查询结果是否仅返回数组第一条数据，默认 false。在false情况下返回的是数组，即便只有一条结果，也需要[0]的方式获取。在值为 true 时，直接返回结果数据，少一层数组。一般用于非列表页，比如详情页|
|gettree|Boolean|false|是否查询树状数据，默认 false|
|startwith|String|''|gettree的第一层级条件，此初始条件可以省略，不传startWith时默认从最顶级开始查询|
|limitlevel|Number|10|gettree查询返回的树的最大层级。超过设定层级的节点不会返回。默认10级，最大15，最小1|

## 组件事件及方法

`全部监听事件都会返回uCharts的图表实例，通过e.charts可以直接调用图表方法，也可以直接调用uCharts的全部数据。`

|事件名|说明|
| --| --|
|@complete|图表渲染完成事件，渲染完成会返回图表实例{complete: true, charts: uCharts}`***强烈注意，调用此方法后，需要移除监听事件，避免其他动作时触发该事件***`移除监听事件方法：e.charts.delEventListener('renderComplete')|
|@getIndex|获取点击数据索引，点击后返回图表索引currentIndex，图例索引legendIndex，图表实例等信息。返回数据：{event: {…}, currentIndex: 3, legendIndex: -1, charts: uCharts}|
|@getTouchStart|拖动开始监听事件。返回数据：{event: {…},charts:uCharts}|
|@getTouchMove|拖动中监听事件。返回数据：{event: {…},charts:uCharts}|
|@getTouchEnd|拖动结束监听事件。返回数据：{event: {…},charts:uCharts}|
|@getTouchCancel|手指触摸动作被打断事件，如来电提醒，弹窗。返回数据：{event: {…},charts:uCharts}|
|@getLongTap|手指长按500ms之后触发，触发了长按事件后进行移动不会触发屏幕的滚动。返回数据：{event: {…},charts:uCharts}|
|@scrollLeft|开启滚动条后，滚动条到最左侧触发的事件，用于动态打点，需要自行编写防抖方法。返回数据：{scrollLeft:true,charts:uCharts}|
|@scrollRight|开启滚动条后，滚动条到最右侧触发的事件，用于动态打点，需要自行编写防抖方法。返回数据：{scrollRight:true,charts:uCharts}|

## 组件内未包含的uCharts方法
|事件名|说明|
| --| --|
|zoom(val)|开启滚动条后，单屏幕视图内缩放数据密度的方法。此方法同改变opts.xAxis.itemCount的效果一样，可以动态改变组件绑定的opts来实现数据密度缩放，也可以通过@complete或者其他方法获取到uCharts实例后，通过e.charts.zoom(val)来实现图表x轴数据密度的动态缩放。|


## uni_modules目录说明

```
├── components
│ └── qiun-data-chatrs──────────# 组件主入口模块
│ └── qiun-error────────────────# 加载动画组件文件目录
│ └── qiun-loading──────────────# 加载动画组件文件目录
├── js_skd
│ └── u-charts
│ ── └──config-echarts.js ──────# ECharts默认配置文件
│ ── └──config-ucharts.js ──────# uCharts默认配置文件
│ ── └──u-charts-v2.0.0.js──────# uCharts基础库v2.0.0版本，部分API与之前版本不同
├── static
│ └── app-plus──────────────────# 条件编译目录，仅编译到APP端
│ ── └──echarts.min.js──────────# Echarts基础库
│ └── h5────────────────────────# 条件编译目录，仅编译到H5端
│ ── └──echarts.min.js──────────# Echarts基础库
```


## 加载动画及错误提示
- 为保证编译后的包体积，加载动画引用作者wkiwi提供的[w-loading](https://ext.dcloud.net.cn/plugin?id=504)中选取5种，如需其他样式请看下面说明。
- loading的展示逻辑：
	* 1、如果是uniCloud数据，从发送网络请求到返回数据期间展示。
	* 2、如果是自行传入的chartData，当chartData.series=[]空数组的时候展示loading，也就是说初始化图表的时候，如果您没有数据，可以通过先传个空数组来展示loading效果，当chartData.series有数据后会自动隐藏loading图标。
- <font color=#FF0000>如您修改了qiun-data-charts.vue组件文件，请务必在升级前备份您的文件，以免被覆盖！！！建议将加载状态显示做成组件，避免下次升级时丢失后无法找到。</font>


## 配置文件说明

- ECharts默认配置文件：config-echarts.js

	i、`如您修改了默认配置文件，请务必在升级前备份您的配置文件，以免被覆盖！！！`
	
	ii、ECharts配置手册：[https://echarts.apache.org/zh/option.html](https://echarts.apache.org/zh/option.html)
	
	iii、"type"及"categories"属性为支持的图表属性，您可参照ECharts配置手册，配置您更多的图表类型，并将对应的图表配置添加至下面
	
	iv、"formatter"属性因各小程序及app端通过组件均不能传递function类型参数，因此请先在此属性下定义您想格式化的数据，组件会自动匹配与其对应的function

	v、ECharts配置仅可用于H5或者APP端，并且配置`echartsH5`或`echartsApp`为`true`时可用

- uCharts默认配置文件：config-ucharts.js

	i、`如您修改了默认配置文件，请务必在升级前备份您的配置文件，以免被覆盖！！！`
	
	ii、v2版本后的uCharts基础库不提供配置手册，您可以使用在线配置生成工具来快速生成配置：[http://demo.ucharts.cn](http://demo.ucharts.cn)
	
	iii、"type"及"categories"属性为支持的图表属性，不支持添加uCharts基础库没有的图表类型
	
	iv、"formatter"属性因各小程序及app端通过组件均不能传递function类型参数，因此请先在此属性下定义您想格式化的数据，组件会自动匹配与其对应的function
	
	v、uCharts配置可跨全端使用

## 如何运行图表组件示例Demo

- `***因本示例涉及到使用uniCloud数据，并有uni-id-users统计，请先查看以下说明运行示例：`
- `***注意：并不是所有项目均需要uniCloud admin环境，只是示例demo的环境需要依赖！！！`
- 前提条件

	i、确保电脑上已经有uniCloud admin项目，如果还没有，在这里下载一个：https://ext.dcloud.net.cn/plugin?id=3268
	
	ii、关联uniCloud admin项目到服务空间。如果是第一次用，要在HBuilderX的uniCloud初始化向导里做初始化，把云函数上传到服务空间，通过db_init.json进行数据库初始化

- 本插件安装

	i、将本插件导入到已存在的uniCloud admin项目
	
	ii、示例项目引用了栅格组件，请再导入该插件：https://ext.dcloud.net.cn/plugin?id=3958
	
	iii、在项目根目录的pages.json中注册demo页面

```
{
 "path": "uni_modules/qiun-data-charts/pages/chartsdemo/chartsdemo",
 "style":{"navigationBarTitleText":"图表示例"}
},
```

- 运行uniCloud admin项目

	i、如果是第一次运行需要根据登录界面的提示注册一个管理员账户
	
	ii、在运行后的uniCloud admin的左侧找到菜单管理，添加图表示例菜单，路径分别配为/uni_modules/qiun-data-charts/pages/chartsdemo/chartsdemo，然后刷新页面，左侧的菜单就会出现图表示例

```
标识*：chartsdemo
名称*：图表示例
图标：uni-icons-map-filled
URL：/uni_modules/qiun-data-charts/pages/chartsdemo/chartsdemo
序号：100
父菜单标识：留空，不填写
```

## 图表应用=>读取uniClinetDB示例说明
- 本示例基于uniCloud的[clientDB](https://uniapp.dcloud.net.cn/uniCloud/clientdb)技术，无需云函数，在前端对数据库进行group和count，进行按天的计数统计。
- 统计的数据表为[uni-id-users](https://gitee.com/dcloud/opendb/blob/master/collection/uni-id-users/collection.json)。在uniCloud后台新建数据表时可选择该表的模板
- 需要确保前端页面有访问uni-id-users表的权限
	* 或者在[uniCloud admin](https://ext.dcloud.net.cn/plugin?id=3268)中使用管理员登录后再查看【图表应用】页面报表
	* 或者测试期间也可以在uni-id-users表的表结构schema中在根节点配置`"permission": {"read": true}`，表示该表为前端可读
- 注册几个用户，确保图表可以统计到数字。可在[uniCloud admin](https://ext.dcloud.net.cn/plugin?id=3268)中注册，也可以在[云端一体登录模板](https://ext.dcloud.net.cn/plugin?id=13)中注册。
- 默认统计7天内的每日注册用户量，时间范围可在代码中修改，修改data中的startdate、enddate即可


## 常见问题及注意事项

- `图表无法显示问题`：
	* 请先检查您的HBuilderX版本，要求高于3.1.0+。
	* 其次请检查组件绑定的CSS样式，是否没有正确的宽高，组件内图表会自适应父级结构的尺寸。
	* 最后检查父级是否使用了v-show来控制显示，建议将v-show改成v-if来控制父层级逻辑。因为页面初始化时组件处于隐藏状态，组件则无法正确获取宽高尺寸。如果不能改成v-if来控制，此时需要组件内绑定reshow属性（逻辑应与父级的v-show的逻辑相同），强制重新渲染图表，例如:reshow="父级v-show绑定的事件"。
- `图表抖动问题`：如果开启了animation动画效果，由于组件内开启了chartData和opts的监听，当数据变化时会重新渲染图表，建议整体改变chartData及opts的属性值，而不要通过循环或遍历来改变this实例下的chartData及opts，例如先定义一个临时变量，拼接好数据后再整体赋值。
- `Loading状态问题`：如不使用uniClinetDB获取数据源，并且需要展示Loading状态，请先清空series，使组件变更为Loading状态，即this.chartData.series=[]即可展示，然后再从服务端获取数据，拼接完成后再传入this.chartData。如果不需要展示Loading状态，则不需要以上步骤，获取到数据，拼接好标准格式后，直接赋值即可。
- `微信小程序图表层级过高问题`：因canvas在微信小程序是原生组件，如果使用自定义tabbar或者自定义导航栏，图表则会超出预期，此时需要给组件的canvas2d传值true来使用type='2d'的功能，开启此模式后，开发者工具显示不正常，图表层级会变高，而正常预览或者发布上线则是正常状态，开发者不必担心，一切以真机预览为准（因微信开发者工具显示不正确，canvas2d这种模式下给调试带来了困难，开发时，可以先用:canvas2d="false"来调试，调试无误后再改成true）。
- `在图表上滑动无法使页面滚动问题`：此问题是因为监听了touchstart、touchmove和touchend三个事件，或者您开启了disableScroll属性，如果您的图表不需要开启图表内的滚动条功能，请禁用这三个方法的监听，即:ontouch="false"或者:disableScroll="false"即可（此时图表组件默认通过@tap事件来监听点击，可正常显示Tooltip提示窗）。
- `开启滚动条无法拖动图表问题`：此问题正与以上问题相反，是因为禁用了监听touchstart、touchmove和touchend三个事件，请启用这三个方法的监听，即:ontouch="true"即可。
- `地图变形问题`：此问题是因为您引用的geojson地图数据的坐标系可能是地球坐标(WGS84)导致，您需要额外自行处理成火星坐标或者百度坐标，常用工具为coordtransform.js，电梯直达[https://github.com/wandergis/coordtransform](https://github.com/wandergis/coordtransform)

## QQ群号码

- 放在下面是为了让您先看文档，看好群分类，再进群！！
- 交流群1：371774600（已满）
- 交流群2：619841586（不回答本组件问题，只回答uCharts基础库问题）
- 交流群3：955340127<font color=#FF0000>（优先解答本组件问题，其他问题群友互助）</font>
- 口令`uniapp`

## 相关链接
- DCloud插件市场地址
- [uCharts官网](https://www.ucharts.cn)
- [uCharts在线生成工具](http://demo.ucharts.cn)<font color=#FF0000>（注：v2.0版本后将不提供配置手册，请通过在线生成工具生成图表配置）</font>
- [uCharts码云开源托管地址](https://gitee.com/uCharts/uCharts) [![star](https://gitee.com/uCharts/uCharts/badge/star.svg?theme=gvp)](https://gitee.com/uCharts/uCharts/stargazers)
- [uCharts基础库更新记录](https://gitee.com/uCharts/uCharts/wikis/%E6%9B%B4%E6%96%B0%E8%AE%B0%E5%BD%95?sort_id=1535998)
- [uCharts改造教程](https://gitee.com/uCharts/uCharts/wikis/%E6%94%B9%E9%80%A0uCharts%E6%89%93%E9%80%A0%E4%B8%93%E5%B1%9E%E5%9B%BE%E8%A1%A8?sort_id=1535997)
- [ECharts官网](https://echarts.apache.org/zh/index.html)
- [ECharts配置手册](https://echarts.apache.org/zh/option.html)
- [`wkiwi`提供的w-loading组件地址](https://ext.dcloud.net.cn/plugin?id=504)