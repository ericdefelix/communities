<template>
<div>
<!-- Container -->
  <HomeHero/>

  <div class="hc-hero-background"></div>

  <HomeUniqueSellingPoints />

  <HomeTrending/>

  <HomeCompanion/>

  <div class="hc-community-background"></div>

  <HomeCommunity/>
<!-- Container -->
</div>
</template>

<script>
// @ is an alias to @
import HomeHero from '@/components/HomeHero'
import HomeUniqueSellingPoints from '@/components/HomeUniqueSellingPoints'
import HomeTrending from '@/components/HomeTrending'
import HomeCompanion from '@/components/HomeCompanion'
import HomeCommunity from '@/components/HomeCommunity'

export default {
  name: 'homePage',
  components: {
    HomeHero, HomeUniqueSellingPoints, HomeCommunity, HomeCompanion, HomeTrending
  }
}

</script>
