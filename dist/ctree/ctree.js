define(["jquery","underscore","brix/loader","brix/base","./ctree.tpl.js","css!./ctree.css"],function(e,n,t,r,i){function c(){}function o(e,t){e.childrenFn=function(){return this.children&&this.children.length?n.template(t)(this):""},n.each(e.children,function(e){o(e,t)})}return n.extend(c.prototype,r.prototype,{options:{},render:function(){var e=this;t.boot(function(){e._renderTree()})},_renderTree:function(){var r=e(this.element).empty(),c=t.tree();o(c,i),r.append(n.template(i)(c))}}),c});