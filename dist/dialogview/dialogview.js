define("components/dialogview",["underscore","brix/base","magix","jquery","components/base","brix/event"],function(t,e,o,i,n,s){return function(t){function e(i){if(o[i])return o[i].exports;var n=o[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var o={};return e.m=t,e.c=o,e.p="",e(0)}([function(t,e,o){var i,n;i=[o(1),o(2),o(3),o(4)],n=function(t,e,o,i){function n(){arguments.length>1&&(this.options=t.extend({},this.options,arguments[0]),this.options["view-name"]=arguments[1],this.options["view-options"]=arguments[2],this.init(),this.render())}var s="vf-dialog",l='<div class="dialog-body"><div id="'+s+'" mx-vframe="true"></div></div>';t.extend(n.prototype,e.prototype,{options:{},init:function(){this.options.content||(this.options.content=l),this.options.view||(this.options.view={name:this.options["view-name"],options:this.options["view-options"]}),this.dialog&&this.dialog.destroy(),this.dialog=new i(this.options)},render:function(){},fill:function(){if(this.options.hostView)return void this.options.hostView.owner.mountVframe(s,this.options.view.name,this.options.view.options);var t=o.VOM.get(s)||new o.Vframe(s);t.unmountVframe(s),t.mountVframe(s,this.options.view.name,this.options.view.options)},open:function(){this.dialog.open(),this.fill()},close:function(){this.dialog.close();var t=o.VOM.get(s);t&&t.unmountVframe(s)},destroy:function(){this.close(),this.dialog.destroy()}});var a={open:function(t,e,o){this.dialog&&this.dialog.destroy(),this.dialog=new n(t,e,o),this.dialog.open(),t.hostView&&t.hostView.manage(this.dialog)},close:function(){this.dialog&&this.dialog.destroy()}};return a}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e,o){var i,n;i=[o(5),o(1),o(6),o(7),o(8),o(9)],n=function(t,e,o,i,n,s){function l(){arguments.length&&(this.options=e.extend({},this.options,arguments[0]),this.init(),this.render()),c.push(this)}var a=150,r="swing",h=".dialog",d=[],c=[],p={PENDING:"pending",OPENED:"opened",CLOSED:"closed"};return e.extend(l.prototype,o.prototype,{options:{placement:"right",align:"top",left:void 0,top:void 0,width:"auto",height:"auto",offset:{left:0,top:0},className:"",content:"",closable:!0,movable:!1,modal:!1,singleton:!0},state:p.PENDING,init:function(){this.$element=t(this.element||this.options.element),this.$manager=new i("bx-"),this.options.css&&e.isString(this.options.css)&&window.require(["css!"+this.options.css]),this.options["class"]&&(this.options.className=this.options["class"]),(""+this.options.content).indexOf("<")===-1&&(this.options.content='<div class="dialog-body">'+this.options.content+"<div>")},render:function(){this.fill(),this.$manager.delegate(this.$element,this)},destroy:function(){this.close(),c=e.without(c,this);var o="keyup.dialog_autohide_"+this.clientId;d.length||t(document.body).off(o),this.$manager.undelegate(this.$element),this.$manager.undelegate(this.$relatedElement),this.$relatedElement.remove(),this.$relatedElement=null,this.$backdropElement=null},fill:function(){var o=e.template(s)(this.options);return this.$relatedElement||(this.$relatedElement=t(o).appendTo(document.body).hide()),this.options.singleton||this.$relatedElement.removeClass("dialog-singleton"),this.$relatedElement.find(".dialog-content").html(this.options.content),this.$relatedElement.css({width:this.options.width,height:this.options.height}),this.$backdropElement=t(".dialog-backdrop"),this.$backdropElement.length||(this.$backdropElement=t('<div class="dialog-backdrop"></div>').hide().appendTo(document.body)),this.options.modal,this.options.className&&this.$relatedElement.addClass(this.options.className),this.options.css&&e.isObject(this.options.css)&&this.$relatedElement.css(this.options.css),this.$manager.delegate(this.$relatedElement,this),this},open:function(){!this.element&&this.options.element&&this.options.element!==this.$element[0]&&(this.$element=t(this.options.element)),this.options.singleton&&e.each(d,function(t){t.options.singleton&&t.close()}),this.fill(),this._zIndex("open"),this._topmost(),this._move(),this.options.modal&&(t(document.body).addClass("modal-open"),this.$backdropElement.show().css("z-index",+this.$relatedElement.css("z-index")-1));var o=this._offset();return this.$relatedElement.show().stop().css(n.start(this.$relatedElement,o)).animate(n.end(this.$relatedElement,o),a,r),this._autoHide(),d.push(this),this.trigger("open"+h),this.state=p.OPENED,this},close:function(){if(!this.$relatedElement||!this.$relatedElement.length)return this;if(this.state===p.CLOSED)return this;var o=t.Event("close"+h);if(this.trigger(o),!o.isDefaultPrevented()){var i=this,s=this._offset();if(this.$relatedElement.stop().animate(n.start(this.$relatedElement,s),a,r,function(){i.$relatedElement&&i.$relatedElement.hide()}),d=e.without(d,this),this.options.modal){var l=e.filter(d,function(t){if(t.options.modal)return t}).length;l||(t(document.body).removeClass("modal-open"),this.$backdropElement.hide())}return this._zIndex("close"),this.state=p.CLOSED,this}},_offset:function(){var t=void 0!==this.options.left&&void 0!==this.options.top?{left:this.options.left,top:this.options.top}:n(this.$element,this.$relatedElement,this.options.placement,this.options.align);return t={left:t.left+(this.options.offset.left||0),top:t.top+(this.options.offset.top||0)}},_autoHide:function(){var e="keyup.dialog_autohide_"+this.clientId;return t(document.body).off(e).on(e,function(t){if(27===t.keyCode){var e=d[d.length-1];e&&e.options.closable&&e.close()}}),this},_zIndex:function(t){if(d.length){var o,i=e.max(d,function(t){return+t.$relatedElement.css("z-index")}),n=+i.$relatedElement.css("z-index");switch(t){case"open":if(o=this,o===i)return;break;case"close":o=d[d.length-1]}return o.$backdropElement&&o.$backdropElement.css("z-index",n+1),o.$relatedElement.css("z-index",n+2),this}},_topmost:function(){var t=this,e="mousedown.dialog_topmost_"+this.clientId;return this.$relatedElement.off(e).on(e,function(){t._zIndex("open"),d.push(t)}),this},_move:function(){if(!this.options.movable)return this;var e=this,o="mousedown.dialog_move_"+this.clientId,i="mousemove.dialog_move_"+this.clientId,n="mouseup.dialog_move_"+this.clientId,s=t(document.body),l=this.$relatedElement.find(".dialog-header");return l.addClass("cursor-move"),l.off(o).on(o,function(t){var o=l.offset(),a={left:t.pageX-o.left,top:t.pageY-o.top};s.on(i,function(t){return e.$relatedElement.offset({left:t.pageX-a.left,top:t.pageY-a.top}),!1}),s.on(n,function(){return s.off(i),s.off(n),!1})}),this}}),l.open=function(t){return new l(t).open()},l.close=function(){var t=d.pop();t&&t.close()},l.closeAll=function(){return e.each(d,function(t){t.close()}),this},l.destroy=function(){return e.each(c,function(t){t.destroy()}),this},l}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e){t.exports=i},function(t,e){t.exports=n},function(t,e){t.exports=s},function(t,e,o){var i,n;i=[o(5)],n=function(t){function e(e,i,n,a){var r=t(e);if(!r.length)return o(i);var h=r.offset(),d=h.left,c=h.top,p=r.outerWidth(),f=r.outerHeight(),u=t(i),m="none"!==u.css("display");u.show();var g=u.outerWidth(),v=u.outerHeight();m||u.hide();var b,$,E=p/2-g/2,w=f/2-v/2;switch(n){case"top":b=d+E,$=c-v;break;case"bottom":b=d+E,$=c+f;break;case"left":b=d-g,$=c+w;break;case"right":b=d+p,$=c+w}if(s.test(n)!==s.test(a)&&l.test(n)!==l.test(a))switch(a){case"top":$=c;break;case"bottom":$=c+f-v;break;case"left":b=d;break;case"right":b=d+p-g}return{left:b,top:$}}function o(e,o){var i,n;if(o)i=parseFloat(e,12),n=parseFloat(o,12);else{var s=t(e),l="none"!==s.css("display");s.show(),i=s.outerWidth(),n=s.outerHeight(),l||s.hide()}var a=t(window),r=a.width(),h=a.height(),d=a.scrollLeft(),c=a.scrollTop();return{left:r/2-i/2+d,top:h/2-n/2+c}}function i(e,o,i){var n=t(e),s="none"!==n.css("display");n.show();var l=n.outerWidth(),a=n.outerHeight();s||n.hide();var r={opacity:0,left:o.left,top:o.top};switch(i){case"top":r.top=r.top-.5*a;break;case"bottom":r.top=r.top+.5*a;break;case"left":r.left=r.left-.5*l;break;case"right":default:r.left=r.left+.5*l}return r}function n(t,e){return{opacity:1,left:e.left,top:e.top}}var s=/top|bottom/,l=/left|right/;return e.center=o,e.start=i,e.end=n,e}.apply(e,i),!(void 0!==n&&(t.exports=n))},function(t,e,o){var i;i=function(){return'<div class="dialog dialog-singleton dialog-<%= placement %>">\n    <button bx-click="close" type="button" class="dialog-close <%= closable ? \'\' : \'hide\' %>"><span class="brixfont">&#xe62d;</span><!-- &times; --></button>\n    <div class="dialog-content">\n        <%= content %>\n        <!-- \n        <div class="dialog-header">\n            <h4 class="dialog-title">Title</h4>\n        </div>\n        <div class="dialog-body">Body</div>\n        <div class="dialog-footer">\n            <button bx-click="close" type="button" class="btn btn-default">Close</button>\n            <button bx-click="close" type="button" class="btn btn-primary">Save</button>\n        </div>\n         -->\n    </div>\n</div>'}.call(e,o,e,t),!(void 0!==i&&(t.exports=i))}])});