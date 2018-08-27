<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/img/logo.png"> -->
    <h1>This is an home page</h1>
    <h2>{{ msg }}</h2>

    <input v-model="message">
    <p>{{ message }}</p>

    <ul class="grid">
      <li class="grid__item"
          v-for="item in filtereditems"
          :key="item.id">
        <article>
          <img src="https://picsum.photos/300/200?image=10" alt="">
          <!-- <p>width: {{item.width}} </p>
          <p>height: {{item.height}} </p> -->
          <!-- <p>filename: {{item.filename}} </p> -->
          <!-- <p>id: {{item.id}} </p> -->
          <p>author: {{item.author}} </p>
          <!-- <p>author_url: {{item.author_url}} </p>
          <p>post_url: {{item.post_url}} </p> -->
          <!-- {{item,searchQuery}} -->
        </article>
      </li>
    </ul>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum dicta voluptatibus sit sapiente beatae quisquam inventore temporibus voluptatem neque accusamus cumque optio ipsa, dignissimos saepe commodi totam cum vitae consectetur?</p>



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
    filtereditems: function(){
        return this.displayInfo.filter((item) => {
            return item.author.match(this.search);
        });
    }
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
  article {
    margin-right: 10px;
  }

</style>
