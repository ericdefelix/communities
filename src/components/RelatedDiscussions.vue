<template>
  <div>
    <h5 class="text-primary-lighter text-bold">Related Discussions</h5>

    <div class="hc-article-list">
      <div class="hc-article-list-item d-flex" v-for="discussion in discussions" v-bind:key="discussion.id">
        <a href="#" class="hc-article-link">
          <article class="hc-article">
            <p class="hc-article-heading">{{ discussion.heading }} </p>
            <ul class="hc-card-meta-info ml-auto">
              <li>LEAP Desktop</li><li>Richard Dart 11</li><li>May 2017 at 12:17 AM</li>
            </ul>
          </article>
        </a>
        <ul class="hc-article-link-append">
          <li class="hc-article-link-append-item">
            <i class="fas fa-eye"></i><span>23</span>
          </li>
          <li class="hc-article-link-append-item">
            <i class="fas fa-thumbs-up"></i><span>12</span>
          </li>
          <li class="hc-article-link-append-item">
            <i class="fas fa-comment-alt"></i><span>9</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RelatedDiscussions',
  props: {
    discussions: Array,
    isSmall: Boolean
  }
}
</script>
