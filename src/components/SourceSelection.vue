<template>
    <div class="sourceselection col-md-12">

        <h4 class="header_box"> </h4>
        <h4 class="logo_text">REALBOX</h4>
     
        <div class="col-md-12">
         <select class="form-control navbar-default" v-on:change="sourceChanged">
          <option value="">Please select news source ...</option>
          <option v-for="source in sources.slice(0, 4)" v-bind:value="source.id">{{source.name}}</option>
        </select>
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
.header_box{
    top: 28px;
    left: 42px;
    width: 26px;
    height: 26px;
    background: #EFCB56 0% 0% no-repeat padding-box;
    opacity: 1;
    float: left;
}
.logo_text{
    top: 28px;
    left: 86px;
    width: 120px;
    height: 24px;
    text-align: left;
    font: Bold 20px/25px Helvetica Neue;
    letter-spacing: 4px;
    color: #707070;
    opacity: 1;
    font-family: Helvetica Neue, Bold;
    font-size: 20px;
    float: left;
    
}
 .navbar-default{
    /* top: 76px; */
    left: 0px;
    width: 307px;
    height: 57px;
    background: #F7F7F7 0% 0% no-repeat padding-box;
    opacity: 1;
    font-family: Helvetica Neue, Bold;
    font-size: 20px;
    clear: both;
 }
</style>