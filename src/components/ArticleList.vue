<template>
  <div class="hc-article-list">
    <router-link to="/article" class="hc-article-list-item hc-article-link" v-for="content in articles" v-bind:key="content.id">
      <ArticleItem v-bind:content="content" />
    </router-link>
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
    articles: Array
  }
}
</script>
