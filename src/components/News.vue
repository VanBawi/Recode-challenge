<template>  
    <div>
        <b-container md="12" class="bv-news-row">  
            <b-row>
                <!--transforming images into links -->
                <b-col md="4" class="object_padding" v-for="article in articles.slice(0, 6)" v-bind:key="">    
                    <a v-bind:href="article.url" target="_blank">
                        <b-img class="image-size" fluid v-bind:src="article.urlToImage"></b-img>
                    </a>
                    <!--media title and description minimized -->
                    <div class="text_body">
                        <h5><strong> {{article.title.slice(0, 50) }}</strong> </h5>
                        <p> {{article.description.slice(0, 90)}}</p>
                    </div>
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
            articles: [] //will return array of articles
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
    // this section displays the news
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
@import url('https://fonts.googleapis.com/css?family=Helvetica+Neue');

/* image styling section */
.image-size{
    width: 100%;
    object-fit: cover;
}
.object_padding{
    margin-bottom: 30px;
    
}

/* all text styling section */
.text_body{
    border: 0.5px solid lightgray;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;

}
h5, p{
    margin: 0px 17px 10px 17px;
}

h5{
    text-align: left;
    font: Bold 20px/25px Helvetica Neue;
    letter-spacing: 0.4px;
    color: #555555;
    opacity:1;
    font-size: 20px;
    padding-top: 10px;
}
p{
    text-align: left;
    font: Regular 16px/18px Helvetica Neue;
    letter-spacing: 0.32px;
    color: #555555;
    opacity: 1;
}
</style>