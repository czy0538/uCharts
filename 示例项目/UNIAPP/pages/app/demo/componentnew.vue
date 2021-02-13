<template>
	<view class="qiun-columns">
		<view style="height: 400rpx;">
			<image src="../../../static/images/banner/banner2.png" style="width: 750rpx;height: 400rpx;"></image>
		</view>
		<view style="height: 1600rpx;">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">全新uCharts组件演示</view>
			</view>
			<scroll-view scroll-y="true" style="height: 600rpx;" @scroll="scroll">
				<!--
				I、全新uCharts组件，全端全平台支持，PC端支持mousemove事件显示tooltip，支持极简调用，如下：
				
				<u-charts class="qiun-charts"  type="column" canvasId="renshu2" :chartData="chartData"/>
				
				通过指定图表类型type及canvasId和chartData图表标准数据即可渲染图表。
				图表默认配置请修改js_sdk/u-charts/config.js对应图表类型下配置。
				注：1、更新前请自行备份config.js，以免被覆盖
				2、此方式调用组件chartData需自行按图表类型需求的数据格式拼接	。数据格式参照(http://doc.ucharts.cn/)文档=>API参数=>扩展配置项=>对应的图表类型
				
				II、支持datacom组件读取uniClinetDB，使用uniClinetDB示例如下：
				<u-charts
					class="qiun-charts"
					type="line"
					canvasId="renshu" 
					:canvas2d="false"
					:pixelRatio="1"
					background="none"
					:animation="true"
					:inScrollView="false"//如果组件在ScrollView中，需指定此属性，避免点击事件坐标不符合预期。
					:chartData="renshu_chartData"
					:opts="renshu_opts"//自定义配置，仅传与默认配置不同属性即可，绑定后会覆盖默认配置，以适应更多需求
					collection="uni-id-users"
					field="register_date"
					:where="'register_date >= ' + startdate.getTime() + ' && register_date <= ' + enddate.getTime()"
					groupby="dateToString(add(new Date(0),register_date),'%Y-%m-%d','+0800') as label,status as type"
					group-field="count(*) as value"
					@getIndex="getIndex"
					@complete="complete"
					@scrollLeft="scrollLeft"
					@scrollRight="scrollRight"
				/>
				详细demo请参考插件市场uniCloudAdmin板块的uCharts的Dashboard插件。
				以上参数为uCharts组件全部参数，除极简调用必须指定的props外，其他均为可选参数。
				服务端返回数后，组件会自动处理成uCharts的数据，返回数据规范如下：
				type：为series分组的name
				label：为对应categories的字段
				value：为series的分组data的值
				获取后ucharts组件会自动处理series数据，无需手动拼接处理
				注意事项：
				1、使用uniClinetDB数据必须传入chartData的categories
				2、如返回数据中无分组字段type，则需传入chartData的series[0].name作为默认分组的显示名称，否则图例会显示"默认分组"，如下
				chartData={categories:["a","b","c"],series:[{name:"您的分组类别",data:[]}]}
				-->
				<view class="qiun-charts" >
					<u-charts 
					class="qiun-charts" 
					type="column" 
					canvasId="renshu2" 
					:opts="opts"
					:chartData="chartData" 
					:inScrollView="true"
					@getIndex="getIndex"
					@complete="complete"
					@scrollLeft="scrollLeft"
					@scrollRight="scrollRight"
					/>
				</view>
				<view style="height: 400rpx;">
					<image src="../../../static/images/banner/banner1.png" style="width: 750rpx;height: 400rpx;"></image>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.vue';
	export default {
		data() {
			return {
				scrollTop: 0,
				//覆盖默认配置，开启滚动条
				opts:{
					enableScroll: true,
					xAxis: {
						itemCount:4,
						scrollShow:true,
						scrollAlign:'left',
					},
				},
				//模拟的后端返回数据，实际应用自行拼接
				chartData:{
					categories: ['2020-12-10', '2020-12-11', '2020-12-12', '2020-12-13', '2020-12-14', '2020-12-15', '2020-12-16', '2020-12-17', '2020-12-18'],
					series: [
						{
							name: '日新增用户量',
							data: [10, 20, 10, 30, 20, 15, 30, 40,55]
						}
					]
				}
			}
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		onLoad() {
			
		},
		onReady() {
		},
		methods: {
			//获取点击图表索引
			getIndex(e){
				console.log(e);
				//TODO something
				console.log(e.charts.opts);
				//获取到索引后，可以获取该索引相关一系列数据，其中e.charts.opts中可获取相关
				console.log(e.charts.opts.categories[e.currentIndex],e.charts.opts.series[0].data[e.currentIndex])
			},
			complete(e){
				console.log(e);
				//移除监听事件，避免其他动作时触发该事件
				e.charts.delEventListener('renderComplete')
				//TODO something
				//下面展示了渲染完成后显示自定义tooltip
				//{mp:{changedTouches:[{x: 0, y: 80}]}}其中x值无需指定，y值为tooltip显示的上边距的值
				let cindex=3;//默认显示的索引位置
				let textList=[{text:'默认显示的tooltip',color:null},{text:'类别1：某个值xxx',color:'#2fc25b'},{text:'类别2：某个值xxx',color:'#facc14'},{text:'类别3：某个值xxx',color:'#f04864'}];
				e.charts.showToolTip({mp:{changedTouches:[{x: 0, y: 80}]}}, {
					index:cindex,
					textList:textList
				});
			},
			//开启滚动条后，滚动条到最左侧触发的事件，用于动态打点
			scrollLeft(e){
				console.log(e);
			},
			//开启滚动条后，滚动条到最右侧触发的事件，用于动态打点
			scrollRight(e){
				console.log(e);
			},
			scroll(e) {
					this.scrollTop = e.detail.scrollTop
			},
		}
	}
</script>

<style>
	.qiun-charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
</style>
