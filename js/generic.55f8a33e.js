"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[878],{6971:function(e,l,o){o.d(l,{AM:function(){return n},BI:function(){return t},Y9:function(){return a},mC:function(){return r}});const t="_Your output will appear here_",n="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",r="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",a="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},5755:function(e,l,o){function t(e){return e.replace(/^\/+/,"")}function n(...e){const l=e.join("-");return l.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}o.d(l,{Y:function(){return n},g:function(){return t}})},3654:function(e,l,o){o.d(l,{A:function(){return b}});var t=o(641),n=o(33);const r=["for"],a=["id","checked"],s={key:0,class:"note"};function u(e,l,o,u,i,d){const c=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("label",{for:e.slug},(0,n.v_)(e.label),9,r),(0,t.Lk)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,a),e.note?((0,t.uX)(),(0,t.CE)("small",s,[(0,t.bF)(c,{content:e.note},null,8,["content"])])):(0,t.Q3)("",!0)])}var i=o(118),d=o(5755),c=(0,t.pM)({name:"CheckboxItem",components:{Markdown:i.A},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("box",this.label)}}}),g=o(6262);const p=(0,g.A)(c,[["render",u]]);var b=p},8495:function(e,l,o){o.d(l,{A:function(){return b}});var t=o(641),n=o(33);const r=(0,t.Lk)("br",null,null,-1);function a(e,l,o,a,s,u){const i=(0,t.g2)("Checkbox");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(i,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":l[0]||(l[0]=l=>e.asHtml=l)},null,8,["modelValue"]),r,(0,t.Lk)("pre",null,[(0,t.Lk)("code",{ref:"codeBlock",class:"markdown"},(0,n.v_)(e.outputCode),513)])])}var s=o(948),u=o.n(s),i=o(6821),d=o(3654),c=(0,t.pM)({name:"CodeItem",components:{Checkbox:d.A},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,i.sj)(this.code);return(0,i.bS)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),g=o(6262);const p=(0,g.A)(c,[["render",a]]);var b=p},5340:function(e,l,o){o.d(l,{A:function(){return c}});var t=o(641);const n={class:"app-notes"},r=(0,t.Lk)("h2",null,"Notes",-1);function a(e,l,o,a,s,u){const i=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",n,[r,(0,t.Lk)("p",null,[(0,t.bF)(i,{content:e.message},null,8,["content"])])])}var s=o(118),u=(0,t.pM)({name:"HelpItem",components:{Markdown:s.A},props:{message:{type:String,required:!0}}}),i=o(6262);const d=(0,i.A)(u,[["render",a]]);var c=d},5558:function(e,l,o){o.d(l,{A:function(){return h}});var t=o(641);const n=e=>((0,t.Qi)("data-v-5b828de6"),e=e(),(0,t.jt)(),e),r={class:"app-results"},a=n((()=>(0,t.Lk)("h2",null,"Output values",-1))),s=n((()=>(0,t.Lk)("h3",null,"Preview",-1))),u=n((()=>(0,t.Lk)("br",null,null,-1))),i=n((()=>(0,t.Lk)("h3",null,"Code",-1)));function d(e,l,o,n,d,c){const g=(0,t.g2)("Markdown"),p=(0,t.g2)("CodeItem");return(0,t.uX)(),(0,t.CE)("div",r,[a,(0,t.Lk)("div",null,[s,(0,t.bF)(g,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,t.Lk)("div",null,[i,(0,t.bF)(p,{code:e.result},null,8,["code"])])])}var c=o(8495),g=o(118),p=(0,t.pM)({name:"ResultsItem",components:{Markdown:g.A,CodeItem:c.A},props:{result:{type:String,required:!0}}}),b=o(6262);const m=(0,b.A)(p,[["render",d],["__scopeId","data-v-5b828de6"]]);var h=m},620:function(e,l,o){o.d(l,{A:function(){return m}});var t=o(641),n=o(33);const r=["for"],a={key:0,class:"required"},s=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function i(e,l,o,i,d,c){const g=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("label",{for:e.slug},[(0,t.eW)((0,n.v_)(e.label),1),e.isRequired?((0,t.uX)(),(0,t.CE)("span",a,"*")):(0,t.Q3)("",!0)],8,r),(0,t.Lk)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value))},null,40,s),e.note?((0,t.uX)(),(0,t.CE)("small",u,[(0,t.bF)(g,{content:e.note},null,8,["content"])])):(0,t.Q3)("",!0)])}var d=o(5755),c=o(118),g=(0,t.pM)({name:"TextInput",components:{Markdown:c.A},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("text",this.label,this.modelValue)}}}),p=o(6262);const b=(0,p.A)(g,[["render",i],["__scopeId","data-v-de2a2f90"]]);var m=b},9666:function(e,l,o){o.r(l),o.d(l,{default:function(){return $}});var t=o(641),n=o(3751);const r={class:"badges container-lg"},a=(0,t.Lk)("div",{class:"row"},[(0,t.Lk)("div",{class:"col-12"},[(0,t.Lk)("h1",null,"Generic badges")])],-1),s={class:"row"},u={class:"col-6"},i={class:"app-input"},d=(0,t.Lk)("h2",null,"Input values",-1),c={name:"text"},g=(0,t.Lk)("legend",null,"Text",-1),p=(0,t.Lk)("br",null,null,-1),b=(0,t.Lk)("br",null,null,-1),m=(0,t.Lk)("br",null,null,-1),h={name:"display-options"},k=(0,t.Lk)("legend",null,"Display options",-1),f=(0,t.Lk)("br",null,null,-1),v=(0,t.Lk)("br",null,null,-1),L={name:"links"},C=(0,t.Lk)("legend",null,"Links",-1),y=(0,t.Lk)("br",null,null,-1),V=(0,t.Lk)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),w={class:"col-6"},A={class:"row"},x={class:"col-12"};function q(e,l,o,q,M,F){const I=(0,t.g2)("TextInput"),H=(0,t.g2)("Checkbox"),S=(0,t.g2)("Results"),_=(0,t.g2)("Help");return(0,t.uX)(),(0,t.CE)("div",r,[a,(0,t.Lk)("div",s,[(0,t.Lk)("div",u,[(0,t.Lk)("div",i,[d,(0,t.Lk)("form",{onSubmit:l[7]||(l[7]=(0,n.D$)(((...l)=>e.submit&&e.submit(...l)),["prevent"]))},[(0,t.Lk)("fieldset",c,[g,(0,t.bF)(I,{label:"Label",modelValue:e.label,"onUpdate:modelValue":l[0]||(l[0]=l=>e.label=l)},null,8,["modelValue"]),p,(0,t.bF)(I,{label:"Message",modelValue:e.message,"onUpdate:modelValue":l[1]||(l[1]=l=>e.message=l),isRequired:""},null,8,["modelValue"]),b]),m,(0,t.Lk)("fieldset",h,[k,(0,t.bF)(I,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":l[2]||(l[2]=l=>e.badgeColor=l),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,t.bF)(H,{label:"Large",modelValue:e.isLarge,"onUpdate:modelValue":l[3]||(l[3]=l=>e.isLarge=l)},null,8,["modelValue"]),f,(0,t.bF)(I,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":l[4]||(l[4]=l=>e.logo=l),note:e.logoHelp},null,8,["modelValue","note"]),(0,t.bF)(I,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":l[5]||(l[5]=l=>e.logoColor=l),disabled:""===e.logo,note:e.logoColorHelp},null,8,["modelValue","disabled","note"])]),v,(0,t.Lk)("fieldset",L,[C,(0,t.bF)(I,{label:"Click target",modelValue:e.target,"onUpdate:modelValue":l[6]||(l[6]=l=>e.target=l),placeholder:"e.g. https://example.com",note:"URL or a local path like `/docs/`. This doesn't have to be set, but a button without a click destination is not so useful."},null,8,["modelValue"])]),y,V],32)])]),(0,t.Lk)("div",w,[(0,t.bF)(S,{result:e.result},null,8,["result"])])]),(0,t.Lk)("div",A,[(0,t.Lk)("div",x,[(0,t.bF)(_,{message:e.note},null,8,["message"])])])])}var M=o(2782),F=o(4730),I=o(6971),H=o(3654),S=o(5340),_=o(5558),U=o(620),E=o(8080);const T="\nThis form lets you create a fixed badge using arbitrary text and a link.\n\nFor example, describe a tools or platforms your repo is built on or built for running. This form takes care of encoding characters so they are safe for the badge URL.\n";var X=(0,t.pM)({name:"GenericBadges",components:{Checkbox:H.A,Help:S.A,Results:_.A,TextInput:U.A},data(){return{label:"Foo",message:"Bar",badgeColor:F.Xo.Green,isLarge:!1,target:"https://",logo:"",logoColor:"",result:I.BI,note:T,colorHelp:I.AM,logoHelp:I.mC,logoColorHelp:I.Y9}},methods:{submit(){M.O&&(console.debug("Process inputs and render results"),console.debug({label:this.label,message:this.message,badgeColor:this.badgeColor,isLarge:this.isLarge,target:this.target,logo:this.logo,logoColor:this.logoColor}));const e=(0,E.l)(this.label,this.message,this.badgeColor,this.isLarge,this.target,this.logo,this.logoColor,!1),l=(0,E.l)(this.label,this.message,this.badgeColor,this.isLarge,this.target,this.logo,this.logoColor,!0);this.result=`_Dash badge_\n\n${e}\n\n_Query parameter badge_\n\n${l}\n      `}}}),B=o(6262);const R=(0,B.A)(X,[["render",q]]);var $=R}}]);
//# sourceMappingURL=generic.55f8a33e.js.map