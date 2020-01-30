<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid grid-aside-main">
        <aside class="hc-aside">
          <div class="hc-aside-trending mb-5">
            <h5 class="text-primary-lighter text-bold">Related Articles</h5>
            <ArticleList v-bind:articles="articles"/>
          </div>

          <SpotlightCard v-bind:content="spotlights[0]" />
        </aside>
        <div class="hc-main">
          <div class="hc-article-title-container">
            <ArticleItem v-bind:content="{ isLarge: false, heading:'Creating matter via InfoTrack', subheading:'Matters'}"/>
          </div>

          <div class="hc-article-html-container">
            <articleTextPlaceholder/>
          </div>

          <ArticleFollowupHotJar/>

          <h5 class="text-heading text-bold">Related Discussions</h5>
          <ArticleListAppend v-bind:articles="discussions"/>
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
import ArticleItem from '@/components/ArticleItem'
import ArticleList from '@/components/ArticleList'
import Breadcrumbs from '@/components/Breadcrumbs'
import Prefooter from '@/components/Prefooter'
import ArticleFollowupHotJar from '@/components/ArticleFollowupHotJar'
import ArticleListAppend from '@/components/ArticleListAppend'
import articleTextPlaceholder from '@/components/_articleTextPlaceholder'

export default {
  name: 'articleDetailPage',
  components: {
    SpotlightCard,
    ArticleItem,
    ArticleList,
    Breadcrumbs,
    Prefooter,
    ArticleFollowupHotJar,
    ArticleListAppend,
    articleTextPlaceholder
  },
  data: function () {
    return {
      spotlights: [
        { isLarge: true, heading: 'ByLawyers 2.0', subheading: 'Companion Apps', text: 'Ullam incidunt potenti rutrum', url: 'sample3.jpg' }
      ],
      articles: [
        { heading: 'Getting Started', subheading: 'Installing and Setup' },
        { heading: 'Importing a document to a matter', subheading: 'Matter Management' },
        { heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting' },
        { heading: 'Recording time in Microsoft Outlook', subheading: 'Accounting' },
        { heading: 'Troubleshooting printer problems', subheading: 'Technical' }
      ],
      discussions: [
        { heading: 'Should document register be listed under documents tab for client?', metadata: ['LEAP Desktop', 'Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Whether my precedent LEAP Invoice complies with ALL LPUL disclosure requirements?', metadata: ['LEAP Desktop', 'Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual', metadata: ['LEAP Desktop', 'Richard Dart', 'May 2017 at 12:17 AM'] }
      ]
    }
  }
}
</script>
