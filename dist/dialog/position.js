define("components/dialog/position",["jquery"],function(t){return function(t){function e(r){if(o[r])return o[r].exports;var a=o[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var r,a;r=[o(1)],a=function(t){function e(e,r,a,n){var c=t(e);if(!c.length)return o(r);var p=c.offset(),f=p.left,l=p.top,u=c.outerWidth(),h=c.outerHeight(),d=t(r),v="none"!==d.css("display");d.show();var b=d.outerWidth(),g=d.outerHeight();v||d.hide();var k,w,x=u/2-b/2,y=h/2-g/2;switch(a){case"top":k=f+x,w=l-g;break;case"bottom":k=f+x,w=l+h;break;case"left":k=f-b,w=l+y;break;case"right":k=f+u,w=l+y}if(s.test(a)!==s.test(n)&&i.test(a)!==i.test(n))switch(n){case"top":w=l;break;case"bottom":w=l+h-g;break;case"left":k=f;break;case"right":k=f+u-b}return{left:k,top:w}}function o(e,o){var r,a;if(o)r=parseFloat(e,12),a=parseFloat(o,12);else{var s=t(e),i="none"!==s.css("display");s.show(),r=s.outerWidth(),a=s.outerHeight(),i||s.hide()}var n=t(window),c=n.width(),p=n.height(),f=n.scrollLeft(),l=n.scrollTop();return{left:c/2-r/2+f,top:p/2-a/2+l}}function r(e,o,r){var a=t(e),s="none"!==a.css("display");a.show();var i=a.outerWidth(),n=a.outerHeight();s||a.hide();var c={opacity:0,left:o.left,top:o.top};switch(r){case"top":c.top=c.top-.5*n;break;case"bottom":c.top=c.top+.5*n;break;case"left":c.left=c.left-.5*i;break;case"right":default:c.left=c.left+.5*i}return c}function a(t,e){return{opacity:1,left:e.left,top:e.top}}var s=/top|bottom/,i=/left|right/;return e.center=o,e.start=r,e.end=a,e}.apply(e,r),!(void 0!==a&&(t.exports=a))},function(e,o){e.exports=t}])});