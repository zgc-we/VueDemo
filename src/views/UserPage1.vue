<template>
    <div>
        <div style="width: 350px; margin-bottom: 10px;">
            <a-input-search 
                placeholder="搜索商品" 
                @search="onSearch" 
                enterButton="搜索" 
                size="large" 
            />
        </div>
        <section class="card_box">
            <article class="card">
                <ul>
                    <li v-for="(k,i) in pro_list" :key="i">
                        <img :src="k.src" alt=""/>
                        <header>{{k.name}}</header>
                        <div>{{k.content}}</div>
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import axios from 'axios';
export default {
    data() {
        return {
            
        }
    },
    created: function() {
        // this.$http.get() // 方式请求接口
        // console.log(this.$store.state, '---1111---');
        // console.log(JSON.stringify(axios), '----http---')
        console.log(this, '---this---')
    },
    methods: {
         onSearch (value) {
            this.$http.get(`https://restapi.amap.com/v3/assistant/inputtips?key=a2f22d847417c04d57c374bfd2789337&keywords=${value}`
            ).then(data => {
                console.log(data, '-----data----')
            }).catch(err => {
                console.log(err);
            }) 
        },
    },
    computed:  mapState({
        pro_list: state => state.shopList.list,
    })
}
</script>

<style lang="less">
    .card_box{
        .card>ul{
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            &>li{
                width: 300px;
                text-align: center;
            }
        }
    }
</style>

