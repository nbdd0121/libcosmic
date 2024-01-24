(function() {var type_impls = {
"iced":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Text%3C'a,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#34-37\">source</a><a href=\"#impl-Text%3C'a,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Renderer&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,\n    &lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"iced/widget/text/trait.StyleSheet.html\" title=\"trait iced::widget::text::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#40\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.new\" class=\"fn\">new</a>(content: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt;&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new fragment of <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> with the given contents.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#57\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.size\" class=\"fn\">size</a>(self, size: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"iced/struct.Pixels.html\" title=\"struct iced::Pixels\">Pixels</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the size of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.line_height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#63\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.line_height\" class=\"fn\">line_height</a>(\n    self,\n    line_height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/widget/text/enum.LineHeight.html\" title=\"enum iced::widget::text::LineHeight\">LineHeight</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/widget/text/enum.LineHeight.html\" title=\"enum iced::widget::text::LineHeight\"><code>LineHeight</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.font\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#71\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.font\" class=\"fn\">font</a>(\n    self,\n    font: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;Renderer as <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"type iced::advanced::text::Renderer::Font\">Font</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/advanced/text/trait.Renderer.html#associatedtype.Font\" title=\"associated type iced::advanced::text::Renderer::Font\"><code>Font</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.style\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#77-80\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.style\" class=\"fn\">style</a>(\n    self,\n    style: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;&lt;&lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a> as <a class=\"trait\" href=\"iced/widget/text/trait.StyleSheet.html\" title=\"trait iced::widget::text::StyleSheet\">StyleSheet</a>&gt;::<a class=\"associatedtype\" href=\"iced/widget/text/trait.StyleSheet.html#associatedtype.Style\" title=\"type iced::widget::text::StyleSheet::Style\">Style</a>&gt;\n) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the style of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#86\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.width\" class=\"fn\">width</a>(self, width: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the width of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> boundaries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#92\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.height\" class=\"fn\">height</a>(self, height: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a>&gt;) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the height of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a> boundaries.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.horizontal_alignment\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#98-101\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.horizontal_alignment\" class=\"fn\">horizontal_alignment</a>(self, alignment: <a class=\"enum\" href=\"iced/alignment/enum.Horizontal.html\" title=\"enum iced::alignment::Horizontal\">Horizontal</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/alignment/enum.Horizontal.html\" title=\"enum iced::alignment::Horizontal\"><code>alignment::Horizontal</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.vertical_alignment\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#107-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.vertical_alignment\" class=\"fn\">vertical_alignment</a>(self, alignment: <a class=\"enum\" href=\"iced/alignment/enum.Vertical.html\" title=\"enum iced::alignment::Vertical\">Vertical</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/alignment/enum.Vertical.html\" title=\"enum iced::alignment::Vertical\"><code>alignment::Vertical</code></a> of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.shaping\" class=\"method\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#116\">source</a><h4 class=\"code-header\">pub fn <a href=\"iced/advanced/widget/struct.Text.html#tymethod.shaping\" class=\"fn\">shaping</a>(self, shaping: <a class=\"enum\" href=\"iced/widget/text/enum.Shaping.html\" title=\"enum iced::widget::text::Shaping\">Shaping</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class=\"docblock\"><p>Sets the <a href=\"iced/widget/text/enum.Shaping.html\" title=\"enum iced::widget::text::Shaping\"><code>Shaping</code></a> strategy of the <a href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\"><code>Text</code></a>.</p>\n</div></details></div></details>",0,"iced::widget::Text"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Text%3C'a,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#332-335\">source</a><a href=\"#impl-Clone-for-Text%3C'a,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,\n    &lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"iced/widget/text/trait.StyleSheet.html\" title=\"trait iced::widget::text::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#337\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.75.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","iced::widget::Text"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Widget%3CMessage,+Renderer%3E-for-Text%3C'a,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#126-129\">source</a><a href=\"#impl-Widget%3CMessage,+Renderer%3E-for-Text%3C'a,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Message, Renderer&gt; <a class=\"trait\" href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\">Widget</a>&lt;Message, Renderer&gt; for <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,\n    &lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"iced/widget/text/trait.StyleSheet.html\" title=\"trait iced::widget::text::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.tag\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#131\">source</a><a href=\"#method.tag\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.tag\" class=\"fn\">tag</a>(&amp;self) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/tree/struct.Tag.html\" title=\"struct iced::advanced::widget::tree::Tag\">Tag</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/widget/tree/struct.Tag.html\" title=\"struct iced::advanced::widget::tree::Tag\"><code>Tag</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.state\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#135\">source</a><a href=\"#method.state\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.state\" class=\"fn\">state</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/advanced/widget/tree/enum.State.html\" title=\"enum iced::advanced::widget::tree::State\">State</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/widget/tree/enum.State.html\" title=\"enum iced::advanced::widget::tree::State\"><code>State</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.width\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#139\">source</a><a href=\"#method.width\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.width\" class=\"fn\">width</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a></h4></section></summary><div class='docblock'>Returns the width of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.height\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#143\">source</a><a href=\"#method.height\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.height\" class=\"fn\">height</a>(&amp;self) -&gt; <a class=\"enum\" href=\"iced/enum.Length.html\" title=\"enum iced::Length\">Length</a></h4></section></summary><div class='docblock'>Returns the height of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.layout\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#147-152\">source</a><a href=\"#method.layout\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.layout\" class=\"fn\">layout</a>(&amp;self, tree: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>, renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>, limits: &amp;<a class=\"struct\" href=\"iced/struct.Limits.html\" title=\"struct iced::Limits\">Limits</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/layout/struct.Node.html\" title=\"struct iced::advanced::layout::Node\">Node</a></h4></section></summary><div class='docblock'>Returns the <a href=\"iced/advanced/layout/struct.Node.html\" title=\"struct iced::advanced::layout::Node\"><code>layout::Node</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>. <a href=\"iced/advanced/trait.Widget.html#tymethod.layout\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.draw\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#169-178\">source</a><a href=\"#method.draw\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#tymethod.draw\" class=\"fn\">draw</a>(\n    &amp;self,\n    tree: &amp;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;mut Renderer</a>,\n    theme: &amp;&lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a>,\n    style: &amp;<a class=\"struct\" href=\"iced/advanced/renderer/struct.Style.html\" title=\"struct iced::advanced::renderer::Style\">Style</a>,\n    layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor_position: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n)</h4></section></summary><div class='docblock'>Draws the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a> using the associated <code>Renderer</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#227\">source</a><a href=\"#method.id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.id\" class=\"fn\">id</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced/id/struct.Id.html\" title=\"struct iced::id::Id\">Id</a>&gt;</h4></section></summary><div class='docblock'>Returns the id of the widget</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_id\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#231\">source</a><a href=\"#method.set_id\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.set_id\" class=\"fn\">set_id</a>(&amp;mut self, id: <a class=\"struct\" href=\"iced/id/struct.Id.html\" title=\"struct iced::id::Id\">Id</a>)</h4></section></summary><div class='docblock'>Sets the id of the widget\nThis may be called while diffing the widget tree</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.children\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#88\">source</a><a href=\"#method.children\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.children\" class=\"fn\">children</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>&gt;</h4></section></summary><div class='docblock'>Returns the state <a href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\"><code>Tree</code></a> of the children of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.diff\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#93\">source</a><a href=\"#method.diff\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.diff\" class=\"fn\">diff</a>(&amp;mut self, _tree: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>)</h4></section></summary><div class='docblock'>Reconciliates the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a> with the provided <a href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\"><code>Tree</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.operate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#96-102\">source</a><a href=\"#method.operate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.operate\" class=\"fn\">operate</a>(\n    &amp;self,\n    _state: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    _operation: &amp;mut dyn <a class=\"trait\" href=\"iced/advanced/widget/trait.Operation.html\" title=\"trait iced::advanced::widget::Operation\">Operation</a>&lt;<a class=\"enum\" href=\"iced/advanced/widget/enum.OperationOutputWrapper.html\" title=\"enum iced::advanced::widget::OperationOutputWrapper\">OperationOutputWrapper</a>&lt;Message&gt;&gt;\n)</h4></section></summary><div class='docblock'>Applies an <a href=\"iced/advanced/widget/trait.Operation.html\" title=\"trait iced::advanced::widget::Operation\"><code>Operation</code></a> to the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.on_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#108-118\">source</a><a href=\"#method.on_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.on_event\" class=\"fn\">on_event</a>(\n    &amp;mut self,\n    _state: &amp;mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _event: <a class=\"enum\" href=\"iced/enum.Event.html\" title=\"enum iced::Event\">Event</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>,\n    _clipboard: &amp;mut dyn <a class=\"trait\" href=\"iced/advanced/trait.Clipboard.html\" title=\"trait iced::advanced::Clipboard\">Clipboard</a>,\n    _shell: &amp;mut <a class=\"struct\" href=\"iced/advanced/struct.Shell.html\" title=\"struct iced::advanced::Shell\">Shell</a>&lt;'_, Message&gt;,\n    _viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>\n) -&gt; <a class=\"enum\" href=\"iced/widget/canvas/event/enum.Status.html\" title=\"enum iced::widget::canvas::event::Status\">Status</a></h4></section></summary><div class='docblock'>Processes a runtime <a href=\"iced/enum.Event.html\" title=\"enum iced::Event\"><code>Event</code></a>. <a href=\"iced/advanced/trait.Widget.html#method.on_event\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.mouse_interaction\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#125-132\">source</a><a href=\"#method.mouse_interaction\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.mouse_interaction\" class=\"fn\">mouse_interaction</a>(\n    &amp;self,\n    _state: &amp;<a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _cursor: <a class=\"enum\" href=\"iced/mouse/enum.Cursor.html\" title=\"enum iced::mouse::Cursor\">Cursor</a>,\n    _viewport: &amp;<a class=\"struct\" href=\"iced/struct.Rectangle.html\" title=\"struct iced::Rectangle\">Rectangle</a>,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"iced/mouse/enum.Interaction.html\" title=\"enum iced::mouse::Interaction\">Interaction</a></h4></section></summary><div class='docblock'>Returns the current <a href=\"iced/mouse/enum.Interaction.html\" title=\"enum iced::mouse::Interaction\"><code>mouse::Interaction</code></a> of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>. <a href=\"iced/advanced/trait.Widget.html#method.mouse_interaction\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.overlay\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget.rs.html#137-142\">source</a><a href=\"#method.overlay\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"iced/advanced/trait.Widget.html#method.overlay\" class=\"fn\">overlay</a>&lt;'a&gt;(\n    &amp;'a mut self,\n    _state: &amp;'a mut <a class=\"struct\" href=\"iced/advanced/widget/struct.Tree.html\" title=\"struct iced::advanced::widget::Tree\">Tree</a>,\n    _layout: <a class=\"struct\" href=\"iced/advanced/struct.Layout.html\" title=\"struct iced::advanced::Layout\">Layout</a>&lt;'_&gt;,\n    _renderer: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;Renderer</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"iced/advanced/overlay/struct.Element.html\" title=\"struct iced::advanced::overlay::Element\">Element</a>&lt;'a, Message, Renderer&gt;&gt;</h4></section></summary><div class='docblock'>Returns the overlay of the <a href=\"iced/advanced/trait.Widget.html\" title=\"trait iced::advanced::Widget\"><code>Widget</code></a>, if there is any.</div></details></div></details>","Widget<Message, Renderer>","iced::widget::Text"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%26str%3E-for-Text%3C'a,+Renderer%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#354-357\">source</a><a href=\"#impl-From%3C%26str%3E-for-Text%3C'a,+Renderer%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Renderer&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;<span class=\"where fmt-newline\">where\n    Renderer: <a class=\"trait\" href=\"iced/advanced/text/trait.Renderer.html\" title=\"trait iced::advanced::text::Renderer\">Renderer</a>,\n    &lt;Renderer as <a class=\"trait\" href=\"iced/advanced/trait.Renderer.html\" title=\"trait iced::advanced::Renderer\">Renderer</a>&gt;::<a class=\"associatedtype\" href=\"iced/advanced/trait.Renderer.html#associatedtype.Theme\" title=\"type iced::advanced::Renderer::Theme\">Theme</a>: <a class=\"trait\" href=\"iced/widget/text/trait.StyleSheet.html\" title=\"trait iced::widget::text::StyleSheet\">StyleSheet</a>,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/iced_core/widget/text.rs.html#359\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.75.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(content: &amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.str.html\">str</a>) -&gt; <a class=\"struct\" href=\"iced/advanced/widget/struct.Text.html\" title=\"struct iced::advanced::widget::Text\">Text</a>&lt;'a, Renderer&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<&'a str>","iced::widget::Text"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()