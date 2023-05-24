<template>
    <header>
        <div class="flex justify-center items-center py-5">
            <img
                src="@/assets/images/header/mental-health-icon.png"
                width="25px"
            />

            <div class="content-title ml-2">Saúde mental</div>
        </div>

        <div class="header-container flex flex-col md:flex-row items-center">
            <img class="brain-img" src="@/assets/images/header/brain.png" />

            <div class="cloud text-center py-7">
                <div class="cloud-circle" />
                <div class="cloud-circle" />
                <div class="cloud-circle" />

                <div class="content">
                    <h1 class="title mt-3">
                        Mentalidade saudável, vida plena:
                    </h1>

                    <p class="sub-title mt-7 mb-4">Então, como vai sua vida?</p>
                </div>
            </div>
        </div>
    </header>
</template>
<script></script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Oleo+Script&display=swap");

.cloud {
    position: relative;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 30vh;

    .cloud-circle {
        position: absolute;
        background-color: #f5f5f5;
        border-radius: 50%;
        width: 30px;
        height: 30px;

        &:nth-child(1) {
            top: 0px;
            left: -30px;
        }

        &:nth-child(2) {
            width: 25px;
            height: 25px;
            top: -30px;
            left: -60px;
        }

        &:nth-child(3) {
            width: 20px;
            height: 20px;
            top: -40px;
            left: -100px;
        }
    }
}

.content-title {
    color: #ffffff;
    font-size: 20px;
    font-family: Oleo Script;
}

.header-container {
    padding: 80px 50px 80px 50px;
    align-items: center;
    // height: calc(100vh - 150px);

    .brain-img {
        width: 80vh;
    }

    .title {
        font-family: Courgette;
        font-size: 32px;
        font-weight: bold;
        color: #007bff;
    }

    .sub-title {
        font-family: Courgette;
        font-size: 25px;
        font-weight: bold;
        color: #ff6600;
    }
}

@media only screen and (max-width: 768px) {
    .cloud {
        margin-top: 100px;

        .cloud-circle {
            &:nth-child(1) {
                top: -40px;
                left: 90px;
            }

            &:nth-child(2) {
                top: -60px;
                left: 120px;
            }

            &:nth-child(3) {
                top: -70px;
                left: 160px;
            }
        }
    }
}
</style>
