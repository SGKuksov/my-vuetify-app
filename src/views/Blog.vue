<template>
  <div class="blog">
    <h1>This is an blog page</h1>

    {{ displayPost.length }}

    <pagination :current="currentPage" @page-changed="getPost()"></pagination>

    <div class="posts">
      <post-item
        v-for="post in displayPost"
        :key="post.id"
        msg="Welcome to Your Vue.js App"       
        :title="post.title"                     
        :likes="countLikes"></post-item>
    </div>

  </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue'
import pagination from '@/components/pagination.vue'
import { mapActions } from 'vuex'

export default {
  name: 'blog',
  components: {
    PostItem,
    pagination 
  },
  data () {
    return {
      countLikes: 100,
      someTitle: 'Lorem Ipsum',
      currentPage: 1
    }
  },
  methods: {
    ...mapActions({
      getPost: 'LOAD_POST'
    }),
  },

  computed: {
    displayPost () {
      return this.$store.state.posts
    },
  },
  created() {
    this.getPost()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .blog {
    width: 80%;
    margin: 0 auto;
  }
  .posts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
  }
</style>
