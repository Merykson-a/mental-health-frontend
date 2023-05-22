<template>
    <Header />
    <Footer />
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #02080c;
}

::-webkit-scrollbar {
    width: 13px !important;
    background: transparent;
}
::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 100px;
    background-color: #b2ebf2;
}
</style>
