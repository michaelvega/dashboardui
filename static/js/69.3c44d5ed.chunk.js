(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[69,145,146,147,148],{1923:function(e,t,n){},2368:function(e,t,n){"use strict";n.r(t);n(520);var a=n(518),r=(n(521),n(519)),l=n(0),i=n.n(l),c=n(847),o=n(516),m=n(515),s=n(513),u=n(517),d=n(526),p=(n(112),n(1923),n(5)),f=n(7),g=n(11),h=n.n(g),x=n(102),b=n(79),E=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},w=function(e){var t,n,a=e.prefixCls,r=e.className,i=e.color,c=void 0===i?"blue":i,o=e.dot,m=e.pending,s=void 0!==m&&m,u=(e.position,e.label),d=e.children,g=E(e,["prefixCls","className","color","dot","pending","position","label","children"]),x=(0,l.useContext(b.b).getPrefixCls)("timeline",a),w=h()((t={},Object(f.a)(t,"".concat(x,"-item"),!0),Object(f.a)(t,"".concat(x,"-item-pending"),s),t),r),v=h()((n={},Object(f.a)(n,"".concat(x,"-item-head"),!0),Object(f.a)(n,"".concat(x,"-item-head-custom"),!!o),Object(f.a)(n,"".concat(x,"-item-head-").concat(c),!0),n));return l.createElement("li",Object(p.a)({},g,{className:w}),u&&l.createElement("div",{className:"".concat(x,"-item-label")},u),l.createElement("div",{className:"".concat(x,"-item-tail")}),l.createElement("div",{className:v,style:{borderColor:/blue|red|green|gray/.test(c||"")?void 0:c}},o),l.createElement("div",{className:"".concat(x,"-item-content")},d))},v=n(35),y=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=function(e){var t,n=l.useContext(b.b),a=n.getPrefixCls,r=n.direction,i=e.prefixCls,c=e.pending,o=void 0===c?null:c,m=e.pendingDot,s=e.children,u=e.className,d=e.reverse,g=void 0!==d&&d,E=e.mode,O=void 0===E?"":E,j=y(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),C=a("timeline",i),N="boolean"===typeof o?null:o,k=o?l.createElement(w,{pending:!!o,dot:m||l.createElement(x.a,null)},N):null,S=l.Children.toArray(s);S.push(k),g&&S.reverse();var F=function(e,t){return"alternate"===O?"right"===e.props.position?"".concat(C,"-item-right"):"left"===e.props.position?"".concat(C,"-item-left"):"".concat(C,t%2===0?"-item-left":"-item-right"):"left"===O?"".concat(C,"-item-left"):"right"===O||"right"===e.props.position?"".concat(C,"-item-right"):""},B=S.filter((function(e){return!!e})),P=l.Children.count(B),z="".concat(C,"-item-last"),T=l.Children.map(B,(function(e,t){var n=t===P-2?z:"",a=t===P-1?z:"";return Object(v.a)(e,{className:h()([e.props.className,!g&&o?n:a,F(e,t)])})})),I=S.some((function(e){var t;return!!(null===(t=null===e||void 0===e?void 0:e.props)||void 0===t?void 0:t.label)})),W=h()(C,(t={},Object(f.a)(t,"".concat(C,"-pending"),!!o),Object(f.a)(t,"".concat(C,"-reverse"),!!g),Object(f.a)(t,"".concat(C,"-").concat(O),!!O&&!I),Object(f.a)(t,"".concat(C,"-label"),I),Object(f.a)(t,"".concat(C,"-rtl"),"rtl"===r),t),u);return l.createElement("ul",Object(p.a)({},j,{className:W}),T)};O.Item=w;var j,C=O,N=n(42),k=n(38),S=n(9),F=function(e){return Object(k.d)(e)(j||(j=Object(N.a)(["\n  &.ant-timeline {\n    .ant-timeline-item-content {\n      font-size: 13px;\n      color: ",";\n      padding: ",";\n    }\n    .ant-timeline-item-tail {\n      left: ",";\n      right: ",";\n    }\n    .ant-timeline-item-head-custom {\n      left: ",";\n      right: ",";\n    }\n  }\n"])),Object(S.palette)("text",3),(function(e){return"rtl"===e["data-rtl"]?"0 24px 10px 0":"0 0 10px 24px"}),(function(e){return"rtl"===e["data-rtl"]?"inherit":"4px"}),(function(e){return"rtl"===e["data-rtl"]?"4px":"inherit"}),(function(e){return"rtl"===e["data-rtl"]?"inherit":"5px"}),(function(e){return"rtl"===e["data-rtl"]?"5px":"inherit"}))},B=n(68),P=F(C),z=F(C.Item),T=Object(B.a)(z),I=Object(B.a)(P),W=n(524);t.default=function(){var e=W.b.rowStyle,t=W.b.colStyle,n=W.b.gutter;return i.a.createElement(s.default,null,i.a.createElement(o.default,null,i.a.createElement(d.a,{id:"uiElements.timeline.timeline"})),i.a.createElement(a.a,{style:e,gutter:n,justify:"start"},i.a.createElement(r.a,{md:12,sm:12,xs:24,style:t},i.a.createElement(m.default,{title:i.a.createElement(d.a,{id:"uiElements.timeline.basicExample"}),subtitle:i.a.createElement(d.a,{id:"uiElements.timeline.basicTimeline"})},i.a.createElement(u.default,null,i.a.createElement(I,null,i.a.createElement(T,null,i.a.createElement(d.a,{id:"uiElements.timeline.createServiceSite"})),i.a.createElement(T,null,i.a.createElement(d.a,{id:"uiElements.timeline.solveInitialNetwork"})),i.a.createElement(T,null,i.a.createElement(d.a,{id:"uiElements.timeline.technicalTesting"})),i.a.createElement(T,null,i.a.createElement(d.a,{id:"uiElements.timeline.networkProblemSolved"})))))),i.a.createElement(r.a,{md:12,sm:12,xs:24,style:t},i.a.createElement(m.default,{title:i.a.createElement(d.a,{id:"uiElements.timeline.colorExample"}),subtitle:i.a.createElement(d.a,{id:"uiElements.timeline.colorExampleContent"})},i.a.createElement(u.default,null,i.a.createElement(I,null,i.a.createElement(T,{color:"green"},"Create a services site 2015-09-01"),i.a.createElement(T,{color:"green"},"Create a services site 2015-09-01"),i.a.createElement(T,{color:"red"},i.a.createElement("p",null,"Solve initial network problems 1"),i.a.createElement("p",null,"Solve initial network problems 2"),i.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),i.a.createElement(T,null,i.a.createElement("p",null,"Technical testing 1"),i.a.createElement("p",null,"Technical testing 2"),i.a.createElement("p",null,"Technical testing 3 2015-09-01"))))))),i.a.createElement(a.a,{style:e,gutter:n,justify:"start"},i.a.createElement(r.a,{md:12,sm:12,xs:24,style:t},i.a.createElement(m.default,{title:i.a.createElement(d.a,{id:"uiElements.timeline.custom"}),subtitle:i.a.createElement(d.a,{id:"uiElements.timeline.customContent"})},i.a.createElement(u.default,null,i.a.createElement(I,null,i.a.createElement(T,null,"Create a services site 2015-09-01"),i.a.createElement(T,null,"Solve initial network problems 2015-09-01"),i.a.createElement(T,{dot:i.a.createElement(c.a,{style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),i.a.createElement(T,null,"Network problems being solved 2015-09-01"))))),i.a.createElement(r.a,{md:12,sm:12,xs:24,style:t},i.a.createElement(m.default,{title:i.a.createElement(d.a,{id:"uiElements.timeline.lastNode"}),subtitle:i.a.createElement(d.a,{id:"uiElements.timeline.lastNodeContent"})},i.a.createElement(u.default,null,i.a.createElement(I,{pending:i.a.createElement("a",{href:"# "},i.a.createElement(d.a,{id:"uiElements.timeline.seeMore"}))},i.a.createElement(T,null,"Create a services site 2015-09-01"),i.a.createElement(T,null,"Solve initial network problems 2015-09-01"),i.a.createElement(T,null,"Technical testing 2015-09-01")))))))}},513:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),i=n(42),c=n(38).d.div(a||(a=Object(i.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));t.default=function(e){return l.a.createElement(c,Object.assign({className:null!=e.className?"".concat(e.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},e),e.children)}},515:function(e,t,n){"use strict";n.r(t);var a,r,l,i=n(0),c=n.n(i),o=n(42),m=n(38),s=n(9),u=m.d.h3(a||(a=Object(o.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(s.palette)("text",0)),d=m.d.p(r||(r=Object(o.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(s.palette)("text",3)),p=function(e){return c.a.createElement("div",null,e.title?c.a.createElement(u,{className:"isoBoxTitle"}," ",e.title," "):"",e.subtitle?c.a.createElement(d,{className:"isoBoxSubTitle"}," ",e.subtitle," "):"")},f=m.d.div(l||(l=Object(o.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(s.palette)("border",0),"");t.default=function(e){return c.a.createElement(f,{className:"".concat(e.className?e.className:""," isoBoxWrapper"),style:e.style},c.a.createElement(p,{title:e.title,subtitle:e.subtitle}),e.children)}},516:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),i=n(42),c=n(38),o=n(9),m=n(68),s=c.d.h1(a||(a=Object(i.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(o.palette)("secondary",2),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(o.palette)("secondary",3),(function(e){return"rtl"===e["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),u=Object(m.a)(s);t.default=function(e){return l.a.createElement(u,{className:"isoComponentTitle"},e.children)}},517:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),i=n(42),c=n(38),o=n(9),m=n(68),s=c.d.div(a||(a=Object(i.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(e){return"rtl"===e["data-rtl"]?"0":"10px"}),(function(e){return"rtl"===e["data-rtl"]?"10px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),(function(e){return"rtl"===e["data-rtl"]?"0":"295px"}),(function(e){return"rtl"===e["data-rtl"]?"295px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"70px"}),(function(e){return"rtl"===e["data-rtl"]?"70px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0 !important"}),(function(e){return"rtl"===e["data-rtl"]?"0 !important":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"0":"8px"}),(function(e){return"rtl"===e["data-rtl"]?"8px":"0"}),Object(o.palette)("secondary",1),(function(e){return"rtl"===e["data-rtl"]?"auto":"6px"}),(function(e){return"rtl"===e["data-rtl"]?"6px":"0"}),(function(e){return"rtl"===e["data-rtl"]?"0":"15px"}),(function(e){return"rtl"===e["data-rtl"]?"15px":"0"}),(function(e){return e["data-rtl"],"0"}),(function(e){return e["data-rtl"],"0"})),u=Object(m.a)(s);t.default=function(e){return l.a.createElement(u,{className:"isoExampleWrapper",style:e.style},e.children)}},518:function(e,t,n){"use strict";var a=n(1600);t.a=a.a},519:function(e,t,n){"use strict";var a=n(1173);t.a=a.a},520:function(e,t,n){"use strict";n(112),n(525)},521:function(e,t,n){"use strict";n(112),n(525)},524:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r}));var a={blue:{deep:"rgb(0, 121, 191)",light:"lightblue",lighter:"#d9fcff",soft:"#E6FCFF"},black:"#4d4d4d",shadow:"rgba(0,0,0,0.2)",grey:{darker:"#C1C7D0",dark:"#E2E4E6",medium:"#DFE1E5",N30:"#EBECF0",light:"#F4F5F7"},green:"rgb(185, 244, 188)",white:"white",purple:"rebeccapurple",orange:"#FF991F"},r=8,l={rowStyle:{width:"100%",display:"flex",flexFlow:"row wrap"},colStyle:{marginBottom:"16px"},gutter:16};t.b=l},847:function(e,t,n){"use strict";var a=n(4),r=n(0),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},i=n(20),c=function(e,t){return r.createElement(i.a,Object(a.a)(Object(a.a)({},e),{},{ref:t,icon:l}))};c.displayName="ClockCircleOutlined";t.a=r.forwardRef(c)}}]);
//# sourceMappingURL=69.3c44d5ed.chunk.js.map