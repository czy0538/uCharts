<template>
	<view>
		<block v-for="(item ,index) in info" :key="index">
			<uni-card :title="item.title" :thumbnail="'/static/images/charts/'+item.images" bgcolor='#f7f7fa' :images="item.demo" :texts="item.texts" :note="'Tips:'+item.tips" @click="clickCard(item.url)">
			</uni-card>
		</block>
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue'
	var interstitialAd = null;
	export default {
		data() {
			return {
				info: [
					{
					  title: '全新uCharts组件调用',
						texts:'本示例为演示使用uChart的组件极简调用，支持跨全端、支持PC、支持mousemove操作，无需传入宽高等信息，只需一个图表类型及图表数据即可。',
						images:'rect.png',
						url:'demo/componentnew',
						demo:null,
						tips:'点击查看示例'
					},
					{
					  title: 'canvas2d同层渲染示例',
						texts:'本示例为演示使用uChart的canvas2d同层渲染示例。',
						images:'bubble.png',
						url:'demo/canvas2d',
						demo:null,
						tips:'点击查看示例'
					},{
					  title: '渲染层级问题示例',
						texts:'本示例为演示使用uChart的渲染层级问题。',
						images:'gauge.png',
						url:'demo/cengji',
						demo:null,
						tips:'点击查看示例'
					},{
				  title: 'scroll-view中使用',
					texts:'本示例为演示在scroll-view中使用uChart的用法。',
					images:'column2.png',
					url:'demo/scroll',
					demo:null,
					tips:'点击查看示例'
				},{
				  title: '(v-for)组件内使用示例',
					texts:'通过v-for生成组件的示例，支持不固定的图表类型，支持拖拽，支持动态更新组件图表。',
					images:'rect.png',
					url:'demo/component',
					tips:'点击查看示例'
				},{
				    title: 'K线图与柱状图联动',
					images:'candle.png',
					url:'demo/candle',
					demo:'/static/images/demo/demo3.png',
					tips:'更新中'
				},{
				    title: '单页多图表好性能',
					images:'mix2.png',
					url:'demo/index',
					demo:'/static/images/demo/demo2.png',
					tips:'点击查看示例'
				},
				
				/*
				, {
				    title: '自定义图表背景颜色',
					images:'line.png',
					url:'demo/bgcolor',
					demo:null,
					tips:'更新中'
				},{
				    title: 'tab加swpier中引用多图表',
					images:'bar-contrast.png',
					url:'demo/swpier',
					demo:null,
					tips:'更新中'
				},
				*/
			   ],
			};
		},
		components: {
			uniCard
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		onLoad() {
			if (wx.createInterstitialAd) {
			  interstitialAd = wx.createInterstitialAd({
			    adUnitId: 'adunit-035d0c6533e6f944'
			  })
			  interstitialAd.onLoad(() => {})
			  interstitialAd.onError((err) => {})
			  interstitialAd.onClose(() => {})
			}
		},
		onShow() {
			if (interstitialAd) {
			  interstitialAd.show().catch((err) => {
			    console.error(err)
			  })
			}
		},
		methods: {
			clickCard(url) {
				uni.navigateTo({
					url: url
				});
			}
		}
	}
</script>

<style>
page{background-color: #f4f5f6;}
</style>
