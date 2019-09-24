
<template>
    <div>
        <h4 class="header_box"> </h4>
        <h3 class="logo_text">REALBOX</h3> 

        <div class="navbar_links">
          <navbar class="nav">
              <a href="#" v-on:click="newsDisplay" v-bind:class="'red'" class="d-flex list-item" >
                <option v-for="source in sources.slice(0, 4)" v-bind:value="source.id">{{source.name}}</option>
              </a>     
          </navbar>
            <hr> 
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
        sources: [], //this will return array of sources
        source: ''
        }
        
    },
    methods: {
        newsDisplay: function (e) {
            for (var i=0; i< this.sources.length; i++) {
                if (this.sources[i].id ==e.target.value){
                    this.source = this.sources[i];
                }
            }
            this.$emit('newsDisplay', e.target.value);
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

/* heading logo and text styling section */
.header_box{
    top: 28px;
    margin-left: 12px;
    width: 26px;
    height: 26px;
    background: #EFCB56 0% 0% no-repeat padding-box;
    opacity: 1;
    float: left;
}
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


/* navigation, nav and text styling section */
 .navbar_links{
    clear: both;
 }

 option{
    text-align: center;
    width: 230px;
    height: 57px;
    background: #F1F1F1 0% 0% no-repeat padding-box;
    text-decoration: none;
    font: Bold 20px/25px Helvetica Neue;
    letter-spacing: 0.4px;
    color: #707070;
    padding-top: 15px;
 }
 option:hover{
    background-color: white;
    padding-bottom: 4px solid #EFCB56; 
 }
option:active{
    background-color: white;
}
a:active, option:active{
     padding-bottom: 20px solid #EFCB56;
     text-decoration: none;
 }

a{
    text-decoration: none;
}
 hr{
    margin-top:-0px;
    -moz-box-shadow:0 1px 3px 0.5px rgba(182, 182, 182, 0.75);
    -webkit-box-shadow: 0 1px 3px 0.5px rgba(182, 182, 182, 0.75);
    box-shadow: 0 1px 3px  rgba(167, 167, 167, 0.75);
 }


/* heading text for active News section */
 p{
    text-align: left;
    font: Bold 50px/61px Helvetica Neue;
    letter-spacing: 1px;
    color: #707070;
    opacity: 1;
    margin: 10px 0px 10px 0px;
 }

</style>


