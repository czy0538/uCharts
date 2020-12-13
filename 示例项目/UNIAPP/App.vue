<script>
	export default {
		onLaunch: function () {
			const updateManager = uni.getUpdateManager();
			updateManager.onCheckForUpdate(function (res) {
				if(res.hasUpdate){
					uni.showToast({
						title:'正在更新版本...'
					})
				}
			});
			updateManager.onUpdateReady(function (res) {
				uni.showModal({
					title: '更新提示',
					content: '新版本已经准备好，是否重启应用？',
					success(res) {
						if (res.confirm) {
							updateManager.applyUpdate();
						}
					}
				});
			});
			updateManager.onUpdateFailed(function (res) {
				uni.showToast({
					title:'更新版本失败！'
				})
			});
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import './common/qiun.css';
</style>
