<template>
  <section class="hc-section hc-usps">
    <div class="container">
      <h2 class="text-secondary">Let's learn our products...</h2>
      <ul class="hc-usps-group grid grid-3 grid-gap-responsive">
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-knowledge-base.svg"/></figure>
            <div class="hc-usps-content">
              <h4 class="text-primary-lighter">Knowledge Base</h4>
              <p>Impedit repellendus aliquam cursus eos perspiciatis faucibus aliquid, est.</p>
              <a href="">Browse articles</a>
            </div>
          </article>
        </li>
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-community.svg"/></figure>
            <div class="hc-usps-content">
              <h4 class="text-primary-lighter">Community</h4>
              <p>Impedit repellendus aliquam cursus eos perspiciatis faucibus aliquid, est.</p>
              <a href="">Join the Community</a>
            </div>
          </article>
        </li>
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-whats-new.svg"/></figure>
            <div class="hc-usps-content">
              <div class="hc-list-item-summary">
                <h4 class="text-primary-lighter">What's New</h4>
                <p>Impedit repellendus aliquam cursus eos perspiciatis faucibus aliquid, est.</p>
              </div>
              <a href="">Learn about new features</a>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeUniqueSellingPoints',
  props: {
    msg: String
  }
}
</script>
