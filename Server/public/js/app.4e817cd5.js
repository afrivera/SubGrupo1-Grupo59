(function(t){function e(e){for(var o,r,i=e[0],l=e[1],c=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&m.push(n[r][0]),n[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var l=a[i];0!==n[l]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},s=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"28d8":function(t,e,a){"use strict";a("98b4")},"43f2":function(t,e,a){t.exports=a.p+"img/logo.f6a0969c.jpeg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},s=[],r=a("5530"),i=a("2f62"),l={name:"App",data:function(){return{}},methods:Object(r["a"])({},Object(i["b"])(["readToken"])),mounted:function(){this.readToken()}},c=l,u=a("2877"),d=a("6544"),m=a.n(d),v=a("7496"),f=a("f6c4"),p=Object(u["a"])(c,n,s,!1,null,null,null),b=p.exports;m()(p,{VApp:v["a"],VMain:f["a"]});a("d3b7"),a("3ca3"),a("ddb0");var h=a("8c4f"),w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{staticClass:"black ",attrs:{app:""}},[o("v-row",[o("v-img",{attrs:{"max-width":"200",src:a("bf83"),alt:"BookXchange"}})],1),o("v-tabs",{staticClass:"ml-n9",attrs:{dark:"",centered:"",color:"indigo"}},t._l(t.links,(function(e,a){return o("v-tab",{key:a,attrs:{color:"text--indigo",to:e.route},domProps:{textContent:t._s(e.title)}},[t._v(" "+t._s(e)+" ")])})),1)],1),o("v-main",{staticClass:"logo",attrs:{fluid:""}},[o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{attrs:{cols:"12",sm:"6",md:"5"}},[o("router-view",{attrs:{name:"allLog"}})],1)],1)],1),o("v-footer",[o("FooterView")],1)],1)},g=[],x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticClass:"mt-10",attrs:{app:"",dark:"",padless:""}},[a("v-row",{staticClass:"black white--text text-center"},[a("v-card-text",t._l(t.icons,(function(e,o){return a("v-btn",{key:o,staticClass:"mx-4 white--text",attrs:{icon:"",href:e.url,target:e.target}},[a("v-icon",{attrs:{size:"30px"}},[t._v(" "+t._s(e.name)+" ")])],1)})),1),a("v-divider"),a("v-card-text",{staticClass:"white--text"},[a("strong",[t._v(" MISION TIC 2022 - UNIVERSIDAD TÉCNOLOGICA DE PEREIRA ")])])],1)],1)},V=[],_={data:function(){return{icons:[{name:"mdi-google-plus",url:"https://sites.google.com/view/booksxchange/inicio",target:"_blank"},{name:"fab fa-github",url:"https://google.com.co",target:"_blank"},{name:"mdi-linkedin",url:"https://sites.google.com/view/booksxchange/inicio",target:"_blank"},{name:"mdi-instagram",url:"https://sites.google.com/view/booksxchange/inicio",target:"_blank"}]}}},C=_,k=(a("5f4d"),a("8336")),y=a("99d9"),P=a("ce7e"),j=a("553a"),O=a("132d"),I=a("0fd9"),S=Object(u["a"])(C,x,V,!1,null,"6197cd62",null),T=S.exports;m()(S,{VBtn:k["a"],VCardText:y["c"],VDivider:P["a"],VFooter:j["a"],VIcon:O["a"],VRow:I["a"]});var B={data:function(){return{links:[{title:"Acerca de Nosotros",route:"/about"},{title:"Registrate",route:"login"}]}},name:"LytAuth",components:{FooterView:T}},D=B,$=(a("28d8"),a("40dc")),L=a("62ad"),A=a("adda"),E=a("71a3"),R=a("fe57"),F=Object(u["a"])(D,w,g,!1,null,"14e89174",null),U=F.exports;m()(F,{VApp:v["a"],VAppBar:$["a"],VCol:L["a"],VFooter:j["a"],VImg:A["a"],VMain:f["a"],VRow:I["a"],VTab:E["a"],VTabs:R["a"]});var N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-3 __b-20"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h3",{staticClass:"headline "},[t._v(" Iniciar Sesión ")]),a("div",{staticClass:"mt-2"},[a("v-btn",{staticClass:"red white--text"},[a("v-icon",{attrs:{small:""}},[t._v("mdi-google-plus")]),t._v(" Iniciar con Google ")],1)],1),a("div",{staticClass:"mt-2"},[a("h3",{staticClass:"headline"},[t._v(" o Registrate ")])])]),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"align-center",attrs:{cols:"12"}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("v-text-field",{attrs:{label:"Correo",type:"email",dense:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-text-field",{attrs:{id:"password",label:"Contraseña",dense:"","append-icon":t.visible?"mdi-eye-off":"mdi-eye",type:t.visible?"text":"password"},on:{"click:append":function(){return t.visible=!t.visible}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("div",{staticClass:"d-flex"},[a("v-row",[a("v-col",[a("v-btn",{staticClass:"text-none px-2",attrs:{color:"primary",cols:"12",dense:""},on:{click:function(e){return t.goToSignup()}}},[t._v(" Iniciar Sesión ")])],1),a("v-spacer"),a("v-col",[a("v-btn",{staticClass:"text-none px-2 __btn-login-text",attrs:{color:"secondary",dense:"",to:{name:"ForgotPassword"}}},[t._v("Olvide mi Contraseña")])],1)],1)],1),a("div",{staticClass:"d-flex mt-5"},[a("span",[t._v(" ¿No tienes una cuenta? "),a("v-btn",{staticClass:"text-none px-2 __btn-login-text",attrs:{text:"",color:"primary",to:{name:"SignUp"}}},[t._v(" Crear Cuenta ")])],1)])],1),""!=t.msg?a("v-alert",{attrs:{type:"error",dismissible:""}},[t._v(t._s(t.msg))]):t._e()],1)],1)],1)],1)],1)],1)},M=[],q={name:"Login",data:function(){return{visible:!1,form:{email:"",password:""},msg:""}},methods:Object(r["a"])(Object(r["a"])({},Object(i["b"])(["saveUser"])),{},{goToSignup:function(){var t=this;this.axios.post("/login",this.form).then((function(e){console.log(e.data);var a=e.data.token;t.saveUser(a)})).catch((function(e){console.log(e.response),t.msg=e.response.data.msg}))}})},H=q,J=a("0798"),X=a("b0af"),G=a("a523"),z=a("4bd4"),Q=a("2fa4"),K=a("8654"),W=Object(u["a"])(H,N,M,!1,null,null,null),Y=W.exports;m()(W,{VAlert:J["a"],VBtn:k["a"],VCard:X["a"],VCardText:y["c"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VIcon:O["a"],VRow:I["a"],VSpacer:Q["a"],VTextField:K["a"]});var Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-0 __b-20"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h3",{staticClass:"headline"},[a("v-btn",{attrs:{color:"primary",icon:"",to:{name:"login"}}},[a("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" Atrás ")],1)])],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"align-center",attrs:{cols:"12"}},[a("v-form",[a("v-text-field",{attrs:{label:"Email",type:"email",outlined:"",dense:""}}),a("v-btn",{staticClass:"text-none px-2 __btn-login-text primary",attrs:{to:{name:"login"}}},[t._v(" Send to Email ")])],1)],1)],1)],1)],1)],1)},tt=[],et={name:"ForgotPassword"},at=et,ot=Object(u["a"])(at,Z,tt,!1,null,null,null),nt=ot.exports;m()(ot,{VBtn:k["a"],VCard:X["a"],VCardText:y["c"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VIcon:O["a"],VRow:I["a"],VTextField:K["a"]});var st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-0 __b-20"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h3",{staticClass:"headline"},[a("v-btn",{attrs:{color:"primary",icon:"",to:{name:"login"}}},[a("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" Reset Password ")],1)])],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"align-center",attrs:{cols:"12"}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.resetPassword.apply(null,arguments)}}},[a("v-text-field",{attrs:{id:"inputPassword","append-icon":t.showPass.new?"mdi-eye":"mdi-eye-off",type:t.showPass.new?"text":"password",name:"password",label:"Nueva contraseña",autocomplete:"new-password"},on:{"click:append":function(e){t.showPass.new=!t.showPass.new}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-text-field",{attrs:{id:"inputConfirmPassword","append-icon":t.showPass.confirm?"mdi-eye":"mdi-eye-off",type:t.showPass.confirm?"text":"password",name:"password_confirmation",label:"Confirmar contraseña",autocomplete:"new-password"},on:{"click:append":function(e){t.showPass.confirm=!t.showPass.confirm}},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}}),a("div",{staticClass:"d-flex start"},[a("v-btn",{attrs:{type:"submit",color:"primary",rounded:""}},[t._v("Reset Password")])],1)],1)],1)],1)],1)],1)],1)},rt=[],it={name:"ResetPassword",data:function(){return{user:{password:null,confirmPassword:null},showPass:{new:!1,confirm:!1}}},methods:{resetPassword:function(){console.log("contraseñas",this.user)}}},lt=it,ct=Object(u["a"])(lt,st,rt,!1,null,null,null),ut=ct.exports;m()(ct,{VBtn:k["a"],VCard:X["a"],VCardText:y["c"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VIcon:O["a"],VRow:I["a"],VTextField:K["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"elevation-0 __b-20"},[a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[a("h3",{staticClass:"headline"},[a("v-btn",{attrs:{color:"primary",icon:"",to:{name:"login"}}},[a("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" Set Password ")],1)])],1),a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"align-center",attrs:{cols:"12"}},[a("v-form",{on:{submit:function(e){return e.preventDefault(),t.resetPassword.apply(null,arguments)}}},[a("v-text-field",{attrs:{id:"inputPassword","append-icon":t.showPass.new?"mdi-eye":"mdi-eye-off",type:t.showPass.new?"text":"password",name:"password",label:"Nueva contraseña",autocomplete:"new-password"},on:{"click:append":function(e){t.showPass.new=!t.showPass.new}},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}}),a("v-text-field",{attrs:{id:"inputConfirmPassword","append-icon":t.showPass.confirm?"mdi-eye":"mdi-eye-off",type:t.showPass.confirm?"text":"password",name:"password_confirmation",label:"Confirmar contraseña",autocomplete:"new-password"},on:{"click:append":function(e){t.showPass.confirm=!t.showPass.confirm}},model:{value:t.user.confirmPassword,callback:function(e){t.$set(t.user,"confirmPassword",e)},expression:"user.confirmPassword"}}),a("div",{staticClass:"d-flex justify-start mt-2"},[a("v-btn",{attrs:{type:"submit",color:"primary",rounded:""}},[t._v("Set Password")])],1)],1)],1)],1)],1)],1)],1)},mt=[],vt={name:"SetInitialPassword",data:function(){return{user:{password:null,confirmPassword:null},showPass:{new:!1,confirm:!1}}},methods:{resetPassword:function(){console.log("contraseñas",this.user)}}},ft=vt,pt=Object(u["a"])(ft,dt,mt,!1,null,null,null),bt=pt.exports;m()(pt,{VBtn:k["a"],VCard:X["a"],VCardText:y["c"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VIcon:O["a"],VRow:I["a"],VTextField:K["a"]});var ht=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"elevation-6 __b-20"},[o("v-card-text",[o("v-container",{attrs:{fluid:""}},[o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12",color:"primary"}},[o("h1",{staticClass:"headline"},[t._v(" Registro ")])])],1),o("v-row",[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("h2",[o("v-btn",{attrs:{color:"primary",icon:"",to:{name:"login"}}},[o("v-icon",[t._v("mdi-arrow-left-thick")])],1),t._v(" Atrás ")],1)])],1),o("v-row",{attrs:{align:"center",justify:"center"}},[o("v-col",{staticClass:"align-center",attrs:{cols:"6"}},[o("v-form",{on:{submit:function(e){return e.preventDefault(),t.signup()}}},[o("v-text-field",{attrs:{label:"Name",type:"text",outlined:"",dense:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),o("v-text-field",{attrs:{label:"Email",type:"email",outlined:"",dense:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),o("v-text-field",{attrs:{id:"password",label:"Password",outlined:"",dense:"","append-icon":t.visibility?"mdi-eye-off":"mdi-eye",type:t.visibility?"text":"password"},on:{"click:append":function(){return t.visibility=!t.visibility}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),o("div",{staticClass:"d-flex"},[o("v-btn",{staticClass:"text-none px-2 __btn-login-text",attrs:{text:"",color:"primary"},on:{click:function(e){return t.goToLogin()}}},[t._v(" Registrarse ")]),o("v-spacer"),o("v-btn",{staticClass:"text-none px-2",attrs:{color:"primary",type:"submit"}},[t._v(" Cancelar ")])],1)],1)],1),o("v-col",{attrs:{cols:"6"}},[o("v-container",[o("v-img",{attrs:{src:a("43f2"),"content-class":"",alt:"Logo",position:"center center"}})],1)],1)],1)],1)],1)],1)},wt=[],gt=a("1da1"),xt=(a("96cf"),{data:function(){return{visibility:!1,form:{name:"",email:"",password:""}}},methods:{signup:function(){var t=this;return Object(gt["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.axios.post("/new-user",t.form).then((function(t){console.log(t.data)})).catch((function(t){console.log(t.response)}));case 1:case"end":return e.stop()}}),e)})))()},goToLogin:function(){this.$router.push({name:"login"})}}}),Vt=xt,_t=Object(u["a"])(Vt,ht,wt,!1,null,null,null),Ct=_t.exports;m()(_t,{VBtn:k["a"],VCard:X["a"],VCardText:y["c"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VIcon:O["a"],VImg:A["a"],VRow:I["a"],VSpacer:Q["a"],VTextField:K["a"]});var kt=a("1232");o["a"].use(i["a"]);var yt=new i["a"].Store({state:{token:"",userDB:""},mutations:{obtainUser:function(t,e){t.token=e,""===e?t.userDB="":(t.userDB=Object(kt["a"])(e),we.push({name:"home"}))}},actions:{saveUser:function(t,e){var a=t.commit;localStorage.setItem("token",e),a("obtainUser",e)},signOff:function(t){var e=t.commit;e("obtainUser",""),localStorage.removeItem("token"),we.push({name:"login"})},readToken:function(t){var e=t.commit,a=localStorage.getItem("token");e("obtainUser",a||"")}},getters:{isActive:function(t){return!!t.token}}}),Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.books,(function(e,o){return a("v-col",{key:o,staticClass:"pa-3",attrs:{sm:"4"}},[a("v-card",{staticClass:"pa-1",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}},[t._v(" "+t._s(e.imgStatus))]),a("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(e.author)+" ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Explore ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",{staticClass:"py-0"},[t._v(" "+t._s(e.isbn)+" ")])],1)])],1)],1)})),1)],1)},jt=[],Ot={name:"Home",components:{},data:function(){return{show:!1,books:[]}},created:function(){this.bookList()},methods:{bookList:function(){var t=this;this.axios.get("/book").then((function(e){t.books=e.data})).catch((function(t){console.log(t.response)}))}}},It=Ot,St=a("0789"),Tt=Object(u["a"])(It,Pt,jt,!1,null,null,null),Bt=Tt.exports;m()(Tt,{VBtn:k["a"],VCard:X["a"],VCardActions:y["a"],VCardSubtitle:y["b"],VCardText:y["c"],VCardTitle:y["d"],VCol:L["a"],VContainer:G["a"],VDivider:P["a"],VExpandTransition:St["a"],VIcon:O["a"],VImg:A["a"],VRow:I["a"],VSpacer:Q["a"]});var Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-form",[a("v-card",[a("v-card-title",{},[a("div",{staticClass:"title-2 red--text"},[t._v(" DATOS DE USUARIO ")])]),a("v-col",[a("v-card-text",[a("v-text-field",{attrs:{id:"inputName",name:"name",label:"Nombre completo"}}),a("v-text-field",{attrs:{id:"inputUsername",name:"username",disabled:"",label:"Usuario"},model:{value:t.userData.name,callback:function(e){t.$set(t.userData,"name",e)},expression:"userData.name"}}),a("v-text-field",{attrs:{id:"inputEmail",name:"email",disabled:"",label:"Correo electrónico"},model:{value:t.userData.email,callback:function(e){t.$set(t.userData,"email",e)},expression:"userData.email"}}),a("v-text-field",{attrs:{id:"inputProfile",name:"profile",disabled:"",label:"rol"},model:{value:t.userData.rol,callback:function(e){t.$set(t.userData,"rol",e)},expression:"userData.rol"}})],1)],1)],1)],1)],1)},$t=[],Lt={name:"PerfilView",computed:Object(r["a"])({},Object(i["c"])(["userDB"])),data:function(){return{userData:[]}},mounted:function(){this.getUser()},methods:{getUser:function(){var t=this,e=this.userDB.data._id;this.axios.get("/user/".concat(e)).then((function(e){t.userData=e.data,console.log(t.userData)})).catch((function(t){console.log(t.response)}))}}},At=Lt,Et=Object(u["a"])(At,Dt,$t,!1,null,null,null),Rt=Et.exports;m()(Et,{VCard:X["a"],VCardText:y["c"],VCardTitle:y["d"],VCol:L["a"],VContainer:G["a"],VForm:z["a"],VTextField:K["a"]});var Ft=a("d375"),Ut=a("8900"),Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{fluid:""}},[a("HeaderView"),a("router-view",{attrs:{name:"allPages"}}),a("FooterView")],1)],1)},Mt=[],qt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{staticClass:"black white--text ",attrs:{app:"",dark:""},scopedSlots:t._u([{key:"extension",fn:function(){return[o("v-tabs",{attrs:{model:"optionSelected align-with-title"}},[t._l(t.options,(function(e,a){return o("v-tab",{key:a,attrs:{to:e.route},domProps:{textContent:t._s(e.title)}})})),o("v-spacer"),o("v-tab",[t._v("Buscar "),o("v-icon",{attrs:{small:""}},[t._v("fas fa-search")])],1),o("v-tab",[o("v-btn",{attrs:{text:""},on:{click:t.signOff}},[t._v("salir "),o("v-icon",[t._v("mdi-logout")])],1)],1)],2)]},proxy:!0}])},[o("v-row",[o("v-img",{attrs:{"max-width":"200",contain:"",src:a("bf83"),alt:"BookXchange"}})],1)],1)},Ht=[],Jt={name:"HeaderView",data:function(){return{optionSelecte:0,options:[{icon:"mdi-account",title:"Inicio",route:"/home"},{icon:"user-tag",title:"Agregar Libro",route:"add-book"},{icon:"user-tag",title:"Mis libros",route:"my-book"},{icon:"user-tag",title:"Mi Perfil",route:"perfil"}]}},methods:Object(r["a"])({},Object(i["b"])(["signOff"]))},Xt=Jt,Gt=Object(u["a"])(Xt,qt,Ht,!1,null,null,null),zt=Gt.exports;m()(Gt,{VAppBar:$["a"],VBtn:k["a"],VIcon:O["a"],VImg:A["a"],VRow:I["a"],VSpacer:Q["a"],VTab:E["a"],VTabs:R["a"]});var Qt={name:"LytSPA",components:{HeaderView:zt,FooterView:T}},Kt=Qt,Wt=Object(u["a"])(Kt,Nt,Mt,!1,null,null,null),Yt=Wt.exports;m()(Wt,{VApp:v["a"],VContainer:G["a"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{height:"350px"}},[a("v-navigation-drawer",{attrs:{absolute:"",permanent:"",right:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",[a("img",{attrs:{src:"https://randomuser.me/api/portraits/women/81.jpg"}})]),a("v-list-item-content",[a("v-list-item-title",[t._v("Jane Smith")]),a("v-list-item-subtitle",[t._v("Logged In")])],1)],1)]},proxy:!0}])},[a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1)],1)},te=[],ee={data:function(){return{items:[{title:"Home",icon:"mdi-home-city"},{title:"My Account",icon:"mdi-account"},{title:"Users",icon:"mdi-account-group-outline"}]}}},ae=ee,oe=a("8860"),ne=a("da13"),se=a("8270"),re=a("5d23"),ie=a("34c3"),le=a("f774"),ce=Object(u["a"])(ae,Zt,te,!1,null,null,null),ue=ce.exports;m()(ce,{VCard:X["a"],VDivider:P["a"],VIcon:O["a"],VList:oe["a"],VListItem:ne["a"],VListItemAvatar:se["a"],VListItemContent:re["a"],VListItemIcon:ie["a"],VListItemSubtitle:re["b"],VListItemTitle:re["c"],VNavigationDrawer:le["a"]});var de=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-card",[a("v-container",{attrs:{fluid:""}},[a("v-row",[a("v-card-title",[t._v(" Quienes somos")]),a("v-card-text",[t._v(" BooksXchange es una plataforma de intercambio de libros, podrás seleccionar y calificar tus favoritos y cuando alguien acepte alguno de tus libros lo podrás intercambiar con los de tu lista de favoritos. ")])],1),a("v-row")],1)],1)],1)},me=[],ve={},fe=Object(u["a"])(ve,de,me,!1,null,null,null),pe=fe.exports;m()(fe,{VCard:X["a"],VCardText:y["c"],VCardTitle:y["d"],VContainer:G["a"],VMain:f["a"],VRow:I["a"]}),o["a"].use(h["a"]);var be=[{path:"/about",component:U,children:[{name:"login",path:"/login",components:{allLog:Y}},{name:"ForgotPassword",path:"/forgot-password",components:{allLog:nt}},{name:"ResetPassword",path:"/reset-password",components:{allLog:ut}},{name:"SetInitialPassword",path:"/set-initial-password",components:{allLog:bt}},{name:"SignUp",path:"/sign-up",components:{allLog:Ct}},{name:"about",path:"",components:{allLog:pe}}]},{path:"/NavBar",name:"barra-perfil",component:ue},{path:"/",component:Yt,meta:{requireAuth:!0},children:[{name:"home",path:"/home",components:{allPages:Bt}},{name:"PerfilView",path:"/perfil",components:{allPages:Rt}},{name:"AddBook",path:"/add-book",component:function(){return Promise.resolve().then(a.bind(null,"d375"))},components:{allPages:Ft["default"]}},{name:"MyBook",path:"/my-book",component:function(){return Promise.resolve().then(a.bind(null,"8900"))},components:{allPages:Ut["default"]}}]}],he=new h["a"]({mode:"history",base:"/",routes:be});he.beforeEach((function(t,e,a){var o=t.matched.some((function(t){return t.meta.requireAuth}));o&&""===yt.state.token?a({name:"login"}):a()}));var we=he,ge=(a("15f5"),a("d1e78"),a("2ec8"),a("f309")),xe=a("b1b5");o["a"].use(ge["a"]),o["a"].use(xe["VueperSlides"],xe["VueperSlide"]);var Ve=new ge["a"]({icons:{iconfont:"fa"}}),_e=a("bc3a"),Ce=a.n(_e),ke=a("130e");o["a"].use(ke["a"],Ce.a),Ce.a.defaults.baseURL="https://tranquil-garden-36068.herokuapp.com/api",o["a"].config.productionTip=!1,new o["a"]({router:we,store:yt,vuetify:Ve,render:function(t){return t(b)}}).$mount("#app")},"5f4d":function(t,e,a){"use strict";a("c47b")},8900:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},t._l(t.books,(function(e,o){return a("v-col",{key:o,staticClass:"pa-3",attrs:{sm:"4"}},[a("v-card",{staticClass:"pa-1",attrs:{"max-width":"344"}},[a("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}},[t._v(" "+t._s(e.imgStatus))]),a("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[t._v(" "+t._s(e.author)+"1,000 miles of wonder ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Explore ")]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",{staticClass:"py-0"},[t._v(" "+t._s(e.isbn)+" ")])],1)])],1)],1)})),1)],1)},n=[],s=a("5530"),r=a("2f62"),i={name:"MyBook",components:{},data:function(){return{show:!1,books:[]}},computed:Object(s["a"])({},Object(r["c"])(["token","userDB"])),created:function(){this.bookList()},methods:{bookList:function(){var t=this,e=this.userDB.data._id;this.axios.get("/book/".concat(e)).then((function(e){t.books=e.data})).catch((function(t){console.log(t.response)}))}}},l=i,c=a("2877"),u=a("6544"),d=a.n(u),m=a("8336"),v=a("b0af"),f=a("99d9"),p=a("62ad"),b=a("a523"),h=a("ce7e"),w=a("0789"),g=a("132d"),x=a("adda"),V=a("0fd9"),_=a("2fa4"),C=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=C.exports;d()(C,{VBtn:m["a"],VCard:v["a"],VCardActions:f["a"],VCardSubtitle:f["b"],VCardText:f["c"],VCardTitle:f["d"],VCol:p["a"],VContainer:b["a"],VDivider:h["a"],VExpandTransition:w["a"],VIcon:g["a"],VImg:x["a"],VRow:V["a"],VSpacer:_["a"]})},"98b4":function(t,e,a){},bf83:function(t,e,a){t.exports=a.p+"img/LogoNoFondo800px.f425a67b.png"},c47b:function(t,e,a){},d375:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("v-col",[a("h1",[t._v("Ingresar datos del libro")]),a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.addBook()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{counter:10,label:"titulo del Libro",required:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("v-text-field",{attrs:{label:"ISBN",required:""},model:{value:t.form.isbn,callback:function(e){t.$set(t.form,"isbn",e)},expression:"form.isbn"}}),a("v-text-field",{attrs:{label:"Autor",required:""},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author",e)},expression:"form.author"}}),a("v-text-field",{attrs:{label:"Cargar Imagenes",required:""},model:{value:t.form.imgStatus,callback:function(e){t.$set(t.form,"imgStatus",e)},expression:"form.imgStatus"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success",type:"submit"}},[t._v(" Añadir libro ")]),a("v-btn",{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.reset}},[t._v(" Borrar formulario ")])],1)],1)],1),a("v-row",[a("v-col",[a("v-form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.searchBook()}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("h1",[t._v("Buscar datos del libro")]),a("v-text-field",{attrs:{placeholder:"Título, autor",counter:50,label:"Buscar libro",required:""},model:{value:t.form.search,callback:function(e){t.$set(t.form,"search",e)},expression:"form.search"}},[a("v-icon",{attrs:{slot:"append"},slot:"append"},[t._v("mdi-magnify")])],1),a("v-btn",{staticClass:"mr-5",attrs:{type:"submit",color:"secondary"}},[t._v(" Buscar Libro ")])],1)],1)],1),a("v-row",{attrs:{"no-gutters":""}},t._l(t.books,(function(e,o){return a("v-col",{key:o,staticClass:"pa-3",attrs:{sm:"5","max-width":"350"}},[a("v-card",{staticClass:"pa-2"},[a("v-img",{attrs:{src:"item.volumeInfo.imageLinks.thumbnail !=undefined?item.volumeInfo.imageLinks.thumbnail:'no existe' ","max-height":"300",contain:""}}),a("v-card-title",[t._v(" "+t._s(e.volumeInfo.title)+" ")]),a("v-card-subtitle",[t._v(" Autors: "+t._s(e.volumeInfo.authors)+" ")]),a("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.addBook()}}},[t._v(" Añadir libro ")]),a("v-card-actions",[a("v-btn",{attrs:{color:"orange darken-2",text:""}},[t._v(" Descripción ")]),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[a("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),a("v-expand-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[a("v-divider"),a("v-card-text",{staticClass:"py-0 ma-2"},[t._v(" "+t._s(e.volumeInfo.description)+" ")])],1)])],1)],1)})),1)],1)},n=[],s=a("5530"),r=(a("ac1f"),a("841c"),a("2f62")),i=a("bc3a"),l=a.n(i),c={name:"AddBook",computed:Object(s["a"])({},Object(r["c"])(["token","userDB"])),data:function(){return{valid:!0,show:!1,form:{title:"",isbn:"",author:"",imgStatus:"",search:""},books:[]}},created:function(){console.log()},methods:{reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},addBook:function(){var t=this,e={headers:{token:this.token}};this.axios.post("/new-book",this.form,e).then((function(e){console.log("data "+e.data),t.$router.push({name:"home"})})).catch((function(t){console.log(t.response)}))},searchBook:function(){var t=this,e=this.form.search;l.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"+title").then((function(e){console.log(e.data),t.books=e.data.items})).catch((function(t){return console.log(t)}))}}},u=c,d=a("2877"),m=a("6544"),v=a.n(m),f=a("8336"),p=a("b0af"),b=a("99d9"),h=a("62ad"),w=a("a523"),g=a("ce7e"),x=a("0789"),V=a("4bd4"),_=a("132d"),C=a("adda"),k=a("0fd9"),y=a("8654"),P=Object(d["a"])(u,o,n,!1,null,null,null);e["default"]=P.exports;v()(P,{VBtn:f["a"],VCard:p["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCol:h["a"],VContainer:w["a"],VDivider:g["a"],VExpandTransition:x["a"],VForm:V["a"],VIcon:_["a"],VImg:C["a"],VRow:k["a"],VTextField:y["a"]})}});
//# sourceMappingURL=app.4e817cd5.js.map