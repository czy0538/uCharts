<template>
	<view style="padding-bottom: 50px;">
		<block v-for="(item ,index) in info" :key="index">
			<uni-card :title="item.title" bgcolor='#f7f7fa' :texts="item.describe" :note="item.tips">
			</uni-card>
		</block>
		<!-- #ifdef MP-WEIXIN -->
		<ad unit-id="adunit-908b0a16e90e2a5f" ad-type="grid" grid-count="8" ad-theme="white"></ad>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniCard from '@/components/uni-ui/uni-card/uni-card.vue'
	import documents from '@/common/documents.js'
	
	export default {
		components: {
			uniCard
		},
		onLoad: function(option) {
			uni.setNavigationBarTitle({
				title: option.t
			});
			this.getData(option.s,option.id);
		},
		data() {
			return {
				info: [],
			};
		},
		onShareAppMessage(){
				//#ifdef MP-QQ
				qq.showShareMenu({showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']})
				//#endif
		},
		methods: {
			getData(s,id){
				let data=documents[s][id];
				for(let i=0;i<data.length;i++){
					let newdata=data[i].split("|");
					let temp={
						title:newdata[0],
						describe:newdata[3],
						tips:'类型:'+newdata[1]+'  备注:'+newdata[2]
					};
					this.info.push(temp)
				}
			}
		}
	}
</script>

<style>
page{background-color: #f4f5f6;}
</style>
