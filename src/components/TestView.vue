<template>
  <transition name="fade-in-screen" mode="out-in" class="test-screen-hide">
    <component
      :is="currentScreen"
      v-bind="currentScreenProps"
      @next="nextHandler"
      @test-result="testResultHandler"
      @restart='restartHandler'
      />
  </transition>
</template>

<script>
import TestingScreen from './Test/TestingScreen';
import TestFinishScreen from './Test/TestFinishScreen';

export default {
  name: 'Test',
  components: {
    TestingScreen,
    TestFinishScreen,
  },
  props: {
    game: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      testState: 0,
      testResult: 0,
    };
  },
  computed: {
    currentScreen() {
      switch (this.testState) {
        case 0:
          return 'TestingScreen';
        case 1:
          return 'TestFinishScreen';
      }
    },
    currentScreenProps() {
      switch (this.testState) {
        case 0:
          return {
            questions: this.game.topic.questions,
            topic: this.game.topic.topicName,
            currentTopic: this.data.currentTopic,
            next:  this.data.next
          };
        case 1:
          return {
            externalLink: '#',
            testResult: this.testResult,
            data: this.data.finish
          };
      }
    },
  },
  methods: {
    nextHandler(e) {
      this.testState++;
    },
    testResultHandler(result) {
      const reducer = (acc, key) => result[key] === 'success' ? ++acc : acc;
      this.testResult = Object.keys(result).reduce(reducer, 0);
    },
    restartHandler() {
      this.$emit('restart');
    },
  },
};
</script>

<style>
.test__body {
  margin-top: 1rem;
}

.footer {
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.fade-in-screen-enter-active, .fade-in-screen-leave-active {
  transition: all 0.2s;
}
.fade-in-screen-leave-to {
  transform: scale(0.9) translateX(-120%);
}
.fade-in-screen-enter {
  transform: scale(0.9) translateX(100%);
}
.test-screen-hide:after  {
  content: "";
  position: absolute;
  top: 5%;
  height: 90%;
  width: 15px;
  transition: all 0.2s;
  background-color: #907EFF;
  left: 0;
  border-top-right-radius: 21px;
  border-bottom-right-radius: 21px;
}
</style>