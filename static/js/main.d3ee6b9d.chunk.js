(this.webpackJsonpeusim=this.webpackJsonpeusim||[]).push([[0],{12:function(e,t,a){e.exports={lineChart:"LineChart_lineChart__1YIFO",labelY:"LineChart_labelY__3CF0E",labelX:"LineChart_labelX__L30Wm"}},23:function(e,t,a){e.exports=a(29)},28:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(15),o=a.n(r),c=(a(28),a(2)),s=a(6),l=a(4),u=a(3),m=a.n(u),d=a(16),h=a(17),p=a(10),f=a(19),v=a(21),b=a(13),E=a(18),g=a.n(E),k=a(5),_=a.n(k);function y(e,t){for(var a,n,i,r=e.length,o=r-t,c=y.swaps;r-- >o;)i=r+1,n=e[a=Math.floor(Math.random()*i)],e[a]=e[r],e[r]=n,c.push(r),c.push(a);for(var s=e.slice(o);t--;)r=c.pop(),a=c.pop(),n=e[r],e[r]=e[a],e[a]=n;return s}function O(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}function S(e){var t=Math.random(),a=0;for(var n in e){var i=Object(l.a)(e[n],2),r=i[0],o=i[1];if(t<=(a+=r))return o}}function j(e,t,a){return Math.min(Math.max(a,e),t-50)}function w(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}y.swaps=[];var M=a(1),A=a.n(M);function C(){}var I={AL:A()("AL"),AX:A()("AX"),AD:A()("AD"),AT:A()("AT"),BE:A()("BE"),BG:A()("BG"),BA:A()("BA"),BY:A()("BY"),CH:A()("CH"),CZ:A()("CZ"),DE:A()("DE"),DK:A()("DK"),ES:A()("ES"),EE:A()("EE"),FI:A()("FI"),FR:A()("FR"),GB:A()("GB"),GG:A()("GG"),GR:A()("GR"),HR:A()("HR"),HU:A()("HU"),IM:A()("IM"),IE:A()("IE"),IS:A()("IS"),IT:A()("IT"),JE:A()("JE"),XK:A()("XK"),LI:A()("LI"),LT:A()("LT"),LU:A()("LU"),LV:A()("LV"),MC:A()("MC"),MD:A()("MD"),MK:A()("MK"),MT:A()("MT"),ME:A()("ME"),NL:A()("NL"),NO:A()("NO"),PL:A()("PL"),PT:A()("PT"),RO:A()("RO"),SM:A()("SM"),RS:A()("RS"),SK:A()("SK"),SI:A()("SI"),SE:A()("SE"),UA:A()("UA"),VA:A()("VA")};function N(e){var t,a=e.layout,n=e.node,r=e.width,o=e.height,s=e.type,l=e.venue,u=e.onNodeClick,m=void 0===u?C:u,d=a[n.id],h="translate(\n    ".concat(j(d.x,r,7),",\n    ").concat(j(d.y,o,30),"\n  )"),p=g()((t={},Object(c.a)(t,_.a.node,!0),Object(c.a)(t,_.a[s],!0),Object(c.a)(t,_.a[l],!0),Object(c.a)(t,_.a.susceptible,0===n.state),Object(c.a)(t,_.a.sick,1===n.state),Object(c.a)(t,_.a.recovered,2===n.state),Object(c.a)(t,_.a.dead,3===n.state),Object(c.a)(t,_.a.locked,n.locked),t));return i.a.createElement("g",{key:"".concat(n.id,"-Node"),id:n.id,transform:h},"venue"===n.type?i.a.createElement("text",{className:p,onClick:m(n.id),x:-8,y:7,fontSize:16},I[n.venue]):3===n.state?i.a.createElement("text",{onClick:m(n.id),x:-8,y:7,fontSize:16},"\ud83d\udc80"):i.a.createElement("circle",{className:p,r:5,stroke:0,onClick:m(n.id),fill:"black"}),!1,n.locked&&i.a.createElement("circle",{r:40,fill:"none",stroke:"gray",strokeWidth:2}))}var R=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleTick=n.handleTick.bind(Object(p.a)(n)),n.setCurrent=n.setCurrent.bind(Object(p.a)(n)),n.state={current:null,layout:e.nodes.reduce((function(e,t){return e[t.id]={x:0,y:0},e}),{})},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentWillMount",value:function(){this.runForceSimulation(),this.simulation.on("tick",this.handleTick)}},{key:"componentWillUnmount",value:function(){this.simulation.on("tick",null)}},{key:"componentWillReceiveProps",value:function(e){this.props.tick!==e.tick&&this.updateForceSimulation()}},{key:"updateForceSimulation",value:function(){this.simulation.alpha(.2).restart(),this.simulation.nodes(this.props.nodes),this.simulation.force("link").links(this.props.edges)}},{key:"shouldComponentUpdate",value:function(e,t){return e.tick!==t.tick}},{key:"runForceSimulation",value:function(){var e=this.props,t=e.nodes,a=e.edges;(this.simulation=Object(b.c)(t).force("link",Object(b.b)().id((function(e){return e.id}))).force("collide",Object(b.a)((function(){return 1})).iterations(1).radius(9))).force("link").links(a).distance(25)}},{key:"handleTick",value:function(){var e=this.simulation,t=this.state.layout,a={};e.nodes().map((function(e){a[e.id]=e})),this.setState({layout:Object(s.a)({},t,{},a)})}},{key:"setCurrent",value:function(e){var t=this;return function(){t.setState({current:e})}}},{key:"render",value:function(){var e=this,t=this.props,a=t.nodes,n=(t.edges,t.width),r=t.height,o=t.onNodeClick,c=this.state,s=c.layout,l=c.current;return i.a.createElement("svg",{width:n,ref:function(t){return e.svgRef=t},height:r,style:{shapeRendering:"geometricPrecision"}},a.map((function(e,t){return i.a.createElement(N,Object.assign({key:t,node:e,layout:s,current:l,width:n,height:r,onNodeClick:o},e))})))}}]),a}(n.Component);R.defaultProps={width:900,height:600,nodes:[],edges:[]};var L=a(20),x=a(12),B=a.n(x);function G(e,t,a,n){return e.slice(Math.max(e.length-n,0)).reduce((function(e,n,i){return e.concat("".concat(i*t,", ").concat(-n*a))}),[]).join(" ")}function T(e){var t=e.width,a=e.height,n=e.xOffset,r=void 0===n?10:n,o=e.yOffset,c=void 0===o?17:o,s=e.data,l=void 0===s?[]:s,u=e.maxXEntries,m=void 0===u?100:u,d=a-50,h=Math.max.apply(Math,[d].concat(Object(L.a)(l.reduce((function(e,t){var a=t.points;return e.concat(a)}),[])))),p=d/h;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:B.a.labelY},"population \u2192"),i.a.createElement("svg",{className:B.a.lineChart,width:t,height:a},i.a.createElement("g",{transform:"scale(1, ".concat(p,"), translate(0, ").concat((a-30)/p,")")},l.map((function(e,t){var a=e.points,n=e.color;return i.a.createElement("g",{key:"line-".concat(t),transform:"translate(".concat(r+5,", ").concat(1+c,")")},i.a.createElement("polyline",{points:G(a,2.5,1,m),stroke:n,fill:"transparent",strokeWidth:2}))})))),i.a.createElement("span",{className:B.a.labelX},"days since the first case \u2192"))}var W=a(7),P=a.n(W);function D(e){var t=e.simulationState,a=e.onSettingChange,n=e.onRestartButtonClick;return i.a.createElement("div",{className:P.a.container},i.a.createElement("div",{className:P.a.form},i.a.createElement("label",null,"Initial sick inhabitants",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("initialSickAgents"),value:t.initialSickAgents,min:0,max:10})," ",i.a.createElement("span",{className:P.a.value},t.initialSickAgents)),i.a.createElement("label",null,"Inhabitants per country ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("agentsPerHouse"),value:t.agentsPerHouse,min:1,max:10})," ",i.a.createElement("span",{className:P.a.value},t.agentsPerHouse)),i.a.createElement("label",null,"Are the borders closed? ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("closedBorders"),value:t.closedBorders,min:0,max:2}),i.a.createElement("br",null)," 0: closed, 1: some open",i.a.createElement("br",null),"2: all open"),i.a.createElement("label",null,"What percentage of citizens wears masks ",i.a.createElement("br",null),i.a.createElement("input",{type:"range",onChange:a("maskWearPercentage"),value:t.maskWearPercentage,min:0,max:100})," ",i.a.createElement("span",{className:P.a.value},t.maskWearPercentage," %"),i.a.createElement("br",null),i.a.createElement("i",null,"this one works in realtime"))),i.a.createElement("div",{className:P.a.footer},i.a.createElement("button",{onClick:n},"Restart the simulation")))}var U,H,F=a(11),K="base",V=(U={},Object(c.a)(U,0,[[1,0]]),Object(c.a)(U,2,[[1,2]]),Object(c.a)(U,1,[[.995,1],[.004,2],[.001,3]]),Object(c.a)(U,3,[[1,3]]),U),X=(H={},Object(c.a)(H,0,[[.3,1],[.7,0]]),Object(c.a)(H,2,[[1,2]]),Object(c.a)(H,1,[[1,1]]),Object(c.a)(H,3,[[1,3]]),H);function Y(e,t){var a=e.location.split("-"),n=Object(l.a)(a,1)[0];if("house"===n&&Math.random()<.9)return"stay";var i,r=t[n];return(i=r)[Math.floor(Math.random()*i.length)]}function z(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];O(e);var t=e.filter((function(e){return"venue"===e.type})),a=t.length;return fetch("https://raw.githubusercontent.com/eusim/coronavirus-simulation/master/data/country_centroids_az8.json").then((function(e){return e.json()})).then((function(e){console.log(JSON.stringify(e));for(var n=0,i=0;i<e.features.length&&n<a;i++)if("Europe"===e.features[i].properties.region_un&&("Country"===e.features[i].properties.type||"Sovereign country"===e.features[i].properties.type)&&"Russia"!==e.features[i].properties.admin){var r=t[n];r.fx=14*e.features[i].geometry.coordinates[0]+300,r.fy=14*-e.features[i].geometry.coordinates[1]+1100,-99==e.features[i].properties.iso_a2&&(e.features[i].properties.iso_a2="XK"),r.venue=e.features[i].properties.iso_a2,n++}})),e}var Z=[{name:"house",members:function(e){return e.agentsPerHouse},isRoot:!0,count:function(e){return e.houses}}],J={house:[K,K,K,"NL",K,K,K,K,K,K,K,"AL",K,K,K,K,K,K,"AX",K,K,K,K,K,K,"AD",K,K,K,K,K,K,"AT",K,K,K,K,K,K,"BE",K,K,K,K,K,K,"BG",K,K,K,K,K,K,"BA",K,K,K,K,K,K,"BY",K,K,K,K,K,K,"CH",K,K,K,K,K,K,"CZ",K,K,K,K,K,K,"DE",K,K,K,K,K,K,"DK",K,K,K,K,K,K,"ES",K,K,K,K,K,K,"EE",K,K,K,K,K,K,"FI",K,K,K,K,K,K,"FR",K,K,K,K,K,K,"GB",K,K,K,K,K,K,"GG",K,K,K,K,K,K,"GR",K,K,K,K,K,K,"HR",K,K,K,K,K,K,"HU",K,K,K,K,K,K,"IM",K,K,K,K,K,K,"IE",K,K,K,K,K,K,"IS",K,K,K,K,K,K,"IT",K,K,K,K,K,K,"JE",K,K,K,K,K,K,"XK",K,K,K,K,K,K,"LI",K,K,K,K,K,K,"LT",K,K,K,K,K,K,"LU",K,K,K,K,K,K,"LV",K,K,K,K,K,K,"MC",K,K,K,K,K,K,"MD",K,K,K,K,K,K,"MK",K,K,K,K,K,K,"MT",K,K,K,K,K,K,"ME",K,K,K,K,K,K,"NL",K,K,K,K,K,K,"NO",K,K,K,K,K,K,"PL",K,K,K,K,K,K,"PT",K,K,K,K,K,K,"RO",K,K,K,K,K,K,"SM",K,K,K,K,K,K,"RS",K,K,K,K,K,K,"SK",K,K,K,K,K,K,"SI",K,K,K,K,K,K,"SE",K,K,K,K,K,K,"UA",K,K,K,K,K,K,"VA",K,K,K]},q={house:[K,K,K,"NL",K,K,K,K,K,K,K,"BE",K,K,K,K,K,K,"DE",K,K,K,K,K,K,"FR",K,K,K,K,K,K,"GB",K,K,K,K,K,K,"IT",K,K,K,K,K,K,"PL",K,K,K,K,K,K,"RO",K,K,K,K,K,K,"SE",K,K,K]},Q={house:[K]},$=J;function ee(e){var t=[],a=[];$=2==e.closedBorders?J:1==e.closedBorders?q:Q,Z.forEach((function(n){for(var i=n.name,r=n.members,o=(n.isRoot,n.count),c=(n.alignment,0),s=0;c<o(e);c++,s++){var l="".concat(i,"-").concat(c);if(t.push({type:"venue",venue:i,id:l,size:1}),r)for(var u=0;u<r(e);u++,s++){var m="".concat(i,"-").concat(c,"-").concat(u);t.push({type:"agent",location:l,base:l,id:m,size:1,state:0}),a.push({source:m,target:l})}}}));var n,i=y(t.filter((function(e){return"agent"===e.type})),e.initialSickAgents),r=Object(F.a)(i);try{for(r.s();!(n=r.n()).done;){n.value.state=1}}catch(o){r.e(o)}finally{r.f()}return{nodes:z(t),edges:a}}function te(e,t,a){Z.find((function(e){return e.isRoot}));return t.filter((function(e){return"agent"===e.type})).forEach((function(e,n){var i,r,o=Y(e,$),c=e.location.split("-");Object(l.a)(c,1)[0]===o||o===K&&e.location===e.base||"stay"===o||3!==e.state&&ae(t,a,e,o===K?t.find((function(t){return t.id===e.base})):(i=e,(r=t.filter((function(e){return e.venue===o})))?r.reduce((function(e,t){return w(i,t)<w(i,e)?t:e})):i))})),{nodes:t=function(e,t,a){var n,i=Object(F.a)(t);try{var r=function(){var i=n.value;if("agent"!==i.type)return"continue";var r=t.find((function(e){var t=e.id;return i.location===t}));a.filter((function(e){return e.target.id===r.id})).map((function(e){return e.source})).forEach((function(t){if(t.id!==i.id){if(1===i.state)if(e.maskWearPercentage>0&&.3===X[t.state][0][0]){var a,n=.3*(1-e.maskWearPercentage/103),r=(a={},Object(c.a)(a,0,[[n,1],[1-n,0]]),Object(c.a)(a,2,[[1,2]]),Object(c.a)(a,1,[[1,1]]),Object(c.a)(a,3,[[1,3]]),a);console.log("susceptible ones"),t.state=S(r[t.state])}else t.state=S(X[t.state]);t.state=S(V[t.state])}}))};for(i.s();!(n=i.n()).done;)r()}catch(o){i.e(o)}finally{i.f()}}(e,t,a),edges:a,state:Object(s.a)({},e,{tick:e.tick+1})}}function ae(e,t,a,n){var i=e.find((function(e){return e.id===a.location}));if(!n.locked&&!i.locked){t.map((function(e){e.source.id===a.id&&(e.target=n)}));a.location=n.id}}var ne={tick:0,agentsPerHouse:9,houses:48,initialSickAgents:5,closedBorders:2,maskWearPercentage:0},ie=ee(ne);var re=function(){var e=Object(n.useState)(ne),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(ie.nodes),u=Object(l.a)(o,2),d=u[0],h=u[1],p=Object(n.useState)(ie.edges),f=Object(l.a)(p,2),v=f[0],b=f[1],E=Object(n.useState)([]),g=Object(l.a)(E,2),k=g[0],_=g[1],y=Object(n.useState)([]),O=Object(l.a)(y,2),S=O[0],j=O[1],w=Object(n.useState)([]),M=Object(l.a)(w,2),A=M[0],C=M[1],I=Object(n.useState)(!0),N=Object(l.a)(I,2),L=N[0],x=N[1],B=Object(n.useRef)(null);return function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){if(!L){var e=te(a,d,v),t=(e.nodes,e.edges,e.state);r(t),_(k.concat(d.filter((function(e){return 1===e.state})).length)),j(S.concat(d.filter((function(e){return 2===e.state})).length)),C(A.concat(d.filter((function(e){return 3===e.state})).length))}}),1e3),Object(n.useEffect)((function(){x(!1)}),[L]),i.a.createElement("div",{className:m.a.container},i.a.createElement("div",{className:m.a.header},i.a.createElement("h3",null,"What happens in Europe if we ... ?"),i.a.createElement("h2",null,"An experiment to analyse how an aerosol droplet virus spreads over Europe")),i.a.createElement("div",{className:m.a.simulation},i.a.createElement("div",{className:m.a.samples},i.a.createElement("span",{className:m.a.sampleSusceptible},"Susceptible"),i.a.createElement("span",{className:m.a.sampleInfected},"Infected"),i.a.createElement("span",{className:m.a.sampleRecovered},"Recovered"),i.a.createElement("span",{className:m.a.sampleDead},"Deceased"),i.a.createElement("i",null,"Click on a country to lock it down (quarantine)")),!L&&i.a.createElement(R,{width:110*Math.round(d.filter((function(e){return"venue"===e.type})).length/6),height:700,tick:a.tick,nodes:d,edges:v,onNodeClick:function(e){return function(){var t=d.find((function(t){var a=t.id;return e===a}));"venue"===t.type&&(t.locked=!t.locked)}},ref:B})),i.a.createElement("div",{className:m.a.section},i.a.createElement("div",{className:m.a.stats},i.a.createElement("h3",null,"Stats"),i.a.createElement("div",{className:m.a.population},"POPULATION: ",d.filter((function(e){return"agent"===e.type})).length," ",i.a.createElement("br",null),i.a.createElement("span",{className:m.a.deceased},"Dead"),": ",d.filter((function(e){return 3===e.state})).length," ",i.a.createElement("br",null),i.a.createElement("span",{className:m.a.recovered},"Recovered"),": ",d.filter((function(e){return 2===e.state})).length," ",i.a.createElement("br",null),i.a.createElement("span",{className:m.a.sick},"Sick"),": ",d.filter((function(e){return 1===e.state})).length," ",i.a.createElement("br",null)),i.a.createElement(T,{width:300,height:270,data:[{color:"red",points:k},{color:"green",points:S},{color:"black",points:A}]})),i.a.createElement("div",{className:m.a.simulationSettings},i.a.createElement("h3",null,"Settings"),i.a.createElement("div",{className:m.a.simulationInfo},"Click on a country on the map to make it quarantined."),i.a.createElement(D,{simulationState:a,onSettingChange:function(e){return function(t){r(Object(s.a)({},a,Object(c.a)({},e,t.target.value)))}},onRestartButtonClick:function(){var e=ee(a),t=e.nodes,n=e.edges;x(!0),h(t),b(n),C([]),j([]),_([]),r(Object(s.a)({},a,{tick:0}))}}))),i.a.createElement("div",{className:m.a.pageInfo},i.a.createElement("ins",{className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-5587173855104127","data-ad-slot":"8487596319"}),i.a.createElement("div",{className:m.a.section},i.a.createElement("h1",null,"What is this?"),i.a.createElement("p",null,"Imagine you are ruling over the European Union and can also influence how a sickness like COVID-19 behaves in a population like the European Union. What would you do if you were chief of the EU? Would you lock it down? Would you set out laws to make people wear masks? Explore your ability to manage the EU by changing the sliders above and watch how the sickness spreads over time. \ud83d\ude0a"),i.a.createElement("p",null,"This simulator is a direct result of the ",i.a.createElement("a",{href:"https://euvsvirus.org/"},"EUvsVirus")," Hackathon 2020 based on this whitepaper: ",i.a.createElement("a",{href:"https://devpost.com/software/political-policies-effect-on-covid-19-spread-inside-the-eu-uamhdv"},"Political policies effect on COVID-19 spread inside the EU"),"."),i.a.createElement("h1",null,"How does it work?"),i.a.createElement("p",null,"This simulator models the spread of COVID-19 amongst the inhabitants of Europe. At the beginning of each simulation, all but a few inhabitants are healthy. The number of inhabitants that are sick at the start of the simulation can be set by adjusting the corresponding slider."),i.a.createElement("p",null,"Once the simulation starts, inhabitants will begin to travel around. While visiting other countries, the healthy inhabitants might get in contact with sick inhabitants and, as a result, risk getting infected with the virus. Once back home, an infected inhabitant might also infect its countries fellow inhabitants."),i.a.createElement("p",null,"As in the real world, once infected, an inhabitant's future can develop in two ways. The first and most bright outcome is recovery from the virus \ud83e\udd73. The second, obviously unwanted outcome, is death \ud83d\ude22."),i.a.createElement("p",null,"Whether an inhabitant gets sick or if an infected inhabitant recovers or dies is based on probabilistic values."),i.a.createElement("p",null,"The probabilistic values are defined in a so-called ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Markov_chain"},"Markov-chain"),". A Markov chain is a stochastic model to describe a sequence of possible events that can occur in the future."),i.a.createElement("p",null,"We're using a Markov graph to define a probabilistic transition. We can simply say that Markov chain is a graph of all the possible state transitions of an individual inhabitant. In our model, we have events such as getting infected, recovering from the virus, or death."),i.a.createElement("h1",null,"I would like to discover more:"),i.a.createElement("p",null,"This is an MIT-licensed open-source project, you can find the source code on ",i.a.createElement("a",{href:"https://github.com/eusim/coronavirus-simulation"},"GitHub"),". Feel free to copy, use or modify it for your own simulations."),i.a.createElement("h1",null,"How to understand more of this:"),i.a.createElement("p",null,"An explanation and all assumptions will be coverd in a blog post soon. We needed to get some sleep first. \ud83d\ude0a For the super curious ",i.a.createElement("a",{href:"https://github.com/computational-medicine/BMED360-2020/blob/6d71a390c7f51f0b427bfe9f33ee503be7634fb8/outbreak-science/README_outbr_sci.md"}," github.com/computational-medicine/BMED360-2020 ")," is a tremendous resource."),i.a.createElement("p",null,"Created by",i.a.createElement("br",null),"~ ",i.a.createElement("a",{href:"https://twitter.com/rscircus"},"Roland Siegbert"),", ",i.a.createElement("a",{href:"https://twitter.com/michel_mke"},"Michel Make")," and with special thanks to ",i.a.createElement("a",{href:"https://twitter.com/fthrkl"},"Fatih Erikli"),"."),i.a.createElement("p",{style:{marginBottom:"4em"}},"Stay safe! ",i.a.createElement("br",null)," "))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},3:function(e,t,a){e.exports={container:"App_container__1MQN3",header:"App_header__3ZZ1n",simulationContainer:"App_simulationContainer__23iFm",simulation:"App_simulation__1Y9Gr",section:"App_section__1OL6S",recovered:"App_recovered__OUIO_",sick:"App_sick__2yy5f",deceased:"App_deceased__2LBtz",simulationSettings:"App_simulationSettings__txA-R",stats:"App_stats__2fMs7",population:"App_population__3MVPW",simulationInfo:"App_simulationInfo__1KRFk",pageInfo:"App_pageInfo__2E9cf",samples:"App_samples__2e7V-",sampleSusceptible:"App_sampleSusceptible__2olEO",sampleInfected:"App_sampleInfected__1l1Pi",sampleRecovered:"App_sampleRecovered__33NzV",sampleDead:"App_sampleDead__1RLgZ"}},5:function(e,t,a){e.exports={node:"Graph_node__2LUmU",venue:"Graph_venue__1yeeL",hospital:"Graph_hospital__2-HM5",teatr:"Graph_teatr__3zcOH",station:"Graph_station__3oWAU",supermarket:"Graph_supermarket__x5o1m",susceptible:"Graph_susceptible__2UC5Q",dead:"Graph_dead__aGtk-",sick:"Graph_sick__2ig0f",recovered:"Graph_recovered__3crc2",lockedSymbol:"Graph_lockedSymbol__1OEeZ"}},7:function(e,t,a){e.exports={container:"SimulationSettings_container__vY4rL",form:"SimulationSettings_form__E6YUW",value:"SimulationSettings_value__1sPd7",text:"SimulationSettings_text__1TWBo",footer:"SimulationSettings_footer__1GRqa"}}},[[23,1,2]]]);
//# sourceMappingURL=main.d3ee6b9d.chunk.js.map