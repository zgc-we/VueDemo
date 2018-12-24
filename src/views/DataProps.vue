<template>
    <div style="border: 1px solid #000; padding: 20px">
        数据传递props
        <ListBox :list="list" @getDatas="getDatas"/>        
        <br>
        <br>
        <div>
            子数据传递回来<br>
            {{name}}
        </div>
    </div>
</template>

<script>
import ListBox from '../components/ListBox'
export default {
    data() {
        return {
            list: [
                {name: 'zhangsan', age: 15},
                {name: 'lisi', age: 17}                
            ],
            name: '',
        }
    },
    components: {
        ListBox,
    },
    methods: {
        getDatas(e) {
            this.name = e;
        }
    }
}
</script>