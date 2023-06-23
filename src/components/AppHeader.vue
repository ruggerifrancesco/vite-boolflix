<template>
    <header>
        <nav class="navbar navbar-expand-lg p-3" :class="{ 'overlay-nav-shadow': isScrollTop }">
            <div class="container-fluid">
                <div class="logo-brand">
                    <img src="../assets/boolflix-logo.png" alt="BoolFlix Logo">
                </div>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse list-items-container" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                              Home
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Movies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tv Series</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">New Popular</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">My List</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Browse By Language</a>
                        </li>
                    
                    </ul>

                    <div class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                            v-model="searchQuery" @input="handleSearch">

                        <button class="btn btn-success" type="submit" 
                            @click="$emit('search', searchQuery)">
                            Search
                        </button>
                    </div>
                    
                </div>
            </div>
        </nav>

        <section class="hero">
            <img src="https://images.freecreatives.com/wp-content/uploads/2015/09/avengers-wallpapers-.jpg" alt="">
            <div class="overlay-hero-shadow"></div>

            <!-- TO DO CONTENT -->
        </section>

    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchQuery: '',
            isScrollTop: true,
        };
    },
    methods: {
        handleScroll() {
            this.isScrollTop = window.scrollY === 0; // Check if scroll position is at the top
        },
        handleSearch() {
            this.$emit('search', this.searchQuery); // Emit search event with the search query
        },
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll); // Remove scroll event listener on component destroy
    },
};
</script>


<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    nav {
        background-color: $main-app-bg;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        // TO RECHECK LATER
        transition: background-color 0.3s ease-in;
        z-index: 2;
    }

    .overlay-nav-shadow {
        background: rgb(0,0,0);
        background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 90%);
        transition: background-color 0.3s ease;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
    }

    .logo-brand {
        width: 8rem;
    }

    .nav-link {
        color: white;
        font-size: 0.95rem;
        &.active {
            color: white; 
            font-weight: bold;
        }

        &:hover {
            color: rgb(199, 199, 199); 
        }
    }

    // TO RECHECK LATER
    .list-items-container {
        margin-left: 1rem;
    }

    .hero {
        position: relative;
        z-index: 1;
        height: 90vh;

        & > img {
            object-fit: cover;
            object-position: top;
        }
    }

    .overlay-hero-shadow {
        background: rgb(20,20,20);
        background: linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(0,212,255,0) 35%);
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>