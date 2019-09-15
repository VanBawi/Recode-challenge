<template>
  <div id="app">
   <Source v-on:newsDisplay="newsDisplay"> </Source>
   <News v-bind:source="source"> </News>
  </div>
</template>

<script>
import Source from './components/Source'
import News from './components/News'

export default {
  name: 'app',
  components: {
    Source,
    News
  },
  data () {
    return {
      source: ""
    }
  },
  methods: {
    newsDisplay: function (source) {
      this.source = source;
    }
  }
}
</script>

<style>

</style>
