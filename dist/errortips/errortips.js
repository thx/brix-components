define(["jquery","underscore","handlebars","components/base","./errortips.tpl.js"],function(t,i,e,s,o){function n(){arguments.length&&(this.element=t(arguments[0]),this.options=i.extend(this.options,arguments[1]))}var r={EVENTS:{".errortips-icon":{click:function(t,i){i._tips.fadeOut({duration:250,easing:"swing",complete:function(){i._tips.remove(),i.trigger("complete.errortips")}})}}}};return i.extend(n.prototype,s.prototype,{options:{width:180,msg:"操作<span>不正确</span>，请重新操作",duration:null,shake:!0},render:function(){},destroy:function(){this._tips&&this._tips.remove()},showTips:function(i){var e=t(this.element);e.hasClass("btn-error")||(t(".btn-error-tips[data-btn-error]").length&&(clearTimeout(this.itv),t(".btn-error-tips[data-btn-error]").remove()),this.options.shake&&this._shake(),this._showTips(i),this._bindUI())},_bindUI:function(){var i=this._tips,e=this;t.each(r,function(s,o){switch(s){case"EVENTS":t.each(o,function(s,o){t.each(o,function(t,o){i.delegate(s,t,function(t){o(t,e)})})});break;case"DOCEVENTS":t.each(o,function(i,s){t.each(s,function(s,o){t(document).delegate(i,s,function(t){o(t,e)})})});break;case"WINEVENTS":t.each(o,function(i,s){t(window).on(i,function(t){s(t,e)})})}})},_showTips:function(i){var s=this,n=t(this.element),r=this.options.width,a=this.options.duration,h=30;i=i||this.options.msg,s.fadeOut&&s.fadeOut.stop(),a&&(this.itv=setTimeout(function(){s.fadeOut=s._tips.fadeOut({duration:250,easing:"swing",complete:function(){s._tips.remove(),s.trigger("complete.errortips",s)}})},a));var p=n.offset(),c=o,d=n.outerWidth()/2-10,u=e.compile(c)({width:r,msg:i,left:d+h,duration:a});this._tips=t(u),t("body").append(this._tips);var f=this._tips.outerWidth(),l=this._tips.outerHeight(),m=p.left-h,w=p.top-l-20,_=0,g=t(window).width(),v=t(window).height(),b=m+f-g;if(b>0&&(m-=b,this._tips.find(".arrow").css({left:d+h+b})),m<0&&(this._tips.find(".arrow").css({left:d+h+m}),m=0),w<0?(this._tips.find(".arrow").addClass("arrow-up"),w=p.top+n.outerHeight()+20,_=w-25):_=w+25,n.is(":hidden")){this._tips.find(".arrow").hide();var T=(g-f)/2,y=(v-l)/2;return this._tips.css({left:T,top:y,opacity:0}),void this._tips.animate({left:T,top:y,opacity:1},250,"swing")}this._tips.css({left:m,top:_,opacity:0}),this._tips.animate({left:m,top:w,opacity:1},250,"swing")},_shake:function(){var i=t(this.element),e=i.width(),s=i.html();i.addClass("btn-error"),i.width(e),i.html('<i class="errortips-icon">&#xe600;</i>'),setTimeout(function(){i.html(s),i.removeClass("btn-error")},1e3)}}),n});