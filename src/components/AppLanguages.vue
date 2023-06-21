<template>
    <img :src="getFlagImage(languageCode)" :alt="languageCode" />
</template>

<script>
export default {
    name: 'AppLanguages',
    props: {
        languageCode: String,
    },
    data() {
        return {
            languages: [
                { code: 'it', name: 'Italian', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png' },
                { code: 'af', name: 'Afrikaans', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Flag_of_the_Republic_of_South_Africa.svg/2560px-Flag_of_the_Republic_of_South_Africa.svg.png' },
                { code: 'ar', name: 'Arabic', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Arabic-Language-Flag.svg/2560px-Arabic-Language-Flag.svg.png' },
                { code: 'bg', name: 'Bulgarian', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/1200px-Flag_of_Bulgaria.svg.png' },
                { code: 'ca', name: 'Catalan', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/1024px-Flag_of_Catalonia.svg.png' },
                { code: 'zh', name: 'Chinese', flag: 'https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg' },
                { code: 'en', name: 'English', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png' },
                { code: 'es', name: 'Spanish', flag: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Bandera_de_Espa%C3%B1a.svg' },
                { code: 'pt', name: 'Portuguese', flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png' },
                { code: 'ru', name: 'Russian', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png' },
                { code: 'ja', name: 'Japanese', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png' },
                { code: 'de', name: 'German', flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png' }
            ]
        }
    },
    methods: {
        getFlagImage(languageCode) {
            const language = this.languages.find((lang) => lang.code === languageCode);
            return language ? language.flag : '';
        },
    }
}
</script>

<style lang="scss" scoped>
    img {
        width: 3rem;
        border: 1px solid black;
    }
</style>