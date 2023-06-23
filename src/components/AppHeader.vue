<template>
    <header>
        <nav class="navbar navbar-expand-lg p-3">
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
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchQuery">
                <button class="btn btn-outline-success" type="submit" @click="$emit('search', searchQuery)">Search</button>
              </div>
            </div>
          </div>
        </nav>

    </header>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
    },
};
</script>


<style lang="scss" scoped>
@use '../styles/partials/_mixins.scss' as *;
@use '../styles/partials/_variables.scss' as *;

    nav {
        background-color: transparent;
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
</style>