(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[61,145,146,147,148],{1280:function(e,t,n){"use strict";n(902);var a=n(229);t.a=a.b},2408:function(e,t,n){"use strict";n.r(t);n(520);var a,r=n(518),i=(n(521),n(519)),l=n(0),c=n.n(l),o=n(1280),s=n(194),d=n(516),u=n(515),m=n(513),p=n(517),f=n(526),g=n(524),x=n(42),h=n(38).d.p(a||(a=Object(x.a)(["\n  display: inline-block;\n  font-size: 13px;\n"]))),b=function(){o.a.success(c.a.createElement(h,null,"This is a message of success will dessapear after 3 seconds"),3)},E=function(){o.a.error(c.a.createElement(h,null,"This is a message of error"),10)},w=function(){o.a.warning(c.a.createElement(h,null,"This is message of warning"))},y=function(){var e=o.a.loading(c.a.createElement(h,null,"Action in progress.."),0);setTimeout(e,2500)},k=function(){o.a.success(c.a.createElement(h,null,"This is a prompt message for success, and it will disappear in 10 seconds"),10)};t.default=function(){var e=g.b.rowStyle,t=g.b.colStyle,n=g.b.gutter,a={marginRight:"5px",marginBottom:"5px"};return c.a.createElement(m.default,null,c.a.createElement(d.default,null,c.a.createElement(f.a,{id:"feedback.alert.message"})),c.a.createElement(r.a,{style:e,gutter:n,justify:"start"},c.a.createElement(i.a,{md:12,sm:12,xs:24,style:t},c.a.createElement(u.default,{title:c.a.createElement(f.a,{id:"feedback.alert.normalMessageTitle"}),subtitle:c.a.createElement(f.a,{id:"feedback.alert.normalMessageSubtitle"})},c.a.createElement(p.default,null,c.a.createElement(s.b,{type:"primary",onClick:function(){o.a.info("This is a normal message")}},c.a.createElement(f.a,{id:"feedback.alert.displayMessage"}))))),c.a.createElement(i.a,{md:12,sm:12,xs:24,style:t},c.a.createElement(u.default,{title:c.a.createElement(f.a,{id:"feedback.alert.displayOtherTypeMessageTitle"}),subtitle:c.a.createElement(f.a,{id:"feedback.alert.displayOtherTypeMessageSubTitle"})},c.a.createElement(p.default,null,c.a.createElement(s.b,{onClick:b,style:a},c.a.createElement(f.a,{id:"feedback.alert.successText"})),c.a.createElement(s.b,{onClick:E,style:a},c.a.createElement(f.a,{id:"feedback.alert.errorText"})),c.a.createElement(s.b,{onClick:w},c.a.createElement(f.a,{id:"feedback.alert.warningText"})))))),c.a.createElement(r.a,{style:e,gutter:n,justify:"start"},c.a.createElement(i.a,{md:12,sm:12,xs:24,style:t},c.a.createElement(u.default,{title:c.a.createElement(f.a,{id:"feedback.alert.customizeDurationTitle"}),subtitle:c.a.createElement(f.a,{id:"feedback.alert.customizeDurationSubTitle"})},c.a.createElement(p.default,null,c.a.createElement(s.b,{onClick:k},c.a.createElement(f.a,{id:"feedback.alert.customizeDurationButton"}))))),c.a.createElement(i.a,{md:12,sm:12,xs:24,style:t},c.a.createElement(u.default,{title:c.a.createElement(f.a,{id:"feedback.alert.messageLoadingTitle"}),subtitle:c.a.createElement(f.a,{id:"feedback.alert.messageLoadingSubTitle"})},c.a.createElement(p.default,null,c.a.createElement(s.b,{onClick:y},c.a.createElement(f.a,{id:"feedback.alert.displayLoadIndicator"})))))))}},513:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),l=n(42),c=n(38).d.div(a||(a=Object(l.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));t.default=function(e){return i.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},515:function(e,t,n){"use strict";n.r(t);var a,r,i,l=n(0),c=n.n(l),o=n(42),s=n(38),d=n(9),u=s.d.h3(a||(a=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(d.palette)("text",0)),m=s.d.p(r||(r=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(d.palette)("text",3)),p=function(e){return c.a.createElement("div",null,e.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?c.a.createElement(m,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")},f=s.d.div(i||(i=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(d.palette)("border",0),"");t.default=function(e){return c.a.createElement(f,{className:"".concat(e.className?e.className:""," isoBoxWrapper"),style:e.style},c.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},516:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),l=n(42),c=n(38),o=n(9),s=n(68),d=c.d.h1(a||(a=Object(l.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(s.a)(d);t.default=function(e){return i.a.createElement(u,{className:"isoComponentTitle"},e.children)}},517:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),l=n(42),c=n(38),o=n(9),s=n(68),d=c.d.div(a||(a=Object(l.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(e){return"rtl"===e["data-rtl"]?"0":"10px"}),(function(e){return"rtl"===e["data-rtl"]?"10px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),(function(e){return"rtl"===e["data-rtl"]?"0":"295px"}),(function(e){return"rtl"===e["data-rtl"]?"295px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"}),(function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"0":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0"}),Object(o.palette)("secondary",1),(function(e){return"rtl"===e["data-rtl"]?"auto":"6px"}),(function(e){return"rtl"===e["data-rtl"]?"6px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"15px"}),(function(e){return"rtl"===e["data-rtl"]?"15px":"0"}),(function(e){return e["data-rtl"],"0"}),(function(e){return e["data-rtl"],"0"})),u=Object(s.a)(d);t.default=function(e){return i.a.createElement(u,{className:"isoExampleWrapper",style:e.style},e.children)}},518:function(e,t,n){"use strict";var a=n(1600);t.a=a.a},519:function(e,t,n){"use strict";var a=n(1173);t.a=a.a},520:function(e,t,n){"use strict";n(112),n(525)},521:function(e,t,n){"use strict";n(112),n(525)},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,i={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.b=i},902:function(e,t,n){"use strict";n(112),n(903)},903:function(e,t,n){}}]);
//# sourceMappingURL=61.5f3223b5.chunk.js.map