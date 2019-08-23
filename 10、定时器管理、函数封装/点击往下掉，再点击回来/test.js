window.onload = function() {
    var aDiv = document.getElementsByTagName('div');
    var str = '';
    var len = 20;
    var num = 0;

    for (var i = 0; i < len; i++) {
        str +='<div style="left: ' + (60 * i + 10) + 'px;"></div>';
    }
    document.body.innerHTML = str;
    document.onclick = function() {
        if (parseInt(getStyle(aDiv[0], 'top')) == 10 && parseInt(getStyle(aDiv[len - 1], 'top')) == 10) {
            clearInterval(document.timer);
            document.timer = setInterval(function() {
                doMove(aDiv[num], 'top', 20, 500)
                num++;
                if (num == len) {
                    clearInterval(document.timer);
                    num = 0;
                }
            }, 100)
        } else if(parseInt(getStyle(aDiv[0], 'top')) == 500 && parseInt(getStyle(aDiv[len - 1], 'top')) == 500) {
            clearInterval(document.timer);
            document.timer = setInterval(function() {
                doMove(aDiv[num], 'top', 20, 10)
                num++;
                if (num == len) {
                    clearInterval(document.timer);
                    num = 0;
                }
            }, 100)
        }
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
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
}