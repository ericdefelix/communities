<template>
  <div class="hc-discussion-question">
    <!-- R1 -->
    <div class="">
      <h4 class="text-primary-lighter">Question</h4>
      <div class="hc-btn-group">
        <button type="button" class="btn btn-primary">Sign In &amp; Answer</button>
        <button type="button" class="btn btn-default">Share</button>
      </div>
    </div>

    <!-- Question Card -->
    <div class="">
      <div class="hc-card hc-card-line hc-question-card">
        <div class="hc-card-body">
          <ArticleItem v-bind:content="content" />
          <UserInfoSnippet/>
        </div>
      </div>

      <div class="hc-badge-group">
        <Badge v-bind:content="badge_group[0]"/>
        <Badge v-bind:content="badge_group[1]"/>
      </div>

      <ul class="hc-card-meta-info"><li>1 answer</li><li>26 views</li></ul>
    </div>

  </div>
</template>

<script>
import ArticleItem from '@/components/ArticleItem'
import Badge from '@/components/Badge'
import UserInfoSnippet from '@/components/UserInfoSnippet'

export default {
  name: 'DiscussionQuestion',
  components: {
    ArticleItem, UserInfoSnippet, Badge
  },
  data: () => {
    return {
      user: {
        name: 'Justin Hiew',
        initials: 'JW',
        subinfo: '6 September 2019 at 11:47 AM'
      },
      badge_group: [
        {
          theme: 'default',
          size: 'md',
          text: 'Cost Recovery',
          isLink: true
        },
        {
          theme: 'default',
          size: 'md',
          text: 'Lump Sum',
          isLink: true
        }
      ],
      content: {
        subheading: 'Matters',
        heading: 'I have a paid invoice and an unpaid invoice on a matter. I need to apply a discount to both the paid invoice and the unpaid invoice. I\'m unsure of how I apply a credit note to the paid invoice which I will then credit to the unpaid invoice.'
      }
    }
  }
}
</script>
