(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[124],{1281:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n(25),a=n.n(o);function r(e,t,n,o){var r=a.a.unstable_batchedUpdates?function(e){a.a.unstable_batchedUpdates(n,e)}:n;return e.addEventListener&&e.addEventListener(t,r,o),{remove:function(){e.removeEventListener&&e.removeEventListener(t,r)}}}},1282:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var o=n(13),a=n(119);function r(e){var t,n=function(n){return function(){t=null,e.apply(void 0,Object(o.a)(n))}},r=function(){if(null==t){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];t=Object(a.a)(n(o))}};return r.cancel=function(){return a.a.cancel(t)},r}function i(){return function(e,t,n){var o=n.value,a=!1;return{configurable:!0,get:function(){if(a||this===e.prototype||this.hasOwnProperty(t))return o;var n=r(o.bind(this));return a=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),a=!1,n}}}}},1910:function(e,t,n){},2379:function(e,t,n){"use strict";n.r(t);n(112),n(1910);var o=n(5),a=n(7),r=n(18),i=n(19),f=n(21),l=n(22),c=n(16),u=n(0),s=n.n(u),p=n(11),d=n.n(p),h=n(69),v=n(201),m=n(79),b=n(1282),g=n(1281);function y(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function x(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top}function E(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n)return n+(window.innerHeight-t.bottom)}var w=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],O=[];function P(e,t){if(e){var n=O.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},O.push(n),w.forEach((function(t){n.eventHandlers[t]=Object(g.a)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))}}function T(e){var t=O.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(O=O.filter((function(e){return e!==t})),w.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))}var N,j=function(e,t,n,o){var a,r=arguments.length,i=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===("undefined"===typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(a=e[f])&&(i=(r<3?a(i):r>3?a(t,n,i):a(t,n))||i);return r>3&&i&&Object.defineProperty(t,n,i),i};function S(){return"undefined"!==typeof window?window:null}!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(N||(N={}));var A=function(e){Object(f.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).state={status:N.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props.offsetBottom,n=e.props.offsetTop;return void 0===t&&void 0===n&&(n=0),n},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,o=t.lastAffix,a=e.props.onChange,r=e.getTargetFunc();if(n===N.Prepare&&e.fixedNode&&e.placeholderNode&&r){var i=e.getOffsetTop(),f=e.getOffsetBottom(),l=r();if(l){var c={status:N.None},u=y(l),s=y(e.placeholderNode),p=x(s,u,i),d=E(s,u,f);void 0!==p?(c.affixStyle={position:"fixed",top:p,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}):void 0!==d&&(c.affixStyle={position:"fixed",bottom:d,width:s.width,height:s.height},c.placeholderStyle={width:s.width,height:s.height}),c.lastAffix=!!c.affixStyle,a&&o!==c.lastAffix&&a(c.lastAffix),e.setState(c)}}},e.prepareMeasure=function(){e.setState({status:N.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.render=function(){var t=e.context.getPrefixCls,n=e.state,r=n.affixStyle,i=n.placeholderStyle,f=e.props,l=f.prefixCls,c=f.children,s=d()(Object(a.a)({},t("affix",l),!!r)),p=Object(h.a)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return u.createElement(v.a,{onResize:function(){e.updatePosition()}},u.createElement("div",Object(o.a)({},p,{ref:e.savePlaceholderNode}),r&&u.createElement("div",{style:i,"aria-hidden":"true"}),u.createElement("div",{className:s,ref:e.saveFixedNode,style:r},u.createElement(v.a,{onResize:function(){e.updatePosition()}},c))))},e}return Object(i.a)(n,[{key:"getTargetFunc",value:function(){var e=this.context.getTargetContainer,t=this.props.target;return void 0!==t?t:e||S}},{key:"componentDidMount",value:function(){var e=this,t=this.getTargetFunc();t&&(this.timeout=setTimeout((function(){P(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.getTargetFunc(),o=null;n&&(o=n()||null),t!==o&&(T(this),o&&(P(o,this),this.updatePosition()),this.setState({prevTarget:o})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),T(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.getTargetFunc(),t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),o=this.getOffsetBottom(),a=e();if(a&&this.placeholderNode){var r=y(a),i=y(this.placeholderNode),f=x(i,r,n),l=E(i,r,o);if(void 0!==f&&t.top===f||void 0!==l&&t.bottom===l)return}}this.prepareMeasure()}}]),n}(u.Component);A.contextType=m.b,j([Object(b.b)()],A.prototype,"updatePosition",null),j([Object(b.b)()],A.prototype,"lazyUpdatePosition",null);var B=A,C=(n(152),n(71));t.default=function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h2",null," Basic Affix "),s.a.createElement(B,null,s.a.createElement(C.a,{type:"primary"},"Affix top")),s.a.createElement("br",null),s.a.createElement(B,{offsetBottom:0},s.a.createElement(C.a,{type:"primary"},"Affix bottom")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Containter to Scroll Affix "),s.a.createElement("div",{className:"scrollable-container",ref:function(t){e.container=t}},s.a.createElement("div",{className:"background"},s.a.createElement(B,{target:function(){return e.container}},s.a.createElement(C.a,{type:"primary"},"Fixed at the top of container")))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h2",null," Affix with Callback "),s.a.createElement(B,{offsetTop:120,onChange:function(e){}},s.a.createElement(C.a,null,"120px to affix top")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null))}}}]);
//# sourceMappingURL=124.770a6a7f.chunk.js.map