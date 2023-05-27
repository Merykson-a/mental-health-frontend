<template>
    <div class="gradiente" />

    <section class="sources-container my-10">
        <div class="title pb-5">Fontes</div>

        <div class="sources">
            <a
                target="_blank"
                href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental"
            >
                <b>Governo Federal Brasileiro</b>: Saúde Mental.
            </a>

            <a target="_blank" href="https://www.who.int">
                Organização Mundial da Saúde (<b>OMS</b>).
            </a>

            <a target="_blank" href="http://www.ismabrasil.com.br">
                Dados e estatísticas com <b>ISMA-BR</b>.
            </a>

            <a
                target="_blank"
                href="https://vidasaudavel.einstein.br/como-cuidar-da-saude-mental"
            >
                <b>Albert Einstein</b>: Dicas de saúde mental.
            </a>

            <a
                target="_blank"
                href="https://viverbem.unimedbh.com.br/saude-no-trabalho/a-importancia-do-acompanhamento-da-saude-mental"
            >
                Importância do acompanhamento de um profissional (<b
                    >Unimed BH</b
                >).
            </a>

            <a target="_blank" href="https://gencraft.com">
                Geração de imagens com Inteligência articial (<b>Gencraft</b>)
            </a>
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

.sources-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center !important;
    padding: 0px 80px 25px 80px;

    a {
        font-size: 18px;
        display: block;
        margin-bottom: 10px;
    }

    .title {
        font-size: 25px !important;
    }

    .sources {
        text-align: center;
    }
}

@media only screen and (max-width: 600px) {
    .sources-container {
        .title {
            font-size: 20px !important;
        }

        .sources {
            text-align: start !important;
        }

        a {
            font-size: 16px;
        }
    }
}
</style>
