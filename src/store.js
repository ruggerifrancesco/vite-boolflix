import { reactive } from "vue";

// Store App Global Varibales
export const store = reactive ({
    apiKey: 'cf6403cfc0feef64c52d0997cf3c00c4',
    movieApiLinkCall: 'https://api.themoviedb.org/3/search/movie',
    tvSeriesApiLinkCall: 'https://api.themoviedb.org/3/search/tv',
})