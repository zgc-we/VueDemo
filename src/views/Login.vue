<template>
    <div class="loginBox">
        <div class="login">
            <a-form :form="form" id='components-form-demo-normal-login' class='login-form'>
                <a-form-item style="form_item">
                    <a-input
                        placeholder='请输入您的用户名'
                        v-decorator="[
                        'userName',
                        { rules: [{ required: true, message: '请输入您的用户名' }] }
                        ]"
                    >
                        <a-icon slot="prefix" type='user' style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input
                        v-decorator="[
                        'password',
                        { rules: [{ required: true, message: '请输入您的密码' }] }
                        ]"
                        type='password'
                        placeholder='请输入您的密码'
                    >
                        <a-icon slot="prefix" type='lock' style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox
                        v-decorator="[
                        'remember',
                        {
                            valuePropName: 'checked',
                            initialValue: true,
                        }
                        ]"
                    >
                        记住密码
                    </a-checkbox>
                    <a class='login-form-forgot' href=''>忘记密码</a>
                    <a-button 
                        type='primary' 
                        htmlType='submit' 
                        class='login-form-button subtn'
                        @click="handleSubmit" 
                    >
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </div>    
    </div>
</template>

<script>
    import { Button, Form, Input, Checkbox, message } from 'ant-design-vue';
    export default {
        data () {
            return {
                form: this.$form.createForm(this),
            }
        },
        methods: {
            handleSubmit(){
                this.form.validateFields((err, values) => {
                    if (!err) {
                        if (values['userName'] == 'admin' && values['password']=='123456'){
                            this.$router.push({ path:"/about"})
                            this.$message.success("登录成功")
                        } else {
                            this.$message.error("密码输入有误")
                        }
                    }
                })
            }
        },
        components: {

        }
    }
</script>

<style lang="less">
    .loginBox{
         padding-top: 150px;
        .login {
            width: 400px;
            height: 400px;
            padding-top: 50px;
            border: 1px solid #1890ff;
            padding-left: 50px;
            padding-right: 50px;
            border-radius: 10px;
            box-shadow: aliceblue;
            margin: 0 auto;
            background: rgba(225,225,225,0.75);
        }
        .subtn{
            width: 300px;
        }
    }
</style>
