<template>
    <div class="container">
        <!--<top-component title="草根金融"></top-component>-->
        <!--<dl class="userInfo">
            <dt>
                <p class="user-logo"></p>
                <p class="user-tel">
                    您好
                    <span>15837587256</span>
                </p>
                <p class="user-tag">
                    <span class="mLevel">学徒</span>
                    <span class="mName">白手起家</span>
                </p>
            </dt>
            <dd>
                申请借款
                <span>1笔</span>
            </dd>
            <dd>
                待还借款
                <span>0笔</span>
            </dd>
        </dl>-->
        <div class="user-info" @click="handleUserIcon()">
            <div class="user-img">
                <img :src="getUserHead()">
            </div>
            <div class="user-name">{{ userName }}</div>
        </div>

        <ul class="listCom list-arrow list-icon mt20">
            <listComponent v-for="(item, index) in lists" :key='index' :class="item.cls" :title="item.tit" @click="$router.push(item.url)"></listComponent>
        </ul>
        <footerComponent :idx="2"></footerComponent>
    </div>
</template>

<script type="application/ecmascript">
    export default {
        data: function () {
            return {
                lists: [
                    {cls:'icon iconfont icon-un-mine-o',tit:'我的资料',url: { name: 'info' } },
                    {cls:'icon-jiekuan',tit:'我的借款',url: { name: 'loanProgress' }},
                    {cls:'icon-huankuan',tit:'我的还款',url: { name: 'repayment' }},
                    {cls:'icon iconfont icon-un-complain-o',tit:'修改密码',url: { name: 'editPassword' }},
                    /*{cls:'icon-jiangli',tit:'我的奖励',url:''},*/
                    /*{cls:'icon-help',tit:'帮助中心',url:''},*/
                    /*{cls:'icon-yijian',tit:'意见反馈',url:''},*/
                    {cls:'icon-about',tit:'关于我们',url:''},
                ],
                userName: '不如'
            }
        },
        methods: {
          handleUserIcon() {
            this.$router.push({ name: 'info' })
          },
          getUserHead() {
            return require('../../../static/img/default_user.png')
          }
        }
    }
</script>
<style lang="less" scoped>
    @import '~@/common/var.less';
    .container {
        &:before {
            height: auto;
        }
        .user-info {
            height: 175px;
            /*background: #3BC67D;*/
            background: @themeColor;
            position: relative;
            .user-img {
                width: 64px;
                height: 64px;
                border: 2px solid #fff;
                border-radius: 50%;
                position: absolute;
                left: 50%;
                top: 45%;
                transform: translate(-50%, -50%);
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .user-name {
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translateX(-50%);
                font-size: 18px;
                color: #fff;
            }
        }

        .listCom {
            width: 92%;
            margin: -20px auto;
            position: relative;
            z-index: 99;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 6px 0px rgba(233,233,233,1);
            border-radius:4px;
            li {
                border: 0;
            }
        }
    }

</style>
