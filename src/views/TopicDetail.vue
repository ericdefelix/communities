<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid grid-aside-main main" id="main">
        <aside class="hc-aside sidebar" id="sidebar">
          <div class="sidebar__inner">
            <div class="hc-aside-topics mb-5">
              <TopicList v-bind:topics="sidebar_topics.topics" v-bind:heading="sidebar_topics.heading"/>
            </div>
            <!-- <div class="hc-aside-trending mb-5">
              <h5 class="text-heading text-bold">Trending Articles</h5>
              <ArticleList v-bind:articles="trending" v-bind:isSmall="true"/>
            </div> -->
            <SpotlightCard v-bind:content="spotlight[0]" />
          </div>
        </aside>

        <div class="hc-main content" id="content">
          <div class="hc-article-title-container">
            <ArticleItem v-bind:content="{ isLarge: false, heading:'Installing & Setting Up'}"/>
          </div>
          <ArticleListAppend v-bind:articles="articles"/>
          <button type="button" class="btn btn-default">Load more articles</button>
        </div>
      </div>
  </div>
  </section>
<!-- Container -->
</div>
</template>

<script>
// import ArticleList from '@/components/ArticleList'
import ArticleListAppend from '@/components/ArticleListAppend'
import ArticleItem from '@/components/ArticleItem'
import SpotlightCard from '@/components/SpotlightCard'
import TopicList from '@/components/TopicList'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'topicDetailPage',
  components: {
    SpotlightCard,
    Breadcrumbs,
    TopicList,
    // ArticleList,
    ArticleItem,
    ArticleListAppend
  },
  props: {
    topics: Array,
    heading: String
  },
  data: function () {
    return {
      spotlight: [
        { isLarge: true, heading: 'ByLawyers 2.0', subheading: 'Companion Apps', text: 'Ullam incidunt potenti rutrum', url: 'sample3.jpg' }
      ],
      sidebar_topics: {
        heading: 'Main Topics',
        topics: [
          { text: 'What\'s New' },
          { text: 'Installing & Setting Up', topics: [{ text: 'Getting Started' }, { text: 'Installing LEAP' }, { text: 'Installing LEAP Conveyancer' }, { text: 'General Admin Tasks' }, { text: 'Accounting Admin Tasks' }, { text: 'Managing Your Staff' }] },
          { text: 'Cards' },
          { text: 'Calendar & Tasks' },
          { text: 'Time & Fee Recording' },
          { text: 'Guides & Precedences' },
          { text: 'Office Accounting' },
          { text: 'Trust Accounting' },
          { text: 'Reports & Dashboards' }
        ]
      },
      articles: [
        { heading: 'Should document register be listed under documents tab for client?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Whether my precedent LEAP Invoice complies with ALL LPUL disclosure requirements?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Should document register be listed under documents tab for client?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Whether my precedent LEAP Invoice complies with ALL LPUL disclosure requirements?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Should document register be listed under documents tab for client?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Whether my precedent LEAP Invoice complies with ALL LPUL disclosure requirements?', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] },
        { heading: 'Clarification of Retail Lease Premises within your 1001Reference Manual', metadata: ['Richard Dart', 'May 2017 at 12:17 AM'] }
      ],
      trending: [
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
