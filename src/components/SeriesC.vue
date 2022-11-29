<template>
    <div>
        <h1>Series Component</h1>
        <div class="d-flex flex-wrap p-3 mx-auto">
            <CartaC :arraySeries="arraySeries" v-for="(elem, index) in arraySeries" :key="index" :elem="elem"/>
        </div>
    </div>
</template>

<script>
    import CartaC from './CartaC.vue'

    export default {
        name: 'SeriesC',
        props: {
            arraySeries: Array
        },
        components: {
            CartaC
        }
    }
</script>

<style lang="scss" scoped>

</style>