(function(t){function e(e){for(var s,a,o=e[0],u=e[1],c=e[2],p=0,f=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(s=!1)}s&&(i.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},r={app:0},i=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01f6":function(t,e,n){},"034f":function(t,e,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},"0ff5":function(t,e,n){},1725:function(t){t.exports=JSON.parse('{"spinQuiz":"Крутите колесо чтобы выбрать тему викторины","topics":[{"topicName":"Математика"}]}')},"208c":function(t,e,n){},"39e9":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=n("2b88"),i=n.n(r),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{class:["app","app--"+t.theme,{blur:t.blur}]},[n("div",{staticClass:"app-vertical-position"},[n("div",{staticClass:"app-horizontal-position"},[n(t.currentComponent,t._b({tag:"component",on:{start:t.startGameHandler,restart:t.restartHandler}},"component",t.componentProps,!1))],1)])])])},o=[],u=(n("d81d"),n("b64b"),n("53ca")),c=n("1725"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roulette-screen"},[n("div",{staticClass:"roulette__text"},[n("p",{staticClass:"roulette__motivation"},[t._v(t._s(t.spinQuiz))])]),n("div",{staticClass:"roulette__frame"},[n("ul",{class:t.rouletteClasses,style:t.rouletteStyles},t._l(t.topics,(function(e,s){return n("li",{key:s+1,staticClass:"roulette-item"},[n("img",{staticClass:"roulette__topic-image",attrs:{src:t.topicsImg[s],alt:""}})])})),0)]),n("div",{staticClass:"roulette__controls"},[n("action-button",{attrs:{"theme-type":"light"},on:{click:t.rotationRoulette}},[t._v(t._s(t.spin))])],1)])},p=[];n("a9e3");function f(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Math.floor(Math.random()*t+Number(e))}var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["button"===t.tag?n("button",t._g({class:t.classes,attrs:{type:"button"}},t.$listeners),[t._t("default")],2):"a"===t.tag?n("a",{class:t.classes,attrs:{href:t.href}},[t._t("default")],2):t._e()])},m=[],h="light",_="dark",b={name:"ActionButton",props:{theme:{type:String,default:h},tag:{type:String,default:"button"},href:{type:String,default:""}},computed:{classes:function(){var t=["action__button"];switch(this.theme){case h:t.push("action__button--".concat(h));break;case _:t.push("action__button--".concat(_));break}return"a"===this.tag&&t.push("external-link"),t}}},v=b,g=(n("cc44"),n("2877")),w=Object(g["a"])(v,d,m,!1,null,"da0e58c2",null),y=w.exports,S={name:"RouletteView",components:{ActionButton:y},props:{topics:{type:Array,required:!0},animationDuration:{type:Number,default:1},spin:{type:String,required:!0},spinQuiz:{type:String,required:!0},topicsImg:{type:Array,required:!0}},data:function(){return{currenttopicIndex:-1,animationRun:!1,popupShow:!1}},computed:{rouletteClasses:function(){return["roulette",-1!==this.currenttopicIndex?"number-".concat(this.currenttopicIndex+1):""]},rouletteStyles:function(){return{animationDuration:"".concat(this.animationDuration,"s")}}},methods:{rotationRoulette:function(){var t=this;this.animationRun||(this.animationRun=!0,this.currenttopicIndex=f(this.topics.length),setTimeout((function(){t.animationRun=!1,t.$emit("start",t.currenttopicIndex)}),1e3*this.animationDuration))}}},q=S,O=(n("792c"),Object(g["a"])(q,l,p,!1,null,null,null)),x=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{staticClass:"test-screen-hide",attrs:{name:"fade-in-screen",mode:"out-in"}},[n(t.currentScreen,t._b({tag:"component",on:{next:t.nextHandler,"test-result":t.testResultHandler,restart:t.restartHandler}},"component",t.currentScreenProps,!1))],1)},C=[],k=(n("13d5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("test-wrapper",[n("Header",t._b({},"Header",{topic:t.topic,currentTopic:t.currentTopic},!1)),n("div",{staticClass:"test__body"},[n("question-indicator",{attrs:{"question-num":t.questionNum}}),n("transition",{attrs:{name:"fade-in",mode:"out-in"}},[t.activeQuestion?n("quiz",{key:t.activeQuestion.id,attrs:{answerState:t.answerState,question:t.activeQuestion,"question-num":t.questionNum},on:{answer:t.answerHandler}}):t._e()],1)],1),n("footer",{staticClass:"footer"},[n("action-button",{attrs:{theme:"dark"},on:{click:t.nextQuestion}},[t._v(t._s(t.next))])],1)],1)}),N=[],T=n("ade3"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"test"},[t._t("default")],2)},A=[],H={name:"TestWrapper"},P=H,R=(n("def9"),Object(g["a"])(P,$,A,!1,null,null,null)),E=R.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("p",{staticClass:"header__motivation"},[t._v(t._s(t.currentTopic)+" "+t._s(t.topic)+" ")])])},I=[],z={name:"Header",props:{topic:{type:String,required:!0,default:3},currentTopic:{type:String,required:!0}}},D=z,L=(n("cf24"),Object(g["a"])(D,Q,I,!1,null,"e35a6598",null)),M=L.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"indicator"},t._l(5,(function(e){return n("div",{key:e,class:["indicator-item",e===t.questionNum?"indicator-item--active":""]})})),0)},V=[],F={name:"QuestionIndicator",props:{questionNum:{type:Number,required:!0}}},G=F,J=(n("a342"),Object(g["a"])(G,B,V,!1,null,"9a1a4c2c",null)),W=J.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz"},[n("div",{staticClass:"question__number"},[t._v("№"+t._s(t.questionNum))]),n("p",{staticClass:"question"},[t._v(" "+t._s(t.question.text)+" ")]),n("answer-list",{attrs:{answers:t.question.answers,"answer-state":t.answerState},on:{answer:t.answerHandler}})],1)},K=[],X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"answer-list"},t._l(t.answers,(function(e){return n("answer-item",{key:e.id,attrs:{answer:e,"current-answer-state":t.answerState?t.answerState[e.id]:null},on:{click:function(n){return t.clickHandler(e.id)}}})})),1)},Y=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"answer-list__item"},[n("button",{class:t.answerClasses,style:t.answerStyle,attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.answer.text)+" ")])])},tt=[],et={name:"AnswerItem",props:{answer:{type:Object,required:!0},currentAnswerState:{type:String,default:null}},computed:{answerClasses:function(){return{"answer-list__button":!0,"answer-list__button--success":"success"===this.currentAnswerState,"answer-list__button--fail":"fail"===this.currentAnswerState}},answerStyle:function(){var t={};return this.answer.text.length>6&&(t["font-size"]="1rem"),t}}},nt=et,st=(n("b89d"),Object(g["a"])(nt,Z,tt,!1,null,"9caa7afa",null)),rt=st.exports,it={name:"AnswerList",components:{AnswerItem:rt},props:{answers:{type:Array,required:!0},answerState:{type:Object,default:null}},methods:{clickHandler:function(t){this.$emit("answer",t)}}},at=it,ot=(n("7abc"),Object(g["a"])(at,X,Y,!1,null,"561022f0",null)),ut=ot.exports,ct={name:"Quiz",components:{AnswerList:ut},props:{question:{type:Object,required:!0},answerState:{type:Object,default:null},questionNum:{type:Number,required:!0}},methods:{answerHandler:function(t){this.$emit("answer",t)}}},lt=ct,pt=(n("75a8"),Object(g["a"])(lt,U,K,!1,null,"0626f551",null)),ft=pt.exports,dt={name:"TestScreen",components:{TestWrapper:E,Header:M,QuestionIndicator:W,Quiz:ft,ActionButton:y},props:{questions:{type:Array,required:!0},testLength:{type:Number,default:5},topic:{type:String,required:!0},next:{type:String,required:!0,default:"Дальше"},currentTopic:{type:String,required:!0,default:"Текущая тема викторины: "}},data:function(){return{questionNum:1,result:{},answerState:null}},computed:{activeQuestion:function(){return this.questions[this.questionNum-1]}},methods:{nextQuestion:function(){if(this.answerState){if(this.questionNum>=this.testLength)return this.$emit("next","testing"),void this.$emit("test-result",this.result);this.answerState=null,this.questionNum++}},answerHandler:function(t){var e="success",n="fail",s=this.activeQuestion.id,r=this.activeQuestion.rightAnswerId;r===t?(this.answerState=Object(T["a"])({},t,e),this.result[s]||(this.result[s]=e)):(this.answerState=Object(T["a"])({},t,n),this.result[s]||(this.result[s]=n))}}},mt=dt,ht=(n("8099"),Object(g["a"])(mt,k,N,!1,null,"0439920c",null)),_t=ht.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("test-wrapper",[n("header",{staticClass:"header-finish"},[n("div",{staticClass:"prize-description"},[n("h2",{staticClass:"prize-description__name"},[t._v(t._s(t.data.answerResult)+" "+t._s(this.testResult)+" "+t._s(t.data.answerFrom)+" 5")])])]),n("div",{staticClass:"test-body"},[n("div",{staticClass:"congratulation"},[n("div",{staticClass:"congratulation__image"},[n("div",{staticClass:"image-wrapper"},[n("img",{attrs:{src:"./img/smile.png",alt:"congratulation image"}})])]),n("p",{staticClass:"congratulation__title"},[t._v(t._s(t.data.wellDone))])])]),n("footer",{staticClass:"footer"},[n("action-button",{attrs:{theme:"dark"},on:{click:t.restart}},[t._v(t._s(t.data.again))])],1)])},vt=[],gt={name:"TestFinishScreen",components:{TestWrapper:E,ActionButton:y},props:{testResult:{type:Number,default:0},data:{type:Object,required:!0}},data:function(){return{link:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_LANDING_PAGE}},methods:{restart:function(){this.$emit("restart")}}},wt=gt,yt=(n("6d81"),Object(g["a"])(wt,bt,vt,!1,null,"5e2ae212",null)),St=yt.exports,qt={name:"Test",components:{TestingScreen:_t,TestFinishScreen:St},props:{game:{type:Object,required:!0},data:{type:Object,required:!0}},data:function(){return{testState:0,testResult:0}},computed:{currentScreen:function(){switch(this.testState){case 0:return"TestingScreen";case 1:return"TestFinishScreen"}},currentScreenProps:function(){switch(this.testState){case 0:return{questions:this.game.topic.questions,topic:this.game.topic.topicName,currentTopic:this.data.currentTopic,next:this.data.next};case 1:return{externalLink:"#",testResult:this.testResult,data:this.data}}}},methods:{nextHandler:function(t){this.testState++},testResultHandler:function(t){var e=function(e,n){return"success"===t[n]?++e:e};this.testResult=Object.keys(t).reduce(e,0)},restartHandler:function(){this.$emit("restart")}}},Ot=qt,xt=(n("e2cd"),Object(g["a"])(Ot,j,C,!1,null,null,null)),jt=xt.exports,Ct={name:"App",components:{TestView:jt,RouletteView:x},data:function(){return{theme:"dark",blur:!1,topics:c.topics,data:c,topicsImg:["./img/topics/maths.png","./img/topics/nature.png","./img/topics/geography.png","./img/topics/baking.png"],game:{isPlaying:!1,topic:null}}},computed:{currentComponent:function(){function t(n){Object.keys(n).map((function(s){"object"===Object(u["a"])(n[s])?t(n[s]):"string"===typeof n[s]&&e.push(n[s])}))}var e=[];t(c,e);var n={"Крутите колесо чтобы выбрать тему викторины":"test","Математика":"test"};function s(t,e,n){console.log(e),Object.keys(t).map((function(t){}))}function r(t,e){var n=Object.assign({},t);return Object.keys(e).map((function(t){s(n,t,e)})),n}var i=r(c,n);return console.log(i,"result"),this.game.isPlaying?(this.theme="light","test-view"):(this.theme="dark","roulette-view")},componentProps:function(){return this.game.isPlaying?{game:this.game,data:c}:{topics:this.topics,spin:this.data.spin,spinQuiz:this.data.spinQuiz,topicsImg:this.topicsImg}}},methods:{portalHandle:function(t){this.blur=t},startGameHandler:function(t){this.game.isPlaying=!0,this.game.topic=c.topics[t]},restartHandler:function(){this.game.isPlaying=!1,this.game.topic=null}}},kt=Ct,Nt=(n("034f"),Object(g["a"])(kt,a,o,!1,null,null,null)),Tt=Nt.exports;n("f5df1"),n("db43");s["default"].use(i.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(Tt)}}).$mount("#app")},6903:function(t,e,n){},"6d81":function(t,e,n){"use strict";var s=n("01f6"),r=n.n(s);r.a},"75a8":function(t,e,n){"use strict";var s=n("208c"),r=n.n(s);r.a},"792c":function(t,e,n){"use strict";var s=n("6903"),r=n.n(s);r.a},"7abc":function(t,e,n){"use strict";var s=n("e805"),r=n.n(s);r.a},8099:function(t,e,n){"use strict";var s=n("39e9"),r=n.n(s);r.a},"85ec":function(t,e,n){},"8f93":function(t,e,n){},a342:function(t,e,n){"use strict";var s=n("e226"),r=n.n(s);r.a},b5c4:function(t,e,n){},b89d:function(t,e,n){"use strict";var s=n("faff"),r=n.n(s);r.a},cc44:function(t,e,n){"use strict";var s=n("b5c4"),r=n.n(s);r.a},cf24:function(t,e,n){"use strict";var s=n("eea1"),r=n.n(s);r.a},db43:function(t,e,n){},def9:function(t,e,n){"use strict";var s=n("0ff5"),r=n.n(s);r.a},e226:function(t,e,n){},e2cd:function(t,e,n){"use strict";var s=n("8f93"),r=n.n(s);r.a},e805:function(t,e,n){},eea1:function(t,e,n){},faff:function(t,e,n){}});
//# sourceMappingURL=app.c92ba6d1.js.map