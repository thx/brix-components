define(["jquery","underscore","brix/base","css!./footer.css"],function(t,e,o){function n(){}return e.extend(n.prototype,o.prototype,{options:{type:"front"},init:function(){},render:function(){var e=this,o="front"===this.options.type?"":"simple";t.ajax({url:"http://www.taobao.com/go/rgn/mm/footer.php",data:{mode:o},dataType:"jsonp",jsonp:"callback",success:function(o){t(e.element).append(t("<textarea />").html(o).val().replace('<style type="text/css">','<style type="text/css" scoped>'))}})}}),n});