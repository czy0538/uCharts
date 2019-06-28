<template>
	<!-- TODO -->
	<!-- 1、完善组件绑定拖拽事件x -->
	<!-- 2、测试各类型组件渲染效果x -->
	<!-- 3、测试异步接口数据渲染x -->
	<!-- 4、测试更新组件数据 -->
	<view>
		<block v-for="(item, index) in arr" :key="index">
			<view class="qiun-columns" style="background-color: #FFFFFF;">
				<u-charts :canvas-id="item.id" :chartType="item.chartType" :opts="item.opts"></u-charts>
			</view>
		</block>
		<button class="qiun-button" @tap="changeData()">更新图表</button>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/component.vue';
	import {
		isJSON
	} from '@/common/checker.js';
	var _self;

	export default {
		data() {
			return {
				textarea: '',
				arr: [],
				/*arr: [{
						opts: {
							"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
							"series": [{
								"name": "成交量A",
								"data": [35, 8, 25, 37, 4, 20]
							}, {
								"name": "成交量B",
								"data": [70, 40, 65, 100, 44, 68]
							}, {
								"name": "成交量C",
								"data": [100, 80, 95, 150, 112, 132]
							}]
						},
						chartType: "column",
						id: "abc"
					},
					{
						opts: {
							"categories": ["2012", "2013", "2014", "2015", "2016", "2017"],
							"series": [{
								"name": "成交量A",
								"data": [15, 8, 25, 37, 4, 20]
							}, {
								"name": "成交量B",
								"data": [70, 40, 65, 100, 44, 68]
							}]
						},
						chartType: "line",
						id: "bcd"
					}
				]*/
			}
		},
		components: {
			uCharts
		},
		onLoad() {
			_self = this;
			this.getServerData();
		},
		methods: {
			getServerData() {
				uni.request({
					url: 'https://www.ucharts.cn/data.json',
					data: {},
					success: function(res) {
						let LineA = {
							categories: [],
							series: []
						};
						LineA.categories = res.data.data.LineA.categories;
						LineA.series = res.data.data.LineA.series;

						let Column = {
							categories: [],
							series: []
						};
						Column.categories = res.data.data.Column.categories;
						Column.series = res.data.data.Column.series;

						_self.textarea = JSON.stringify(res.data.data.ColumnB);

						let serverData = [{
							opts: LineA,
							chartType: "column",
							id: "abcc"
						}, {
							opts: Column,
							chartType: "line",
							id: "bcdd"
						}];

						_self.arr = serverData;
					},
					fail: () => {
						_self.tips = "网络错误，小程序端请检查合法域名";
					},
				});
			},
			changeData() {
				if (isJSON(_self.textarea)) {
					let newdata = JSON.parse(_self.textarea);
					_self.arr[1].chartType = 'line';
					_self.arr[1].opts = this.textarea;
				} else {
					uni.showToast({
						title: '数据格式错误',
						image: '../../../static/images/alert-warning.png'
					});
					console.log(_self.textarea);
				}
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750upx;
		height: 500upx;
		background-color: #FFFFFF;
	}

	.charts {
		width: 750upx;
		height: 500upx;
	}
</style>
