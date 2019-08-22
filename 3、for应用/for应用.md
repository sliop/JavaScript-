## getElementsByTagName ##

element.getElementsByTagName可以动态的获取元素集合。

	document.getElementsByTagName('div');
	document.body.innerHTML = '<div></div><div></div><div></div><div></div>'

即使是通过第二条语句动态添加的div，也可以通过第一条语句获取到。

## for循环 ##

for循环的性能，for循环中尽量少访问DOM，可以提高性能。

## CSS样式 ##

	element.style.cssText = 'width: 100px; height: 100px;'

可以用类似css的方式给元素添加样式。

## this ##

凡是单独调用函数的`func();`若函数中含有this，则this指代window；若是类似事件`element.event = func;`若函数中有this，则this指代element。