(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{46:function(n,e,t){},47:function(n,e,t){"use strict";t.r(e);var i,r=t(1),a=t(17),c=t.n(a),s=t(2),o=t(16),d=t(6),l=t(3),u=t(0),p=l.a.div(i||(i=Object(s.a)(["\n    max-height: 100vh;\n    background: #fff;\n\n    text-align: center;\n\n    padding: 20px 0;\n    nav {\n        height: 100%;\n        ul{\n            display: grid;\n            grid-template-rows: repeat(2, 50px);\n            gap: 20px;\n            grid-auto-rows: 1fr;\n            align-items: flex-end;\n            justify-content: center;\n\n            list-style: none;\n\n            height: 100%;\n            li {\n                width: 60px;\n                height: 60px;\n\n                display: flex;\n                justify-content: center;\n                align-items:center;\n\n                border-radius: 50%;\n\n\n                i {\n                    font-size: 20px;\n                }\n\n                \n            }\n            .active{\n                border-radius: 50%;\n                color: #fff;\n                background: #F99404;\n            }\n\n            a{\n                text-decoration: none;\n                color: #000;\n            }\n        }\n    }\n"])));var j,b=function(){return Object(u.jsx)(p,{children:Object(u.jsx)("nav",{children:Object(u.jsxs)("ul",{children:[Object(u.jsx)(o.b,{to:"/pizza",activeClassName:"active",children:Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"bi bi-house-door"})})}),Object(u.jsx)(o.b,{to:"/liked",activeClassName:"active",children:Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"bi bi-heart"})})}),Object(u.jsx)("li",{children:Object(u.jsx)("i",{className:"bi bi-box-arrow-right"})})]})})})},h=l.a.div(j||(j=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    input {\n        border: none;\n        border-radius: 50px;\n\n        padding: 20px 40px;\n\n        &:focus {\n            outline: none;\n        }\n    }\n"])));var x,f=function(){return Object(u.jsxs)(h,{children:[Object(u.jsx)("h1",{children:"Today Menu \ud83d\ude1b"}),Object(u.jsx)("input",{type:"text",placeholder:"Search by food name"})]})},m=t(33),O=l.a.div(x||(x=Object(s.a)(["\n    position: relative;\n\n    width: 100%;\n    min-height: 237px;\n\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n\n    background: #FFECD1;    \n\n    border-radius: 25px;\n\n    padding: 0 65px;\n    margin-top: 20px;\n\n    font-size: 20px;\n\n    overflow: hidden;\n\n    &::before{\n        content: '';\n\n        position: absolute;\n        top: -50%;\n        right: 10%;\n\n        width: 100px;\n        height: 100px;\n\n        border-radius: 50%;\n        border: 40px solid #00A650;\n    }\n    &::after{\n        content: '';\n\n        position: absolute;\n        bottom: -50%;\n        left: 50%;\n\n        width: 100px;\n        height: 100px;\n\n        border-radius: 50%;\n        border: 40px solid #00AEC7;\n    }\n\n    span {\n        color: #B2A89C;\n        font-weight: 600;\n        span {\n            color: #FC9304;\n        }\n    }\n    button {\n        background: #FC9304;\n\n        border: none;\n        border-radius: 50px;\n\n        color: #fff;\n        font-family: inherit;\n        font-weight: 600;\n\n        width: 15%;\n        padding: 15px 5px;\n        margin-top: 20px;\n\n        cursor: pointer;\n\n        &:focus{\n            outline: none;\n        }\n    }\n"])));var g,v=function(){var n=Object(r.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return t?Object(u.jsxs)(O,{children:[Object(u.jsx)("span",{children:"More Text"}),Object(u.jsx)("button",{onClick:a,children:"Close"})]}):Object(u.jsxs)(O,{children:[Object(u.jsx)("h2",{children:"Hello Ilya,"}),Object(u.jsxs)("span",{children:["Get free delivery every ",Object(u.jsx)("span",{children:"$20"})," purchase"]}),Object(u.jsx)("button",{onClick:a,children:"Learn More"})]})},y=t(7);function k(n){return{type:"DEL_LIKE_PRODUCT",payload:n}}function w(n){return{type:"ADD",payload:n}}function N(n){return{type:"DEL",payload:n}}function E(n){return{type:"STILL",payload:n}}function C(n,e){return{type:"HANDEL_SHOW",payload:e,name:n}}var _=l.a.div(g||(g=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    background: #fff;\n\n    width: 150px;\n    height: 170px;\n\n    margin-top: 20px;\n    padding: 10px 20px;\n\n    border-radius: 20px;\n\n    user-select: none;\n    cursor: pointer;\n\n    .category-img{\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 60px;\n        height: 60px;\n        background: #fff;\n        border-radius: 50%;\n        img{\n            width: 70%;\n            height: 70%;\n\n        }\n    }\n    span {\n        margin-top: 20px;\n        font-weight: 600;\n    }\n\n    &.active{\n        background:#FB9202;\n        color: #fff;\n    }\n"])));var I,L={selectProduct:function(n){return{type:"SELECT_PRODUCT",payload:n}}},B=Object(y.b)(null,L)((function(n){var e=n.selectProduct,t=n.params,i=n.active,r=n.handelActive,a=t.url,c=t.category,s=t._id;return Object(u.jsxs)(_,{onClick:function(){return n=s,e(c),void r(n);var n},className:i?"active":null,children:[Object(u.jsx)("div",{className:"category-img",children:Object(u.jsx)("img",{src:a,alt:c})}),Object(u.jsx)("span",{children:c.charAt(0).toUpperCase()+c.slice(1)})]})})),A=l.a.div(I||(I=Object(s.a)(["\n    margin-top: 30px;\n\n    overflow: hidden;\n\n    & .category{\n        display: flex;\n        justify-content:center;\n        gap: 50px;\n    }\n\n    & .category-info {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        width: 100%;\n        & .viwe-all {\n                background: #FB9202;\n                padding: 5px 10px;\n    \n                border: none;\n                border-radius: 15px;\n    \n                font-size: 15px;\n                color: #fff;\n    \n                cursor: pointer;\n    \n                &:focus {\n                    outline: none;\n                }\n            }\n    }\n\n\n\n"])));var D,F={handelShow:C,onCategoryActive:function(n){return{type:"CATEGORY_ACTIVE",payload:n}}},P=Object(y.b)((function(n){return{category:n.category.category}}),F)((function(n){var e=n.category,t=n.handelShow,i=n.onCategoryActive,r=function(n){i(n)};return Object(u.jsxs)(A,{children:[Object(u.jsxs)("div",{className:"category-info",children:[Object(u.jsx)("h2",{children:"Menu Category"}),Object(u.jsx)("button",{onClick:function(){return t("menu")},className:"viwe-all",children:"Viwe All"})]}),Object(u.jsx)("div",{className:"category",children:e.map((function(n){return Object(u.jsx)(B,{handelActive:r,params:n,active:n.active},n._id)}))})]})})),z=l.a.div(D||(D=Object(s.a)(["\n    position: relative;\n\n    width: 360px;\n    height: 280px;\n\n    background: #fff;\n\n    border-radius: 20px;\n\n    margin-top: 20px;\n    padding: 10px 30px;\n    .product-items{\n        position: relative;\n\n        width: 100%;\n        height: 60%;\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        }\n\n        i {\n            color: #FF3636;\n        }\n        div{\n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            position: absolute;\n            top: 0;\n            right: 0;\n            z-index: 9;\n\n            height: 35px; \n            width: 35px;\n\n            border-radius: 50%;\n            transition: background .2s linear;\n        }\n        .active{\n            background: rgba(256, 100, 100, .5);\n        }\n    }\n    .product-info{\n        display: flex;\n        flex-direction: column;\n\n        margin-top: 20px;\n\n        span {\n            font-weight: 700;\n            font-size: 20px;\n\n            span{\n                color: #FB9300;\n            }\n        }\n    }\n    button{\n        position: absolute;\n        right: 10%;\n        bottom: 10%;\n\n        width: 50px;\n        height: 50px;\n\n        background: #FB9202;\n\n        border: none;\n        border-radius: 50%;\n\n        font-size: 30px;\n        color: #fff;\n\n        cursor: pointer;\n\n        &:focus {\n            outline: none;\n        }\n    }\n"])));var R,T,S=function(n){var e=n.params,t=n.onLike,i=n.handelActive,r=n.addBasket;return Object(u.jsxs)(z,{children:[Object(u.jsxs)("div",{className:"product-items",children:[Object(u.jsx)("img",{src:e.url,alt:e.title}),Object(u.jsx)("div",{className:i?"active":null,onClick:function(){return t(e._id)},children:Object(u.jsx)("i",{className:"bi bi-heart-fill"})})]}),Object(u.jsxs)("div",{className:"product-info",children:[Object(u.jsx)("span",{children:e.title}),Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{children:"$"}),e.price]})]}),Object(u.jsx)("button",{onClick:function(){return r(e,e._id)},children:Object(u.jsx)("i",{className:"bi bi-plus"})})]})},M=l.a.div(R||(R=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 2fr 3fr 1fr;\n    justify-items: center;\n    align-items: center;\n\n    width: 100%;\n    height: 100px;\n    margin-top: 20px;\n    padding: 5px;\n\n    font-weight: 700;\n\n    \n\n    & .item-img {\n        width: 80%;\n        height: 100px;\n        padding: 5px;\n\n        background: #FFECD0;\n\n        border-radius: 20px;\n\n\n        img {\n            width: 100%;\n            height: 100%;\n            object-fit: contain;\n        }\n    }\n\n    & .item-params {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .orange{\n        color: #FB9300;\n    }\n\n    & .item-price {\n        display: flex;\n        align-items:center;\n        & i {\n            font-size: 25px;\n\n            cursor: pointer;\n        }\n    }\n"])));function H(n){var e=n.params,t=n.delBasket,i=e.url,r=e.category,a=e.title,c=e.price,s=e.count,o=e._id;return Object(u.jsxs)(M,{children:[Object(u.jsx)("div",{className:"item-img",children:Object(u.jsx)("img",{src:i,alt:r})}),Object(u.jsxs)("div",{className:"item-params",children:[Object(u.jsx)("span",{children:a}),Object(u.jsxs)("span",{children:[Object(u.jsx)("span",{className:"orange",children:"x"}),s]})]}),Object(u.jsxs)("div",{className:"item-price",children:[Object(u.jsxs)("span",{className:"prise",children:[Object(u.jsx)("span",{className:"orange",children:"$"}),c]}),Object(u.jsx)("i",{onClick:function(){return t(o)},className:"bi bi-x"})]})]})}var U=l.a.div(T||(T=Object(s.a)(["\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99;\n\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n\n    width: 800px;\n    height: 500px;\n    background: #fff;\n    padding: 50px;\n\n    border: 2px solid #FB9202;\n    border-radius: 5px;\n\n    overflow-y: auto;\n\n    & .modal-info {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        width: 100%;\n\n        & i {\n            font-size: 30px;\n\n            cursor: pointer;\n        }\n    }\n\n"])));var Y,G={handelHide:function(n,e){return{type:"HANDEL_HIDE"}},delBasket:N,addBasket:w,addStillBasket:E},V=Object(y.b)((function(n){return{show:n.client.show,name:n.client.name,basketItems:n.basket.menuItems,menu:n.menu.menuItems}}),G)((function(n){var e=n.handelHide,t=n.show,i=n.name,r=n.basketItems,a=n.menu,c=n.delBasket,s=n.addBasket,o=n.addStillBasket;if(!t)return null;var d=function(n){c(n)},l=function(n,e){r.find((function(e){return e===n}))?o(e):s(n)},p="menu"===i?a:r;return Object(u.jsxs)(U,{children:[Object(u.jsxs)("div",{className:"modal-info",children:[Object(u.jsxs)("h3",{children:["Your ",i]}),Object(u.jsx)("i",{onClick:function(){e()},className:"bi bi-x"})]}),Object(u.jsx)("div",{children:p.map((function(n){return"basket"===i?Object(u.jsx)(H,{delBasket:d,params:n},n._id):Object(u.jsx)(S,{addBasket:l,params:n},n._id)}))})]})})),K=l.a.div(Y||(Y=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n\n    h2 {\n        margin-top: 50px;\n    }\n"])));var $={likeProduct:function(n){return{type:"LIKE_PRODUCT",payload:n}},delLikeProduct:k,addBasket:w,addStillBasket:E},J=Object(y.b)((function(n){return{menu:n.menu.sort,likedMenu:n.menu.likedProduct,basketItems:n.basket.menuItems}}),$)((function(n){var e=n.menu,t=n.likeProduct,i=n.likedMenu,r=n.delLikeProduct,a=n.addBasket,c=n.basketItems,s=n.addStillBasket,o=function(n){i.find((function(e){return e._id===n}))?r(n):t(n)},d=function(n,e){c.find((function(e){return e===n}))?s(e):a(n)};return 0===e.length?Object(u.jsx)(K,{children:Object(u.jsx)("h2",{children:"\u0412\u044b\u0431\u0435\u0440\u0435\u0442\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442"})}):Object(u.jsxs)(K,{children:[Object(u.jsx)(V,{}),e.map((function(n,e){return e<3?Object(u.jsx)(S,{addBasket:d,handelActive:(t=n._id,!!i.find((function(n){return n._id===t}))),onLike:o,params:n},n._id):null;var t}))]})}));var W=function(){return Object(u.jsx)("img",{src:"./spinner.gif",alt:"Loading..."})};var q,Q=function(){return Object(u.jsx)("h1",{children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})},X=t(23),Z=t.n(X),nn=t(30),en=t(31),tn=t(32),rn=function(){function n(){Object(en.a)(this,n),this._apiBase="https://vast-basin-51392.herokuapp.com"}return Object(tn.a)(n,[{key:"pizzaResurce",value:function(){var n=Object(nn.a)(Z.a.mark((function n(e){var t;return Z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(this._apiBase).concat(e));case 2:if((t=n.sent).ok){n.next=5;break}return n.abrupt("return",console.log(new Error(t.status)));case 5:return n.next=7,t.json();case 7:return n.abrupt("return",n.sent);case 8:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},{key:"getMenu",value:function(){return this.pizzaResurce("/menu")}},{key:"getCategory",value:function(){return this.pizzaResurce("/category/getcategory")}}]),n}(),an=l.a.div(q||(q=Object(s.a)(["\n    height: 100vh;\n\n    background: #FAFAFC;\n    color: #3B3B47;\n\n    padding: 50px;\n\n    &.status {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n"])));var cn,sn={onLoadedMenu:function(n){return{type:"LOADED_MENU",payload:n}},onLoadedCategory:function(n){return{type:"LOADED_CATEGORY",payload:n}},onError:function(){return{type:"ERROR"}}},on=Object(y.b)((function(n){return{serviceParam:n.menu,loading:n.menu.loading,error:n.menu.error,likedMenu:n.menu.likedProduct}}),sn)((function(n){var e=n.loading,t=n.error,i=n.onLoadedMenu,a=(n.onError,n.onLoadedCategory),c=new rn;return Object(r.useEffect)((function(){c.getMenu().then((function(n){return i(n)})),c.getCategory().then((function(n){return a(n)}))}),[]),t?Object(u.jsx)(an,{className:"status",children:Object(u.jsx)(Q,{})}):e?Object(u.jsx)(an,{className:"status",children:Object(u.jsx)(W,{})}):Object(u.jsxs)(an,{children:[Object(u.jsx)(f,{}),Object(u.jsx)(v,{}),Object(u.jsx)(P,{}),Object(u.jsx)(J,{})]})})),dn=l.a.div(cn||(cn=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    & .cricle {\n        width: 60px;\n        height: 60px;\n\n        background: #D7F5FF;\n        margin-right: 10px;\n\n        border-radius: 50%;\n        \n    }\n\n    & .user-text {\n        span {\n            display: block;\n\n            font-size: 20px;\n        }\n\n        & .user {\n            font-weight: 700;\n        }\n\n        & .status {\n            opacity: .5;\n        }\n    }\n"])));var ln,un=function(){return Object(u.jsxs)(dn,{children:[Object(u.jsx)("div",{className:"cricle"}),Object(u.jsxs)("div",{className:"user-text",children:[Object(u.jsx)("span",{className:"user",children:"Ilyaasdasd"}),Object(u.jsx)("span",{className:"status",children:"User"})]})]})},pn=l.a.div(ln||(ln=Object(s.a)(["\n    & .card {\n        display: grid;\n        grid-template-columns: 4fr 1fr;\n        grid-template-rows: 2fr 1fr;\n        justify-items: space-between;\n\n        width: 100%;\n        height: 225px;\n\n        background: #FB9300;\n        margin-top: 50px;\n        padding: 30px;\n\n        color: #fff;\n\n        border-radius: 30px;\n\n        opacity: .8;\n\n        backdrop-filter: blur(20px);\n    }\n"])));function jn(){return Object(u.jsx)(pn,{children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("span",{className:"card-name",children:"Debit-card"}),Object(u.jsx)("span",{className:"card-trans",children:"Visa"}),Object(u.jsx)("span",{className:"card-sum",children:"1560.00"}),Object(u.jsx)("span",{className:"card-chip",children:"\u0427\u0418\u041f"})]})})}var bn,hn=H,xn=l.a.div(bn||(bn=Object(s.a)(["\n    margin-top: 50px;\n\n    & .basket-info {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n\n        width: 100%;\n\n        & .viwe-all {\n            background: #FB9202;\n            padding: 5px 10px;\n\n            border: none;\n            border-radius: 15px;\n\n            font-size: 15px;\n            color: #fff;\n\n            cursor: pointer;\n\n            &:focus {\n                outline: none;\n            }\n        }\n    }\n"])));var fn,mn={delBasket:N,handelShow:C},On=Object(y.b)((function(n){return{basketItems:n.basket.menuItems}}),mn)((function(n){var e=n.basketItems,t=n.handelShow,i=n.delBasket,r=function(n){i(n)};return Object(u.jsxs)(xn,{children:[Object(u.jsxs)("div",{className:"basket-info",children:[Object(u.jsx)("h3",{children:"Order Menu"}),Object(u.jsx)("button",{onClick:function(){return t("basket",e)},className:"viwe-all",children:"Viwe All"})]}),Object(u.jsx)("div",{children:e.map((function(n,e){return e<3?Object(u.jsx)(hn,{delBasket:r,params:n},n._id):null}))})]})})),gn=l.a.div(fn||(fn=Object(s.a)(["\n    height: 100vh;\n    background: #fff;\n    padding: 50px;\n"])));var vn,yn=function(){return Object(u.jsxs)(gn,{children:[Object(u.jsx)(un,{}),Object(u.jsx)(jn,{}),Object(u.jsx)(On,{})]})},kn=l.a.div(vn||(vn=Object(s.a)(["\n    min-height: 100vh;\n\n    background: #FAFAFC;\n    color: #3B3B47;\n\n    padding: 50px;\n\n    \n    & .items-container{\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n\n        min-height: 100%;\n\n\n        border-radius: 20px;\n\n        padding: 50px;\n        gap: 20px;\n\n        overflow-y: auto;\n\n        h3 {\n            opacity: .8;\n        }\n    }\n"])));var wn,Nn={delLikeProduct:k},En=Object(y.b)((function(n){return{likedProduct:n.menu.likedProduct}}),Nn)((function(n){var e=n.likedProduct,t=n.delLikeProduct,i=function(n,e){t(e)};return Object(u.jsxs)(kn,{children:[Object(u.jsx)("h2",{children:"Liked list \u2764"}),Object(u.jsx)("div",{className:"items-container",children:e.length>0?e.map((function(n){return Object(u.jsx)(S,{onLike:i,params:n},e.id+1)})):Object(u.jsx)("h3",{children:"You didn't like anything\ud83d\ude30"})})]})})),Cn=l.a.div(wn||(wn=Object(s.a)(["\n    display: grid;\n    grid-template-columns: 1fr 6fr 2fr;\n"])));var _n=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(Cn,{children:[Object(u.jsx)(b,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{exact:!0,path:"/home",children:Object(u.jsx)(on,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/liked",children:Object(u.jsx)(En,{})}),Object(u.jsx)(d.a,{exact:!0,children:Object(u.jsx)(on,{})})]}),Object(u.jsx)(yn,{})]})})},In=t(15),Ln=t(5),Bn={menuItems:[],sort:[],likedProduct:[],loading:!0,error:!1},An={menuItems:[]},Dn={show:!1,name:"",items:null},Fn={category:[],activeId:null},Pn=Object(In.b)({menu:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Bn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADED_MENU":return n.loading=!1,Object(Ln.a)(Object(Ln.a)({},n),{},{menuItems:e.payload});case"ERROR":return n.error=!0,n;case"SELECT_PRODUCT":var t=n.menuItems.filter((function(n){return n.category===e.payload}));return Object(Ln.a)(Object(Ln.a)({},n),{},{sort:t});case"LIKE_PRODUCT":if(!e.payload)return n;var i=n.likedProduct.concat(),r=n.menuItems.concat().find((function(n){return n._id===e.payload}));return i.push(r),Object(Ln.a)(Object(Ln.a)({},n),{},{likedProduct:i});case"DEL_LIKE_PRODUCT":var a=n.likedProduct.concat().filter((function(n){return e.payload!==n._id}));return Object(Ln.a)(Object(Ln.a)({},n),{},{likedProduct:a});default:return n}},basket:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:An,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD":var t=n.menuItems.concat();return e.payload.count=1,t.push(e.payload),Object(Ln.a)(Object(Ln.a)({},n),{},{menuItems:t});case"STILL":var i=n.menuItems.concat();return i.forEach((function(n){n._id===e.payload&&(n.count+=1)})),Object(Ln.a)(Object(Ln.a)({},n),{},{menuItems:i});case"DEL":var r=n.menuItems.concat();return 1===r.find((function(n){return n._id===e.payload})).count?r=r.filter((function(n){return n._id!==e.payload})):r.map((function(n){return n._id===e.payload?n.count--:n})),Object(Ln.a)(Object(Ln.a)({},n),{},{menuItems:r});default:return n}},client:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"HANDEL_SHOW":return console.log(e.payload),Object(Ln.a)(Object(Ln.a)({},n),{},{show:!0,name:e.name,items:e.payload});case"HANDEL_HIDE":return Object(Ln.a)(Object(Ln.a)({},n),{},{show:!1});default:return n}},category:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"LOADED_CATEGORY":var t=e.payload;return t.forEach((function(e){e._id===n.activeId?e.active=!0:e.active=!1})),Object(Ln.a)(Object(Ln.a)({},n),{},{category:t});case"CATEGORY_ACTIVE":var i=n.category.concat();return i.forEach((function(n){n._id===e.payload?n.active=!0:n.active=!1})),Object(Ln.a)(Object(Ln.a)({},n),{},{category:i,activeId:e.payload});default:return n}}}),zn=(t(46),Object(In.c)(Pn)),Rn=Object(u.jsx)(y.a,{store:zn,children:Object(u.jsx)(_n,{})});c.a.render(Rn,document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2443f3e4.chunk.js.map