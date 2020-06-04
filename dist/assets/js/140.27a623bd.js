(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{469:function(e,a,r){"use strict";r.r(a);var t=r(33),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"webpack-模块热替换（hmr-hot-module-repacement）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack-模块热替换（hmr-hot-module-repacement）"}},[e._v("#")]),e._v(" webpack 模块热替换（HMR - hot module Repacement）")]),e._v(" "),r("p",[e._v("在应用程序运行过程中，替换，添加或删除模块，而无需重新加载整个页面。")]),e._v(" "),r("ul",[r("li",[e._v("保留在完全重新加载页面期间丢失的应用程序状态")]),e._v(" "),r("li",[e._v("只更新变更内容，以节省宝贵时间")]),e._v(" "),r("li",[e._v("在源代码中对CSS/JS，会立刻在浏览器中进行更新。这几乎相当于浏览器devtools直接更改样式。")])]),e._v(" "),r("p",[e._v("webpack-dev-server在编译之后不会写到任何输入文件，而是将bundle文件保存在内存中，然后将它们serve到server中，就好像它们是挂载在server根路径上的真实文件一样。\nwebpack-dev-server中调用了webpack-dev-middleware和webpack-hot-middleware\nwebpack-dev-middleware:是一个封装器（wrapper）,它可以把webpack处理过得文件发送到一个server。webpack-dev-server在内部使用了它，它也可以作为独立的package来使用\nwebpack-hot-middleware: 在运行时更新所有类型的模块，而无需完全刷新。webpack-dev-server在内部使用了它，只需要配置一下就可以，它也可以作为独立的package来使用。")]),e._v(" "),r("p",[e._v("增量编译：只编译修改的部分，没修改的部分不重新编译\n热更新：处理的是编译完成后的页面刷新部分，只刷新修改的内容，而无需重新刷新")]),e._v(" "),r("h3",{attrs:{id:"为什么需要hmr"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要hmr"}},[e._v("#")]),e._v(" 为什么需要HMR")]),e._v(" "),r("p",[e._v("当你对代码进行修改保存后，webpack将对代码重新打包，并将新的模块发送到浏览器，浏览器通过新的模块替换老的模块，这样在不刷新浏览器的前提下能对应用进行更新。")]),e._v(" "),r("p",[r("strong",[e._v("要区分两个概念， 浏览器刷新(location.reload)和 HMR是两个概念")]),e._v("\n已经有很多 live reload 的工具或库, 这些库监控文件的变化，然后通知浏览器端刷新页面。")]),e._v(" "),r("ul",[r("li",[e._v("live reload工具并不能够保存应用的状态(states)，当页面刷新后，应用之前的状态消息，还是上文中的例子，点击按钮出现弹窗，当浏览器刷新后，弹窗也随即消失，要恢复到之前状态，还需要再次点击按钮。而 Webpack HMR 则不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。")])]),e._v(" "),r("h3",{attrs:{id:"hmr原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hmr原理"}},[e._v("#")]),e._v(" HMR原理")]),e._v(" "),r("p",[e._v("在应用中置换模块")]),e._v(" "),r("h2",{attrs:{id:"vue-loader的-热重载（hot-reload）"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-loader的-热重载（hot-reload）"}},[e._v("#")]),e._v(" vue-loader的 热重载（hot reload）")]),e._v(" "),r("p",[e._v("热重载\n不只是当你修改文件的时候简单重新加载页面")]),e._v(" "),r("h2",{attrs:{id:"react-hot-loader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#react-hot-loader"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/gaearon/react-hot-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("react-hot-loader"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Jocs/jocs.github.io/issues/15",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack Hot Module Replacement 的原理解析"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=o.exports}}]);