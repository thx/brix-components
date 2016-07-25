define(["jquery","underscore","moment","brix/base","brix/event","../dialog/position.js","./hourpicker.tpl.js"],function(t,e,i,s,n,a,r){function o(){}var h=".hourpicker",c={DEFAULT:[[1,"周一"],[2,"周二"],[3,"周三"],[4,"周四"],[5,"周五"],[6,"周六"],[0,"周日"]],GROUPED:[["12345","工作日"],["60","休息日"]]},u=e.range(0,24);return e.extend(o.prototype,s.prototype,{options:{simplify:!1,value:"",utcOffset:function(){var t=i().utcOffset()/60,e=Math.abs(t),s=e<10?"0"+e:e;return s=t<0?"-"+s:"+"+s,s+=":00"}()},init:function(){},render:function(){var i=this;this.$element=t(this.element),this.$manager=new n("bx-");var s=e.template(r)({utcOffset:this.options.utcOffset,simplify:this.options.simplify,DICT:this.options.simplify?c.GROUPED:c.DEFAULT,HOURS:u});if(this.$element.append(s),this.options.value){var a,o={};switch(t.type(this.options.value)){case"string":a=this.options.value.split(this.options.value.indexOf(",")!=-1?",":""),e.each(a,function(e){o[t.trim(e)]=u});break;case"array":a=this.options.value,e.each(a,function(t){o[t]=u});break;case"object":o=this.options.value}this.val(o)}this.$manager.delegate(this.$element,this),t(".picker-hours",this.$element).contents().filter(function(t,e){return 3===e.nodeType}).remove();var l=t(".picker-hour",this.$element);l.on("mousedown",function(e){var s=t(this),n=!s.hasClass("active");s.toggleClass("active"),i._merge(),i._syncShortcut();var a=t(this).siblings();a.on("mouseenter.drag"+h,function(e){var s=t(this);s[n?"addClass":"removeClass"]("active"),i._merge(),i._syncShortcut(),e.preventDefault()}),t(document.body).off("mouseup.drag"+h).on("mouseup.drag"+h,function(){a.off("mouseenter.drag"+h),t(document.body).off("mouseup.drag"+h),i.trigger("change"+h,i.val())}),e.preventDefault()})},val:function(){return arguments.length?(this._set.apply(this,arguments),this.trigger("change"+h,this._get()),this):this._get()},shortcut:function(t,i){void 0===i&&(i=t,t=void 0),e.isArray(i)||(i=[i]);var s={};e.each(i,function(t){s[t]=u}),this.val(s)},toggle:function(t,e){void 0===e&&(e=t,t=void 0);var i=this.val()[e];24===i.length?this.val(e,[]):this.val(e,u),t&&t.preventDefault()},apply:function(i,s,n){var r=this,o=t(i.target),h=t(".apply-dialog",this.$element);switch(s){case"to":this._tmp=this._tmp||{},this._tmp.from=n,this._tmp.$target=o.css("visibility","visible");var c=a(o,h,"bottom","right"),u=parseInt(h.css("margin-top"),10)||0;h.show().offset({left:c.left,top:c.top+u}),h.find("label[data-value]").removeClass("disabled").find('input[name="shortcut"]').prop({checked:!1,disabled:!1}).end().end().find("label[data-value="+n+"]").addClass("disabled").find("input").prop("disabled",!0);break;case"do":var l=e.map(h.find("input:checked"),function(t){return t.value}),p=this.val()[this._tmp.from];e.each(l,function(t){r.val(t,p)}),h.hide(),this._tmp.$target.css("visibility","inherit");break;case"close":this._tmp.$target.css("visibility","inherit"),h.hide()}},_get:function(){var i,s,n={},a=this.$element.find(".picker-day");return e.each(a,function(a){a=t(a),s=[],i=a.find(".picker-hour.active"),e.each(i,function(e){s.push(+t(e).attr("data-value"))}),n[a.attr("data-value")]=s}),n},_set:function(t){var i=[].slice.call(arguments),s=this.$element.find(".picker-day");2===arguments.length?(t={},t[i[0]]=i[1],s.filter("[data-value="+i[0]+"]").find(".picker-hour").removeClass("active")):s.find(".picker-hour").removeClass("active");var n;e.each(t,function(t,i){n=s.filter("[data-value="+i+"]").find(".picker-hour"),e.each(t,function(t){n.filter("[data-value="+t+"]").addClass("active")})}),this._merge(),this._syncShortcut()},_merge:function(){var i=t(".picker-hour",this.$element);e.each(i,function(e){e=t(e);var i=e.find(".picker-hour-start"),s=e.find(".picker-hour-end");e.hasClass("active")?(i[e.prev().hasClass("active")?"hide":"show"](),s[e.next().hasClass("active")?"hide":"show"]()):(i.hide(),s.hide())})},_syncShortcut:function(){function e(t,e){for(var s,n=0;n<t.length;n++)if(s=t[n],i[s].length<24)return!1;for(var a=0;a<e.length;a++)if(s=e[a],0!==i[s].length)return!1;return!0}if(!this.options.simplify){var i=this.val();t(".shortcuts input[name=shortcut]:eq(0)",this.$element).prop("checked",e("0123456","")),t(".shortcuts input[name=shortcut]:eq(1)",this.$element).prop("checked",e("12345","06")),t(".shortcuts input[name=shortcut]:eq(2)",this.$element).prop("checked",e("06","12345"))}},destroy:function(){this.$manager.undelegate(this.$element),this.$element.empty()}}),o});