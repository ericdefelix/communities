<template>
  <div class="hc-subtopic-list">
    <router-link to="/topicdetail">
      <a class="hc-topic-list-link" href="#" v-for="subtopic in topics" v-bind:key="subtopic.id">{{ subtopic.text }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'SubTopicList',
  props: {
    topics: Array
  }
}
</script>
