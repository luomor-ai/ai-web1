(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef624544"],{"90f1":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"wrap"},[r("el-form",{model:{value:e.form,callback:function(t){e.form=t},expression:"form"}},[r("el-form-item",[r("el-button",{attrs:{type:"primary"},nativeOn:{mousedown:function(t){return e.mouseStart(t)},mouseup:function(t){return e.mouseEnd(t)}}},[e._v(e._s(e.form.time))]),r("el-divider"),r("span",[e._v(e._s(e.form.time))]),r("el-divider"),e.form.audioUrl?r("audio",{attrs:{src:e.form.audioUrl,controls:"controls"}}):e._e()],1)],1)],1)},a=[],i=(r("8300"),r("ea5b"),r("e551"),r("2f76"),r("49c7"),r("b900")),o={data:function(){return{form:{time:"按住说话(60秒)",audioUrl:""},num:60,recorder:null,interval:"",audioFileList:[],startTime:"",endTime:""}},methods:{clearTimer:function(){this.interval&&(this.num=60,clearInterval(this.interval))},mouseStart:function(){var e=this;this.clearTimer(),this.startTime=(new Date).getTime(),i["a"].get((function(t){t&&(e.flag?(e.mouseEnd(),e.flag=!1):(e.recorder=t,e.interval=setInterval((function(){e.num<=0?(e.recorder.stop(),e.num=60,e.clearTimer()):(e.num--,e.form.time="松开结束（"+e.num+"秒）",e.recorder.start())}),1e3)))}))},mouseEnd:function(){if(this.clearTimer(),this.endTime=(new Date).getTime(),this.recorder){this.recorder.stop(),this.num=60,this.form.time="按住说话（"+this.num+"秒）";var e=this.recorder.getBlob();console.log(e.arrayBuffer());var t=new File([e],"test.mp3",{type:"audio/mp3",lastModified:Date.now()});console.log(t),this.form.audioUrl=window.URL.createObjectURL(e);var r=new FileReader;r.onloadend=function(e){var t=e.target.result;console.log(t)},r.readAsDataURL(e);var n=new FormData;n.append("file",t),console.log(n)}}}},s=o,u=r("cba8"),c=Object(u["a"])(s,n,a,!1,null,"70c3f332",null);t["default"]=c.exports},b900:function(e,t,r){"use strict";r("8300"),r("ea5b"),r("e551"),r("2f76"),r("49c7"),r("2904"),r("71ae"),r("da44"),r("d653"),r("3d2c"),r("0c7a"),r("24d5"),r("79ad"),r("16a4"),r("b7b1"),r("b0b7"),r("deea"),r("816b"),r("eec2"),r("58a1"),r("fcde"),r("c26d"),r("d933"),r("233e"),r("2c1f"),r("1953"),r("9cb7"),r("1821"),r("12d8"),r("63f3"),r("95ee"),r("0d6c"),r("eba8"),r("7241");window.URL=window.URL||window.webkitURL,navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;var n=function(e,t){t=t||{},t.sampleBits=t.sampleBits||8,t.sampleRate=t.sampleRate||7350;var r=new(window.webkitAudioContext||window.AudioContext),n=r.createMediaStreamSource(e),a=r.createScriptProcessor||r.createJavaScriptNode,i=a.apply(r,[4096,1,1]),o={size:0,buffer:[],inputSampleRate:r.sampleRate,inputSampleBits:16,outputSampleRate:t.sampleRate,outputSampleBits:t.sampleBits,input:function(e){this.buffer.push(new Float32Array(e)),this.size+=e.length},compress:function(){for(var e=new Float32Array(this.size),t=0,r=0;r<this.buffer.length;r++)e.set(this.buffer[r],t),t+=this.buffer[r].length;var n=parseInt(this.inputSampleRate/this.outputSampleRate),a=e.length/n,i=new Float32Array(a),o=0,s=0;while(o<a)i[o]=e[s],s+=n,o++;return i},encodeWAV:function(){var e=Math.min(this.inputSampleRate,this.outputSampleRate),t=Math.min(this.inputSampleBits,this.outputSampleBits),r=this.compress(),n=r.length*(t/8),a=new ArrayBuffer(44+n),i=new DataView(a),o=1,s=0,u=function(e){for(var t=0;t<e.length;t++)i.setUint8(s+t,e.charCodeAt(t))};if(u("RIFF"),s+=4,i.setUint32(s,36+n,!0),s+=4,u("WAVE"),s+=4,u("fmt "),s+=4,i.setUint32(s,16,!0),s+=4,i.setUint16(s,1,!0),s+=2,i.setUint16(s,o,!0),s+=2,i.setUint32(s,e,!0),s+=4,i.setUint32(s,o*e*(t/8),!0),s+=4,i.setUint16(s,o*(t/8),!0),s+=2,i.setUint16(s,t,!0),s+=2,u("data"),s+=4,i.setUint32(s,n,!0),s+=4,8===t)for(var c=0;c<r.length;c++,s++){var d=Math.max(-1,Math.min(1,r[c])),l=d<0?32768*d:32767*d;l=parseInt(255/(65535/(l+32768))),i.setInt8(s,l,!0)}else for(var f=0;f<r.length;f++,s+=2){var m=Math.max(-1,Math.min(1,r[f]));i.setInt16(s,m<0?32768*m:32767*m,!0)}return new Blob([i],{type:"audio/mp3"})}};this.start=function(){n.connect(i),i.connect(r.destination)},this.stop=function(){i.disconnect()},this.getBlob=function(){return this.stop(),o.encodeWAV()},this.play=function(e){var t=document.getElementById("downloadRec");t.href=window.URL.createObjectURL(this.getBlob()),t.download=(new Date).toLocaleString()+".mp3",e.src=window.URL.createObjectURL(this.getBlob())},this.upload=function(e,t){var r=new FormData;r.append("audioData",this.getBlob());var n=new XMLHttpRequest;t&&(n.upload.addEventListener("progress",(function(e){t("uploading",e)}),!1),n.addEventListener("load",(function(e){t("ok",e)}),!1),n.addEventListener("error",(function(e){t("error",e)}),!1),n.addEventListener("abort",(function(e){t("cancel",e)}),!1)),n.open("POST",e),n.send(r)},i.onaudioprocess=function(e){o.input(e.inputBuffer.getChannelData(0))}};n.throwError=function(e){throw alert(e),new function(){this.toString=function(){return e}}},n.canRecording=null!=navigator.getUserMedia,n.get=function(e,t){if(e){if(!navigator.getUserMedia)return void n.throwErr("当前浏览器不支持录音功能。");navigator.getUserMedia({audio:!0},(function(r){var a=new n(r,t);e(a)}),(function(e){switch(e.code||e.name){case"PERMISSION_DENIED":case"PermissionDeniedError":n.throwError("用户拒绝提供信息。");break;case"NOT_SUPPORTED_ERROR":case"NotSupportedError":n.throwError("浏览器不支持硬件设备。");break;case"MANDATORY_UNSATISFIED_ERROR":case"MandatoryUnsatisfiedError":n.throwError("无法发现指定的硬件设备。");break;default:n.throwError("无法打开麦克风。异常信息:"+(e.code||e.name));break}}))}},t["a"]=n}}]);