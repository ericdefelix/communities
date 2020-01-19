<template>
  <div class="hc-discussion-answers">
    <div class="mb-5">
      <h5 class="text-secondary">Top Rated Answer</h5>
      <!-- Card -->
      <div class="hc-card hc-answer-card top-rated">
        <div class="hc-card-heading">
          <div>
            <UserInfoSnippet/>
            <div>
              <Badge v-bind:content="badge"/> <button type="button" class="btn btn-default">T</button>
            </div>
          </div>
        </div>
        <div class="hc-card-body"><discussionTextPlaceholder/></div>
      </div>
      <!-- Card -->
    </div>

    <div>
      <h5 class="text-primary-lighter">All Answers</h5>
      <!-- Card -->
      <div class="hc-card hc-answer-card">
        <div class="hc-card-heading">
          <div>
            <UserInfoSnippet v-bind:data="user"/>
            <div>
              <button type="button" class="btn btn-default">T</button>
            </div>
          </div>
        </div>
        <div class="hc-card-body">
          <discussionTextPlaceholder/>
        </div>
      </div>
      <!-- Card -->
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
