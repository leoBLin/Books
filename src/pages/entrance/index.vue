<template>
    <div class="fix-container">
        <div class="fix-wrapper" :animation="animations">
            <div class="home-logo">
                <image src="/static/image/xxx.png"></image>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            animations: null,
            status: false
        }
    },
    methods: {
        goIndex() {
            if (!this.status) {
                wx.switchTab({
                    url: '/pages/home/main'
                });
                return;
            }
            var animation = wx.createAnimation({
                duration: 3000,
            })
            animation.opacity(0).step();
            this.animations = animation.export();
            setTimeout(function() {
                wx.switchTab({
                    url: '/pages/home/main'
                });
            },3000);
        }
    },
    mounted() {
        this.goIndex();
    }
}
</script>

<style scoped>
    .layer-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 1;
        /* background: rgb(255,255,255); */
    }
    .home-logo image {
        width: 80px; 
        height: 80px;
    }
</style>