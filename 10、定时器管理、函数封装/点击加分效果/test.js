window.onload = function() {
    var oDiv1 = document.getElementById('content');
    var oDiv2 = document.getElementById('bg');
    var aSpan = document.getElementsByTagName('span');

    oDiv1.onclick = function() {
        if (!oDiv1.onOff) {
            oDiv1.onOff = true;
            var n = 0;
            doMove(oDiv2, 'left', 10, 0, function(){
                opacity(oDiv2);
                setTimeout(function(){
                    oDiv2.style.left = -480 + 'px';
                    oDiv2.style.opacity = 1;
                    for (var i = 0; i < aSpan.length; i++) {
                        aSpan[i].style.bottom = 10 + 'px';
                        aSpan[i].style.opacity = 1;
                    }
                    oDiv1.onOff = false;
                }, 1000);
            });
            clearInterval(oDiv1.timer);
            oDiv1.timer = setInterval(function() {
                doMove(aSpan[n], 'bottom', 10, 200);
                opacity(aSpan[n]);
                n++;
                if (n == 10) {
                    n = 0;
                    clearInterval(oDiv1.timer);
                }
            }, 150)
        }
    }

    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    function doMove(obj, attr, speed, destination, endFn) {
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
    function opacity(obj){
        var num = 1;
        clearInterval(obj.opacity);
        obj.opacity = setInterval(function() {
            num -= 0.1; 
            if (num < 0) {
                num = 0;
                clearInterval(obj.opacity);
            }
            obj.style.opacity = num;
        }, 50)
    }
}