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
              <TopicList v-bind:topics="sidebar_topics" v-bind:heading="sidebar_heading"/>
            </div>
            <div class="hc-aside-trending mb-5">
              <h5 class="text-heading text-bold">Trending Articles</h5>
              <ArticleList v-bind:articles="articles" v-bind:isSmall="true"/>
            </div>
            <SpotlightCard v-bind:content="spotlight" />
          </div>
        </aside>

        <div class="hc-main content" id="content">
          <div class="hc-article-title-container">
            <ArticleItem v-bind:content="{ isLarge: false, heading:'Knowledge Base', subheading: 'Browse topics & articles' }"/>
          </div>

          <ul class="nav nav-tabs" role="tablist" aria-orientation="horizontal">
            <li class="nav-item">
              <a class="nav-link active" id="productCategoryAppTab" data-toggle="tab" href="#productCategoryApp" role="tab" aria-controls="productCategoryApp" aria-selected="true">Application</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="productCategoryCompanionTab" data-toggle="tab" href="#productCategoryCompanion" role="tab" aria-controls="productCategoryCompanion" aria-selected="true">Companion</a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane fade show active" id="productCategoryApp" role="tabpanel" aria-labelledby="productCategoryApp">
              <TopicCatalog v-bind:topic_catalog="topic_catalog"/>
            </div>
            <div class="tab-pane fade" id="productCategoryCompanion" role="tabpanel" aria-labelledby="productCategoryCompanion">
            </div>
          </div>
        </div>
      </div>
  </div>
  </section>
<!-- Container -->
</div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import ArticleList from '@/components/ArticleList'
import SpotlightCard from '@/components/SpotlightCard'
import TopicCatalog from '@/components/TopicCatalog'
import TopicList from '@/components/TopicList'
import Breadcrumbs from '@/components/Breadcrumbs'

import { spotlights, sideTrending, sidebarTopics, topicCatalog } from '@/dummy-data/dummyData'

export default {
  name: 'topicCatalogPage',
  components: {
    SpotlightCard, Breadcrumbs, TopicCatalog, TopicList, ArticleList, ArticleItem
  },
  props: {
    topics: Array,
    heading: String
  },
  data: function () {
    return {
      spotlight: spotlights[2],
      articles: sideTrending,
      sidebar_topics: sidebarTopics.topics,
      sidebar_heading: sidebarTopics.heading,
      topic_catalog: topicCatalog
    }
  }
}
</script>
