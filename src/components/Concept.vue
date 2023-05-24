<template>
    <div class="gradiente" />

    <section class="introduction-container flex justify-center items-center">
        Aqui irá dizer conceito de saúde mental
    </section>

    <div class="gradiente2" />
</template>

<style scoped>
.gradiente {
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to bottom, #02080c, #fce4ec);
}

.gradiente2 {
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to bottom, #fce4ec, #02080c);
}

.introduction-container {
    position: relative;
    height: 200px;
    background-color: #fce4ec;
    overflow: hidden;
}
</style>
