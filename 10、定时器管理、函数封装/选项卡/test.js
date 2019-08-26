window.onload = function() {
    var oUl1 = document.getElementById('nav');
    var aLi1 = oUl1.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('content');
    var oUl2 = aDiv[0].getElementsByTagName('ul')[0];
    var oDiv = document.getElementsByClassName('switch')[0];
    var aLi2 = oDiv.getElementsByTagName('li');
    var aBtn1 = oDiv.getElementsByTagName('button')[0];
    var aBtn2 = oDiv.getElementsByTagName('button')[1];
    var num = 0;

    aDiv[0].style.display = 'block';
    aLi1[0].className = 'active';
    aLi2[0].className = 'active';

    for (var i = 0; i < aLi1.length; i++) {
        aLi1[i].index = i;
        aLi1[i].onmouseover = function () {
            for (var i = 0; i < aLi1.length; i++) {
                aDiv[i].style.display = 'none';
                aLi1[i].className = '';
            }
            aDiv[this.index].style.display = 'block';
            this.className = 'active';
        }
    }
    aBtn1.onclick = function() {
        if (!(num == 0)) {
            aLi2[num].className = '';
            num--;
            aLi2[num].className = 'active';
            move(oUl2, 'left', 10, - num * 585)
        }
    }
    aBtn2.onclick = function() {
        if (!(num == 2)) {
            aLi2[num].className = '';
            num++;
            aLi2[num].className = 'active';
            move(oUl2, 'left', 10, - num * 585);
        }
    }

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