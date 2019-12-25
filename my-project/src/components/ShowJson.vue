<template>
  <div class="showJson">
    <div
      v-for="site in info"
    >
      {{ site.name }}
    </div>
    <p>json data</p>
  </div>
</template>

<script>
export default {
  name: 'showJson',
  data () {
    return {
      info: null
    }
  },
  mounted: function () {
    this.$ajax
      .get('/static/json/json_demo.json')
      .then(response => (
        this.info = response.data.sites
    )
  )
  .catch(function (error) { // 请求失败处理
      console.log(error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
