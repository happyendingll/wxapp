//引入框架的方法函数库
import ColorUI from '../mp-cu/main'
export const colorUI = new ColorUI({
    config: {
        theme: 'auto',
        main: 'blue',
        text: 1,
        footer: true,
        share: true,
        shareTitle: 'MP CU**（ ColorUI3.x 原生小程序版）**',
        homePath: '/pages/home/home',
        tabBar: []
    },
    data: {
        //全局data
    },
    methods: {
        //全局函数
    }
})
