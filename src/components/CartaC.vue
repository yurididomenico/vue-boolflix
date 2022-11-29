<template>
    <div>
        <div class="card text-dark">
            <img :src="'http://image.tmdb.org/t/p/w500/'+elem.poster_path" class="card-img-top" alt="Immagine Copertina">
            <div class="card-body">
                <h5 class="card-text">{{elem.title}}</h5>
                <h5 class="card-text">{{elem.original_title}}</h5>
                <h5 class="card-text">{{elem.original_lenguage}}</h5>
                <h5 class="card-text">{{elem.vote_average}}</h5>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartaC',
        props: {
            arrayFilms: Array,
            elem: Object
        },
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100vw / 6);
        aspect-ratio: 1/2;
    }
</style>