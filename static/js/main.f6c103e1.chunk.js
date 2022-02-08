(this.webpackJsonpfrontend_base_dapp=this.webpackJsonpfrontend_base_dapp||[]).push([[0],{232:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"activateWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setMaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"},{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setMaxMintAmountAndWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newWalletLimit","type":"uint256"}],"name":"setWalletLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"walletLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_user","type":"address[]"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')},243:function(e,t,n){},244:function(e,t,n){},245:function(e,t,n){},246:function(e,t,n){},247:function(e,t,n){},253:function(e,t,n){},254:function(e,t,n){},255:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},260:function(e,t,n){},261:function(e,t,n){},262:function(e,t,n){},263:function(e,t,n){},278:function(e,t){},280:function(e,t){},284:function(e,t){},310:function(e,t){},312:function(e,t){},325:function(e,t){},327:function(e,t){},535:function(e,t,n){},536:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},544:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(36),r=n.n(s),o=(n(243),n(4)),c=n(5),l=n(6),p=n(7),u=(n(244),n.p+"static/media/toiletemblem.5f84ad90.png"),d=n.p+"static/media/toiletbanner.fb81abce.jpg",m=(n(245),n(552)),b=n(548),j=n(553),y=(n(246),n(21)),h=(n(247),n(0)),x=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:"ybutton",children:this.props.text})}}]),n}(i.a.Component),O=x;function f(){document.getElementById("mint").scrollIntoView()}function g(){document.getElementById("about").scrollIntoView()}function v(){document.getElementById("roadmap").scrollIntoView()}function T(){window.open("https://opensea.io/collection/cryptoileths")}var C=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"header-control",children:[Object(h.jsx)(m.a,{collapseOnSelect:!0,expand:"lg",children:Object(h.jsxs)(b.a,{children:[Object(h.jsx)(m.a.Brand,{href:"#home",children:Object(h.jsx)("img",{style:{borderRadius:"10px"},src:u,width:100,height:100,alt:"logo"})}),Object(h.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav",style:{backgroundColor:"white"}}),Object(h.jsxs)(m.a.Collapse,{id:"responsive-navbar-nav",children:[Object(h.jsx)(j.a,{className:"me-auto"}),Object(h.jsxs)(j.a,{children:[Object(h.jsx)(j.a.Link,{style:{fontWeight:900,color:"black"},onClick:g,children:"ABOUT"}),Object(h.jsx)(j.a.Link,{onClick:f,children:"MINT"}),Object(h.jsx)(j.a.Link,{style:{fontWeight:900},onClick:v,children:"ROADMAP"}),Object(h.jsx)(j.a.Link,{style:{fontWeight:900},onClick:T,children:"OPENSEA"}),Object(h.jsx)("text",{style:{width:20}}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("a",{style:{textDecoration:"none",color:"black",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://discord.com",children:[" ",Object(h.jsx)(y.a,{size:32})," "]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"black",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com",children:[" ",Object(h.jsx)(y.d,{size:32})," "]}),Object(h.jsxs)("a",{style:{textDecoration:"none",color:"black",paddingLeft:10},target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/",children:[" ",Object(h.jsx)(y.g,{size:32})," "]})]})]})]})]})}),Object(h.jsx)("div",{className:"header-content",children:Object(h.jsx)("h1",{children:Object(h.jsx)("img",{className:"thePicture",src:d})})}),Object(h.jsx)("div",{})]})})}}]),n}(i.a.Component),w=C,k=n(549),M=n(550),N=(n(253),n(254),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"teammember-control",style:{textAlign:"center",justifyContent:"center"},children:[Object(h.jsx)("img",{style:{maxHeight:400,maxWidth:400,border:"solid #000051 10px"},src:this.props.imageUrl,alt:"team member"}),Object(h.jsxs)("div",{className:"teammember-description",children:[Object(h.jsx)("p",{className:"teammember-name",children:this.props.name}),Object(h.jsx)("p",{style:{lineHeight:0,fontWeight:900,paddingBottom:0},className:"teammember-occupation",children:this.props.title}),Object(h.jsx)("p",{style:{paddingTop:0,marginTop:0,lineHeight:1.2,fontWeight:900},className:"teammember-occupation",children:this.props.title2}),Object(h.jsx)("br",{})]})]})}}]),n}(i.a.Component)),A=N,L=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={teams:[{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"},{image:u,title:"Job",name:"Name"}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"team-control",id:"team",children:Object(h.jsxs)(b.a,{style:{paddingLeft:"50px",paddingRight:"50px",background:"linear-gradient(to bottom, #AFF5FF, #FFC17E)",borderRadius:"20px",border:"solid #000051 10px"},children:[Object(h.jsx)("header",{style:{textShadow:"3px 3px 2px black"},children:" TEAM MEMBERS "}),Object(h.jsxs)(k.a,{children:[Object(h.jsx)(M.a,{className:"team-control-card",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[0].image,title:this.state.teams[0].title,name:this.state.teams[0].name})}),Object(h.jsx)(M.a,{className:"team-control-card",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[1].image,title:this.state.teams[1].title,name:this.state.teams[1].name})}),Object(h.jsx)(M.a,{className:"",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[2].image,title:this.state.teams[2].title,name:this.state.teams[2].name})}),Object(h.jsx)(M.a,{className:"team-control-card",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[3].image,title:this.state.teams[3].title,name:this.state.teams[3].name})}),Object(h.jsx)(M.a,{className:"team-control-card",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[4].image,title:this.state.teams[4].title,name:this.state.teams[4].name})}),Object(h.jsx)(M.a,{className:"team-control-card",md:4,xs:12,children:Object(h.jsx)(A,{imageUrl:this.state.teams[5].image,title:this.state.teams[5].title,name:this.state.teams[5].name})})]})]})})}}]),n}(i.a.Component),S=(n(255),i.a.Component,n(256),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"footer-control",id:"socials",children:Object(h.jsxs)(b.a,{className:"footer",children:[Object(h.jsx)("p",{children:Object(h.jsxs)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai/",style:{textDecoration:"none",color:"#000051",textAlign:"left"},children:[" ",Object(h.jsx)("text",{className:"banditz",children:"\xa9 2022 Diamond Dolphins. All Rights Reserved"})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:Object(h.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://metaversesolutions.ai",style:{textDecoration:"none",color:"#000051",textAlign:"right"},children:Object(h.jsx)("text",{className:"metaverse",children:"Metaverse Solutions, LLC"})})})})]})})}}]),n}(i.a.Component)),F=S,E=(n(257),n(258),n.p,n(235)),_=(n(259),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(y.e,{})]}),Object(h.jsx)(E.a,{in:this.state.open,children:Object(h.jsxs)("div",{id:"example",className:"collapse-content",children:[this.props.content,Object(h.jsx)("br",{}),this.props.content2,this.props.content3,this.props.content4,this.props.content5,this.props.content6]})})]})}}]),n}(i.a.Component)),I=(i.a.Component,n(260),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsxs)("div",{className:"collapse-header",children:[Object(h.jsx)("h4",{children:this.props.tag}),Object(h.jsx)("p",{children:this.props.title})]}),Object(h.jsx)(y.e,{})]}),Object(h.jsx)(E.a,{in:this.state.open,children:Object(h.jsxs)("div",{id:"example",className:"collapse-content",children:[Object(h.jsx)("p",{children:this.props.content}),Object(h.jsx)("p",{children:this.props.content2}),Object(h.jsx)("p",{children:this.props.content3}),Object(h.jsx)("p",{children:this.props.content4}),Object(h.jsx)("p",{children:this.props.content5}),Object(h.jsx)("p",{children:this.props.content6})]})})]})}}]),n}(i.a.Component)),B=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={roadmaps:[{tag:"25%",title:"Phase 1",content:"Lorem ipsum. Lorem ipsum decet lorem ipsum."},{tag:"50%",title:"Phase 2",content:"Lorem ipsum. Lorem ipsum decet lorem ipsum."},{tag:"75%",title:"Phase 3",content:"Lorem ipsum. Lorem ipsum decet lorem ipsum."},{tag:"100%",title:"Phase 4",content:"Lorem ipsum. Lorem ipsum decet lorem ipsum."}]},a}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"roadmap-control",id:"roadmap",style:{paddingTop:50,paddingBottom:50,marginLeft:2,marginRight:2},children:Object(h.jsxs)(b.a,{style:{background:"linear-gradient(to bottom, #AFF5FF, #FFC17E)",padding:30,borderRadius:20,textAlign:"center",border:"solid 10px #000051"},children:[Object(h.jsx)("header",{children:Object(h.jsx)("text",{style:{lineHeight:1,color:"#ffebc1",textShadow:"7px 7px 2px black",fontStyle:"normal"},children:"ROADMAP"})}),Object(h.jsx)(k.a,{style:{paddingTop:30},children:Object(h.jsx)(M.a,{style:{color:"white"},children:this.state.roadmaps.map((function(e,t){return Object(h.jsx)(I,{style:{color:"black"},tag:e.tag,title:e.title,content:e.content,content2:e.content2,content3:e.content3,content4:e.content4,content5:e.content5,content6:e.content6},t)}))})})]})})}}]),n}(i.a.Component),D=(n(261),n.p+"static/media/item1.9e50bd20.png"),U=n.p+"static/media/item2.9e50bd20.png",R=n.p+"static/media/item3.9e50bd20.png",W=(n(262),n.p+"static/media/fire.9e50bd20.png"),H=(i.a.Component,i.a.Component,n(23)),J=(n.p,n(263),n(74)),P=n(88),z=n(29),K=n.n(z),G=(n(86),n(231),n(232),n(89)),Q=n(233),V=n(3),Y={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(V.a)(Object(V.a)({},Y),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(V.a)(Object(V.a)({},Y),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(V.a)(Object(V.a)({},e),{},{account:t.payload.account});default:return e}},X={loading:!1,name:"",totalSupply:0,cost:0,error:!1,errorMsg:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(V.a)(Object(V.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(V.a)(Object(V.a)({},e),{},{loading:!1,name:t.payload.name,totalSupply:t.payload.totalSupply,cost:t.payload.cost,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(V.a)(Object(V.a)({},X),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},$=Object(G.b)({blockchain:q,data:Z}),ee=[Q.a],te=Object(G.c)(G.a.apply(void 0,ee)),ne=Object(G.d)($,te),ae=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},ie=function(e){return function(){var e=Object(P.a)(K.a.mark((function e(t){var n,a,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,ne.getState().blockchain.smartContract.methods.name().call();case 4:return n=e.sent,e.next=7,ne.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=e.sent,e.next=10,ne.getState().blockchain.smartContract.methods.cost().call();case 10:i=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{name:n,totalSupply:a,cost:i}}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0),t(ae("Could not load data from contract."));case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}()};var se=function(){var e=Object(J.b)(),t=Object(J.c)((function(e){return e.blockchain})),n=(Object(J.c)((function(e){return e.data})),Object(a.useState)("")),i=Object(H.a)(n,2),s=(i[0],i[1]),r=Object(a.useState)(!1),o=Object(H.a)(r,2),c=o[0],l=o[1],p=Object(a.useState)(0),u=Object(H.a)(p,2),d=u[0],m=u[1],j=function(){""!==t.account&&null!==t.smartContract&&e(ie(t.account))};return Object(a.useEffect)((function(){j()}),[t.account]),Object(h.jsx)("div",{className:"mint-control",id:"mint",children:Object(h.jsx)(b.a,{style:{textAlign:"center",background:"linear-gradient(to bottom, #AFF5FF, #FFC17E)",border:"10px solid #000051",borderRadius:"20px"},children:Object(h.jsx)(k.a,{style:{textAlign:"center"},children:Object(h.jsxs)("text",{className:"mint-description",children:[Object(h.jsxs)("p",{style:{textAlign:"center"},children:[Object(h.jsx)("text",{style:{fontFamily:"asdf",fontSize:80,color:"#FFEBC1",textShadow:"3px 3px 3px black"},children:"MINT NOW!"}),Object(h.jsx)("br",{}),"Mint your official Diamond Dolphin NFT Now!"]}),Object(h.jsxs)("div",{className:"number-control",children:[Object(h.jsx)(y.b,{color:"black",size:40,onClick:function(){d<=0||m(d-1)}}),Object(h.jsx)("span",{id:"inputBox",children:d}),Object(h.jsx)(y.c,{color:"black",size:40,onClick:function(){d>=10||m(d+1)}})]}),Object(h.jsx)("p",{style:{marginTop:0,marginBottom:0},children:"0.10 ETH + Gas"}),""===t.account||null===t.smartContract?Object(h.jsxs)("div",{className:"flex-column",children:[Object(h.jsx)("button",{className:"ybutton",onClick:function(e){console.log("--------")},children:"COMING SOON"}),""!==t.errorMsg?Object(h.jsx)("div",{style:{textAlign:"center",fontSize:20,color:"white"},children:t.errorMsg}):null]}):Object(h.jsx)("button",{className:"ybutton",onClick:function(n){var a;n.preventDefault(),a=1,(a=document.getElementById("inputBox").textContent)<=0||(s("Minting your Official BooCrew NFT..."),l(!0),t.smartContract.methods.mint(t.account,a).send({gasLimit:285e3*a,to:"0x7181d2038B849A18145eb153b8bEFC552e52c37A",from:t.account,value:t.web3.utils.toWei((.027*a).toString(),"ether")}).once("error",(function(e){console.log(e),s("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"),l(!1)})).then((function(n){s("Your BooCrew NFT has been successfully minted!"),l(!1),e(ie(t.account))}))),j()},children:c?"BUSY":"MINT"})]})})})})},re=(n(535),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{id:"about",className:"about-control",children:Object(h.jsx)(b.a,{style:{background:"linear-gradient(to bottom, #AFF5FF, #FFC17E)",border:"solid #000051 10px",borderRadius:20,maxWidth:1200},children:Object(h.jsxs)(k.a,{style:{padding:"25px",paddingBottom:"45px"},children:[Object(h.jsx)(M.a,{md:6,xs:12,children:Object(h.jsxs)("text",{className:"about-description",style:{textAlign:"center"},children:[Object(h.jsxs)("header",{style:{color:"#E8B331",textAlign:"center"},children:[Object(h.jsx)("span",{style:{color:"#FFEBC1"},children:"ABOUT"}),Object(h.jsx)("br",{})]}),Object(h.jsx)("p",{style:{maxWidth:400,margin:"auto"},children:Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)("br",{}),"Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),"Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum. Lorem ipsum. Lorem ipsum decet lorem ipsum.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("text",{style:{fontSize:22},children:"Lorem ipsum. Lorem ipsum decet lorem ipsum.Lorem ipsum. Lorem ipsum decet lorem ipsum."})]})})]})}),Object(h.jsx)(M.a,{md:6,xs:12,className:"image-control",children:Object(h.jsx)("img",{style:{borderRadius:20},src:u,alt:"about gif"})})]})})})}}]),n}(i.a.Component)),oe=re,ce=n(234),le=n.n(ce),pe=n.p+"static/media/boy1.fa25a9cc.png",ue=n.p+"static/media/boy2.0fbc64cd.png",de=n.p+"static/media/boy3.9bf10bce.png",me=n.p+"static/media/boy4.e1e9405c.png",be=n.p+"static/media/boy5.67128b10.png",je=n.p+"static/media/boy6.e416164d.png",ye=n.p+"static/media/boy7.c23e0282.png",he=n.p+"static/media/boy8.f856fbec.png",xe=n.p+"static/media/boy9.deb6c98b.png",Oe=n.p+"static/media/boy10.bab64f3f.png",fe=n.p+"static/media/boy11.6af5b3b6.png",ge=(n(536),i.a.Component,n(537),n(538),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"teamMember-layout ",style:{textAlign:"center",marginBottom:30,border:"solid black 10px",borderRadius:20,padding:10,backgroundColor:"black"},children:Object(h.jsx)("div",{className:"teamMember-text",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"g-flex-justify-center",children:Object(h.jsx)("img",{src:this.props.img,className:"teamMember-image"})}),Object(h.jsx)("div",{className:"teamMember-title",children:Object(h.jsx)("h3",{children:this.props.title})}),Object(h.jsx)("div",{className:"teamMember-title",children:Object(h.jsx)("h3",{style:{fontSize:20},children:this.props.job})})]})})})}}]),n}(i.a.Component)),ve=(n.p,n.p,i.a.Component,n.p+"static/media/dicklogo.9f1ffd25.png"),Te=(n(539),i.a.Component,n(540),n(541),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{onClick:function(){e.setState({open:!e.state.open})},"aria-controls":"example","aria-expanded":this.state.open,className:"collapse-header-control",children:[Object(h.jsx)("div",{className:"collapse-header",children:Object(h.jsx)("p",{children:this.props.title})}),Object(h.jsx)(y.e,{})]}),Object(h.jsx)(E.a,{in:this.state.open,children:Object(h.jsxs)("div",{id:"example",className:"collapse-content",children:[Object(h.jsx)("p",{children:this.props.content}),Object(h.jsx)("p",{children:this.props.content2}),Object(h.jsx)("p",{children:this.props.content3}),Object(h.jsx)("p",{children:this.props.content4}),Object(h.jsx)("p",{children:this.props.content5}),Object(h.jsx)("p",{children:this.props.content6})]})})]})}}]),n}(i.a.Component)),Ce=(i.a.Component,n(542),function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).clearBackGround=function(){a.setState({isLoading:!1})},a.state={isLoading:!0},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setTimeout((function(){return e.clearBackGround()}),0)}},{key:"render",value:function(){return this.state.isLoading?Object(h.jsx)("div",{className:"black-bg"}):Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{}),Object(h.jsx)(oe,{}),Object(h.jsx)(se,{}),Object(h.jsx)(B,{}),Object(h.jsx)(L,{}),Object(h.jsx)(F,{})]})}}]),n}(i.a.Component)),we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,554)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};n(543);r.a.render(Object(h.jsx)(J.a,{store:ne,children:Object(h.jsx)(Ce,{})}),document.getElementById("root")),we()}},[[544,1,2]]]);
//# sourceMappingURL=main.f6c103e1.chunk.js.map