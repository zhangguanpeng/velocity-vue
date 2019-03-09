<template>
    <div class="velocity-component" v-show="visible" @click="click">
        <slot></slot>
    </div>
</template>

<script>
    import Velocity from './lib/velocity-animate-shim'
    export default {
        name: 'VelocityComponent',
        props: {
            visible: {
                type: Boolean,
                default: true
            },
            animationType: {
                type: String,
                default: 'transition.slideUpIn'
            },
            animation: {
                type: Object,
                defult: null
            }
        },
        created() {},
        mounted() {
            this.runAnimation();
        },
        updated() {
            this.runAnimation();
        },
        methods: {
            runAnimation(config) {
                config = config || {};
                if(this.animation == null) {
                    return
                }
                if(this.visible) {
                    Velocity(this.$el, this.animationType, this.animation); 
                }
               
            },
            click() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .velocity-component {
        display: none;
    }
</style>