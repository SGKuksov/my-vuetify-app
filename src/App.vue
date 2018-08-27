<template>
  <div id="app">
    <ul class="f-nav" id="nav">
      <li v-for="(item, index) in links"
          :key="item.id"
          :class="{active : activeIndex === index }"
          @click="activeIndex = index">
        <router-link :to="item.url">{{ item.content }}</router-link>
      </li>
    </ul>
    
    <router-view/>
  </div>
</template>

<script>
export default {
  
  data () {
    return {
      links: [
        {url: '/', content: 'Home'},
        {url: '/about', content: 'About'},
        {url: '/blog', content: 'Blog'},
      ],
      items: [
        {id: '1', content: 'Кнопка 1'},
        {id: '2', content: 'Кнопка 2'}
      ],
      activeIndex: 0,
    }
  },
  methods: {
    toggleActive() {
      this.index
    }
  }
}
</script>


<style lang="scss" src="./assets/scss/style.scss"></style>
<style lang="scss" scoped>
  .f-nav {
    // display: flex;

    &__link {
      text-decoration: none;
      color: #000;
    }
  }
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li {
    padding: 10px;

    &:after {
      content: "|";
      position: relative;
      right: -10px;
    }
    &:last-child:after {
      content: "";
    }
  }
  a:hover {
    text-decoration: none;
  }
  .active a {
    padding-bottom: 3px;
    border-bottom: 3px solid currentColor;
  }
</style>



