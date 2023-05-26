<template>
    <div class="gradiente" />

    <section
        class="treatment-container grid md:grid-cols-2 grid-cols-1 items-center"
    >
        <div
            class="treatment-content px-7 md:flex gap-14 items-center justify-center"
        >
            <div>
                <div class="title pb-6 w-full flex justify-center">
                    <b id="mental-health">Saúde mental:&nbsp;</b> como mantê-la?
                </div>

                <div class="text">
                    Praticar hábitos saudáveis e adotar um estilo de vida de
                    qualidade, ajudam a manter a saúde mental em dia. Jamais se
                    isole, consulte o médico regularmente, faça o tratamento
                    terapêutico adequado, mantenha o físico e o intelectual
                    ativos, pratique atividades físicas, tenha alimentação
                    saudável, reforce os laços familiares e de amizades.

                    <p>
                        Também, pode-se destacar que um acompanhamento
                        profissional possui grande serventia, ele poderá indicar
                        intervenções medicamentosas e métodos de tratamento
                        ideais para cada caso, levando em consideração o
                        histórico da pessoa. Para mais orientações e dicas,
                        acesse:
                        <a
                            href="https://www.sallet.com.br/9-dicas-de-como-cuidar-da-saude-mental/"
                            target="_blank"
                            >DICAS DE SAÚDE MENTAL</a
                        >.
                    </p>
                </div>
            </div>

            <div
                class="flex items-center justify-center contact-content h-full"
            >
                <div style="text-align: center">
                    <img
                        class="meditation-img"
                        src="@/assets/images/treatment/meditation.jpg"
                    />
                    <a href="http://www.freepik.com" target="_blank"
                        >Imagem desenvolvida por Freepik</a
                    >
                    <p class="flex w-full justify-center mt-3">
                        Caso necessite, não hesite em contactar um profissional.
                    </p>

                    <a target="_blank" href="https://www.whatsapp.com/">
                        <button
                            class="contact mt-3"
                            type="button"
                            @click="onClick"
                        >
                            <img
                                class="whatsapp-img"
                                alt="Símbolo do whatsapp e/ou telefone."
                                src="@/assets/images/treatment/whatsapp.png"
                            />

                            <div class="flex justify-center w-full pr-6">
                                Entre em contato
                            </div>
                        </button>
                    </a>
                </div>
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

.treatment-container {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 50px;
    background-color: $blue-light;
    overflow: hidden;

    .contact-content {
        border-radius: 50px;
        width: 40vh;

        .meditation-img {
            border-radius: 50px;
            width: 100%;
        }

        .contact {
            display: flex;
            align-items: center;
            width: 250px;
            position: relative;
            height: 40px;
            background-color: #29a71a;
            color: #ffffff;
            border-radius: 20px;

            .whatsapp-img {
                height: 40px;
            }
        }
    }

    .treatment-content {
        .title {
            color: $blue;
        }
    }
}

@media (max-width: 767px) {
    .treatment-container .contact-content {
        margin-top: 30px;
        height: 100%;
        width: 100%;

        .contact {
            width: 100%;
        }
    }
}
</style>
