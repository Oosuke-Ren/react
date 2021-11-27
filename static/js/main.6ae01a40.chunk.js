(this["webpackJsonpren-portfolio"]=this["webpackJsonpren-portfolio"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(9),i=c.n(s),o=(c(15),c(3)),l=c(10),r=c(2),d=(c(16),c(0)),j=function(e){return Object(d.jsx)("div",{className:"header",children:"about"===e.parent?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("a",{id:"label-font",href:"#/gallery",className:"gallery-content",children:[e.bool?"Personal gallery =":"\u041b\u0438\u0447\u043d\u0430 \u0433\u0430\u043b\u0435\u0440\u0438\u044f =",">"]})}):(e.parent,Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("a",{id:"label-font",href:"#/about",className:"gallery-about-redirect",children:["<",e.bool?"= To my CV":"= \u041a\u044a\u043c CV-\u0442\u043e \u043c\u0438"]})}))})},b=function(e){var t=Object(n.useState)([]),c=Object(o.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){fetch("https://ren-portfolio-backend.herokuapp.com/bullets/language/".concat(e?"English":"Bulgarian"),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){return s(e)})).catch(s(["Error"]))}),[e]);var i=a.filter((function(e){return"personalData"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description)})),l=a.filter((function(e){return"workExperience"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),r=a.filter((function(e){return"education"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),b=a.filter((function(e){return"languages"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),u=a.filter((function(e){return"socialSkills"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),g=a.filter((function(e){return"organizationalSkills"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),p=a.filter((function(e){return"techSkills"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),m=a.filter((function(e){return"artSkills"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),h=a.filter((function(e){return"otherSkills"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)})),x=a.filter((function(e){return"otherInfo"===e.section})).map((function(t){return Object(d.jsxs)("tr",{id:e?"eng":"bg",children:[Object(d.jsxs)("td",{className:"description",children:[t.description,":"]}),Object(d.jsx)("td",{className:"content",children:t.content})]},t.description+t.idbullets)}));return Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)(j,{bool:e,parent:"about"}),Object(d.jsx)("a",{className:"back-button",href:"/react",children:"Back"}),Object(d.jsx)("div",{id:"portfolio",children:Object(d.jsx)("table",{className:"scrollable",children:Object(d.jsxs)("tbody",{className:"scrollable",children:[Object(d.jsxs)("tr",{id:"information-row",children:[Object(d.jsx)("td",{colSpan:"2",id:"table-indentifier",children:e?"Personal Information":"\u041b\u0438\u0447\u043d\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"}),Object(d.jsx)("td",{className:"zero-width"})]}),i,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{id:"table-indentifier",colSpan:"2",children:e?"Professional experience":"\u041f\u0440\u043e\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u0435\u043d \u043e\u043f\u0438\u0442"}),Object(d.jsx)("td",{className:"zero-width"})]}),l,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{id:"table-indentifier",colSpan:"2",children:e?"Special courses, qualifications and education":"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u043d\u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, \u043a\u0443\u0440\u0441\u043e\u0432\u0435 \u0438 \u043a\u0432\u0430\u043b\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438"}),Object(d.jsx)("td",{className:"zero-width"})]}),r,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{id:"table-indentifier",colSpan:"2",children:e?"Languages":"\u0415\u0437\u0438\u0446\u0438"}),Object(d.jsx)("td",{className:"zero-width"})]}),b,Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{id:"table-indentifier",colSpan:"2",children:e?"Personal skills and competences":"\u041b\u0438\u0447\u043d\u0438 \u0443\u043c\u0435\u043d\u0438\u044f \u0438 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0446\u0438\u0438"}),Object(d.jsx)("td",{className:"zero-width"})]}),u,g,p,m,h,x]})})}),Object(d.jsxs)("div",{className:"scrollable",id:"logos",children:[Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"photoshop-logo",id:"exp-logo",src:"https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png",alt:"Photoshop"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"blender-logo",id:"exp-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",alt:"Blender"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"csp-logo",id:"exp-logo",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a7ab2c08-5091-4c8e-a708-9bfa3c9639bf/dbr01gl-46b8dbef-6184-4b5f-97f4-439800abd0b8.png",alt:"Csp"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"js-logo",id:"exp-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",alt:"Javascript"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"react-logo",id:"exp-logo",src:"https://icon-library.com/images/react-icon/react-icon-15.jpg",alt:"react"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"react-logo",id:"exp-logo",src:"https://allpcworld.com/wp-content/uploads/2020/12/Download-MediBang-Paint-Pro-26.jpg",alt:"react"})})]})]})},u=c(7),g=function(e){var t=e.obj,c=e.videoId,a=void 0!==t?t.link?t.link.split("/")[4].split("?")[0]:void 0:null,s=window.localStorage.getItem("language"),i=!!localStorage.favoriteVideos&&localStorage.favoriteVideos.split(";").filter((function(e){return""!==e})),l=t?!!i&&i.includes("".concat(t.idvideos)):null,r=Object(n.useState)(""),j=Object(o.a)(r,2),b=j[0],g=j[1];Object(n.useEffect)((function(){""!==c&&void 0!==c&&fetch("https://ren-portfolio-backend.herokuapp.com/videos/id/".concat(c),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){var t=e[0];g(t)})).catch()}),[c]);var p=Object(n.useState)(l),m=Object(o.a)(p,2),h=m[0],x=m[1],O=Object(n.useState)(!0),f=Object(o.a)(O,2),v=f[0],N=f[1],y=function(e){e.preventDefault(),N(!v)},k=function(e){if(e.preventDefault(),i){if(l){var c=i.indexOf("".concat(t.idvideos)),n=Object(u.a)(i);n.splice(c,1),localStorage.favoriteVideos=n.join(";")}else{var a=Object(u.a)(i);a.push("".concat(t.idvideos)),localStorage.favoriteVideos=a.join(";")}x(!h)}else localStorage.setItem("favoriteVideos","".concat(t.idvideos,";"))},w=function(e){var t=i.indexOf("".concat(b.idvideos)),c=Object(u.a)(i);c.splice(t,1),localStorage.favoriteVideos=c.join(";")},S=function(){return Object(d.jsx)(d.Fragment,{children:t.idvideos?Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"single-video-grid",children:[Object(d.jsx)("img",{className:"video-thumbnail",name:t.idvideos,src:"https://img.youtube.com/vi/".concat(a,"/0.jpg"),alt:"lol"}),Object(d.jsx)("button",{className:"video-button"}),Object(d.jsx)("div",{className:"favorite-button-placeholder",children:Object(d.jsx)("button",{onClick:k,onMouseEnter:y,onMouseLeave:y,className:"favorite-button",href:"../".concat(t.idvideos),children:_})},t.videos)]},t.idvideos)}):Object(d.jsx)(d.Fragment,{})})},C=function(){var e="object"===typeof b?b.link.split("/")[4].split("?")[0]:null,t="object"===typeof b?!!i&&i.includes("".concat(b.idvideos)):null,c="true"===s?t?"Remove from favorites \u2764":"Add to favorites ".concat(v?"\u2661":"\u2665"):t?"\u041c\u0430\u0445\u043d\u0435\u0442\u0435 \u043e\u0442 \u043b\u044e\u0431\u0438\u043c\u0438 \u2665":"\u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 \u0432 \u043b\u044e\u0431\u0438\u043c\u0438 \u2661";return Object(d.jsx)(d.Fragment,{children:b.idvideos?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:"video-thumbnail",name:b.idvideos,src:"https://img.youtube.com/vi/".concat(e,"/0.jpg"),alt:"lol"}),Object(d.jsx)("button",{className:"video-button"}),Object(d.jsx)("div",{className:"favorite-button-placeholder",children:Object(d.jsx)("button",{onClick:w,onMouseEnter:y,onMouseLeave:y,className:"favorite-button",href:"../".concat(b.idvideos),children:c})},b.idvideos+"fav-video-button")]}):Object(d.jsx)(d.Fragment,{})})},_="true"===s?l?"Remove from favorites \u2764":"Add to favorites ".concat(v?"\u2661":"\u2665"):l?"\u041c\u0430\u0445\u043d\u0435\u0442\u0435 \u043e\u0442 \u043b\u044e\u0431\u0438\u043c\u0438 \u2665":"\u0414\u043e\u0431\u0430\u0432\u0435\u0442\u0435 \u0432 \u043b\u044e\u0431\u0438\u043c\u0438 \u2661";return t?Object(d.jsx)(S,{}):Object(d.jsx)("div",{style:{display:""===c?"none":"block"},className:"single-video-grid",children:Object(d.jsx)(C,{})},c)},p=function(e){var t=e.obj;return Object(d.jsx)("div",{className:"single-video-grid",children:Object(d.jsx)("img",{src:t.link,alt:"lol"})},t.idpictures)},m=function(e){var t=e.obj;return Object(d.jsx)("div",{className:"single-video-grid"},t.iddrawings)},h=function(e){var t=e.obj;return console.log(t),Object(d.jsx)("div",{className:"single-video-grid",children:Object(d.jsx)("img",{src:t.link,alt:"lol"})},t.idicons)},x=function(e){var t=e.obj;return Object(d.jsx)("div",{className:"single-video-grid"},t.idphotos)},O=function(e){var t=e.obj;return Object(d.jsx)("div",{className:"single-video-grid"},t.idapps)},f=function(e){var t=e.arr,c=e.category;if(0===t.length||""===c)return Object(d.jsx)(C,{});switch(c){case"digital-art":return t[0]&&!t[0].idpictures?Object(d.jsx)(_,{}):Object(d.jsx)(N,{arr:t});case"traditional-art":return t[0]&&!t[0].iddrawings?Object(d.jsx)(_,{}):Object(d.jsx)(w,{arr:t});case"3dmodels":return t[0]&&!t[0].idphotos?Object(d.jsx)(_,{}):Object(d.jsx)(k,{arr:t});case"animations":return t[0]&&!t[0].idvideos?Object(d.jsx)(_,{}):Object(d.jsx)(v,{arr:t});case"manga":return t[0]&&!t[0].mangaid?Object(d.jsx)(_,{}):Object(d.jsx)(y,{arr:t});case"apps-and-software":return t[0]&&!t[0].idapps?Object(d.jsx)(_,{}):Object(d.jsx)(S,{arr:t});default:return Object(d.jsx)(C,{})}},v=function(e){var t=e.arr;return console.log("step 3 entered normally in videos lol"),t.length,Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(g,{obj:e,id:void 0},e.idvideos+"videos-object")}))})},N=function(e){console.log("step 3 entered normally in pictures");var t=e.arr;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(p,{obj:e},t.indexOf(e)+"pictures-object")}))})},y=function(e){var t=e.arr;return console.log("step 3 entered normally in mangas"),Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(h,{obj:e},e.mangaid+"mangas-object")}))})},k=function(e){var t=e.arr;return console.log("step 3 entered normally in 3d models"),Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(x,{obj:e},e.idphotos+"photos-object")}))})},w=function(e){var t={props:e}.arr;return console.log("step 3 entered normally in drawings"),Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(m,{obj:e},e.iddrawings+"drawing-object")}))})},S=function(e){var t={props:e}.arr;return console.log("step 3 entered normally in apps"),Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{obj:e},e.idapps)}))})},C=function(e){return Object(d.jsx)("h1",{className:"gallery-category-incline",children:e?"Welcome to my gallery, please choose a category to view my work":"\u0414\u043e\u0431\u0440\u0435 \u0434\u043e\u0448\u043b\u0438 \u0432 \u0433\u0430\u043b\u0435\u0440\u0438\u044f\u0442\u0430 \u043c\u0438, \u0438\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f, \u0437\u0430 \u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0440\u0430\u0437\u0433\u043b\u0435\u0436\u0434\u0430\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u0430 \u043c\u0438"})},_=function(){return Object(d.jsx)("div",{className:"loading-circle"})},F=function(e){var t=window.location.hash,c=t.split("/"),a=c[2],s=c[3],i=s?s.split("?")[1].split(";"):null,l=i?i[0].split("=")[1]:null,r=i?i[1]:null;window.onhashchange=function(){window.location.hash.includes("gallery")?(t=window.location.hash,c=t.split("/"),a=c[2],s=c[3],i=s?s.split("?")[1].split(";"):null,l=i?i[0].split("=")[1]:null,r=i?i[1]:null,m([r,a,l])):""!==a&&void 0!==a&&(window.location.reload(),m([null,null,null]))};var b=Object(n.useState)([r,a,l]),g=Object(o.a)(b,2),p=g[0],m=g[1],h=Object(n.useState)([]),x=Object(o.a)(h,2),O=x[0],v=x[1],N=Object(n.useState)(1),y=Object(o.a)(N,2),k=y[0],w=y[1];Object(n.useEffect)((function(){console.log(k)}),[k]),Object(n.useEffect)((function(){w((function(e){return e+1}))}),[O]),Object(n.useEffect)((function(){console.log("Query just ran");var e=p[0],t=p[1],c=p[2];if(null!==e&&null!==t&&null!==c){var n="";switch(t){case"digital-art":n="pictures";break;case"traditional-art":n="drawings";break;case"3dmodels":n="photos";break;case"animations":n="videos";break;case"manga":n="mangas";break;case"apps-and-software":n="apps/apps";break;default:n=""}"mangas"!==n?fetch("https://ren-portfolio-backend.herokuapp.com/".concat(n,"/all").concat("asc"===e?"":"-reverse","/").concat(c),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e)})).catch((function(e){return"SyntaxError: Unexpected token < in JSON at position 0"===e?v([{value:"empty-gallery"}]):""})):fetch("https://ren-portfolio-backend.herokuapp.com/mangas/icons".concat("asc"===e?"":"-reverse","/").concat(c),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e)})).catch((function(e){return"SyntaxError: Unexpected token < in JSON at position 0"===e?v([{value:"empty-gallery"}]):""}))}else console.log("It didn't do a query to server"),v([])}),[p]);var S=function(e){var t=e.target.value;window.location.hash=t,m(["asc",t.split("/")[2],1])},C=function(e){var c=e.target.value;if(r!==c){var n=t.split(";")[0]+";"+c;window.location.hash=n,m([c].concat(Object(u.a)(p.splice(1))))}};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{bool:e,parent:"gallery"}),Object(d.jsx)("div",{className:"gallery-screen",children:Object(d.jsxs)("div",{className:"gallery-search-browser",children:[Object(d.jsxs)("div",{className:"gallery-browser-header",children:[Object(d.jsxs)("div",{className:"gallery-button-choices",children:[Object(d.jsx)("button",{onClick:S,value:"#/gallery/digital-art/q?page=1;asc",className:"gallery-link",id:"to-digital-art-link",children:e?"Digital art":"\u0414\u0438\u0433\u0438\u0442\u0430\u043b\u043d\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u0438"}),Object(d.jsx)("button",{onClick:S,value:"#/gallery/traditional-art/q?page=1;asc",className:"gallery-link",id:"to-traditional-art-link",children:e?"Traditional art":"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u0438"}),Object(d.jsx)("button",{onClick:S,value:"#/gallery/3dmodels/q?page=1;asc",className:"gallery-link",id:"to-3dmodels-link",children:e?"3D models":"3D \u043c\u043e\u0434\u0435\u043b\u0438"}),Object(d.jsx)("button",{onClick:S,value:"#/gallery/animations/q?page=1;asc",className:"gallery-link",id:"to-animations-link",children:e?"Animations":"\u0410\u043d\u0438\u043c\u0430\u0446\u0438\u0438"}),Object(d.jsx)("button",{onClick:S,value:"#/gallery/manga/q?page=1;asc",className:"gallery-link",id:"to-manga-link",children:e?"Manga":"\u041c\u0430\u043d\u0433\u0430"}),Object(d.jsx)("button",{onClick:S,value:"#/gallery/apps-and-software/q?page=1;asc",className:"gallery-link",id:"to-apps-link",children:e?"Apps and software":"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u0438"})]}),Object(d.jsxs)("div",{className:"option-1",children:[Object(d.jsx)("input",{type:"radio",onChange:C,id:"ascending",className:"radio-button-choices",checked:"asc"===p[0],name:"order",value:"asc"}),Object(d.jsx)("label",{htmlFor:"ascending",className:"radio-label",children:e?"Oldest":"\u0421\u0442\u0430\u0440\u0438"})]}),Object(d.jsxs)("div",{className:"option-2",children:["\xa0   ",Object(d.jsx)("input",{type:"radio",onChange:C,id:"descending",checked:"desc"===p[0],className:"radio-button-choices",name:"order",value:"desc"}),"\xa0                               ",Object(d.jsx)("label",{className:"radio-label2",htmlFor:"descending",children:e?"Newest":"\u041d\u043e\u0432\u0438"})]})]}),Object(d.jsx)("div",{className:"gallery-browser-body",children:Object(d.jsx)(f,{arr:O,category:p[1]},k+"key-number")})]})})]})},E=function(e){return Object(d.jsxs)("div",{className:"home-screen",children:[Object(d.jsx)("h1",{className:e?"welcome-title":"welcome-title2",children:e?"Welcome to my portfolio's endpoint made in React":"\u0414\u043e\u0431\u0440\u0435 \u0434\u043e\u0448\u043b\u0438 \u0432 React framework \u0432\u0435\u0440\u0441\u0438\u044f\u0442\u0430 \u043d\u0430 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e \u043c\u0438"}),Object(d.jsxs)("h1",{className:e?"change-framework":"change-framework2",children:[e?"Want to choose a different framework? ":"\u0418\u0441\u043a\u0430\u0442\u0435 \u0434\u0430 \u0432\u0438\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0430 \u0432\u0435\u0440\u0441\u0438\u044f? ",Object(d.jsx)("a",{className:"framework-redirect",href:"/portfolio",children:e?"Click here!":"\u041d\u0430\u0442\u0438\u0441\u043d\u0435\u0442\u0435 \u0442\u0443\u043a!"})]}),Object(d.jsxs)("div",{className:"gallery-presentation",children:[Object(d.jsx)("h1",{className:"gallery-presentation-title",children:e?"Gallery":"\u0413\u0430\u043b\u0435\u0440\u0438\u044f"}),Object(d.jsxs)("p",{className:"gallery-presentation-intro",children:[e?"Digital, traditional art, 3d models, animations and mangas to read...":"\u0414\u0438\u0433\u0438\u0442\u0430\u043b\u043d\u0438, \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u0438, 3\u0434 \u043c\u043e\u0434\u0435\u043b\u0438, \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438 \u0438 \u043c\u0430\u043d\u0433\u0430 \u0437\u0430 \u0447\u0435\u0442\u0435\u043d\u0435",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("a",{id:"gallery-redirect-link",className:"gallery-redirect",href:"#/gallery",children:["<",e?"Go to gallery":"\u041e\u0442\u0438\u0434\u0435\u0442\u0435 \u0432 \u0433\u0430\u043b\u0435\u0440\u0438\u044f",">"]})]})]}),Object(d.jsxs)("div",{className:"about-presentation",children:[Object(d.jsxs)("div",{className:"scrollable",id:"logos1",children:[Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"photoshop-logo",id:"exp-logo",src:"https://seeklogo.com/images/A/adobe-photoshop-logo-7B88D7B5AA-seeklogo.com.png",alt:"Photoshop"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"blender-logo",id:"exp-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png",alt:"Blender"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"csp-logo",id:"exp-logo",src:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/a7ab2c08-5091-4c8e-a708-9bfa3c9639bf/dbr01gl-46b8dbef-6184-4b5f-97f4-439800abd0b8.png",alt:"Csp"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"js-logo",id:"exp-logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",alt:"Javascript"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"react-logo",id:"exp-logo",src:"https://icon-library.com/images/react-icon/react-icon-15.jpg",alt:"react"})}),Object(d.jsx)("div",{className:"exp-logo",children:Object(d.jsx)("img",{className:"medibang-logo",id:"exp-logo",src:"https://allpcworld.com/wp-content/uploads/2020/12/Download-MediBang-Paint-Pro-26.jpg",alt:"react"})})]}),Object(d.jsx)("h1",{className:"about-me-name",children:e?"Rosen Boyanov":"\u0420\u043e\u0441\u0435\u043d \u0411\u043e\u044f\u043d\u043e\u0432"}),Object(d.jsx)("p",{className:"about-me",children:e?"Telerik Alpha Academy and Professional Telecommunications Gymnasium graduate with vast digital competency and experience.":"\u0417\u0430\u0432\u044a\u0440\u0448\u0438\u043b \u043a\u0443\u0440\u0441\u0438\u0441\u0442 \u043e\u0442 \u0422\u0435\u043b\u0435\u0440\u0438\u043a \u0410\u043b\u0444\u0430 \u0430\u043a\u0430\u0434\u0435\u043c\u0438\u044f\u0442\u0430 \u0438 \u041f\u0440\u043e\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u043d\u0430 \u0433\u0438\u043c\u043d\u0430\u0437\u0438\u044f \u043f\u043e \u0442\u0435\u043b\u0435\u043e\u043a\u043e\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438 \u0441 \u0431\u043e\u0433\u0430\u0442\u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0437\u043d\u0430\u043d\u0438\u044f \u0438 \u043a\u043e\u043c\u043f\u0435\u0442\u0435\u043d\u0446\u0438\u0438"}),Object(d.jsx)("p",{className:"about-me2",children:e?"Experience with epxress, React, Vue, Angular, Arduino and more...":"\u041f\u043e\u0437\u043d\u0430\u043d\u0438\u044f/\u043e\u043f\u0438\u0442 \u0437\u0430 Express, React, Vue, Angular, Arduino \u0438 \u043e\u0449\u0435..."}),Object(d.jsxs)("h2",{className:"about-invite",children:[e?"Intrigued? ":"\u0417\u0430\u0438\u043d\u0442\u0440\u0438\u0433\u0443\u0432\u0430\u043d\u0438?","\xa0\xa0",Object(d.jsxs)("a",{className:"about-invite-link",id:"link-to-about",href:"#/about",children:["<",e?"Click here to read more":"\u041d\u0430\u0442\u0438\u0441\u043d\u0435\u0442\u0435 \u0442\u0443\u043a \u0437\u0430 \u0434\u0430 \u043f\u0440\u043e\u0447\u0435\u0442\u0435\u0442\u0435 \u043e\u0449\u0435",">"]})]}),Object(d.jsx)("img",{className:"about-me-pic",src:"https://i.imgur.com/Ybqba9U.png",alt:"pic"})]})]})};var B=function(){var e=localStorage.getItem("language"),t=Object(n.useState)("true"===e),c=Object(o.a)(t,2),a=c[0],s=c[1];return null==e&&(localStorage.setItem("language",!0),s(!0)),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{hashType:"noslash",children:[Object(d.jsx)("button",{id:a?"eng":"bg",className:"language-changer",type:"button",onClick:function(e){e.preventDefault(),localStorage.setItem("language",!a),s(!a)},children:Object(d.jsx)("p",{className:"language-change-content",children:a?"Bulgarian":"English"})}),Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:E(a)}),Object(d.jsx)(r.a,{exact:!0,path:"/about",element:b(a)}),Object(d.jsx)(r.a,{exact:!0,path:"/gallery",element:F(a)}),Object(d.jsx)(r.a,{exact:!0,path:"/gallery/:category/:query",element:F(a)}),Object(d.jsx)(r.a,{exact:!0,path:"/gallery/:category/:query/:id",element:F(a)})]})]})})},A=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),A()}},[[18,1,2]]]);
//# sourceMappingURL=main.6ae01a40.chunk.js.map