<template>
    <div>
        基本练习
        <hr/>
        <h1>v-if/v-else/v-else-if</h1>
        <a-select defaultValue="A" style="width: 200px" @change="handleChange">
            <a-select-option value="A">如果是A</a-select-option>
            <a-select-option value="B">如果是B</a-select-option>
            <a-select-option value="C">如果是C</a-select-option>
        </a-select>
        <br/>
        <a-row v-if="type == 'A'" style="background:#03ccdd">
            <a-col :span="6">
              展示结果A  
            </a-col>
        </a-row>
        <a-row v-else-if="type == 'B'" style="background:#f90">
            <a-col :span="6">
              展示结果B  
            </a-col>
        </a-row>
        <a-row v-else style="background:#fff">
            <a-col :span="6" >
              其他展示结果为C  
            </a-col>
        </a-row>
        <hr/>
        <h1>v-show</h1>
        <a-select defaultValue="A" style="width: 200px" @change="handShow">
            <a-select-option value="A">显示</a-select-option>
            <a-select-option value="B">隐藏</a-select-option>
        </a-select>
        <a-row>
            <a-col v-show="showType== 'A'">
                显示当前项，隐藏不显示当前项，但是页面也是 渲染只是不展示。和if的区别
            </a-col>
            <a-col></a-col>
        </a-row>
        <hr/>
        <h1>v-for</h1>
        <a-row>
            <a-col :span="5">
                <a-input placeholder="Basic usage" @change="inputChange"/>
            </a-col>
            <a-col :span="3" :offset="1">
                <a-button type="primary" @click="handleSubmit">提交</a-button>
            </a-col>
        </a-row>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            type: 'A',
            showType: "A",
            inputValue: ''
        }
    },
    methods: {
        handleChange(e) {
            this.type=e
        },
        handShow(e) {
            this.showType=e;
        },
        inputChange(e) {
            this.inputValue = e.target.value;
        },
        handleSubmit() {

        }
    }
}
</script>

<style lang="less" scoped>
.backG {
    background: red;
}
</style>
