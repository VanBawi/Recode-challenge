
<template>
    <div class="">
        <div >
            <h4 class="header_box"> </h4>
            <h3 class="logo_text">REALBOX</h3>
        </div>
         
        <div class="navbar_links">
          <b-card-header header-tag="nav">
            <b-nav card-header >
                <select class="form-control" v-on:click="sourceChanged">
                    <option active v-for="source in sources.slice(0, 4)" v-bind:value="source.id">{{source.name}}</option >
                </select>  
            </b-nav>
          </b-card-header>
        </div>
        <div class="container">
            <p>{{source.name}}</p>
        </div>
    </div>
 
</template>

<script>
export default {
    name: 'sourceselection',
    data () {
        return {
        sources: [],
        source: ''
        }
    },
    methods: {
        sourceChanged: function (e) {
            
            for (var i=0; i< this.sources.length; i++) {
                if (this.sources[i].id ==e.target.value){
                    this.source = this.sources[i];
                }
            }
            this.$emit('sourceChanged', e.target.value);
        }
    },
    created: function () {
        this.$http.get('https://newsapi.org/v1/sources?language=en')
        .then (response => {
            this.sources =response.data.sources;
        });
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Helvetica+Neue');

h4 {
    margin: 20px;
}
h3{
    margin-top: 22px;
    font-size: 20px;
    float: left;
    text-align: left;
    font: Bold 20px/25px Helvetica Neue;
    letter-spacing: 4px;
    color: #707070;
    opacity: 1;
    font-family: Helvetica Neue, Bold;
}

.header_box{
    top: 28px;
    margin-left: 12px;
    width: 26px;
    height: 26px;
    background: #EFCB56 0% 0% no-repeat padding-box;
    opacity: 1;
    float: left;
}

 .navbar_links{
    clear: both;
 }
 p{
    text-align: left;
    font: Bold 50px/61px Helvetica Neue;
    letter-spacing: 1px;
    color: #707070;
    opacity: 1;
    margin: 10px 0px 10px 0px;
 }
</style>
