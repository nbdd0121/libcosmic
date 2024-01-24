(function() {var type_impls = {
"cosmic":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MenuBar%3C'a,+Message,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#81-200\">source</a><a href=\"#impl-MenuBar%3C'a,+Message,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Renderer&gt; <a class=\"struct\" href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\">MenuBar</a>&lt;'a, Message, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,\n    Renderer::<a class=\"associatedtype\" href=\"iced_core/renderer/trait.Renderer.html#associatedtype.Theme\" title=\"type iced_core::renderer::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"cosmic/theme/style/menu_bar/trait.StyleSheet.html\" title=\"trait cosmic::theme::style::menu_bar::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#88-111\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.new\" class=\"fn\">new</a>(menu_roots: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"cosmic/widget/menu/menu_tree/struct.MenuTree.html\" title=\"struct cosmic::widget::menu::menu_tree::MenuTree\">MenuTree</a>&lt;'a, Message, Renderer&gt;&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\"><code>MenuBar</code></a> with the given menu roots</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bounds_expand\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#119-122\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.bounds_expand\" class=\"fn\">bounds_expand</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.u16.html\">u16</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the expand value for each menu’s check bounds</p>\n<p>When the cursor goes outside of a menu’s check bounds,\nthe menu will be closed automatically, this value expands\nthe check bounds</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.close_condition\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#126-129\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.close_condition\" class=\"fn\">close_condition</a>(self, close_condition: <a class=\"struct\" href=\"cosmic/widget/menu/struct.CloseCondition.html\" title=\"struct cosmic::widget::menu::CloseCondition\">CloseCondition</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p><a href=\"cosmic/widget/menu/struct.CloseCondition.html\" title=\"struct cosmic::widget::menu::CloseCondition\"><code>CloseCondition</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cross_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#133-136\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.cross_offset\" class=\"fn\">cross_offset</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.i32.html\">i32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Moves each menu in the horizontal open direction</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#140-143\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.height\" class=\"fn\">height</a>(self, height: <a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the height of the <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\"><code>MenuBar</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.item_height\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#147-150\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.item_height\" class=\"fn\">item_height</a>(self, item_height: <a class=\"enum\" href=\"cosmic/widget/menu/enum.ItemHeight.html\" title=\"enum cosmic::widget::menu::ItemHeight\">ItemHeight</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p><a href=\"cosmic/widget/menu/enum.ItemHeight.html\" title=\"enum cosmic::widget::menu::ItemHeight\"><code>ItemHeight</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.item_width\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#154-157\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.item_width\" class=\"fn\">item_width</a>(self, item_width: <a class=\"enum\" href=\"cosmic/widget/menu/enum.ItemWidth.html\" title=\"enum cosmic::widget::menu::ItemWidth\">ItemWidth</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p><a href=\"cosmic/widget/menu/enum.ItemWidth.html\" title=\"enum cosmic::widget::menu::ItemWidth\"><code>ItemWidth</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.main_offset\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#161-164\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.main_offset\" class=\"fn\">main_offset</a>(self, value: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.i32.html\">i32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Moves all the menus in the vertical open direction</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.padding\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#168-171\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.padding\" class=\"fn\">padding</a>&lt;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced_core/padding/struct.Padding.html\" title=\"struct iced_core::padding::Padding\">Padding</a>&gt;&gt;(self, padding: P) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced_core/padding/struct.Padding.html\" title=\"struct iced_core::padding::Padding\"><code>Padding</code></a> of the <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\"><code>MenuBar</code></a></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.path_highlight\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#175-178\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.path_highlight\" class=\"fn\">path_highlight</a>(self, path_highlight: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"cosmic/widget/menu/enum.PathHighlight.html\" title=\"enum cosmic::widget::menu::PathHighlight\">PathHighlight</a>&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the method for drawing path highlight</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.spacing\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#182-185\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.spacing\" class=\"fn\">spacing</a>(self, units: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.f32.html\">f32</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the spacing between menu roots</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#189-192\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.style\" class=\"fn\">style</a>(\n    self,\n    style: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Renderer::<a class=\"associatedtype\" href=\"iced_core/renderer/trait.Renderer.html#associatedtype.Theme\" title=\"type iced_core::renderer::Renderer::Theme\">Theme</a> as <a class=\"trait\" href=\"cosmic/theme/style/menu_bar/trait.StyleSheet.html\" title=\"trait cosmic::theme::style::menu_bar::StyleSheet\">StyleSheet</a>&gt;::<a class=\"associatedtype\" href=\"cosmic/theme/style/menu_bar/trait.StyleSheet.html#associatedtype.Style\" title=\"type cosmic::theme::style::menu_bar::StyleSheet::Style\">Style</a>&gt;\n) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the style of the menu bar and its menus</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#196-199\">source</a><h4 class=\"code-header\">pub fn <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html#tymethod.width\" class=\"fn\">width</a>(self, width: <a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the width of the <a href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\"><code>MenuBar</code></a></p>\n</div></details></div></details>",0,"cosmic::widget::menu::MenuBar"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Renderer%3E-for-MenuBar%3C'a,+Message,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#201-439\">source</a><a href=\"#impl-Widget%3CMessage,+Renderer%3E-for-MenuBar%3C'a,+Message,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Renderer&gt; <a class=\"trait\" href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\">Widget</a>&lt;Message, Renderer&gt; for <a class=\"struct\" href=\"cosmic/widget/menu/menu_bar/struct.MenuBar.html\" title=\"struct cosmic::widget::menu::menu_bar::MenuBar\">MenuBar</a>&lt;'a, Message, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>,\n    Renderer::<a class=\"associatedtype\" href=\"iced_core/renderer/trait.Renderer.html#associatedtype.Theme\" title=\"type iced_core::renderer::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"cosmic/theme/style/menu_bar/trait.StyleSheet.html\" title=\"trait cosmic::theme::style::menu_bar::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#206-208\">source</a><a href=\"#method.width\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.width\" class=\"fn\">width</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a></h4></section></summary><div class='docblock'>Returns the width of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#210-212\">source</a><a href=\"#method.height\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.height\" class=\"fn\">height</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced_core/length/enum.Length.html\" title=\"enum iced_core::length::Length\">Length</a></h4></section></summary><div class='docblock'>Returns the height of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#215-252\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;mut self, tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a> with the provided <a href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#254-256\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tag.html\" title=\"struct iced_core::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/widget/tree/struct.Tag.html\" title=\"struct iced_core::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#258-260\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced_core/widget/tree/enum.State.html\" title=\"enum iced_core::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/widget/tree/enum.State.html\" title=\"enum iced_core::widget::tree::State\"><code>State</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#262-285\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\"><code>Tree</code></a> of the children of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#287-312\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"iced_core/layout/limits/struct.Limits.html\" title=\"struct iced_core::layout::limits::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"iced_core/layout/node/struct.Node.html\" title=\"struct iced_core::layout::node::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced_core/layout/node/struct.Node.html\" title=\"struct iced_core::layout::node::Node\"><code>layout::Node</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>. <a href=\"cosmic/widget/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#314-353\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    tree: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    event: <a class=\"enum\" href=\"iced_core/event/enum.Event.html\" title=\"enum iced_core::event::Event\">Event</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    view_cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    clipboard: &amp;mut dyn <a class=\"trait\" href=\"iced_core/clipboard/trait.Clipboard.html\" title=\"trait iced_core::clipboard::Clipboard\">Clipboard</a>,\n    shell: &amp;mut <a class=\"struct\" href=\"iced_core/shell/struct.Shell.html\" title=\"struct iced_core::shell::Shell\">Shell</a>&lt;'_, Message&gt;,\n    viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n) -&gt; <a class=\"enum\" href=\"iced_core/event/enum.Status.html\" title=\"enum iced_core::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"iced_core/event/enum.Event.html\" title=\"enum iced_core::event::Event\"><code>Event</code></a>. <a href=\"cosmic/widget/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#355-408\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: &amp;&lt;Renderer as <a class=\"trait\" href=\"iced_core/renderer/trait.Renderer.html\" title=\"trait iced_core::renderer::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced_core/renderer/trait.Renderer.html#associatedtype.Theme\" title=\"type iced_core::renderer::Renderer::Theme\">Theme</a>,\n    style: &amp;<a class=\"struct\" href=\"iced_core/renderer/struct.Style.html\" title=\"struct iced_core::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    view_cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/cosmic/widget/menu/menu_bar.rs.html#410-438\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'b&gt;(\n    &amp;'b mut self,\n    tree: &amp;'b mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced_core/overlay/element/struct.Element.html\" title=\"struct iced_core::overlay::element::Element\">Element</a>&lt;'b, Message, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>, if there is any.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#96-102\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    _state: &amp;mut <a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    _operation: &amp;mut dyn <a class=\"trait\" href=\"cosmic/widget/trait.Operation.html\" title=\"trait cosmic::widget::Operation\">Operation</a>&lt;<a class=\"enum\" href=\"iced_core/widget/operation/enum.OperationOutputWrapper.html\" title=\"enum iced_core::widget::operation::OperationOutputWrapper\">OperationOutputWrapper</a>&lt;Message&gt;&gt;\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"cosmic/widget/trait.Operation.html\" title=\"trait cosmic::widget::Operation\"><code>Operation</code></a> to the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#125-132\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    _state: &amp;<a class=\"struct\" href=\"iced_core/widget/tree/struct.Tree.html\" title=\"struct iced_core::widget::tree::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced_core/layout/struct.Layout.html\" title=\"struct iced_core::layout::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor: <a class=\"enum\" href=\"iced_core/mouse/cursor/enum.Cursor.html\" title=\"enum iced_core::mouse::cursor::Cursor\">Cursor</a>,\n    _viewport: &amp;<a class=\"struct\" href=\"iced_core/rectangle/struct.Rectangle.html\" title=\"struct iced_core::rectangle::Rectangle\">Rectangle</a>,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"iced_core/mouse/interaction/enum.Interaction.html\" title=\"enum iced_core::mouse::interaction::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"iced_core/mouse/interaction/enum.Interaction.html\" title=\"enum iced_core::mouse::interaction::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"cosmic/widget/trait.Widget.html\" title=\"trait cosmic::widget::Widget\"><code>Widget</code></a>. <a href=\"cosmic/widget/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#158\">source</a><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\">Id</a>&gt;</h4></section></summary><div class='docblock'>Returns the id of the widget</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#164\">source</a><a href=\"#method.set_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"cosmic/widget/trait.Widget.html#method.set_id\" class=\"fn\">set_id</a>(&amp;mut self, _id: <a class=\"struct\" href=\"cosmic/widget/struct.Id.html\" title=\"struct cosmic::widget::Id\">Id</a>)</h4></section></summary><div class='docblock'>Sets the id of the widget\nThis may be called while diffing the widget tree</div></details></div></details>","Widget<Message, Renderer>","cosmic::widget::menu::MenuBar"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()