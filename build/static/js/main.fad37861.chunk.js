(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},111:function(e,t,a){e.exports=a(213)},116:function(e,t,a){},135:function(e,t,a){},213:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(9),r=a.n(c),i=(a(116),a(214),a(57)),s=(a(123),a(17)),o=(a(59),a(28)),m=(a(127),a(11)),u=(a(128),a(106)),h=a(97),g=a(98),p=a(107),d=a(99),E=a(108),w=(a(215),a(76)),y=a(100),f=a.n(y),v=[{title:"\u6587\u7ae0-2",content:"amh \u63d0\u4f9b\u81ea\u52a8\u5907\u4efd\u5de5\u5177\uff0c\u5229\u7528\u8be5\u5de5\u5177\u8fdb\u884c\u7acb\u5373\u5907\u4efd\uff0c\u4f1a\u540c\u65f6\u5907\u4efd\u5230\u670d\u52a1\u5668\u548c\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u6211\u914d\u7f6e\u7684\u662f\u4e03\u725b\u4e91\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u5219\u9700\u8981\u4e0b\u8f7d\u5230\u81ea\u5df1\u7535\u8111\u4e0a\uff0c\u7136\u540e\u4e0a\u4f20\u5230\u91cd\u88c5\u540e\u7684\u7cfb\u7edf\u4e0a\u53bb\u3002",image:"http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg",question:"\u95ee\u9898\u95ee\u9898\u95ee\u9898"},{title:"\u6587\u7ae0-3",content:"amh \u63d0\u4f9b\u81ea\u52a8\u5907\u4efd\u5de5\u5177\uff0c\u5229\u7528\u8be5\u5de5\u5177\u8fdb\u884c\u7acb\u5373\u5907\u4efd\uff0c\u4f1a\u540c\u65f6\u5907\u4efd\u5230\u670d\u52a1\u5668\u548c\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u6211\u914d\u7f6e\u7684\u662f\u4e03\u725b\u4e91\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u5219\u9700\u8981\u4e0b\u8f7d\u5230\u81ea\u5df1\u7535\u8111\u4e0a\uff0c\u7136\u540e\u4e0a\u4f20\u5230\u91cd\u88c5\u540e\u7684\u7cfb\u7edf\u4e0a\u53bb\u3002",image:"http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg",question:"\u95ee\u9898\u95ee\u9898\u95ee\u9898"},{title:"\u6587\u7ae0-1",content:"amh \u63d0\u4f9b\u81ea\u52a8\u5907\u4efd\u5de5\u5177\uff0c\u5229\u7528\u8be5\u5de5\u5177\u8fdb\u884c\u7acb\u5373\u5907\u4efd\uff0c\u4f1a\u540c\u65f6\u5907\u4efd\u5230\u670d\u52a1\u5668\u548c\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u6211\u914d\u7f6e\u7684\u662f\u4e03\u725b\u4e91\u3002\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\uff0c\u5219\u9700\u8981\u4e0b\u8f7d\u5230\u81ea\u5df1\u7535\u8111\u4e0a\uff0c\u7136\u540e\u4e0a\u4f20\u5230\u91cd\u88c5\u540e\u7684\u7cfb\u7edf\u4e0a\u53bb\u3002",image:"http://houser.oss-cn-shanghai.aliyuncs.com/houserpage/houser.jpg",question:"\u95ee\u9898\u95ee\u9898\u95ee\u9898"}],A=(a(135),w.a.Option),b=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:v,resultImg:f.a,selectArticleIndex:0,selectText:"",question:{title:"",answer:"",question:"",image:null}},a.listenMouseSelect=function(e){document.getElementById(e).onmouseup=function(){a.setState({selectText:window.getSelection().toString()})}},a.handleSelectArticle=function(e){a.setState({selectArticleIndex:e})},a.addAnswer=function(){var e=a.state.selectText;u.a.confirm({title:"\u6dfb\u52a0\u7b54\u6848",content:l.a.createElement("p",null,"\u4f60\u9009\u62e9\u7684\u7b54\u6848\u4e3a:",l.a.createElement("br",null),l.a.createElement("b",null,e))})},a.handleGenerate=function(){var e=a.state,t=e.selectArticleIndex,n=e.selectText;a.setState({question:{title:v[t].title,answer:n,question:v[t].question,image:v[t].image}})},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.listenMouseSelect("article")}},{key:"render",value:function(){var e=this.state,t=e.resultImg,a=e.data,n=e.selectArticleIndex,c=e.selectText,r=e.question;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{gutter:16},l.a.createElement(m.a,{span:14},l.a.createElement(s.a,{gutter:16,style:{marginBottom:16}},l.a.createElement(m.a,{span:18},l.a.createElement(w.a,{className:"article_select",defaultValue:0,placeholder:"\u8bf7\u9009\u62e9\u6587\u7ae0",onChange:this.handleSelectArticle},a.map(function(e,t){return l.a.createElement(A,{value:t,key:e.i},e.title)}))),l.a.createElement(m.a,{span:6},l.a.createElement(o.a,{type:"primary",style:{width:"100%"},onClick:this.addAnswer},"\u7b54\u6848"))),l.a.createElement(s.a,{gutter:16,style:{marginBottom:16}},l.a.createElement(m.a,{span:18},l.a.createElement(i.a,{style:{height:250},id:"article"},a[n].content)),l.a.createElement(m.a,{span:6},l.a.createElement(i.a,{style:{height:250}},c))),l.a.createElement(s.a,{style:{marginBottom:16}},l.a.createElement(o.a,{type:"danger",style:{width:"100%"},onClick:this.handleGenerate},"\u8fd0\u884c\u7cfb\u7edf\u751f\u6210\u95ee\u9898")),l.a.createElement(s.a,null,l.a.createElement(i.a,{title:"\u6587\u7ae0: ".concat(r.title)},l.a.createElement("p",null,l.a.createElement("b",null,"\u7b54\u6848\uff1a")," ",r.answer),l.a.createElement("p",null,l.a.createElement("b",null,"\u95ee\u9898\uff1a")," ",r.question)))),l.a.createElement(m.a,{span:10},r.image?l.a.createElement("img",{src:r.image,style:{width:"100%"},alt:""}):l.a.createElement("img",{src:r.image||t,className:"App-logo",alt:""})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,2,1]]]);
//# sourceMappingURL=main.fad37861.chunk.js.map