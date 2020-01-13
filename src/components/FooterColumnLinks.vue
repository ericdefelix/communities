<template>
  <div class="hc-global-footer-col hc-global-footer-test">
    <div>
      <h6 class="small hc-footer-nav-heading">{{ column.title }}</h6>
      <ul class="hc-top-footer-nav-links">
        <li v-for="item in column.list" v-bind:key="item.id"><a href="#">{{ item }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterColumnLinks',
  props: {
    column: Object
  }
}
</script>
