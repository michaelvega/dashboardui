(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[111,145,146,147,148],{2374:function(t,l,n){"use strict";n.r(l);var e=n(1),o=n.n(e),r=n(529),a=n(528),i=n(526),q=n(530),s=n(539),c=n(927);l.default=function(){return o.a.createElement(i.default,null,o.a.createElement(r.default,null,o.a.createElement(s.a,{id:"forms.editor.header"})),o.a.createElement(a.default,null,o.a.createElement(q.default,null,o.a.createElement(c.a,{placeholder:"Write something..."}))))}},526:function(t,l,n){"use strict";n.r(l);var e,o=n(1),r=n.n(o),a=n(61),i=n(55).d.div(e||(e=Object(a.a)(["\n  padding: 40px 20px;\n  display: flex;\n  flex-flow: row wrap;\n  overflow: hidden;\n\n  @media only screen and (max-width: 767px) {\n    padding: 50px 20px;\n  }\n\n  @media (max-width: 580px) {\n    padding: 15px;\n  }\n"])));l.default=function(t){return r.a.createElement(i,Object.assign({className:null!=t.className?"".concat(t.className," isoLayoutContentWrapper"):"isoLayoutContentWrapper"},t),t.children)}},528:function(t,l,n){"use strict";n.r(l);var e,o,r,a=n(1),i=n.n(a),q=n(61),s=n(55),c=n(20),p=s.d.h3(e||(e=Object(q.a)(["\n  font-size: 14px;\n  font-weight: 500;\n  color: ",";\n  margin: 0;\n  margin-bottom: 5px;\n"])),Object(c.palette)("text",0)),b=s.d.p(o||(o=Object(q.a)(["\n  font-size: 13px;\n  font-weight: 400;\n  color: ",";\n  line-height: 24px;\n"])),Object(c.palette)("text",3)),d=function(t){return i.a.createElement("div",null,t.title?i.a.createElement(p,{className:"isoBoxTitle"}," ",t.title," "):"",t.subtitle?i.a.createElement(b,{className:"isoBoxSubTitle"}," ",t.subtitle," "):"")},u=s.d.div(r||(r=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  background-color: #ffffff;\n  border: 1px solid ",";\n  margin: 0 0 30px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 20px;\n    ",";\n  }\n\n  &.half {\n    width: calc(50% - 34px);\n    @media (max-width: 767px) {\n      width: 100%;\n    }\n  }\n"])),Object(c.palette)("border",0),"");l.default=function(t){return i.a.createElement(u,{className:"".concat(t.className?t.className:""," isoBoxWrapper"),style:t.style},i.a.createElement(d,{title:t.title,subtitle:t.subtitle}),t.children)}},529:function(t,l,n){"use strict";n.r(l);var e,o=n(1),r=n.n(o),a=n(61),i=n(55),q=n(20),s=n(86),c=i.d.h1(e||(e=Object(a.a)(["\n  font-size: 19px;\n  font-weight: 500;\n  color: ",";\n  width: 100%;\n  margin-right: 17px;\n  margin-bottom: 30px;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n\n  @media only screen and (max-width: 767px) {\n    margin: 0 10px;\n    margin-bottom: 30px;\n  }\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 40px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n    display: flex;\n    margin: ",";\n  }\n"])),Object(q.palette)("secondary",2),Object(q.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),Object(q.palette)("secondary",3),(function(t){return"rtl"===t["data-rtl"]?"0 15px 0 0":"0 0 0 15px"})),p=Object(s.a)(c);l.default=function(t){return r.a.createElement(p,{className:"isoComponentTitle"},t.children)}},530:function(t,l,n){"use strict";n.r(l);var e,o=n(1),r=n.n(o),a=n(61),i=n(55),q=n(20),s=n(86),c=i.d.div(e||(e=Object(a.a)(["\n  margin-top: 30px;\n  -webkit-overflow-scrolling: touch;\n\n  .demoBtn {\n    margin-right: ",";\n    margin-left: ",";\n  }\n\n  .demoBtnsWrapper {\n    &:nth-child(1) {\n      margin-left: ",";\n      margin-right: ",";\n      white-space: nowrap;\n    }\n\n    &:nth-child(2) {\n      width: 70px;\n      float: ",";\n    }\n\n    &:nth-child(3) {\n      width: 70px;\n      margin-left: ",";\n      margin-right: ",";\n    }\n\n    &:nth-child(4) {\n      margin-left: ",";\n      margin-right: ",";\n      clear: both;\n      white-space: nowrap;\n    }\n\n    @media only screen and (max-width: 480px) {\n      margin-left: ",";\n      white-space: nowrap;\n      margin-right: ",";\n      float: none !important;\n    }\n\n    .demoPosBtn {\n      width: 70px;\n      margin-right: ",";\n      margin-left: ",";\n      margin-bottom: 8px;\n      padding: 0;\n\n      @media only screen and (max-width: 480px) {\n        width: 65px;\n      }\n    }\n  }\n\n  .ant-btn {\n    &:not(.demoPosBtn) {\n      &:last-child {\n        margin-right: 0;\n      }\n    }\n  }\n\n  .tooltipBtn {\n    display: inline-block;\n    line-height: 32px;\n    height: 32px;\n    width: 70px;\n    font-size: 14px;\n    text-align: center;\n    background: ",";\n    margin-right: ",";\n    margin-left: ",";\n    margin-bottom: 6px;\n    border-radius: 6px;\n  }\n\n  .ant-progress {\n    &.ant-progress-circle {\n      margin-right: ",";\n      margin-left: ",";\n\n      &:last-child {\n        margin-right: ",";\n        margin-left: ",";\n      }\n    }\n  }\n\n  strong {\n    font-weight: 700;\n    font-size: 14px;\n  }\n"])),(function(t){return"rtl"===t["data-rtl"]?"0":"10px"}),(function(t){return"rtl"===t["data-rtl"]?"10px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0":"295px"}),(function(t){return"rtl"===t["data-rtl"]?"295px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"70px"}),(function(t){return"rtl"===t["data-rtl"]?"70px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0 !important"}),(function(t){return"rtl"===t["data-rtl"]?"0 !important":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"0":"8px"}),(function(t){return"rtl"===t["data-rtl"]?"8px":"0"}),Object(q.palette)("secondary",1),(function(t){return"rtl"===t["data-rtl"]?"auto":"6px"}),(function(t){return"rtl"===t["data-rtl"]?"6px":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"15px"}),(function(t){return"rtl"===t["data-rtl"]?"15px":"0"}),(function(t){return t["data-rtl"],"0"}),(function(t){return t["data-rtl"],"0"})),p=Object(s.a)(c);l.default=function(t){return r.a.createElement(p,{className:"isoExampleWrapper",style:t.style},t.children)}},927:function(t,l,n){"use strict";var e,o=n(2),r=n(5),a=n(77),i=n(18),q=n(19),s=n(1),c=n.n(s),p=n(1105),b=n.n(p),d=(n(1106),n(1107),n(1108),n(61)),u=n(55),h=n(20),m=n(86),f=u.d.div(e||(e=Object(d.a)(["\n  .ql-editor {\n    min-height: 215px;\n    text-align: ",";\n  }\n\n  .ql-toolbar.ql-snow,\n  .ql-container.ql-snow {\n    border: 1px solid ",";\n    text-align: ",";\n\n    .ql-formats {\n      margin: ",";\n    }\n\n    .ql-picker-label {\n      padding: ",";\n\n      &:not(.ql-color-picker):not(.ql-icon-picker) {\n        svg {\n          right: ",";\n          left: ",";\n        }\n      }\n    }\n  }\n\n  .ql-container {\n    font-family: ",";\n    min-height: 220px;\n  }\n\n  .ql-editor p,\n  .ql-editor ol,\n  .ql-editor ul,\n  .ql-editor pre,\n  .ql-editor blockquote,\n  .ql-editor h1,\n  .ql-editor h2,\n  .ql-editor h3,\n  .ql-editor h4,\n  .ql-editor h5,\n  .ql-editor h6 {\n    color: ",";\n  }\n\n  .ql-snow.ql-toolbar button:hover,\n  .ql-snow .ql-toolbar button:hover,\n  .ql-snow.ql-toolbar button:focus,\n  .ql-snow .ql-toolbar button:focus,\n  .ql-snow.ql-toolbar button.ql-active,\n  .ql-snow .ql-toolbar button.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-label:hover,\n  .ql-snow .ql-toolbar .ql-picker-label:hover,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active,\n  .ql-snow.ql-toolbar .ql-picker-item:hover,\n  .ql-snow .ql-toolbar .ql-picker-item:hover,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {\n    color: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,\n  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {\n    fill: ",";\n  }\n  .ql-snow.ql-toolbar button:hover .ql-stroke,\n  .ql-snow .ql-toolbar button:hover .ql-stroke,\n  .ql-snow.ql-toolbar button:focus .ql-stroke,\n  .ql-snow .ql-toolbar button:focus .ql-stroke,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,\n  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,\n  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,\n  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,\n  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {\n    stroke: ",";\n  }\n\n  .ql-snow a {\n    color: ",";\n  }\n"])),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),Object(h.palette)("border",0),(function(t){return"rtl"===t["data-rtl"]?"right":"left"}),(function(t){return"rtl"===t["data-rtl"]?"0 0 0 15px":"0 15px 0 0"}),(function(t){return"rtl"===t["data-rtl"]?"0 8px 0 2px":"0 2px 0 8px"}),(function(t){return"rtl"===t["data-rtl"]?"inherit":"0"}),(function(t){return"rtl"===t["data-rtl"]?"0":"inherit"}),Object(h.font)("primary",0),Object(h.palette)("text",0),Object(h.palette)("primary",0),Object(h.palette)("primary",0),Object(h.palette)("primary",0),Object(h.palette)("primary",0)),w=Object(m.a)(f),k=function(t){Object(i.a)(n,t);var l=Object(q.a)(n);function n(t){var e;return Object(o.a)(this,n),(e=l.call(this,t)).state={editorHtml:"",theme:"snow"},e.handleChange=e.handleChange.bind(Object(a.a)(e)),e}return Object(r.a)(n,[{key:"handleChange",value:function(t){this.setState({editorHtml:t})}},{key:"handleThemeChange",value:function(t){"core"===t&&(t=null),this.setState({theme:t})}},{key:"render",value:function(){return c.a.createElement(w,null,c.a.createElement(b.a,{theme:this.state.theme,onChange:this.handleChange,value:this.state.editorHtml,modules:n.modules,formats:n.formats,bounds:".app",placeholder:this.props.placeholder}))}}]),n}(c.a.Component);k.modules={toolbar:[[{header:"1"},{header:"2"},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image","video"],["clean"]],clipboard:{matchVisual:!1}},k.formats=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","indent","link","image","video"];l.a=k}}]);
//# sourceMappingURL=111.25cab54f.chunk.js.map