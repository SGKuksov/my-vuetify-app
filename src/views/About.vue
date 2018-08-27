<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ msg }}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut in aliquam dignissimos quaerat laboriosam eum odio laborum nulla at? Accusamus nemo perspiciatis error nam deleniti enim, mollitia quidem rem ea?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod illo cupiditate voluptate sunt facilis dolorum! Eligendi nostrum possimus consectetur doloremque commodi ad! Impedit porro veritatis tempore voluptatum velit iusto culpa!</p>
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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