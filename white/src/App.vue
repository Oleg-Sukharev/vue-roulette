<template>
  <div id="app">
    <div :class="['app', `app--${theme}`, {blur: blur}]">
      <div class="app-vertical-position">
        <div class="app-horizontal-position">
          <component
            :is="currentComponent"
            v-bind="componentProps"
            @start="startGameHandler"
            @restart="restartHandler"
            />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './assets/data.json';
import RouletteView from './components/RouletteView';
import TestView from './components/TestView';
import { toLineArray,replaceData,getBrowserLocales } from './helpers';

export default {
  name: 'App',
  components: {
    TestView,
    RouletteView,
  },
  data() {
    return {
      theme: 'dark',
      blur: false,
      topics: data.topics,
      data: data,
      topicsImg: [
        "./img/topics/maths.png",
        "./img/topics/nature.png",
        "./img/topics/geography.png",
        "./img/topics/baking.png"
      ],
      game: {
        isPlaying: false,
        topic: null,
      }
    };
  },
  computed: {
    currentComponent() {

    let textArray =  toLineArray(data);
    console.log(textArray);


    function translateAll(text_array) {
        // ...  // обращение к сервису перевод 
        // return {<old text> : <new text>, 'Крутить' : 'spin', ...}
    }

    const muck = {
      'Крутите колесо чтобы выбрать тему викторины' : 'test',
      "Математика": 'test',
    }
    console.log(getBrowserLocales({languageCodeOnly: true}))

    const dataTranslated = replaceData(data,muck);
    console.log(dataTranslated,'result')

      if(this.game.isPlaying ){
        this.theme = 'light';
        return 'test-view';
      }else{
        this.theme = 'dark';
        return 'roulette-view';
      }

    },
    componentProps() {
      return this.game.isPlaying ? { game: this.game,data} 
      : { 
        topics: this.topics,
        spin: this.data.spin,
        spinQuiz: this.data.spinQuiz,
        topicsImg: this.topicsImg
      };
    }
  },

  methods: {
    portalHandle(newContent) {
      this.blur = newContent;
    },
    startGameHandler(index){
      this.game.isPlaying = true;
      this.game.topic = data.topics[index];
    },
    restartHandler(){
      this.game.isPlaying = false;
      this.game.topic = null;
    },
  }
}
</script>

<style>
  .app {
    position: relative;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: minmax(auto, 630px) 1fr 110px;
    overflow: auto;
  }

  .app--dark {
    background-color: #18004D;
  }

  .app--light {
    background-color: #E5E5E5;
  }

  /* App Winners */
  .app__winners  {
    max-width: 570px;
    margin: 0 auto;
    overflow-y: hidden;
  }
  .app-horizontal-position{
    padding:0 10px;
  }
  @media (min-width: 600px) {
    .app__winners {
      width: 100%;
    }
  }
  @media (max-width: 599.99px) {
    .app__winners {
      width: 80%;
    }
  }

  /* App Test */
  .app-horizontal-position {
    margin-left: auto;
    margin-right: auto;
    display: grid;
    height: 100%;
  }

  @media (max-width: 599.99px) {

  }

  .app-vertical-position {
    position: relative;
    margin-top: 10%;
  }

  .blur {
    filter: blur(2px);
  }

  .fade-enter-active, .fade-leave-active {
    opacity: 100%;
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .dummy {
    margin-top: 10px;
  }
</style>
