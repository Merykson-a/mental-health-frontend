<template>
    <Header />
    <Concept />
    <Footer />
</template>

<script setup>
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";
import Concept from "./components/Concept.vue";
</script>

<style lang="scss">
html,
body {
    background-color: #02080c;
}

::-webkit-scrollbar {
    width: 13px !important;
    background-color: transparent;
}
::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 100px;
    background-color: #b2ebf2;
}
</style>
