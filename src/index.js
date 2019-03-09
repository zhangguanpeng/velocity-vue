import VelocityComponent from './velocity-component'

const velocityPlugin = {

    install(Vue, options) {
        Vue.component('VelocityComponent', VelocityComponent)
    }
}

// 如果是通过script标签直接引入的情况下需要自动进行注册
if(typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(velocityPlugin);
}

export default velocityPlugin;