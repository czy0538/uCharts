/*
 * uCharts组件 默认配置文件，如有修改，更新前请备份此文件！！
 * Copyright (c) 2021 QIUN秋云 https://www.ucharts.cn All rights reserved.
 * Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
 * 
 * uCharts官方网站
 * https://www.uCharts.cn
 * 
 * 开源地址:
 * https://gitee.com/uCharts/uCharts
 * 
 * uni-app插件市场地址：
 * http://ext.dcloud.net.cn/plugin?id=271
 * 
 */
module.exports = {
	"type":["pie","ring","rose","word","funnel","map","arcbar","line","column","area","radar","gauge","candle","mix","point","bubble"],
	"categories":["line","column","area","radar","gauge","candle","mix","point","bubble"],
	//以上数据请勿改动，下面是自定义默认配置，请添加项目所需的个性配置
	"line":{
		type: 'line',
		padding:[15,30,0,15],
		legend:{
			show:true,
			padding:5,
			lineHeight:11,
			margin:0,
		},
		dataLabel: false,
		dataPointShape:true,
		xAxis: {
			disableGrid: true,
			labelCount: 4
		},
		yAxis: {
			gridType: 'dash',
			gridColor: '#CCCCCC',
			dashLength: 8,
			splitNumber: 4,
			format: val => {
				return val.toFixed(1);
			}
		},
		extra: {
			line:{
				type: 'straight'
			}
		}
	},
	"pie":{
		
	},
	"ring":{
		
	},
	"rose":{
		
	},
	"word":{
		
	},
	"funnel":{
		
	},
	"map":{
		
	},
	"arcbar":{
		
	},
	"column":{
		
	},
	"area":{
		
	},
	"radar":{
		
	},
	"gauge":{
		
	},
	"candle":{
		
	},
	"mix":{
		
	},
	"point":{
		
	},
	"bubble":{
		
	}
}