<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
html{
  font-size: calc(100vw/750*100);
}
body{
  font-size: .32rem;
}
html,body,#app{
  width: 100%;
  height: 100%;
}
</style>
