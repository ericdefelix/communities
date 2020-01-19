<template>
  <div class="hc-badge" v-bind:class="badgeTheme">
    <a v-if="content.isLink" href="#">{{ content.text }}</a>
    <span v-else>{{ content.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Badge',
  props: {
    content: Object
  },
  computed: {
    badgeTheme: function () {
      return {
        'hc-badge-green': this.content.theme === 'green',
        'hc-badge-default': this.content.theme === 'default'
      }
    }
  }
}
</script>
