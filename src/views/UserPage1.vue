<template>
    <div>
        <div style="width: 350px;">
            <a-input-search 
                placeholder="搜索地址" 
                @search="onSearch" 
                enterButton="搜索" 
                size="large" 
            />
        </div>
        <div class="amap-wrapper">
            <el-amap 
            vid="amapDemo" 
            :center="center" 
            :zoom="zoom"
            class="amap-demo">
                <el-amap-marker 
                    vid="marker" 
                    :position="center" 
                    :label="label"
                >
                </el-amap-marker>
            </el-amap>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                label:{
                    content:'钦汇园',
                    offset:[10,12]
                },
                zoom: 16,
                center: [116.397428, 39.90923]
            }
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
        }
    }
</script>

<style lang="less">
    .amap-wrapper{
        width: 1200px;
        height: 500px;
    }
</style>

