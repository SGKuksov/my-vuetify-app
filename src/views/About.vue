<template>
  <div class="about">
    <h1>This is an about page</h1>

    <header>
      <search></search>
    </header>

    <main>
      <results></results>
    </main>

  </div>
</template>

<script>
import Search from '@/components/Search.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'home',
  components: {
    Search,
    Results
  },
  data () {
    return {
      msg: 'Hello, world'
    }
  }
}
</script>


<style lang="scss" scoped>
  .about {
    width: 80%;
    margin: 0 auto;
  }
</style>