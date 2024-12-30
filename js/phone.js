'use strict';

const input = document.querySelector("#phone");
window.intlTelInput(input, {
  loadUtils: () =>
    import(
      "https://cdn.jsdelivr.net/npm/intl-tel-input@25.2.0/build/js/utils.js"
    ),
});

intlTelInput(input, {
  customPlaceholder: (selectedCountryPlaceholder, selectedCountryData) => "" + selectedCountryPlaceholder,
});

window.intlTelInput(input, {
  initialCountry: "ua",
  separateDialCode: true,
  loadUtils: () => import("/intl-tel-input/js/utils.js?1733756310855") // for formatting/placeholders etc
});