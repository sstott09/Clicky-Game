(this.webpackJsonpclickygame=this.webpackJsonpclickygame||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":1,"image":"https://cdn.aarp.net/content/dam/aarp/money/scams_fraud/2019/12/1140-puppy-sad.jpg","clicked":false},{"id":2,"image":"https://cosmos-magazine.imgix.net/file/spina/photo/10822/170621-Puppy-Full.jpg?fit=clip&w=835","clicked":false},{"id":3,"image":"https://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg","clicked":false},{"id":4,"image":"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/12/puppy-scams-los-angeles-christmas-duffy-brook-6qxIWz3brAk-unsplash-1068x752.jpg","clicked":false},{"id":5,"image":"https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","clicked":false},{"id":6,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQC7kGMj-B6Mgyjglz97WPDdqC4-rR5EL8m4tRX2-mmR44ANFNe","clicked":false},{"id":7,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt2Hu2E1rf7PLPjwRfBBsPzw0uF8sxjUymcAt9Ed38qPm8bsIn","clicked":false},{"id":8,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_cJqyovTM5FGLy7fzUWeBMNb6U1dJ1oBZaCyqKm7QArort1DA","clicked":false},{"id":9,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRw2Au16pCwrSU1jFzL1z9qQKROKkOBSMYfHbYxvvBPVdim6Ebn","clicked":false},{"id":10,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJs2sFEdbx_-c9XqIzLHUUkFzc1fqiOEnjZXdu03XFewlXAcwi","clicked":false},{"id":11,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9olwxh3Th2gKzDKeqZXwdBknqJLyb-1FHof_3peL1NIefZ_fv","clicked":false},{"id":12,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1SDqay3XRqw68jrZ6prPXpqVW_Nfz0fn29Id1TWTGfv1JgrcF","clicked":false}]')},17:function(e,t,a){e.exports=a(26)},22:function(e,t,a){},23:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(9),i=a.n(s),r=(a(22),a(23),a(6)),o=a(11),l=a(12),d=a(15),m=a(13),p=a(16),u=a(28),g=a(29),f=a(30);a(8);var h=function(e){return n.a.createElement(u.a,null,n.a.createElement(g.a,{sm:"2"},n.a.createElement(f.a,null,n.a.createElement("img",{className:"image-cards",src:e.image,alt:"imageCard",onClick:function(){return e.handleImageClick(e.id)}}))))};var k=function(e){return n.a.createElement("nav",{className:"navbar"},n.a.createElement("ul",null,n.a.createElement("h1",{className:"brand"},"Clicky Game"),n.a.createElement("li",null,"Score: ",e.score," | TopScore: ",e.topScore)))},b=a(14),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={data:b,score:0,topScore:0},a.shuffleCards=function(e){for(var t=e.length-1;t>0;){var a=Math.floor(Math.random()*e.length),c=e[t];e[t]=e[a],e[a]=c,t--}return e},a.handleClick=function(e){var t=!1,c=a.state.data.map((function(a){var c=Object(r.a)({},a);return c.id===e&&(c.clicked||(c.clicked=!0,t=!0)),c}));t?a.correctGuess(c):a.incorrectGuess(c)},a.correctGuess=function(e){console.log("correct guess");var t=a.state.score+1,c=Math.max(t,a.state.topScore);a.setState({score:t,topScore:c,data:a.shuffleCards(e)})},a.incorrectGuess=function(e){console.log("incorrect guess"),a.setState({data:a.resetData(e),score:0})},a.resetData=function(e){var t=e.map((function(e){return Object(r.a)({},e,{clicked:!1})}));return a.shuffleCards(t)},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({data:this.shuffleCards(this.state.data)})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(k,{score:this.state.score,topScore:this.state.topScore}),n.a.createElement("div",null,this.state.data.map((function(t){return n.a.createElement(h,{key:t.id,id:t.id,image:t.image,handleImageClick:e.handleClick})}))))}}]),t}(c.Component);var v=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.a1657261.chunk.js.map