(this["webpackJsonpvideo-chat"]=this["webpackJsonpvideo-chat"]||[]).push([[0],{110:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=110},111:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),i=n.n(a),o=n(15),l=n(154),s=n(155),u=n(151),d=n(156),j=n(114),b=n(159),f=n(162),O=n(166),h=n(157),x=n(153),v=n(67),g=n.n(v),p=n(152),m=n(164),w=n(72),C=n.n(w),y=n(73),k=n.n(y),E=n(2),S=function(e){var t=e.text,n=Object(c.useState)(!1),r=Object(o.a)(n,2),a=r[0],i=r[1],l=function(){i(!1)};return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(b.a,{type:"text",value:t,fullWidth:!0,disabled:!0,InputProps:{endAdornment:Object(E.jsx)(p.a,{position:"end",children:Object(E.jsx)(f.a,{"aria-label":"copy to clipboard",onClick:function(){g()(t),i(!0)},edge:"end",children:Object(E.jsx)(C.a,{})})})}}),Object(E.jsx)(m.a,{open:a,autoHideDuration:3e3,onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"center"},message:"\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e",action:Object(E.jsx)(f.a,{size:"small","aria-label":"close",color:"inherit",onClick:l,children:Object(E.jsx)(k.a,{fontSize:"small"})})})]})},I=n(74),N=n.n(I),T=Object(x.a)((function(e){return{container:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},paper:{padding:e.spacing(5),marginTop:-e.spacing(20)},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}}));function R(e){var t=e.peer,n=T(),r=Object(c.useState)(!1),a=Object(o.a)(r,2),i=a[0],x=a[1],v=Object(c.useState)(""),g=Object(o.a)(v,2),p=g[0],m=g[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(l.a,{}),Object(E.jsxs)(s.a,{maxWidth:"sm",className:n.container,children:[Object(E.jsx)(u.a,{className:n.paper,variant:"outlined",children:Object(E.jsxs)(d.a,{container:!0,spacing:2,direction:"column",children:[Object(E.jsxs)(d.a,{item:!0,children:[Object(E.jsx)(j.a,{variant:"h5",gutterBottom:!0,children:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0437\u0432\u043e\u043d\u043e\u043a"}),Object(E.jsx)(b.a,{value:p,onChange:function(e){var t=e.target.value.replaceAll(" ","");m(t)},label:"ID \u0441\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a\u0430"}),Object(E.jsx)(f.a,{color:"primary",onClick:function(){x(!0),t.callUser(p).catch((function(e){return alert(e)})).finally((function(){return x(!1)}))},children:Object(E.jsx)(N.a,{})})]}),Object(E.jsxs)(d.a,{item:!0,children:[Object(E.jsxs)(j.a,{variant:"overline",display:"block",gutterBottom:!0,children:["\u0438\u043b\u0438 \u043f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c ",Object(E.jsx)("b",{children:"ID"})]}),Object(E.jsx)(S,{text:t.id})]})]})}),Object(E.jsx)(O.a,{className:n.backdrop,open:i,children:Object(E.jsx)(h.a,{color:"inherit"})})]})]})}var D=n(165),V=n(160),P=n(158);function M(e){var t=e.iconOn,n=e.iconOff,r=e.initialValue,a=e.toggle,i=Object(c.useState)(r),l=Object(o.a)(i,2),s=l[0],u=l[1];return Object(E.jsx)(f.a,{color:s?"primary":"secondary",onClick:function(){u(!s),a()},children:s?t:n})}var A=n(76),F=n.n(A),L=n(77),U=n.n(L),z=n(78),B=n.n(z),_=n(79),G=n.n(_),H=n(81),W=n.n(H),J=n(80),X=n.n(J),Y=function(e){return e.devices},q=function(e){var t=Y(e);return!!t&&t.audio},K=function(e){var t=Y(e);return!!t&&t.video},Q="TOGGLE_MICRO",Z="TOGGLE_VIDEO",$="SET_STREAM",ee=function(){return{type:Q}},te=function(){return{type:Z}},ne=n(42),ce=Object(x.a)((function(e){return{panel:{position:"absolute",bottom:0,padding:e.spacing(1),backgroundColor:"white",width:"100vw",borderTop:"1px solid #eaeaea"}}}));var re=Object(ne.b)((function(e){return{audioEnabled:q(e),videoEnabled:K(e),toggleAudio:ee,toggleVideo:te}}),(function(e){return{toggleAudio:function(){return e(ee())},toggleVideo:function(){return e(te())}}}))((function(e){var t=e.toggleChatOpened,n=e.audioEnabled,c=e.videoEnabled,r=e.toggleAudio,a=e.toggleVideo,i=e.endCall,o=ce();return Object(E.jsx)(V.a,{className:o.panel,children:Object(E.jsx)(d.a,{container:!0,justify:"center",children:Object(E.jsxs)(d.a,{item:!0,container:!0,alignItems:"center",justify:"center",children:[Object(E.jsx)(M,{iconOn:Object(E.jsx)(F.a,{}),iconOff:Object(E.jsx)(U.a,{}),initialValue:n,toggle:r}),Object(E.jsx)(M,{iconOn:Object(E.jsx)(B.a,{}),iconOff:Object(E.jsx)(G.a,{}),initialValue:c,toggle:a}),Object(E.jsx)(P.a,{orientation:"vertical",flexItem:!0}),Object(E.jsx)(f.a,{color:"secondary",onClick:i,children:Object(E.jsx)(X.a,{})}),Object(E.jsx)(f.a,{color:"default",onClick:t,children:Object(E.jsx)(W.a,{})})]})})})})),ae=n(13),ie=Object(x.a)((function(e){return{video:{height:"250px",position:"absolute",top:"0",objectFit:"cover",backgroundColor:"#263238",borderRadius:"10px"}}})),oe=r.a.forwardRef((function(e,t){var n=ie();return Object(E.jsx)("video",Object(ae.a)(Object(ae.a)({},e),{},{ref:t,autoPlay:!0,className:n.video}))})),le=Object(x.a)((function(e){return{video:{width:"100%",height:"100%",objectFit:"cover",backgroundColor:"#263238",margin:"auto"}}})),se=r.a.forwardRef((function(e,t){var n=le();return Object(E.jsx)("video",Object(ae.a)(Object(ae.a)({},e),{},{ref:t,autoPlay:!0,className:n.video}))})),ue=n(86),de=n(82),je=n.n(de),be=n(83),fe=n.n(be),Oe=n(167),he=n(21);function xe(e){var t=e.children,n=e.value,c=e.index,r=Object(ue.a)(e,["children","value","index"]);return Object(E.jsx)("div",Object(ae.a)(Object(ae.a)({role:"tabpanel",hidden:n!==c,id:"simple-tabpanel-".concat(c),"aria-labelledby":"simple-tab-".concat(c)},r),{},{children:n===c&&t}))}var ve=Object(x.a)((function(e){return{drawer:{width:340,flexShrink:0},drawerPaper:{width:340,overflow:"hidden"},drawerHeader:Object(ae.a)(Object(ae.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),chatTabPanel:{display:"flex",flex:"1",overflow:"hidden"}}}));function ge(e){var t=e.open,n=e.onClose,c=e.children,r=ve(),a=Object(he.a)();return Object(E.jsxs)(Oe.a,{className:r.drawer,anchor:"right",open:t,onClose:n,classes:{paper:r.drawerPaper},children:[Object(E.jsxs)(V.a,{children:[Object(E.jsx)("div",{className:r.drawerHeader,children:Object(E.jsx)(f.a,{onClick:n,children:"rtl"===a.direction?Object(E.jsx)(je.a,{}):Object(E.jsx)(fe.a,{})})}),Object(E.jsx)(P.a,{})]}),Object(E.jsx)(xe,{value:0,index:0,className:r.chatTabPanel,children:c})]})}var pe=n(84),me=n.n(pe),we=Object(x.a)((function(e){return{box:{display:"flex",backgroundColor:"white",borderTop:"1px solid #eaeaea",width:"100%",paddingLeft:e.spacing(2),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingRight:e.spacing(1)}}}));var Ce=function(e){var t=e.value,n=e.onChange,c=e.label,r=e.onSend,a=we();return Object(E.jsxs)(V.a,{className:a.box,children:[Object(E.jsx)(b.a,{label:c,fullWidth:!0,multiline:!0,rowsMax:4,value:t,onChange:n,InputLabelProps:{shrink:!0}}),Object(E.jsx)(f.a,{color:"primary",onClick:function(){return r(t)},children:Object(E.jsx)(me.a,{})})]})},ye=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object(c.useState)(t),r=Object(o.a)(n,2),a=r[0],i=r[1],l=Object(c.useState)(!1),s=Object(o.a)(l,2),u=s[0],d=s[1],j=function(e){i(e.target.value),d(!1)},b=function(){var e=a.trim();return""===e||e===t},f=function(){d(!0),i(a.trim()),setTimeout((function(){return d(!1)}),2e3)},O=function(){i("")};return{bind:{label:e,value:a,error:u,onChange:j},empty:b,value:a.trim(),alert:f,clear:O}},ke=Object(x.a)((function(e){return{chat:{display:"flex",flexDirection:"column",flex:"1"},messagesContainer:{flex:"1",display:"flex",flexDirection:"column",justifyContent:"safe flex-start",overflowX:"hidden",overflowY:"auto"}}}));function Ee(e){var t=e.children,n=e.onSend,c=ke(),r=ye("\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435");return Object(E.jsxs)(V.a,{className:c.chat,children:[Object(E.jsx)(V.a,{className:c.messagesContainer,m:2,children:Object(E.jsx)(d.a,{container:!0,spacing:2,children:t})}),Object(E.jsx)(Ce,Object(ae.a)(Object(ae.a)({},r.bind),{},{onSend:function(e){n(e),r.clear()}}))]})}var Se=function(e){var t=e.name,n=e.text,c=e.time;return Object(E.jsxs)(d.a,{item:!0,container:!0,direction:"column",children:[Object(E.jsxs)(d.a,{item:!0,container:!0,direction:"row",justify:"space-between",children:[Object(E.jsx)(j.a,{variant:"subtitle2",children:t}),Object(E.jsx)(j.a,{variant:"caption",children:c})]}),Object(E.jsx)(d.a,{item:!0,children:n})]})},Ie=Object(x.a)((function(e){return Object(D.a)({main:{display:"flex",width:"100%",height:"100%"},root:{display:"flex",height:"100vh",justifyContent:"space-between"}})}));var Ne=Object(ne.b)((function(e){return{audioEnabled:q(e),videoEnabled:K(e)}}))((function(e){var t=e.peer,n=e.localVideoRef,r=e.remoteVideoRef,a=e.audioEnabled,i=e.videoEnabled,s=Ie(),u=Object(c.useState)(!1),d=Object(o.a)(u,2),j=d[0],b=d[1];return Object(c.useEffect)((function(){t.setAudio(a)}),[t,a]),Object(c.useEffect)((function(){t.setVideo(i)}),[t,i]),Object(E.jsxs)("div",{className:s.root,children:[Object(E.jsx)(l.a,{}),Object(E.jsxs)("main",{className:s.main,children:[Object(E.jsx)(oe,{ref:n}),Object(E.jsx)(se,{ref:r})]}),Object(E.jsx)(ge,{open:j,onClose:function(){return b(!1)},children:Object(E.jsx)(Ee,{onSend:function(e){return t.sendMessage(e)},children:t.messages.map((function(e){return Object(E.jsx)(Se,{name:t.id===e.fromID?"\u0412\u044b":"\u0421\u043e\u0431\u0435\u0441\u0435\u0434\u043d\u0438\u043a",text:e.text,time:e.time},e.id)}))})}),Object(E.jsx)(re,{toggleChatOpened:function(){return b(!j)},endCall:t.endCall})]})})),Te=n(57),Re=n(85),De=n.n(Re),Ve=n(163);var Pe=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=function(e,t){var n=Object(c.useRef)(),r=Object(c.useRef)(),a=Object(c.useRef)(),i=Object(c.useState)("..."),l=Object(o.a)(i,2),s=l[0],u=l[1],d=Object(c.useState)(!1),j=Object(o.a)(d,2),b=j[0],f=j[1],O=Object(c.useState)([]),h=Object(o.a)(O,2),x=h[0],v=h[1];return Object(c.useEffect)((function(){var c=Object(Ve.a)();return u(c),n.current=new De.a(c),n.current.on("connection",(function(e){r.current=e,r.current.on("data",(function(e){var t=e;v((function(e){return[].concat(Object(Te.a)(e),[t])}))}))})),n.current.on("call",(function(n){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(c){a.current=c,n.answer(c),n.on("stream",(function(n){f(!0),t.current&&(t.current.srcObject=n),e.current&&(e.current.srcObject=c)})),n.on("close",(function(){f(!1)}))})).catch((function(){f(!1)}))})),function(){var e;return null===(e=n.current)||void 0===e?void 0:e.disconnect()}}),[e,t]),{id:s,callUser:function(c){return new Promise((function(i,o){n.current?(r.current=n.current.connect(c),r.current?(r.current.on("data",(function(e){var t=e;v((function(e){return[].concat(Object(Te.a)(e),[t])}))})),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(r){if(a.current=r,n.current){var l=n.current.call(c,r);l.on("stream",(function(n){f(!0),t.current&&(t.current.srcObject=n),e.current&&(e.current.srcObject=r),i(!0)})),l.on("close",(function(){f(!1),o(new Error("\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0440\u044b\u0442\u043e"))}))}else alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0438\u0440")})).catch((function(){f(!1),o(new Error("\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c"))}))):o(new Error("\u041d\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044f \u043d\u0430\u0447\u0430\u0442\u044c \u0437\u0432\u043e\u043d\u043e\u043a"))):alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0438\u0440")}))},speaking:b,messages:x,sendMessage:function(e){var t,n={id:Object(Ve.a)(),fromID:s,text:e,time:function(){var e=new Date,t=e.getHours().toString(),n=e.getMinutes().toString();return t.length<2&&(t="0"+t),n.length<2&&(n="0"+n),"".concat(t,":").concat(n)}()};v((function(e){return[].concat(Object(Te.a)(e),[n])})),null===(t=r.current)||void 0===t||t.send(n)},endCall:function(){window.location.href="/"},setAudio:function(e){var t;null===(t=a.current)||void 0===t||t.getAudioTracks().forEach((function(t){return t.enabled=e}))},setVideo:function(e){var t;null===(t=a.current)||void 0===t||t.getVideoTracks().forEach((function(t){return t.enabled=e}))}}}(e,t);return n.speaking?Object(E.jsx)(Ne,{peer:n,localVideoRef:e,remoteVideoRef:t}):Object(E.jsx)(R,{peer:n})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},Ae=n(41),Fe={audio:!0,video:!0};var Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(ae.a)(Object(ae.a)({},e),{},{audio:!e.audio});case Z:return Object(ae.a)(Object(ae.a)({},e),{},{video:!e.video});default:return e}},Ue={localStream:null};var ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(ae.a)(Object(ae.a)({},e),{},{localStream:t.payload});default:return e}},Be=Object(Ae.b)({devices:Le,stream:ze}),_e=Object(Ae.c)(Be);window.store=_e;var Ge=_e;i.a.render(Object(E.jsx)(ne.a,{store:Ge,children:Object(E.jsx)(r.a.StrictMode,{children:Object(E.jsx)(Pe,{})})}),document.getElementById("root")),Me()}},[[111,1,2]]]);
//# sourceMappingURL=main.25cbe9c6.chunk.js.map