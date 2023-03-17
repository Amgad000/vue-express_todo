(function(){"use strict";var t={46:function(t,o,e){var n=e(963),a=e(252);function d(t,o){const e=(0,a.up)("router-link"),n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("nav",null,[(0,a.Wm)(e,{to:"/"},{default:(0,a.w5)((()=>[(0,a.Uk)("Home")])),_:1})]),(0,a.Wm)(n)],64)}var r=e(744);const i={},u=(0,r.Z)(i,[["render",d]]);var s=u,c=e(201);const p={class:"home"};function l(t,o,e,n,d,r){const i=(0,a.up)("TodoComponent");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a.Wm)(i)])}var f=e(577);const v=t=>((0,a.dD)("data-v-3e0cc331"),t=t(),(0,a.Cn)(),t),w={class:"todo-container"},h=v((()=>(0,a._)("h1",null,"Todo",-1))),T={class:"add-todo"},g=v((()=>(0,a._)("label",{for:"todo"},"add a new todo",-1))),m={class:"buttond"},y=["onClick"],_=["onClick"],b={key:0,class:"update-layout"},k={class:"update"},C=v((()=>(0,a._)("label",{for:"update-todo"},"update a todo",-1)));function O(t,o,e,d,r,i){return(0,a.wg)(),(0,a.iD)("div",w,[h,(0,a._)("div",T,[g,(0,a.wy)((0,a._)("input",{type:"text",id:"todo","onUpdate:modelValue":o[0]||(o[0]=t=>r.content=t),onKeyup:o[1]||(o[1]=(0,n.D2)(((...t)=>i.postTodo&&i.postTodo(...t)),["enter"]))},null,544),[[n.nr,r.content]]),(0,a._)("button",{class:"add",onClick:o[2]||(o[2]=(...t)=>i.postTodo&&i.postTodo(...t))},"Add!")]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.todos,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"todos",key:t._id,style:{border:"2px solid green",margin:"5px",padding:"5px"}},[(0,a._)("span",null,(0,f.zw)(t.date),1),(0,a._)("p",null,(0,f.zw)(t.content),1),(0,a._)("div",m,[(0,a._)("button",{class:"delete",onClick:o=>i.deleteTodo(t._id)},"delete",8,y),(0,a._)("button",{class:"update",onClick:o=>{i.getSpecificTodo(t._id),r.updateShow=!r.updateShow}}," update ",8,_)])])))),128)),r.updateShow?((0,a.wg)(),(0,a.iD)("div",b,[(0,a._)("div",k,[C,(0,a.wy)((0,a._)("input",{type:"text",id:"update-todo","onUpdate:modelValue":o[3]||(o[3]=t=>r.updateTodo.content=t),onKeyup:o[4]||(o[4]=(0,n.D2)((t=>{i.update(),r.updateShow=!r.updateShow}),["enter"]))},null,544),[[n.nr,r.updateTodo.content]]),(0,a._)("button",{class:"add",onClick:o[5]||(o[5]=t=>{i.update(),r.updateShow=!r.updateShow})}," Update! ")])])):(0,a.kq)("",!0)])}var S=e(154);const x="api/todos/";class D{static async getTodos(){const t=await S.Z.get(x);return t.data}static postTodo(t){return S.Z.post(x,{content:t})}static deleteTodo(t){return S.Z["delete"](`${x}${t}`)}static async getToUpdate(t){const o=await S.Z.get(`${x}${t}`);return o.data}static updateTodo(t,o){return S.Z.put(`${x}edit/${t}`,{content:o})}}var Z=D,j={name:"TodoComponent",data(){return{todos:[],error:"",content:"",updateShow:!1,updateTodo:{}}},async created(){this.todos=await Z.getTodos()},methods:{async postTodo(){""!=this.content&&await Z.postTodo(this.content),this.content="",this.todos=await Z.getTodos()},async deleteTodo(t){await Z.deleteTodo(t),this.todos=await Z.getTodos()},async getSpecificTodo(t){this.updateTodo=await Z.getToUpdate(t)},async update(){await Z.updateTodo(this.updateTodo._id,this.updateTodo.content),this.todos=await Z.getTodos()}}};const U=(0,r.Z)(j,[["render",O],["__scopeId","data-v-3e0cc331"]]);var $=U,H={name:"HomeView",data(){return{pageTitle:"Todo Page"}},components:{TodoComponent:$},created(){document.title="List'em"}};const P=(0,r.Z)(H,[["render",l]]);var K=P;const V=[{path:"/",name:"home",component:K}],W=(0,c.p7)({history:(0,c.PO)("/"),routes:V});var z=W,Y=e(907),q=(0,Y.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(s).use(q).use(z).mount("#app")}},o={};function e(n){var a=o[n];if(void 0!==a)return a.exports;var d=o[n]={exports:{}};return t[n](d,d.exports,e),d.exports}e.m=t,function(){var t=[];e.O=function(o,n,a,d){if(!n){var r=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],d=t[c][2];for(var i=!0,u=0;u<n.length;u++)(!1&d||r>=d)&&Object.keys(e.O).every((function(t){return e.O[t](n[u])}))?n.splice(u--,1):(i=!1,d<r&&(r=d));if(i){t.splice(c--,1);var s=a();void 0!==s&&(o=s)}}return o}d=d||0;for(var c=t.length;c>0&&t[c-1][2]>d;c--)t[c]=t[c-1];t[c]=[n,a,d]}}(),function(){e.d=function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)}}(),function(){var t={143:0};e.O.j=function(o){return 0===t[o]};var o=function(o,n){var a,d,r=n[0],i=n[1],u=n[2],s=0;if(r.some((function(o){return 0!==t[o]}))){for(a in i)e.o(i,a)&&(e.m[a]=i[a]);if(u)var c=u(e)}for(o&&o(n);s<r.length;s++)d=r[s],e.o(t,d)&&t[d]&&t[d][0](),t[d]=0;return e.O(c)},n=self["webpackChunkvue_front"]=self["webpackChunkvue_front"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(46)}));n=e.O(n)})();
//# sourceMappingURL=app.f3ca36ec.js.map