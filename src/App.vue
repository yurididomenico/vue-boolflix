<template>
  <div id="app" class="d-flex flex-column">
    <HeaderC @emitFilm="cercaFilm"/>
    <MainC :arrayFilms="arrayFilms" :arraySeries="arraySeries"/>
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
      arraySeries: [],
      filmCercato: ''
    }    
  },

  methods: {
    cercaFilm(valoreInput) {
      //filmCercato prende il valore inserito nella barra di ricerca nell'Header
      this.filmCercato = valoreInput


      if(this.filmCercato !== '')
      {
        //Axios Film
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0272325d7f8e506cee96f7395ca81340&query=${this.filmCercato}`).then((response) =>
        {
          this.arrayFilms = response.data.results
          console.log(this.arrayFilms)
        })

        // Axios Serie
        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0272325d7f8e506cee96f7395ca81340&query=${this.filmCercato}`).then((response) =>
        {
          this.arraySeries = "";
          this.arraySeries = response.data.results;
          console.log(this.arraySeries)
        })
      }
      else
      {
        this.arrayFilms = []
        this.arraySeries = []
      }
    }  
  },

  

}



</script>

<style lang="scss">
*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
img
{
  display: block;
}

</style>
