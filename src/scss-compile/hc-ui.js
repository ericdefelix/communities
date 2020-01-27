/* eslint-disable no-useless-escape */
import 'bootstrap.native/dist/bootstrap-native-v4'
// import 'sticky-sidebar/src/sticky-sidebar'

import { CustomToggleNavbar } from './js/navbar-toggle'
import cssVars from 'css-vars-ponyfill'

const hcUI = {
  run: () => {
    const ua = window.navigator.userAgent
    const msie = ua.indexOf('MSIE')

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      // alert("IE " + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      cssVars({})
    }

    const toggleSelector = document.querySelector('[data-toggle="menu"]')
    CustomToggleNavbar(toggleSelector)

    // var sidebar = new StickySidebar('#sidebar', {
    //   containerSelector: '#main-content',
    //   innerWrapperSelector: '.sidebar__inner',
    //   topSpacing: 20,
    //   bottomSpacing: 20
    // })
  }
}

export default hcUI

// hcUI.run()
