<template>
  <div class="hc-article-list" :class="{ 'hc-article-pinned': hasPin }">
    <a href="#" class="hc-article-link" v-for="content in articles" v-bind:key="content.id">
      <ArticleItem v-bind:content="content" v-bind:isLarge="articles.isLarge"/>
    </a>
  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    articles: Array,
    hasPin: Boolean
  },
  data: () => {
    return this.hasPin
  }
}
</script>
