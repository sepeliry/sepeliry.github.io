function t(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}var e=globalThis.parcelRequire0da3,a=e.register;a("danRq",function(t,a){e("xtmW0"),e("4RJM2"),e("7dx1H"),e("bqs0D"),e("7rvGX"),e("72HgH"),e("gltHT"),e("7t4bH"),e("jbAJT"),e("3WtzG"),e("3v0XG")}),a("6RGCN",function(a,n){t(a.exports,"CanvasPool",()=>s);var o=e("iCGeI"),r=e("NbSCN");let s=new class{constructor(t){this._canvasPool=Object.create(null),this.canvasOptions=t||{},this.enableFullScreen=!1}_createCanvasAndContext(t,e){let a=(0,o.DOMAdapter).get().createCanvas();a.width=t,a.height=e;let n=a.getContext("2d");return{canvas:a,context:n}}getOptimalCanvasAndContext(t,e,a=1){t=Math.ceil(t*a-1e-6),e=Math.ceil(e*a-1e-6),t=(0,r.nextPow2)(t),e=(0,r.nextPow2)(e);let n=(t<<17)+(e<<1);this._canvasPool[n]||(this._canvasPool[n]=[]);let o=this._canvasPool[n].pop();return o||(o=this._createCanvasAndContext(t,e)),o}returnCanvasAndContext(t){let{width:e,height:a}=t.canvas;this._canvasPool[(e<<17)+(a<<1)].push(t)}clear(){this._canvasPool={}}}}),a("5FRY8",function(a,n){t(a.exports,"batchSamplersUniformGroup",()=>l);var o=e("67Wkd"),r=e("cryyq");let s=new Int32Array(o.MAX_TEXTURES);for(let t=0;t<o.MAX_TEXTURES;t++)s[t]=t;let l=new r.UniformGroup({uTextures:{value:s,type:"i32",size:o.MAX_TEXTURES}},{isStatic:!0})});
//# sourceMappingURL=webworkerAll.4d90c8f0.js.map
