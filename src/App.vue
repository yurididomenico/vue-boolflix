<template>
  <div id="app">
    <HeaderC/>
    <MainC/>
  </div>
</template>

<script>
import axios from 'axios'
import HeaderC from './components/HeaderC.vue'
import MainC from './components/MainC.vue'

export default {
  name: 'App',
  components: {
    HeaderC,
    MainC
  },
  data() {
    return {
      arrayFilms: [],
      arraySerie: [],
      filmCercato: 'all'
    }
  },

  mounted()
  {    
    // console.clear();
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0272325d7f8e506cee96f7395ca81340&query=${this.filmCercato}`).then((response) =>
    {
      this.arrayFilms = response.data.results
      console.log(this.arrayFilms);
    })
  }
}



</script>

<style lang="scss">
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

</style>
