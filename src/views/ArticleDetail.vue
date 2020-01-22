<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid grid-aside-main">
        <aside class="hc-aside">
          <div class="hc-aside-trending mb-5">
            <h6 class="text-primary text-bold">Related Articles</h6>
            <ArticleList v-bind:articles="articles" v-bind:isSmall="true"/>
          </div>

          <SpotlightCard v-bind:spotlight="spotlights[0]" />
        </aside>
        <div class="hc-main">
          <div class="hc-article-title-container">
            <small class="hc-subheading text-uppercase text-bold">Matters</small>
            <h4 class="hc-article-heading">Creating matter via InfoTrack</h4>
          </div>

          <div class="hc-article-html-container">
            <articleTextPlaceholder/>
          </div>

          <ArticleFollowupHotJar/>
        </div>
      </div>
    </div>
  </section>

  <Prefooter/>
<!-- Container -->
</div>
</template>

<script>
import SpotlightCard from '@/components/SpotlightCard'
import ArticleList from '@/components/ArticleList'
import Breadcrumbs from '@/components/Breadcrumbs'
import Prefooter from '@/components/Prefooter'
import ArticleFollowupHotJar from '@/components/ArticleFollowupHotJar'
import articleTextPlaceholder from '@/components/_articleTextPlaceholder'

export default {
  name: 'articleDetailPage',
  components: {
    SpotlightCard,
    ArticleList,
    Breadcrumbs,
    Prefooter,
    ArticleFollowupHotJar,
    articleTextPlaceholder
  },
  data: function () {
    return {
      spotlights: [
        { heading: 'Heading', subheading: 'Subheading', content: 'Content' }
      ],
      articles: [
        { heading: 'Getting Started', subheading: 'Installing and Setup' },
        { heading: 'Importing a document to a matter', subheading: 'Matter Management' },
        { heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting' },
        { heading: 'Recording time in Microsoft Outlook', subheading: 'Accounting' },
        { heading: 'Troubleshooting printer problems', subheading: 'Technical' }
      ]
    }
  }
}
</script>
