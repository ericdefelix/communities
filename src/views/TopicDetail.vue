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

import { topicArticles, sidebarTopicsSubtopic, spotlights } from '@/dummy-data/dummyData'

export default {
  name: 'topicDetailPage',
  components: {
    SpotlightCard,
    Breadcrumbs,
    TopicList,
    ArticleItem,
    ArticleListAppend
  },
  props: {
    topics: Array,
    heading: String
  },
  data: function () {
    return {
      spotlight: spotlights[2],
      sidebar_topics: sidebarTopicsSubtopic,
      articles: topicArticles,
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
