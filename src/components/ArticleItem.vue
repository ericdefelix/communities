<template>
  <article class="hc-article" v-bind:class="{'hc-article-lg': content.isLarge}">
    <small class="hc-article-subheading" v-if="content.subheading">{{ content.subheading }}</small>
    <p class="hc-article-heading">{{ content.heading }}</p>
    <summary class="hc-article-tagline" v-if="content.text">{{ content.text }}</summary>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    content: Object
  }
}
</script>
