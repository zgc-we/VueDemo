<template>
    <div style="border: 1px solid #000">
        传入的子组件内数据
        <div v-for="(item,index) in list" :key="index">
            <span>传入的的名称：{{item.name}}</span>
            <br>
            <span>传入的的年龄：{{item.age}}</span>            
        </div>
        <br>
        <br>
        <a-button type="primary" @click="callBackBtn">
            点击之后数据传递到父组件
        </a-button>
    </div>
</template>

<script>
export default {
    props:['list'],
    data() {
        return {
            content: "子组件上数据传递到父组件"
        }
    },
    methods: {
        callBackBtn() {
            this.$emit("getDatas", this.content)
        }
    }
}
</script>
