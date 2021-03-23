# 目录说明

```
├── components
│ └── qiun-echarts ─────────────# ECharts组件目录
│ └── qiun-data-chatrs──────────# 组件入口模块，包含uCharts及Echarts组件
│ └── qiun-loading──────────────# 加载动画组件文件目录
│ └── qiun-error────────────────# 错误提示图表组件文件目录
├── js_skd
│ └── u-charts
│ ── └──config-echarts.js ──────# ECharts默认配置文件
│ ── └──config-ucharts.js ──────# uCharts默认配置文件
│ ── └──u-charts-v2.0.0.js──────# uCharts基础库v2.0.0版本
├── static
│ └── app-plus
│ ── └── echarts.min.js────────────# Echarts基础库（条件编译目录，不会编译到其他端）
│ └── h5
│ ── └── echarts.min.js────────────# Echarts基础库（条件编译目录，不会编译到其他端）
```

注：echarts组件由`秋云`修改自`烟云零`发布的 [echarts-renderjs](https://ext.dcloud.net.cn/plugin?id=1668)