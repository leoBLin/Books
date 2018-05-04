import Vue from 'vue'
import App from './App'
import '@/style/app.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/entrance/main',
      'pages/home/main',
      'pages/message/main',
      'pages/revert/main',
      'pages/own/main',
      'pages/logs/main',
      'pages/index/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      "color": "#a9b7b7",
      "selectedColor": "black",
      "borderStyle": "black",
      "backgroundColor": "white",
      "list": [{
        "selectedIconPath": "/static/image/icon_home.jpg",
        "iconPath": "/static/image/icon_home.jpg",
        "pagePath": 'pages/home/main',
        "text": "首页"
      }, {
        "selectedIconPath": "/static/image/icon_msg.jpg",
        "iconPath": "/static/image/icon_msg.jpg",
        "pagePath": 'pages/message/main',
        "text": "消息"
      }, {
        "selectedIconPath": "/static/image/icon_revert.jpg",
        "iconPath": "/static/image/icon_revert.jpg",
        "pagePath": 'pages/revert/main',
        "text": "归还"
      }, {
        "selectedIconPath": "/static/image/icon_own.jpg",
        "iconPath": "/static/image/icon_own.jpg",
        "pagePath": 'pages/own/main',
        "text": "我的"
      }]
    },
  }
}
