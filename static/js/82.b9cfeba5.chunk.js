(this.webpackJsonpisomorphic=this.webpackJsonpisomorphic||[]).push([[82],{1334:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t(0),r=t.n(a),l=t(77),o=t(103),i=t(802),c=t(26),s=c.a.toggleViewProfile,u=c.a.toggleMobileProfile;function m(){var e=Object(l.c)(),n=Object(l.d)((function(e){return e.Chat})),t=n.user,a=n.userId,c=n.selectedChatRoom,m=n.messages;r.a.useEffect((function(){!function(){var e=document.getElementById("messageChat");e.scrollTop=e.scrollHeight}()}));return r.a.createElement(i.l,{id:"messageChat"},m.map((function(n){var l=a===n.sender,m=l?t:c.otherUserInfo;return l?r.a.createElement(i.n,{className:"loggedUser",key:n.messageTime},r.a.createElement("div",{className:"messageContent isUser"},r.a.createElement("div",{className:"messageContentText"},r.a.createElement("p",null,n.text)),r.a.createElement("div",{className:"messageTime"},r.a.createElement("p",null,Object(o.e)(n.messageTime)))),r.a.createElement("div",{className:"messageGravatar"},r.a.createElement("img",{alt:"#",src:m.profileImageUrl,onClick:function(){e(u(!0)),e(s(m))}}))):r.a.createElement(i.n,{key:n.messageTime},r.a.createElement("div",{className:"messageGravatar"},r.a.createElement("img",{alt:"#",src:m.profileImageUrl,onClick:function(){e(u(!0)),e(s(m))}})),r.a.createElement("div",{className:"messageContent notUser"},r.a.createElement("div",{className:"messageContentText"},r.a.createElement("p",null,n.text)),r.a.createElement("div",{className:"messageTime"},r.a.createElement("p",null,Object(o.e)(n.messageTime)))))})))}},1335:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t(113),r=t(0),l=t.n(r),o=t(77),i=t(194),c=t(536),s=t(26),u=t(802),m=s.a.sendMessage;function d(e){var n=Object(o.c)(),t=l.a.useState(""),r=Object(a.a)(t,2),s=r[0],d=r[1];return l.a.createElement(u.g,null,l.a.createElement(u.p,{autoSize:e.autosize,value:s,onChange:function(e){d(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),s&&s.length>0?(n(m(s)),d("")):Object(c.a)("error","Please type something"))},placeholder:"Type your message"}),e.showButton&&l.a.createElement("div",{className:"sendMessageButton"},l.a.createElement(i.b,{type:"primary",onClick:function(){return n(m(s))}},"Send Message")))}},1349:function(e,n,t){"use strict";t.d(n,"a",(function(){return P}));var a=t(113),r=t(0),l=t.n(r),o=t(77),i=(t(565),t(196)),c=t(100),s=t.n(c),u=t(114),m=t(672),d=t(806),p=t(653),f=t(536),g=t(26),b=t(802),h=g.a.updateNewUsersProp,v=g.a.addNewUser;function E(){var e=Object(o.d)((function(e){return e.Chat})),n=e.user,t=e.users,a=e.addNewUsersProp,r=Object(o.c)(),c=function(){r(h({modalActive:!1}))},g=a.modalActive,E=a.name,x=a.dob,w=a.mobileNo,j=a.gender,O=a.language;return l.a.createElement("div",null,l.a.createElement(i.a,{placement:"topRight",title:"Add a new user (For demo only)"},l.a.createElement(b.a,{onClick:function(){r(h({modalActive:!0,name:"New User",dob:"22/04/1992",mobileNo:"9429692135",gender:"Male",language:"English",profileImageUrl:"https://thumb7.shutterstock.com/display_pic_with_logo/818215/552201991/stock-photo-beautiful-young-grinning-professional-black-woman-in-office-with-eyeglasses-folded-arms-and-552201991.jpg"}))}},l.a.createElement("i",{className:"ion-android-add"}))),l.a.createElement(p.a,{visible:g,onClose:c,title:"Add New User",okText:"Add User",onOk:function(){var e;a.name?(e=a,-1!==t.findIndex((function(n){return n.name.toLowerCase()===e.name.toLowerCase()}))?Object(f.a)("error","User name already exists"):(r(v(n,a)),Object(f.a)("success","New user created successfuly"))):Object(f.a)("error","please add new user name")},onCancel:c},l.a.createElement(b.i,null,l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Name"),l.a.createElement(u.d,{label:"Name",placeholder:"Enter Name",value:E||"",onChange:function(e){a.name=e.target.value,r(h(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Mobile"),l.a.createElement(u.d,{label:"Mobile",placeholder:"Mobile No",value:w||"",onChange:function(e){a.mobileNo=e.target.value,r(h(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Gender"),l.a.createElement(m.b,{id:"gender",name:"gender",value:j,onChange:function(e){a.gender=e.target.value,r(h(a))}},l.a.createElement(m.c,{value:"Male"},"Male"),l.a.createElement(m.c,{value:"Female"},"Female"),l.a.createElement(m.c,{value:"Other"},"Other"))),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Language"),l.a.createElement(u.d,{label:"Language",placeholder:"Language",value:O||"",onChange:function(e){a.language=e.target.value,r(h(a))}})),l.a.createElement(b.h,null,l.a.createElement(b.k,null,"Date"),l.a.createElement(d.b,{allowClear:!1,format:"DD/MM/YYYY",value:s()(x,"DD/MM/YYYY"),onChange:function(e,n){a.dob=n,r(h(a))}})))))}var x=t(696),w=t(194),j=t(907),O=t(103),y=g.a.setSelectedChatroom,C=g.a.toggleMobileList,N=g.a.toggleCompose;function k(e){return e.filter((function(e){return e.lastMessageTime>0}))}function P(){var e=Object(o.c)(),n=Object(o.d)((function(e){return e.Chat})),t=n.users,r=n.chatRooms,i=n.selectedChatRoom,c=Object(o.d)((function(e){return e.App})).view,s=l.a.useState(k(r)),u=Object(a.a)(s,2),m=u[0],d=u[1];l.a.useEffect((function(){d(k(r))}),[r]);var p="DesktopView"===c?i:{};return l.a.createElement(b.d,null,l.a.createElement(b.o,null,l.a.createElement(b.j,{onChange:function(e){var n=e.target.value,t=k(r);n.trim()&&(t=t.filter((function(e){return e.otherUserInfo.name.toLowerCase().includes(n.toLowerCase())}))),d(t)},placeholder:"Search Contact"}),l.a.createElement(E,null)),l.a.createElement(b.s,null,l.a.createElement(x.a,{style:{height:"100%"}},0===m.length?l.a.createElement(j.a,{text:"No Conversation",className:"messageHelperText"}):m.map((function(n,t){var a=n.otherUserInfo,r=n.lastMessage,o=n.lastMessageTime,i=a.name,c=a.profileImageUrl,s=p.id===n.id,u={background:s?"#f7f7f7":"rgba(0,0,0,0)"};return l.a.createElement(b.r,{key:t,style:u,onClick:function(t){t.stopPropagation(),s||e(y(n)),C&&e(C(!1))}},l.a.createElement("div",{className:"userListsGravatar"},l.a.createElement("img",{alt:"#",style:{width:45,height:45},src:c})),l.a.createElement("div",{className:"userListsContent"},l.a.createElement("h4",null,i),l.a.createElement("div",{className:"chatExcerpt"},l.a.createElement("p",null,r),l.a.createElement("span",{className:"userListsTime"},Object(O.e)(o)))))})))),t.length>0&&l.a.createElement("div",{className:"ComposeMessageButton"},l.a.createElement(w.b,{onClick:function(){return e(N())},type:"primary"},"Compose")))}},1350:function(e,n,t){"use strict";var a,r,l=t(0),o=t.n(l),i=t(42),c=t(38),s=t(9),u=c.d.div(a||(a=Object(i.a)(["\n  background: #ffffff;\n  border: 1px solid ",";\n  overflow: auto;\n  position: absolute;\n  right: 0;\n  width: 95%;\n  height: 100%;\n\n  .viewProfileTopBar {\n    background: ",";\n    border-bottom: 1px solid ",";\n    padding: 25px 20px 25px 30px;\n    display: flex;\n    justify-content: space-between;\n    line-height: 1;\n\n    span {\n      margin: 0;\n      margin-left: 15px;\n      cursor: pointer;\n      i {\n        font-size: 14px;\n        font-weight: normal;\n      }\n    }\n  }\n  .viewProfileContent {\n    padding: 30px 30px 0;\n  }\n  .viewProfileImage {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  h1 {\n    font-size: 21px;\n    text-align: center;\n    font-weight: 300;\n    margin-bottom: 30px;\n    margin-top: 10px;\n    color: #212121;\n  }\n  img {\n    height: 120px;\n    border-radius: 6px;\n  }\n  .viewProfileQuickInfo {\n    border-top: 1px solid ",";\n    padding-top: 40px;\n  }\n  @media only screen and (min-width: 768px) {\n    width: 350px;\n  }\n"])),Object(s.palette)("border",0),Object(s.palette)("grayscale",4),Object(s.palette)("border",0),Object(s.palette)("border",2)),m=c.d.div(r||(r=Object(i.a)(["\n  display: flex;\n\n  .viewProfileTitle {\n    width: 35%;\n    font-size: 13px;\n    font-weight: 500;\n    font-weight: light;\n    color: ",";\n    margin-bottom: 30px;\n  }\n  .viewProfileValue {\n    width: 65%;\n    text-align: right;\n    font-size: 13px;\n    color: ",";\n    margin-bottom: 30px;\n  }\n"])),Object(s.palette)("text",0),Object(s.palette)("text",1)),d=function(e){var n=e.title,t=e.value;return o.a.createElement(m,null,o.a.createElement("span",{className:"viewProfileTitle"},n),o.a.createElement("span",{className:"viewProfileValue"},t))};n.a=function(e){var n=e.viewProfile,t=e.toggleViewProfile,a=e.toggleMobileProfile;if(!n)return null;var r=n.name,l=n.dob,i=n.mobileNo,c=n.gender,s=n.language,m=n.profileImageUrl;return o.a.createElement(u,null,o.a.createElement("div",{className:"viewProfileTopBar"},"Contact Info",o.a.createElement("span",{onClick:function(){a&&a(!1),t(!1)}},o.a.createElement("i",{className:"ion-android-close"}))),o.a.createElement("div",{className:"viewProfileContent"},o.a.createElement("div",{className:"viewProfileImage"},o.a.createElement("img",{alt:"#",src:m}),o.a.createElement("h1",null,r)),o.a.createElement("div",{className:"viewProfileQuickInfo"},o.a.createElement(d,{title:"Name",value:r}),o.a.createElement(d,{title:"Date of Birth",value:l}),o.a.createElement(d,{title:"Mobile No",value:i}),o.a.createElement(d,{title:"Gender",value:c}),o.a.createElement(d,{title:"Language",value:s}))))}},1351:function(e,n,t){"use strict";var a,r=t(1),l=t(113),o=t(0),i=t.n(o),c=t(706),s=t(42),u=t(38),m=t(9),d=u.d.div(a||(a=Object(s.a)(["\n  display: flex;\n  align-items: center;\n\n  .userImg {\n    width: 35px;\n    height: 35px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    border-radius: 50%;\n    margin-right: 15px;\n\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .suggetionText {\n    font-size: 13px;\n    color: ",";\n    font-weight: 500;\n    margin: 0;\n  }\n"])),Object(m.palette)("text",0));n.a=function(e){var n=i.a.useState({value:"",result:[]}),t=Object(l.a)(n,2),a=t[0],o=t[1],s=a.result,u=a.value;return i.a.createElement(c.b,{value:u,onSelect:function(e){e&&a.result.forEach((function(n){n.id===e&&o(Object(r.a)(Object(r.a)({},a),{},{value:n.name}))}))},onSearch:function(n){var t=[];n&&e.users.forEach((function(e){e.name.toLowerCase().indexOf(n.toLowerCase())>-1&&t.push(e)})),o(Object(r.a)(Object(r.a)({},a),{},{result:t,value:n}))},placeholder:"find your buddy",style:{marginBottom:10}},s.map((function(n){return i.a.createElement(c.a,{key:n.id,style:{display:"flex"}},i.a.createElement(d,{onClick:function(){o(Object(r.a)(Object(r.a)({},a),{},{value:n.name,result:[]})),e.setComposedId(n.id)}},i.a.createElement("div",{className:"userImg"},i.a.createElement("img",{alt:"#",src:n.profileImageUrl})),i.a.createElement("span",{className:"suggetionText"},n.name)))})))}},2312:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return O}));var a=t(0),r=t.n(a),l=t(77),o=t(653),i=t(1351),c=t(1349),s=t(1334),u=t(1335),m=t(1350),d=t(226),p=t(802),f=t(26),g=f.a.toggleCompose,b=f.a.setComposedId,h=f.a.toggleViewProfile,v=f.a.chatInit,E=f.a.mobileActiveList,x=f.a.mobileActiveProfile,w=f.a.toggleMobileList,j=f.a.toggleMobileProfile;function O(e){var n=e.className,t=Object(l.c)(),a=Object(l.d)((function(e){return e.Chat})),f=a.loading,O=a.users,y=a.userId,C=a.openCompose,N=a.selectedChatRoom,k=a.viewProfile;if(r.a.useEffect((function(){O||t(v(y))})),f)return r.a.createElement(d.a,null);var P=r.a.createElement(d.a,null);return P=E?r.a.createElement("div",null,r.a.createElement(o.a,{visible:C,onCancel:function(){return t(g())},title:"Compose Message",footer:null},r.a.createElement(p.m,null,r.a.createElement("h5",null,"Starting your chat with..."),r.a.createElement(i.a,{users:O,setComposedId:function(){return t(b())},className:n}),r.a.createElement(u.a,{autosize:{minRows:5,maxRows:9},showButton:!0,rows:8}))),r.a.createElement(c.a,{toggleMobileList:function(){return t(w())}})):x?r.a.createElement(m.a,{viewProfile:k,toggleViewProfile:function(){return t(h())},toggleMobileProfile:function(){return t(j())}}):r.a.createElement(p.c,{className:"ChatBox"},N&&r.a.createElement(p.q,null,r.a.createElement(p.b,{onClick:function(){return t(w(!0))}},r.a.createElement("i",{className:"ion-chevron-left"})),r.a.createElement("span",{onClick:function(){t(h(N.otherUserInfo)),t(j(!0))}},N.otherUserInfo.name)),r.a.createElement(s.a,{toggleMobileProfile:function(){return t(j())}}),r.a.createElement(u.a,{InputProps:{disableUnderline:!0}})),r.a.createElement(p.f,{className:"ChatWindow"},P)}},536:function(e,n,t){"use strict";t(563);var a=t(204);n.a=function(e,n,t){a.a[e]({message:n,description:t})}},672:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return m}));t(575);var a,r=t(554),l=t(42),o=t(38),i=t(9),c=function(e){return Object(o.d)(e)(a||(a=Object(l.a)(["\n  &.ant-radio-wrapper,\n  .ant-radio-wrapper,\n  &.ant-radio-button-wrapper {\n    font-size: 13px;\n    color: ",";\n\n    .ant-radio-inner {\n      &:after {\n        width: 6px;\n        height: 6px;\n        top: 4px;\n        left: 4px;\n        background-color: ",";\n        border-radius: 50%;\n      }\n    }\n\n    .ant-radio-checked .ant-radio-inner,\n    .ant-radio-indeterminate .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio:hover .ant-radio-inner,\n    .ant-radio-input:focus + .ant-radio-inner {\n      border-color: ",";\n    }\n\n    .ant-radio-disabled .ant-radio-inner:after {\n      background-color: #ccc;\n    }\n\n    &:hover {\n      .ant-radio-inner {\n        border-color: ",";\n      }\n    }\n\n    .ant-radio-checked {\n      .ant-radio-inner {\n        &:after {\n          transform: scale(1);\n        }\n      }\n    }\n  }\n\n  .ant-radio-button-wrapper {\n    &.ant-radio-button-wrapper-checked {\n      color: #ffffff;\n      background-color: ",";\n      border-color: ",";\n\n      &:not(.ant-radio-button-wrapper-disabled) {\n        /* background-color: ","; */\n        border-color: ",";\n\n        &:hover {\n          /* background-color: ","; */\n          border-color: ",";\n        }\n      }\n\n    }\n    :focus{\n      outline:none;\n    }\n  }\n"])),Object(i.palette)("text",1),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0),Object(i.palette)("primary",0))},s=c(r.a),u=c(r.a.Group),m=c(r.a.Button);n.c=s},706:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));t(816);var a,r,l=t(817),o=t(42),i=t(38),c=t(9),s=t(68),u=(r=l.a,Object(i.d)(r)(a||(a=Object(o.a)(["\n  width: 100%;\n\n  &.ant-select {\n    .ant-select-selection {\n      &.ant-select-selection--single {\n        height: 35px;\n\n        .ant-select-selection__rendered {\n          line-height: 35px;\n          margin: 0;\n\n          .ant-select-selection__placeholder,\n          .ant-select-search__field__placeholder {\n            top: 8px;\n            margin: 0 10px;\n            left: ",";\n            right: ",";\n            color: ",";\n          }\n\n          .ant-input {\n            padding: 4px 10px;\n            width: 100%;\n            height: 35px;\n            font-size: 13px;\n            text-align: ",";\n            line-height: 1.5;\n            color: ",";\n            border: 1px solid ",";\n            transition: all 0.3s;\n\n            &:focus {\n              border-color: ",";\n              outline: 0;\n              box-shadow: 0 0 0 2px ",";\n            }\n\n            &:hover {\n              border-color: ",";\n            }\n          }\n        }\n      }\n    }\n\n    .ant-select-search__field {\n      padding: 10px;\n    }\n  }\n"])),(function(e){return"rtl"===e["data-rtl"]?"inherit":"0"}),(function(e){return"rtl"===e["data-rtl"]?"9px":"inherit"}),Object(c.palette)("grayscale",1),(function(e){return"rtl"===e["data-rtl"]?"right":"left"}),Object(c.palette)("text",1),Object(c.palette)("border",0),Object(c.palette)("primary",0),Object(c.palette)("primary",3),Object(c.palette)("primary",0))),m=Object(s.a)(u),d=l.a.Option;n.b=m},806:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));t(814);var a,r=t(819),l=t(42),o=t(38),i=t(9),c=t(46),s=function(e){return Object(o.d)(e)(a||(a=Object(l.a)(["\n  &.ant-picker {\n    height: 35px;\n  }\n  .ant-input {\n    padding: 4px 10px;\n    width: 100%;\n    height: 35px;\n    cursor: text;\n    font-size: 13px;\n    line-height: 1.5;\n    color: ",";\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid ",";\n    ",";\n    ",";\n\n    &:focus {\n      border-color: ",";\n    }\n\n    &::-webkit-input-placeholder {\n      color: ",";\n    }\n\n    &:-moz-placeholder {\n      color: ",";\n    }\n\n    &::-moz-placeholder {\n      color: ",";\n    }\n    &:-ms-input-placeholder {\n      color: ",";\n    }\n  }\n"])),Object(i.palette)("text",1),Object(i.palette)("border",0),Object(c.a)("4px"),Object(c.c)(),Object(i.palette)("primary",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0),Object(i.palette)("grayscale",0))},u=s(r.a),m=s(r.a.RangePicker);n.b=u},907:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.text,t=void 0===n?"":n;return r.a.createElement("div",{className:"isoHelperText",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"20px"}},r.a.createElement("h3",null,t))}}}]);
//# sourceMappingURL=82.b9cfeba5.chunk.js.map