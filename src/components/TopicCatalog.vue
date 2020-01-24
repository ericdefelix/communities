<template>
  <div class="hc-topic-catalog">
    <div class="hc-topic-catalog-item" v-for="group in topic_catalog" v-bind:key="group.id">
      <TopicList v-bind:topics="group.topics" v-bind:heading="group.name"/>
      <a href="#" class="hc-topic-catalog-btn">{{ group.viewall_count }}</a>
    </div>
  </div>
</template>

<script>
import TopicList from '@/components/TopicList'

export default {
  name: 'TopicCatalog',
  components: {
    TopicList
  },
  props: {
    heading: String,
    topic_catalog: Array
  }
}
</script>
