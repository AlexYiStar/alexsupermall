import axios from 'axios'

// 第一种封装axios请求
// export function request(data,success,failure){
//     const instance1 = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance1({
//         url:data
//     }).then( res =>{
//         success(res)
//     }).catch(err => {
//         failure(err)
//     })
// }


// 第二种封装  调用的时候传入对象
// export function request(config){
//     const instance1 = axios.create({
//         baseURL:'http://123.207.32.32:8000',
//         timeout:5000
//     })
//     instance1({
//         url:config.urls
//     }).then( res =>{
//         config.success(res)
//     }).catch(err => {
//         config.failure(err)
//     })
// }

//第三种封装，利用promise
export function request(data){
    return new Promise( (resolve,reject) => {
        // 这里是实例化axios
        const instance1 = axios.create({
            baseURL:'http://123.207.32.32:8000',
            timeout:5000
        })
        // 这里是真正发送网络请求的地方
        instance1({
            url:data
        }).then( (res) => {
            resolve(res)
        }).catch( (err) => {
            reject(err)
        } )
    })
}

