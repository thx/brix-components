define("components/footer",["jquery","underscore","handlebars","brix/base"],function(o,t,n,e){return function(o){function t(e){if(n[e])return n[e].exports;var i=n[e]={exports:{},id:e,loaded:!1};return o[e].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=o,t.c=n,t.p="",t(0)}([function(o,t,n){var e,i;e=[n(1),n(2),n(3),n(4)],i=function(o,t,n,e){function i(){}return t.extend(i.prototype,e.prototype,{options:{mode:"normal"},render:function(){var t=this;this.options.type&&(this.options.mode={front:"normal",back:"simple"}[this.options.type]);var e,i,r,a="simple"===this.options.mode,s=/alimama\.(com|net)/i,p=/tanx\.(com|net)/i,c=/taobao\.(com|net)/i;s.test(window.location.href)?e=!0:c.test(window.location.href)?i=!0:p.test(window.location.href)?r=!0:e=!0,o.ajax({url:"http://mo.m.taobao.com/union/jsonp/footer",dataType:"jsonp",jsonp:"callback",success:function(s){o(t.element).html(n.compile(s.html)({simple:a,alimama:e,taobao:i,tanx:r}))}})}}),i}.apply(t,e),!(void 0!==i&&(o.exports=i))},function(t,n){t.exports=o},function(o,n){o.exports=t},function(o,t){o.exports=n},function(o,t){o.exports=e}])});