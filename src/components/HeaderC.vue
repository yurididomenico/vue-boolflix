<template>
    <div class="bg-dark d-flex justify-content-between align-items-center p-2">
        <h1 class="text-danger ps-3">Boolflix</h1>
        <div class="input-group pe-5">
            <input type="text" class="form-control" placeholder="Cerca..." 
            v-model="testoInput"
            @keyup="$emit('nomeEmit', testoInput)">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderC',
        data() {
            return {
                testoInput: ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input-group
    {
        width: 400px;
    }
</style>