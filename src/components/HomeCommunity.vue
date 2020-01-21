<template>
  <section class="hc-section hc-section-community">
    <div class="container">
      <div class="grid">
        <div class="hc-community-content-wrapper">
          <div class="hc-community-content">
            <h2 class="text-light">Explore Our Community</h2>
            <p>Officia ultrices. Nisl earum cursus blanditiis molestiae dui aspernatur non quae odit mattis laoreet. Porro blandit
              ullamcorper pulvinar turpis vivamus dolore eveniet necessitatibus sagittis cillum metus necessitatibus, ornare eros
              vel.</p>

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
