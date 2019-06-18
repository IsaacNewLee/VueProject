// main.js是整个项目的启动入口文件


// 导入npm下载的模块，使用from "模块名称"
import Vue from 'vue'
// 导入自己编写的模块，使用from "引入路径"
import App from './App.vue'

// 
new Vue({
  el: '#app',
  
  // DOM直接渲染，可以看作为appendChild()
  render: h => h(App)
})
