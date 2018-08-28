<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <h1>This is an home page</h1>
    <h2>{{ msg }}</h2>

    <input v-model="message">
    <p>{{ message }}</p>

    <!-- <ul class="grid">
      <li class="grid__item post"
          v-for="post in displayPost"
          :key="post.id">
        <img src="https://picsum.photos/150/150/?random" width="150" height="150" alt="post.title">

        <div class="post__info">
          <h2>{{ post.title }}</h2>
          <span>{{ post.userId }}</span>
          <span>{{ post.id }}</span>
          <p>{{ post.body }}</p>
        </div>
      </li>
    </ul> -->

    <!-- <ul class="grid">
      <li class="grid__item"
          v-for="item in displayInfo"
          :key="item.id">
        <article>
          <img src="https://picsum.photos/300/200?image=10" alt="">
          <p>width: {{item.width}} </p>
          <p>height: {{item.height}} </p>
          <p>filename: {{item.filename}} </p>
          <p>id: {{item.id}} </p>
          <p>author: {{item.author}} </p>
          <p>author_url: {{item.author_url}} </p>
          <p>post_url: {{item.post_url}} </p>
        </article>
      </li>
    </ul> -->

    <div class="grid">
      <b-card :title="item.title"
              img-src="https://picsum.photos/600/300/"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
              v-for="(item, index) in art"
              :key="index">
        <p class="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit nisi ducimus sunt dolores eaque praesentium dolor, possimus, repellendus quia amet libero quo est laudantium dignissimos ea minus perspiciatis facilis!
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapActions } from 'vuex'


export default {
  name: 'home',
  components: {

  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      art: [
        {title: "Card Title 1"},
        {title: "Card Title 2"},
        {title: "Card Title 3"},
        {title: "Card Title 4"},
      ],
      search: '',
    }
  },
  created() {
    // window.console.log(this.$_.isEmpty(null));
  },
  computed: {
    message: {
      get () {
        return this.$store.state.message
      },
      set (value) {
        this.$store.commit('updateMessage', value)
      }
    },
    displayInfo () {
      return this.$store.state.info
    },
  },
  methods: {
    ...mapActions({
      load: 'LOAD_DATA'
    }),
  },
  mounted() {
    this.load()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
  .home {
    width: 80%;
    margin: 0 auto;
  }
  .grid {
    text-align-last: left;
    display: flex;
    flex-wrap: wrap;

    &__item {
      list-style: none;
      margin: 25px;

    }

  }
  .post {
    display: flex;
    border: 1px solid #000;
    width: 100%;
    margin: 5px;

    img {
      width: 150px;
      height: 150px;
    }

    &__info {
      flex: 1;
      padding: 10px;
    }
  }
  article {
    margin-right: 10px;
  }

</style>
