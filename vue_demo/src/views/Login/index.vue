<template>
    <div class='wrap'>
        <div class="header">
            <p><span class='iconfont icon-cuo'></span></p>
            <h1>欢迎来到星享俱乐部</h1>
        </div>
        <div class="form">
            <label class='user'>
                <input type="text" v-model="phone_value" placeholder="手机号码">
            </label>
            <label class='test'>
                <input type="text" v-model="pwd_value" placeholder="验证码">
                <span>获取验证码</span>
            </label>
            <button @click="Login">登陆或注册</button>
            <p><a href="#">使用账号密码登陆</a></p>
        </div>
        <div class="other_ways">
            <p>使用以下方式进行注册或登陆</p>
            <span class='iconfont icon-zhifubao1'></span>
            <span class='iconfont icon-taobao21'></span>
        </div>
    </div>
</template>
<script>
import request from '@/utils/request'
export default {
    name:'Login',
    data(){
        return{
            phone_value:'',
            pwd_value:''
        }
    },
    methods:{
        Login(){
            const reg=/^1[35789]\d{9}$/;
            if(reg.test(this.phone_value) && this.pwd_value !== ''){
                request.post('/api/login',{
                    phone:this.phone_value,
                    password:this.pwd_value
                }).then(res=>{
                   window.localStorage.setItem('token',res.data.token);
                   this.$router.back();
                }).catch(error=>{
                    alert(error)
                })
            }else{
                alert('place input your name or password!')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../static/_minix.scss';
@import '../../static/common.scss';
    .wrap{
        width: 100%;
        height: 100%;
        background:#f4f4f4f4;
    }

    .header{
        width: 100%;
        height: pxTorem(100px);
        background: #fff;
        @include sizing;
        padding:pxTorem(25px);
        p{
            font-size: pxTorem(16px);
            span{
                font-size: pxTorem(18px);
            }
        }
        h1{
            font-size: pxTorem(20px);
            font-weight: bold;
        }
    }

    .other_ways{
        width: 100%;
        text-align: center;
        position: fixed;
        bottom:pxTorem(40px);
        left:0;
        p{
            margin-bottom:pxTorem(20px);
        }
        span{
            font-size: pxTorem(24px);
        }
    }

    .form{
        width: 100%;
        @include box_flex;
        @include direction(column);
        @include sizing;
        padding:0 pxTorem(15px);
        label{
            width: 100%;
            height:pxTorem(60px);
            position: relative;
            border-bottom:1px solid #ccc;
            input{
                width: 100%;
                height: 100%;
                padding-left:pxTorem(15px);
            }
            span{
                position: absolute;
                right:pxTorem(10px);
                top:50%;
                transform: translateY(-25%);
            }
        }

        button{
            width: 80%;
            height: pxTorem(40px);
            border-radius: pxTorem(20px);
            margin:pxTorem(30px) auto;
            font-size: pxTorem(14px);
            color:#fff;
        }

        

        p{
            text-align: center;
            a{
                color:green;
            }
        }
    }
</style>


