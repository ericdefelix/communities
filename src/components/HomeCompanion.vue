<template>
  <section class="hc-section hc-section-companion">
    <div class="container">
      <h2 class="text-primary-lighter text-center">Companion Products</h2>

      <div class="grid grid-2 grid-gap-responsive">
        <div class="hc-homepage-tabs hc-trending-articles">
          <div class="nav flex-column nav-pills hc-article-list-lg" role="tablist" aria-orientation="vertical">
            <a class="hc-article-link active" id="app1" data-toggle="tab" href="#appC1" role="tab" aria-controls="app1" aria-selected="true">
              <ArticleItem v-bind:content="{ heading:'By Lawyers', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </a>
            <a class="hc-article-link" id="app2" data-toggle="tab" href="#appC2" role="tab" aria-controls="app2" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'Info Track', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </a>
            <a class="hc-article-link" id="app3" data-toggle="tab" href="#appC3" role="tab" aria-controls="app3" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'RapidPay', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </a>
            <a class="hc-article-link" id="app4" data-toggle="tab" href="#appC4" role="tab" aria-controls="app4" aria-selected="false">
              <ArticleItem v-bind:content="{ heading:'LawConnect', text:'Adipiscing lobortis odio porro ullam incidunt'}"/>
            </a>
          </div>
        </div>
        <div class="hc-homepage-content">
          <div class="tab-content">
            <div class="tab-pane fade show active" id="appC1" role="tabpanel" aria-labelledby="app1">1</div>
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

export default {
  name: 'HomeCompanion',
  components: {
    ArticleItem
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
