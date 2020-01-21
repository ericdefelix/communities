<template>
  <div class="hc-article-link-group">
    <div class="hc-article-link-group-item" v-for="topic in topics" v-bind:key="topic.id">
      <h6 class="text-primary-lighter">{{ topic.name }}</h6>
      <div class="hc-article-item" v-for="link in topic.list" v-bind:key="link.id">
        <a href="#">{{ link.heading }}</a>
      </div>
      <button class="btn btn-default">View all 25 articles</button>
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
