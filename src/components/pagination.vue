
<template>
  <div class="pagination">
    <ul>
      <li><a href="#" @click="changePage(prevPage)"> Prev </a></li>
      <li><a href="#" @click="changePage(nextPage)"> Next </a></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

// <pagination 
//   msg="Welcome to Your Vue.js App"       // Входящий параметр msg - статичная строка
//   :title="someTitle"                     // Входящий параметр title - переменная со строкой
//   :likes="countLikes"                    // Входящий параметр likes - переменная со числом или можно передать число
//   :isPublished="false"                   // Указание входного параметра без значения будет означать true
//   :commentIds="[234, 266, 273]"          // Входящий параметр commentIds - массив или можно передать переменной
//   :author="{key: 'val', key1: 'val1'}"   // Входящий параметр author - объект или можно передать переменной
//   @pagination-event="someEventFunction"// Исходящее событие с передачей параметра this.dataEvent
//   :is="currentTabComponent"              // Динамическое переключение компонентов
// />

export default {
  name: 'pagination',
  // inheritAttrs: false,                   // Запрет на наследование атрибутов. v-bind="$attrs" вы можете вручную определять к какому элементу должны применяться атрибуты (подробнее: https://clck.ru/EBfJv)
  props: {
    current: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      dataEvent: [],                        // Статичные данные которые вернуться из компонента
      dataTitle: this.propstitle,           // Входящие данные переданы во внутреннюю переменную компонента. 1й вариант Не изменяемости входящих данных
    }
  },
  methods: {
    changePage(page) {
      this.$emit('page-changed', page)
    }
  },
  computed: {
    nextPage() {
      return this.current + 1
    },
    prevPage() {
      return this.current - 1
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .pagination {
    
    ul {
      width: 50%;
      list-style: none;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    li {}
    a {
      padding: 5px 10px;
      border: 1px solid #000;
      color: #000;
      text-decoration: none;

      &:hover {
        background-color: #ccc;
      }
    }
  }
</style>