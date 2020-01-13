<template>
  <section class="hc-section hc-hero">
    <div class="container">
      <div class="grid grid-2">
        <div class="hc-hero-container">
          <div class="hc-hero-row">
            <h1 class="hc-hero-lead text-light">Hi, how can we help?</h1>
            <div class="hc-search-input">
              <input type="text" class="form-control" placeholder="Search for help articles, community posts, ideas...">
              <i class="hc-ico-search"></i>
            </div>
            <h6 class="hc-news-heading">News and Announcements</h6>
            <ul class="hc-news-content hc-article-bullet-list list-unstyled">
              <li><a href="">Server Maintenance Completed - 7:30 PM, 2 Feb 2019</a></li>
              <li><a href="">Server Maintenance Completed - 7:30 PM, 2 Feb 2019</a></li>
            </ul>
          </div>
        </div>

        <figure class="hc-hero-image">
          <img class="img-fluid" src="@/assets/hero-image_@2x.png" alt="">
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeHero',
  props: {
    msg: String
  }
}
</script>
