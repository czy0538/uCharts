<template>
	<canvas v-if="canvasId" :id="canvasId" :canvasId="canvasId" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}"
	 @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @error="error">
	</canvas>
</template>

<script>
	import uCharts from './u-charts.js';

	var can = {};
	export default {
		props: {
			chartType: {
				required: true,
				type: String,
				default: 'column'
			},
			opts: {
				required: true,
				type: Object,
				default () {
					return null;
				},
			},
			canvasId: {
				type: String,
				default: 'u-canvas',
			},
			cWidth: {
				type: Number,
				default: 375,
			},
			cHeight: {
				type: Number,
				default: 250,
			},
			pixelRatio: {
				type: Number,
				default: 1,
			},
		},
		// #ifdef H5
		mounted() {
			this.init();
		},
		// #endif
		// #ifndef H5
		onLoad() {
			this.init();
		},
		// #endif
		// TODO 监听opts数据变化，做changeData
		watch() {
			opts: this.init();
		},
		methods: {
			init() {
				switch (this.chartType) {
					case 'column':
						this.initColumnChart();
						break;
					case 'line':
						this.initLineChart();
						break;
					default:
						break;
				}
			},
			initColumnChart() {
				can[this.canvasId] = new uCharts({
					$this: this,
					canvasId: this.canvasId,
					type: 'column',
					legend: true,
					fontSize: 11,
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					animation: true,
					categories: this.opts.categories,
					series: this.opts.series,
					enableScroll: true,
					xAxis: {
						disableGrid: true,
						itemCount: 4,
						scrollShow: true
					},
					yAxis: {
						//disabled:true
					},
					dataLabel: true,
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					extra: {
						column: {
							type: 'group',
						}
					}
				});
			},
			initLineChart() {
				can[this.canvasId] = new uCharts({
					$this: this,
					canvasId: this.canvasId,
					type: 'line',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: this.pixelRatio,
					categories: this.opts.categories,
					series: this.opts.series,
					animation: true,
					enableScroll: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8,
						itemCount: 4,
						scrollShow: true
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
						format: (val) => {
							return val.toFixed(0) + '元'
						}
					},
					width: this.cWidth * this.pixelRatio,
					height: this.cHeight * this.pixelRatio,
					extra: {
						line: {
							type: 'straight'
						}
					}
				});
			},
			// TODO 更新图例数据需完善
			changeData() {
				console.log(this.opts);
				let newdata = this.opts;
				can[this.canvasId].updateData({
					series: newdata.series,
					categories: newdata.categories
				});
			},
			touchStart(e) {
				can[this.canvasId].showToolTip(e, {
					format: function(item, category) {
						return category + ' ' + item.name + ':' + item.data
					}
				});
				can[this.canvasId].scrollStart(e);
			},
			touchMove(e) {
				const {
					disableTouch,
					throttleTouch,
					chart,
					lastMoveTime,
				} = this;
				can[this.canvasId].scroll(e);
			},
			touchEnd(e) {
				can[this.canvasId].scrollEnd(e);
			},
			error(e) {
				console.log(e)
			}
		},
	};
</script>

<style scoped>
	.charts {
		width: 100%;
		height: 100%;
		flex: 1;
		background-color: #FFFFFF;
	}
</style>
