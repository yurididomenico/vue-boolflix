<template>
    <div>
        <h1>Films Component</h1>
        <div class="d-flex flex-wrap p-3 mx-auto">
            <CartaC :arrayFilms="arrayFilms" v-for="(elem, index) in arrayFilms" :key="index" :elem="elem"/>
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
    div
    {
        gap: 50px;
    }
</style>