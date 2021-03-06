/* global define, window  */
/*
    http://thx.github.io/brix-site/readme.html?name=Table
        Deprecated
    https://nuysoft.gitbooks.io/brix-book/content/brix-components/table/
        Temporary

    Responsive tables
        http://gergeo.se/RWD-Table-Patterns/#features
    
    data-column-rwd-range
    data-column-rwd-limit
    data-column-priority-trigger

        data-column-priority
        data-column-priority-state
        data-column-priority-name

    data-column-id

    > RWD responsive web design
 */
define(
    [
        'jquery', 'underscore',
        'components/base',
        './linkage/linkage.js',
        './column-rwd.js',
        './column-priority.js',
        './sticky/sticky.js'
    ],
    function(
        $, _,
        Brix,
        linkage,
        ColumnRWD,
        ColumnPriority,
        Sticky
    ) {
        /*
            不需要渲染，只是事件增强。
        */

        var NAMESPACE = '.table'
        var Constant = {
            UUID: 0,
            COLUMN: {
                ID: 'column-id',
                FIELD: 'column-field',
                NAME: 'column-name',
                RWD: {
                    RANGE: 'column-rwd-range',
                    LIMIT: 'column-rwd-limit',
                    FADE: 'column-rwd-fade',
                    CURSOR: 'column-rwd-cursor'
                },
                PRIORITY: {
                    FIELDS: 'column-priority-fields',
                    TRIGGER: 'column-priority-trigger',
                    STATE: 'column-priority-state',
                    INDEX: 'column-priority-index',
                    PLACEMENT: 'column-priority-placement',
                    ALIGN: 'column-priority-align'
                }
            },
            CURSOR: {
                ROW: 'row-cursor',
                COL: 'col-cussor' // TODO
            }
        }

        function Table() {}

        _.extend(Table.prototype, Brix.prototype, {
            options: {},
            init: function() {
                this.$element = $(this.element)
            },
            render: function() {
                var that = this

                if (this.options[Constant.CURSOR.ROW]) {
                    // 默认高亮首行
                    this.__$rowCursor = this.$element.find('> tbody > tr:first').addClass('hover')

                    // 保留高亮行
                    this.$element.on('mouseenter', '> tbody > tr', function(event) {
                        that.__$rowCursor.removeClass('hover')
                        that.__$rowCursor = $(event.currentTarget).addClass('hover')
                    })
                }
                if (this.options[Constant.CURSOR.COL]) {
                    // TODO
                }

                /* jshint unused:false */
                linkage(this.element, function(event, values, target) {
                    that.trigger('toggle' + NAMESPACE, [values, target])
                    that.contextual()
                })

                var columnRWDHandler, columnPriorityHandler
                if (this.options[Constant.COLUMN.RWD.RANGE]) {
                    columnRWDHandler = ColumnRWD(this, this.options, Constant, function(event, state) {
                        that.trigger('change' + ColumnRWD.NAMESPACE, [state])
                    })
                    var type = 'resize.table_' + this.clientId
                    $(window).on(type, _.throttle(function( /*event*/ ) {
                        columnRWDHandler.beautify()
                    }, 50))
                }
                if (this.options[Constant.COLUMN.PRIORITY.TRIGGER]) {
                    columnPriorityHandler = ColumnPriority(this, this.options, Constant, function(event, fields) {
                        that.trigger('change' + ColumnPriority.NAMESPACE, [fields])
                        columnRWDHandler.flush()
                    })

                    // 初始值
                    if (this.options[Constant.COLUMN.PRIORITY.FIELDS]) {
                        columnPriorityHandler.fields(this.options[Constant.COLUMN.PRIORITY.FIELDS])
                    }
                }

                this.columnRWDHandler = columnRWDHandler
                this.columnPriorityHandler = columnPriorityHandler

                if (!this.options[Constant.COLUMN.RWD.RANGE] && !this.options[Constant.COLUMN.PRIORITY.TRIGGER]) {
                    if (this.options.sticky) {
                        Sticky(this.element)
                    }
                }
            },
            contextual: function() {
                _.each(this.$element.find('input:checkbox'), function(item /*, index*/ ) {
                    var checked = $(item).prop('checked')
                    $(item).closest('tr')[
                        checked ? 'addClass' : 'removeClass'
                    ]('active')
                })
            },
            destroy: function() {
                var type = 'resize.table_' + this.clientId
                $(window).off(type)

                type = 'click' + ColumnPriority.NAMESPACE + '_' + this.clientId
                $(document.body).off(type)

                if (this.columnPriorityHandler) {
                    this.columnPriorityHandler.$manager.undelegate(this.columnPriorityHandler.$relatedElement)
                }
            }
        })

        Table.extend = Brix.extend

        return Table

        // return Brix.extend({})
    }
)