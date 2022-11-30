<template>
    <div>
        <div class="card text-dark p-relative">
            <img :src="'http://image.tmdb.org/t/p/w500/'+elem.poster_path" class="card-img-top" alt="Immagine Copertina">
            <div class="card-body">
                <h5 class="card-text text-danger">Titolo:</h5>
                <span>{{elem.title}}</span>
                <h5 class="card-text text-danger mt-4">Titolo Originale:</h5>
                <span>{{elem.original_title}}</span>
                <h5 class="card-text text-danger mt-4">Lingua:</h5>
                <img :src="`https://www.countryflagicons.com/SHINY/32/${elem.original_language.toUpperCase()}.png`">
                <h5 class="card-text text-danger mt-4">Voto:</h5>
                <span>{{elem.vote_average}}</span>
                


                <!-- <span>{{this.votoFix(elem)}}</span> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CartaFilms',
        props: {
            elem: Object
        },
        beforeUpdate()
        {
            this.fixLingua(this.elem)
        },
        methods: {
                       
            fixLingua(elem)
            {
                if(this.elem.original_language == "en")
                {
                    elem.original_language = "us";
                }
                else if (this.elem.original_language == "sq")
                {
                    elem.original_language = "al";
                }
                else if (this.elem.original_language == "he")
                {
                    elem.original_language = "il";
                }
                else if (this.elem.original_language == "cs")
                {
                    elem.original_language = "cz";
                }
                else if (this.elem.original_language == "ja")
                {
                    elem.original_language = "jp";
                }
                else if (this.elem.original_language == "hi")
                {
                    elem.original_language = "in";
                }
                else if (this.elem.original_language == "sv")
                {
                    elem.original_language = "ch";
                }
                else if (this.elem.original_language == "fa")
                {
                    elem.original_language = "ir";
                }
                else if (this.elem.original_language == "zh")
                {
                    elem.original_language = "cn";
                }
                else if (this.elem.original_language == "ko")
                {
                    elem.original_language = "kr";
                }
                
                else if (this.elem.original_language == "te")
                {
                    elem.original_language = "in";
                }
                else if (this.elem.original_language == "ur")
                {
                    elem.original_language = "pk";
                }
                else if (this.elem.original_language == "da")
                {
                    elem.original_language = "dk";
                }
                else
                {
                    elem.original_language
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card{
        width: calc(100vw / 8);
        height: 100%;

        &:hover .card-body
        {
            display: block;
            background-color: black;
            color: white;
            width: 100%;
        }

        &:hover .card-img-top
        {
            display: none;
        }

        .card-body
        {
            display: none;
            
            
        }


    }
</style>