"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[414],{6971:function(e,t,n){n.d(t,{AM:function(){return o},BI:function(){return l},Y9:function(){return a},mC:function(){return i}});const l="_Your output will appear here_",o="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",i="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},5755:function(e,t,n){function l(e){return e.replace(/^\/+/,"")}function o(...e){const t=e.join("-");return t.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(t,{Y:function(){return o},g:function(){return l}})},3654:function(e,t,n){n.d(t,{A:function(){return g}});var l=n(641),o=n(33);const i=["for"],a=["id","checked"],r={key:0,class:"note"};function s(e,t,n,s,u,d){const c=(0,l.g2)("Markdown");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("label",{for:e.slug},(0,o.v_)(e.label),9,i),(0,l.Lk)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.checked))},null,40,a),e.note?((0,l.uX)(),(0,l.CE)("small",r,[(0,l.bF)(c,{content:e.note},null,8,["content"])])):(0,l.Q3)("",!0)])}var u=n(118),d=n(5755),c=(0,l.pM)({name:"CheckboxItem",components:{Markdown:u.A},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("box",this.label)}}}),h=n(6262);const p=(0,h.A)(c,[["render",s]]);var g=p},8495:function(e,t,n){n.d(t,{A:function(){return g}});var l=n(641),o=n(33);const i=(0,l.Lk)("br",null,null,-1);function a(e,t,n,a,r,s){const u=(0,l.g2)("Checkbox");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.bF)(u,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":t[0]||(t[0]=t=>e.asHtml=t)},null,8,["modelValue"]),i,(0,l.Lk)("pre",null,[(0,l.Lk)("code",{ref:"codeBlock",class:"markdown"},(0,o.v_)(e.outputCode),513)])])}var r=n(948),s=n.n(r),u=n(6821),d=n(3654),c=(0,l.pM)({name:"CodeItem",components:{Checkbox:d.A},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,u.sj)(this.code);return(0,u.bS)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;s().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),h=n(6262);const p=(0,h.A)(c,[["render",a]]);var g=p},5340:function(e,t,n){n.d(t,{A:function(){return c}});var l=n(641);const o={class:"app-notes"},i=(0,l.Lk)("h2",null,"Notes",-1);function a(e,t,n,a,r,s){const u=(0,l.g2)("Markdown");return(0,l.uX)(),(0,l.CE)("div",o,[i,(0,l.Lk)("p",null,[(0,l.bF)(u,{content:e.message},null,8,["content"])])])}var r=n(118),s=(0,l.pM)({name:"HelpItem",components:{Markdown:r.A},props:{message:{type:String,required:!0}}}),u=n(6262);const d=(0,u.A)(s,[["render",a]]);var c=d},5558:function(e,t,n){n.d(t,{A:function(){return b}});var l=n(641);const o=e=>((0,l.Qi)("data-v-5b828de6"),e=e(),(0,l.jt)(),e),i={class:"app-results"},a=o((()=>(0,l.Lk)("h2",null,"Output values",-1))),r=o((()=>(0,l.Lk)("h3",null,"Preview",-1))),s=o((()=>(0,l.Lk)("br",null,null,-1))),u=o((()=>(0,l.Lk)("h3",null,"Code",-1)));function d(e,t,n,o,d,c){const h=(0,l.g2)("Markdown"),p=(0,l.g2)("CodeItem");return(0,l.uX)(),(0,l.CE)("div",i,[a,(0,l.Lk)("div",null,[r,(0,l.bF)(h,{class:"markdown-preview",content:e.result},null,8,["content"])]),s,(0,l.Lk)("div",null,[u,(0,l.bF)(p,{code:e.result},null,8,["code"])])])}var c=n(8495),h=n(118),p=(0,l.pM)({name:"ResultsItem",components:{Markdown:h.A,CodeItem:c.A},props:{result:{type:String,required:!0}}}),g=n(6262);const m=(0,g.A)(p,[["render",d],["__scopeId","data-v-5b828de6"]]);var b=m},620:function(e,t,n){n.d(t,{A:function(){return m}});var l=n(641),o=n(33);const i=["for"],a={key:0,class:"required"},r=["id","value","placeholder","required","disabled"],s={key:0,class:"note"};function u(e,t,n,u,d,c){const h=(0,l.g2)("Markdown");return(0,l.uX)(),(0,l.CE)("div",null,[(0,l.Lk)("label",{for:e.slug},[(0,l.eW)((0,o.v_)(e.label),1),e.isRequired?((0,l.uX)(),(0,l.CE)("span",a,"*")):(0,l.Q3)("",!0)],8,i),(0,l.Lk)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:t[0]||(t[0]=t=>e.$emit("update:modelValue",t.target.value))},null,40,r),e.note?((0,l.uX)(),(0,l.CE)("small",s,[(0,l.bF)(h,{content:e.note},null,8,["content"])])):(0,l.Q3)("",!0)])}var d=n(5755),c=n(118),h=(0,l.pM)({name:"TextInput",components:{Markdown:c.A},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("text",this.label,this.modelValue)}}}),p=n(6262);const g=(0,p.A)(h,[["render",u],["__scopeId","data-v-de2a2f90"]]);var m=g},6379:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var l=n(641),o=n(3751);const i={class:"images container-lg"},a=(0,l.Lk)("div",{class:"row"},[(0,l.Lk)("div",{class:"col-12"},[(0,l.Lk)("h1",null,"Image"),(0,l.Lk)("p",null," Add an image to your README.md file, such as your logo or a sample screenshot of your app. This is just a badge section, but displaying an image using markdown and HTML. An image is provided to make it easier to test sizing, but this image will not be used when you reuse the code elsewhere. ")])],-1),r={class:"row"},s={class:"col-6"},u={class:"app-input"},d=(0,l.Lk)("h2",null,"Input values",-1),c={name:"links"},h=(0,l.Lk)("legend",null,"Links",-1),p=(0,l.Lk)("br",null,null,-1),g={name:"text"},m=(0,l.Lk)("legend",null,"Text",-1),b=(0,l.Lk)("br",null,null,-1),k=(0,l.Lk)("br",null,null,-1),f={id:"appearance"},v=(0,l.Lk)("legend",null,"Appearance",-1),w=(0,l.Lk)("br",null,null,-1),L=(0,l.Lk)("br",null,null,-1),y=(0,l.Lk)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),T={class:"col-6"},x={class:"row"},A={class:"col-12"};function S(e,t,n,S,V,C){const M=(0,l.g2)("TextInput"),I=(0,l.g2)("Results"),q=(0,l.g2)("Help");return(0,l.uX)(),(0,l.CE)("div",i,[a,(0,l.Lk)("div",r,[(0,l.Lk)("div",s,[(0,l.Lk)("div",u,[d,(0,l.Lk)("form",{onSubmit:t[6]||(t[6]=(0,o.D$)(((...t)=>e.submit&&e.submit(...t)),["prevent"]))},[(0,l.Lk)("fieldset",c,[h,(0,l.bF)(M,{label:"Source",modelValue:e.imgSrc,"onUpdate:modelValue":t[0]||(t[0]=t=>e.imgSrc=t),placeholder:"e.g. /sample.png",note:"Local path or URL.",isRequired:""},null,8,["modelValue"]),(0,l.bF)(M,{label:"Click target",modelValue:e.linkTarget,"onUpdate:modelValue":t[1]||(t[1]=t=>e.linkTarget=t),placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},null,8,["modelValue"])]),p,(0,l.Lk)("fieldset",g,[m,(0,l.bF)(M,{label:"Alt text",modelValue:e.altText,"onUpdate:modelValue":t[2]||(t[2]=t=>e.altText=t),placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},null,8,["modelValue"]),b,(0,l.bF)(M,{label:"Title",modelValue:e.imgTitle,"onUpdate:modelValue":t[3]||(t[3]=t=>e.imgTitle=t),note:"Text to show on hover. Recommended - describe the action that the button will trigger e.g. 'Go to website', 'Go to repo', or 'Go to docs'"},null,8,["modelValue"])]),k,(0,l.Lk)("fieldset",f,[v,(0,l.bF)(M,{label:"Width",modelValue:e.width,"onUpdate:modelValue":t[4]||(t[4]=t=>e.width=t),placeholder:"e.g. 400",note:"Measured in pixels, but no px symbol is needed. If you set width only, then height will default to 'auto', which works well on mobile and desktop."},null,8,["modelValue"]),w,(0,l.bF)(M,{label:"Height",modelValue:e.height,"onUpdate:modelValue":t[5]||(t[5]=t=>e.height=t),placeholder:"e.g. 400",note:"Warning: You probably don't need to set height. If you set height but not width, then you might get a squashed image on mobile view."},null,8,["modelValue"])]),L,y],32)])]),(0,l.Lk)("div",T,[(0,l.bF)(I,{result:e.result},null,8,["result"])])]),(0,l.Lk)("div",x,[(0,l.Lk)("div",A,[(0,l.bF)(q,{message:e.helpMessage},null,8,["message"])])])])}var V=n(5755),C=n(2782);const M={imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:""};var I=n(6971),q=n(5340),$=n(5558),F=n(620),E=n(6821);function _(e,t,n,l="",o,i){const a=n?` title="${n}"`:"",r=t?` alt="${t}"`:"",s=o?` width="${o}"`:"",u=i?` height="${i}"`:"";let d=`<img src="${e}"${r}${a}${s}${u}>`;return l&&(d=`<a href="${l}">\n    ${d}\n</a>`),d}const H="<p>\n  Styling has been setup so that images in the preview pane will not\n  extend beyond the width of the preview area, even no width or a\n  large width has been set.\n</p>\n<p>\n  Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n  will also submit.\n</p>\n<p>\n  Setting <i>width</i> and <i>height</i> is optional, but this can\n  help in certain cases. For example, a screenshot or logo will be set\n  by GitHub to <i>100%</i> of the page width making it look large and\n  take up vertical space, so reduce height or width manually.\n</p>\n<p>\n  Setting height can also make sure the height of the tag is set\n  before the image loads, so it reserves the space - if the height is\n  larger than the original image though then the image will looked\n  stretched.\n</p>\n<p>\n  Warning: If you set height only to say 400, then the image in the\n  README.md will look fine on desktop but ends up looking distorted on\n  mobile.\n</p>";var R=(0,l.pM)({name:"ImageView",components:{Help:q.A,Results:$.A,TextInput:F.A},data(){return{...M,result:I.BI,helpMessage:H}},computed:{altTextOut(){return(0,V.g)(this.altText||this.imgSrc)},imgTitleOut(){return(0,V.g)(this.imgTitle)}},methods:{submit(){C.O&&console.debug("Process inputs and render results");const e=_(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height),t=(0,E.nT)({altText:this.altTextOut,imageTarget:this.imgSrc,linkTarget:this.linkTarget,hoverTitle:this.imgTitleOut});this.result=`_HTML image_\n\n<div align="center">\n    ${e}\n</div>\n\n\n_Markdown image_\n\n<div align="center">\n\n${t}\n\n</div>\n      `}}}),U=n(6262);const X=(0,U.A)(R,[["render",S]]);var O=X}}]);
//# sourceMappingURL=image.a72ee16d.js.map