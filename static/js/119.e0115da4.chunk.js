(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[119,145,146,147,148],{2383:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e.n(a),i=e(529),l=e(528),o=e(526),c=e(530),p=(e(2097),e(2098),e(691)),d=e.n(p),s=e(2110),u=e.n(s),m=e(2128),f=e.n(m),h=e(2147),g=e.n(h),x=e(2148),b=e.n(x),w=e(2149);t.default=function(){var n=d()({debug:!0,autoProceed:!1,restrictions:{maxFileSize:1e6,maxNumberOfFiles:3,minNumberOfFiles:2,allowedFileTypes:["image/*","video/*"]}});return n.use(f.a,{id:"GoogleDrive",companionUrl:"https://companion.uppy.io"}),n.use(g.a,{companionUrl:"https://companion.uppy.io"}),n.use(b.a,{companionUrl:"https://companion.uppy.io"}),n.use(u.a,{endpoint:"https://master.tus.io/files/"}),n.on("complete",(function(n){console.log("successful files:",n.successful),console.log("failed files:",n.failed)})),r.a.createElement(o.default,null,r.a.createElement(i.default,null,"Uppy"),r.a.createElement(l.default,null,r.a.createElement(c.default,null,r.a.createElement(w.a,{plugins:["GoogleDrive","Dropbox","Instagram"],uppy:n,inline:!0,target:".DashboardContainer",replaceTargetContent:!0,showProgressDetails:!0,note:"Images and video only, 2\u20133 files, up to 1 MB",height:470,width:"100%",metaFields:[{id:"name",name:"Name",placeholder:"file name"},{id:"caption",name:"Caption",placeholder:"describe what the image is about"}],browserBackButtonClose:!0}))))}},526:function(n,t,e){"use strict";e.r(t);var a,r=e(1),i=e.n(r),l=e(61),o=e(55).d.div(a||(a=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));t.default=function(n){return i.a.createElement(o,Object.assign({className:null!=n.className?"".concat(n.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},n),n.children)}},528:function(n,t,e){"use strict";e.r(t);var a,r,i,l=e(1),o=e.n(l),c=e(61),p=e(55),d=e(20),s=p.d.h3(a||(a=Object(c.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(d.palette)("text",0)),u=p.d.p(r||(r=Object(c.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(d.palette)("text",3)),m=function(n){return o.a.createElement("div",null,n.title?o.a.createElement(s,{className:"isoBoxTitle"}," ",n.title," "):"",n.subtitle?o.a.createElement(u,{className:"isoBoxSubTitle"}," ",n.subtitle," "):"")},f=p.d.div(i||(i=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(d.palette)("border",0),"");t.default=function(n){return o.a.createElement(f,{className:"".concat(n.className?n.className:""," isoBoxWrapper"),style:n.style},o.a.createElement(m,{title:n.title,subtitle:n.subtitle}),n.children)}},529:function(n,t,e){"use strict";e.r(t);var a,r=e(1),i=e.n(r),l=e(61),o=e(55),c=e(20),p=e(86),d=o.d.h1(a||(a=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(c.palette)("secondary",2),Object(c.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(c.palette)("secondary",3),(function(n){return"rtl"===n["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),s=Object(p.a)(d);t.default=function(n){return i.a.createElement(s,{className:"isoComponentTitle"},n.children)}},530:function(n,t,e){"use strict";e.r(t);var a,r=e(1),i=e.n(r),l=e(61),o=e(55),c=e(20),p=e(86),d=o.d.div(a||(a=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(n){return"rtl"===n["data-rtl"]?"0":"10px"}),(function(n){return"rtl"===n["data-rtl"]?"10px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"70px"}),(function(n){return"rtl"===n["data-rtl"]?"70px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"right":"left"}),(function(n){return"rtl"===n["data-rtl"]?"0":"295px"}),(function(n){return"rtl"===n["data-rtl"]?"295px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"70px"}),(function(n){return"rtl"===n["data-rtl"]?"70px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"8px":"0 !important"}),(function(n){return"rtl"===n["data-rtl"]?"0 !important":"8px"}),(function(n){return"rtl"===n["data-rtl"]?"0":"8px"}),(function(n){return"rtl"===n["data-rtl"]?"8px":"0"}),Object(c.palette)("secondary",1),(function(n){return"rtl"===n["data-rtl"]?"auto":"6px"}),(function(n){return"rtl"===n["data-rtl"]?"6px":"0"}),(function(n){return"rtl"===n["data-rtl"]?"0":"15px"}),(function(n){return"rtl"===n["data-rtl"]?"15px":"0"}),(function(n){return n["data-rtl"],"0"}),(function(n){return n["data-rtl"],"0"})),s=Object(p.a)(d);t.default=function(n){return i.a.createElement(s,{className:"isoExampleWrapper",style:n.style},n.children)}}}]);
//# sourceMappingURL=119.e0115da4.chunk.js.map