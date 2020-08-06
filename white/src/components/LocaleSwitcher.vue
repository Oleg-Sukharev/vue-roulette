<template>
<ul>
  <li 
    v-for="locale in supportedLocales" :key="locale" @click="switchLocale(locale)"
    :class="[theme,locale === $i18n.locale ? 'active' : '']">
    {{locale}}
  </li>
</ul>
</template>

<script>
import { Trans } from '@/plugins/Translation'

export default {
    name: 'LocaleSwitcher',
    props: {
    theme: {
      type: String,
    },
  },
  computed: {
    supportedLocales () {
      return Trans.supportedLocales
    },
  },
  methods: {
    switchLocale(locale) {
    if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale
        // const to = this.$router.resolve({ params: {locale} })
        // return Trans.changeLocale(locale).then(() => {
        //   this.$router.push(to.location)
        // })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

ul{
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 3;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    margin: -5px;
}
li {
  text-decoration: underline;
  color: #459CE7;
  cursor: pointer;
  margin: 5px;
  font-size: 20px;
  text-decoration: none;
  color: #000;
  &.dark{
    color: #fff;
    &.active{
        color: #96B9FF;
    }
  }
  &.active{
    color: #907EFF;
    cursor: default;
  }
}
</style>
