<template>
  <test-wrapper>
    <Header :data="data"/>
    <div class="test__body">
      <div class="test__prizes">
        <img class="test__prizes-image" src="/img/group-prize.png" alt="prizes image">
      </div>
    </div>
    <footer>
      <footer class="footer">
        <action-button theme="dark" @click="$emit('next', 'start')">{{data.next}}</action-button>
      </footer>
    </footer>
  </test-wrapper>
</template>

<script>
import TestWrapper from './TestWrapper';
import Header from './Header';
import ActionButton from '../ActionButton';

export default {
  name: 'TestStart',
  components: {
    Header,
    TestWrapper,
    ActionButton,
  },
  props: {
    data: {
      type: Object,
      required: true,
    }
  },
};
</script>

<style scoped>
.test__prizes {
  display: grid;
  height: 100%;
  justify-items: center;
}
.test__prizes-image {
  align-self: center;
  width: 90%;
}
</style>