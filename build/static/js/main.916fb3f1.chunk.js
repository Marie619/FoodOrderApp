(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1DDZ2",total:"Cart_total__3dFip",actions:"Cart_actions__22G36","button--alt":"Cart_button--alt__1Z2AE",button:"Cart_button__3yDgL"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1YvBA",summary:"CartItem_summary__1qEbs",price:"CartItem_price__1DrzR",amount:"CartItem_amount__1u4Xl",actions:"CartItem_actions__1bEBF"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__1uUxY",icon:"HeaderCartButton_icon__WhKNm",badge:"HeaderCartButton_badge__3GaS9",bump:"HeaderCartButton_bump__3avzP"}},,,function(e,t,n){e.exports={header:"Header_header__5uN3Q","main-image":"Header_main-image__3P6n8"}},function(e,t,n){e.exports={meal:"MealItem_meal__3F4me",description:"MealItem_description__nHNcN",price:"MealItem_price__260FY"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1PT6v",modal:"Modal_modal__3DWXc","slide-down":"Modal_slide-down__V-5Ma"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__1KPAo"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__2oWkd","meals-appear":"AvailableMeals_meals-appear__3mftS"}},function(e,t,n){e.exports={form:"MealItemForm_form__hgaVr"}},function(e,t,n){e.exports={input:"Input_input__2dsgS"}},function(e,t,n){e.exports={card:"Card_card__3DTQU"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n.p+"static/media/meals.2971f633.jpg",l=n(11),u=n.n(l),d=n(8),m=n.n(d),j=n(0),b=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},x=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),O=function(e){var t=Object(r.useContext)(x),n=Object(r.useState)(!1),a=Object(i.a)(n,2),c=a[0],s=a[1],o=t.items,l=o.reduce((function(e,t){return e+t.amount}),0),u="".concat(m.a.button," ").concat(c?m.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){s(!0);var e=setTimeout((function(){s(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(j.jsxs)("button",{className:u,onClick:e.showCart,children:[Object(j.jsx)("span",{className:m.a.icon,children:Object(j.jsx)(b,{})}),Object(j.jsx)("span",{children:"Your Cart"}),Object(j.jsx)("span",{className:m.a.badge,children:l})]})},h=function(e){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsxs)("header",{className:u.a.header,children:[Object(j.jsx)("h1",{children:"React Meals"}),Object(j.jsx)(O,{showCart:e.showCart})]}),Object(j.jsx)("div",{className:u.a["main-image"],children:Object(j.jsx)("img",{src:o,alt:"Delicious food"})})]})},p=n(15),_=n.n(p),f=function(){return Object(j.jsxs)("section",{className:_.a.summary,children:[Object(j.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(j.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(j.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=n(12),A=n.n(g),N=n(17),y=n.n(N),I=n(2),w=n(18),M=n.n(w),D=s.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:M.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(I.a)({ref:t},e.input))]})})),F=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(j.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(j.jsx)(D,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",defaultValue:"1"}}),Object(j.jsx)("button",{children:"+ Add"}),!a&&Object(j.jsx)("p",{children:"Please enter a valid amount (1-5)"})]})},H=function(e){var t="$".concat(e.price.toFixed(2)),n=Object(r.useContext)(x);return Object(j.jsxs)("li",{className:A.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.title}),Object(j.jsxs)("div",{className:A.a.description,children:[" ",e.description]}),Object(j.jsx)("div",{children:t})]}),Object(j.jsx)("div",{children:Object(j.jsx)(F,{onAddToCart:function(t){n.addItem({id:e.id,name:e.title,amount:t,price:e.price})}})})]})},k=n(19),B=n.n(k),E=function(e){return Object(j.jsx)("div",{className:B.a.card,children:e.children})},S=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],R=function(e){var t=S.map((function(e){return Object(j.jsx)(H,{id:e.id,title:e.name,description:e.description,price:e.price},e.id)}));return Object(j.jsx)("section",{className:C.a.meals,children:Object(j.jsx)(E,{children:Object(j.jsx)("ul",{children:t})})})},P=function(){return Object(j.jsxs)(r.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)(R,{})]})},T=n(4),z=n.n(T),V=n(13),Y=n.n(V),G=function(e){return Object(j.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},W=function(e){return Object(j.jsx)("div",{className:Y.a.modal,children:Object(j.jsx)("div",{children:e.children})})},q=function(e){var t=document.getElementById("overlays");return Object(j.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(j.jsx)(G,{onClose:e.onClose}),t),c.a.createPortal(Object(j.jsx)(W,{children:e.children}),t)]})},J=n(5),K=n.n(J),Q=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:K.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:K.a.summary,children:[Object(j.jsx)("span",{className:K.a.price,children:t}),Object(j.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},U=function(e){var t=Object(r.useContext)(x),n=function(e){t.removeItem(e)},a=function(e){t.addItem(Object(I.a)(Object(I.a)({},e),{},{amount:1}))},c=t.totalAmount.toFixed(2),i=t.items.length>0,s=Object(j.jsx)("ul",{className:z.a["cart-items"],children:t.items.map((function(e){return Object(j.jsx)(Q,{name:e.name,amount:e.amount,price:e.price,onRemove:n.bind(null,e.id),onAdd:a.bind(null,e)},e.id)}))});return Object(j.jsxs)(q,{onClose:e.onClose,children:[s,Object(j.jsxs)("div",{className:z.a.total,children:[Object(j.jsx)("span",{children:"Total Amount"}),Object(j.jsx)("span",{children:c})]}),Object(j.jsxs)("div",{className:z.a.actions,children:[Object(j.jsx)("button",{className:z.a["button--alt"],onClick:e.onClose,children:"Close"}),i&&Object(j.jsx)("button",{className:z.a.button,children:"Order"})]})]})},X=n(14),Z={items:[],totalAmount:0},$=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(I.a)(Object(I.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(X.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(I.a)(Object(I.a)({},l),{},{amount:l.amount-1});(s=Object(X.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return Z},L=function(e){var t=Object(r.useReducer)($,Z),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(j.jsx)(x.Provider,{value:s,children:e.children})},ee=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1];return Object(j.jsxs)(L,{children:[a&&Object(j.jsx)(U,{onClose:function(){c(!1)}}),Object(j.jsx)(h,{showCart:function(){c(!0)}}),Object(j.jsx)(P,{})]})};c.a.render(Object(j.jsx)(ee,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.916fb3f1.chunk.js.map