<template>
    <div class='wrapper'>
        <top-component title="修改密码"></top-component>
        <div class="content">
            <div class="group">
                <input type="text" placeholder="请输入旧密码">
                <i :class="['seltarr', passType == 'password' ? 'password_icon_off' : 'password_icon_on' ]"
                                   @click="handleShowPassword()"></i>
            </div>
            <div class="group">
                <input type="text" placeholder="请输入旧密码">
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

    }
}
</script>