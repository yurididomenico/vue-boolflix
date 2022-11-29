<template>
    <header class="bg-dark bg-gradient d-flex justify-content-between align-items-center p-2">
        <h1 class="text-danger ps-3">Boolflix</h1>
        <div class="input-group pe-5">
            <input type="text" class="form-control" placeholder="Cerca..." 
            v-model="inputFilm"
            @keyup="$emit('emitFilm', inputFilm)">
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderC',
        data() {
            return {
                inputFilm: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    header
    {
        height: 6vh;
    }
    .input-group
    {
        width: 400px;
    }
</style>