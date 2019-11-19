<template>
    <div class='wrapper'>
        <top-component title="修改密码"></top-component>
        <div class="content">
            <div class="group">
                <span>旧密码</span>
                <div>
                    <input type="text" placeholder="若包含字母，请注意区分大小写">
                </div>
            </div>
            <div class="group">
                <span>新密码</span>
                <div>
                    <input type="text" placeholder="8-16位，包含数字字母">
                </div>
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