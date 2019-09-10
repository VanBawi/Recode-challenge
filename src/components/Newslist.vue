<template>
    <div class="newslist">
        <!-- <h1> hello</h1> -->
        <div >
            <div class="col-md-12"
                <ul class="media-list">
                       <!-- <h2> {{source.selected.name}}</h2> -->
                    <li class="media" v-for="article in articles">
                        <div class="col-md-3">
                         
                            <a v-bind:href="article.url" target="_blank">
                                <img class="image-size" v-bind:src="article.urlToImage">
                            </a>
                            <p> {{article.description}}</p>
                        </div>
                        <!-- <div class="media-body"> -->
                            <!-- <h4 class="media-heading">
                                <a v-bind:href="article.url" target="_blank">{{article.title}}</a>
                            </h4> -->
                            <!-- <h5><i>{{article.author}} </i></h5> -->
                            
                        <!-- </div> -->
                    </li>
                </ul>
            </div>
        </div>
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
  .image-size {
    width: 300px;
    height: 300px;
    padding: 10px;

  }
  .media {
    /* border-top: 1px solid lightgray; */
    padding-top: 20px;
  }

</style>