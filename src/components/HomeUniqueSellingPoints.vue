<template>
  <section class="hc-section hc-usps">
    <div class="container">
      <h2 class="text-secondary">Let's learn our products...</h2>
      <ul class="hc-usps-group grid">
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-knowledge-base.svg"/></figure>
            <div class="hc-usps-content">
              <h4 class="text-heading">Knowledge Base</h4>
              <p>Browse our articles to learn how to use LEAP to its full potential.</p>
              <router-link to="/topiccatalog">Browse articles</router-link>
            </div>
          </article>
        </li>
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-community.svg"/></figure>
            <div class="hc-usps-content">
              <h4 class="text-heading">Community</h4>
              <p>Start a Discussion with other LEAP users.</p>
              <router-link to="/discussions">Join the Community</router-link>
            </div>
          </article>
        </li>
        <li>
          <article class="hc-usps-item">
            <figure class="hc-usps-img"><img src="@/static/homepage-whats-new.svg"/></figure>
            <div class="hc-usps-content">
              <div class="hc-list-item-summary">
                <h4 class="text-heading">What's New</h4>
                <p>Our commitment to innovation.</p>
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
