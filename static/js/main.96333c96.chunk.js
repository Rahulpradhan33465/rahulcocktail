(this.webpackJsonpcocktail=this.webpackJsonpcocktail||[]).push([[0],{17:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(19),r=c.n(n),i=(c(17),c(6)),j=c(2),l=(c(26),c.p+"static/media/myLogo.5592453d.svg"),o=(c(27),c(0));var d=function(){return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"nav-center",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("img",{src:l,alt:"logo",className:"logo"})}),Object(o.jsxs)("ul",{className:"nav-links",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})})]})]})})},b=c(21),h=c(10),u=c.n(h),O=c(12),m=c(9),x=a.a.createContext(),p=function(e){var t=e.children,c=Object(s.useState)(!1),a=Object(m.a)(c,2),n=a[0],r=a[1],i=Object(s.useState)("s"),j=Object(m.a)(i,2),l=j[0],d=j[1],b=Object(s.useState)([]),h=Object(m.a)(b,2),p=h[0],f=h[1],v=Object(s.useCallback)(Object(O.a)(u.a.mark((function e(){var t,c,s,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").concat(l));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,(s=c.drinks)?(a=s.map((function(e){return{id:e.idDrink,info:e.strAlcoholic,name:e.strDrink,msg:e.strInstructions,img:e.strDrinkThumb,glass:e.strGlass}})),f(a)):f([]),r(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0),r(!1);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[l]);return Object(s.useEffect)((function(){v()}),[l,v]),Object(o.jsx)(x.Provider,{value:{loading:n,searchTerm:l,cocktails:p,setSearchTerm:d},children:t})},f=function(){return Object(s.useContext)(x)};c(35);var v=function(e){var t=e.id,c=e.name,s=e.img,a=(e.msg,e.glass),n=e.info;return Object(o.jsxs)("article",{className:"article",children:[Object(o.jsx)("div",{className:"image-container",children:Object(o.jsx)("img",{src:s,alt:c})}),Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h3",{className:"name",children:c}),Object(o.jsx)("h4",{className:"glass",children:a}),Object(o.jsx)("p",{className:"information",children:n}),Object(o.jsx)(i.b,{to:"/cocktile/:".concat(t),children:Object(o.jsx)("button",{className:"details",children:"details"})})]})]})};c(36);var g=function(){return Object(o.jsx)("div",{class:"loader"})};var N=function(){var e=f(),t=e.loading,c=e.cocktails;return t?Object(o.jsx)(g,{}):c.length<1?Object(o.jsx)("div",{className:"error-search",children:Object(o.jsx)("h1",{className:"no",children:"no match found..!"})}):Object(o.jsxs)("section",{className:"section",children:[Object(o.jsx)("h1",{className:"section-heading",children:"Cocktails"}),Object(o.jsx)("div",{className:"section-center",children:c.map((function(e){return Object(o.jsx)(v,Object(b.a)({},e),e.id)}))})]})};var k=function(){var e=a.a.useRef(""),t=f().setSearchTerm;return a.a.useEffect((function(){e.current.focus()}),[]),Object(o.jsx)("section",{className:"search",children:Object(o.jsx)("form",{className:"search-form",onSubmit:function(e){e.preventDefault()},children:Object(o.jsxs)("div",{className:"form-control",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Search your favorite cocktail"}),Object(o.jsx)("input",{type:"text",onChange:function(){t(e.current.value)},ref:e})]})})})};var y=function(){return Object(o.jsxs)("main",{className:"main",children:[Object(o.jsx)(k,{}),Object(o.jsx)(N,{})]})};var w=function(){return Object(o.jsxs)("section",{className:"about",children:[Object(o.jsx)("h1",{children:"about us"}),Object(o.jsxs)("p",{className:"para",children:["I'm Rahul Pradhan.I am a WebDeveloper and Java Programmer. I am from Cuttack,Choudwar,754025.This is my 1st React Major project if you Like It say me 'I LOVE You' :) my number 9777160598   ",Object(o.jsx)("br",{}),"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."]})]})};c(37);var I=function(){var e=Object(j.f)().id,t=a.a.useState(!1),c=Object(m.a)(t,2),s=c[0],n=c[1],r=a.a.useState(null),l=Object(m.a)(r,2),d=l[0],b=l[1],h=function(){var t=Object(O.a)(u.a.mark((function t(){var c,s,a,r,i,j,l,o,d,h,O,m,x,p;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(!0),t.next=4,fetch("".concat("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=").concat(e.substring(1,e.length)));case 4:return c=t.sent,t.next=7,c.json();case 7:(s=t.sent).drinks?(a=s.drinks[0],r=a.strDrink,i=a.strCategory,j=a.strAlcoholic,l=a.strGlass,o=a.strInstructions,d=a.strDrinkThumb,h=a.strIngredient1,O=a.strIngredient2,m=a.strIngredient3,x=a.strIngredient4,p=a.strIngredient5,b({name:r,img:d,info:j,category:i,glass:l,instructions:o,ingredient:[h,O,m,x,p]})):b(null),n(!1),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();if(a.a.useEffect((function(){h()}),[e]),s)return Object(o.jsx)(g,{});if(!d)return Object(o.jsx)("h1",{children:"No details found.....!"});var x=d.name,p=d.img,f=d.info,v=d.category,N=d.glass,k=d.instructions,y=d.ingredient;return Object(o.jsxs)("section",{className:"display",children:[Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("button",{className:"details btn",children:"Go back"})}),Object(o.jsx)("h1",{className:"data-name",children:x}),Object(o.jsxs)("div",{className:"clocktail-data",children:[Object(o.jsx)("img",{className:"image",src:p}),Object(o.jsxs)("div",{className:"all-data",children:[Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"name:"}),Object(o.jsx)("span",{children:x})]}),Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"glass:"})," ",Object(o.jsx)("span",{children:N})]}),Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"info:"}),Object(o.jsx)("span",{children:f})]}),Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"category:"}),Object(o.jsx)("span",{children:v})]}),Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"instructions:"}),Object(o.jsx)("span",{children:k})]}),Object(o.jsxs)("p",{className:"data",children:[Object(o.jsx)("span",{className:"data-span",children:"ingredient:"}),y.map((function(e,t){return e?Object(o.jsx)("span",{children:e},t):null}))]})]})]})]})};var S=function(){return Object(o.jsx)("section",{className:"error",children:Object(o.jsxs)("div",{className:"error-container",children:[Object(o.jsx)("h1",{children:"OOPS !.. Its a dead end "}),Object(o.jsx)(i.b,{to:"/",children:Object(o.jsx)("button",{className:"btn",children:"Back home"})})]})})};var C=function(){return Object(o.jsxs)(i.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",children:Object(o.jsx)(y,{})}),Object(o.jsx)(j.a,{exact:!0,path:"/about",children:Object(o.jsx)(w,{})}),Object(o.jsx)(j.a,{path:"/cocktile/:id",children:Object(o.jsx)(I,{})}),Object(o.jsx)(j.a,{exact:!0,path:"*",children:Object(o.jsx)(S,{})})]})]})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{children:Object(o.jsx)(C,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.96333c96.chunk.js.map