define("components/taginput",["jquery","underscore","brix/loader","components/base","brix/event"],function(t,e,i,n,s){return function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){var n,s;n=[i(1),i(2),i(3),i(4),i(5),i(6),i(7)],s=function(t,e,i,n,s,o,a){function r(){}var l=".taginput",d=".taginput-item",h=".taginput-item-name",u=20,c={PENDING:"pending",ACTIVE:"active",INACTIVE:"inactive"};return e.extend(r.prototype,n.prototype,{options:{placeholder:"",data:[],limit:0,same:!0,suggest:!0},init:function(){this.options.limit=+this.options.limit},render:function(){var n=this,a=t.Deferred();this.$element=t(this.element).hide(),this.$manager=new s("bx-");var r=e.template(o)(this.options);this.$relatedElement=t(r).insertAfter(this.$element),this.$input=this.$relatedElement.find("input"),this.options.placeholder&&this.$input.attr("placeholder",this.options.placeholder),this.options.suggest||this.$input.hide(),this.$input.on("focus",function(){n.triggerHandler("focus"+l)}).on("blur",function(){n.triggerHandler("blur"+l)}),i.boot(this.$relatedElement,function(){n.suggest=i.query("components/suggest",n.$relatedElement)[0],n.val(n.options.data,!1),n._beautify(n.$element,n.$relatedElement),n.$manager.delegate(n.$element,n),n.$manager.delegate(n.$relatedElement,n),n.suggest.on("change.suggest.input",function(t,e){n.trigger("change.suggest.input",e)}),n.suggest.on("change.suggest.done",function(t,e){n.add(e)}),a.resolve()});var d="click"+l+"_"+this.clientId;this._state=c.INACTIVE,t(document.body).off(d).on(d,function(e){if(e.target===n.element||t.contains(n.element,e.target)||e.target===n.$relatedElement[0]||t.contains(n.$relatedElement[0],e.target)||!t.contains(document.body,e.target)&&t(e.target).closest(".taginput-item-delete").length&&t(e.target).closest(".taginput-item-delete").attr("data-taginput-clientid")==n.clientId){if(n._state===c.ACTIVE)return;return n.trigger(t.Event("active"+l,{target:e.target})),void(n._state=c.ACTIVE)}n._state!==c.INACTIVE&&(n.trigger(t.Event("inactive"+l,{target:e.target})),n._state=c.INACTIVE)})},add:function(i,n){if(this._state=c.ACTIVE,i+="",0!==i.length){if(!this.options.same&&e.indexOf(this.options.data,i)!==-1)return void this.$input.val("");if(!(this.options.limit&&this.options.data.length>=this.options.limit)){this.options.data.push(i),this.$element.val(this.options.data.join(","));var s=e.template(a)({data:i,clientId:this.clientId});return t(s).insertBefore(this.$input),this.$input.val(""),this._fixInput(),n!==!1&&this.trigger("change"+l,[this.options.data,"add",i]),this.options.limit&&this.options.data.length>=this.options.limit&&this.$input.hide(),this}}},"delete":function(i,n){this._state=c.ACTIVE;var s,o=this;if(void 0===i)s=this.options.data,this.options.data=[],this.$element.val(this.options.data.join(",")),this.$relatedElement.find(d).remove();else if(i.type){var a=t(i.target).closest(d);s=t(a).find(h).text(),this.options.data=e.without(this.options.data,t(a).find(h).text()),this.$element.val(this.options.data.join(",")),t(i.target).closest(d).remove(),i.preventDefault()}else{i+="";var r=this.$relatedElement.find(d),u=e.filter(r,function(n){var a=t(n).find(h).text();return a===i&&(s=a,o.options.data=e.without(o.options.data,a),o.$element.val(o.options.data.join(",")),!0)});t(u).remove()}return this._fixInput(),n!==!1&&this.trigger("change"+l,[this.options.data,"delete",s]),this.options.limit&&this.options.data.length<this.options.limit&&this.$input.show(),i&&i.type&&this.$input.focus(),this},val:function(t,i){if(void 0===t)return this.options.data;var n=this;return this["delete"](void 0,!1),e.each(t,function(t){n.add(t,!1)}),i===!1&&this.trigger("change"+l,[this.options.data]),this},_focus:function(t){t.target===this.$relatedElement[0]&&this.$input.focus(),t.preventDefault(),this._fixInput()},_active:function(e){t(e.currentTarget).toggleClass("active")},_selection:function(t){var e="handler "+t.which+" "+t.target.value;return console.group(e),console.log("selectionStart    ",t.target.selectionStart),console.log("selectionEnd      ",t.target.selectionEnd),console.log("selectionDirection",t.target.selectionDirection),console.groupEnd(e),this},_beautify:function(t,e){return e.addClass(t.attr("class")).css({"line-height":t.css("line-height"),"min-height":t.css("height"),height:"auto"}),this._fixInput(),this},_fixInput:function(){this.$input.width(u);var t=this.$relatedElement.width()-this.$input.position().left;return this.$input.width(t>=u?t:u),this},destroy:function(){this.$manager.undelegate(this.$element),this.$manager.undelegate(this.$relatedElement),this.$relatedElement.remove();var e="click"+l+"_"+this.clientId;t(document.body).off(e)}}),r}.apply(e,n),!(void 0!==s&&(t.exports=s))},function(e,i){e.exports=t},function(t,i){t.exports=e},function(t,e){t.exports=i},function(t,e){t.exports=n},function(t,e){t.exports=s},function(t,e,i){var n;n=function(){return'<div class="taginput" bx-click="_focus">\n\t<div class="taginput-placeholder hide <%= data.length ? \'hide\' : \'\' %>"><%= placeholder %></div>\n\t<input bx-name="components/suggest" class="taginput-input" autocomplete="off">\n</div>'}.call(e,i,e,t),!(void 0!==n&&(t.exports=n))},function(t,e,i){var n;n=function(){return'<div class="taginput-item" bx-click=""><!-- _active -->\n    <div class="taginput-item-name"><%= data %></div>\n    <div class="taginput-item-delete" bx-click="delete" data-taginput-clientid="<%= clientId %>">\n        <span class="glyphicon glyphicon-remove"></span>\n    </div><!-- &times; -->\n</div>'}.call(e,i,e,t),!(void 0!==n&&(t.exports=n))}])});