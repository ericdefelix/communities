<template>
  <section class="hc-section hc-section-articles">
    <div class="container">
      <figure class="hc-homepage-abstract-img"><img src="@/assets/abstract.svg" alt=""></figure>

      <h2 class="text-center text-primary-lighter">Popular articles and highlights</h2>

      <div class="grid grid-2 grid-gap-responsive">
        <div class="hc-spotlights">
          <SpotlightCard v-bind:spotlight="spotlights[0]" />
          <SpotlightCard v-bind:spotlight="spotlights[1]" />
          <SpotlightCard v-bind:spotlight="spotlights[2]" />
        </div>

        <div class="hc-trending-articles">
          <!-- <h5 class="text-primary-lighter">Trending Articles</h5> -->
          <ArticleList v-bind:articles="articles" v-bind:hasPin="hasPin"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpotlightCard from '@/components/SpotlightCard'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'HomeTrending',
  components: {
    SpotlightCard, ArticleList
  },
  data: function () {
    return {
      hasPin: true,
      spotlights: [
        { heading: 'Heading', subheading: 'Subheading', content: 'Content' },
        { heading: 'Heading', subheading: 'Subheading', content: 'Content' },
        { heading: 'Heading', subheading: 'Subheading', content: 'Content' }
      ],
      articles: [
        { heading: 'Getting Started', subheading: 'Installing and Setup', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit incidunt potenti rutrum fugit incidunt potenti rutrum fugit.' },
        { heading: 'Importing a document to a matter', subheading: 'Matter Management', text: 'Feugiat euismod. Rerum elementum eaque sequi earum, quas, dignissimos' },
        { heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' },
        { heading: 'Troubleshooting printer problems', subheading: 'Technical', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' }
      ]
    }
  }
}
</script>
