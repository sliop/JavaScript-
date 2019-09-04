window.onload = function() {
    var oUl1 = document.getElementById('list');
    var aLi1 = oUl1.getElementsByTagName('li');
    var aImg1 = oUl1.getElementsByTagName('img');
    var oUl2 = document.getElementById('list1');
    var aLi2 = oUl2.getElementsByTagName('li');
    var aImg2 = oUl2.getElementsByTagName('img');
    var str = [];
    var aImg = [aImg1, aImg2];
    var timer = null;

    
    fnTime(0, 0, 1, 2, 3, 4, 5, 6, 7);
    clearInterval(timer);
    timer = setInterval(function() {
        fnTab(2);
        fnTab(5);
        fnTab(7);
        for (var i = 0; i < str[0].length - 1; i++) {
            if(str[0][i] != str[1][i]) {
                fnTab(i);
            }
        }
    }, 1000);
    
    

    function fnTime(n) {
        var now = new Date();
        var iHour = now.getHours();
        var iMin = now.getMinutes();
        var iSec = now.getSeconds();
        str[n] = toTwo(iHour) + ':' + toTwo(iMin) + ':' + toTwo(iSec);
        for(var i = 1; i < arguments.length; i++) {
            aImg[n][arguments[i]].src = 'img/' + (isNaN(Number(str[n].charAt(arguments[i]))) ? 'colon' : str[n].charAt(arguments[i])) + '.png';
        }
    }
    function fnTab(i) {
        if (isNaN(Number(str[0].charAt(i)))) {
            aLi1[i].style.display = aLi1[i].style.display == 'none' ? 'inline-block' : 'none';
        } else {
            if (parseInt(getStyle(aLi1[i], 'top')) == -50) {
                aLi1[i].style.top = 50 + 'px';
            } else if (parseInt(getStyle(aLi2[i], 'top')) == -100) {
                aLi2[i].style.top = 0;
            }
            if (parseInt(getStyle(aLi1[i], 'top')) == 50) {
                fnTime(0, i);
            } else if (parseInt(getStyle(aLi2[i], 'top')) == 0) {
                fnTime(1, i);
            }
            if (parseInt(getStyle(aLi1[i], 'top')) == 0) {
                move(aLi1[i], 'top', 1, -50);
                move(aLi2[i], 'top', 1, -50);
            } else if (parseInt(getStyle(aLi1[i], 'top')) == 50) {
                move(aLi1[i], 'top', 1, 0);
                move(aLi2[i], 'top', 1, -100);
            } 
        }
    }
    function move(obj, attr, speed, destination, endFn) {
        clearInterval(obj.timer);
        speed = parseInt(getStyle(obj, attr)) < destination ? speed : -speed;
        obj.timer = setInterval(function() {
            var pos = parseInt(getStyle(obj, attr)) + speed;
            if (pos >= destination && speed > 0 || pos <= destination && speed < 0) {
                pos = destination;
                clearInterval(obj.timer);
                endFn && endFn();
            }
            obj.style[attr] = pos + 'px';
        }, 10);
    }
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    function toTwo(n) {
        return n<10 ? '0' + n : '' + n;
    }
}