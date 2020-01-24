<template>
  <div>
    <h6 class="text-primary text-bold">Related Discussions</h6>

    <div class="hc-article-list" v-bind:class="{ 'hc-article-list-sm': isSmall }">
      <div class="hc-related-discussion-list-item" v-for="discussion in discussions" v-bind:key="discussion.id">
        <a href="" class="hc-article-link">
          <article class="hc-article">
              <h6 class="hc-article-heading text-bold">{{ discussion.heading }} </h6>
              <p class="hc-article-text" v-if="discussion.text">{{ discussion.text }}</p>
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
