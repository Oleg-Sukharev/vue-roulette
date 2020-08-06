<template>
  <header class="header">
    <p class="header__motivation">{{currentTopic}} {{topic}} </p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    topic: {
      type: String,
      required: true,
      default: 3
    },
    currentTopic: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
/* Header Motivation */
.header__motivation {
  margin-top: 0;
  margin-bottom: 0.7rem;
  line-height: 1.1;
  color: #FFFFFF;
}
@media (min-width: 600px) {
  .header__motivation {
    font-size: 1.9rem;
  }
}
@media (max-width: 599.99px) {
  .header__motivation {
    font-size: 1rem;
  }
}
</style>