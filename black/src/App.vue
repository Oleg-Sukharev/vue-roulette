<template>
  <div id="app">
    <div :class="['app', `app--${theme}`, {blur: blur}]">
      <div class="app-vertical-position">
        <div class="app-horizontal-position" :style="{maxWidth: appState === 0 ? '100%' : '80%'}">
          <component
            :is="currentComponent"
            v-bind="{...componentProps,data}"/>
        </div>
      </div>
      <div class="dummy"></div>
      <div class="app__winners">
        <winners-ribbon
          :winners="winners"
          :flip-interval="3000"
          :data="data"
          :theme="theme"/>
      </div>
    </div>
    <portal-target name="popup" @change="portalHandle"/>
  </div>
</template>

<script>
import winners from './assets/winners.json';
import prizes from './assets/prizes.json';
import data from './assets/data.json';


import RouletteView from './components/RouletteView';
import TestView from './components/TestView';
import WinnersRibbon from './components/WinnersRibbon';

const ROULETTE = 0;
const TEST = 1;

export default {
  name: 'App',
  components: {
    WinnersRibbon,
    TestView,
    RouletteView,
  },
  data() {
    return {
      theme: 'dark',
      blur: false,
      appState: ROULETTE,
      winners,
      prizes,
      data,
    };
  },
  computed: {
    currentComponent() {
      switch (this.appState) {
        case ROULETTE:
          this.theme = 'dark';
          return 'roulette-view';
        case TEST:
          this.theme = 'light';
          return 'test-view';
      }
    },
    componentProps() {
      switch (this.appState) {
        case ROULETTE:
          return {
            prizes,
          };
        case TEST:
          return {
            questions: data.questions,
            prizes,
          };
      }
    },
  },
  mounted() {
    const APP_MODE = process.env.VUE_APP_MODE;

    if (APP_MODE === 'roulette') {
      this.appState = ROULETTE;
    }
    else if (APP_MODE === 'quiz') {
      this.appState = TEST;
    }
  },
  methods: {
    portalHandle(newContent) {
      this.blur = newContent;
    }
  }
}
</script>

<style>
.app {
  position: relative;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: minmax(auto, 550px) 1fr 110px;
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
  .app-horizontal-position {
    max-height: 570px;
  }
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
