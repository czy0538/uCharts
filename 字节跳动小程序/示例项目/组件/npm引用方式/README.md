## 初始化
在已创建好的小程序项目根目录下执行npm init来初始化项目

## 安装包
安装所需的包 npm i @qiun/tt-ucharts

## 构建npm
在小程序开发工具中npm 功能的面板的顶部点击 “npm 构建” 按钮即可进行 npm 构建，产物会在小程序项目下的 miniprogram_npm 目录。(实际测试构建后并未把src目录下全部文件拷贝至miniprogram_npm/@qiun/tt-ucharts目录中，示例项目为手动复制，谁能解决一下？感谢！)

## 使用组件
然后在页面的json配置文件中配置如下：
{
  "usingComponents": {
    "qiun-tt-ucharts": "ext://@qiun/tt-ucharts/index" //这里和其他小程序不一致，需要加上index
  }
}

配置好后即可在ttml文件中使用

<view class="charts">
  <qiun-tt-ucharts type="column" canvas2d="{{true}}" opts="{{opts}}" chartData="{{chartData}}" bindcomplete="complete"/>
</view>

注：示例中uCharts组件仅做演示，实际使用请用码云或者npmjs中最新版本

## 组件参数详见官网组件文档或在线演示中的代码

[https://www.ucharts.cn](https://www.ucharts.cn)