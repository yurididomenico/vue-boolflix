<template>
    <div class="Films">
        <h1>Films Component</h1>
        <div class="d-flex p-3 mx-auto">
            <CartaC class="mx-4"
            :arrayFilms="arrayFilms"
            v-for="(elem, index) in arrayFilms"
            :key="index"
            :elem="elem"/>
        </div>
        
    </div>
</template>

<script>
    import CartaC from './CartaC.vue'

    export default {
        name: 'FilmsC',
        props: {
            arrayFilms: Array
        },
        components: {
            CartaC
        }
    }

    
</script>

<style lang="scss" scoped>
    .Films
    {
        
        overflow: auto;
    }
</style>