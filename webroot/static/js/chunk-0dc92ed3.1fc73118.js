(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dc92ed3"],{1108:function(e,t,r){var n=r("6f14"),o=Error,a=n("".replace),i=function(e){return String(o(e).stack)}("zxcasd"),s=/\n\s*at [^:]*:[^\n]*/,c=s.test(i);e.exports=function(e,t){if(c&&"string"==typeof e&&!o.prepareStackTrace)while(t--)e=a(e,s,"");return e}},"126b":function(e,t,r){var n=r("d3b3");e.exports=function(e){try{if(n)return Function('return require("'+e+'")')()}catch(t){}}},"1b71":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120"}},[r("el-form-item",{attrs:{label:"Online Wav"}},[r("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-form-item",[r("audio",{attrs:{id:"audio1",src:e.form.url,controls:"controls"}})])],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result1,"expand-depth":3,copyable:"",width:"400px"}})],1)],1)],1),r("el-form-item",[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary",size:"small","element-loading-text":"拼命加载中"},on:{click:e.onSubmit}},[e._v("语音识别")])],1),r("el-form-item",[r("el-divider")],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("div",[r("audio",{attrs:{src:e.form.base64Audio,controls:"controls"}})]),r("el-form-item",{attrs:{label:"Local Wav"}},[r("el-upload",{ref:"upload",staticClass:"upload",attrs:{name:"audioFile",action:e.upload(),"on-preview":e.handlePreview,"on-change":e.handleChange,"on-remove":e.handleRemove,"on-success":e.handleSuccess,"before-upload":e.beforeUpload,":limit":1,accept:".wav","show-file-list":!1,"auto-upload":!1}},[r("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticStyle:{"margin-left":"10px"},attrs:{type:"success",size:"small","element-loading-text":"拼命加载中"},on:{click:e.submitUpload}},[e._v("上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("Audio format: Wav")])],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result2,"expand-depth":3,copyable:"",width:"500px"}})],1)],1)],1),r("el-form-item",[r("el-divider")],1),r("el-row",[r("el-col",{attrs:{span:9}},[r("el-button",{attrs:{type:"primary"},on:{touchstart:e.mouseStart,touchend:e.mouseEnd},nativeOn:{mousedown:function(t){return e.mouseStart(t)},mouseup:function(t){return e.mouseEnd(t)}}},[e._v(e._s(e.form.time))]),r("p"),r("span",[e._v(e._s(e.form.time))]),r("p"),e.form.audioUrl?r("audio",{attrs:{src:e.form.audioUrl,controls:"controls"}}):e._e()],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:""}},[r("json-viewer",{attrs:{value:e.form.result3,"expand-depth":3,copyable:"",width:"500px"}})],1)],1)],1)],1)],1)},o=[],a=(r("7141"),r("2ce8"),r("792c"),r("2904"),r("8300"),r("2901"),r("da44"),r("d653"),r("3d2c"),r("0c7a"),r("24d5"),r("79ad"),r("16a4"),r("b7b1"),r("b0b7"),r("deea"),r("816b"),r("eec2"),r("58a1"),r("fcde"),r("c26d"),r("d933"),r("233e"),r("2c1f"),r("1953"),r("9cb7"),r("1821"),r("12d8"),r("63f3"),r("95ee"),r("3fcb"),r("b245"),r("2c31"),r("b6bf"),r("ea5b"),r("e551"),r("2f76"),r("49c7"),r("5437")),i=r("258b"),s=r.n(i),c=r("b900"),u={name:"SpeechAsr",components:{JsonViewer:s.a},data:function(){return{fullscreenLoading:!1,form:{url:r("4949"),result1:"",result2:"",base64Audio:"",time:"按住说话(60秒)",audioUrl:"",result3:""},num:60,recorder:null,interval:"",audioFileList:[],startTime:"",endTime:""}},methods:{upload:function(){return"/ocr/uploadAudio"},submitUpload:function(){this.fullscreenLoading=!0,this.$refs.upload.submit()},handleRemove:function(e,t){console.log(e,t)},handleChange:function(e){console.log(e)},handlePreview:function(e){console.log(e)},handleSuccess:function(e){var t=this;console.log(e),this.form.base64Audio=e.data.base64Audio;var r=this.form.base64Audio.substring(this.form.base64Audio.indexOf(",")+1),n={audio:r,audio_format:"wav",sample_rate:16e3,lang:"zh_cn",punc:0};Object(a["a"])(JSON.stringify(n)).then((function(e){t.fullscreenLoading=!1,t.form.result2=e.result}))},beforeUpload:function(e){var t="audio/wav"===e.type;return t||this.$message.error("Audio format should be Wav!"),t},getBase64Image:function(e){var t=document.createElement("canvas");t.width=e.width,t.height=e.height;var r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);var n=t.toDataURL("image/png");return n.replace("data:image/png;base64,","")},bufferToBase64:function(e){for(var t=new Uint8Array(e),r=e.byteLength,n="",o=0;o<r;o++)n+=String.fromCharCode(t[o]);return window.btoa(n)},loadSoundFile:function(e){var t=this,r=new XMLHttpRequest;r.open("GET",e,!0),r.responseType="arraybuffer",r.onload=function(e){var r=t.bufferToBase64(this.response),n={audio:r,audio_format:"wav",sample_rate:16e3,lang:"zh_cn",punc:0};Object(a["a"])(n).then((function(e){t.fullscreenLoading=!1,t.form.result1=e.result}))},r.send()},onSubmit:function(){this.fullscreenLoading=!0;var e=document.getElementById("audio1");this.loadSoundFile(e.src)},clearTimer:function(){this.interval&&(this.num=60,clearInterval(this.interval))},mouseStart:function(){var e=this;this.clearTimer(),this.startTime=(new Date).getTime(),c["a"].get((function(t){t&&(e.flag?(e.mouseEnd(),e.flag=!1):(e.recorder=t,e.interval=setInterval((function(){e.num<=0?(e.recorder.stop(),e.num=60,e.clearTimer()):(e.num--,e.form.time="松开结束（"+e.num+"秒）",e.recorder.start())}),1e3)))}))},mouseEnd:function(){var e=this;if(this.clearTimer(),this.endTime=(new Date).getTime(),this.recorder){this.recorder.stop(),this.num=60,this.form.time="按住说话（"+this.num+"秒）";var t=this.recorder.getBlob();console.log(t.arrayBuffer());var r=new File([t],"test.mp3",{type:"audio/mp3",lastModified:Date.now()});console.log(r),this.form.audioUrl=window.URL.createObjectURL(t);var n=new FileReader;n.onloadend=function(t){var r=t.target.result,n=r.substring(r.indexOf(",")+1),o={audio:n,audio_format:"mp3",sample_rate:16e3,lang:"zh_cn",punc:0};e.fullscreenLoading=!0,Object(a["a"])(JSON.stringify(o)).then((function(t){e.fullscreenLoading=!1,e.form.result3=t.result}))},n.readAsDataURL(t);var o=new FormData;o.append("file",r),console.log(o)}}}},l=u,d=(r("2c21"),r("cba8")),f=Object(d["a"])(l,n,o,!1,null,"59f0a804",null);t["default"]=f.exports},"20bd":function(e,t,r){"use strict";var n=r("9502"),o=r("2c5e"),a=r("c7b3"),i=r("75f4"),s=r("7ded"),c=Error.prototype.toString,u=o((function(){if(n){var e=i(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==c.call(e))return!0}return"2: 1"!==c.call({message:1,name:2})||"Error"!==c.call({})}));e.exports=u?function(){var e=a(this),t=s(e.name,"Error"),r=s(e.message);return t?r?t+": "+r:t:r}:c},2901:function(e,t,r){var n=r("3100");n("Uint8",(function(e){return function(t,r,n){return e(this,t,r,n)}}))},"2c21":function(e,t,r){"use strict";r("6c095")},"2c31":function(e,t,r){"use strict";var n=r("939d"),o=r("e58d"),a=r("bb05"),i=r("71fb").f,s=r("d9ee"),c=r("ebbe"),u=r("bc22"),l=r("7ded"),d=r("f447"),f=r("1108"),m=r("201b"),p="DOMException",v=o("Error"),h=o(p),g=function(){c(this,b);var e=arguments.length,t=l(e<1?void 0:arguments[0]),r=l(e<2?void 0:arguments[1],"Error"),n=new h(t,r),o=v(t);return o.name=p,i(n,"stack",a(1,f(o.stack,1))),u(n,this,g),n},b=g.prototype=h.prototype,E="stack"in v(p),R="stack"in new h(1,2),w=E&&!R;n({global:!0,constructor:!0,forced:m||w},{DOMException:w?g:h});var _=o(p),S=_.prototype;if(S.constructor!==_)for(var A in m||i(S,"constructor",a(1,_)),d)if(s(d,A)){var y=d[A],x=y.s;s(_,x)||i(_,x,a(6,y.c))}},"3fcb":function(e,t,r){var n=r("939d"),o=r("e58d"),a=r("6f14"),i=r("2c5e"),s=r("3e87"),c=r("34b0"),u=r("849e").itoc,l=o("btoa"),d=a("".charAt),f=a("".charCodeAt),m=!!l&&!i((function(){l()})),p=!!l&&i((function(){return"bnVsbA=="!==l(null)})),v=!!l&&1!==l.length;n({global:!0,enumerable:!0,forced:m||p||v},{btoa:function(e){if(c(arguments.length,1),m||p||v)return l(s(e));var t,r,n=s(e),a="",i=0,h=u;while(d(n,i)||(h="=",i%1)){if(r=f(n,i+=3/4),r>255)throw new(o("DOMException"))("The string contains characters outside of the Latin1 range","InvalidCharacterError");t=t<<8|r,a+=d(h,63&t>>8-i%1*8)}return a}})},4949:function(e,t,r){e.exports=r.p+"static/media/zh.d088e7de.wav"},"4f7e":function(e,t,r){"use strict";r("2ce8");var n=r("6f14"),o=r("7562"),a=r("5e0c"),i=r("2c5e"),s=r("b891"),c=r("dbc0"),u=s("species"),l=RegExp.prototype;e.exports=function(e,t,r,d){var f=s(e),m=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=m&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return t=!0,null},r[f](""),!t}));if(!m||!p||r){var v=n(/./[f]),h=t(f,""[e],(function(e,t,r,o,i){var s=n(e),c=t.exec;return c===a||c===l.exec?m&&!i?{done:!0,value:v(t,r,o)}:{done:!0,value:s(r,t,o)}:{done:!1}}));o(String.prototype,e,h[0]),o(l,f,h[1])}d&&c(l[f],"sham",!0)}},5437:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));r("8300"),r("7141"),r("90e0"),r("5920");var n=r("f753"),o=r.n(n),a=r("b705"),i="https://ai.7otech.com",s=o.a.create({baseURL:i,headers:{"Content-Type":"application/json"}});s.interceptors.request.use((function(e){return e}),(function(e){return console.log(e),Promise.reject(e)})),s.interceptors.response.use((function(e){var t=e.data;return 200!==t.code?(Object(a["Message"])({message:t.message.description||"Error",type:"error",duration:5e3}),Promise.reject(t.message.description||"Error")):t}),(function(e){return console.log("err"+e),Object(a["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var c=s;function u(e){return c({url:"/speech/asr",method:"post",data:e})}function l(e){return c({url:"/speech/tts",method:"post",data:e})}},5920:function(e,t,r){"use strict";var n=r("939d"),o=r("9502"),a=r("abaf"),i=r("6f14"),s=r("d9ee"),c=r("0dca"),u=r("09bc"),l=r("3e87"),d=r("71fb").f,f=r("5f42"),m=a.Symbol,p=m&&m.prototype;if(o&&c(m)&&(!("description"in p)||void 0!==m().description)){var v={},h=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),t=u(p,this)?new m(e):void 0===e?m():m(e);return""===e&&(v[t]=!0),t};f(h,m),h.prototype=p,p.constructor=h;var g="Symbol(test)"==String(m("test")),b=i(p.toString),E=i(p.valueOf),R=/^Symbol\((.*)\)[^)]+$/,w=i("".replace),_=i("".slice);d(p,"description",{configurable:!0,get:function(){var e=E(this),t=b(e);if(s(v,e))return"";var r=g?_(t,7,-1):w(t,R,"$1");return""===r?void 0:r}}),n({global:!0,constructor:!0,forced:!0},{Symbol:h})}},"6c095":function(e,t,r){},"792c":function(e,t,r){"use strict";var n=r("1bd9"),o=r("4b8d"),a=r("6f14"),i=r("4f7e"),s=r("2c5e"),c=r("c7b3"),u=r("0dca"),l=r("0af0"),d=r("de5a"),f=r("3e87"),m=r("3978"),p=r("8de2"),v=r("e001"),h=r("e72a"),g=r("837a"),b=r("b891"),E=b("replace"),R=Math.max,w=Math.min,_=a([].concat),S=a([].push),A=a("".indexOf),y=a("".slice),x=function(e){return void 0===e?e:String(e)},I=function(){return"$0"==="a".replace(/./,"$0")}(),O=function(){return!!/./[E]&&""===/./[E]("a","$0")}(),T=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var a=O?"$":"$0";return[function(e,r){var n=m(this),a=void 0==e?void 0:v(e,E);return a?o(a,e,n,r):o(t,f(n),e,r)},function(e,o){var i=c(this),s=f(e);if("string"==typeof o&&-1===A(o,a)&&-1===A(o,"$<")){var m=r(t,i,s,o);if(m.done)return m.value}var v=u(o);v||(o=f(o));var b=i.global;if(b){var E=i.unicode;i.lastIndex=0}var I=[];while(1){var O=g(i,s);if(null===O)break;if(S(I,O),!b)break;var T=f(O[0]);""===T&&(i.lastIndex=p(s,d(i.lastIndex),E))}for(var U="",M=0,D=0;D<I.length;D++){O=I[D];for(var L=f(O[0]),N=R(w(l(O.index),s.length),0),C=[],k=1;k<O.length;k++)S(C,x(O[k]));var B=O.groups;if(v){var F=_([L],C,N,s);void 0!==B&&S(F,B);var $=f(n(o,void 0,F))}else $=h(L,s,N,C,B,o);N>=M&&(U+=y(s,M,N)+$,M=N+L.length)}return U+y(s,M)}]}),!T||!I||O)},"7ded":function(e,t,r){var n=r("3e87");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},"837a":function(e,t,r){var n=r("abaf"),o=r("4b8d"),a=r("c7b3"),i=r("0dca"),s=r("53ce"),c=r("5e0c"),u=n.TypeError;e.exports=function(e,t){var r=e.exec;if(i(r)){var n=o(r,e,t);return null!==n&&a(n),n}if("RegExp"===s(e))return o(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},"849e":function(e,t){for(var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n={},o=0;o<66;o++)n[r.charAt(o)]=o;e.exports={itoc:r,ctoi:n}},"8de2":function(e,t,r){"use strict";var n=r("f7c1").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},b245:function(e,t,r){"use strict";var n=r("939d"),o=r("126b"),a=r("e58d"),i=r("2c5e"),s=r("75f4"),c=r("bb05"),u=r("71fb").f,l=r("7562"),d=r("d01e"),f=r("d9ee"),m=r("ebbe"),p=r("c7b3"),v=r("20bd"),h=r("7ded"),g=r("f447"),b=r("1108"),E=r("0f33"),R=r("9502"),w=r("201b"),_="DOMException",S="DATA_CLONE_ERR",A=a("Error"),y=a(_)||function(){try{var e=a("MessageChannel")||o("worker_threads").MessageChannel;(new e).port1.postMessage(new WeakMap)}catch(t){if(t.name==S&&25==t.code)return t.constructor}}(),x=y&&y.prototype,I=A.prototype,O=E.set,T=E.getterFor(_),U="stack"in A(_),M=function(e){return f(g,e)&&g[e].m?g[e].c:0},D=function(){m(this,L);var e=arguments.length,t=h(e<1?void 0:arguments[0]),r=h(e<2?void 0:arguments[1],"Error"),n=M(r);if(O(this,{type:_,name:r,message:t,code:n}),R||(this.name=r,this.message=t,this.code=n),U){var o=A(t);o.name=_,u(this,"stack",c(1,b(o.stack,1)))}},L=D.prototype=s(I),N=function(e){return{enumerable:!0,configurable:!0,get:e}},C=function(e){return N((function(){return T(this)[e]}))};R&&(d(L,"code",C("code")),d(L,"message",C("message")),d(L,"name",C("name"))),u(L,"constructor",c(1,D));var k=i((function(){return!(new y instanceof A)})),B=k||i((function(){return I.toString!==v||"2: 1"!==String(new y(1,2))})),F=k||i((function(){return 25!==new y(1,"DataCloneError").code})),$=k||25!==y[S]||25!==x[S],j=w?B||F||$:k;n({global:!0,constructor:!0,forced:j},{DOMException:j?D:y});var P=a(_),z=P.prototype;for(var V in B&&(w||y===P)&&l(z,"toString",v),F&&R&&y===P&&d(z,"code",N((function(){return M(p(this).name)}))),g)if(f(g,V)){var W=g[V],H=W.s,G=c(6,W.c);f(P,H)||u(P,H,G),f(z,H)||u(z,H,G)}},b6bf:function(e,t,r){var n=r("e58d"),o=r("e6dd"),a="DOMException";o(n(a),a)},b900:function(e,t,r){"use strict";r("8300"),r("ea5b"),r("e551"),r("2f76"),r("49c7"),r("2904"),r("71ae"),r("da44"),r("d653"),r("3d2c"),r("0c7a"),r("24d5"),r("79ad"),r("16a4"),r("b7b1"),r("b0b7"),r("deea"),r("816b"),r("eec2"),r("58a1"),r("fcde"),r("c26d"),r("d933"),r("233e"),r("2c1f"),r("1953"),r("9cb7"),r("1821"),r("12d8"),r("63f3"),r("95ee"),r("0d6c"),r("eba8"),r("7241");window.URL=window.URL||window.webkitURL,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(e,t){t=t||{},t.sampleBits=t.sampleBits||8,t.sampleRate=t.sampleRate||7350;var r=new(window.webkitAudioContext||window.AudioContext),n=r.createMediaStreamSource(e),o=r.createScriptProcessor||r.createJavaScriptNode,a=o.apply(r,[4096,1,1]),i={size:0,buffer:[],inputSampleRate:r.sampleRate,inputSampleBits:16,outputSampleRate:t.sampleRate,outputSampleBits:t.sampleBits,input:function(e){this.buffer.push(new Float32Array(e)),this.size+=e.length},compress:function(){for(var e=new Float32Array(this.size),t=0,r=0;r<this.buffer.length;r++)e.set(this.buffer[r],t),t+=this.buffer[r].length;var n=parseInt(this.inputSampleRate/this.outputSampleRate),o=e.length/n,a=new Float32Array(o),i=0,s=0;while(i<o)a[i]=e[s],s+=n,i++;return a},encodeWAV:function(){var e=Math.min(this.inputSampleRate,this.outputSampleRate),t=Math.min(this.inputSampleBits,this.outputSampleBits),r=this.compress(),n=r.length*(t/8),o=new ArrayBuffer(44+n),a=new DataView(o),i=1,s=0,c=function(e){for(var t=0;t<e.length;t++)a.setUint8(s+t,e.charCodeAt(t))};if(c("RIFF"),s+=4,a.setUint32(s,36+n,!0),s+=4,c("WAVE"),s+=4,c("fmt "),s+=4,a.setUint32(s,16,!0),s+=4,a.setUint16(s,1,!0),s+=2,a.setUint16(s,i,!0),s+=2,a.setUint32(s,e,!0),s+=4,a.setUint32(s,i*e*(t/8),!0),s+=4,a.setUint16(s,i*(t/8),!0),s+=2,a.setUint16(s,t,!0),s+=2,c("data"),s+=4,a.setUint32(s,n,!0),s+=4,8===t)for(var u=0;u<r.length;u++,s++){var l=Math.max(-1,Math.min(1,r[u])),d=l<0?32768*l:32767*l;d=parseInt(255/(65535/(d+32768))),a.setInt8(s,d,!0)}else for(var f=0;f<r.length;f++,s+=2){var m=Math.max(-1,Math.min(1,r[f]));a.setInt16(s,m<0?32768*m:32767*m,!0)}return new Blob([a],{type:"audio/mp3"})}};this.start=function(){n.connect(a),a.connect(r.destination)},this.stop=function(){a.disconnect()},this.getBlob=function(){return this.stop(),i.encodeWAV()},this.play=function(e){var t=document.getElementById("downloadRec");t.href=window.URL.createObjectURL(this.getBlob()),t.download=(new Date).toLocaleString()+".mp3",e.src=window.URL.createObjectURL(this.getBlob())},this.upload=function(e,t){var r=new FormData;r.append("audioData",this.getBlob());var n=new XMLHttpRequest;t&&(n.upload.addEventListener("progress",(function(e){t("uploading",e)}),!1),n.addEventListener("load",(function(e){t("ok",e)}),!1),n.addEventListener("error",(function(e){t("error",e)}),!1),n.addEventListener("abort",(function(e){t("cancel",e)}),!1)),n.open("POST",e),n.send(r)},a.onaudioprocess=function(e){i.input(e.inputBuffer.getChannelData(0))}};n.throwError=function(e){throw alert(e),new function(){this.toString=function(){return e}}},n.canRecording=null!=navigator.getUserMedia,n.get=function(e,t){if(e){if(!navigator.getUserMedia)return void n.throwErr("当前浏览器不支持录音功能。");navigator.getUserMedia({audio:!0},(function(r){var o=new n(r,t);e(o)}),(function(e){switch(e.code||e.name){case"PERMISSION_DENIED":case"PermissionDeniedError":n.throwError("用户拒绝提供信息。");break;case"NOT_SUPPORTED_ERROR":case"NotSupportedError":n.throwError("浏览器不支持硬件设备。");break;case"MANDATORY_UNSATISFIED_ERROR":case"MandatoryUnsatisfiedError":n.throwError("无法发现指定的硬件设备。");break;default:n.throwError("无法打开麦克风。异常信息:"+(e.code||e.name));break}}))}},t["a"]=n},e72a:function(e,t,r){var n=r("6f14"),o=r("3552"),a=Math.floor,i=n("".charAt),s=n("".replace),c=n("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,d,f){var m=r+e.length,p=n.length,v=l;return void 0!==d&&(d=o(d),v=u),s(f,v,(function(o,s){var u;switch(i(s,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,r);case"'":return c(t,m);case"<":u=d[c(s,1,-1)];break;default:var l=+s;if(0===l)return o;if(l>p){var f=a(l/10);return 0===f?o:f<=p?void 0===n[f-1]?i(s,1):n[f-1]+i(s,1):o}u=n[l-1]}return void 0===u?"":u}))}},f447:function(e,t){e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}}}]);