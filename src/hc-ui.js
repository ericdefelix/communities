import 'bootstrap.native/dist/bootstrap-native-v4';

import { CustomToggleNavbar } from './js/navbar-toggle';
import cssVars from "css-vars-ponyfill";

const hcUI = {
  run: () => {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      // alert("IE " + parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
      cssVars({});
    }

    const toggleSelector = document.querySelector('[data-target="#navbar"]');
    CustomToggleNavbar(toggleSelector);
  }
}

hcUI.run();