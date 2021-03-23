# uCharts JSSDK说明
1、如不使用uCharts组件，可直接引用u-charts.js，打包编译后会`自动压缩`，压缩后体积约为`98kb`。
2、如果100kb的体积仍需压缩，请手动删除u-charts.js内您不需要的图表类型，如k线图candle。
3、config-ucharts.js为uCharts组件的用户配置文件，升级前请`自行备份config-ucharts.js`文件，以免被强制覆盖。
3、config-echarts.js为ECharts组件的用户配置文件，升级前请`自行备份config-echarts.js`文件，以免被强制覆盖。

# v1.0转v2.0注意事项
1、opts.colors变更为opts.color
2、ring圆环图的扩展配置由extra.pie变更为extra.ring
3、混合图借用的扩展配置由extra.column变更为extra.mix.column
4、全部涉及到format的格式化属性变更为formatter
