<template>
    <div class="gradiente" />

    <section
        class="concept-container grid md:grid-cols-2 grid-cols-1 items-center gap-14"
    >
        <div class="concept-content p-10">
            <div class="title">
                Afinal, o que é
                <b style="color: #f8ae0e">saúde mental?</b>
            </div>

            <div class="text pt-7">
                A saúde mental refere-se ao estado de bem-estar emocional,
                psicológico e social de uma pessoa. É sobre cuidar da nossa
                mente, cultivar pensamentos positivos, nutrir nossas emoções e
                adotar comportamentos saudáveis.
            </div>

            <div class="text pt-7 md:flex-none md:flex gap-14 items-center">
                <div>
                    Assim como uma floresta pode enfrentar tempestades e
                    desequilíbrios, nossa saúde mental também pode ser afetada
                    por diversos fatores, como estresse, traumas, problemas de
                    relacionamento ou desequilíbrios químicos. É importante
                    buscar apoio e cuidar dela para que floresça. A saúde mental
                    nos permite lidar com o estresse, enfrentar desafios e
                    desfrutar de uma vida plena.
                </div>

                <img
                    class="happy-forest-img"
                    alt="Forest with a happy girl in the background."
                    src="@/assets/images/concept/happy-forest.png"
                />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.gradiente {
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to bottom, #fff7c4, #e6f1f6);
}

.concept-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 50px;
    background-color: #e6f1f6;
    overflow: hidden;

    .happy-forest-img {
        border-radius: 50px;
        height: 40vh;
    }

    .concept-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title {
            font-size: 30px;
            // color: #3d5c75;
            color: #4d700f;
            font-weight: bold;
        }

        .text {
            font-size: 24px;
            text-indent: 2em;
            text-align: justify;
        }
    }
}

@media (max-width: 768px) {
    .concept-container .happy-forest-img {
        margin-top: 30px;
        height: 100%;
        width: 100%;
    }
}
</style>
