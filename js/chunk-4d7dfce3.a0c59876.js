(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d7dfce3"],{"05fb":function(t,e,n){"use strict";function i(t,e){return e={exports:{}},t(e,e.exports),e.exports}var a=i((function(t,e){var n=function(t){this.opt=t||{},this.favicon=this.opt.favicon||"/favicon.ico",this.timeout=this.opt.timeout||0,this.logError=this.opt.logError||!1};n.prototype.ping=function(t,e){var n,i=this;i.wasSuccess=!1,i.img=new Image,i.img.onload=s,i.img.onerror=o;var a=new Date;function s(t){i.wasSuccess=!0,r.call(i,t)}function o(t){i.wasSuccess=!1,r.call(i,t)}function r(){n&&clearTimeout(n);var t=new Date-a;if("function"===typeof e)return this.wasSuccess?e(null,t):(i.logError&&console.error("error loading resource"),e("error",t))}i.timeout&&(n=setTimeout((function(){r.call(i,void 0)}),i.timeout)),i.img.src=t+i.favicon+"?"+ +new Date},t.exports&&(t.exports=n)})),s=a,o=["online","offline","load"],r={name:"VOffline",props:{slotName:{type:String,required:!1,default:"online"},onlineClass:{type:String,required:!1,default:""},offlineClass:{type:String,required:!1,default:""},pingUrl:{type:String,required:!1,default:"https://google.com"}},data:function(){return{isOnline:navigator.onLine||!1}},computed:{computedClass:function(){return this.isOnline?this.onlineClass:this.offlineClass}},created:function(){var t=this;o.forEach((function(e){return window.addEventListener(e,t.updateOnlineStatus)}))},beforeDestroy:function(){var t=this;o.forEach((function(e){return window.removeEventListener(e,t.updateOnlineStatus)}))},methods:{updateOnlineStatus:function(){var t=this,e=this,n=new s;n.ping(e.pingUrl,(function(n){n||!navigator.onLine?(e.isOnline=!1,e.$emit("detected-condition",t.isOnline)):(e.isOnline=!0,e.$emit("detected-condition",t.isOnline))}))}}};function c(t,e,n,i,a,s,o,r,c,u){"boolean"!==typeof o&&(c=r,r=o,o=!1);var l,h="function"===typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,a&&(h.functional=!0)),i&&(h._scopeId=i),s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=l):e&&(l=o?function(t){e.call(this,u(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,r(t))}),l)if(h.functional){var d=h.render;h.render=function(t,e){return l.call(e),d(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,l):[l]}return n}const u=r;var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.computedClass},[t._t(t.slotName)],2)},h=[];l._withStripped=!0;const d=void 0,f=void 0,v=void 0,p=!1,m=c({render:l,staticRenderFns:h},d,u,f,p,v,!1,void 0,void 0,void 0);e["a"]=m},1681:function(t,e,n){},"2db4":function(t,e,n){"use strict";n("caad"),n("a9e3");var i=n("ade3"),a=(n("ca71"),n("8dd9")),s=n("a9ad"),o=n("7560"),r=n("f2e7"),c=n("fe6c"),u=n("58df"),l=n("80d2"),h=n("d9bd");e["a"]=Object(u["a"])(a["a"],s["a"],r["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,i=t.footer,a=t.insetFooter,s=t.left,o=t.right,r=t.top;return{paddingBottom:Object(l["f"])(n+i+a),paddingLeft:this.app?Object(l["f"])(s):void 0,paddingRight:this.app?Object(l["f"])(o):void 0,paddingTop:Object(l["f"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(h["e"])("auto-height",this),0==this.timeout&&Object(h["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(l["n"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(i["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(l["n"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:a["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"4bd4":function(t,e,n){"use strict";n("4de4"),n("7db0"),n("4160"),n("caad"),n("07ac"),n("2532"),n("159b");var i=n("5530"),a=n("58df"),s=n("7e2b"),o=n("3206");e["a"]=Object(a["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},i={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?i.shouldValidate=t.$watch("shouldValidate",(function(a){a&&(e.errorBag.hasOwnProperty(t._uid)||(i.valid=n(t)))})):i.valid=n(t),i},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(i["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},a63a:function(t,e,n){t.exports=n.p+"img/contact.64fb8a6c.svg"},a844:function(t,e,n){"use strict";n("a9e3");var i=n("5530"),a=(n("1681"),n("8654")),s=n("58df"),o=Object(s["a"])(a["a"]);e["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(i["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=a["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},b8fa:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-main",[n("v-layout",{staticClass:"py-5 px-3",staticStyle:{background:"#fff"},attrs:{"align-center":"","justify-center":"",wrap:"",column:""}},[n("v-flex",{attrs:{xs12:"",md12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:"",md1:""}}),n("v-flex",{attrs:{xs12:"",md7:"","pr-5":""}},[n("p",{staticClass:"heading"},[t._v("Contact us")]),n("p",{staticClass:"text"},[t._v("Initiate a conversation with our team by contacting us through raccbemajestic29@gmail.com or +91-9442149340")]),n("div",{staticClass:"onesignal-customlink-container"}),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$router.push("/signup")}}},[t._v("Join us")])],1),n("v-flex",{attrs:{xs12:"",md4:"","hidden-sm-and-down":""}},[n("v-img",{attrs:{src:t.contactuslogo,height:"auto",width:"50%"}})],1)],1)],1)],1)],1),n("iframe",{staticStyle:{display:"none"},attrs:{name:"iframe"}}),n("v-layout",{attrs:{row:"",wrap:"","align-center":"","justify-center":"","mt-3":""}},[n("v-flex",{attrs:{xs10:"",md7:"","text-center":""}},[t.status?n("v-card",{staticClass:"mx-auto elevation-15",staticStyle:{"border-radius":"8px"}},[n("v-card-text",{staticClass:"heading"},[n("span",{staticStyle:{color:"#179E5B"}},[t._v("Contact")]),n("span",{staticStyle:{color:"#FBBD12"}},[t._v("us")])]),n("v-card-text",[n("v-form",{ref:"form",attrs:{action:"https://docs.google.com/forms/u/4/d/e/1FAIpQLSe1L9tbgBNcFPNzbYMhtTbb9_F3SAFZfjb0j1TD1s_M1-paWw/formResponse",method:"POST",target:"iframe"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{value:t.name,type:"text",label:"Name",name:"entry.838116139",counter:"",rules:t.nameRules,color:"blue"}}),n("v-text-field",{attrs:{value:t.value,label:"Phone (prefer Whatsapp)",name:"entry.246423705",color:"green",counter:"",rules:t.phoneRules}}),n("v-textarea",{attrs:{value:t.value,label:"Quries",type:"text",name:"entry.2067760767",color:"red",counter:"",rules:t.nameRules}}),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{disabled:!t.valid,type:"submit",color:"primary"},on:{click:t.callme}},[t._v(t._s(t.text))]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"white--text",attrs:{color:"red lighten-1"},on:{click:t.callme2}},[t._v("Clear All")])],1)],1)],1):t._e(),n("hr",{staticClass:"mt-3 mb-2"}),n("p",[t._v("Get in Touch with us through Social Medias")])],1)],1),n("offline",{on:{"detected-condition":t.handleConnectivityChange}},[n("div",{attrs:{slot:"online"},slot:"online"}),n("div",{attrs:{slot:"offline"},slot:"offline"})]),n("v-snackbar",{attrs:{color:"green",timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" Thanks For your Response. We will respond you soon...! "),n("v-btn",{staticClass:"black--text",attrs:{color:"white",small:""},on:{click:t.callme1}},[t._v("Clear")])],1),t.status?t._e():n("v-snackbar",{attrs:{color:"red",timeout:t.timeoutstatus},model:{value:t.checknetwork,callback:function(e){t.checknetwork=e},expression:"checknetwork"}},[t._v("You are Offline, Check Your Network Connection.")])],1)},a=[],s=n("a63a"),o=n.n(s),r=n("05fb"),c={components:{offline:r["a"]},data:function(){return{value1:"",value:"",snackbar:!1,valid:!0,text:"submit",show:!0,timeout:8e3,timeoutstatus:0,contactuslogo:o.a,checknetwork:!0,name:"",nameRules:[function(t){return!!t||"Required field"}],status:!0,phoneRules:[function(t){return!!t||"Name is required"},function(t){return t&&t.length<=10||"Number must be less than 10 characters"}]}},mounted:function(){document.title="Rotract | contact"},methods:{handleConnectivityChange:function(t){this.status=t},callme:function(){this.text="submit",this.snackbar=!0,this.show=!1},callme1:function(){this.text="submit",this.snackbar=!1,this.$refs.form.reset(),this.show=!0},callme2:function(){this.show=!0,this.$refs.form.reset()}}},u=c,l=(n("eb19"),n("2877")),h=n("6544"),d=n.n(h),f=n("8336"),v=n("b0af"),p=n("99d9"),m=n("0e8f"),g=n("4bd4"),b=n("adda"),w=n("a722"),k=n("f6c4"),x=n("2db4"),_=n("8654"),y=n("a844"),C=Object(l["a"])(u,i,a,!1,null,"a994f29c",null);e["default"]=C.exports;d()(C,{VBtn:f["a"],VCard:v["a"],VCardText:p["a"],VFlex:m["a"],VForm:g["a"],VImg:b["a"],VLayout:w["a"],VMain:k["a"],VSnackbar:x["a"],VTextField:_["a"],VTextarea:y["a"]})},c9f6:function(t,e,n){},ca71:function(t,e,n){},eb19:function(t,e,n){"use strict";var i=n("c9f6"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-4d7dfce3.a0c59876.js.map