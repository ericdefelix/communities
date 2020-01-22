<template>
  <div class="hc-article-link-group">
    <div class="hc-article-link-group-item" v-for="topic in topics" v-bind:key="topic.id">
      <h5 class="hc-article-link-group-name text-primary-lighter">{{ topic.name }}</h5>

      <div class="hc-article-link-group-content">
        <article class="hc-article-item" v-for="link in topic.list" v-bind:key="link.id">
          <a href="#">{{ link.heading }}</a>
        </article>
        <button class="btn btn-default">View all 25 articles</button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicList',
  props: {
    topics: Array
  }
}
</script>
