(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80884c6e"],{"446e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?n("span",{staticClass:"required"},[e._v("*")]):e._e()]),n("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?n("small",{staticClass:"note"},[n("Markdown",{attrs:{content:e.note}})],1):e._e()])},i=[],l=n("2b0e"),r=n("84f8"),s=n("e6e0"),o=l["a"].extend({name:"TextInput",components:{Markdown:s["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(r["a"])("text",this.label,this.value)}}}),c=o,u=(n("6091"),n("2877")),d=Object(u["a"])(c,a,i,!1,null,"c1fbdf8e",null);t["a"]=d.exports},6091:function(e,t,n){"use strict";n("fae3")},7737:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)+" ")]),n("input",{attrs:{id:e.slug,type:"checkbox"},domProps:{checked:e.checked},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),e.note?n("small",{staticClass:"note"},[n("Markdown",{attrs:{content:e.note}})],1):e._e()])},i=[],l=n("2b0e"),r=n("e6e0"),s=n("84f8"),o=l["a"].extend({name:"Checkbox",components:{Markdown:r["a"]},props:{label:{type:String,required:!0},checked:{type:Boolean,required:!1,default:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(s["a"])("box",this.label)}}}),c=o,u=n("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null);t["a"]=d.exports},8169:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-results"},[n("h2",[e._v("Output values")]),n("div",[n("h3",[e._v("Preview")]),n("Markdown",{attrs:{content:e.result}})],1),n("div",[n("h3",[e._v("Code")]),n("Pre",[e._v(e._s(e.result))])],1)])},i=[],l=n("2b0e"),r=n("ee75"),s=n("e6e0"),o=l["a"].extend({name:"Results",components:{Markdown:s["a"],Pre:r["a"]},props:{result:String}}),c=o,u=n("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null);t["a"]=d.exports},"84f8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("5319"),n("ac1f"),n("a15b");function a(e){return e.replace(/^\/+/,"")}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.join("-");return a.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},ca2c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-notes"},[n("h2",[e._v("Notes")]),n("p",[n("Markdown",{attrs:{content:e.message}})],1)])},i=[],l=n("2b0e"),r=n("e6e0"),s=l["a"].extend({name:"Help",components:{Markdown:r["a"]},props:{message:String}}),o=s,c=n("2877"),u=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=u.exports},ee75:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._t("default")],2)])},i=[],l=n("2b0e"),r=l["a"].extend({name:"Pre"}),s=r,o=n("2877"),c=Object(o["a"])(s,a,i,!1,null,null,null);t["a"]=c.exports},fae3:function(e,t,n){},feec:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"images container-lg"},[e._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"app-input"},[n("h2",[e._v("Input values")]),n("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[n("fieldset",{attrs:{name:"links"}},[n("legend",[e._v("Links")]),n("TextInput",{attrs:{label:"Source",placeholder:"e.g. /sample.png",note:"Local path or URL.",isRequired:""},model:{value:e.imgSrc,callback:function(t){e.imgSrc=t},expression:"imgSrc"}}),n("TextInput",{attrs:{label:"Click target",placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},model:{value:e.linkTarget,callback:function(t){e.linkTarget=t},expression:"linkTarget"}})],1),n("br"),n("fieldset",{attrs:{name:"text"}},[n("legend",[e._v("Text")]),n("TextInput",{attrs:{label:"Alt text",placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},model:{value:e.altText,callback:function(t){e.altText=t},expression:"altText"}}),n("br"),n("TextInput",{attrs:{label:"Title",note:"Text to show on hover."},model:{value:e.imgTitle,callback:function(t){e.imgTitle=t},expression:"imgTitle"}})],1),n("br"),n("fieldset",{attrs:{id:"appearance"}},[n("legend",[e._v("Appearance")]),n("TextInput",{attrs:{label:"Width",placeholder:"e.g. 400",note:"Measured in pixels. No px is needed."},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),n("br"),n("TextInput",{attrs:{label:"Height",placeholder:"e.g. 400",note:"Recommended: Set height only if width is set too, as just height can cause distortion on mobile view"},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}}),n("br"),n("Checkbox",{attrs:{label:"Align center",checked:e.alignCenter},model:{value:e.alignCenter,callback:function(t){e.alignCenter=t},expression:"alignCenter"}})],1),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),n("div",{staticClass:"col-6"},[n("Results",{attrs:{result:e.result}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Help",{attrs:{message:"<p>\n          Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n          will also submit.\n        </p>\n        <p>\n          Setting <i>width</i> and <i>height</i> is optional, but this can\n          help in certain cases. For example, a screenshot or logo will be set\n          by GitHub to <i>100%</i> of the page width making it look large and\n          take up vertical space, so reduce height or width manually.\n        </p>\n        <p>\n          Setting height can also make sure the height of the tag is set\n          before the image loads, so it reserves the space - if the height is\n          larger than the original image though then the image will looked\n          stretched.\n        </p>\n        <p>\n          Warning: If you set height only to say 400, then the image in the\n          README.md will look fine on desktop but ends up looking distorted on\n          mobile.\n        </p>"}})],1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[e._v("Image")]),n("p",[e._v(" Add an image to your README.md file, such as your logo or a sample screenshot of your app. This is just a badge section, but displaying an image using markdown and HTML. ")])])])}],l=(n("99af"),n("2b0e")),r=n("84f8"),s=n("7737"),o=n("ca2c"),c=n("8169"),u=n("446e"),d=n("7cba");function p(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,r=arguments.length>6?arguments[6]:void 0,s=n?' title="'.concat(n,'"'):"",o=t?' alt="'.concat(t,'"'):"",c=i?' width="'.concat(i,'"'):"",u=l?' height="'.concat(l,'"'):"",d='<img src="'.concat(e,'"').concat(o).concat(s).concat(c).concat(u," />");return a&&(d='<a href="'.concat(a,'">\n    ').concat(d,"\n</a>")),r&&(d='<div align="'.concat(r,'">\n').concat(d,"\n</div>")),d}var h=l["a"].extend({name:"ImageView",components:{Checkbox:s["a"],Help:o["a"],Results:c["a"],TextInput:u["a"]},data:function(){return{imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:"",alignCenter:!0,result:"_Your output will appear here_"}},computed:{altTextOut:function(){return Object(r["b"])(this.altText||this.imgSrc)},imgTitleOut:function(){return Object(r["b"])(this.imgTitle||this.altText)}},methods:{submit:function(){console.debug("Process inputs and render results");var e=p(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height,this.alignCenter?"center":""),t=Object(d["a"])({altText:this.altTextOut,imageTarget:this.imgSrc,linkTarget:this.linkTarget,hoverTitle:this.imgTitleOut});this.result="_HTML image_\n\n".concat(e,"\n\n_Markdown image_\n\n").concat(t,"\n      ")}}}),g=h,m=n("2877"),b=Object(m["a"])(g,a,i,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-80884c6e.022abb05.js.map