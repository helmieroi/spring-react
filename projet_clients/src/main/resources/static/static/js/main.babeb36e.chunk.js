(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{132:function(e,t,n){},190:function(e,t,n){},192:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},407:function(e,t,n){"use strict";n.r(t);var i=n(2),s=n.n(i),c=n(52),a=n.n(c),r=(n(190),n(36)),l=n(37),j=n(39),o=n(38),d=(n(132),n(184)),h=n(97),u=n(64),b=n(409),m=n(4),O=[{title:"Accueil",path:"/",icon:Object(m.jsx)(u.a,{}),cName:"nav-text"},{title:"Liste des clients",path:"/clients",icon:Object(m.jsx)(h.b,{}),cName:"nav-text"}],x=(n(192),n(0));var p=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],s=t[1],c=function(){return s(!n)};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(x.b.Provider,{value:{color:"#fff"},children:[Object(m.jsx)("div",{className:"navbar",children:Object(m.jsx)(b.a,{to:"#",className:"menu-bars",children:Object(m.jsx)(h.a,{onClick:c})})}),Object(m.jsx)("nav",{className:n?"nav-menu active":"nav-menu",children:Object(m.jsxs)("ul",{className:"nav-menu-items",onClick:c,children:[Object(m.jsx)("li",{className:"navbar-toggle",children:Object(m.jsx)(b.a,{to:"#",className:"menu-bars",children:Object(m.jsx)(u.b,{})})}),O.map((function(e,t){return Object(m.jsx)("li",{className:e.cName,children:Object(m.jsxs)(b.a,{id:"menuItem",to:e.path,children:[e.icon,Object(m.jsx)("span",{children:e.title})]})},t)}))]})})]})})},v=n(16),f=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsx)(v.b,{fluid:!0,children:Object(m.jsx)("center",{children:Object(m.jsx)("h1",{children:"Bienvenue"})})})]})}}]),n}(i.Component),g=n(411),y=n(413),w=n(410),C=n(53),S=n.n(C),N=n(79),k=n(98),_=(n(195),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={filter:"",clients:[],offset:0,perPage:10,currentPage:0},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(N.a)(S.a.mark((function e(){var t,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/clients");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({clients:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"searchTxt",value:function(e){this.setState({filter:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.filter,n=e.clients,i=n.filter((function(e){return Object.keys(e).some((function(n){return"string"===typeof e[n]&&e[n].toLowerCase().includes(t.toLowerCase())}))}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(v.b,{fluid:!0,className:"test",children:[Object(m.jsxs)("p",{className:"headerlist",children:[Object(m.jsx)("h4",{children:"Gestion des Clients"}),Object(m.jsxs)("h6",{children:[n.length," \xe9lement affiche"]})]}),Object(m.jsx)("div",{class:"search__container",children:Object(m.jsx)("input",{class:"search__input",type:"text",onChange:this.searchTxt.bind(this),placeholder:"Search"})}),Object(m.jsx)("hr",{}),Object(m.jsx)("center",{children:Object(m.jsx)("div",{class:"container-list",children:Object(m.jsx)("div",{class:"wrap-list",children:Object(m.jsxs)(v.g,{id:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{id:"en-tete",children:[Object(m.jsx)("th",{width:"10%",children:"Id"}),Object(m.jsx)("th",{width:"25%",children:"nom"}),Object(m.jsx)("th",{width:"25%",children:"Pr\xe9nom"}),Object(m.jsx)("th",{width:"40%",children:"E-mail"})]})}),Object(m.jsx)("tbody",{children:i.map((function(e){return Object(m.jsx)("tr",{id:"list-tr",children:Object(m.jsxs)(b.a,{id:"list-tr-a",to:"/clients/"+e.id,children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.nom}),Object(m.jsx)("td",{children:e.prenom}),Object(m.jsx)("td",{children:e.email})]})},e.id)}))})]})})})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{id:"bgButton",className:"float-right",children:[Object(m.jsxs)(v.a,{id:"returnButton",tag:b.a,to:"/",children:[Object(m.jsx)(k.a,{id:"my-icons"})," ",Object(m.jsx)("span",{children:"Retour"})]}),Object(m.jsxs)(v.a,{id:"addButton",tag:b.a,to:"/clients/new",children:[Object(m.jsx)(u.c,{id:"my-icons"})," ",Object(m.jsx)("span",{children:"Ajouter"})]})]})]})]})}}]),n}(s.a.Component)),B=n(185),E=n(78),T=n(412),A=function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{id:"alert_message",class:"alert alert-success",role:"alert",children:"success !"})}}]),n}(i.Component),P=n(181),I=(n(196),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).emptyItem={nom:"",prenom:"",email:""},i.vButton=!0,i.testnom=!1,i.testpnom=!1,i.testemail=!1,i.state={item:i.emptyItem,alert_message:""},i.handleChange=i.handleChange.bind(Object(E.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(E.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=11;break}return e.next=3,fetch("/clients/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.vButton=!1,this.testnom=!0,this.testpnom=!0,this.testemail=!0,this.setState({item:t});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.value;if("nom"===t.name){""===t.value?(this.testnom=!1,t.id=""):!1===!/^[a-zA-Z\xc0-\xfa\-\s]*/.test(t.value)&&t.value.length>2?(t.id="emailValid",this.testnom=!0):(this.testnom=!1,t.id="emailINvalid")}if("prenom"===t.name){""===t.value?(this.testpnom=!1,t.id=""):!1===!/^[a-zA-Z\xc0-\xfa\-\s]*/.test(t.value)&&t.value.length>2?(this.testpnom=!0,t.id="emailValid"):(this.testpnom=!1,t.id="emailINvalid")}if("email"===t.name){""===t.value?(this.testemail=!1,t.id=""):!1===!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t.value)?(this.testemail=!0,t.id="emailValid"):(this.testemail=!1,t.id="emailINvalid")}this.testemail&&this.testpnom&&this.testnom?this.vButton=!1:this.vButton=!0;var i=t.name,s=Object(B.a)({},this.state.item);s[i]=n,this.setState({item:s})}},{key:"handleSubmit",value:function(){var e=Object(N.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.item,e.next=4,fetch("/clients"+(n.id?"/"+n.id:""),{method:n.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.setState({alert_message:"Saccess !"});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,t=Object(m.jsxs)("h2",{id:"title",children:[e.id?"Modifier le client ":"Ajouter un client",e.id]});return Object(m.jsxs)("div",{children:[Object(m.jsx)(p,{}),Object(m.jsxs)(v.b,{children:[t,Object(m.jsx)("br",{}),"Saccess !"===this.state.alert_message?Object(m.jsx)(A,{}):null,Object(m.jsxs)(v.c,{onSubmit:this.handleSubmit,children:[Object(m.jsx)(v.d,{children:Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(v.e,{type:"text",name:"nom",id:"isValid",value:e.nom||"",onChange:this.handleChange,autoComplete:"email",required:!0}),Object(m.jsx)(v.f,{for:"name",children:"Nom :"})]})}),Object(m.jsx)(v.d,{children:Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(v.e,{type:"text",name:"prenom",id:"prenom",value:e.prenom||"",onChange:this.handleChange,autoComplete:"email",required:!0}),Object(m.jsx)(v.f,{for:"prenom",children:"Pr\xe9nom :"})]})}),Object(m.jsx)(v.d,{children:Object(m.jsxs)("div",{className:"question",children:[Object(m.jsx)(v.e,{type:"text",name:"email",id:this.emptyItem.vemail,value:e.email||"",onChange:this.handleChange,autoComplete:"email",required:!0}),Object(m.jsx)(v.f,{for:"email",children:"Email :"})]})}),Object(m.jsx)(v.d,{children:Object(m.jsxs)("div",{id:"bgButton",className:"float-right",children:[Object(m.jsxs)(v.a,{id:"returnButton",tag:b.a,to:"/clients",children:[Object(m.jsx)(k.a,{id:"my-icons"})," ",Object(m.jsx)("span",{children:"Retour"})]}),Object(m.jsxs)(v.a,{disabled:this.vButton,id:"engButton",type:"submit",children:[Object(m.jsx)(P.a,{id:"my-icons"})," ",Object(m.jsx)("span",{children:"Enregistrer"})]})]})})]})]})]})}}]),n}(i.Component)),R=Object(T.a)(I),D=(n(198),function(e){Object(j.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)(g.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_ROUTER_BASE||"",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(w.a,{exact:!0,path:"/clients",component:_}),Object(m.jsx)(w.a,{path:"/clients/:id",component:R}),Object(m.jsx)(w.a,{path:"/",component:f})]})})}}]),n}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(406);a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[407,1,2]]]);
//# sourceMappingURL=main.babeb36e.chunk.js.map