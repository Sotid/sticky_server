(this["webpackJsonpyout-app-name"]=this["webpackJsonpyout-app-name"]||[]).push([[0],{169:function(t,e,n){},170:function(t,e,n){},311:function(t,e,n){},312:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(12),o=n.n(c),r=(n(169),n(170),n(69)),s=n(14),l=n(13),d=n(15),u=n(29),j=n(71),b=n(34),h=n(146),p=n.n(h),f=new(function(){function t(){Object(j.a)(this,t),this.api=p.a.create({baseURL:"https://sticky-n.herokuapp.com/",withCredentials:!0})}return Object(b.a)(t,[{key:"getAllNotes",value:function(){return this.api.get("/notes").then((function(t){return t.data}))}},{key:"getNoteById",value:function(t){return this.api.get("notes/".concat(t)).then((function(t){return t.data}))}},{key:"addNote",value:function(t){return this.api.post("/notes/add",t).then((function(t){return t.data}))}},{key:"updateNote",value:function(t,e){return console.log(e),console.log(t),this.api.put("/notes/edit/".concat(t),e).then((function(t){return t.data}))}},{key:"deleteNote",value:function(t){return this.api.delete("/notes/".concat(t)).then((function(t){return t.data}))}},{key:"addTag",value:function(t,e){return this.api.post("/notes/add/".concat(t,"/tag"),e).then((function(t){return t.data}))}}]),t}()),O=function(){var t=Object(a.useState)({title:"",content:""}),e=Object(l.a)(t,2),n=e[0],i=e[1];return{handleSubmit:function(t){t.preventDefault();var e=n.title,a=n.content;f.addNote({title:e,content:a}).then((function(){i({title:"",content:""})}))},handleInputsChange:function(t){t.persist(),i(Object(u.a)(Object(u.a)({},n),{},Object(d.a)({},t.target.name,t.target.value)))},values:n}},x=n(359),g=n(347),m=n(350),v=n(4),y=function(){var t=Object(g.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1),width:"35ch",paddingLeft:100}}}}))(),e=O(),n=e.values,a=e.handleInputsChange,i=e.handleSubmit;return Object(v.jsx)("div",{className:"section",children:Object(v.jsxs)("form",{className:t.root,noValidate:!0,autoComplete:"off",onSubmit:i,children:[Object(v.jsxs)("div",{class:"input-field",children:[Object(v.jsx)(x.a,{id:"standard-multiline-flexible",label:"Title",style:{paddingLeft:"3px"},multiline:!0,rowsMax:4,i:!0,type:"text",name:"title",onChange:a,value:n.title}),Object(v.jsx)("div",{className:"input-field",children:Object(v.jsx)(x.a,{id:"outlined-multiline-static",label:"Write your note",variant:"outlined",style:{paddingLeft:"10px"},multiline:!0,rows:3,name:"content",onChange:a,value:n.content})})]}),Object(v.jsxs)(m.a,{variant:"contained",onClick:function(){window.location.reload()},type:"submit",color:"primary",children:["Add"," "]})]})})},w=n(352),N=n(353),k=n(148),C=n.n(k),S=n(351),B=Object(g.a)((function(t){return{text:{padding:t.spacing(2,2,0)},paper:{paddingBottom:150},list:{marginBottom:t.spacing(1)},appBar:{top:"auto",bottom:0,paddingBottom:10,background:"linear-gradient(45deg, #c49ee6 30%, #7d4d75 90%)"},grow:{flexGrow:1},fabButton:{position:"relative",zIndex:1,top:10,left:0,right:0,margin:"0 auto",borderRadius:60}}})),T=function(){var t=B(),e=Object(a.useState)(!1),n=Object(l.a)(e,2),i=n[0],c=n[1];return Object(v.jsx)(S.a,{children:Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{position:"static",className:t.appBar,children:Object(v.jsxs)(N.a,{children:[Object(v.jsxs)(m.a,{variant:"contained",onClick:function(){return c(!i)},"aria-label":"add",className:t.fabButton,color:"primary",children:[Object(v.jsx)(C.a,{}),""]}),i&&Object(v.jsx)("p",{children:Object(v.jsx)(y,{})}),Object(v.jsx)("div",{className:t.grow}),Object(v.jsx)("p",{children:"Sticky"})]})})})})},F=n(149),I=n.n(F),A=function(t){var e=t.NoteId,n=Object(a.useState)({title:"",content:""}),i=Object(l.a)(n,2),c=i[0],o=i[1],r=Object(s.f)(),j=function(t){t.preventDefault();var n=c.title,a=c.content;f.updateNote(e,{title:n,content:a}).then((function(t){r.push("/notes")})).catch((function(t){return console.log(t)}))},b=function(t){o(Object(u.a)(Object(u.a)({},c),{},Object(d.a)({},t.target.name,t.target.value)))};return Object(v.jsx)("div",{children:Object(v.jsxs)("form",{onSubmit:j,children:[Object(v.jsx)(x.a,{id:"outlined-secondary",label:"Title",variant:"outlined",color:"secondary",type:"text",name:"title",value:c.title,onChange:b},"field1"),Object(v.jsx)(x.a,{id:"outlined-secondary",label:"Content",variant:"outlined",color:"secondary",name:"content",value:c.content,onChange:b},"field2"),Object(v.jsxs)(m.a,{color:"primary",variant:"outlined",style:{height:30,width:15,borderRadius:50},"aria-label":"edit",onClick:j,children:[" ",Object(v.jsx)(I.a,{style:{height:20,width:15}})]})]})})},D=n(18),L=n(361),R=function(t){var e=Object(a.useState)([]),n=Object(l.a)(e,2),i=n[0],c=n[1],o=Object(s.f)();return Object(v.jsxs)("div",{className:"tags-input",children:[Object(v.jsx)(x.a,{type:"text",onKeyUp:function(e){return function(e){"Enter"===e.key&&""!==e.target.value&&f.addTag(t.id,{tags:i}).then((function(n){c([].concat(Object(D.a)(i),[e.target.value]),{data:n}),t.selectedTags([].concat(Object(D.a)(i),[e.target.value])),o.push("/notes"),e.target.value=""}))}(e)},placeholder:"Add tag",style:{padding:10}}),i.map((function(t,e){return Object(v.jsx)(L.a,{label:t,onDelete:function(){return t=e,void c(Object(D.a)(i.filter((function(e,n){return n!==t}))));var t},color:"primary"},e)}))]})},E=n(100),W=n(101),U=n.n(W),_=n(150),M=n(8),H=function(t,e){var n=M.Util.withSnakeCaseKeys(e);return M.Cloudinary.new().url(t,n)};function J(){return(J=Object(_.a)(U.a.mark((function t(e,n){var a,i;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a={cloudName:"soti",format:"json",type:"list",version:Math.ceil((new Date).getTime()/1e3)},i=H(e.toString(),a),fetch(i).then((function(t){return t.text()})).then((function(t){return t?n(JSON.parse(t).resources.map((function(t){return t.public_id}))):[]})).catch((function(t){return console.log(t)}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var K=n(151),P=n.n(K);var q=function(){var t=Object(a.useState)([]),e=Object(l.a)(t,2),n=e[0],i=e[1],c=function(t){!function(t,e){var n=M.Util.withSnakeCaseKeys(t);window.cloudinary.openUploadWidget(n,e)}({cloudName:"soti",tags:[t,"anImage"],uploadPreset:"q2ksqxtp"},(function(t,e){t?console.log(t):(console.log(e),"success"===e.event&&i([].concat(Object(D.a)(n),[e.info.public_id])))}))};return Object(a.useEffect)((function(){!function(t,e){J.apply(this,arguments)}("image",i)}),[]),Object(v.jsx)(E.a,{cloudName:"soti",children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(m.a,{onClick:function(){return c("image")},"aria-label":"add",color:"primary",children:Object(v.jsx)(P.a,{style:{height:30,width:25}})}),Object(v.jsx)("section",{children:n.map((function(t){return Object(v.jsx)(E.b,{publicId:t,cloudName:"soti",width:"80",crop:"scale"},t)}))})]})})},z=(n(311),n(155)),G=n(355),V=n(358),Q=n(354),X=n(356),Y=n(153),Z=n.n(Y),$=n(152),tt=n.n($),et=n(154),nt=n.n(et),at=n(357),it=n(360),ct=n(3),ot=Object(z.a)({palette:{primary:{main:"#118AB2",dark:"#073B4C"},secondary:{light:"#FFD166",main:"#06D6A0",dark:"#EF476F"}},typography:{fontSize:20,fontFamily:["Indie Flower","cursive"].join(",")}}),rt=Object(g.a)((function(t){return{root:{display:"flex",flexWrap:"wrap",justify:"space-evenly",background:"linear-gradient(45deg, #6b8496 50%, #9dd9d2 90%)",paddingTop:20,flexGrow:1},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));var st=function(){var t=rt(),e=Object(a.useState)([]),n=Object(l.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)({}),r=Object(l.a)(o,2),s=r[0],j=r[1],b=Object(a.useState)(!1),h=Object(l.a)(b,2),p=h[0],O=h[1],x=function(t){console.log(t)};return Object(a.useEffect)((function(){f.getAllNotes().then((function(t){c(t)}))}),[i]),Object(v.jsx)(S.a,{theme:ot,children:Object(v.jsx)(it.a,{display:"flex",p:1,bgcolor:"#67a1b2",css:{maxWidth:1500,maxHeight:3500},children:Object(v.jsx)(Q.a,{className:t.root,variant:"outlined",children:i.map((function(e,n){return Object(v.jsx)("div",{className:"contain",children:Object(v.jsxs)("div",{style:{backgroundColor:"#fff275",maxHeight:"2020px",maxWidth:"250px",minHeight:"250px",minWidth:"150px",borderRadius:20,paddingTop:20},className:"card",children:[Object(v.jsxs)(G.a,{container:!0,spacing:13,justify:"space-around",children:[Object(v.jsx)(m.a,{color:"primary",variant:"outlined",style:{height:30,width:15,borderRadius:50},"aria-label":"edit",onClick:function(t){return function(t){j(Object(u.a)(Object(u.a)({},s),{},Object(d.a)({},t,!s[t])))}(n)},children:Object(v.jsx)(tt.a,{style:{height:20,width:15}})}),!!s[n]&&Object(v.jsx)(A,{NoteId:e._id}),Object(v.jsx)(m.a,{variant:"outlined",color:"primary",style:{height:30,width:15,borderRadius:50},"aria-label":"delete",onClick:function(){return function(t){console.log(t),f.deleteNote(t);var e=t;c(i.filter((function(t){return t.id!==e})))}(e._id)},children:Object(v.jsx)(Z.a,{style:{height:20,width:15}})})]}),Object(v.jsx)(R,{selectedTags:x,id:e._id}),Object(v.jsxs)(Q.a,{children:[Object(v.jsx)(X.a,{variant:"h5",component:"h2",children:e.title}),Object(v.jsx)(at.a,{disableSpacing:!0,children:Object(v.jsx)(m.a,{variant:"outlined",color:"primary",style:{height:30,width:15,borderRadius:50},className:Object(ct.a)(t.expand,Object(d.a)({},t.expandOpen,p)),onClick:function(t){return function(t){O(p===t?-1:t)}(n)},"aria-expanded":p===n,"aria-label":"show more",children:Object(v.jsx)(nt.a,{style:{height:20,width:15}})})}),Object(v.jsx)(V.a,{in:p===n,timeout:"auto",unmountOnExit:!0,children:Object(v.jsx)(Q.a,{children:Object(v.jsxs)(X.a,{className:t.pos,color:"textSecondary",paragraph:!0,children:[Object(v.jsx)(q,{}),e.content]})})})]})]})},i.id)}))})})})},lt=function(){return Object(v.jsx)("div",{children:Object(v.jsx)(st,{})})};var dt=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(r.a,{children:[Object(v.jsx)(T,{}),Object(v.jsxs)(s.c,{children:[Object(v.jsx)(s.a,{exact:!0,path:"/",component:lt}),Object(v.jsx)(s.a,{exact:!0,path:"/notes/add",component:y}),Object(v.jsx)(s.a,{exact:!0,path:"/notes/edit/:id"})]})]})})},ut=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,363)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(dt,{})}),document.getElementById("root")),ut()}},[[312,1,2]]]);
//# sourceMappingURL=main.932219b6.chunk.js.map