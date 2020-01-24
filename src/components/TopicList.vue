<template>
  <div class="hc-topic-list">
    <h6 class="hc-topic-catalog-heading text-bold text-primary-lighter">{{ heading }}</h6>
    <div class="hc-topic-list-content">
      <a class="hc-topic-list-link" href="#" v-for="link in topics" v-bind:key="link.id" >{{ link.text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopicList',
  props: {
    heading: String,
    topics: Array
  }
}
</script>
