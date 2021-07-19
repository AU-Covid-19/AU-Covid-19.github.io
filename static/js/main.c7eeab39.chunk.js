(this["webpackJsonpcovid-19-melbourne"]=this["webpackJsonpcovid-19-melbourne"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(4),s=n(5),u=n(14),d=n.n(u),l=n(15),j={URL:"https://au-covid-19.github.io/COVID-19-Data/",BASE:"data.json",SUPPORTED_VERSION:.1},f=new Headers;f.append("pragma","no-cache"),f.append("cache-control","no-cache");var b={method:"get",headers:f},O={getLocation:function(t){return new Promise((function(e,n){fetch(j.URL+j.BASE,b).then((function(t){return t.json()})).then((function(a){for(var c=0;c<a.locations.length;c++)if(a.locations[c].id==t){var r=j.URL+a.locations[c].filename;fetch(r).then((function(t){return t.json()})).then((function(t){t.version==j.SUPPORTED_VERSION?e(t):(console.log("VERSION MISMATCH"),n())}))}}))}))},getCurrentDay:function(t){return t.days.slice().sort((function(t,e){return t.time<e.time?1:-1}))[0]}},h={IDLE:"idle",LOADING:"loading",READY:"ready"},p={id:15,data:null,status:h.LOADING},m=Object(s.b)("location/download",Object(l.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.getLocation(0);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),v=Object(s.c)({name:"location",initialState:p,reducers:{setLocation:function(t,e){t.id=e.payload}},extraReducers:function(t){t.addCase(m.pending,(function(t){t.status=h.LOADING})).addCase(m.fulfilled,(function(t,e){t.status=h.READY,t.data=e.payload}))}}),x=(v.actions.setLocation,function(t){return t.location.status}),D=function(t){return t.location.data},I=v.reducer,L=Object(s.a)({reducer:{location:I}}),C=n(7),g=n(8),E=n(10),N=n(9),y=n(1);function A(t){return Object(y.jsx)("div",{className:"title",children:Object(y.jsx)("h1",{children:t.location})})}function R(t){return Object(y.jsxs)("div",{children:[Object(y.jsx)("p",{children:t.title}),Object(y.jsx)("p",{children:t.info})]})}function S(t){var e=t.info.map((function(t){return Object(y.jsx)(R,{title:t.name,info:t.data},t.name)}));return Object(y.jsx)("div",{className:"coreContainer",children:e})}var w={CoreInfomation:function(t){return[{name:"Deaths",data:t.deaths},{name:"Overseas Cases",data:t.caseNumbers.overseas},{name:"Local Cases",data:t.caseNumbers.local},{name:"Interstate Cases",data:t.caseNumbers.interstate},{name:"Tests",data:t.tests}]}},k=n(29),U=n(30);n(26);function P(t){var e=t.updated,n=Object(k.a)(Object(U.a)(e),new Date,{addSuffix:!0});return Object(y.jsx)("div",{className:"footer",children:Object(y.jsxs)("p",{children:["Updated ",n]})})}var G=function(t){Object(E.a)(n,t);var e=Object(N.a)(n);function n(t){return Object(C.a)(this,n),e.call(this,t)}return Object(g.a)(n,[{key:"render",value:function(){var t=this.props.data,e=O.getCurrentDay(t),n=w.CoreInfomation(e),a=e.time;return Object(y.jsxs)("div",{children:[Object(y.jsx)(A,{location:t.info.name}),Object(y.jsx)(S,{info:n}),Object(y.jsx)(P,{updated:a})]})}}]),n}(c.a.Component),M=Object(i.b)((function(t){return{data:D(t)}}),null)(G);function T(){return Object(y.jsx)("div",{children:Object(y.jsx)("p",{children:"Loading"})})}var V=function(t){Object(E.a)(n,t);var e=Object(N.a)(n);function n(t){return Object(C.a)(this,n),e.call(this,t)}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.props.downloadAsync()}},{key:"render",value:function(){return this.props.status==h.READY?Object(y.jsx)(M,{}):this.props.status==h.IDLE||h.LOADING?Object(y.jsx)(T,{}):void 0}}]),n}(c.a.Component),B=Object(i.b)((function(t){return{status:x(t)}}),{downloadAsync:m})(V);o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(i.a,{store:L,children:Object(y.jsx)(B,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c7eeab39.chunk.js.map