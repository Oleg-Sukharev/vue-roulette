<template>
  <div class="roulette-screen">
    <div class="roulette__text">
      <p class="roulette__motivation">Крутите колесо чтобы выбрать тему викторины</p>
    </div>
    <div class="roulette__frame">
      <ul :class="rouletteClasses" :style="rouletteStyles">
        <li v-for="(topic, index) of topics" :key="index + 1" class="roulette-item">
          <img class="roulette__topic-image" :src="topic.topicImage" alt="">
        </li>
      </ul>
    </div>
    <div class="roulette__controls">
      <action-button theme-type="light" @click="rotationRoulette">Крутить</action-button>
    </div>
  </div>
</template>

<script>
import { randomIndex } from '../helpers';
import ActionButton from './ActionButton';

export default {
  name: 'RouletteView',
  components: {
    ActionButton,
  },
  props: {
    topics: {
      type: Array,
      required: true,
    },
    animationDuration: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      currenttopicIndex: -1,
      animationRun: false,
      popupShow: false,
    };
  },
  computed: {
    rouletteClasses() {
      return ['roulette', this.currenttopicIndex !== -1 ? `number-${this.currenttopicIndex + 1}` : ''];
    },
    rouletteStyles() {
      return {
        animationDuration: `${this.animationDuration}s`,
      };
    },
  },
  methods: {
    rotationRoulette() {
      if (this.animationRun) return;
      this.animationRun = true;
      this.currenttopicIndex = randomIndex(this.topics.length);
      setTimeout(() => {
        this.animationRun = false;
        this.$emit('start',this.currenttopicIndex);
      }, this.animationDuration * 1000);
    },
  },
};
</script>

<style lang="scss">
  .roulette-screen {
    max-width: 100%;
    overflow-x: hidden;
  }

  .roulette {
    width: 308px;
    height: 308px;
    padding: 0;
    margin: 0;
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    counter-reset: num;
    background:
      center / contain no-repeat url("../../public/img/roulette__table.png");
    animation-timing-function: cubic-bezier(0,.4,.4,1.04);
    animation-fill-mode: forwards;
    animation-iteration-count: 1;

    @for $i from 1 through 4 {
      &.number-#{$i} {
        animation-name: 'number-#{$i}';
      }
    }
  }

  .roulette-item {
    position: absolute;
    top: 30px;
    right: 0;
    left: 0;
    display: block;
    margin: auto;
    width: 100px;
    height: 124px;
    transform-origin: 50px 124px;

    @for $i from 1 through 4 {
      &:nth-of-type(#{$i}) {
        transform: rotate(#{$i * 90deg});
      }
    }
  }

  @for $d from 1 through 4 {
    @keyframes number-#{$d} {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(#{360 * 3 - 90 * $d}deg);
      }
    }
  }

  .roulette__controls {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .roulette__button {
    background-color: #0051EF;
    color: #FFFFFF;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 1rem;
    border: none;
  }
  .roulette__frame {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: center / contain no-repeat url("../../public/img/roulette-field.png");
    overflow: hidden;
    &:after {
      content: "";
      display: block;
      margin: auto;
      width: 72px;
      height: 75px;
      background: center / contain no-repeat url("../../public/img/roulette__arrow.png");
      position: absolute;
      top: -16px;
      right: -2px;
      left: 0;
    }
  }
  .roulette__topic-image {
    display: block;
    max-width: 63%;
    margin: 0 auto;
    max-height: 70px;
  }

  .roulette__topic-text-position {
    height: 100%;
    display: flex;
    justify-content: center;
  }

  .roulette__topic-text {
    writing-mode: tb-rl;
    transform: rotate(180deg);
    font-size: 0.8rem;
    font-weight: 600;
    text-align: end;
    text-transform: uppercase;
    color: #FFFFFF;
  }

  .roulette__motivation {
    margin-top: 0;
    margin-bottom: 0.5rem;
    line-height: 1.1;
    text-transform: uppercase;
    color: #96B9FF;
    text-align: center;
  }
  
  @media (max-width: 599.99px) {
    .roulette__motivation {
      font-size: 1rem;
    }
  }

  .roulette__reward {
    margin-top: 0;
    font-weight: 600;
    line-height: 1.1;
    text-transform: uppercase;
    color: #96B9FF;
    text-align: center;
  }
  @media (max-width: 599.99px) {
    .roulette__reward {
      font-size: 1.4rem;
    }
  }
</style>