<template>
    <div class="home">
        <Topnav />
        <div class="banner">
            <div class="intro">
                <h1>轱辘UI</h1>
                <h2>基于vue3 和 TypeScript 的 UI 框架</h2>
                <div class="links">
                    <router-link to="/doc">查看文档</router-link> |
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.topnav {
    background-color: pink ;
}
.intro{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgreen;
    padding: 100px 0;
}
</style>

<script>
import Topnav from "../components/Topnav.vue";
export default {
    components: { Topnav }
};
</script>