(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a.p+"static/media/notebook.edce17b3.svg"},,,,,,,function(e,t,a){e.exports=a.p+"static/media/star.a406bff1.svg"},function(e,t,a){e.exports=a.p+"static/media/fast-forward.ff5b4c4e.svg"},function(e){e.exports={lines:["Make a toasted sandwich","Drink some water (maybe put some fruit in it)","Do your washing (fold it too if your feeling good)","Write in your journal","Look at your calendar and think about the week ahead","Watch a litte bit of a tv show or movie ","Water some plants","Call or online chat with someone you haven't seen in ages (preferably with someone who doesn't smoke!) ","Go for a walk around the block","Read a book or magazine - you deserve some me time!","Go somewhere new you've been curious about","Go for a random swim (pools, beach, puddle - you decide) ","Colour co-ordinate your wardrobe","Dry some flowers","Cook something difficult (of you fail make it again tomorrow!)","Decorate a neglected part of your whare","Take some interesting photos/selfies ","Make a moodboard of pictures that inspire you","Read your star sign","Listen to some music (maybe even find a quiet place and sing along) ","Check on upcoming concerts in your city","Sunbathe (or moon bathe)","Check the maramataka calendar and what kind of moon it is","Dance for 10 minutes","Connect with someone you don't know but want to know","Go climb a tree","Get some old clothes together and donate them","Sing a waiata","Learn a karakia you don't know","Start a wh\u0101nau chat thread to reconnect with everyone","Do some grooming you've been delaying","Sort out your wardrobe (or make-up, shoes, kid's toys)","Make a hot drink and have some quiet time","Learn a language for 5 minutes a day - korero M\u0101ori koe?","Clean the windows","Go to the library","Renovate a part of your whare","Wash your car (or someone else's)","Make your bed (or some else's)","Light a candle","Practice learning an instrument","Play a video game","Look online for other stories about other people quitting","Make some art and give it to a friend","Preserve some fruit","Go fishing!","Watch kapa haka videos","Get $1 and open a savings account","Write someone a letter and post it","Make a physical goal and practice it every day","Practice juggling","Do a drawing of someone you love","Take a blanket somewhere pretty and enjoy the view","Do some chopping and meal prep for you or your wh\u0101nau","Sew up something that needs mending","Do a home-made face mask"]}},,,function(e,t,a){e.exports=a(76)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){var n={"./KUINI_1.jpg":60,"./KUINI_2.jpg":61,"./KUINI_3.jpg":62,"./KUINI_4.jpg":63,"./KUINI_5.jpg":64,"./KUINI_6.jpg":65,"./KUINI_K.png":66};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=59},function(e,t,a){e.exports=a.p+"static/media/KUINI_1.4ec9ba7f.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_2.09bf3fa1.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_3.20f05a77.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_4.86ba644d.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_5.3436bc8e.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_6.5cc6fadf.jpg"},function(e,t,a){e.exports=a.p+"static/media/KUINI_K.b1cc9121.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),s=(a(37),a(38),a(13)),c=a(16),l=a(11),u=a(2),m=a(3),d=a(6),h=a(4),p=a(5),f=a(15),g=a.n(f),v=a(7),b=a(26),y=a.n(b),k=(a(58),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getAvatar=a.getAvatar.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getAvatar",value:function(e){var t="KUINI_K.png";return/^KUINI_[1-6]$/g.test(e)&&(t="".concat(e,".jpg")),a(59)("./".concat(t))}},{key:"render",value:function(){this.getAvatar(this.props.avatar);return o.a.createElement("header",{className:"Header"},o.a.createElement("div",{className:"Header-top-bar"},this.props.title),o.a.createElement("div",{className:"Header-img",style:{backgroundImage:"url(".concat(this.getAvatar(this.props.avatar),")")}}))}}]),t}(o.a.Component)),w=(a(67),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).getTitle=a.getTitle.bind(Object(v.a)(a)),a.getAvatar=a.getAvatar.bind(Object(v.a)(a)),a.state={},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getTitle",value:function(e){switch(e){case"things":return"101+ Things to Do...";case"rant":return"Rant";default:return"Are you lost?"}}},{key:"getAvatar",value:function(e){return y.a.parse(e.search).avatar}},{key:"render",value:function(){return console.log("Container Props:",this.props),o.a.createElement("div",{className:"Container"},o.a.createElement(s.Helmet,{title:this.props.title||"Unknown"}),o.a.createElement(k,{title:this.props.title||"Unknown",avatar:this.getAvatar(this.props.location)}),o.a.createElement("div",{className:"Container-body"},this.props.children))}}]),t}(o.a.Component)),j=(a(68),a(69),a(27)),E=a.n(j),O=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"TopFive-container"},o.a.createElement("div",{className:"TopFive-header"},o.a.createElement("div",{className:"TopFive-title"},"YOUR TOP FIVE"),o.a.createElement("div",{className:"TopFive-icon"},o.a.createElement("img",{className:"TopFive-star",src:E.a,alt:"Star"}))),o.a.createElement("div",{className:"TopFive-list"},o.a.createElement("ul",null,this.props.data.map(function(e,t){return o.a.createElement("li",{key:t},e)}))))}}]),t}(o.a.Component),N=(a(70),a(28)),I=a.n(N),C=(a(71),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"KuiniButton",onClick:this.props.action},o.a.createElement("img",{src:this.props.image,className:"KuiniButton-icon",alt:"More"}),o.a.createElement("div",{className:"KuiniButton-text"},this.props.title))}}]),t}(o.a.Component)),K=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={length:5},a.increaseLength=a.increaseLength.bind(Object(v.a)(a)),a.renderFooter=a.renderFooter.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"increaseLength",value:function(){this.setState({length:this.state.length+5})}},{key:"renderFooter",value:function(){return this.state.length>=this.props.data.length?o.a.createElement("div",{className:"OtherIdeas-footer-end"},"End of List"):o.a.createElement(C,{title:"More...",image:I.a,action:this.increaseLength})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"OtherIdeas-list"},o.a.createElement("ul",null,g.a.slice(this.props.data,0,this.state.length).map(function(e,t){return o.a.createElement("li",{key:t},e)}))),o.a.createElement("div",{className:"OtherIdeas-footer"},this.renderFooter()))}}]),t}(o.a.Component),T=a(29),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=a.getTopFiveData(),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"getTopFiveData",value:function(){var e=g.a.shuffle(T.lines);return{top:g.a.slice(e,0,5),data:e,length:5}}},{key:"render",value:function(){return o.a.createElement(w,Object.assign({title:"101+ Things to Do..."},this.props),o.a.createElement("div",{className:"Things-container"},o.a.createElement("div",{className:"Things-header"},"Get out and about or try something new. It\u2019s important to keep yourself busy and find new ways to deal with daily stresses when you quit."),o.a.createElement(O,{data:this.state.top}),o.a.createElement(K,{data:this.state.data})))}}]),t}(o.a.Component),x=(a(72),a(20)),D=a.n(x),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={rant:""},a.closeWindow=a.closeWindow.bind(Object(v.a)(a)),a.handleChange=a.handleChange.bind(Object(v.a)(a)),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({rant:e.target.value})}},{key:"closeWindow",value:function(){var e=this;window.MessengerExtensions.requestCloseBrowser(function(e){console.log("Yay")},function(t){console.error(t),e.setState({rant:""})})}},{key:"render",value:function(){return o.a.createElement(w,Object.assign({title:"Rant..."},this.props),o.a.createElement(s.Helmet,{title:"Kete | Rant"}),o.a.createElement("div",{className:"Rant"},o.a.createElement("section",{className:"Rant-title"},o.a.createElement("div",{className:"Rant-description"},"This is your top-secret place to rant, vent, offload and clear your whakaaro (thoughts)."),o.a.createElement("img",{src:D.a,className:"Rant-description-image",alt:"Notebook"})),o.a.createElement("section",{className:"Rant-input-container"},o.a.createElement("textarea",{className:"Rant-input",value:this.state.rant,onChange:this.handleChange,type:"text",placeholder:"Click \u201cDone\u201d when finished to permanently delete. If you want to save, copy and paste your \u2018rants\u2019 elsewhere."})),o.a.createElement("section",{className:"Rant-footer"},o.a.createElement("div",null,o.a.createElement(C,{title:"Done...",image:D.a,action:this.closeWindow})),o.a.createElement("div",{className:"Rant-footer-text"},"Click \u201cDone\u201d when finished to permanently delete. If you want to save, copy and paste your \u2018rants\u2019 elsewhere."))))}}]),t}(o.a.Component),R=(a(73),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement(w,Object.assign({title:"Need help?"},this.props),o.a.createElement("div",{className:"Lost"},"Why don't you try one of these?",o.a.createElement(c.b,{to:"/rant"},o.a.createElement("button",null,"Rant")),o.a.createElement(c.b,{to:"/distractions"},o.a.createElement("button",null,"101+ Things to do"))))}}]),t}(o.a.Component));var F=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(s.Helmet,{title:"Test"},o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans|Sree+Krushnadevaraya|Swanky+and+Moo+Moo&display=swap",rel:"stylesheet"})),o.a.createElement(c.a,{basename:"/Kete"},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/rant",component:_}),o.a.createElement(l.a,{path:"/distractions",component:U}),o.a.createElement(l.a,{component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[32,1,2]]]);
//# sourceMappingURL=main.a9ba2e9f.chunk.js.map