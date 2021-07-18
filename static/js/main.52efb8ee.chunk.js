(this["webpackJsonpcovid-19-melbourne"]=this["webpackJsonpcovid-19-melbourne"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),i=n(4),s=n(5),u=n(14),d=n.n(u),l=n(15),j={URL:"https://au-covid-19.github.io/COVID-19-Data/",BASE:"data.json",SUPPORTED_VERSION:.1},f={getLocation:function(t){return new Promise((function(e,n){fetch(j.URL+j.BASE).then((function(t){return t.json()})).then((function(a){for(var c=0;c<a.locations.length;c++)if(a.locations[c].id==t){var r=j.URL+a.locations[c].filename;fetch(r).then((function(t){return t.json()})).then((function(t){t.version==j.SUPPORTED_VERSION?e(t):(console.log("VERSION MISMATCH"),n())}))}}))}))},getCurrentDay:function(t){return t.days.slice().sort((function(t,e){return t.time<e.time?1:-1}))[0]}},b={IDLE:"idle",LOADING:"loading",READY:"ready"},O={id:15,data:null,status:b.LOADING},h=Object(s.b)("location/download",Object(l.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.getLocation(0);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),p=Object(s.c)({name:"location",initialState:O,reducers:{setLocation:function(t,e){t.id=e.payload}},extraReducers:function(t){t.addCase(h.pending,(function(t){t.status=b.LOADING})).addCase(h.fulfilled,(function(t,e){t.status=b.READY,t.data=e.payload}))}}),m=(p.actions.setLocation,function(t){return t.location.status}),v=function(t){return t.location.data},x=p.reducer,D=Object(s.a)({reducer:{location:x}}),I=n(7),L=n(8),C=n(10),E=n(9),N=n(1);function y(t){return Object(N.jsx)("div",{className:"title",children:Object(N.jsx)("h1",{children:t.location})})}function A(t){return Object(N.jsxs)("div",{children:[Object(N.jsx)("p",{children:t.title}),Object(N.jsx)("p",{children:t.info})]})}function R(t){var e=t.info.map((function(t){return Object(N.jsx)(A,{title:t.name,info:t.data},t.name)}));return Object(N.jsx)("div",{className:"coreContainer",children:e})}var g={CoreInfomation:function(t){return[{name:"Deaths",data:t.deaths},{name:"Overseas Cases",data:t.caseNumbers.overseas},{name:"Local Cases",data:t.caseNumbers.local},{name:"Interstate Cases",data:t.caseNumbers.interstate},{name:"Tests",data:t.tests}]}},S=n(29),w=n(30);n(26);function k(t){var e=t.updated,n=Object(S.a)(Object(w.a)(e),new Date,{addSuffix:!0});return Object(N.jsx)("div",{className:"footer",children:Object(N.jsxs)("p",{children:["Updated ",n]})})}var U=function(t){Object(C.a)(n,t);var e=Object(E.a)(n);function n(t){return Object(I.a)(this,n),e.call(this,t)}return Object(L.a)(n,[{key:"render",value:function(){var t=this.props.data,e=f.getCurrentDay(t),n=g.CoreInfomation(e),a=e.time;return Object(N.jsxs)("div",{children:[Object(N.jsx)(y,{location:t.info.name}),Object(N.jsx)(R,{info:n}),Object(N.jsx)(k,{updated:a})]})}}]),n}(c.a.Component),P=Object(i.b)((function(t){return{data:v(t)}}),null)(U);function G(){return Object(N.jsx)("div",{children:Object(N.jsx)("p",{children:"Loading"})})}var M=function(t){Object(C.a)(n,t);var e=Object(E.a)(n);function n(t){return Object(I.a)(this,n),e.call(this,t)}return Object(L.a)(n,[{key:"componentDidMount",value:function(){this.props.downloadAsync()}},{key:"render",value:function(){return this.props.status==b.READY?Object(N.jsx)(P,{}):this.props.status==b.IDLE||b.LOADING?Object(N.jsx)(G,{}):void 0}}]),n}(c.a.Component),T=Object(i.b)((function(t){return{status:m(t)}}),{downloadAsync:h})(M);o.a.render(Object(N.jsx)(c.a.StrictMode,{children:Object(N.jsx)(i.a,{store:D,children:Object(N.jsx)(T,{})})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.52efb8ee.chunk.js.map