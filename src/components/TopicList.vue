<template>
  <div class="hc-article-link-group">
    <div class="hc-article-link-group-item" v-for="topic in topics" v-bind:key="topic.id">
      <h6 class="hc-article-link-group-name text-bold text-primary-lighter">{{ topic.name }}</h6>

      <div class="hc-article-link-group-content">
        <div>
          <article class="hc-article-item" v-for="link in topic.list" v-bind:key="link.id">
            <a href="#">{{ link.heading }}</a>
          </article>
        </div>
        <a href="#" class="hc-article-link-group-btn">{{ topic.viewall_count }}</a>
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
