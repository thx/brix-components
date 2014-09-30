/* global define */
define(
    [
        'jquery', 'underscore',
        'base/brix',
        'text!./footer.tpl',
        'less!./footer.less'
    ],
    function(
        $, _,
        Brix,
        template
    ) {
        /*
            页脚组件
        */
        function Footer() {}

        _.extend(Footer.prototype, Brix.prototype, {
            options: {},
            render: function() {
                $(this.element).append(template)
            }
        })
        
        return Footer
    }
)