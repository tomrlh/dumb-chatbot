(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(58)},34:function(e,t,n){},35:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(22),r=n.n(o),s=(n(34),n(35),n(2)),l=n(3),c=n(5),u=n(4),g=n(6),m=n(23),d=n.n(m),p=n(11),h=n.n(p),f=n(7),b=n.n(f),v=[{name:"aries",start:"03/21",end:"04/19"},{name:"taurus",start:"04/20",end:"05/20"},{name:"gemini",start:"05/21",end:"06/20"},{name:"cancer",start:"06/21",end:"07/22"},{name:"leo",start:"07/23",end:"08/22"},{name:"virgo",start:"08/23",end:"09/22"},{name:"libra",start:"09/23",end:"10/22"},{name:"scorpio",start:"10/23",end:"11/21"},{name:"sagittarius",start:"11/22",end:"12/21"},{name:"capricorn",start:"12/22",end:"01/19"},{name:"aquarius",start:"01/20",end:"02/18"},{name:"pisces",start:"02/19",end:"03/20"}],w=function(){var e=JSON.parse(window.localStorage.getItem("catUrl"));return e||null},k=function(){h.a.get("https://official-joke-api.appspot.com/random_joke").then(function(e){window.localStorage.setItem("joke",JSON.stringify(e.data)),function(e){for(var t=(new Date).getTime();(new Date).getTime()<t+e;);}(2e3)})},y=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(void h.a.get("https://api.thecatapi.com/v1/images/search").then(function(e){window.localStorage.setItem("catUrl",JSON.stringify(e.data[0].url))}).catch(function(e){console.log(e)})),console.log(w())}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("img",{src:w(),style:{maxWidth:"100%",maxHeight:"100%"},alt:"cute kitten"}),i.a.createElement("p",null,"What a cute :3"))}}]),t}(a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{style:{float:"none",margin:"0 auto"},headerTitle:"Goofy Chatbot",botAvatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4Q7TL8gZll_6fwz4AmyGGRN7P3yloo1vNPbDCCPIR8KADAhQ",steps:[{id:"1",message:"Hi, I'm the Goofy ChatBot, able to answer a few questions... please select one of the following:",trigger:"options"},{id:"options",options:[{value:"fibonacci",label:"1) Fibonacci sequence",trigger:"beginFibonacci"},{value:"findSign",label:"2) Find your sign",trigger:"beginFindSign"},{value:"joke",label:"3) Tell a joke",trigger:"beginJoke"},{value:"female",label:"4) See a kitten",trigger:"beginCatImage"}]},{id:"beginFibonacci",message:"fibonacci, ok, please insert a number..",trigger:"fibonacciInput"},{id:"beginFindSign",message:"let me know your birthdate month and day..",trigger:"findSignInput"},{id:"beginJoke",message:function(e){e.previousValue,e.steps;return k(),"let me think..."},trigger:"showJokeSetup"},{id:"beginCatImage",message:"so let's see a cute kitten XD",trigger:"showKitten"},{id:"fibonacciInput",user:!0,validator:function(e){return isNaN(e)?"value must be a number":!(e<0)||"value must be positive"},trigger:"calculateFibonacci"},{id:"calculateFibonacci",message:function(e){var t=e.previousValue;e.steps;return"Fibonacci sequence from "+t+" is "+function(e){if(parseInt(e,10)>=1){var t=0,n=[];for(n.push(0),n.push(1);t<e-2;)n.push(n[n.length-1]+n[n.length-2]),t+=1;return n.toString()}}(t).toString()},trigger:"finishedOption"},{id:"findSignInput",user:!0,validator:function(e){return!!function(e){var t=b()(e).format("MM-DD");return!(!e.match(/^\d{2}[.\/-]\d{2}$/)||!b()(t,"MM-DD",!0).isValid())}(e)||"date format must be: MM/DD"},trigger:"findSign"},{id:"findSign",message:function(e){var t=e.previousValue;e.steps;return"Your sign based in your birth date is "+function(e){var t=v.find(function(t){return b()(e).isBetween(t.start,t.end)});return t?t.name.toUpperCase():"sign not found"}(t)},trigger:"finishedOption"},{id:"showJokeSetup",message:function(e){e.previousValue,e.steps;return function(){var e=JSON.parse(window.localStorage.getItem("joke"));return e?e.setup:null}()},trigger:"getAnswer"},{id:"getAnswer",options:[{value:"view answer",label:"show me the answer..",trigger:"showJokePunchline"}]},{id:"showJokePunchline",message:function(e){e.previousValue,e.steps;return function(){var e=JSON.parse(window.localStorage.getItem("joke"));return e?e.punchline:null}()},trigger:"finishedOption"},{id:"beginCatImage",component:i.a.createElement(y,null),trigger:"finishedOption"},{id:"finishedOption",message:"Do you want to try other option?",trigger:"rerun"},{id:"rerun",options:[{value:"yes",label:"Yes",trigger:"options"},{value:"no",label:"No",trigger:"finish"}]},{id:"finish",message:"Thank you for iteracting with me :D",end:!0}]}))}}]),t}(a.Component);var E=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h3",null,"A simple chat bot demonstration"),i.a.createElement(S,null),i.a.createElement("br",null),i.a.createElement("h4",null,"Javascript stack used"),i.a.createElement("ul",{id:"navlist",style:{display:"inline",listStyleType:"none",paddingRight:"20px"}},i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/facebook/react"},"react")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/LucasBassetti/react-simple-chatbot"},"simple-chat-bot")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/moment/moment"},"moment")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/axios/axios"},"axios"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.53c8fbd4.chunk.js.map