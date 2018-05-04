import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
    config: {
        "navigationBarTitleText": "Hello World",
        "navigationBarBackgroundColor": "#4385f5",
        "navigationBarTextStyle": "white"
    }
}