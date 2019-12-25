<template>
  <div class="show">
    <button v-on:click = "show = !show">点我</button>
    <transition name = "fade">
      <p v-show = "show" v-bind:style = "styleobj">动画实例</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      show: true,
      styleobj: {
        fontSize: '30px',
        color: 'red'
      }
    }
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
