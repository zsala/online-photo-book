(()=>{var e={747:e=>{"use strict";e.exports=require("fs")}},t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}(()=>{const e=document.getElementById("myModal"),t=document.getElementById("myImg"),o=document.getElementById("img01"),s=document.getElementById("caption");t.onclick=function(){e.style.display="block",o.src=this.src,s.innerHTML=this.alt},document.getElementsByClassName("close")[0].onclick=function(){e.style.display="none"};const{readdirSync:c}=n(747);console.log(c("./",{withFileTypes:!0}).filter((e=>e.isDirectory())).map((e=>e.name)))})()})();