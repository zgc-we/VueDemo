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
        <hr>
        mobx数据
        <hr>
        <div v-for="(k,i) in list2" :key="i">
                        
            <span>{{k.name}}</span>
            <br>
            <span>{{k.age}}</span>
        </div>        
    </div>
</template>

<script>
import ListBox from '../components/ListBox'
import { mapState } from 'vuex'
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
    computed: mapState({
        list2: state => state.DataProps.list,
    }),
    methods: {
        getDatas(e) {
            this.name = e;
        }
    }
}
</script>