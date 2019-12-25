<template>
  <div class="hello">
    <img src="./../assets/logo.png">
    <img src="http://i2.hdslb.com/bfs/archive/b0be0d74a383b246f842240bf0fd50b4bc8b0dcf.jpg">
    <img src="./../assets/2854437738824178629.jpg">
    <img src="./../../static/img/o_touxiang.jpg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎 快看看 App'
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
