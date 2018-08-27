<template>
  <div class="blog">
    <h1>This is an blog page</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta voluptatibus sit sapiente beatae quisquam inventore temporibus voluptatem neque accusamus cumque optio ipsa, dignissimos saepe commodi totam cum vitae consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta voluptatibus sit sapiente beatae quisquam inventore temporibus voluptatem neque accusamus cumque optio ipsa, dignissimos saepe commodi totam cum vitae consectetur?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta voluptatibus sit sapiente beatae quisquam inventore temporibus voluptatem neque accusamus cumque optio ipsa, dignissimos saepe commodi totam cum vitae consectetur?</p>
  </div>
</template>

<script>
import axios from 'axios';
// import _ from 'lodash'


export default {
  name: 'blog',
  components: {

  },
  data () {
    return {
      info: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      // .catch(error => console.log(error)); // обработка ошибок
  },
  created() {
    // console.log(this.$_.isEmpty(null));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    width: 80%;
    margin: 0 auto;
  }
</style>
