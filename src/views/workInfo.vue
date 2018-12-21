<template>
    <div>
        这是工单信息页面, 主要使用vuex的用法，使用vuex方法添加删除库。
        <br/>
        {{count}}
        <br/>
        <a-button type="primary" @click="handleAdd">加 1</a-button>&nbsp;&nbsp;
        <a-button type="primary" @click="subtraction">减 1</a-button>        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: mapState({
        count: state => state.workInfo.count,
    }),
    methods: {
        handleAdd() {
            this.$store.dispatch({
                type: 'increment'
            })
        },
        subtraction() {
            this.$store.dispatch({
                type: 'subtraction'
            })
        }
    }
}
</script>