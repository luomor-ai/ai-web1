(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5303ccde"],{"0e05":function(e,t,r){"use strict";r("88d2")},"30f2":function(e,t,r){"use strict";var a=r("939d"),o=r("d3c4").find,n=r("23ea"),i="find",s=!0;i in[]&&Array(1)[i]((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(i)},"88d2":function(e,t,r){},b775:function(e,t,r){"use strict";r("8300");var a=r("f753"),o=r.n(a),n=r("b705"),i=r("4360"),s="https://ai.7otech.com",l=o.a.create({baseURL:s});l.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),l.interceptors.response.use((function(e){var t=e.data;return 0!==t.code?(Object(n["Message"])({message:t.message||"Error",type:"error",duration:5e3}),50008!==t.code&&50012!==t.code&&50014!==t.code||n["MessageBox"].confirm("You have been logged out, you can cancel to stay on this page, or log in again","Confirm logout",{confirmButtonText:"Re-Login",cancelButtonText:"Cancel",type:"warning"}).then((function(){i["a"].dispatch("user/resetToken").then((function(){location.reload()}))})),Promise.reject(t.message||"Error")):t}),(function(e){return console.log("err"+e),Object(n["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)})),t["a"]=l},c083:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120"}},[r("el-form-item",{attrs:{label:"图片1"}},[r("el-input",{model:{value:e.form.url1,callback:function(t){e.$set(e.form,"url1",t)},expression:"form.url1"}})],1),r("el-form-item",{attrs:{label:"图片2"}},[r("el-input",{model:{value:e.form.url2,callback:function(t){e.$set(e.form,"url2",t)},expression:"form.url2"}})],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",[r("img",{attrs:{src:e.form.url1,width:"200px"}})]),r("el-form-item",[r("img",{attrs:{src:e.form.url2,width:"200px"}})])],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result1,"expand-depth":4,copyable:"",width:"400px"}})],1)],1)],1),r("el-form-item",[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small","element-loading-text":"拼命加载中"},on:{click:e.onSubmit}},[e._v("人脸比对")])],1),r("el-form-item",[r("el-divider")],1),r("el-row",[r("el-col",{attrs:{span:8}},[r("div",[r("img",{staticClass:"avatar",attrs:{src:e.form.base64Img1,width:"200px"}})]),r("div",[r("img",{staticClass:"avatar",attrs:{src:e.form.base64Img2,width:"200px"}})]),r("el-form-item",{attrs:{label:"Local Image"}},[r("el-upload",{ref:"upload",staticClass:"upload",attrs:{multiple:"",name:"imageFiles",action:e.upload(),"on-preview":e.handlePreview,"on-change":e.handleChange,"on-remove":e.handleRemove,"on-exceed":e.handleExceed,"before-upload":e.beforeUpload,"file-list":e.fileList,"http-request":e.uploadFile,":limit":2,"auto-upload":!1}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small","element-loading-text":"拼命加载中"},on:{click:e.submitUpload}},[e._v("上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Image format: JPG(JPEG), PNG")])],1)],1)],1),r("el-col",{attrs:{span:9}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result2,"expand-depth":4,copyable:"",width:"400px"}})],1)],1)],1)],1)],1)},o=[],n=(r("8300"),r("60fe"),r("7241"),r("30f2"),r("fc36"),r("e21c")),i=r("258b"),s=r.n(i),l={name:"Feature",components:{JsonViewer:s.a},data:function(){return{fullscreenLoading:!1,file:[],fileList:[],form:{url1:"https://www.7otech.com/assets/kana1.jpeg",url2:"https://www.7otech.com/assets/kana2.jpeg",result1:"",result2:"",base64Img:""}}},methods:{upload:function(){return"/face/compareForImageFiles"},uploadFile:function(e){this.file.push(e.file)},submitUpload:function(){var e=this;if(2!==this.fileList.length)this.$message({message:"请选择且仅选择 2 个图像文件",type:"warning"});else{this.fullscreenLoading=!0;var t=new FormData;this.$refs.upload.submit(),this.file.forEach((function(e){t.append("imageFiles",e,e.name)})),Object(n["a"])(t).then((function(t){e.form.base64Img1=t.data.base64Img1,e.form.base64Img2=t.data.base64Img2,e.form.result2=t.data.result,e.fullscreenLoading=!1,e.fileList=[]}))}},handleRemove:function(e,t){this.fileList=t},handleExceed:function(e,t){this.$message.warning("当前限制选择 2 个文件")},handleChange:function(e,t){var r=t.slice(0,t.length-1).find((function(t){return t.name===e.name}));r&&(this.$message.error("当前文件已经存在!"),t.pop()),this.fileList=t},handlePreview:function(e){console.log(e)},beforeUpload:function(e){var t="image/jpg"===e.type||"image/jpeg";return t||this.$message.error("Image format should be JPG(JPEG) or PNG!"),t},onSubmit:function(){var e=this;this.fullscreenLoading=!0,Object(n["b"])(this.form).then((function(t){e.fullscreenLoading=!1,e.form.result1=t.data.result}))}}},c=l,u=(r("0e05"),r("cba8")),f=Object(u["a"])(c,a,o,!1,null,"3b593e9a",null);t["default"]=f.exports},e21c:function(e,t,r){"use strict";r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return s}));var a=r("b775");function o(e){return Object(a["a"])({url:"/face/faceDetectionForImageUrl",method:"get",params:{url:e.url}})}function n(e){return Object(a["a"])({url:"/face/featureForImageUrl",method:"get",params:{url:e.url}})}function i(e){return Object(a["a"])({url:"/face/compareForImageUrls",method:"get",params:{url1:e.url1,url2:e.url2}})}function s(e){return Object(a["a"])({url:"/face/compareForImageFiles",method:"post",data:e})}},fc36:function(e,t,r){"use strict";var a=r("939d"),o=r("abaf"),n=r("e7e6"),i=r("cc41"),s=r("f9e3"),l=r("d381"),c=r("19eb"),u=r("4a95"),f=r("8c8f"),m=r("b891"),d=r("c464"),p=r("9b96"),g=d("slice"),h=m("species"),b=o.Array,v=Math.max;a({target:"Array",proto:!0,forced:!g},{slice:function(e,t){var r,a,o,m=u(this),d=c(m),g=l(e,d),w=l(void 0===t?d:t,d);if(n(m)&&(r=m.constructor,i(r)&&(r===b||n(r.prototype))?r=void 0:s(r)&&(r=r[h],null===r&&(r=void 0)),r===b||void 0===r))return p(m,g,w);for(a=new(void 0===r?b:r)(v(w-g,0)),o=0;g<w;g++,o++)g in m&&f(a,o,m[g]);return a.length=o,a}})}}]);