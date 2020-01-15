<template>
<div>
<!-- Container -->
  <Breadcrumbs/>

  <section class="hc-section">
    <div class="container">
      <div class="hc-layout-aside-main grid grid-2 grid-gap-responsive">
        <aside class="hc-aside">
          <div class="hc-aside-trending mb-5">
            <h6 class="text-secondary text-uppercase small">Trending Articles</h6>
            <ArticleList v-bind:articles="articles"/>
          </div>

          <SpotlightCard v-bind:spotlight="spotlights[0]" />
        </aside>
        <div class="hc-main">
          <h4>Question</h4>
          <div class="hc-card hc-card-line-top hc-question-card">
            <div class="card-body">
              <div class="question-label">
                Matters
              </div>
              <div class="question">
                I have a paid invoice and an unpaid invoice on a matter. I need to apply a discount to both the paid
                invoice and
                the unpaid invoice. I'm unsure of how I apply a credit note to the paid invoice which I will then credit
                to the
                unpaid invoice.
              </div>
              <div class="user-profile">
                <div class="user-avatar">JH</div>
                <div class="user-name">
                  <h6>Justin Hiew</h6>
                  <div class="time-stamp">6 September 2019 at 11:47 AM</div>
                </div>
              </div>
            </div>
          </div>

          <p>1 answer. 26 views</p>
          <!--Cost Recoveries Lump Sum-->
          <div class="">
            <h4>Top Rated Answers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <!--Answer-->
          </div>
          <div class="">
            <h4>All Answers</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <!--Answer-->

          </div>
          <div class="">
            <!--It's not the same without you...-->
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur
              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  name: 'discussionsPage',
  components: {
    SpotlightCard, ArticleList, Breadcrumbs
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
