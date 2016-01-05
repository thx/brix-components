define(["jquery","underscore","brix/loader","components/base","brix/event","./dropdown.tpl.js"],function(e,t,n,i,a,o){function l(e){return e&&e.element&&"select"!==e.element.nodeName.toLowerCase()?new r:void 0}function r(){}var s=".dropdown";return t.extend(l.prototype,i.prototype,{options:{name:void 0,label:void 0,value:void 0,data:[],disabled:void 0,searchbox:!1,placeholder:"搜索关键词",_searchboxEvent:"keyup",popover:!1,_popoverWidth:""},init:function(){this.$element=e(this.element).hide(),this.$manager=new a("bx-");var t=this.options;t.data.length?(this._fixFlattenData(this.options.data),this._fillSelect()):t.data=this._parseDataFromSelect(this.$element),t.disabled=this.$element.prop("disabled"),void 0!==t.value&&this.$element.val(t.value+"");var n=this.$element.find("option:selected");t.label=e.trim(n.text()),t.value=n.attr("value"),t.name=this.$element.attr("name"),t.searchbox&&(t.searchbox===!0?t._searchboxEvent="keyup":(t._searchboxEvent=t.searchbox,t.searchbox=!0)),t.popover&&t.popover!==!0&&(t._popoverWidth=t.popover,t.popover=!0)},render:function(){this.$relatedElement=e(t.template(o)(this.options)).insertBefore(this.$element),this.$manager.delegate(this.$element,this),this.$manager.delegate(this.$relatedElement,this),n.boot(this.$relatedElement),this._autoHide()},toggle:function(){return this.$relatedElement.toggleClass("open"),this},show:function(){return this.$relatedElement.addClass("open"),this},hide:function(){return this.$relatedElement.removeClass("open"),this},val:function(n){var i=this,a=function(){var t=i.$relatedElement.find("ul.dropdown-menu > li.active > a"),n=t.attr("value");return void 0===n&&(n=e.trim(t.text())),n}();if(void 0===n)return a;var o;return t.isObject(n)?o=n:t.each(this.options.data,function(e){e.value==n&&(o=e),e.selected=e.value==n}),o?(this.$relatedElement.find("button.dropdown-toggle > span.dropdown-toggle-label").text(o.label),this.$element.val(o.value),this.$relatedElement.find("ul.dropdown-menu").find('li:has([value="'+a+'"])').removeClass("active").end().find('li:has([value="'+o.value+'"])').addClass("active"),""+o.value===a?this:(this.trigger("change"+s,o),this.$element.triggerHandler("change"),this)):void 0},data:function(i){if(void 0===i)return this.options.data;this.options.data=this._fixFlattenData(i),this._fillSelect();var a=this.$relatedElement.find("ul.dropdown-menu"),l=e(t.template(o)(this.options)).find("ul.dropdown-menu");a.replaceWith(l),this.$manager.delegate(this.$relatedElement,this),n.boot(this.$relatedElement)},select:function(t){var n=e(t.currentTarget),i=n.attr("value"),a=e.trim(n.text()),o={name:this.options.name,label:a,value:void 0!==i?i:a};this.val(o),this.toggle(),n.closest("li").addClass("active").siblings().removeClass("active")},search:function(t){if("keyup"===t.type){var n=t.keyCode;if(91===n||n>15&&19>n||n>=37&&40>=n)return;if("enter"===this.options._searchboxEvent&&13!==n)return}var i=e(t.target).val();this.trigger("search"+s,i)},filter:function(e,t){e.type&&(e=t,t=!1);var n=this.$relatedElement.find("ul.dropdown-menu li").hide();n.has('> a:contains("'+e+'")').show(),t&&n.has('> a[value*="'+e+'"]').show()},_parseDataFromSelect:function(n){function i(e){return t.map(e,function(e){return a(e)})}function a(t){var n=e(t);return n.hasClass("divider")?"divider":{label:e.trim(n.text()),value:n.attr("value"),selected:n.prop("selected")}}var o=t.filter(n.children(),function(e){return/optgroup|option/i.test(e.nodeName)});return t.map(o,function(t){var n=e(t);return/optgroup/i.test(t.nodeName)?{label:n.attr("label"),children:i(n.children())}:a(t)})},_fixFlattenData:function(e){return t.map(e,function(e,n,i){return i[n]=t.isObject(e)?e:{label:e,value:e}})},_fillSelect:function(){function n(t){return e("<option>").attr("value",t.value).prop("selected",t.selected).text(t.label)}var i=this.$element.empty();t.each(this.options.data,function(a){if(a.children&&a.children.length){var o=e("<optgroup>").attr("label",a.label);t.each(a.children,function(e){n(e).appendTo(o)}),o.appendTo(i)}else n(a).appendTo(i)})},_responsive:function(){var t=e(window),n=this.$relatedElement,i=n.find("ul.dropdown-menu");e(window).on("scroll",function(){var e=n.offset(),a=e.top-t.scrollTop(),o=t.scrollTop()+t.height()-e.top-n.outerHeight(),l=o>=a?"button":"top";switch(l){case"button":i.css("max-height",a-10);break;case"top":i.css("max-height",o-10)}})},_autoHide:function(){var t=this,n="click.dropdown_autohide_"+this.clientId;e(document.body).off(n).on(n,function(e){t.$relatedElement.has(e.target).length||t.hide()})},destroy:function(){this.$manager.undelegate(this.$element,this),this.$manager.undelegate(this.$relatedElement,this),this.$relatedElement.remove();var t="click.dropdown_autohide_"+this.clientId;e(document.body).off(t)}}),t.extend(r.prototype,l.prototype,{init:function(){this.$element=e(this.element),this.$relatedElement=this.$element,this.$manager=new a("bx-"),this._fixFlattenData(this.options.data),this.options.name=this.$element.attr("name")},render:function(){void 0!==this.options.value&&this.val(this.options.value),this.$manager.delegate(this.$relatedElement,this),this._autoHide()},val:function(n){var i=this,a=function(){var t=i.$element.find("ul.dropdown-menu > li.active > a"),n=t.attr("value");return void 0===n&&(n=e.trim(t.text())),n}();if(void 0===n)return a;var o;return t.isObject(n)?o=n:t.each(i.$element.find("ul.dropdown-menu > li"),function(t){var a=e(t),l=a.find("> a"),r=l.attr("value"),s=e.trim(l.text());(void 0!==r&&r==n||void 0===r&&s==n)&&(o={name:i.options.name,label:s,value:void 0!==r?r:s})}),o?(this.$relatedElement.find("button.dropdown-toggle > span.dropdown-toggle-label").text(o.label),""+o.value===a?this:(this.$relatedElement.find("ul.dropdown-menu").find('li:has([value="'+a+'"])').removeClass("active").end().find('li:has([value="'+o.value+'"])').addClass("active"),this.trigger("change"+s,o),this)):void 0},data:function(n){this.options.data=this._fixFlattenData(n);var i=this.$relatedElement.find("ul.dropdown-menu"),a=e(t.template(o)(this.options)).find("ul.dropdown-menu");i.replaceWith(a),this.$manager.delegate(this.$relatedElement,this)}}),l});