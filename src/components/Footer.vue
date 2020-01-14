<template>
  <footer class="hc-global-footer">
    <div class="hc-global-footer-top">
      <div class="container">
        <div class="grid">
          <div class="hc-global-footer-col">
            <div class="hc-footer-logo">
              <img src="@/assets/leap-logo-small.svg" alt="logo" />
            </div>
            <div class="hc-social-col mb-4">
              <h5 class="hc-social-col-heading">Stay Updated</h5>
              <p class="hc-social-col-text">Follow us on Twitter for support updates.</p>
            </div>
            <button type="button" class="btn btn-outline-light">Follow On Twitter</button>
          </div>

          <FooterColumnLinks v-bind:column="columnLinks[0]"/>
          <FooterColumnLinks v-bind:column="columnLinks[1]"/>
          <FooterColumnLinks v-bind:column="columnLinks[2]"/>
        </div>
      </div>
    </div>

    <div class="hc-global-footer-bottom">
      <div class="container">
        <div class="d-lg-flex">
          <div class="hc-footer-bottom-copy" rel="license">
            <small>Copyright &copy; <span>2018</span> LEAP Legal Software. All rights reserved - Law Society of NSW Certificate 11</small>
          </div>
          <div class="hc-footer-bottom-legal">
            <small class="hc-footer-bottom-links">
              <a href="#">Terms</a><a href="#">Privacy Policy</a><a href="#">Security Statement</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterColumnLinks from '@/components/FooterColumnLinks'
export default {
  name: 'Footer',
  components: { FooterColumnLinks },
  data: () => {
    return {
      columnLinks: [
        {
          title: 'Resources',
          list: ['Knowledge Base', 'Companion Products', 'Content Blog', 'News & Announcements', 'Face-to-Face Training', 'Training Videos', 'Webinars']
        },
        {
          title: 'Community & Support',
          list: ['Discussions', 'Referrals', 'Ideas Hub', 'Live Chat']
        },
        {
          title: 'Technical',
          list: ['System Requirements', 'LEAP Conveyancer Requirements', 'Download System Audit', 'System Status', 'Website Services']
        }
      ]
    }
  }
}
</script>
