(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(t,a,r){"use strict";var e=r(0),n=r(20),s=r(10),o=r(1),i=r(28),l=[],c=l.sort,f=o((function(){l.sort(void 0)})),u=o((function(){l.sort(null)})),p=i("sort");e({target:"Array",proto:!0,forced:f||!u||!p},{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),n(t))}})},318:function(t,a,r){},355:function(t,a,r){"use strict";var e=r(318);r.n(e).a},364:function(t,a,r){"use strict";r.r(a);r(23),r(302),r(92),r(166);var e={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/coreapps/")})).sort((function(t,a){return new Date(a.frontmatter.date)-new Date(t.frontmatter.date)}))}}},n=(r(355),r(43)),s=Object(n.a)(e,(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"apps"},[t._m(0),t._v(" "),t._l(t.posts,(function(a){return r("div",{staticClass:"apppreview"},[r("div",{staticClass:"appicon"},[a.frontmatter.icon?r("img",{attrs:{src:t.$withBase(a.frontmatter.icon),alt:"icon",width:"80px"}}):t._e(),t._v(" "),a.frontmatter.fa?r("font-awesome-icon",{attrs:{icon:a.frontmatter.fa,size:"4x"}}):t._e()],1),t._v(" "),r("div",{staticClass:"apptitle"},[r("h2",[r("a",{attrs:{href:a.frontmatter.guideurl}},[t._v(t._s(a.frontmatter.title))])])]),t._v(" "),r("div",{staticClass:"appdetail"},[r("p",[t._v(t._s(a.frontmatter.description))])]),t._v(" "),r("div",{staticClass:"actionlink"},[a.frontmatter.appurl?r("label",{staticClass:"launch"},[r("a",{attrs:{href:a.frontmatter.appurl,target:"_blank"}},[t._v(t._s(a.frontmatter.applabel))])]):t._e(),t._v(" "),a.frontmatter.downloadurl?r("label",{staticClass:"download"},[r("a",{attrs:{href:a.frontmatter.downloadurl,target:"_blank"}},[t._v(t._s(a.frontmatter.downloadlabel))])]):t._e(),t._v(" "),a.frontmatter.guideurl?r("label",{staticClass:"guide"},[r("a",{attrs:{href:a.frontmatter.guideurl,target:"_blank"}},[t._v("Learn More")])]):t._e()])])}))],2)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sectiontitle"},[a("h2",[this._v("Core Components")])])}],!1,null,null,null);a.default=s.exports}}]);