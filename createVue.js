'use strict';

// Требует node.js и пакета mkdirp

const fs = require('fs');                // будем работать с файловой системой
const mkdirp = require('mkdirp');        // зависимость, должна быть установлена (см. описание выше)

let blockName = process.argv[2];          // получим имя блока
let defaultExtensions = ['vue']; // расширения по умолчанию
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if(blockName) {

  let dirPath = './src/components/'; // полный путь к создаваемой папке блока
  mkdirp(dirPath, function(err){ // создаем

    // Если какая-то ошибка — покажем
    if(err) {
      console.error('Отмена операции: ' + err);
    }

    // Нет ошибки, поехали!
    else {
      console.log('Создание папки ' + dirPath + ' (создана, если ещё не существует)');

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach(function(extention){

        let filePath = dirPath + blockName + '.' + extention; // полный путь к создаваемому файлу
        let fileContent = `
<template>
  <div class="${blockName}">
    <h1 class="${blockName}__title">{{ msg }}</h1>
    <p class="${blockName}__text">{{ msg }}</p>
  </div>
</template>

<script>
// import axios from 'axios'; // Подключение axios
// import _ from 'lodash' // Подключение lodash
// @ is an alias to /src
// import ${blockName} from '@/components/${blockName}.vue' // Подключение компонентов

export default {
  name: '${blockName}',
  components: {
    // ${blockName} // Регистрация компонентов
  },
  data () {
    return {
      info: null,
      title: 'Hello, ${blockName}',
      msg: 'Lorem ipsum'
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .${blockName} {

    &__title {}
    &__text {}
  }
</style>`; // будущий контент файла

        let fileCreateMsg = ''; // будущее сообщение в консоли при создании файла

        // Создаем файл, если он еще не существует
        if(fileExist(filePath) === false && extention !== 'img') {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err) {
              return console.log('Файл НЕ создан: ' + err);
            }
            console.log('Файл создан: ' + filePath);
            if(fileCreateMsg) {
              console.warn(fileCreateMsg);
            }
          });
        }
      });
    }
  });
}
else {
  console.log('Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}
