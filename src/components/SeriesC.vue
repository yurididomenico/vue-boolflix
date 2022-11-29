<template>
    <div class="overflow">
        <h1>Series</h1>
        <div class="d-flex p-3 mx-auto">
            <CartaC class="mx-4"
            :arraySeries="arrayCarte"
            v-for="(elem, index) in arraySeries"
            :key="index"
            :elem="elem"/>
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
    .overflow
    {
        overflow-x: auto;
    }
</style>