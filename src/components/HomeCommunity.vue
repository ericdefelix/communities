<template>
  <section class="hc-section hc-section-community">
    <div class="container">
      <div class="grid">
        <div class="hc-community-content-wrapper">
          <div class="hc-community-content">
            <h2 class="text-light">Explore Our Community</h2>
            <p>LEAP Community is your searchable site where you can find step-by-step guides, new feature announcements, how-to guides, user forums, and a comprehensive library of resources.</p>

            <button type="button" class="btn btn-outline-light btn-lg">Explore Community</button>
            <button type="button" class="btn btn-primary btn-lg">Join Community</button>
          </div>
        </div>
        <div class="hc-community-image">
          <img class="img-fluid" src="@/assets/explore-communities_@2x.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeCommunity',
  props: {
    msg: String
  }
}
</script>
