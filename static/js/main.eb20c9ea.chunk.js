(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},16:function(t,e,s){"use strict";s.r(e);var n=s(8),r=s.n(n),a=s(2),c=s(3),o=s(5),i=s(4),l=s(1),b=s.n(l),u=(s(13),s(7)),h=(s(14),s(0)),p=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortBy:""},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByAlphabet=function(){t.setState({sortBy:"alphabet"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t.getVisibleGoods=function(){var e=t.props.goods,s=t.state,n=s.isReversed,r=s.sortBy,a=e;return r&&(a=Object(u.a)(a).sort((function(t,e){switch(r){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}}))),n&&(a=Object(u.a)(a).reverse()),a},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.getVisibleGoods();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{className:"list-group",children:t.map((function(t){return Object(h.jsx)("li",{className:"list-group-item",children:t},t)}))}),Object(h.jsxs)("div",{className:"btn-group role=group aria-label=Basic example",children:[Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.sortByAlphabet,children:"Sort by alphabet"}),Object(h.jsx)("button",{className:"btn btn-primary",type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("button",{className:"btn btn-danger",type:"button",onClick:this.reset,children:"Reset"})]})]})}}]),s}(b.a.Component),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(o.a)(s,t);var e=Object(i.a)(s);function s(){var t;Object(a.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isStarted:!1},t.start=function(){t.setState({isStarted:!0})},t}return Object(c.a)(s,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),this.state.isStarted?Object(h.jsx)(p,{goods:d}):Object(h.jsx)("button",{className:"btn btn-outline-success",type:"button",onClick:this.start,children:"Start"})]})}}]),s}(b.a.Component);r.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.eb20c9ea.chunk.js.map