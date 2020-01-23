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

          <RelatedDiscussions v-bind:discussions="discussions" v-bind:isSmall="true"/>
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
import RelatedDiscussions from '@/components/RelatedDiscussions'
import articleTextPlaceholder from '@/components/_articleTextPlaceholder'

export default {
  name: 'articleDetailPage',
  components: {
    SpotlightCard,
    ArticleList,
    Breadcrumbs,
    Prefooter,
    ArticleFollowupHotJar,
    RelatedDiscussions,
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
      ],
      discussions: [
        { heading: 'Should document register be listed under documents tab for client?', text: 'Installing and Setup' },
        { heading: 'Whether my precedent LEAP Invoice complies with ALL LPUL disclosure requirements?', text: 'Matter Management' },
        { heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual', text: 'Accounting' }
      ]
    }
  }
}
</script>
