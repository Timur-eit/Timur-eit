(this.webpackJsonppokemons=this.webpackJsonppokemons||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),m=n(4),r=n.n(m),o=n(5),c=n(6);function d(e){var a={background:e.caught?"#5504aa":"#04aa84"};return i.a.createElement("div",{className:"pokemon",style:a},i.a.createElement("span",{className:"pokemon__title"},e.name),i.a.createElement("img",{name:e.name,src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(e.id,".png"),alt:"pokemon"}),i.a.createElement("button",{onClick:function(){e.onToggleCaught(e.id)},type:"button",className:"pokemon__button"},"\u041f\u043e\u0439\u043c\u0430\u0442\u044c"))}var u=[{name:"pikachu",id:"25"},{name:"bulbasaur",id:"1"},{name:"ivysaur",id:"2"},{name:"venusaur",id:"3"},{name:"charmander",id:"4"},{name:"charmeleon",id:"5"},{name:"charizard",id:"6"},{name:"squirtle",id:"7"},{name:"wartortle",id:"8"},{name:"blastoise",id:"9"},{name:"caterpie",id:"10"},{name:"metapod",id:"11"},{name:"butterfree",id:"12"},{name:"weedle",id:"13"},{name:"kakuna",id:"14"},{name:"beedrill",id:"15"},{name:"pidgey",id:"16"},{name:"pidgeotto",id:"17"},{name:"pidgeot",id:"18"},{name:"rattata",id:"19"},{name:"raticate",id:"20"}];function s(){var e=Object(t.useState)([]),a=Object(c.a)(e,2),n=a[0],m=a[1];function r(e){m((function(a){return a.includes(e)?a.filter((function(a){return a!==e})):[].concat(Object(o.a)(a),[e])}))}return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"pokemons-quantity"},"\u041f\u043e\u043a\u0435\u043c\u043e\u043d\u043e\u0432 \u043f\u043e\u0439\u043c\u0430\u043d\u043e ",n.length),i.a.createElement("div",{className:"pokemons"},u.map((function(e){return i.a.createElement(d,{key:e.id,id:e.id,name:e.name,caught:n.includes(e.id),onToggleCaught:r})}))))}n(12);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s,null)),document.getElementById("root"))},7:function(e,a,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0981e89e.chunk.js.map