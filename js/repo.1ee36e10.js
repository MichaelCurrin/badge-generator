"use strict";(self["webpackChunkbadge_generator"]=self["webpackChunkbadge_generator"]||[]).push([[375],{6971:function(e,o,n){n.d(o,{AM:function(){return l},BI:function(){return t},Y9:function(){return s},mC:function(){return a}});const t="_Your output will appear here_",l="Custom color for some badges on this page which use this value. Must be a keyword or hex code. <br>Hints: `brightgreen`, `green`, `yellowgreen`, `yellow`, `orange`, `red`, `blue`, `lightgrey`, `success`, `important`, `critical`, `informational`, `inactive`, `blueviolet`, `ff69b4`, `9cf`, `2ea44f` (GitHub's green). <br>The Shields.io API will use `blue` as a default if no color is provided.",a="Supports values like `dependabot`, `discord` and `npm`. And hundreds of logos from [SimpleIcons](https://simpleicons.org/) such as `python`, `node.js` and `visual-studio-code`",s="Color keyword or hex code. The badge's own color will be used unless you specify an override. Using `white` is great for readability against the dark label background."},5755:function(e,o,n){function t(e){return e.replace(/^\/+/,"")}function l(...e){const o=e.join("-");return o.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}n.d(o,{Y:function(){return l},g:function(){return t}})},3654:function(e,o,n){n.d(o,{A:function(){return m}});var t=n(641),l=n(33);const a=["for"],s=["id","checked"],r={key:0,class:"note"};function u(e,o,n,u,i,d){const c=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("label",{for:e.slug},(0,l.v_)(e.label),9,a),(0,t.Lk)("input",{id:e.slug,type:"checkbox",checked:e.modelValue,onChange:o[0]||(o[0]=o=>e.$emit("update:modelValue",o.target.checked))},null,40,s),e.note?((0,t.uX)(),(0,t.CE)("small",r,[(0,t.bF)(c,{content:e.note},null,8,["content"])])):(0,t.Q3)("",!0)])}var i=n(118),d=n(5755),c=(0,t.pM)({name:"CheckboxItem",components:{Markdown:i.A},props:{label:{type:String,required:!0},modelValue:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("box",this.label)}}}),p=n(6262);const g=(0,p.A)(c,[["render",u]]);var m=g},8495:function(e,o,n){n.d(o,{A:function(){return m}});var t=n(641),l=n(33);const a=(0,t.Lk)("br",null,null,-1);function s(e,o,n,s,r,u){const i=(0,t.g2)("Checkbox");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.bF)(i,{label:"Show HTML",modelValue:e.asHtml,"onUpdate:modelValue":o[0]||(o[0]=o=>e.asHtml=o)},null,8,["modelValue"]),a,(0,t.Lk)("pre",null,[(0,t.Lk)("code",{ref:"codeBlock",class:"markdown"},(0,l.v_)(e.outputCode),513)])])}var r=n(948),u=n.n(r),i=n(6821),d=n(3654),c=(0,t.pM)({name:"CodeItem",components:{Checkbox:d.A},props:{code:{type:String,required:!0}},data(){return{asHtml:!1}},computed:{outputCode(){if(this.asHtml){const e=(0,i.sj)(this.code);return(0,i.bS)(e)}return this.code}},methods:{highlight(){const e=this.$refs.codeBlock;u().highlightElement(e)}},mounted(){this.highlight()},updated(){this.highlight()}}),p=n(6262);const g=(0,p.A)(c,[["render",s]]);var m=g},5340:function(e,o,n){n.d(o,{A:function(){return c}});var t=n(641);const l={class:"app-notes"},a=(0,t.Lk)("h2",null,"Notes",-1);function s(e,o,n,s,r,u){const i=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",l,[a,(0,t.Lk)("p",null,[(0,t.bF)(i,{content:e.message},null,8,["content"])])])}var r=n(118),u=(0,t.pM)({name:"HelpItem",components:{Markdown:r.A},props:{message:{type:String,required:!0}}}),i=n(6262);const d=(0,i.A)(u,[["render",s]]);var c=d},5558:function(e,o,n){n.d(o,{A:function(){return b}});var t=n(641);const l=e=>((0,t.Qi)("data-v-5b828de6"),e=e(),(0,t.jt)(),e),a={class:"app-results"},s=l((()=>(0,t.Lk)("h2",null,"Output values",-1))),r=l((()=>(0,t.Lk)("h3",null,"Preview",-1))),u=l((()=>(0,t.Lk)("br",null,null,-1))),i=l((()=>(0,t.Lk)("h3",null,"Code",-1)));function d(e,o,n,l,d,c){const p=(0,t.g2)("Markdown"),g=(0,t.g2)("CodeItem");return(0,t.uX)(),(0,t.CE)("div",a,[s,(0,t.Lk)("div",null,[r,(0,t.bF)(p,{class:"markdown-preview",content:e.result},null,8,["content"])]),u,(0,t.Lk)("div",null,[i,(0,t.bF)(g,{code:e.result},null,8,["code"])])])}var c=n(8495),p=n(118),g=(0,t.pM)({name:"ResultsItem",components:{Markdown:p.A,CodeItem:c.A},props:{result:{type:String,required:!0}}}),m=n(6262);const h=(0,m.A)(g,[["render",d],["__scopeId","data-v-5b828de6"]]);var b=h},620:function(e,o,n){n.d(o,{A:function(){return h}});var t=n(641),l=n(33);const a=["for"],s={key:0,class:"required"},r=["id","value","placeholder","required","disabled"],u={key:0,class:"note"};function i(e,o,n,i,d,c){const p=(0,t.g2)("Markdown");return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("label",{for:e.slug},[(0,t.eW)((0,l.v_)(e.label),1),e.isRequired?((0,t.uX)(),(0,t.CE)("span",s,"*")):(0,t.Q3)("",!0)],8,a),(0,t.Lk)("input",{id:e.slug,type:"text",value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled,onInput:o[0]||(o[0]=o=>e.$emit("update:modelValue",o.target.value))},null,40,r),e.note?((0,t.uX)(),(0,t.CE)("small",u,[(0,t.bF)(p,{content:e.note},null,8,["content"])])):(0,t.Q3)("",!0)])}var d=n(5755),c=n(118),p=(0,t.pM)({name:"TextInput",components:{Markdown:c.A},props:{label:{type:String,required:!0},modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug(){return(0,d.Y)("text",this.label,this.modelValue)}}}),g=n(6262);const m=(0,g.A)(p,[["render",i],["__scopeId","data-v-de2a2f90"]]);var h=m},5421:function(e,o,n){n.r(o),n.d(o,{default:function(){return z}});var t=n(641),l=n(3751);const a={class:"badges container-lg"},s=(0,t.Lk)("div",{class:"row"},[(0,t.Lk)("div",{class:"col-12"},[(0,t.Lk)("h1",null,"Repo badges"),(0,t.Lk)("p",null," Generate shields about your repo and add them to your README.md file. ")])],-1),r={class:"row"},u={class:"col-6"},i={class:"app-input"},d=(0,t.Lk)("h2",null,"Input values",-1),c={name:"gh-repo"},p=(0,t.Lk)("legend",null,"GitHub repo",-1),g=(0,t.Lk)("br",null,null,-1),m=(0,t.Lk)("br",null,null,-1),h=(0,t.Lk)("br",null,null,-1),b=(0,t.Lk)("label",null,"Version type",-1),k=(0,t.Lk)("label",{for:"one"},"Tag",-1),f=(0,t.Lk)("label",{for:"two"},"Release",-1),w=(0,t.Lk)("br",null,null,-1),v={name:"display-options"},y=(0,t.Lk)("legend",null,"Display options",-1),L=(0,t.Lk)("br",null,null,-1),T={name:"gh-actions"},V=(0,t.Lk)("legend",null,"GitHub Actions workflow",-1),C=(0,t.Lk)("br",null,null,-1),A=(0,t.Lk)("input",{class:"btn",type:"submit",value:"Submit"},null,-1),S={class:"col-6"},R={class:"row"},I={class:"col-12"};function M(e,o,n,M,U,N){const F=(0,t.g2)("TextInput"),H=(0,t.g2)("Checkbox"),q=(0,t.g2)("Results"),B=(0,t.g2)("Help");return(0,t.uX)(),(0,t.CE)("div",a,[s,(0,t.Lk)("div",r,[(0,t.Lk)("div",u,[(0,t.Lk)("div",i,[d,(0,t.Lk)("form",{onSubmit:o[13]||(o[13]=(0,l.D$)(((...o)=>e.submit&&e.submit(...o)),["prevent"]))},[(0,t.Lk)("fieldset",c,[p,(0,t.bF)(F,{label:"Username",modelValue:e.username,"onUpdate:modelValue":o[0]||(o[0]=o=>e.username=o),isRequired:""},null,8,["modelValue"]),g,(0,t.bF)(F,{label:"Repo name",modelValue:e.repoName,"onUpdate:modelValue":o[1]||(o[1]=o=>e.repoName=o),isRequired:""},null,8,["modelValue"]),m,(0,t.bF)(F,{label:"License",modelValue:e.licenseType,"onUpdate:modelValue":o[2]||(o[2]=o=>e.licenseType=o)},null,8,["modelValue"]),h,(0,t.Lk)("div",null,[b,(0,t.Lk)("span",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio",id:"one",value:"tag","onUpdate:modelValue":o[3]||(o[3]=o=>e.versionType=o)},null,512),[[l.XL,e.versionType]]),k]),(0,t.Lk)("span",null,[(0,t.bo)((0,t.Lk)("input",{type:"radio",id:"two",value:"release","onUpdate:modelValue":o[4]||(o[4]=o=>e.versionType=o)},null,512),[[l.XL,e.versionType]]),f])])]),w,(0,t.Lk)("fieldset",v,[y,(0,t.bF)(F,{label:"Color",modelValue:e.badgeColor,"onUpdate:modelValue":o[5]||(o[5]=o=>e.badgeColor=o),placeholder:"e.g. blue",note:e.colorHelp},null,8,["modelValue","note"]),(0,t.bF)(H,{label:"Social badges",modelValue:e.addSocialBadges,"onUpdate:modelValue":o[6]||(o[6]=o=>e.addSocialBadges=o),note:"Show badges about the GitHub repo - not useful for your main README.md on GitHub but these are great for adding to a page on docs site or for linking to your repo from another location you control like a repo or website."},null,8,["modelValue"]),(0,t.bF)(H,{label:"Issues badge",modelValue:e.addIssues,"onUpdate:modelValue":o[7]||(o[7]=o=>e.addIssues=o),note:"Add a counter for number of open issues. The color will change based on the count."},null,8,["modelValue"]),(0,t.bF)(H,{label:"Template button",modelValue:e.useThisTemplate,"onUpdate:modelValue":o[8]||(o[8]=o=>e.useThisTemplate=o),note:"Add a <i>Use This Template</i> button."},null,8,["modelValue"]),(0,t.bF)(H,{label:"GH Pages button",modelValue:e.ghPages,"onUpdate:modelValue":o[9]||(o[9]=o=>e.ghPages=o),note:"Add a link to a GitHub Pages site."},null,8,["modelValue"]),(0,t.bF)(H,{label:"Documentation section",modelValue:e.addDocsSection,"onUpdate:modelValue":o[10]||(o[10]=o=>e.addDocsSection=o),note:"Add heading and content around documentation."},null,8,["modelValue"]),(0,t.bF)(H,{label:"License section",modelValue:e.addLicenseSection,"onUpdate:modelValue":o[11]||(o[11]=o=>e.addLicenseSection=o),note:"Add heading and content around license. If enabled, the license badge at the top of the page will point to this section on the page, otherwise it will point to the full URL of the license file."},null,8,["modelValue"])]),L,(0,t.Lk)("fieldset",T,[V,(0,t.bF)(F,{label:"Name",modelValue:e.workflowName,"onUpdate:modelValue":o[12]||(o[12]=o=>e.workflowName=o),placeholder:"e.g. Node CI",note:'From the "name" field of a GH Actions workflow file. For the default repo settings, you can use "GH Pages Deploy".'},null,8,["modelValue"])]),C,A],32)])]),(0,t.Lk)("div",S,[(0,t.bF)(q,{result:e.result},null,8,["result"])])]),(0,t.Lk)("div",R,[(0,t.Lk)("div",I,[(0,t.bF)(B,{message:e.note},null,8,["message"])])])])}var U=n(2782),N=n(4730),F=n(9667),H=n(6971),q=n(5340),B=n(3654),$=n(5558),_=n(620),E=n(348),x=n(6821);function D({ghURL:e,workflowName:o}){const n=encodeURIComponent(o);return`${e}/workflows/${n}/badge.svg`}function P({ghURL:e,workflowName:o}){const n=o.replace(/ /g,"+");return`${e}/actions?query=workflow:"${n}"`}function X({ghURL:e,workflowName:o}){return{altText:o,imageTarget:D({ghURL:e,workflowName:o}),linkTarget:P({ghURL:e,workflowName:o})}}function G(e,o){const n=e.ghURL(),t=X({ghURL:n,workflowName:o});return(0,x.nT)(t)}var j=n(3605);const Y="\n- Where to put the repo metadata badges.\n    - In your `README.md` file.\n- Where to put the social badges.\n    - On a docs site to link back to your repo.\n    - Link to a repo you don't own - such as if you want to link to the Vue repo and show its star count.\n- The first social badge has fixed display logic - so make sure you enter a valid repo as the badge can't tell you it is broken. A positive of this is that it works to point to private repos.\n- If you want to always how the latest tag, even if it has _no release_ yet, use the Tag badge. Otherwise, use the Release badge.\n- For centered badges - note that the HTML `align` attribute is being deprecated in favor of CSS. But in markdown on GitHub you cannot set CSS even inline and so must use the `align` attribute.\n\nIf you need more content for the body of your README.md or doc files, check out this generic template:\n\n- [![MichaelCurrin - generic-project-template](https://img.shields.io/static/v1?label=MichaelCurrin&message=generic-project-template&color=blue&logo=github)](https://github.com/MichaelCurrin/generic-project-template)\n";var O=(0,t.pM)({name:"RepoBadges",components:{Checkbox:B.A,Help:q.A,Results:$.A,TextInput:_.A},data(){const e="tag";return{username:j.A.getRepoUsername(),repoName:j.A.getRepoName(),licenseType:F.du.licenseType,addSocialBadges:!1,addIssues:!1,useThisTemplate:!1,ghPages:!1,addDocsSection:!0,addLicenseSection:!0,badgeColor:N.Xo.Default,workflowName:"",versionType:e,result:H.BI,note:Y,colorHelp:H.AM}},methods:{submit(){U.O&&(console.debug("Process inputs and render results"),console.debug({username:this.username,repoName:this.repoName,licenseType:this.licenseType,useThisTemplate:this.useThisTemplate,versionType:this.versionType,ghPages:this.ghPages,workflowName:this.workflowName,badgeColor:this.badgeColor})),j.A.setRepoUsername(this.username),j.A.setRepoName(this.repoName);const e=new E.lc(this.username,this.repoName,this.licenseType,this.badgeColor);let o="";if(this.addSocialBadges){const n=e.ghBadge(),t=e.ghCounterBadge("stars"),l=e.ghCounterBadge("forks");o=`_Social buttons_\n\n${n}\n${t}\n${l}\n`}const n=this.workflowName?G(e,this.workflowName):"",t=e.tagBadge(this.versionType),l=this.addLicenseSection,a=e.licenseBadge(l),s=this.addIssues?e.ghCounterBadge("issues"):"",r=this.useThisTemplate?e.useThisTemplateBadge():"",u=this.ghPages?e.ghPagesBadge():"",i=this.addDocsSection?e.documentationMessage():"",d=this.addLicenseSection?e.licenseMessage():"";this.result=`${o}\n\n_Repo metadata_\n\n${n}\n${t}\n${a}\n${s}\n\n_Call-to-Action buttons_\n\n<div align="center">\n\n${r}\n\n${u}\n\n</div>\n\n${i}\n\n${d}`}}}),Q=n(6262);const W=(0,Q.A)(O,[["render",M]]);var z=W}}]);
//# sourceMappingURL=repo.1ee36e10.js.map