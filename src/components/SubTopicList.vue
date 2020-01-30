<template>
  <div class="hc-subtopic-list">
    <router-link to="/topicdetail" class="hc-topic-list-link" v-for="subtopic in topics" v-bind:key="subtopic.id">
      {{ subtopic.text }}
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
