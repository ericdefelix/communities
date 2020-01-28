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
            <div class="hc-aside-trending mb-5">
              <h5 class="text-heading text-bold">Trending Articles</h5>
              <ArticleList v-bind:articles="articles" v-bind:isSmall="true"/>
            </div>
            <SpotlightCard v-bind:content="spotlight[0]" />
          </div>
        </aside>

        <div class="hc-main content" id="content">
          <small class="hc-article-subheading text-uppercase text-bold">Browse topics & articles</small>
          <h2 class="text-primary-lighter mb-3">Knowledge Base</h2>

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
import ArticleList from '@/components/ArticleList'
import SpotlightCard from '@/components/SpotlightCard'
import TopicCatalog from '@/components/TopicCatalog'
import TopicList from '@/components/TopicList'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'topicCatalogPage',
  components: {
    SpotlightCard, Breadcrumbs, TopicCatalog, TopicList, ArticleList
  },
  props: {
    topics: Array,
    heading: String
  },
  methods: {
    randomViewAllText () {
      const randomNumber = () => { return Math.floor(Math.random() * (60 - 1 + 1) + 1) }
      return `View all ${randomNumber()} articles`
    }
  },
  data: function () {
    return {
      spotlight: [
        { isLarge: true, heading: 'ByLawyers 2.0', subheading: 'Companion Apps', text: 'Ullam incidunt potenti rutrum', url: 'sample3.jpg' }
      ],
      articles: [
        { heading: 'Getting Started', subheading: 'Installing and Setup' },
        { heading: 'Importing a document to a matter', subheading: 'Matter Management' },
        { heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting' },
        { heading: 'Recording time in Microsoft Outlook', subheading: 'Accounting' },
        { heading: 'Troubleshooting printer problems', subheading: 'Technical' }
      ],
      sidebar_topics: {
        heading: 'Main Topics',
        topics: [
          { text: 'What\'s New' },
          { text: 'Installing & Setting Up Matters' },
          { text: 'Cards' },
          { text: 'Calendar & Tasks' },
          { text: 'Time & Fee Recording' },
          { text: 'Guides & Precedences' },
          { text: 'Office Accounting' },
          { text: 'Trust Accounting' },
          { text: 'Reports & Dashboards' }
        ]
      },
      topic_catalog: [
        {
          name: 'What\'s New',
          topics: [{ text: 'Latest Release' }, { text: 'Previous Releases' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Installing & Setting Up',
          topics: [{ text: 'Getting Started' }, { text: 'Installing LEAP' }, { text: 'Installing LEAP Conveyancer' }, { text: 'General Admin Tasks' }, { text: 'Accounting Admin Tasks' }, { text: 'Managing Your Staff' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Matter Management',
          topics: [{ text: 'Creating a New Matter' }, { text: 'Duplicating a Matter' }, { text: 'Sorting Matters' }, { text: 'Customising a Matter' }, { text: 'Recurring Matters' }, { text: 'Archiving Matters' }, { text: 'Restricting Staff Access to a Matter' }, { text: 'Deleting a Matter' }, { text: 'Cost Estimates' }, { text: 'Document Register & Packet' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Card Management',
          topics: [{ text: 'Creating Cards' }, { text: 'Card Tabs' }, { text: 'Search, Sort & Filter Cards' }, { text: 'Merge Cards' }, { text: 'Deleting a Card' }, { text: 'Conflict of Interest Check' }, { text: 'People topics' }, { text: 'Referrers' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Guides & Precedents',
          topics: [{ text: 'Guides - By Lawyers' }, { text: 'Precedents' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Office Accounting',
          topics: [{ text: 'GL Link' }, { text: 'Invoicing' }, { text: 'Deposits/Cheques' }, { text: 'Office Payments' }, { text: 'Office Receipts' }, { text: 'Credit Notes' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Calendar & Tasks',
          topics: [{ text: 'Calendar Appointments' }, { text: 'Critical Dates' }, { text: 'Tasks' }],
          viewall_count: this.randomViewAllText()
        },
        {
          name: 'Reports & Dashboards',
          topics: [{ text: 'Matters & Clients' }, { text: 'Trust' }, { text: 'Office' }, { text: 'Management' }, { text: 'Dashboards' }],
          viewall_count: this.randomViewAllText()
        }
      ]
    }
  }
}
</script>
