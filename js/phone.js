'use strict';

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  loadUtils: () =>
    import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/utils.js"
    ),
});