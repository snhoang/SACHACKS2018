(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),s=a(19),c=a.n(s),i=(a(66),a(25)),r=a(26),l=a(28),h=a(27),d=a(29),u=(a(68),a(57)),m=a.n(u),p=a(60),f=(a(113),a(115),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){a.setState({startDate:e})},a.setRef=function(e){a.webcam=e},a.capture=function(){var e=a.webcam.getScreenshot();console.log(e.slice(23)),a.props.sendVoteToServer(e.slice(23))},a.state={startDate:new Date},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"webcam"},o.a.createElement(m.a,{audio:!0,height:600,ref:this.setRef,screenshotFormat:"image/jpeg",width:800,videoConstraints:{width:1280,height:680,facingMode:"user"},className:"camera"}),o.a.createElement("label",null," Birthday date : "),o.a.createElement(p.a,{selected:this.state.startDate,onChange:this.handleChange}),o.a.createElement("button",{className:"btn waves-effect waves-light",onClick:this.capture},"Submit",o.a.createElement("i",{className:"material-icons right"})))}}]),t}(n.Component)),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).sendVoteToServer=function(e){a.setState({haveData:!1}),fetch("http://badass.ghdom.tk/searchVoterDB.php",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){a.setState({haveData:e.status}),console.log(a.state),"V"===e.status?window.location.href="http://badass.ghdom.tk/vote.php?id="+e.id:window.location.href="http://badass.ghdom.tk/index.php?status=R"}).catch(function(e){return console.log(e)})},a.state={haveData:!0,attemp:!1},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.haveData,a=e.attempt;return o.a.createElement("div",{className:"App"},a?o.a.createElement("h1",null,"TRY AGAIN MY MAN !"):null,t?o.a.createElement(f,{sendVoteToServer:this.sendVoteToServer}):o.a.createElement("img",{className:"loading-logo",alt:"loading",src:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},61:function(e,t,a){e.exports=a(117)},66:function(e,t,a){},68:function(e,t,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.62088052.chunk.js.map