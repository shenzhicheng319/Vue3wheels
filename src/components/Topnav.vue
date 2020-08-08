<template>
    <div class="topnav">
        <div class="logo">
            轱辘UI
        </div>
        <ul class="menu">
            <li>文档</li>
            <li>捐款</li>
        </ul>
    </div>
</template>

<style scoped>
.topnav {
    background-color: pink ;
    display: flex;
    padding: 16px;
}
.logo {
    max-width: 6em;
    margin-right: auto;
}
.menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
}
.menu li {
    margin: 0 1em;
}
</style>