<template>
    <div class="login-wrapper">
        <div class="wrapper">
            <div class="content">
                <header>
                    <span :class="{ active: signIn }" @click="signIn = true">登录</span> /
                    <span :class="{ active: !signIn }" @click="signIn = false">注册</span>
                    <div>welcome to ~</div>
                </header>
                <section :class="[ signIn ? 'section-sign-in' : 'section-sign-up']">
                    <transition>
                        <div v-show="signIn" class="section-group">
                            <div>
                                <input type="text" placeholder="输入账号">
                            </div>
                            <div>
                                <input :type="passType" placeholder="输入密码">
                                <i :class="['seltarr', passType == 'password' ? 'password_icon_off' : 'password_icon_on' ]"
                                   @click="handleShowPassword()"></i>
                            </div>
                        </div>
                    </transition>

                    <transition>
                        <div v-show="!signIn" class="section-group">
                            <div v-for='col in singUpFormItem' :key="col.prop"
                                 :class="{ 'is-error': formKey[col.prop] === false }">
                                <input type="text" v-model="signUpFormData[col.prop]" :placeholder="col.placeholder"
                                       @blur="blurEvent(col)">
                                <v-render v-if="col.render" :col="col" :row="signUpFormData"
                                          :render="col.render"></v-render>
                            </div>
                        </div>
                    </transition>


                </section>
                <footer :class="[ signIn ? 'footer-sign-in' : 'footer-sign-up']">
                    <el-button @click="formSubmit">确定</el-button>
                    <div v-if="signIn" class="forget-password">忘记密码？</div>
                </footer>
            </div>
        </div>
        <footerComponent :idx="3"></footerComponent>

        <el-dialog
                title="重置密码"
                class="reset-password"
                :visible.sync="dialogVisible"
                top="25%"
                width="90%"
                :before-close="handleClose">
            <div class="content">
                <div class="group">
                    <input type="text" v-model="resetFormData.phone" @blur="resetBlurEvent('phone')" placeholder="请输入手机号">
                </div>
                <div class="group yzm">
                    <input type="text" v-model="resetFormData.yzm" @blur="resetBlurEvent('yzm')" placeholder="请输入验证码">
                    <el-button type="primary" size="mini" :disabled="resetYzmDisabled" @click="getVerificationCode">{{ VerificationText }}</el-button>
                </div>

                <div class="group">
                    <input type="text" v-model="resetFormData.password" @blur="resetBlurEvent('password')" placeholder="请输入新密码">
                </div>

                <div class="group">
                    <input type="text" v-model="resetFormData.newPassword" @blur="resetBlurEvent('newPassword')" placeholder="再次请输入新密码">
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetDialogClose">取 消</el-button>
                <el-button type="primary" @click="resetDialogSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
  const resetPassword = {
    data() {
      return {
        dialogVisible: true,
        resetFormData: {
          phone: '',
          yzm: '',
          password: '',
          newPassword: ''
        },
        resetFormKey: {},
        VerificationText: '发送验证码',
        resetYzmDisabled: false,
        resetFormItem: []
      }
    },
    created() {
      const { resetFormKey, resetFormData } = this;
      const _this = this;
      Object.keys(resetFormData).forEach(key => this.$set(resetFormKey, key, undefined));
      this.resetFormItem = [
        {placeholder: '输入手机号', prop: 'phone'},
        {
          placeholder: '输入短信验证码', prop: 'messageVerifyCode', render(h, scope) {
            return (
              <el-button
                onClick={() => _this.getVerificationCode()}
                type="primary"
                size="mini"
                class="verify-code btn">获取验证码
              </el-button>
            )
          }
        },
        {
          placeholder: '设置6-16位密码', prop: 'password', render(h, scope) {
            return (
              <i onClick={() => _this.handleShowPassword()}
                 class={['seltarr', _this.passType == 'password' ? 'password_icon_off' : 'password_icon_on']}></i>
            )
          }
        },
        {
          placeholder: '请输入确认密码', prop: 'password', render(h, scope) {
            return (
              <i onClick={() => _this.handleShowPassword()}
                 class={['seltarr', _this.passType == 'password' ? 'password_icon_off' : 'password_icon_on']}></i>
            )
          }
        },
      ]
    },
    methods: {
      resetDialogSubmit() {
        const { resetFormData } = this;
        Object.keys(resetFormData).forEach(key=> {
          if (!resetFormData[key]) {
            this.resetFormKey[key] = false
          }
        });
        if (!Object.values(this.resetFormKey).includes(false)) {
          // 提交表单

        }
      },
      resetDialogClose() {

      },
      resetBlurEvent(prop) {
        this.formKey[col.prop] = this.signUpFormData[col.prop] ? true : false;
      },

      getVerificationCode() {
        this.$request.get('').then(data=> { // 验证码

        });

        let n = 60;
        clearInterval(timer);
        const timer = setInterval(()=> {
          if (!n) {
            clearInterval(timer);
            this.resetYzmDisabled = false;
            this.VerificationText = '发送验证码';
          } else {
            this.VerificationText = n + '秒后重新发送';
            this.resetYzmDisabled = true;
            n--;
          }
        }, 1000);
      },
    }
  };


  export default {
    mixins: [resetPassword],
    name: "login",
    data() {
      return {
        title: '登录',
        activeName: 'first',
        passType: 'password',
        signIn: true,
        imgVerifyCodeSrc: '',
        signUpFormData: {
          phone: '',
          imgVerifyCode: '',
          messageVerifyCode: '',
          password: ''
        },
        formKey: {},
        singUpFormItem: []
      }
    },
    created() {
      const _this = this;
      const {signUpFormData, formKey} = this;
      Object.keys(signUpFormData).forEach(key => this.$set(formKey, key, undefined));

      this.singUpFormItem = [
        {placeholder: '输入手机号', prop: 'phone'},
        {
          placeholder: '输入图片验证码', prop: 'imgVerifyCode', render(h, scope) {
            return (
              <img src={_this.imgVerifyCodeSrc} onClick={() => _this.getImgVerifyCode()} class='verify-code'/>
            )
          }
        },
        {
          placeholder: '输入短信验证码', prop: 'messageVerifyCode', render(h, scope) {
            return (
              <el-button
                onClick={() => _this.getMessageVerifyCode()}
                type="primary"
                size="mini"
                class="verify-code btn">获取验证码
              </el-button>
            )
          }
        },
        {
          placeholder: '设置6-16位密码', prop: 'password', render(h, scope) {
            return (
              <i onClick={() => _this.handleShowPassword()}
                 class={['seltarr', _this.passType == 'password' ? 'password_icon_off' : 'password_icon_on']}></i>
            )
          }
        },
      ]
    },
    methods: {
      blurEvent(col) {
        this.formKey[col.prop] = this.signUpFormData[col.prop] ? true : false;
      },
      getMessageVerifyCode() {
        // 短信验证码
      },

      getImgVerifyCode() {
        // 图片验证码
        // imgVerifyCodeSrc
      },

      formSubmit() {
        const {signUpFormData} = this;
        Object.keys(signUpFormData).forEach(key => {
          if (signUpFormData[key] === '') {
            this.formKey[key] = false;
          }
        });
        if (!Object.values(this.formKey).includes(false)) {
          // 提交表单
        }
        this.$router.push({path: '/loan'})
      },

      handleShowPassword() {
        this.passType = this.passType === 'password' ? 'text' : 'password';
      }
    }
  }
</script>

<style scoped lang="less">
    @import '~@/common/var.less';

    .login-wrapper {
        height: 100%;
        background: #fff;

        .wrapper {
            position: relative;
            height: calc(100% - 2.75rem);

            .content {
                position: absolute;
                width: 85%;
                height: 78%;
                padding: 15px;
                background: #fff;
                box-sizing: border-box;
                margin: 0 auto;
                border-radius: 8px;
                box-shadow: 0px 1px 8px 0px #ded8d8;
                top: 55%;
                left: 50%;
                transform: translate(-50%, -50%);

                header {
                    margin-top: 20px;

                    span {
                        font-size: 25px;
                        color: #C0C4CC;

                        &.active {
                            font-size: 30px;
                            color: #000;
                        }
                    }

                    div {
                        font-size: 18px;
                        margin-top: 5px;
                        color: #909399;
                    }
                }

                section {
                    margin-top: 20%;

                    &.section-sign-up {
                        margin-top: 20px;

                        .section-group {
                            > div {
                                height: 30px;
                                line-height: 30px;

                                .verify-code {
                                    top: -5px;
                                }

                                .seltarr {
                                    top: 8px;
                                }
                            }
                        }

                    }

                    .section-group {
                        > div {
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                            border-bottom: 1px solid #EBEEF5;
                            margin-bottom: 20px;
                            position: relative;
                            transition: all 0.1s linear;

                            &.is-error {
                                border-bottom: 1px solid red;
                            }

                            .verify-code {
                                position: absolute;
                                width: 80px;
                                height: 28px;
                                top: 5px;
                                right: 10px;
                                border: 1px solid #ccc;

                                &.btn {
                                    width: auto;
                                }
                            }

                            input {
                                width: 100%;
                            }

                            .seltarr {
                                position: absolute;
                                top: 16px;
                                right: 10px;
                                width: 22px;
                                background: url("../../assets/img/fico.png") no-repeat;
                                background-size: 28px auto;

                                &.password_icon_off {
                                    background-position: 0 -1346px;
                                    height: 13px;
                                }

                                &.password_icon_on {
                                    background-position: 0 -1359px;
                                    height: 16px;
                                }
                            }
                        }

                        &.sign-up {
                            margin-top: 0;
                        }
                    }

                }

                footer {
                    margin-top: 15%;
                    text-align: center;

                    &.footer-sign-up {
                        margin-top: 0;
                    }

                    button {
                        width: 90%;
                        border-radius: 20px;

                        /deep/ span {
                            font-size: 18px;
                            font-weight: bold;
                            color: #909399;
                        }
                    }

                    .forget-password {
                        margin-top: 10%;
                        font-size: 16px;
                        color: @themeColor
                    }
                }
            }
        }

        .reset-password {
            /deep/ .el-dialog {
                margin-top: 0 !important;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                .content {
                    .group {
                        width: 100%;
                        height: 40px;
                        line-height: 40px;
                        font-size: 16px;
                        border-bottom: 1px solid #EBEEF5;
                        margin-bottom: 20px;
                        position: relative;
                        transition: all 0.1s linear;
                        input {

                        }
                        &.yzm {
                            position: relative;
                            .el-button {
                                position: absolute;
                                right: 5px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
