<template>
    <div class="gradiente" />

    <section
        class="concept-container grid md:grid-cols-2 grid-cols-1 items-center gap-14"
    >
        <div class="concept-content px-7">
            <div class="md:flex gap-14 items-center justify-center py-10">
                <img
                    class="happy-forest-img h-full"
                    alt="Paisagem de floresta com uma menina sorridente ao fundo."
                    src="@/assets/images/statistics/pandemic-graphic.png"
                />

                <div>
                    <div class="title pb-6 w-full flex justify-center">
                        Dados estatísticos
                    </div>

                    <div class="text">
                        Segundo a
                        <a
                            href="https://www.who.int/health-topics/mental-health#tab=tab_2"
                            target="_blank"
                            >Organização Mundial da Saúde (OMS)</a
                        >
                        "as condições de saúde mental estão aumentando em todo o
                        mundo. Principalmente por causa das mudanças
                        demográficas, houve um aumento de 13% nas condições de
                        saúde mental e transtornos por uso de substâncias na
                        última década (até 2017). As condições de saúde mental
                        agora causam 1 em cada 5 anos vividos com incapacidade.
                        Cerca de 20% das crianças e adolescentes do mundo têm
                        uma condição de saúde mental, sendo o suicídio a segunda
                        principal causa de morte entre jovens de 15 a 29 anos.
                        Aproximadamente uma em cada cinco pessoas em ambientes
                        pós-conflito tem uma condição de saúde mental".

                        <p>
                            Conforme estatísticas disponibilizadas pela
                            <a
                                target="_blank"
                                href="http://www.ismabrasil.com.br/ws/ckfinder/files/POP_empregos_Burnout.pdf"
                                ><i
                                    >International Stress Management Association
                                    no Brasil (ISMA-BR)</i
                                ></a
                            >, o stress profissional afeta 72% dos brasileiros,
                            frequentemente causando adoecimento. Além de 69% dos
                            brasileiros estão estressados com o trabalho. A
                            causa disso é a saúde mental que está afetada.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.gradiente {
    width: 100%;
    height: 30px;
    background-image: linear-gradient(to bottom, $blue-light, $yellow-light);
}

.concept-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0px 50px 25px 50px;
    overflow: hidden;

    .happy-forest-img {
        border-radius: 30px;
        height: 55vh;
    }

    .concept-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .title {
            color: $pink;
        }
    }
}

@media (max-width: 767px) {
    .concept-container .happy-forest-img {
        margin-bottom: 30px;
        height: 100%;
        width: 100%;
    }
}
</style>
