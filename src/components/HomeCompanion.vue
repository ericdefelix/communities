<template>
  <section class="hc-section hc-section-companion">
    <div class="container">
      <h2 class="text-primary-lighter text-center">Companion Products</h2>

      <div class="grid">
        <div class="hc-homepage-tabs hc-trending-articles">
          <div class="nav flex-column nav-pills hc-article-list-lg" role="tablist" aria-orientation="vertical">
            <span class="hc-article-link active" id="app1" data-toggle="tab" data-target="#appC1" role="tab" aria-controls="app1" aria-selected="true">
              <ArticleItem v-bind:content="{ heading:'By Lawyers', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </span>
            <span class="hc-article-link" id="app2" data-toggle="tab" data-target="#appC2" role="tab" aria-controls="app2" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'Info Track', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </span>
            <span class="hc-article-link" id="app3" data-toggle="tab" data-target="#appC3" role="tab" aria-controls="app3" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'RapidPay', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </span>
            <span class="hc-article-link" id="app4" data-toggle="tab" data-target="#appC4" role="tab" aria-controls="app4" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'LawConnect', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </span>
          </div>
        </div>
        <div class="hc-homepage-content">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="appC1" role="tabpanel" aria-labelledby="app1">
              <h6 class="text-primary text-bold">Trending Articles for ByLawyers</h6>
              <ArticleList v-bind:articles="articles" v-bind:isSmall="false"/>
              <button type="button" class="btn btn-default">View more articles</button>
            </div>
            <div class="tab-pane fade" id="appC2" role="tabpanel" aria-labelledby="app2">2</div>
            <div class="tab-pane fade" id="appC3" role="tabpanel" aria-labelledby="app3">3</div>
            <div class="tab-pane fade" id="appC4" role="tabpanel" aria-labelledby="app4">4</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import ArticleList from '@/components/ArticleList'

export default {
  name: 'HomeCompanion',
  components: {
    ArticleItem, ArticleList
  },
  props: {
    content: Object
  },
  data: function () {
    return {
      hasPin: false,
      articles: [
        { heading: 'Getting Started', subheading: 'Installing and Setup', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit incidunt potenti rutrum fugit incidunt potenti rutrum fugit.' },
        { heading: 'Importing a document to a matter', subheading: 'Matter Management', text: 'Feugiat euismod. Rerum elementum eaque sequi earum, quas, dignissimos' },
        { heading: 'Calculation of VAT on Invoices - Rounding of Amounts', subheading: 'Accounting', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' },
        { heading: 'Troubleshooting printer problems', subheading: 'Technical', text: 'Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.' }
      ]
    }
  }
}
</script>
