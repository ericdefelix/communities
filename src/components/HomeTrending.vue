<template>
  <section class="hc-section hc-section-articles">
    <div class="container">
      <figure class="hc-homepage-abstract-img"><img src="@/assets/abstract.svg" alt=""></figure>

      <h2 class="text-center text-heading">Popular articles and highlights</h2>

      <div class="grid">
        <div class="hc-spotlights">
          <SpotlightCard v-bind:content="spotlights[0]" />
          <SpotlightCard v-bind:content="spotlights[1]" />
          <SpotlightCard v-bind:content="spotlights[2]" />
        </div>

        <div class="hc-trending-articles">
          <h4 class="text-heading">Popular Articles</h4>
          <ArticleList v-bind:articles="articles"/>
          <a href="#" class="btn btn-default">View more articles</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpotlightCard from '@/components/SpotlightCard'
import ArticleList from '@/components/ArticleList'

import { spotlights, trending } from '@/dummy-data/dummyData'

export default {
  name: 'HomeTrending',
  components: {
    SpotlightCard, ArticleList
  },
  data: function () {
    return {
      spotlights: spotlights,
      articles: trending
    }
  }
}
</script>
