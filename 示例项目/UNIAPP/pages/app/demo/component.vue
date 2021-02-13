<template>
	<view>
		<!-- #ifdef MP-WEIXIN -->
			<ad unit-id="adunit-908b0a16e90e2a5f" ad-type="grid" grid-count="8" ad-theme="white"></ad>
			<!-- #endif -->
		<block v-for="(item, index) in arr" :key="index">
			<view class="qiun-columns" style="background-color: #FFFFFF;">
				<u-charts :canvas-id="item.id" :chartType="item.chartType" :cWidth="cWidth" :cHeight="cHeight" :opts="item.opts" :ref="item.id"/>
			</view>
		</block>
		<button class="qiun-button" @tap="changeData()">更新图表</button>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts-old.vue';
	import {
		isJSON
	} from '@/common/checker.js';
	var _self;

	export default {
		data() {
			return {
				textarea: '',
				cWidth:'',
				cHeight:'',
				arr: []
			}
		},
		components: {
			uCharts
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
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
						Column.categories = res.data.data.ColumnB.categories;
						Column.series = res.data.data.ColumnB.series;

						_self.textarea = JSON.stringify(res.data.data.LineA);

						let serverData = [{
							opts: LineA,
							chartType: "line",
							id: "abcc"
						}, {
							opts: Column,
							chartType: "column",
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
				//这里newdata仅做为演示，实际请先获取后台数据，再调用子组件changeData事件
				let newdata = JSON.parse(_self.textarea);
				//'bcdd'为之前后台获取的第二个图表的id，不是固定不变的
				this.$refs.bcdd[0].changeData('bcdd',newdata)
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
