<template>
    <div class="home">
        <Topnav/>
        <div class="content">
            <Aside/>
            <MainT/>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    display: flex;
    flex-grow: 1;
    max-width: 1000px;
    width: 100vw;
    margin: 0 auto;
}
</style>

<script scoped>
import Topnav from '../components/Topnav.vue';
import Aside from '../components/Doc/Aside.vue';
import MainT from '../components/Doc/MainT.vue';
export default {
    components: {Topnav, Aside, MainT}
}
</script>