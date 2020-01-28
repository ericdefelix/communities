<template>
  <a href="#" class="hc-article-link hc-card hc-card-line hc-card-hover hc-spotlight-card">
    <figure class="hc-spotlight-card-thumbnail" v-bind:style="{'background-image': 'url(' + require('@/assets/'+ content.url) + ')'}"></figure>
    <div class="hc-card-body">
      <ArticleItem v-bind:content="content" />
    </div>
  </a>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'

export default {
  name: 'spotlightComponent',
  props: {
    content: Object
  },
  components: {
    ArticleItem
  }
}
</script>
