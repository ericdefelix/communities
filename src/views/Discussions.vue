<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid grid-2 grid-gap-responsive">
        <aside class="hc-aside">
          <div class="hc-aside-trending mb-5">
            <h6 class="text-primary-lighter text-uppercase text-bold">Related Articles</h6>
            <ArticleList v-bind:articles="articles" v-bind:isSmall="true"/>
          </div>

          <SpotlightCard v-bind:spotlight="spotlights[0]" />
        </aside>
        <div class="hc-main">
          <DiscussionQuestion/>
          <DiscussionAnswerList/>
          <DiscussionFollowup/>
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
import DiscussionQuestion from '@/components/DiscussionQuestion'
import DiscussionFollowup from '@/components/DiscussionFollowup'
import DiscussionAnswerList from '@/components/DiscussionAnswerList'
import Prefooter from '@/components/Prefooter'

export default {
  name: 'discussionsPage',
  components: {
    SpotlightCard,
    ArticleList,
    Breadcrumbs,
    DiscussionQuestion,
    DiscussionFollowup,
    DiscussionAnswerList,
    Prefooter
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
