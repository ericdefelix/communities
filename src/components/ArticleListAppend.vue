<template>
  <div class="hc-article-list">
    <div class="hc-article-list-item" v-for="article in articles" v-bind:key="article.id">
      <router-link to="/article" class="hc-article-link">
        <article class="hc-article">
          <p class="hc-article-heading">{{ article.heading }} </p>
          <ul class="hc-card-meta-info ml-auto">
            <li v-for="info in article.metadata" v-bind:key="info.id">{{ info }}</li>
          </ul>
        </article>
      </router-link>
      <ul class="hc-article-link-append">
        <li class="hc-article-link-append-item">
          <i class="fas fa-eye"></i><span>{{ article.activity_count.views }}</span>
        </li>
        <li class="hc-article-link-append-item">
          <i class="fas fa-thumbs-up"></i><span>{{ article.activity_count.likes }}</span>
        </li>
        <li class="hc-article-link-append-item">
          <i class="fas fa-comment-alt"></i><span>{{ article.activity_count.comments }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleListAppend',
  props: {
    articles: Array,
    isSmall: Boolean
  }
}
</script>
