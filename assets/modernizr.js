/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssgradients-flexbox-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,i,a;for(var f in w)if(w.hasOwnProperty(f)){if(e=[],n=w[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=o:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=o),y.push((o?"":"no-")+a.join("-"))}}function s(e){var n=C.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?C.className.baseVal=n:C.className=n)}function i(e,n){return!!~(""+e).indexOf(n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?l(o,t||n):o);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=a(_?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var s,i,f,l,u="modernizr",d=a("div"),p=c();if(parseInt(r,10))for(;r--;)f=a("div"),f.id=o?o[r]:u+(r+1),d.appendChild(f);return s=a("style"),s.type="text/css",s.id="s"+u,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),i=t(d,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=l,C.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function g(e,n,o,s){function l(){d&&(delete z.style,delete z.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var u=m(e,o);if(!r(u,"undefined"))return u}for(var d,c,p,g,h,v=["modernizr","tspan","samp"];!z.style&&v.length;)d=!0,z.modElem=a(v.shift()),z.style=z.modElem.style;for(p=e.length,c=0;p>c;c++)if(g=e[c],h=z.style[g],i(g,"-")&&(g=f(g)),z.style[g]!==t){if(s||r(o,"undefined"))return l(),"pfx"==n?g:!0;try{z.style[g]=o}catch(y){}if(z.style[g]!=h)return l(),"pfx"==n?g:!0}return l(),!1}function h(e,n,t,o,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return r(n,"string")||r(n,"undefined")?g(a,n,o,s):(a=(e+" "+P.join(i+" ")+i).split(" "),u(a,n,t))}function v(e,n,r){return h(e,t,t,n,r)}var y=[],w=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var C=n.documentElement,_="svg"===C.nodeName.toLowerCase(),b="Moz O ms Webkit",S=x._config.usePrefixes?b.split(" "):[];x._cssomPrefixes=S;var P=x._config.usePrefixes?b.toLowerCase().split(" "):[];x._domPrefixes=P;var k={elem:a("modernizr")};Modernizr._q.push(function(){delete k.elem});var z={style:k.elem.style};Modernizr._q.unshift(function(){delete z.style}),x.testAllProps=h,x.testAllProps=v,Modernizr.addTest("flexbox",v("flexBasis","1px",!0));var E=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=E,Modernizr.addTest("cssgradients",function(){for(var e,n="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",o=0,s=E.length-1;s>o;o++)e=0===o?"to ":"",r+=n+E[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=n+"-webkit-"+t);var i=a("a"),f=i.style;return f.cssText=r,(""+f.backgroundImage).indexOf("gradient")>-1}),o(),s(y),delete x.addTest,delete x.addAsyncTest;for(var T=0;T<Modernizr._q.length;T++)Modernizr._q[T]();e.Modernizr=Modernizr}(window,document);