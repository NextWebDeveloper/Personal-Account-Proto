(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a(17),c=a(48),l=a(13),s=a(72),u=a(18),m=a(59),d=a(12),p=function(e){return function(t){t({type:"SAVE_NEWS",news:e})}},g=function(e){return function(t){t({type:"DELETE_NEWS",id:e})}},h=function(e){return function(t){t({type:"SET_TOKEN",token:e})}},b=function(){return function(e){e({type:"CLEAR_TOKEN"})}},f=Object(l.c)({newsState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_NEWS":return null!==t.news.id&&void 0!==t.news.id?Object(d.a)({},e,{news:e.news.map(function(e){return e.id===t.news.id?t.news:e})}):Object(d.a)({},e,{idCounter:++e.idCounter,news:[].concat(Object(m.a)(e.news),[Object(d.a)({},t.news,{lastEditTime:(new Date).toLocaleString(),id:e.idCounter})])});case"DELETE_NEWS":var a=e.news.findIndex(function(e){return e.id===t.id});return Object(d.a)({},e,{news:[].concat(Object(m.a)(e.news.slice(0,a)),Object(m.a)(e.news.slice(a+1)))});default:return e}},authState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TOKEN":return{authToken:t.token};case"CLEAR_TOKEN":return{authToken:null};default:return e}}}),w=u.a(),E=[s.a,Object(c.routerMiddleware)(w)],x=l.d.apply(void 0,[l.a.apply(void 0,E)].concat([])),j=Object(l.e)(Object(c.connectRouter)(w)(f),{newsState:{news:[],idCounter:0},authState:{authToken:null}},x),O=a(16),v=a(25),y=a(29),S=a(39),N=a(157),T=a(167),k=a(155),C=Object(k.a)(function(e){return{singleNewsWrapper:{width:"100%",maxWidth:"800px",padding:"1.5rem",border:"1px solid #eee",margin:"2rem auto 0",boxShadow:"0px 0px 15px 4px rgba(0,0,0,0.1)",borderRadius:"8px",marginBottom:"2rem",display:"flex"},newsImageWrapper:{width:"40%",flexShrink:"0",marginRight:"16px",height:"150px",backgroundPosition:"center",backgroundSize:"cover"},singleNewsTitle:{marginTop:"0"}}}),L=Object(o.connect)(function(e){return{news:e.newsState.news}},function(e){return Object(l.b)({deleteNews:g},e)})(function(e){var t=e.news,a=e.deleteNews,n=C(),i=0===t.length?r.a.createElement("h2",null,"You have not created any news yet :( Click the button in the upper right to add your first news!"):t.map(function(e){return r.a.createElement(T.a,{className:n.singleNewsWrapper,key:e.id},r.a.createElement(T.a,{style:{backgroundImage:"url(".concat(e.image,")")},className:n.newsImageWrapper}),r.a.createElement(T.a,{display:"flex",flexDirection:"column"},r.a.createElement("h2",{className:n.singleNewsTitle},"id:",e.id," - ",e.title),r.a.createElement(T.a,null,"Last edit time: ",e.lastEditTime),r.a.createElement(T.a,{mt:"auto"},r.a.createElement(T.a,{component:"span",mr:1},r.a.createElement(N.a,{component:S.a,to:{pathname:"/news/".concat(e.id),news:e},variant:"contained",size:"large",color:"primary"},"Edit news")),r.a.createElement(N.a,{onClick:function(){return a(e.id)},variant:"contained",size:"large",color:"secondary"},"Delete news"))))});return r.a.createElement(T.a,null,r.a.createElement(T.a,{display:"flex",justifyContent:"flex-end"},r.a.createElement(N.a,{component:S.a,to:"/news/add",variant:"contained",size:"large",color:"primary"},"Add news")),i)}),W=a(166),R=a(159),I=a(75),A=a.n(I),D=a(76),_=a.n(D),P=a(73),z=a.n(P),B=Object(k.a)(function(e){return{authPage:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100vh",padding:"8px 16px"},authWindow:{width:"100%",maxWidth:"500px",padding:"1rem 1.5rem",border:"1px solid #eee",boxShadow:"0px 0px 15px 4px rgba(0,0,0,0.1)",borderRadius:"8px"},displayNone:{display:"none"},authLoader:{height:"100px"},authLoaderWrapper:{padding:"85px 0",display:"flex",alignItems:"center",justifyContent:"center"}}}),F=Object(o.connect)(null,function(e){return Object(l.b)({setToken:h},e)})(function(e){var t=e.history,a=e.setToken,i=B(),o=Object(n.useState)({login:"",password:""}),c=Object(v.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)({login:!1,password:!1}),m=Object(v.a)(u,2),p=m[0],g=m[1],h=Object(n.useState)(!1),b=Object(v.a)(h,2),f=b[0],w=b[1],E=Object(n.useState)(!1),x=Object(v.a)(E,2),j=x[0],y=x[1],S=function(e){s(Object(d.a)({},l,Object(O.a)({},e.target.name,e.target.value))),g(Object(d.a)({},p,Object(O.a)({},e.target.name,!(e.target.value.length>0))))},k=r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=function(e){g(function(t){return Object(d.a)({},t,Object(O.a)({},e,!l[e]))})};for(var r in p)n(r);l.login&&l.password&&(w(!0),setTimeout(function(){if("AwesomeUser"===l.login&&"qwerty"===l.password){var e=Date.now().toString();localStorage.setItem("authToken",e),a(e),w(!1),t.push("/news")}else y(!0),w(!1)},1e3))}},r.a.createElement("h1",null,"Authentication required"),j?r.a.createElement(T.a,{mb:2,color:"error.main"},"The entered data is incorrect. Try again"):null,r.a.createElement(T.a,{mb:3},r.a.createElement(W.a,{value:l.login,error:p.login,name:"login",fullWidth:!0,label:"Login",InputProps:{startAdornment:r.a.createElement(R.a,{position:"start"},r.a.createElement(A.a,null))},variant:"outlined",helperText:"".concat(p.login?"Enter login":""),onChange:S})),r.a.createElement(T.a,{mb:3},r.a.createElement(W.a,{value:l.password,error:p.password,name:"password",type:"password",fullWidth:!0,label:"Password",InputProps:{startAdornment:r.a.createElement(R.a,{position:"start"},r.a.createElement(_.a,null))},variant:"outlined",helperText:"".concat(p.password?"Enter password":""),onChange:S})),r.a.createElement(T.a,{display:"flex",justifyContent:"center"},r.a.createElement(N.a,{variant:"contained",type:"submit",label:"Submit",size:"large",color:"primary"},"Log in"))),C=r.a.createElement(T.a,{className:i.authLoaderWrapper},r.a.createElement("img",{className:i.authLoader,src:z.a,alt:"loader"})),L=f?C:k;return r.a.createElement(T.a,{className:i.authPage},r.a.createElement(T.a,{className:i.authWindow},L))}),U=a(160),H=a(168),K=Object(k.a)(function(e){return{newsForm:{width:"100%",maxWidth:"600px",padding:"2rem 1.5rem",border:"1px solid #eee",margin:"2rem auto 0",boxShadow:"0px 0px 15px 4px rgba(0,0,0,0.1)",borderRadius:"8px"},alert:{position:"fixed",bottom:"2rem",right:"2rem"},newsImageWrapper:{width:"100%",height:"300px",backgroundPosition:"center",backgroundSize:"cover",marginBottom:"24px"},displayNone:{display:"none"}}}),q=Object(o.connect)(null,function(e){return Object(l.b)({saveNews:p},e)})(function(e){var t=e.location,a=e.saveNews,i=e.history,o=K(),c=Object(n.useState)(t.news?Object(d.a)({},t.news):{title:"",description:"",image:""}),l=Object(v.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)({title:!1,description:!1,image:!1}),p=Object(v.a)(m,2),g=p[0],h=p[1],b=Object(n.useState)(!1),f=Object(v.a)(b,2),w=f[0],E=f[1],x=function(e){u(Object(d.a)({},s,Object(O.a)({},e.target.name,e.target.value))),h(Object(d.a)({},g,Object(O.a)({},e.target.name,!(e.target.value.length>0))))};return r.a.createElement(T.a,null,r.a.createElement("form",{className:o.newsForm,onSubmit:function(e){e.preventDefault();var t=function(e){h(function(t){return Object(d.a)({},t,Object(O.a)({},e,!s[e]))})};for(var n in g)t(n);s.title&&s.description&&s.image&&(a(s),i.push("/news"))}},r.a.createElement(T.a,{style:{backgroundImage:"url(".concat(s.image,")")},className:"".concat(o.newsImageWrapper).concat(s.image?"":o.displayNone)}),r.a.createElement(T.a,{mb:3},r.a.createElement(W.a,{value:s.title||"",error:g.title,name:"title",fullWidth:!0,label:"News title",variant:"outlined",helperText:"".concat(g.title?"Enter news title":""),onChange:x})),r.a.createElement(T.a,{mb:3},r.a.createElement(W.a,{value:s.description||"",error:g.description,name:"description",label:"News description",fullWidth:!0,rowsMax:4,multiline:!0,variant:"outlined",helperText:"".concat(g.description?"Enter news description":""),onChange:x})),r.a.createElement(T.a,{mb:3},r.a.createElement("input",{color:"primary",accept:"image/*",type:"file",onChange:function(e){var t=e.target.files[0];if(!/image/.test(t.type))return E(!0),void setTimeout(function(){E(!1)},3e3);g.image&&h(Object(d.a)({},g,{image:!1}));var a,n=new FileReader;n.onloadend=function(){a=n.result,u(Object(d.a)({},s,{image:a}))},n.readAsDataURL(t)},id:"icon-button-file",style:{display:"none"}}),r.a.createElement("label",{htmlFor:"icon-button-file"},r.a.createElement(N.a,{variant:"outlined",type:"text",component:"span",size:"large",color:"".concat(g.image?"secondary":"primary")},r.a.createElement(U.a,null,"add_photo_alternate"),r.a.createElement(T.a,{ml:1},"Upload image")))),r.a.createElement(T.a,{display:"flex",justifyContent:"center"},r.a.createElement(N.a,{variant:"contained",type:"submit",label:"Submit",size:"large",color:"primary"},"Save news"))),r.a.createElement(T.a,{display:"".concat(w?"block":"none"),className:o.alert},r.a.createElement(H.a,{severity:"error"},"Wrong file format",r.a.createElement("br",null),"Upload image type file")))}),J=a(3),M=a(20),V=a(170),G=a(162),Y=a(163),Q=a(164),X=a(123),Z=a(165),$=a(161),ee=a(77),te=a.n(ee),ae=a(78),ne=a.n(ae),re=a(79),ie=a.n(re),oe=Object(k.a)(function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),menuLink:{display:"flex",alignItems:"center",justifyContent:"flex-start",padding:"8px 16px",textDecoration:"none",color:"#333",textTransform:"none",fontWeight:"500","&:hover":{backgroundColor:"transparent"}},menuLinkTitle:{fontSize:"16px",marginLeft:"8px"},userTitle:{display:"flex",alignItems:"center"},userName:{marginLeft:"8px"}}}),ce=Object(o.connect)(null,function(e){return Object(l.b)({clearToken:b},e)})(function(e){var t=e.open,a=e.handleDrawerOpen,i=e.handleDrawerClose,o=e.clearToken,c=oe(),l=Object(M.a)();return r.a.createElement(n.Fragment,null,r.a.createElement(G.a,null),r.a.createElement(Y.a,{position:"fixed",className:Object(J.a)(c.appBar,Object(O.a)({},c.appBarShift,t))},r.a.createElement(Q.a,null,r.a.createElement($.a,{color:"inherit","aria-label":"open drawer",onClick:function(){return a()},edge:"start",className:Object(J.a)(c.menuButton,t&&c.hide)},r.a.createElement(te.a,null)),r.a.createElement(X.a,{className:c.userTitle,variant:"h6",noWrap:!0},r.a.createElement(U.a,null,"person"),r.a.createElement("span",{className:c.userName},"AwesomeUser")))),r.a.createElement(V.a,{className:c.drawer,variant:"persistent",anchor:"left",open:t,classes:{paper:c.drawerPaper}},r.a.createElement("div",{className:c.drawerHeader},r.a.createElement($.a,{onClick:function(){return i()}},"ltr"===l.direction?r.a.createElement(ne.a,null):r.a.createElement(ie.a,null))),r.a.createElement(Z.a,null),r.a.createElement(S.a,{className:c.menuLink,to:"/news"},r.a.createElement(U.a,null,"list_alt"),r.a.createElement("span",{className:c.menuLinkTitle},"News")),r.a.createElement(Z.a,null),r.a.createElement(N.a,{onClick:function(){o()},className:c.menuLink},r.a.createElement(U.a,null,"exit_to_app"),r.a.createElement("span",{className:c.menuLinkTitle},"Logout"))))}),le=a(80);var se=function(e){var t=e.isAuthenticated,a=e.children,n=Object(le.a)(e,["isAuthenticated","children"]);return r.a.createElement(y.Route,Object.assign({},n,{render:function(e){var n=e.location;return t?a:r.a.createElement(y.Redirect,{to:{pathname:"/auth",state:{from:n}}})}}))},ue=Object(k.a)(function(e){return{root:{display:"flex"},drawerHeader:Object(d.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}),me=Object(o.connect)(function(e){return{isAuthenticated:null!==e.authState.authToken,authToken:e.authState.authToken}},function(e){return Object(l.b)({clearToken:b},e)})(function(e){var t=e.isAuthenticated,a=e.authToken,i=e.clearToken,o=ue(),c=r.a.useState(!1),l=Object(v.a)(c,2),s=l[0],u=l[1];return Object(n.useEffect)(function(){t&&document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&localStorage.getItem("authToken")!==a&&i()})},[t]),r.a.createElement(y.Switch,null,r.a.createElement(y.Route,{exact:!0,path:"/auth",component:F}),r.a.createElement(se,{isAuthenticated:t},r.a.createElement(T.a,{className:o.root},r.a.createElement(ce,{open:s,handleDrawerOpen:function(){u(!0)},handleDrawerClose:function(){u(!1)}}),r.a.createElement("main",{className:Object(J.a)(o.content,Object(O.a)({},o.contentShift,s))},r.a.createElement("div",{className:o.drawerHeader}),r.a.createElement(y.Switch,null,r.a.createElement(y.Route,{exact:!0,path:"/news",component:L}),r.a.createElement(y.Route,{exact:!0,path:"/news/add",component:q}),r.a.createElement(y.Route,{exact:!0,path:"/news/:id",component:q}),r.a.createElement(y.Route,{path:"*"},r.a.createElement(y.Redirect,{to:"/news"})))))))}),de=(a(118),a(119),document.querySelector("#root"));Object(i.render)(r.a.createElement(o.Provider,{store:j},r.a.createElement(c.ConnectedRouter,{history:w},r.a.createElement(me,null))),de)},73:function(e,t,a){e.exports=a.p+"static/media/loader.2aa8dc63.svg"},95:function(e,t,a){e.exports=a(120)}},[[95,1,2]]]);
//# sourceMappingURL=main.a6de706e.chunk.js.map