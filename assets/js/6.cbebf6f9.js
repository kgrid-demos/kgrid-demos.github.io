(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{304:function(t,a,e){"use strict";var r=e(0),n=e(20),s=e(10),i=e(1),o=e(28),l=[],c=l.sort,u=i((function(){l.sort(void 0)})),f=i((function(){l.sort(null)})),p=o("sort");r({target:"Array",proto:!0,forced:u||!f||!p},{sort:function(t){return void 0===t?c.call(s(this)):c.call(s(this),n(t))}})},322:function(t,a,e){},362:function(t,a,e){"use strict";var r=e(322);e.n(r).a},374:function(t,a,e){"use strict";e.r(a);e(23),e(304),e(92),e(166);var r={computed:{posts:function(){return this.$site.pages.filter((function(t){return t.path.startsWith("/smartapps/")})).sort((function(t,a){return new Date(a.frontmatter.date)-new Date(t.frontmatter.date)}))}}},n=(e(362),e(42)),s=Object(n.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"apps"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(t.posts,(function(a){return e("div",{staticClass:"apppreview"},[e("div",{staticClass:"appicon"},[a.frontmatter.icon?e("img",{attrs:{src:t.$withBase(a.frontmatter.icon),alt:"icon",width:"80px"}}):t._e(),t._v(" "),a.frontmatter.fa?e("font-awesome-icon",{attrs:{icon:a.frontmatter.fa,size:"4x"}}):t._e()],1),t._v(" "),e("div",{staticClass:"apptitle"},[e("h2",[e("a",{attrs:{href:a.frontmatter.guideurl}},[t._v(t._s(a.frontmatter.title))])])]),t._v(" "),e("div",{staticClass:"appdetail"},[e("p",[t._v(t._s(a.frontmatter.description))])]),t._v(" "),e("div",{staticClass:"actionlink"},[a.frontmatter.appurl?e("label",{staticClass:"launch"},[e("a",{attrs:{href:a.frontmatter.appurl,target:"_blank"}},[t._v(t._s(a.frontmatter.applabel))])]):t._e(),t._v(" "),a.frontmatter.downloadurl?e("label",{staticClass:"download"},[e("a",{attrs:{href:a.frontmatter.downloadurl,target:"_blank"}},[t._v(t._s(a.frontmatter.downloadlabel))])]):t._e(),t._v(" "),a.frontmatter.guideurl?e("label",{staticClass:"guide"},[e("a",{attrs:{href:a.frontmatter.guideurl,target:"_blank"}},[t._v("Learn More")])]):t._e()])])}))],2)}),[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sectiontitle"},[a("h2",[this._v("SMART Apps "),a("small")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"sectiondescription custom-block warning"},[a("p",[this._v("Once in the SMART Launcher, click on the green button at the bottom of the page to launch these SMART apps. "),a("br"),this._v("Next, in the SMART EHR Sandbox, select a patient to use each app.")])])}],!1,null,null,null);a.default=s.exports}}]);