# 笔试题1(HTML、CSS)

1. 谈谈你对 Web 标准的理解(结构、表现、行为)

    网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。对应的标准也分三方面：结构化标准语言主要包括XHTML和XML，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMAScript等。这些标准大部分由万维网联盟（外语缩写：W3C）起草和发布，也有一些是其他标准组织制订的标准，比如ECMA（European Computer Manufacturers Association）的ECMAScript标准。

  	WEB标准（结构、表现、行为分离）具有以下优点：

  	- 平稳退化：即使在浏览器不支持某些功能的情况下也能帮助浏览器理解和显示Web文档的结构。
  	- 易于维护：只需更改CSS文件，就可以改变整站的样式
  	- 页面响应快：HTML文档体积变小，响应时间短
  	- 可访问性：语义化的HTML（结构和表现相分离的HTML）编写的网页文件，更容易被屏幕阅读器识别
  	- 设备兼容性：不同的样式表可以让网页在不同的设备上呈现不同的样式
  	- 搜索引擎优化：语义化的HTML能更容易被搜索引擎解析，提升排名

2. 谈谈你对 HTML5 的理解

  HTML5 是下一代 HTML 标准。

  HTML5 是 W3C 与 WHATWG 合作的结果,WHATWG 指 Web Hypertext Application Technology Working Group。

  WHATWG 致力于 web 表单和应用程序，而 W3C 专注于 XHTML 2.0。在 2006 年，双方决定进行合作，来创建一个新版本的 HTML。
  
  HTML5 的改进:
  - 新元素
  - 新属性
  - 完全支持 CSS3
  - Video 和 Audio
  - 2D/3D 制图
  - 本地存储
  - 本地 SQL 数据
  - Web 应用

3. HTML5 为什么只需要写 `<!DOCTYPE HTML>` ?

  在 HTML 4.01 中，<!DOCTYPE> 声明需引用 DTD （文档类型声明），因为 HTML 4.01 是基于 SGML （Standard Generalized Markup Language 标准通用标记语言）。DTD 指定了标记语言的规则，确保了浏览器能够正确的渲染内容。

  HTML5 不是基于 SGML，因此不要求引用 DTD。

4. 标签元素有哪几类?各类元素有哪些?

  标签元素分为：
  
  - 块级元素：通常浏览器会在块级元素前后另起一个新行。块级元素占据其父元素（容器）的整个空间，因此创建了一个“块”。一般块级元素可以包含行内元素和其他块级元素。块级元素有`<address>`、 `<article>`、 `<blockquote>`、 `<canvas>`、 `<div>`、 `<dl>`等。
  - 行内元素：默认情况下，行内元素不会以新行开始，而块级元素会新起一行。一个行内元素只占据它对应标签的边框所包含的空间。一般情况下，行内元素只能包含数据和其他行内元素。行内元素有`<a>`、 `<button>`、 `<cite>`、 `<code>`、 `<kbd>`、 `<img>`、 `<input>`、 `<span>`等。

5. 介绍一下你对浏览器内核的理解?有哪几种浏览器内核?

  浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。不同的浏览器内核对网页编写语法的解释也有不同，因此同一网页在不同的内核的浏览器里的渲染（显示）效果也可能不同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。浏览器内核主要包括以下三个技术分支：排版渲染引擎、 JavaScript引擎，以及其他。

  有Trident内核（IE）、Gecko内核（Mozilla Firefox）、Webkit内核（Safari）、Blink内核（Chrome）。

6. HTML5 有哪些新特性、移除了哪些元素?如何处理 HTML5 新标签的浏览器器兼容问题?如何区分 HTML 和 HTML5?

  新特性：
  
  - 语义标签
  - 增强型表单
  - 视频和音频
  - 2D/3D制图
  - 地理定位
  - 本地储存储
  - 本地SQL数据
  - Web 应用

  移除了：
  
  - `<acronym>`
  - `<applet>`
  - `<basefont>`
  - `<big>`
  - `<center>`
  - `<dir>`
  - `<font>`
  - `<frame>`
  - `<frameset>`
  - `<noframes>`
  - `<strike>`

  现代的浏览器都支持 HTML5。此外，所有浏览器，包括旧的和最新的，对无法识别的元素会作为内联元素自动处理。对与IE8及更早版本的IE浏览器可以使用html5shinv：
  
		<!--[if lt IE 9]>
		  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->

  html5shiv.js 引用代码必须放在 `<head> `元素中。
  
  区分HTML和HTML5:
  
  1. 文档类型声明：
     - HTML5的文档类型声明很简洁`<!DOCTYPE html>`
     - HTML声明：`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">`

  2. 结构语义：
     - HTML:没有体现结构语义化的标签
     - HTML5:新增了语义标签，比如: `<article>`、 `<footer>`、 `<header>`、 `<nav>`、 `<section>`等。
  
7. 简述⼀下你对 HTML 语义化的理解?

  语义化是指用带有正确语义的标签来标记内容，语义化有以下几个优点：
  
  - 在没有CSS的情况下，使页面也能呈现出很好地内容结构、代码结构。
  - 有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
  - 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以有意义的方式来渲染网页；
  - 便于团队开发和维护，语义化更具可读性，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
 
8. 介绍⼀下你对盒模型的理解?

  盒模型分为两种：IE盒模型（IE 6 以下版本浏览器）和标准盒模型。
  
  - 标准盒模型：元素的width=content的宽度，元素的height=content的高度；整个盒模型占据的宽度=左外边距（margin-left）+左边界（border-left）+左内边距（padding-left）+内容的宽度（width）+右内边距（padding-right）+右边界（border-right）+右外边距（margin-right），高度同理。
  - IE盒模型：元素的width=盒子的宽度，元素的height=盒子的高度；盒子的宽度（width）=左边界（border-left）+左内边距（padding-left）+内容的宽度+右内边距（padding-right）+右边界（border-right），高度同理。

9.  CSS 选择符有哪些？

  - 基本选择符：
     1. id选择符：`#idname(ID名)`
     2. 类选择符：`.classname(类名)`
     3. 元素选择器：`elementname(元素名称)`
     4. 通配选择器：`*`, `ns|*`, `*|*`, `|*`
     5. 属性选择器：`[属性=值]`

  - 组合选择符：
	 1. 相邻兄弟选择器：`A + B`
	 2. 普通兄弟选择器：`A ~ B`
	 3. 子选择器：`A > B`
	 4. 后代选择器：`A B`

  - 伪类：`:active`、 `:hover`、 `:visited`、 `nth-child()`等

  - 伪元素：`::before`、 `::after`、 `::placeholder`等

10.  CSS 优先级算法如何计算?

    ID 选择器 > 类选择器 = 属性选择器 = 伪类 > 元素选择器 = 伪元素
  
    通配选择符、关系选择符和否定伪类对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。
  
    | 选择器类别 | 说明 | 权重表示 | 权值表示 |
    | :----: | :----: | :----: | :----: |
    | id选择器 | selector中使用了几个id，即#的个数 | (1.0.0) | 100 |
    | 类选择器 | 类,伪类,以及属性的个数如：`.outerClass .buttonClass[type="button"]:hover{}`选择器中有2个类,1个属性,1个伪类(0.4.0) | (0.1.0) | 10 |
    | 元素选择器 | 伪元素和标签元素的个数，如： `p:first-child`选择器中有一个标签元素p和一个伪元素first-child (0.0.2)| (0.0.1) | 1 |
 
11. 有哪⼏种居中方式?

    1. 水平居中 
        1. 行内元素水平居中：`text-align: center;`可以实现在块级元素内部的行内元素水平居中。此方法对行内元素(inline), 内联块(inline-block), 内联表(inline-table), inline-flex元素水平居中都有效。
        2. 固定宽度块级元素水平居中：`margin: 0 auto;`通过把固定宽度块级元素的margin-left和margin-right设成auto，就可以使块级元素水平居中。
        3. 未知宽度块级元素水平居中：
        	1. 默认子元素的宽度和父元素一样，这时需要设置子元素为`display: inline-block;` 或 `display: inline;`即将其转换成行内块级/行内元素，给父元素设置 `text-align: center; `
        	2. 首先设置父元素为相对定位，再设置子元素为绝对定位，设置子元素的`left:50%;`，即让子元素的左上角水平居中；同时设置子元素`transform: translateX(-50%);`
        	3. 给待处理的块状元素的父元素添加属性 `display: flex; justify-content: center;`
        	4. 通过给父元素设置 float，然后给父元素设置 `position:relative` 和 `left:50%`,给子元素设置 `position:relative` 和 `left:-50%` 来实现水平居中。
        4. 多块级元素水平居中:
            1. 利用inline-block:如果一行中有两个或两个以上的块级元素，通过设置块级元素的显示类型为inline-block和父容器的text-align属性从而使多块级元素水平居中。
                    
                    .container {
                    	text-align: center;
                    }
                    .inline-block {
                    	display: inline-block;
                    }
					
            2. 利用`display: flex;`：利用弹性布局(flex)，实现水平居中，其中justify-content 用于设置弹性盒子元素在主轴（横轴）方向上的对齐方式。

                    .flex-center {
                        display: flex;
                        justify-content: center;
                    }
                    
    2. 垂直居中：
        1. 单行内联(inline)元素垂直居中:通过设置内联元素的高度(height)和行高(line-height)相等，从而使元素垂直居中。
        2. 多行行内元素垂直居中: 使用给父元素设置`display:table-cell;`和`vertical-align: middle;`属即可；
		3. 块级元素垂直居中：
			1. 首先设置父元素为相对定位，再设置子元素为绝对定位，设置子元素的`top: 50%;`，即让子元素的左上角垂直居中；
				- 子元素高度不定：设置子元素`transform: translateY(-50%)`;
				- 子元素高度固定：设置margin-top向上偏移元素高度的一半。
			2. 使用flex布局，只需要给待处理的块状元素的父元素添加属性 `display: flex; align-items: center;`
			3. 利用伪元素实现垂直居中，即在父容器内放一个100%高度的伪元素，让文本和伪元素垂直对齐，从而达到垂直居中的目的。
					
					.ghost-center {
					    position: relative;
					}
					.ghost-center::before {
					    content: " ";
					    display: inline-block;
					    height: 100%;
					    width: 1%;
					    vertical-align: middle;
					}
					.ghost-center p {
					    display: inline-block;
					    vertical-align: middle;
					    width: 20rem;
					}
	3. 水平垂直居中：
		1. 单行行内元素：父元素设置`text-align:center，display：table-cell;vertical-align:middle;`
		2. 已知高度和宽度的元素：
			1. 设置父元素为相对定位，给子元素设置绝对定位，`top: 0; right: 0; bottom: 0; left: 0; margin: auto`;
			2. 设置父元素为相对定位，给子元素设置绝对定位，left: 50%; top: 50%; margin-left: --元素宽度的一半px; margin-top: --元素高度的一半px;
		3. 未知高度和宽度的元素：
			1. 设置父元素为相对定位，给子元素设置绝对定位，`left: 50%; top: 50%; transform: translateX(-50%) translateY(-50%);`
			2. 设置父元素为flex定位，`justify-content: center; align-items: center;`


12. display 值有哪些，说出他们的作用

	- none：此元素不会被显示。
    - block：此元素将显示为块级元素，此元素前后会带有换行符。
    - inline：默认。此元素会被显示为内联元素，元素前后没有换行符。
    - inline-block：行内块元素。（CSS2.1 新增的值）
    - list-item：此元素会作为列表显示。
    - run-in：此元素会根据上下文作为块级元素或内联元素显示。
    - table：此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。
    - inline-table：此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。
    - table-row-group：此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。
    - table-header-group：此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。
    - table-footer-group：此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。
    - table-row：此元素会作为一个表格行显示（类似 `<tr>`）。
    - table-column-group：此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。
    - table-column：此元素会作为一个单元格列显示（类似 `<col>`）
    - table-cell：此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）
    - table-caption：此元素会作为一个表格标题显示（类似 `<caption>`）
    - inherit：规定应该从父元素继承 display 属性的值。

13. 简介 position 及各属性值

    - absolute：生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
    - fixed：生成固定定位的元素，相对于浏览器窗口进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
    - relative：生成相对定位的元素，相对于其正常位置进行定位。因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
    - static：默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
    - sticky：粘性定位，该定位基于用户滚动的位置。它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
    - inherit：规定应该从父元素继承 position 属性的值。
    - initial：设置该属性为默认值

14. 简介 display 及各属性值

	- none：此元素不会被显示。
    - block：此元素将显示为块级元素，此元素前后会带有换行符。
    - inline：默认。此元素会被显示为内联元素，元素前后没有换行符。
    - inline-block：行内块元素。（CSS2.1 新增的值）
    - list-item：此元素会作为列表显示。
    - run-in：此元素会根据上下文作为块级元素或内联元素显示。
    - table：此元素会作为块级表格来显示（类似 `<table>`），表格前后带有换行符。
    - inline-table：此元素会作为内联表格来显示（类似 `<table>`），表格前后没有换行符。
    - table-row-group：此元素会作为一个或多个行的分组来显示（类似 `<tbody>`）。
    - table-header-group：此元素会作为一个或多个行的分组来显示（类似 `<thead>`）。
    - table-footer-group：此元素会作为一个或多个行的分组来显示（类似 `<tfoot>`）。
    - table-row：此元素会作为一个表格行显示（类似 `<tr>`）。
    - table-column-group：此元素会作为一个或多个列的分组来显示（类似 `<colgroup>`）。
    - table-column：此元素会作为一个单元格列显示（类似 `<col>`）
    - table-cell：此元素会作为一个表格单元格显示（类似 `<td>` 和 `<th>`）
    - table-caption：此元素会作为一个表格标题显示（类似 `<caption>`）
    - inherit：规定应该从父元素继承 display 属性的值。

15. 用纯 CSS 绘制一个三角形

        .tri{
            width: 0px;
            height: 0px;
            border-width: 50px;
            border-style: solid;
            border-color: red transparent transparent transparent
        }

16. 为什么要初始化 CSS 样式?列举出需要初始化的几个方法。

    因为浏览器的兼容性，每个浏览器设计时都有自己的特性，因此在解析标签的时候就产生一些差异，因此显示页面的时候就会出现微小的差异。

        body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0} 
        body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;} 
        a{color:#2d374b;text-decoration:none} 
        a:hover{color:#cd0200;text-decoration:underline} 
        em{font-style:normal} 
        li{list-style:none} 
        img{border:0;vertical-align:middle} 
        table{border-collapse:collapse;border-spacing:0} 
        p{word-wrap:break-word}

17. position 跟 display、margin overflow、float 这些特性相互叠加后会怎么样?哪些会⽣效?为什么?



18. 浮动的意义?为什么要清除浮动?列举清除浮动的方法并说明各副作用。 什么是外边距合并?



19. ::before 和 :after中双冒号和单冒号有什么区别?解释一下这2个伪元素的作⽤.

    在CSS2之前规范不明确的时候，伪元素和伪类都使用单冒号(:)来表示。而CSS3规范中的要求使用双冒号(::)表示伪元素，以此来区分伪元素和伪类。为了兼容过去的写法，CSS3之前的伪元素仍然可以使用单冒号(:)来表示，浏览器是可以解析的。但是CSS3之后出现的伪元素必须用双冒号表示，不再支持单冒号的形式。
    - "::before" 创建一个伪元素，其将成为匹配选中的元素的第一个子元素。常通过 content 属性来为一个元素添加修饰性的内容。此元素默认为行内元素。
    - "::after" 用来创建一个伪元素，作为已选中元素的最后一个子元素。通常会配合content属性来为该元素添加装饰内容。这个虚拟元素默认是行内元素。

20. 你对line-height是如何理解的?



21. 设置元素浮动后，该元素的 display 值是多少?

    设置元素为浮动后，display的值是block。

22. 说明以下属性值为百分数时是基于什什么作为标准值?

  - width：基于包含块（父元素）宽度的百分比宽度。
  - height：基于包含它的块级对象的百分比高度。
  - font-size：基于父元素的一个百分比值。
  - line-height：与元素自身的字体大小有关。计算值是给定的百分比值乘以元素计算出的字体大小。
  - margin：基于父元素的宽度的百分比的外边距。
  - padding：相对于包含块的宽度。

  