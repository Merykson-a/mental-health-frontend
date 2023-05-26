<template>
    <div class="gradiente" />

    <section
        class="concept-container grid md:grid-cols-2 grid-cols-1 items-center gap-14"
    >
        <div class="concept-content p-7">
            <div class="title pb-3">
                Afinal, o que é <b id="mental-health">saúde mental?</b>
            </div>

            <div class="text pt-7">
                <a href="https://www.who.int/"
                    >A Organização Mundial da Saúde (OMS)</a
                >
                define saúde mental como “um estado de bem-estar mental que
                permite às pessoas lidar com os momentos estressantes da vida,
                desenvolver todas as suas habilidades, aprender e trabalhar bem
                e contribuir para a melhoria de sua comunidade”.
            </div>

            <div class="text md:flex gap-14 items-center justify-center">
                Assim como uma floresta pode enfrentar tempestades e
                desequilíbrios, nossa saúde mental também pode ser afetada por
                diversos fatores, como estresse, traumas, problemas de
                relacionamento ou desequilíbrios químicos. É importante buscar
                apoio e cuidar dela para que floresça. A saúde mental nos
                permite lidar com o estresse, enfrentar desafios e desfrutar de
                uma vida plena.

                <img
                    class="happy-forest-img"
                    href="https://gencraft.com/generate"
                    alt="Paisagem de floresta com uma menina sorridente ao fundo."
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
    background-image: linear-gradient(to bottom, $yellow-light, $blue-light);
}

#mental-health {
    color: $yellow;
}

.concept-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 50px;
    background-color: $blue-light;
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
            color: $green;
        }
    }
}

@media (max-width: 767px) {
    .concept-container .happy-forest-img {
        margin-top: 30px;
        height: 100%;
        width: 100%;
    }
}
</style>
