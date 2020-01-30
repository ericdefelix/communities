<template>
  <div class="hc-topic-list">
    <h5 class="hc-topic-catalog-heading text-bold text-primary-lighter">{{ heading }}</h5>
    <div class="hc-topic-list-content">
      <div v-for="link in topics" v-bind:key="link.id">
        <router-link to="/topicdetail" class="hc-topic-list-link">{{ link.text }}</router-link>
        <SubTopicList v-if="link.hasOwnProperty('topics')" v-bind:topics="link.topics"/>
      </div>
    </div>
  </div>
</template>

<script>
import SubTopicList from '@/components/SubTopicList'

export default {
  name: 'TopicList',
  components: {
    SubTopicList
  },
  props: {
    heading: String,
    topics: Array
  }
}
</script>
