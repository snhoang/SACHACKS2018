(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(1)),s=n(2),l=n(4),h=n(3),m=n(5),u=(n(16),n(8)),d=n.n(u),f=(n(21),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).setRef=function(e){n.webcam=e},n.capture=function(){var e=n.webcam.getScreenshot();console.log(e),n.props.sendVoteToServer(e.slice(23))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"webcam"},o.a.createElement(d.a,{audio:!0,height:600,ref:this.setRef,screenshotFormat:"image/jpeg",width:800,videoConstraints:{width:1280,height:680,facingMode:"user"},className:"camera"}),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:this.capture},"Submit",o.a.createElement("i",{className:"material-icons right"})))}}]),t}(a.Component)),g=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).sendVoteToServer=function(e){fetch("http://badass.ghdom.tk/registerScript.php",{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*"},body:{image:JSON.stringify(e)}}).then(function(e){return e.json()}).then(function(e){console.log(e)})},n.state={haveData:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.haveData;return o.a.createElement("div",{className:"App"},e?o.a.createElement(f,{sendVoteToServer:this.sendVoteToServer}):o.a.createElement("img",{className:"loading-logo",alt:"loading",src:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.cb5ab31a.chunk.js.map