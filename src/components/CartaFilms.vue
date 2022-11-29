<template>
    <div>
        <div class="card text-dark p-relative">
            <img :src="'http://image.tmdb.org/t/p/w500/'+elem.poster_path" class="card-img-top" alt="Immagine Copertina">
            <div class="card-body">
                <h5 class="card-text text-danger">Titolo:</h5>
                <span>{{elem.title}}</span>
                <h5 class="card-text text-danger mt-4">Titolo Originale:</h5>
                <span>{{elem.original_title}}</span>
                <h5 class="card-text text-danger mt-4">Lingua:</h5>
                <span>{{elem.original_language}}</span>
                <h5 class="card-text text-danger mt-4">Voto:</h5>
                <span>{{elem.vote_average}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartaFilms',
        props: {
            arrayCarte: Array,
            elem: Object
        },
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100vw / 8);
        height: 100%;

        &:hover .card-body
        {
            display: block;
            background-color: black;
            color: white;
            width: 100%;
        }

        &:hover img
        {
            display: none;
        }

        .card-body
        {
            display: none;
            
            
        }


    }
</style>