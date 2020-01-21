<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid">
        <aside class="hc-aside">
          <div class="hc-aside-topics mb-5">
            <!-- <h6 class="text-primary text-bold">Topics</h6> -->
            <ArticleList v-bind:articles="topics" v-bind:isSmall="true"/>
          </div>
          <div class="hc-aside-trending mb-5">
            <h6 class="text-primary text-bold">Trending Articles</h6>
            <ArticleList v-bind:articles="articles" v-bind:isSmall="true"/>
          </div>

          <SpotlightCard v-bind:spotlight="spotlights[0]" />
        </aside>

        <div class="hc-main">
          <h3 class="text-primary-lighter mb-3">Knowledge Base</h3>
          <p class="mb-4">Browse our topics & articles to learn how to use LEAP to its full potential.</p>
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
              <TopicList v-bind:topics="links"/>
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
import SpotlightCard from '@/components/SpotlightCard'
import ArticleList from '@/components/ArticleList'
import TopicList from '@/components/TopicList'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'productCategoryPage',
  components: {
    SpotlightCard, ArticleList, Breadcrumbs, TopicList
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
      topics: [
        { heading: 'What\'s New' },
        { heading: 'Installing & Setting Up Matters' },
        { heading: 'Cards' },
        { heading: 'Calendar & Tasks' },
        { heading: 'Time & Fee Recording' },
        { heading: 'Guides & Precedences' },
        { heading: 'Office Accounting' },
        { heading: 'Trust Accounting' },
        { heading: 'Reports & Dashboards' }
      ],
      links: [
        {
          name: 'What\'s New',
          list: [{ heading: 'Latest Release' }, { heading: 'Previous Releases' }]
        },
        {
          name: 'Installing & Setting Up',
          list: [{ heading: 'Getting Started' }, { heading: 'Installing LEAP' }, { heading: 'Installing LEAP Conveyancer' }, { heading: 'General Admin Tasks' }, { heading: 'Accounting Admin Tasks' }, { heading: 'Managing Your Staff' }]
        },
        {
          name: 'Matter Management',
          list: [{ heading: 'Creating a New Matter' }, { heading: 'Duplicating a Matter' }, { heading: 'Sorting Matters' }, { heading: 'Customising a Matter' }, { heading: 'Recurring Matters' }, { heading: 'Archiving Matters' }, { heading: 'Restricting Staff Access to a Matter' }, { heading: 'Deleting a Matter' }, { heading: 'Cost Estimates' }, { heading: 'Document Register & Packet' }]
        },
        {
          name: 'Card Management',
          list: [{ heading: 'Creating Cards' }, { heading: 'Card Tabs' }, { heading: 'Search, Sort & Filter Cards' }, { heading: 'Merge Cards' }, { heading: 'Deleting a Card' }, { heading: 'Conflict of Interest Check' }, { heading: 'People List' }, { heading: 'Referrers' }]
        },
        {
          name: 'Guides & Precedents',
          list: [{ heading: 'Guides - By Lawyers' }, { heading: 'Precedents' }]
        },
        {
          name: 'Office Accounting',
          list: [{ heading: 'GL Link' }, { heading: 'Invoicing' }, { heading: 'Deposits/Cheques' }, { heading: 'Office Payments' }, { heading: 'Office Receipts' }, { heading: 'Credit Notes' }]
        },
        {
          name: 'Calendar & Tasks',
          list: [{ heading: 'Calendar Appointments' }, { heading: 'Critical Dates' }, { heading: 'Tasks' }]
        },
        {
          name: 'Reports & Dashboards',
          list: [{ heading: 'Matters & Clients' }, { heading: 'Trust' }, { heading: 'Office' }, { heading: 'Management' }, { heading: 'Dashboards' }]
        }
      ]
    }
  }
}
</script>
