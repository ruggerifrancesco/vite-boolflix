<template>
    <div>
        <img v-for="language in languages" :key="language.code" :src="getFlagImage(language.code)" :alt="language.name" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            languages: [
                { code: 'it', name: 'Italian', flag: '' },
                { code: 'af', name: 'Afrikaans', flag: '/path/to/afrikaans-flag.png' },
                { code: 'ar', name: 'Arabic', flag: '/path/to/arabic-flag.png' },
                { code: 'bg', name: 'Bulgarian', flag: '/path/to/bulgarian-flag.png' },
                { code: 'ca', name: 'Catalan', flag: '/path/to/catalan-flag.png' },
                { code: 'zh', name: 'Chinese', flag: '/path/to/chinese-flag.png' },
                { code: 'en', name: 'English', flag: '/path/to/english-flag.png' },
                { code: 'es', name: 'Spanish', flag: '/path/to/spanish-flag.png' },
                { code: 'zh', name: 'Chinese', flag: '/path/to/chinese-flag.png' },
                { code: 'hi', name: 'Hindi', flag: '/path/to/hindi-flag.png' },
                { code: 'bn', name: 'Bengali', flag: '/path/to/bengali-flag.png' },
                { code: 'pt', name: 'Portuguese', flag: '/path/to/portuguese-flag.png' },
                { code: 'ru', name: 'Russian', flag: '/path/to/russian-flag.png' },
                { code: 'ja', name: 'Japanese', flag: '/path/to/japanese-flag.png' },
                { code: 'de', name: 'German', flag: '/path/to/german-flag.png' }
            ]
        }
    },
    methods: {
        getFlagImage(languageCode) {
          const language = this.languages.find(lang => lang.code === languageCode);
          return language ? language.flag : '';
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>