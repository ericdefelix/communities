/* eslint-disable no-unneeded-ternary */
<template>
  <div id="app">
    <header class="hc-global-header hc-header-sticky" v-bind:class="{ 'hc-header-sticky' : isSticky }">
      <div class="navbar navbar-expand-lg navbar-dark container" role="navigation">
        <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/">
          <a href="#" class="navbar-brand" :class="[isActive && 'active', isExactActive && 'active']" @click="navigate">
            <img class="navbar-brand-img" src="@/assets/leap-logo-small.svg" alt="logo" />
            <span>Help Center</span>
          </a>
        </router-link>
        <div class="d-flex ml-auto align-items-center">
          <a href="#" class="badge hc-server-status ok">
            <span>Servers are Up</span>
          </a>

          <button class="navbar-toggle hamburger hamburger--slider" tabindex="0" data-target="#navbar" data-toggle="menu" aria-expanded="false">
            <span class="hamburger-box">
              <i class="hamburger-inner"></i>
            </span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbar">
          <nav class="navbar-nav" id="nav">
            <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/category">
              <div class="nav-item">
                <a href="#" class="nav-link" :class="[isActive && 'active', isExactActive && 'active']" @click="navigate">Knowledge Base</a>
              </div>
            </router-link>
            <router-link v-slot="{ href, route, navigate, isActive, isExactActive }" to="/discussions">
              <div class="nav-item">
                <a href="#" class="nav-link" :class="[isActive && 'active', isExactActive && 'active']" @click="navigate">Community</a>
              </div>
            </router-link>
            <router-link to="/">
              <div class="nav-item">
                <a href="#" class="nav-link">Sign In</a>
              </div>
            </router-link>
          </nav>
        </div>
      </div>
    </header>

    <router-view/>

    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
// import hcUI from '@/scss-compile/hc-ui'

export default {
  components: { Footer },
  props: {
    headerSticky: Boolean
  },
  data: () => {
    return {
      isSticky: false
    }
  },
  watch: {
    $route: function () {
      if (this.$route.path === '/') {
        this.isSticky = true
      } else {
        this.isSticky = false
      }
    }
  },
  mounted: () => {
  }
}
</script>

<style lang="scss">
  @import './scss-compile/hc-leap.scss';
</style>
