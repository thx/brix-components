## 示例

<div class="bs-example bs-example-modal">
    <div class="content">
        <div id="sexLinkage" bx-name>
            <label class="group"><input type="checkbox" data-linkage-name="Brix"> Brix</label>
            <ul class="checklist">
                <li>
                    <label class="group"><input type="checkbox" value="Loader" data-linkage-name="Loader" data-linkage-parent-name="Brix">Loader</label>
                    <ul class="checklist checklist-linear clearfix">
                        <li><label><input type="checkbox" value="boot"      data-linkage-name="boot"    data-linkage-parent-name="Loader">boot</label></li>
                        <li><label><input type="checkbox" value="destroy"   data-linkage-name="destroy" data-linkage-parent-name="Loader">destroy</label></li>
                        <li><label><input type="checkbox" value="query"     data-linkage-name="query"   data-linkage-parent-name="Loader">query</label></li>
                        <li><label><input type="checkbox" value="load"      data-linkage-name="load"    data-linkage-parent-name="Loader">load</label></li>
                        <li><label><input type="checkbox" value="unload"    data-linkage-name="unload"  data-linkage-parent-name="Loader">unload</label></li>
                        <li><label><input type="checkbox" value="CACHE"     data-linkage-name="CACHE"   data-linkage-parent-name="Loader" disabled>CACHE</label></li>
                    </ul>
                </li>
                <li>
                    <label class="group"><input type="checkbox" value="Event" data-linkage-name="Event" data-linkage-parent-name="Brix">Event</label>
                    <ul class="checklist checklist-linear clearfix">
                        <li><label><input type="checkbox" value="parse"     data-linkage-name="parse"       data-linkage-parent-name="Event">parse</label></li>
                        <li><label><input type="checkbox" value="delegate"  data-linkage-name="delegate"    data-linkage-parent-name="Event">delegate</label></li>
                        <li><label><input type="checkbox" value="handle"    data-linkage-name="handle"      data-linkage-parent-name="Event">handle</label></li>
                    </ul>
                </li>
                <li>
                    <label class="group"><input type="checkbox" value="Components" data-linkage-name="Components" data-linkage-parent-name="Brix">Components</label>
                    <ul class="checklist checklist-linear clearfix">
                        <li><label><input type="checkbox" value="Dropdown"              data-linkage-name="Dropdown"            data-linkage-parent-name="Components">Dropdown</label></li>
                        <li><label><input type="checkbox" value="Pagination"            data-linkage-name="Pagination"          data-linkage-parent-name="Components">Pagination</label></li>
                        <li><label><input type="checkbox" value="DatePicker"            data-linkage-name="DatePicker"          data-linkage-parent-name="Components">DatePicker</label></li>
                    </ul>
                </li>
                <li>
                    <label class="group"><input type="checkbox" value="Release" data-linkage-name="Release" data-linkage-parent-name="Brix">Release</label>
                    <ul class="checklist checklist-linear clearfix">
                        <li><label><input type="checkbox" value="require.js" data-linkage-name="require.js" data-linkage-parent-name="Release" checked disabled>require.js</label></li>
                        <li><label><input type="radio" name="cdn" value="require-config.js"                 data-linkage-name="require-config.js"               data-linkage-parent-name="Release">require-config.js</label></li>
                        <li><label><input type="radio" name="cdn" value="require-config-css.js"             data-linkage-name="require-config-css.js"           data-linkage-parent-name="Release">require-config-css.js</label></li>
                        <li><label><input type="radio" name="cdn" value="require-config-css-animation.js"   data-linkage-name="require-config-css-animation.js" data-linkage-parent-name="Release">require-config-css-animation.js</label></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>

```js
require(['components/table/linkage'], function(linkage) {
    linkage('#sexLinkage', function(event, values, target) {
        console.log(event, values, target)
    })
})
```

<script type="text/javascript">
    require(['components/table/linkage'], function(linkage) {
        linkage('#sexLinkage', function(event, values, target) {
            console.group(event.type)
            console.log(event)
            console.log(values)
            console.log(target)
            console.groupEnd(event.type)
        })
    })
</script>

<style type="text/css">
    #sexLinkage label {
        width: 210px;
    }
    #sexLinkage label.group {
        font-weight: bold;
        font-size: 16px;
    }
</style>

## 示例

<style type="text/css">
    .table th {
        white-space: nowrap;
        background-color: #FAFAFA;
    }
    .table th.scrollable {

    }
    .table th.stable {
        background-color: #F0F0F0;
    }
    .table thead:hover th.stable {
        background-color: #E6E6E6;
    }
    .w30 {
        width: 30px;
    }
    .w75 {
        width: 75px;
    }
    .column-priority {
        /*display: block;*/
    }
</style>

<div class="bs-example bs-example-modal">
    <div class="content">
        <h4>响应式表格</h4>
        <button type="button" id="clickme" class="btn btn-default pull-right"><span class="glyphicon glyphicon-cog"></span></button>
        <table bx-name="components/table" class="table table-hover table-fixed" 
            data-column-rwd-range="[3,-2]" 
            data-column-rwd-limit="5" 
            data-column-rwd-cursor="1" 
            data-column-priority-fields="['gungungun', '滚动列 2', '滚动列 3', '滚动列 4', '滚动列 5', '滚动列 6']" 
            data-column-priority-trigger="#clickme">
            <thead>
                <tr>
                    <th class="w30"><input type="checkbox" data-linkage-name="all"></th>
                    <th class="w75 stable">不动列 1</th>
                    <th class="w75 stable">不动列 2</th>
                    <th data-column-field="gungungun" data-column-name="滚滚滚滚滚滚长江东逝水">滚动列 1 <span bx-name="components/popover" data-content="components/popover" data-placement="bottom" class="glyphicon glyphicon-question-sign gray"></span></th>
                    <th>滚动列 2</th>
                    <th>滚动列 3</th>
                    <th>滚动列 4</th>
                    <th>滚动列 5</th>
                    <th>滚动列 6</th>
                    <th>滚动列 7</th>
                    <th>滚动列 8</th>
                    <th>滚动列 9</th>
                    <th>滚动列 10</th>
                    <th>滚动列 11</th>
                    <th>滚动列 12</th>
                    <th>滚动列 13</th>
                    <th>滚动列 14</th>
                    <th>滚动列 15</th>
                    <th>滚动列 16</th>
                    <th>滚动列 17</th>
                    <th>滚动列 18</th>
                    <th>滚动列 19</th>
                    <th>滚动列 20</th>
                    <th>滚动列 21</th>
                    <th>滚动列 22</th>
                    <th>滚动列 23</th>
                    <th>滚动列 24</th>
                    <th>滚动列 25</th>
                    <th>滚动列 26</th>
                    <th>滚动列 27</th>
                    <th>滚动列 28</th>
                    <th>滚动列 29</th>
                    <th>滚动列 30</th>
                    <th>滚动列 31</th>
                    <th>滚动列 32</th>
                    <th>滚动列 33</th>
                    <th>滚动列 34</th>
                    <th>滚动列 35</th>
                    <th>滚动列 36</th>
                    <th>滚动列 37</th>
                    <th>滚动列 38</th>
                    <th class="w75 stable">不动列 3</th>
                    <th class="w75 stable">不动列 4</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" data-linkage-parent-name="all"></td>
                    <td>约瑟翰·庞麦郎</td>
                    <td>我的滑板鞋</td>
                    <td>有些事我都已忘记</td>
                    <td>但我现在还记得</td>
                    <td>在一个晚上我的母亲问我</td>
                    <td>今天怎么不开心</td>
                    <td>我说在我的想象中有一双滑板鞋</td>
                    <td>与众不同最时尚跳舞肯定棒</td>
                    <td>整个城市找遍所有的街都没有</td>
                    <td>她说将来会找到的</td>
                    <td>时间会给我答案</td>
                    <td>星期天我再次寻找依然没有发现</td>
                    <td>一个月后我去了第二个城市</td>
                    <td>这里的人们称它为魅力之都</td>
                    <td>时间过的很快夜幕就要降临</td>
                    <td>我想我必须要离开</td>
                    <td>当我正要走时我看到了一家专卖店</td>
                    <td>那就是我要的滑板鞋</td>
                    <td>我的滑板鞋时尚时尚最时尚</td>
                    <td>回家的路上我情不自禁</td>
                    <td>摩擦 摩擦</td>
                    <td>在这光滑的地上摩擦</td>
                    <td>月光下我看到自己的身影</td>
                    <td>有时很远有时很近</td>
                    <td>感到一种力量驱使我的脚步</td>
                    <td>有了滑板鞋天黑都不怕</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦</td>
                    <td>我给自己打着节拍</td>
                    <td>这是我生命中美好的时刻</td>
                    <td>我要完成我最喜欢的舞蹈</td>
                    <td>在这美丽的月光下在这美丽的街道上</td>
                    <td>我告诉自己这是真的这不是梦</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦……</td>
                    <td>似魔鬼的步伐 是爪牙 是大家的步伐</td>
                    <td>电子，舞曲</td>
                    <td>简体中文</td>
                </tr>
                <tr>
                    <td><input type="checkbox" data-linkage-parent-name="all"></td>
                    <td>约瑟翰·庞麦郎</td>
                    <td>我的滑板鞋</td>
                    <td>有些事我都已忘记</td>
                    <td>但我现在还记得</td>
                    <td>在一个晚上我的母亲问我</td>
                    <td>今天怎么不开心</td>
                    <td>我说在我的想象中有一双滑板鞋</td>
                    <td>与众不同最时尚跳舞肯定棒</td>
                    <td>整个城市找遍所有的街都没有</td>
                    <td>她说将来会找到的</td>
                    <td>时间会给我答案</td>
                    <td>星期天我再次寻找依然没有发现</td>
                    <td>一个月后我去了第二个城市</td>
                    <td>这里的人们称它为魅力之都</td>
                    <td>时间过的很快夜幕就要降临</td>
                    <td>我想我必须要离开</td>
                    <td>当我正要走时我看到了一家专卖店</td>
                    <td>那就是我要的滑板鞋</td>
                    <td>我的滑板鞋时尚时尚最时尚</td>
                    <td>回家的路上我情不自禁</td>
                    <td>摩擦 摩擦</td>
                    <td>在这光滑的地上摩擦</td>
                    <td>月光下我看到自己的身影</td>
                    <td>有时很远有时很近</td>
                    <td>感到一种力量驱使我的脚步</td>
                    <td>有了滑板鞋天黑都不怕</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦</td>
                    <td>我给自己打着节拍</td>
                    <td>这是我生命中美好的时刻</td>
                    <td>我要完成我最喜欢的舞蹈</td>
                    <td>在这美丽的月光下在这美丽的街道上</td>
                    <td>我告诉自己这是真的这不是梦</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦……</td>
                    <td>似魔鬼的步伐 是爪牙 是大家的步伐</td>
                    <td>电子，舞曲</td>
                    <td>简体中文</td>
                </tr>
                <tr>
                    <td><input type="checkbox" data-linkage-parent-name="all"></td>
                    <td>约瑟翰·庞麦郎</td>
                    <td>我的滑板鞋</td>
                    <td>有些事我都已忘记</td>
                    <td>但我现在还记得</td>
                    <td>在一个晚上我的母亲问我</td>
                    <td>今天怎么不开心</td>
                    <td>我说在我的想象中有一双滑板鞋</td>
                    <td>与众不同最时尚跳舞肯定棒</td>
                    <td>整个城市找遍所有的街都没有</td>
                    <td>她说将来会找到的</td>
                    <td>时间会给我答案</td>
                    <td>星期天我再次寻找依然没有发现</td>
                    <td>一个月后我去了第二个城市</td>
                    <td>这里的人们称它为魅力之都</td>
                    <td>时间过的很快夜幕就要降临</td>
                    <td>我想我必须要离开</td>
                    <td>当我正要走时我看到了一家专卖店</td>
                    <td>那就是我要的滑板鞋</td>
                    <td>我的滑板鞋时尚时尚最时尚</td>
                    <td>回家的路上我情不自禁</td>
                    <td>摩擦 摩擦</td>
                    <td>在这光滑的地上摩擦</td>
                    <td>月光下我看到自己的身影</td>
                    <td>有时很远有时很近</td>
                    <td>感到一种力量驱使我的脚步</td>
                    <td>有了滑板鞋天黑都不怕</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦</td>
                    <td>我给自己打着节拍</td>
                    <td>这是我生命中美好的时刻</td>
                    <td>我要完成我最喜欢的舞蹈</td>
                    <td>在这美丽的月光下在这美丽的街道上</td>
                    <td>我告诉自己这是真的这不是梦</td>
                    <td>一步两步一步两步</td>
                    <td>一步一步似爪牙</td>
                    <td>似魔鬼的步伐</td>
                    <td>摩擦 摩擦……</td>
                    <td>似魔鬼的步伐 是爪牙 是大家的步伐</td>
                    <td>电子，舞曲</td>
                    <td>简体中文</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<div class="bs-example bs-example-modal">
    <div class="content">
        <table bx-name="components/table" class="table table-hover">
            <thead>
                <tr>
                    <th><input type="checkbox" data-linkage-name="all"></th>
                    <th>Id</th>
                    <th>Feature <span bx-name="components/popover" data-content="功能列表。" data-placement="bottom" class="glyphicon glyphicon-question-sign gray"></span></th>
                    <th>More <span bx-name="components/popover" data-content="鼠标移入之后显示更多内容。" data-placement="bottom" class="glyphicon glyphicon-question-sign gray"></span></th>
                    <th width="150px">Operations <span bx-name="components/popover" data-content="注意到最后一列了吗？鼠标移入之后才会显示。" data-placement="bottom" class="glyphicon glyphicon-question-sign gray"></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" value="Aatrox" data-linkage-parent-name="all"></td>
                    <td>Aatrox</td>
                    <td>全选&amp;反选</td>
                    <td>
                        <div class="more">
                            <div class="title">鼠标移入这里</div>
                            <div class="content">
                                <h3>卡马克</h3>
                                <p>29 岁的卡马克是一个计算机程序员，一个清心寡欲并且乐善好施的人，一个在业余时间里建造高能火箭的人，比尔·盖茨（Bill Gates）心目中为数不多的天才之一。程序代码的优雅清晰是他的追求，也是他的游戏。</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="operation">
                            <a href="javascript: void(0);">详情</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" value="Ahri" data-linkage-parent-name="all"></td>
                    <td>Ahri</td>
                    <td>打开控制台查看选中的值</td>
                    <td>
                        <div class="more">
                            <div class="title">鼠标移出这里</div>
                            <div class="content">
                                <h3>罗梅洛</h3>
                                <p>32 岁的罗梅洛是个自大的游戏设计师，他那坏孩子般的形象使他成为了游戏界的明星，为了实现他心目中那些狂野的幻景，他愿意付出一切代价，甚至是他的名望。</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="operation">
                            <a href="javascript: void(0);">详情</a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td><input type="checkbox" value="Akali" data-linkage-parent-name="all"></td>
                    <td>Akali</td>
                    <td>增强了 Table 的样式和事件</td>
                    <td>
                        <div class="more">
                            <div class="title">卡马克在他们分手时...</div>
                            <div class="content">
                                <p>卡马克在他们分手时有过一句简短的描述：“罗梅洛想建立一个帝国，而我只想写出优秀的程序。” </p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="operation">
                            <a href="javascript: void(0);">详情</a>
                            <a href="javascript: void(0);">详情</a>
                            <a href="javascript: void(0);">详情</a>
                            <a href="javascript: void(0);">链接不会折行</a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<script type="text/javascript">
    require(['brix/loader', 'log'], function(Loader, log) {
        Loader.boot(function() {
            var instances = Loader.query('components/table')
            instances.on('toggle.table', function(event, values, target) {
                console.log('event.delegateTarget', event.delegateTarget)
                console.log('event.currentTarget', event.currentTarget)
                console.log('event.target', event.target)
                console.log('target', target)
                console.log(event.type, event.namespace, values)
            })
            instances.on('change.table_column_rwd', function(event, state) {
                console.log(event.type, event.namespace, state)
            })
            instances.on('change.table_column_priority', function(event, fields) {
                console.log(event.type, event.namespace, fields)
            })
        })
    })
</script>
