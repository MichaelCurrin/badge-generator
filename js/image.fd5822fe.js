"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[9],{99:function(e,t,n){n.d(t,{I9:function(){return i},PL:function(){return o},Wn:function(){return a},t$:function(){return l}});const l="_Your output will appear here_",o="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",i="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},6742:function(e,t,n){function l(e){return e.replace(/^\/+/,"")}function o(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(t,{F:function(){return l},l:function(){return o}})},9771:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(6252),o=n(3577);const i=["for"],a=["id","checked"],r={key:0,class:"note"};function s(e,t,n,s,u,d){const c=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("label",{for:e.slug},(0,o.zw)(e.label),9,i),(0,l._)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,a),e.note?((0,l.wg)(),(0,l.iD)("small",r,[(0,l.Wm)(c,{content:e.note},null,8,["content"])])):(0,l.kq)("",!0)])}var u=n(3945),d=n(6742),c=(0,l.aZ)({name:"CheckboxItem",components:{Markdown:u.Z},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("box",this.label)}}}),h=n(3744);const p=(0,h.Z)(c,[["render",s]]);var g=p},816:function(e,t,n){n.d(t,{Z:function(){return g}});var l=n(6252),o=n(3577);const i=(0,l._)("br",null,null,-1);function a(e,t,n,a,r,s){const u=(0,l.up)("Checkbox");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l.Wm)(u,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[0]||(t[0]=t=>e.asHtml=t)},null,8,["modelValue"]),i,(0,l._)("pre",null,[(0,l._)("code",{ref:"codeBlock",class:"markdown"},(0,o.zw)(e.outputCode),513)])])}var r=n(7869),s=n.n(r),u=n(770),d=n(9771),c=(0,l.aZ)({name:"CodeItem",components:{Checkbox:d.Z},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,u.Ae)(this.code);return(0,u.ZF)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;s().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),h=n(3744);const p=(0,h.Z)(c,[["render",a]]);var g=p},8526:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(6252);const o={class:"app-notes"},i=(0,l._)("h2",null,"Notes",-1);function a(e,t,n,a,r,s){const u=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",o,[i,(0,l._)("p",null,[(0,l.Wm)(u,{content:e.message},null,8,["content"])])])}var r=n(3945),s=(0,l.aZ)({name:"HelpItem",components:{Markdown:r.Z},props:{message:{type:String,required:!0}}}),u=n(3744);const d=(0,u.Z)(s,[["render",a]]);var c=d},8459:function(e,t,n){n.d(t,{Z:function(){return b}});var l=n(6252);const o=e=>((0,l.dD)("data-v-5b828de6"),e=e(),(0,l.Cn)(),e),i={class:"app-results"},a=o((()=>(0,l._)("h2",null,"Output values",-1))),r=o((()=>(0,l._)("h3",null,"Preview",-1))),s=o((()=>(0,l._)("br",null,null,-1))),u=o((()=>(0,l._)("h3",null,"Code",-1)));function d(e,t,n,o,d,c){const h=(0,l.up)("Markdown"),p=(0,l.up)("CodeItem");return(0,l.wg)(),(0,l.iD)("div",i,[a,(0,l._)("div",null,[r,(0,l.Wm)(h,{class:"markdown-preview",content:e.result},null,8,["content"])]),s,(0,l._)("div",null,[u,(0,l.Wm)(p,{code:e.result},null,8,["code"])])])}var c=n(816),h=n(3945),p=(0,l.aZ)({name:"ResultsItem",components:{Markdown:h.Z,CodeItem:c.Z},props:{result:{type:String,required:!0}}}),g=n(3744);const m=(0,g.Z)(p,[["render",d],["__scopeId","data-v-5b828de6"]]);var b=m},6688:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(6252),o=n(3577);const i=["for"],a={key:0,class:"required"},r=["id","value","placeholder","required","disabled"],s={key:0,class:"note"};function u(e,t,n,u,d,c){const h=(0,l.up)("Markdown");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("label",{for:e.slug},[(0,l.Uk)((0,o.zw)(e.label),1),e.isRequired?((0,l.wg)(),(0,l.iD)("span",a,"*")):(0,l.kq)("",!0)],8,i),(0,l._)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,r),e.note?((0,l.wg)(),(0,l.iD)("small",s,[(0,l.Wm)(h,{content:e.note},null,8,["content"])])):(0,l.kq)("",!0)])}var d=n(6742),c=n(3945),h=(0,l.aZ)({name:"TextInput",components:{Markdown:c.Z},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.l)("text",this.label,this.modelValue)}}}),p=n(3744);const g=(0,p.Z)(h,[["render",u],["__scopeId","data-v-de2a2f90"]]);var m=g},1486:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var l=n(6252),o=n(9963);const i={class:"images container-lg"},a=(0,l._)("div",{class:"row"},[(0,l._)("div",{class:"col-12"},[(0,l._)("h1",null,"Image"),(0,l._)("p",null," Add an image to your README.md file, such as your logo or a sample screenshot of your app. This is just a badge section, but displaying an image using markdown and HTML. An image is provided to make it easier to test sizing, but this image will not be used when you reuse the code elsewhere. ")])],-1),r={class:"row"},s={class:"col-6"},u={class:"app-input"},d=(0,l._)("h2",null,"Input values",-1),c={name:"links"},h=(0,l._)("legend",null,"Links",-1),p=(0,l._)("br",null,null,-1),g={name:"text"},m=(0,l._)("legend",null,"Text",-1),b=(0,l._)("br",null,null,-1),w=(0,l._)("br",null,null,-1),f={id:"appearance"},v=(0,l._)("legend",null,"Appearance",-1),k=(0,l._)("br",null,null,-1),_=(0,l._)("br",null,null,-1),y=(0,l._)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),T={class:"col-6"},x={class:"row"},V={class:"col-12"};function S(e,t,n,S,Z,q){const I=(0,l.up)("TextInput"),M=(0,l.up)("Results"),$=(0,l.up)("Help");return(0,l.wg)(),(0,l.iD)("div",i,[a,(0,l._)("div",r,[(0,l._)("div",s,[(0,l._)("div",u,[d,(0,l._)("form",{onSubmit:t[6]||(t[6]=(0,o.iM)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,l._)("fieldset",c,[h,(0,l.Wm)(I,{label:"Source",modelValue:e.imgSrc,"onUpdate:modelValue":t[0]||(t[0]=t=>e.imgSrc=t),placeholder:"e.g. /sample.png",note:"Local path or URL.",isRequired:""},null,8,["modelValue"]),(0,l.Wm)(I,{label:"Click target",modelValue:e.linkTarget,"onUpdate:modelValue":t[1]||(t[1]=t=>e.linkTarget=t),placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},null,8,["modelValue"])]),p,(0,l._)("fieldset",g,[m,(0,l.Wm)(I,{label:"Alt text",modelValue:e.altText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.altText=t),placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},null,8,["modelValue"]),b,(0,l.Wm)(I,{label:"Title",modelValue:e.imgTitle,"onUpdate:modelValue":t[3]||(t[3]=t=>e.imgTitle=t),note:"Text to show on hover. Recommended - describe the action that the button will trigger e.g. 'Go to website', 'Go to repo', or 'Go to docs'"},null,8,["modelValue"])]),w,(0,l._)("fieldset",f,[v,(0,l.Wm)(I,{label:"Width",modelValue:e.width,"onUpdate:modelValue":t[4]||(t[4]=t=>e.width=t),placeholder:"e.g. 400",note:"Measured in pixels, but no px symbol is needed. If you set width only, then height will default to 'auto', which works well on mobile and desktop."},null,8,["modelValue"]),k,(0,l.Wm)(I,{label:"Height",modelValue:e.height,"onUpdate:modelValue":t[5]||(t[5]=t=>e.height=t),placeholder:"e.g. 400",note:"Warning: You probably don't need to set height. If you set height but not width, then you might get a squashed image on mobile view."},null,8,["modelValue"])]),_,y],32)])]),(0,l._)("div",T,[(0,l.Wm)(M,{result:e.result},null,8,["result"])])]),(0,l._)("div",x,[(0,l._)("div",V,[(0,l.Wm)($,{message:e.helpMessage},null,8,["message"])])])])}var Z=n(6742),q=n(2211);const I={imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:""};var M=n(99),$=n(8526),W=n(8459),C=n(6688),H=n(770);function D(e,t,n,l="",o,i){const a=n?` title="${n}"`:"",r=t?` alt="${t}"`:"",s=o?` width="${o}"`:"",u=i?` height="${i}"`:"";let d=`<img src="${e}"${r}${a}${s}${u}>`;return l&&(d=`<a href="${l}">\n    ${d}\n</a>`),d}const R="<p>\n  Styling has been setup so that images in the preview pane will not\n  extend beyond the width of the preview area, even no width or a\n  large width has been set.\n</p>\n<p>\n  Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n  will also submit.\n</p>\n<p>\n  Setting <i>width</i> and <i>height</i> is optional, but this can\n  help in certain cases. For example, a screenshot or logo will be set\n  by GitHub to <i>100%</i> of the page width making it look large and\n  take up vertical space, so reduce height or width manually.\n</p>\n<p>\n  Setting height can also make sure the height of the tag is set\n  before the image loads, so it reserves the space - if the height is\n  larger than the original image though then the image will looked\n  stretched.\n</p>\n<p>\n  Warning: If you set height only to say 400, then the image in the\n  README.md will look fine on desktop but ends up looking distorted on\n  mobile.\n</p>";var U=(0,l.aZ)({name:"ImageView",components:{Help:$.Z,Results:W.Z,TextInput:C.Z},data(){return{...I,result:M.t$,helpMessage:R}},computed:{altTextOut(){return(0,Z.F)(this.altText||this.imgSrc)},imgTitleOut(){return(0,Z.F)(this.imgTitle)}},methods:{submit(){q.e&&console.debug("Process inputs and render results");const e=D(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height),t=(0,H.ad)({altText:this.altTextOut,imageTarget:this.imgSrc,linkTarget:this.linkTarget,hoverTitle:this.imgTitleOut});this.result=`_HTML image_\n\n<div align="center">\n    ${e}\n</div>\n\n\n_Markdown image_\n\n<div align="center">\n\n${t}\n\n</div>\n      `}}}),L=n(3744);const A=(0,L.Z)(U,[["render",S]]);var O=A}}]);
//# sourceMappingURL=image.fd5822fe.js.map