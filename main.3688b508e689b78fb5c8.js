(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/nVi":function(n,e,t){},QfWi:function(n,e,t){"use strict";t.r(e);t("wPGE");var a={body:document.querySelector(".gallery"),inputSearch:document.querySelector(".input"),btn:document.querySelector(".btn"),spinner:document.querySelector("#loader"),clientHeight:document.documentElement.clientHeight},l={page:1,search:"",inputValue(n,e){return fetch(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${n}&page=${this.page}&per_page=12&key=19060894-87e054058a337546d07970d77`).then(n=>n.json()).then(this.page+=1)}},o=t("tIGc"),s=t.n(o);function c(n){const e=s()(n);a.body.insertAdjacentHTML("beforeend",e)}var i=t("dcBu");t("/nVi"),t("hjJ8");a.inputSearch.addEventListener("input",_.debounce((function(){a.spinner.classList.add("loader"),a.body.innerHTML="",l.inputValue(a.inputSearch.value).then(n=>{c(n.hits),a.btn.classList.remove("none")}).finally(()=>{a.spinner.classList.remove("loader")})}),1e3)),a.btn.addEventListener("click",(function(){a.spinner.classList.add("loader"),l.inputValue(a.inputSearch.value).then(n=>{c(n.hits),console.log(a.clientHeight),scrollTo(0,a.clientHeight+pageYOffset-60)}).finally(()=>{a.spinner.classList.remove("loader")})}));document.querySelector(".form").addEventListener("click",n=>{const e=n.target.dataset.src;i.create(`\n      <img src="${e}" width="1200" height="800">\n  `).show()})},hjJ8:function(n,e,t){},tIGc:function(n,e,t){var a=t("mp5j");n.exports=(a.default||a).template({1:function(n,e,t,a,l){var o,s=null!=e?e:n.nullContext||{},c=n.hooks.helperMissing,i="function",r=n.escapeExpression,u=n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]};return'<li>\n    <div class="photo-card">\n        <img class="photo" loading="lazy" src="'+r(typeof(o=null!=(o=u(t,"webformatURL")||(null!=e?u(e,"webformatURL"):e))?o:c)===i?o.call(s,{name:"webformatURL",hash:{},data:l,loc:{start:{line:4,column:47},end:{line:4,column:63}}}):o)+'" data-src="'+r(typeof(o=null!=(o=u(t,"largeImageURL")||(null!=e?u(e,"largeImageURL"):e))?o:c)===i?o.call(s,{name:"largeImageURL",hash:{},data:l,loc:{start:{line:4,column:75},end:{line:4,column:92}}}):o)+'" alt="" height="250px" />\n\n        <div class="stats">\n            <p class="stats-item">\n                <i class="material-icons">thumb_up</i>\n                <span class="icons-span">'+r(typeof(o=null!=(o=u(t,"likes")||(null!=e?u(e,"likes"):e))?o:c)===i?o.call(s,{name:"likes",hash:{},data:l,loc:{start:{line:9,column:41},end:{line:9,column:50}}}):o)+'</span>\n            </p>\n            <p class="stats-item">\n                <i class="material-icons">visibility</i>\n                <span class="icons-span">'+r(typeof(o=null!=(o=u(t,"views")||(null!=e?u(e,"views"):e))?o:c)===i?o.call(s,{name:"views",hash:{},data:l,loc:{start:{line:13,column:41},end:{line:13,column:50}}}):o)+'</span>\n            </p>\n            <p class="stats-item">\n                <i class="material-icons">comment</i>\n                <span class="icons-span">'+r(typeof(o=null!=(o=u(t,"comments")||(null!=e?u(e,"comments"):e))?o:c)===i?o.call(s,{name:"comments",hash:{},data:l,loc:{start:{line:17,column:41},end:{line:17,column:53}}}):o)+'</span>\n            </p>\n            <p class="stats-item">\n                <i class="material-icons">cloud_download</i>\n                <span class="icons-span">'+r(typeof(o=null!=(o=u(t,"downloads")||(null!=e?u(e,"downloads"):e))?o:c)===i?o.call(s,{name:"downloads",hash:{},data:l,loc:{start:{line:21,column:41},end:{line:21,column:54}}}):o)+"</span>\n            </p>\n        </div>\n    </div>\n</li>\n"},compiler:[8,">= 4.3.0"],main:function(n,e,t,a,l){var o;return null!=(o=(n.lookupProperty||function(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]})(t,"each").call(null!=e?e:n.nullContext||{},e,{name:"each",hash:{},fn:n.program(1,l,0),inverse:n.noop,data:l,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?o:""},useData:!0})},wPGE:function(n,e){"loading"in HTMLImageElement.prototype?(console.log("Браузер поддерживает lazyload"),document.querySelectorAll('img[loading="lazy"]').forEach(n=>{n.src=n.dataset.src})):(console.log("Браузер НЕ поддерживает lazyload"),function(){const n=document.createElement("script");n.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js",n.integrity="sha512-TmDwFLhg3UA4ZG0Eb4MIyT1O1Mb+Oww5kFG0uHqXsdbyZz9DcvYQhKpGgNkamAI6h2lGGZq2X8ftOJvF/XjTUg==",n.crossOrigin="anonymous",document.body.appendChild(n)}());function t(n){console.log("Картинка загрузилась"),n.target.classList.add("appear")}document.querySelectorAll("img[data-src]").forEach(n=>{n.addEventListener("load",t,{once:!0})})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.3688b508e689b78fb5c8.js.map