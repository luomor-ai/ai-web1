(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-41c86579"],{2257:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120"}},[r("el-form-item",{attrs:{label:"Online Image"}},[r("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",[r("img",{attrs:{id:"img1",src:e.form.url,width:"400px"}})])],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result1,"expand-depth":3,copyable:"",width:"400px"}})],1)],1)],1),r("el-form-item",[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small","element-loading-text":"拼命加载中"},on:{click:e.onSubmit}},[e._v("烟火检测")])],1),r("el-form-item",[r("el-divider")],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("div",[r("img",{staticClass:"avatar",attrs:{src:e.form.base64Img,width:"400px"}})]),r("el-form-item",{attrs:{label:"Local Image"}},[r("el-upload",{ref:"upload",staticClass:"upload",attrs:{name:"imageFile",action:e.upload(),"on-preview":e.handlePreview,"on-change":e.handleChange,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,":limit":1,"show-file-list":!1,"auto-upload":!1}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small","element-loading-text":"拼命加载中"},on:{click:e.submitUpload}},[e._v("上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Image format: JPG(JPEG), PNG")])],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result2,"expand-depth":3,copyable:"",width:"500px"}})],1)],1)],1)],1)],1)},a=[],o=(r("7141"),r("2ce8"),r("792c"),r("6fbf")),i=r("258b"),s=r.n(i),l={name:"FireSmokeDetect",components:{JsonViewer:s.a},data:function(){return{fullscreenLoading:!1,form:{url:r("95ed"),result1:"",result2:"",base64Img:""}}},methods:{upload:function(){return"/ocr/uploadImage"},submitUpload:function(){this.fullscreenLoading=!0,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},handlePreview:function(e){console.log(e)},handleSuccess:function(e){var t=this;console.log(e),this.form.base64Img=e.data.base64Img;var r=this.form.base64Img.substring(this.form.base64Img.indexOf(",")),n={images:[r]};Object(o["a"])(JSON.stringify(n)).then((function(e){t.fullscreenLoading=!1,t.form.result2=e.results}))},beforeUpload:function(e){var t="image/jpg"===e.type||"image/jpeg";return t||this.$message.error("Image format should be JPG(JPEG) or PNG!"),t},getBase64Image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);var n=t.toDataURL("image/png");return n.replace("data:image/png;base64,","")},onSubmit:function(){var e=this;this.fullscreenLoading=!0;var t=document.getElementById("img1"),r=this.getBase64Image(t),n={images:[r]};Object(o["a"])(n).then((function(t){e.fullscreenLoading=!1,e.form.result1=t.results}))}}},c=l,u=(r("db00"),r("cba8")),f=Object(u["a"])(c,n,a,!1,null,"c379a1fc",null);t["default"]=f.exports},"4f7e":function(e,t,r){"use strict";r("2ce8");var n=r("6f14"),a=r("7562"),o=r("5e0c"),i=r("2c5e"),s=r("b891"),l=r("dbc0"),c=s("species"),u=RegExp.prototype;e.exports=function(e,t,r,f){var d=s(e),m=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=m&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[d]=/./[d]),r.exec=function(){return t=!0,null},r[d](""),!t}));if(!m||!p||r){var g=n(/./[d]),v=t(d,""[e],(function(e,t,r,a,i){var s=n(e),l=t.exec;return l===o||l===u.exec?m&&!i?{done:!0,value:g(t,r,a)}:{done:!0,value:s(r,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(u,d,v[1])}f&&l(u[d],"sham",!0)}},"6fbf":function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return f}));r("8300"),r("7141");var n=r("f753"),a=r.n(n),o=r("b705"),i="https://ai.7otech.com",s=a.a.create({baseURL:i,headers:{"Content-Type":"application/json"}});s.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.data;return"000"!==t.status?(Object(o["Message"])({message:t.msg||"Error",type:"error",duration:5e3}),Promise.reject(t.msg||"Error")):t}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var l=s;function c(e){return l({url:"/predict/fire-smoke-detect-paddle",method:"post",data:e})}function u(e){return l({url:"/predict/helmet-detection",method:"post",data:e})}function f(e){return l({url:"/predict1/oral-detection",method:"post",data:e})}},"792c":function(e,t,r){"use strict";var n=r("1bd9"),a=r("4b8d"),o=r("6f14"),i=r("4f7e"),s=r("2c5e"),l=r("c7b3"),c=r("0dca"),u=r("0af0"),f=r("de5a"),d=r("3e87"),m=r("3978"),p=r("8de2"),g=r("e001"),v=r("e72a"),h=r("837a"),b=r("b891"),x=b("replace"),w=Math.max,y=Math.min,I=o([].concat),$=o([].push),k=o("".indexOf),j=o("".slice),L=function(e){return void 0===e?e:String(e)},E=function(){return"$0"==="a".replace(/./,"$0")}(),P=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),O=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var o=P?"$":"$0";return[function(e,r){var n=m(this),o=void 0==e?void 0:g(e,x);return o?a(o,e,n,r):a(t,d(n),e,r)},function(e,a){var i=l(this),s=d(e);if("string"==typeof a&&-1===k(a,o)&&-1===k(a,"$<")){var m=r(t,i,s,a);if(m.done)return m.value}var g=c(a);g||(a=d(a));var b=i.global;if(b){var x=i.unicode;i.lastIndex=0}var E=[];while(1){var P=h(i,s);if(null===P)break;if($(E,P),!b)break;var O=d(P[0]);""===O&&(i.lastIndex=p(s,f(i.lastIndex),x))}for(var S="",_=0,C=0;C<E.length;C++){P=E[C];for(var J=d(P[0]),R=w(y(u(P.index),s.length),0),G=[],U=1;U<P.length;U++)$(G,L(P[U]));var M=P.groups;if(g){var N=I([J],G,R,s);void 0!==M&&$(N,M);var z=d(n(a,void 0,N))}else z=v(J,s,R,G,M,a);R>=_&&(S+=j(s,_,R)+z,_=R+J.length)}return S+j(s,_)}]}),!O||!E||P)},"837a":function(e,t,r){var n=r("abaf"),a=r("4b8d"),o=r("c7b3"),i=r("0dca"),s=r("53ce"),l=r("5e0c"),c=n.TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var n=a(r,e,t);return null!==n&&o(n),n}if("RegExp"===s(e))return a(l,e,t);throw c("RegExp#exec called on incompatible receiver")}},"8de2":function(e,t,r){"use strict";var n=r("f7c1").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"95ed":function(e,t,r){e.exports=r.p+"static/img/fire_000001.c8ccd2bf.jpg"},b2cc:function(e,t,r){},db00:function(e,t,r){"use strict";r("b2cc")},e72a:function(e,t,r){var n=r("6f14"),a=r("3552"),o=Math.floor,i=n("".charAt),s=n("".replace),l=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,f,d){var m=r+e.length,p=n.length,g=u;return void 0!==f&&(f=a(f),g=c),s(d,g,(function(a,s){var c;switch(i(s,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,r);case"'":return l(t,m);case"<":c=f[l(s,1,-1)];break;default:var u=+s;if(0===u)return a;if(u>p){var d=o(u/10);return 0===d?a:d<=p?void 0===n[d-1]?i(s,1):n[d-1]+i(s,1):a}c=n[u-1]}return void 0===c?"":c}))}}}]);