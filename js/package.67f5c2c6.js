"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[529],{6971:function(e,l,o){o.d(l,{AM:function(){return t},BI:function(){return n},Y9:function(){return r},mC:function(){return a}});const n="_Your output will appear here_",t="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",a="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",r="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},5755:function(e,l,o){function n(e){return e.replace(/^\/+/,"")}function t(...e){const l=e.join("-");return l.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}o.d(l,{Y:function(){return t},g:function(){return n}})},1605:function(e,l,o){o.d(l,{A:function(){return m}});var n=o(641),t=o(33);const a=["for"],r=["id","checked"],d={key:0,class:"note"};function u(e,l,o,u,s,i){const p=(0,n.g2)("Markdown");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("label",{for:e.slug},(0,t.v_)(e.label),9,a),(0,n.Lk)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.checked))},null,40,r),e.note?((0,n.uX)(),(0,n.CE)("small",d,[(0,n.bF)(p,{content:e.note},null,8,["content"])])):(0,n.Q3)("",!0)])}var s=o(118),i=o(5755),p=(0,n.pM)({name:"CheckboxItem",components:{Markdown:s.A},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,i.Y)("box",this.label)}}}),c=o(6262);const g=(0,c.A)(p,[["render",u]]);var m=g},8495:function(e,l,o){o.d(l,{A:function(){return m}});var n=o(641),t=o(33);const a=(0,n.Lk)("br",null,null,-1);function r(e,l,o,r,d,u){const s=(0,n.g2)("Checkbox");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.bF)(s,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":l[0]||(l[0]=l=>e.asHtml=l)},null,8,["modelValue"]),a,(0,n.Lk)("pre",null,[(0,n.Lk)("code",{ref:"codeBlock",class:"markdown"},(0,t.v_)(e.outputCode),513)])])}var d=o(948),u=o.n(d),s=o(6821),i=o(1605),p=(0,n.pM)({name:"CodeItem",components:{Checkbox:i.A},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,s.sj)(this.code);return(0,s.bS)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),c=o(6262);const g=(0,c.A)(p,[["render",r]]);var m=g},5340:function(e,l,o){o.d(l,{A:function(){return p}});var n=o(641);const t={class:"app-notes"},a=(0,n.Lk)("h2",null,"Notes",-1);function r(e,l,o,r,d,u){const s=(0,n.g2)("Markdown");return(0,n.uX)(),(0,n.CE)("div",t,[a,(0,n.Lk)("p",null,[(0,n.bF)(s,{content:e.message},null,8,["content"])])])}var d=o(118),u=(0,n.pM)({name:"HelpItem",components:{Markdown:d.A},props:{message:{type:String,required:!0}}}),s=o(6262);const i=(0,s.A)(u,[["render",r]]);var p=i},5558:function(e,l,o){o.d(l,{A:function(){return k}});var n=o(641);const t=e=>((0,n.Qi)("data-v-5b828de6"),e=e(),(0,n.jt)(),e),a={class:"app-results"},r=t((()=>(0,n.Lk)("h2",null,"Output values",-1))),d=t((()=>(0,n.Lk)("h3",null,"Preview",-1))),u=t((()=>(0,n.Lk)("br",null,null,-1))),s=t((()=>(0,n.Lk)("h3",null,"Code",-1)));function i(e,l,o,t,i,p){const c=(0,n.g2)("Markdown"),g=(0,n.g2)("CodeItem");return(0,n.uX)(),(0,n.CE)("div",a,[r,(0,n.Lk)("div",null,[d,(0,n.bF)(c,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,n.Lk)("div",null,[s,(0,n.bF)(g,{code:e.result},null,8,["code"])])])}var p=o(8495),c=o(118),g=(0,n.pM)({name:"ResultsItem",components:{Markdown:c.A,CodeItem:p.A},props:{result:{type:String,required:!0}}}),m=o(6262);const b=(0,m.A)(g,[["render",i],["__scopeId","data-v-5b828de6"]]);var k=b},620:function(e,l,o){o.d(l,{A:function(){return b}});var n=o(641),t=o(33);const a=["for"],r={key:0,class:"required"},d=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function s(e,l,o,s,i,p){const c=(0,n.g2)("Markdown");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("label",{for:e.slug},[(0,n.eW)((0,t.v_)(e.label),1),e.isRequired?((0,n.uX)(),(0,n.CE)("span",r,"*")):(0,n.Q3)("",!0)],8,a),(0,n.Lk)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:l[0]||(l[0]=l=>e.$emit("update:modelValue",l.target.value))},null,40,d),e.note?((0,n.uX)(),(0,n.CE)("small",u,[(0,n.bF)(c,{content:e.note},null,8,["content"])])):(0,n.Q3)("",!0)])}var i=o(5755),p=o(118),c=(0,n.pM)({name:"TextInput",components:{Markdown:p.A},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,i.Y)("text",this.label,this.modelValue)}}}),g=o(6262);const m=(0,g.A)(c,[["render",s],["__scopeId","data-v-de2a2f90"]]);var b=m},1504:function(e,l,o){o.r(l),o.d(l,{default:function(){return ae}});var n=o(641),t=o(3751),a=o(33);const r={class:"badges container-lg"},d=(0,n.Lk)("div",{class:"row"},[(0,n.Lk)("div",{class:"col-12"},[(0,n.Lk)("h1",null,"Package badges"),(0,n.Lk)("p",null," Show your project's dependencies as badges in your docs, including an external link to the package in a registry. ")])],-1),u={class:"row"},s={class:"col-6"},i={class:"app-input"},p=(0,n.Lk)("h2",null,"Input values",-1),c={name:"package"},g=(0,n.Lk)("legend",null,"Package metadata",-1),m=(0,n.Lk)("br",null,null,-1),b=(0,n.Lk)("span",null,"Type: ",-1),k=(0,n.Lk)("label",{for:"python"},"Python (PyPI)",-1),v=(0,n.Lk)("label",{for:"node"},"Node (NPM)",-1),h=(0,n.Lk)("label",{for:"ruby"},"Ruby (RubyGems)",-1),y=(0,n.Lk)("label",{for:"go"},"Go",-1),f=(0,n.Lk)("br",null,null,-1),L=(0,n.Lk)("span",null,"Environment: ",-1),C=["value","disabled"],w={for:"env-prod"},V=["value","disabled"],M={for:"env-dev"},A=(0,n.Lk)("br",null,null,-1),T={name:"ghRepo"},N=(0,n.Lk)("legend",null,"GitHub repo",-1),E=(0,n.Lk)("br",null,null,-1),I=(0,n.Lk)("br",null,null,-1),R={name:"display-options"},U=(0,n.Lk)("legend",null,"Display options",-1),q=(0,n.Lk)("br",null,null,-1),S=(0,n.Lk)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),H={class:"col-6"},X={class:"row"},F={class:"col-12"};function P(e,l,o,P,x,B){const _=(0,n.g2)("TextInput"),$=(0,n.g2)("Results"),j=(0,n.g2)("Help");return(0,n.uX)(),(0,n.CE)("div",r,[d,(0,n.Lk)("div",u,[(0,n.Lk)("div",s,[(0,n.Lk)("div",i,[p,(0,n.Lk)("form",{onSubmit:l[12]||(l[12]=(0,t.D$)(((...l)=>e.submit&&e.submit(...l)),["prevent"]))},[(0,n.Lk)("fieldset",c,[g,(0,n.bF)(_,{label:"Name",modelValue:e.pkgName,"onUpdate:modelValue":l[0]||(l[0]=l=>e.pkgName=l),placeholder:"e.g. vue",isRequired:""},null,8,["modelValue"]),m,(0,n.Lk)("div",null,[b,(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"python",name:"package-type",value:"Python","onUpdate:modelValue":l[1]||(l[1]=l=>e.pkgType=l),checked:""},null,512),[[t.XL,e.pkgType]]),k]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"node",name:"package-type",value:"Node","onUpdate:modelValue":l[2]||(l[2]=l=>e.pkgType=l)},null,512),[[t.XL,e.pkgType]]),v]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"ruby",name:"package-type",value:"Ruby","onUpdate:modelValue":l[3]||(l[3]=l=>e.pkgType=l)},null,512),[[t.XL,e.pkgType]]),h]),(0,n.Lk)("div",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"go",name:"package-type",value:"Go","onUpdate:modelValue":l[4]||(l[4]=l=>e.pkgType=l)},null,512),[[t.XL,e.pkgType]]),y])]),f,(0,n.Lk)("div",{class:(0,a.C4)(e.dynamicBadgeEnabled?"":e.disabledClass)},[L,(0,n.Lk)("span",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"env-prod",name:"env-type",value:e.prodOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":l[5]||(l[5]=l=>e.envType=l),checked:""},null,8,C),[[t.XL,e.envType]]),(0,n.Lk)("label",w,(0,a.v_)(e.prodOption),1)]),(0,n.Lk)("span",null,[(0,n.bo)((0,n.Lk)("input",{type:"radio",id:"env-dev",name:"env-type",value:e.devOption,disabled:!e.dynamicBadgeEnabled,"onUpdate:modelValue":l[6]||(l[6]=l=>e.envType=l)},null,8,V),[[t.XL,e.envType]]),(0,n.Lk)("label",M,(0,a.v_)(e.devOption),1)])],2)]),A,(0,n.Lk)("fieldset",T,[N,(0,n.bF)(_,{label:"Username",modelValue:e.username,"onUpdate:modelValue":l[7]||(l[7]=l=>e.username=l),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"]),E,(0,n.bF)(_,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":l[8]||(l[8]=l=>e.repoName=l),disabled:!e.dynamicBadgeEnabled},null,8,["modelValue","disabled"])]),I,(0,n.Lk)("fieldset",R,[U,(0,n.bF)(_,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":l[9]||(l[9]=l=>e.badgeColor=l),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,n.bF)(_,{label:"Logo",modelValue:e.logo,"onUpdate:modelValue":l[10]||(l[10]=l=>e.logo=l),placeholder:"e.g. vue.js",note:e.logoHelp},null,8,["modelValue","note"]),(0,n.bF)(_,{label:"Logo color",modelValue:e.logoColor,"onUpdate:modelValue":l[11]||(l[11]=l=>e.logoColor=l),disabled:""===e.logo||!e.dynamicBadgeEnabled,class:(0,a.C4)(""===e.logo?e.disabledClass:""),placeholder:"e.g. white or #fff or #ffffff",note:e.logoColorHelp},null,8,["modelValue","disabled","class","note"])]),q,S],32)])]),(0,n.Lk)("div",H,[(0,n.bF)($,{result:e.result},null,8,["result"])])]),(0,n.Lk)("div",X,[(0,n.Lk)("div",F,[(0,n.bF)(j,{message:e.note},null,8,["message"])])])])}var x=o(2782),B=o(4730),_=o(6971),$=o(5340),j=o(5558),O=o(620),G=o(5690),Y=o(9667),D=o(192),Q=o(8080),z=o(6821),W=o(8594);function J(e,l,o,n){const t=`${l}/${e}`;return(0,Q.l)(Y.RU.label,e,n||Y.RU.color,Y.RU.isLarge,t,o.logo,o.logoColor)}function K(e,l,o,n,t){const a=`Package - ${l}`;o.isLarge=Y.oc.IS_LARGE;const r=(0,W.pP)(e,l,n),d=(0,W.oH)(o);t&&(d.color=t);const u=(0,D.c)(r,d),s=`${G.Mo.Node}/${l}`;return(0,z.nT)({altText:a,imageTarget:u,linkTarget:s})}var Z=o(348),ee=o(3605);const le="\n- For NPM, the badge is dynamic - whatever package name you set, the version of that package in your repo will be used, without having to update the badge code. The Environent setting is for prod vs dev dependencies.\n- For the rest, the badge is just static - it does not care about your repo. If you put a version number in your badge, you'll have to remember to update it manually.\n- Sample name values for Go: 'http' (redirects to 'net/http') or 'encoding/json'.\n";var oe=(0,n.pM)({name:"PackageBadges",components:{Help:$.A,Results:j.A,TextInput:O.A},data(){return{pkgName:"vue",pkgType:"Node",devOption:W.M0[W.M0.Dev],prodOption:W.M0[W.M0.Prod],envType:W.M0[W.M0.Prod],username:ee.A.getRepoUsername(),repoName:ee.A.getRepoName(),badgeColor:B.Xo.Default,logo:"",logoColor:B.Xo.LogoDefault,result:_.BI,note:le,colorHelp:_.AM,logoHelp:_.mC,logoColorHelp:_.Y9,disabledClass:"disabled-text"}},computed:{dynamicBadgeEnabled(){return"Node"===this.pkgType}},methods:{submit(){x.O&&console.debug("Process inputs and render results");const e={logo:this.logo,logoColor:this.logoColor},l=this.pkgType,o=G.Mo[l],n=o?J(this.pkgName,o,e,this.badgeColor):"";ee.A.setRepoUsername(this.username),ee.A.setRepoName(this.repoName);const t=new Z.lc(this.username,this.repoName),a=this.envType,r=W.M0[a],d=o===G.Mo.Node?K(t,this.pkgName,e,r,this.badgeColor):"";this.result=`${n}\n\n${d}\n        `}}}),ne=o(6262);const te=(0,ne.A)(oe,[["render",P]]);var ae=te}}]);
//# sourceMappingURL=package.67f5c2c6.js.map