<template>
  <div id="app">
    <HeaderC @emitFilm="cercaFilm"/>
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
      filmCercato: ''
    }    
  },

  methods: {
    cercaFilm(valoreInput) {
      this.filmCercato = valoreInput

      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0272325d7f8e506cee96f7395ca81340&query=${this.filmCercato}`).then((response) =>
      {
        this.arrayFilms = "";
        this.arrayFilms = response.data.results;
        console.log(this.arrayFilms);
      })
    }  
  },

  mounted()
  {    
    // console.clear();
    
  },

  beforeUpdate()
  {
    

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
