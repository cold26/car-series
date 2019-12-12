<template>
    <div class="loading">
        <img src="../assets/loading.gif">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading {
    width:  20vw;
    height: 20vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    z-index: 111111;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>