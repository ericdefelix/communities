<template>
  <article class="hc-article">
    <small class="hc-article-subheading" v-if="content.subheading">{{ content.subheading }}</small>
    <h6 class="hc-article-heading">{{ content.heading }}</h6>
    <p class="hc-article-text" v-if="content.text">{{ content.text }}</p>
  </article>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    content: Object,
    isLarge: Boolean
  }
}
</script>
