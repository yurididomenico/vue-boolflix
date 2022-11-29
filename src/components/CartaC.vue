<template>
    <div>
        <div class="card text-dark p-relative">
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