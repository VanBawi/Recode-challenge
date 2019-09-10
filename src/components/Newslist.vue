<template>
    <div class="newslist">
        <b-container md="12" class="bv-news-row ">  
            <b-row>
                <b-col md="3" class="card" v-for="article in articles.slice(0, 6)">    
                    <a v-bind:href="article.url" target="_blank">
                        <b-img class="image-size" fluid v-bind:src="article.urlToImage"></b-img>
                    </a>
                    <p> {{article.description.slice(0, 120)}}</p>
                </b-col>
            </b-row>
        </b-container>  
    </div>
</template>

<script>
export default {
    name: 'newslist',
    props: ['source'],
    data () {
        return {
            articles: []
        }
    },
    methods: {
        updateSource: function (source) {
            this.$http.get('https://newsapi.org/v1/articles?source=' + source + '&apiKey=ba8b2832fe0c4276bb3703e6de6b66a7')
            .then(response => {
                this.articles = response.data.articles;
            });
        }
    },
    created: function () {
        this.updateSource(this.source);
    },
    watch: {
        source: function (val) {
            this.updateSource(val);

        }
    }
}
</script>

<style scoped>

.card{
    margin: 10px;
}
</style>