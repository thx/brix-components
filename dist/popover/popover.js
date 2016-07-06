define("components/popover",["jquery","underscore","brix/base"],function(t,e,o){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var i,n;i=[o(1),o(2),o(3),o(4),o(5)],n=function(t,e,o,i,n){function s(){}function r(e,o,i,n){var s,r,h=t(e),p=h.offset(),c=p.left,f=p.top,u=h.outerWidth(),d=h.outerHeight(),m=t(o).show(),v=m.outerWidth(),w=m.outerHeight(),g=t(o).find(".arrow"),$=g.outerWidth(),b=g.outerHeight();if(l.test(i)!==l.test(n)&&a.test(i)!==a.test(n))switch(n){case"top":case"bottom":w>d&&(r=f+d/2-b/2);break;case"left":case"right":v>u&&(s=c+u/2-$/2)}return{left:s,top:r}}e.extend(s.prototype,o.prototype,{options:{placement:"right",align:"",offset:{},width:"auto",title:"",content:"",delay:100},init:function(){this.options.css&&window.require(["css!"+this.options.css])},render:function(){var o=this;this.$element=t(this.element),this.$relatedElement=t(e.template(this.options.template||n)(this.options)).insertAfter(this.$element),this.$element.hover(function(){o.show()},function(){o.hide()}),o.$relatedElement.hover(function(){clearTimeout(o._timer)},function(){clearTimeout(o._timer),o.$relatedElement.hide()})},show:function(){clearTimeout(this._timer),this.$relatedElement.show().css({width:this.options.width,"max-width":this.options.width});var t=i(this.$element,this.$relatedElement,this.options.placement,this.options.align),e=parseInt(this.$relatedElement.css("margin-left"),10)||0,o=parseInt(this.$relatedElement.css("margin-top"),10)||0;if(this.$relatedElement.offset({left:t.left+e+(this.options.offset.left||0),top:t.top+o+(this.options.offset.top||0)}),this.options.align){var n=this.$relatedElement.find(".arrow");n.is(":visible")&&n.offset(r(this.$element,this.$relatedElement,this.options.placement,this.options.align))}},hide:function(){var t=this;clearTimeout(this._timer),this._timer=setTimeout(function(){t.$relatedElement.hide()},this.options.delay)},title:function(t){return void 0===t||null===t?this.options.title:(this.options.title=t,this.$relatedElement.find(".popover-title").html(t),this)},content:function(t){return void 0===t||null===t?this.options.content:(this.options.content=t,this.$relatedElement.find(".popover-content").html(t),this)},destroy:function(){this.$element.off("mouseenter mouseleave"),this.$relatedElement.off("mouseenter mouseleave").remove()}});var l=/top|bottom/,a=/left|right/;return s}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e,o){var i,n;i=[o(1)],n=function(t){function e(e,i,n,l){var a=t(e);if(!a.length)return o(i);var h=a.offset(),p=h.left,c=h.top,f=a.outerWidth(),u=a.outerHeight(),d=t(i),m="none"!==d.css("display");d.show();var v=d.outerWidth(),w=d.outerHeight();m||d.hide();var g,$,b=f/2-v/2,x=u/2-w/2;switch(n){case"top":g=p+b,$=c-w;break;case"bottom":g=p+b,$=c+u;break;case"left":g=p-v,$=c+x;break;case"right":g=p+f,$=c+x}if(s.test(n)!==s.test(l)&&r.test(n)!==r.test(l))switch(l){case"top":$=c;break;case"bottom":$=c+u-w;break;case"left":g=p;break;case"right":g=p+f-v}return{left:g,top:$}}function o(e,o){var i,n;if(o)i=parseFloat(e,12),n=parseFloat(o,12);else{var s=t(e),r="none"!==s.css("display");s.show(),i=s.outerWidth(),n=s.outerHeight(),r||s.hide()}var l=t(window),a=l.width(),h=l.height(),p=l.scrollLeft(),c=l.scrollTop();return{left:a/2-i/2+p,top:h/2-n/2+c}}function i(e,o,i){var n=t(e),s="none"!==n.css("display");n.show();var r=n.outerWidth(),l=n.outerHeight();s||n.hide();var a={opacity:0,left:o.left,top:o.top};switch(i){case"top":a.top=a.top-.5*l;break;case"bottom":a.top=a.top+.5*l;break;case"left":a.left=a.left-.5*r;break;case"right":default:a.left=a.left+.5*r}return a}function n(t,e){return{opacity:1,left:e.left,top:e.top}}var s=/top|bottom/,r=/left|right/;return e.center=o,e.start=i,e.end=n,e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,o){var i;i=function(){return'<div class="popover <%= placement %>">\n    <div class="arrow"></div>\n    <div class="popover-title <%= title ? \'\' : \'hide\' %>"><%= title %></div>\n    <div class="popover-content"><%= content %></div>\n</div>'}.call(e,o,e,t),!(void 0!==i&&(t.exports=i))}])});