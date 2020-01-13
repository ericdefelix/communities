<template>
  <section class="hc-section hc-section-companion">
    <div class="container">
      <h2 class="text-primary-lighter text-center">Companion Products</h2>

      <div class="grid grid-2 grid-gap-responsive">
        <div class="hc-homepage-tabs hc-trending-articles">
          <div class="nav flex-column nav-pills list-group" role="tablist" aria-orientation="vertical">
            <a class="list-group-item active" id="app1" data-toggle="tab" href="#appC1" role="tab" aria-controls="app1" aria-selected="true">
              <article class="hc-article-item">
                <h5 class="hc-article-item-heading">By Lawyers</h5>
                <p>Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.</p>
              </article>
            </a>
            <a class="list-group-item" id="app2" data-toggle="tab" href="#appC2" role="tab" aria-controls="app2" aria-selected="false">
              <article class="hc-list-item-summary">
                <h5>Info Track</h5>
                <p>Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.</p>
              </article>
            </a>
            <a class="list-group-item" id="app3" data-toggle="tab" href="#appC3" role="tab" aria-controls="app3" aria-selected="false">
              <article class="hc-list-item-summary">
                <h5>RapidPay</h5>
                <p>Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.</p>
              </article>
            </a>
            <a class="list-group-item" id="app4" data-toggle="tab" href="#appC4" role="tab" aria-controls="app4" aria-selected="false">
              <article class="hc-list-item-summary">
                <h5>LawConnect</h5>
                <p>Adipiscing lobortis odio porro ullam incidunt potenti rutrum fugit.</p>
              </article>
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
export default {
  name: 'HomeCompanion',
  props: {
    msg: String
  }
}
</script>
