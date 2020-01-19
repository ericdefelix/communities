<template>
  <a href="#" class="hc-article-link hc-card hc-card-line hc-spotlight-card">
    <figure class="hc-spotlight-card-thumbnail" v-bind:style="{'background-image': 'url(' + require('@/assets/sample1.jpg') + ')'}"></figure>
    <div class="hc-card-body">
      <article class="hc-article">
        <small class="hc-article-subheading">{{ spotlight.heading }}</small>
        <h5 class="hc-article-heading">{{ spotlight.heading }}</h5>
        <p class="hc-article-text">{{ spotlight.content }}</p>
      </article>
    </div>
  </a>
</template>

<script>
export default {
  name: 'spotlightComponent',
  props: {
    spotlight: Object
  }
}
</script>
