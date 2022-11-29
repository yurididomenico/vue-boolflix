<template>
    <div>
        <div class="card text-dark" style="width: 18rem;">
            <img src="../assets/logo.png" class="card-img-top" alt="Immagine Copertina">
            <div class="card-body">
                <h5 class="card-text">Titolo</h5>
                <h5 class="card-text">Titolo Originale</h5>
                <h5 class="card-text">Lingua</h5>
                <h5 class="card-text">Voto</h5>
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

</style>