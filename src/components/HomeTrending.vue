<template>
  <section class="hc-section hc-section-articles">
    <div class="container">
      <figure class="hc-homepage-abstract-img"><img src="@/assets/abstract.svg" alt=""></figure>

      <h2 class="text-center text-primary-lighter">Popular articles and highlights</h2>

      <div class="grid">
        <div class="hc-spotlights">
          <SpotlightCard v-bind:content="spotlights[0]" />
          <SpotlightCard v-bind:content="spotlights[1]" />
          <SpotlightCard v-bind:content="spotlights[2]" />
        </div>

        <div class="hc-trending-articles">
          <!-- <h5 class="text-primary-lighter">Trending Articles</h5> -->
          <ArticleList v-bind:articles="articles"/>
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
      spotlights: [
        { isLarge: true, heading: '2020 Summit', subheading: 'Events', text: 'Rerum elementum eaque sequi earum', url: 'sample1.jpg' },
        { isLarge: true, heading: 'Nothing Else Matters', subheading: 'Matter Management', text: 'Dio porro ullam incidunt potenti', url: 'sample2.jpg' },
        { isLarge: true, heading: 'ByLawyers 2.0', subheading: 'Companion Apps', text: 'Ullam incidunt potenti rutrum', url: 'sample3.jpg' }
      ],
      articles: [
        { isLarge: true, heading: 'Getting Started', subheading: 'Installing and Setup', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit incidunt potenti rutrum fugit incidunt potenti rutrum fugit.' },
        { isLarge: true, heading: 'Importing a document to a matter', subheading: 'Matter Management', text: 'Feugiat euismod. Rerum elementum eaque sequi earum, quas, dignissimos' },
        { isLarge: true, heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' },
        { isLarge: true, heading: 'Troubleshooting printer problems', subheading: 'Technical', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' }
      ]
    }
  }
}
</script>
