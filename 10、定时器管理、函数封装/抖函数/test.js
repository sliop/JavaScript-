window.onload = function() {
    var aImg = document.getElementsByTagName('img');

    for (var i = 0; i < aImg.length; i++) {
        aImg[i].style.left = 10 + 110 * i +'px';
        aImg[i].top = parseInt(getStyle(aImg[i], 'top'));
        aImg[i].onmouseover = function() {
            shake(this, 'top');
        }
    }

    function shake(obj, attr) {
        var arrShake = [];
        var num = 0;
        for (var i = 20; i > 0; i -=2) {
            arrShake.push(i, -i);
        }
        arrShake.push(0);
        clearInterval(obj.shake);
        obj.shake = setInterval(function() {
            if (arrShake[num] == 0) {
                clearInterval(obj.shake);
            }
            obj.style[attr] = obj.top + arrShake[num] + 'px';
            num++;
        }, 30)
    }
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
}