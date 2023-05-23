<template>
    <header>
        <div class="flex justify-center items-center py-5">
            <img src="@/assets/mental-health-icon.png" width="25px" />
            <div
                class="text-white ml-2"
                style="font-family: Oleo Script; font-size: 20px"
            >
                Saúde mental
            </div>
        </div>

        <div class="header-container flex flex-col sm:flex-row items-center">
            <img class="brain-img" src="@/assets/brain.png" />

            <div class="speech-bubble text-white my-14 text-center">
                <h1 class="title mt-3" style="">
                    Mentalidade saudável, vida plena:
                </h1>
                <p class="sub-title mt-7 mb-4">Então, como vai sua vida?</p>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Oleo+Script&display=swap");

.header-container {
    margin: 0px 50px 0px 50px;
    align-items: center;
    height: calc(100vh - 200px);

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

    .speech-bubble {
        width: 100%;
        border-radius: 50px;
        min-height: 150px;
        height: auto;
        background: #b2d8d8;
        padding: 15px;
        position: relative;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        padding: 13px;
        color: #000000;
    }
    .speech-bubble:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        left: -10px;
        top: 55px;
        background: #b2d8d8;
        transform: rotate(45deg);
    }

    @media only screen and (max-width: 640px) {
        .speech-bubble:before {
            left: 47%;
            top: -10px;
            background: #b2d8d8;
            transform: rotate(45deg);
        }
    }
}
</style>
