(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(t,a,r){"use strict";var e=r(2),n=r(50),s=r(146),i="".startsWith;e(e.P+e.F*r(147)("startsWith"),"String",{startsWith:function(t){var a=s(this,t,"startsWith"),r=n(Math.min(arguments.length>1?arguments[1]:void 0,a.length)),e=String(t);return i?i.call(a,e,r):a.slice(r,r+e.length)===e}})},146:function(t,a,r){var e=r(68),n=r(12);t.exports=function(t,a,r){if(e(a))throw TypeError("String#"+r+" doesn't accept regex!");return String(n(t))}},147:function(t,a,r){var e=r(1)("match");t.exports=function(t){var a=/./;try{"/./"[t](a)}catch(r){try{return a[e]=!1,!"/./"[t](a)}catch(t){}}return!0}},148:function(t,a,r){"use strict";var e=r(2),n=r(21),s=r(22),i=r(5),o=[].sort,c=[1,2,3];e(e.P+e.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!r(17)(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),n(t))}})},152:function(t,a,r){},157:function(t,a,r){"use strict";var e=r(152);r.n(e).a},163:function(t,a,r){"use strict";r.r(a);r(145),r(23),r(148);var e={computed:{posts:function(){return this.$site.pages.filter(function(t){return t.path.startsWith("/smartapps/")&&!t.frontmatter.blog_index}).sort(function(t,a){return new Date(a.frontmatter.date)-new Date(t.frontmatter.date)})}}},n=(r(157),r(0)),s=Object(n.a)(e,function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"apps"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.posts,function(a){return r("div",{staticClass:"apppreview"},[r("div",{staticClass:"appicon"},[a.frontmatter.icon?r("img",{attrs:{src:t.$withBase(a.frontmatter.icon),alt:"icon",width:"80px"}}):t._e(),t._v(" "),a.frontmatter.fa?r("font-awesome-icon",{attrs:{icon:a.frontmatter.fa,size:"4x"}}):t._e()],1),t._v(" "),r("div",{staticClass:"apptitle"},[r("h2",[r("a",{attrs:{href:a.frontmatter.guideurl}},[t._v(t._s(a.frontmatter.title))])])]),t._v(" "),r("div",{staticClass:"appdetail"},[r("p",[t._v(t._s(a.frontmatter.description))])]),t._v(" "),r("div",{staticClass:"actionlink"},[a.frontmatter.appurl?r("label",{staticClass:"launch"},[r("a",{attrs:{href:a.frontmatter.appurl,target:"_blank"}},[t._v(t._s(a.frontmatter.applabel))])]):t._e(),t._v(" "),a.frontmatter.downloadurl?r("label",{staticClass:"download"},[r("a",{attrs:{href:a.frontmatter.downloadurl,target:"_blank"}},[t._v(t._s(a.frontmatter.downloadlabel))])]):t._e(),t._v(" "),a.frontmatter.guideurl?r("label",{staticClass:"guide"},[r("a",{attrs:{href:a.frontmatter.guideurl,target:"_blank"}},[t._v("Learn More")])]):t._e()])])})],2)},[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sectiontitle"},[a("h2",[this._v("SMART Apps "),a("small")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sectiondescription"},[a("span",[this._v("Once in the SMART Launcher, click on the green button at the bottom of the page to launch these SMART apps. Next, in the SMART EHR Sandbox, select a patient to use each app.")])])}],!1,null,null,null);s.options.__file="SmartAppIndex.vue";a.default=s.exports}}]);