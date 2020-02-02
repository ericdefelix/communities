<template>
  <section class="hc-section hc-section-companion">
    <div class="container">
      <h2 class="text-heading text-center">Companion Products</h2>

      <div class="grid">
        <div class="hc-homepage-tabs hc-trending-articles">
          <div class="nav flex-column nav-pills hc-article-list-lg" role="tablist" aria-orientation="vertical">
            <span class="hc-article-link hc-card hc-card-hover" v-bind:class="{ 'active' : index == 0 }" role="tab" aria-labelledby="index" v-for="(nav, index) in companions" v-bind:key="nav.id">
              <ArticleItem v-bind:content="nav.article_item"/>
            </span>
          </div>
        </div>
        <div class="hc-homepage-content">
          <div class="tab-content">
            <div class="tab-pane fade" v-bind:class="{ 'show active' : index == 0 }" role="tabpanel" aria-labelledby="index" v-for="(list, index) in companions" v-bind:key="list.id">
              <h4 class="text-heading">Trending Articles for ByLawyers</h4>
              <ArticleList v-bind:articles="list.article_list"/>
              <a href="#" class="btn btn-default">View more articles</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import ArticleList from '@/components/ArticleList'

import { companions } from '@/dummy-data/dummyData'

export default {
  name: 'HomeCompanion',
  components: {
    ArticleItem, ArticleList
  },
  props: {
    content: Object
  },
  data: function () {
    return {
      companions: companions
    }
  }
}
</script>
