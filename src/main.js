import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


import {request} from './network/request.js'
//第一种请求方式
// request('/home/multidata', (res) =>{
//   console.log(res)
// }, (err) => {
//   console.log('err :>> ', err);
// })


// //第二种请求方式
// request({
//   urls:'/home/multidata',
//   success:function(res){
//     console.log(res)
//   },
//   failure:function(err){
//     console.log('err :>> ', err);
//   }
// })

//第三种请求方式
request('/home/multidata').then( res =>{
  console.log('res :>> ', res);
}, err => {
  console.log('err :>> ', err);
})









//直接使用axios进行请求的话 会有问题，因为这是一个全局axios，其中配置的axios.default.baseURL
// 是给全部的请求.但是服务器一般是分布式的,会有多个服务器,不同的ip地址.这样的话如果我有其他请求是不同的服务器的时候,全局axios就不能狗很好的使用了
// 
// axios({
//   url:'http://123.207.32.32:8000/home/multidata'
//   //methods:'get' 设置请求的方式
// }).then( res => {
//   console.log(res)
// })

// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     // axios默认使用的是get请求，get请求会默认将params中的数据拼接到url后面
//     // 拼接上就是这个样子，http://123.207.32.32:8000/home/data?type=pop&page=1
//     // 专门针对get请求的参数拼接
//     type:'pop',
//     page:1,
//     //timeout设定请求的时间限制,以毫秒来计算
//   }
// })

// // 并发请求
// //设置全局url axios.defaults.baseURL 也就是意味着后面的url不用再写了
// //defaults 就是设置全局配置
// // axios.all([axios(),axios()]).then( spread( (res1,res2) => {
// //   console.log(res1) //第一个请求到的数据
// //   console.log(res2) //第二个请求道的数据,spread就是分割开数组
// // }))
// // 也可以这样写 
// // axios.get()




// // 因此我们会使用axios.create({})这个方法,这样我们就可以在不同的请求中定义不同的配置了
// const instance1 = axios.create({
//   baseURL:'',
//   timeout:5000
// })
// instance1({
//   url:'home/category',
//   params:{
//     type:'xx',
//     page:1
//   }
// }).then(res => {
//   console.log(res)
// })

// const instance2 = axios.create({
//   baseURL:'',
//   timeout:5000
// })
// instance2({
//   url:''
// }).then(res => {
//   console.log('res :>> ', res);
// })