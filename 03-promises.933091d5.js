!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire7bc7;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire7bc7=o);var r=o("h6c0i"),i=document.querySelector(".form"),a=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),l=document.querySelector('[name="amount"]');function c(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();var n=Number(a.value),t=Number(u.value),o=Number(l.value);if(""===n||""===t||""===o)return r.Notify.info("Please fill in all the fields!");for(var i=1;i<=o;i+=1)c(i,n).then((function(e){var n=e.position,t=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))})),n+=t;e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.933091d5.js.map
