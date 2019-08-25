window.onload = function() {
    var oDiv = document.getElementById('wrap');
    var oUl1 = document.getElementById('pic1');
    var oUl2 = document.getElementById('pic2');
    var oUl3 = document.getElementById('text');
    var n = 0;

    setTimeout(function() {
        move(oUl3, 'bottom', 5, 0, function() {
            setTimeout(function() {
                move(oUl3, 'bottom', 5, -60);
            }, 750)
        });
    }, 1500);           // 初始化

    clearInterval(oDiv.timer);
    oDiv.timer = setInterval(function() {
        if (parseInt(getStyle(oUl1, 'left')) == -2500) {
            oUl1.style.left = 500 + 'px';
            n = 0;      // 当第一列移动到头时，移动第一列到容器500px处
        } else if (parseInt(getStyle(oUl2, 'left')) == -2500) {
            oUl2.style.left = 500 + 'px';
            n = 0;      // 当第二列移动到头时，移动第二列到容器500px处
        }
        n++;
        if (parseInt(getStyle(oUl2, 'left')) == 500) {              // 判断第二列是否位于容器500px处
            oUl3.style.left = -500 * n + 'px';
            move(oUl1, 'left', 10, -500 * n,function() {
                move(oUl3, 'bottom', 5, 0, function() {
                    setTimeout(function() {
                        move(oUl3, 'bottom', 5, -60);
                    }, 750)
                });
            });         // 将第一列向左移动500px，并将相应的描述文字弹出收回
        } else if (parseInt(getStyle(oUl1, 'left')) == 500) {       // 判断第一列是否位于容器500px处
            oUl3.style.left = -500 * n + 'px';
            move(oUl2, 'left', 10, -500 * n,function() {
                move(oUl3, 'bottom', 5, 0, function() {
                    setTimeout(function() {
                        move(oUl3, 'bottom', 5, -60);
                    }, 750)
                });
            });         // 将第二列向左移动500px，并将相应的描述文字弹出收回
        }
        if (parseInt(getStyle(oUl1, 'left')) <= -2000) {            // 判断第一列是否位于容器2000px处 
            oUl3.style.left = 0;
            move(oUl2, 'left', 10, 0,function() {
                move(oUl3, 'bottom', 5, 0, function() {
                    setTimeout(function() {
                        move(oUl3, 'bottom', 5, -60);
                    }, 750)
                });
            });         // 将第二列向左移动500px，并将相应的描述文字弹出收回，同时将第一列向左移动500px
        } else if (parseInt(getStyle(oUl2, 'left')) <= -2000) {     // 判断第二列是否位于容器2000px处
            oUl3.style.left = 0;
            move(oUl1, 'left', 10, 0,function() {
                move(oUl3, 'bottom', 5, 0, function() {
                    setTimeout(function() {
                        move(oUl3, 'bottom', 5, -60);
                    }, 750)
                });
            });         // 将第一列向左移动500px，并将相应的描述文字弹出收回，同时将第二列向左移动500px
        }
    }, 3000);
    
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    function move(obj, attr, speed, destination, endFn) {
        clearInterval(obj.timer);
        speed = parseInt(getStyle(obj, attr)) < destination ? speed : -speed;
        obj.timer = setInterval(function() {
            var pos = parseInt(getStyle(obj, attr)) + speed;
            if (pos > destination && speed > 0 || pos < destination && speed < 0) {
                pos = destination;
                clearInterval(obj.timer);
                endFn && endFn();
            }
            obj.style[attr] = pos + 'px';
        }, 30);
    }
}