<template>
  <div class="hc-discussion-answers mb-5">
    <h5 class="text-primary">Answers</h5>
    <div class="hc-card hc-answer-card top-rated">
      <div class="hc-card-heading">
        <div class="d-flex">
          <UserInfoSnippet/>
          <div class="ml-auto">
            <Badge v-bind:content="badge"/> <button type="button" class="btn btn-default">T</button>
          </div>
        </div>
      </div>
      <div class="hc-card-body"><discussionTextPlaceholder/></div>
    </div>

    <div class="hc-card hc-answer-card">
      <div class="hc-card-heading">
        <div class="d-flex">
          <UserInfoSnippet v-bind:data="user"/>
          <div class="ml-auto">
            <button type="button" class="btn btn-default">T</button>
          </div>
        </div>
      </div>
      <div class="hc-card-body">
        <discussionTextPlaceholder/>
      </div>
    </div>

  </div>
</template>

<script>
import Badge from '@/components/Badge'
import UserInfoSnippet from '@/components/UserInfoSnippet'

// Placeholder only
import discussionTextPlaceholder from '@/components/_discussionTextPlaceholder'

export default {
  name: 'DiscussionAnswerList',
  components: {
    Badge, UserInfoSnippet, discussionTextPlaceholder
  },
  data: () => {
    return {
      badge: {
        theme: 'green',
        size: 'sm',
        text: 'Best Answer',
        isLink: false
      },
      user: {
        name: 'Farhana Kahn',
        initials: 'FK',
        subinfo: '6 September 2019 at 11:47 AM'
      }
    }
  }
}
</script>
