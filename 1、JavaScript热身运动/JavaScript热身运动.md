# CSS #

## 隐藏元素 ##

1. 设置`display: none;`

2. 设置`visibility: hiden;`

3. 修改width / height值

4. 修改left / top值

5. 设置透明度`opacity: 0;`

6. 用一个背景色的div遮住

7. 父元素设置`overflow: hidden;`并设置宽高

# JavaScript #

## 获取元素 ##

1. 通过id获取元素

		document.getElementById(id)

## 事件 ##

鼠标事件、键盘事件、系统事件、表单事件...

1. 鼠标事件

		onclick,onmouseover,onmouseout,onmouseup,onmousedown,onmousemove...

## 添加事件 ##

元素.事件

## 函数 ##

	function func(){ //不会主动执行
		...
	}
		
1. 直接调用：`func();`

2. 事件调用：元素.事件 = 函数名； `oDiv.onclick = func;` **不要加括号**

## 测试 ##
	
一边写，一边测

可以用aler（）来帮忙进行测试

	alert();