define(["jquery","underscore","brix/base","css!./textcount.css"],function(t,n,e){function u(){}return n.extend(u.prototype,e.prototype,{init:function(){var n=this,e=t(n.element);if(e){var u=t(n.options.input);e.html(n._countResult(u.val())),u.on("keyup",function(){e.html(n._countResult(u.val()))})}},count:function(t){var n=t.replace(/[\u4e00-\u9fa5]/g,"*");return n.length},_countResult:function(t){var n=this.count(t),e=this.options.count,u=n;return n>e&&(u='<em class="textcount-error">'+n+"</em>"),u+"/"+e}}),u});