<template>
    <div class="overflow">
        <h1>Series</h1>
        <div class="d-flex p-3 mx-auto">
            <CartaSeries class="mx-4"
            :arraySeries="arrayCarte"
            v-for="(elem, index) in arraySeries"
            :key="index"
            :elem="elem"/>
        </div>
    </div>
</template>

<script>
    import CartaSeries from './CartaSeries.vue'

    export default {
        name: 'SeriesC',
        props: {
            arraySeries: Array
        },
        components: {
            CartaSeries
        }
    }
</script>

<style lang="scss" scoped>
    .overflow
    {
        overflow-x: auto;
    }
</style>