!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body"),o=!1,r=null;t.addEventListener("click",(function(){o||(r=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),o=!0,t.setAttribute("disabled",""))})),e.addEventListener("click",(function(){clearInterval(r),o=!1,a.style.backgroundColor="#fafafa",t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.930eee14.js.map
