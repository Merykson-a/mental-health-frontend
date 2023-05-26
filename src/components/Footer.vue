<template>
    <footer class="footer flex flex-col md:flex-row items-center mx-20 py-5">
        <div
            class="flex flex-1 flex-wrap items-center justidy-center md:justify-start gap-12"
        >
            Direitos autorais © 2023 Merykson Acácio ®
        </div>

        <div class="flex items-center gap-4 mt-12 md:mt-0">
            <a
                class="text-2xl fab fa-github"
                target="_blank"
                href="https://github.com/Merykson-a"
            />

            <a
                class="text-2xl fab fa-instagram"
                target="_blank"
                href="https://www.instagram.com/merykson_acacio/"
            />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
.footer {
    border-top: 1px solid $pink;
}

a {
    color: #000000 !important;
    text-decoration: none;

    &:hover {
        color: $blue !important;
    }
}
</style>
