window.onload = function() {
    var oUl1 = document.getElementById('list');
    var aLi1 = oUl1.getElementsByTagName('li');
    var aImg1 = oUl1.getElementsByTagName('img');
    var oUl2 = document.getElementById('list1');
    var aLi2 = oUl2.getElementsByTagName('li');
    var aImg2 = oUl1.getElementsByTagName('img');
    var str = '';
    var aImg = [aImg1, aImg2];
    var now = new Date();
    var iHour = now.getHours();
    var iMin = now.getMinutes();
    var iSec = now.getSeconds();
    str = toTwo(iHour) + toTwo(iMin) + toTwo(iSec);

    // fnTime(0);
    fnTab();

    // setInterval(function() {
    //     fnTime(0);
    // }, 1000);

    // function fnTime(n) {
    //     var now = new Date();
    //     var iHour = now.getHours();
    //     var iMin = now.getMinutes();
    //     var iSec = now.getSeconds();
    //     str = toTwo(iHour) + toTwo(iMin) + toTwo(iSec);
    //     for (var i = 0; i < str.length; i++) {
    //         if (i < 2) {
    //             aImg[n][i].src = 'img/' + str.charAt(i) + '.png';
    //         } else if(i < 4) {
    //             aImg[n][i + 1].src = 'img/' + str.charAt(i) + '.png';
    //         } else {
    //             aImg[n][i + 2].src = 'img/' + str.charAt(i) + '.png';
    //         }
    //     }
    // }
    function fnTab() {
        for (var i = 0; i < str.length; i++) {
            var num = i;
            if (parseInt(getStyle(aLi1[i], top)) == 0) {
                if (i < 2) {
                    move(aLi1[i], 'top', 1, -50, function() {
                        aLi1[num].style.top = 50 + 'px';
                    });
                    move(aLi2[i], 'top', 1, -50);
                } else if (i < 4) {
                    move(aLi1[i + 1], 'top', 1, -50, function() {
                        aLi1[num + 1].style.top = 50 + 'px';
                    });
                    move(aLi2[i + 1], 'top', 1, -50);
                } else {
                    move(aLi1[i + 2], 'top', 1, -50, function() {
                        aLi1[num + 2].style.top = 50 + 'px';
                    });
                    move(aLi2[i + 2], 'top', 1, -50);
                }
            } else {
                if (i < 2) {
                    move(aLi1[i], 'top', 1, 0);
                    move(aLi2[i], 'top', 1, -100, function() {
                        aLi2[num].style.top = 0;
                    });
                } else if (i < 4) {
                    move(aLi1[i + 1], 'top', 1, 0);
                    move(aLi2[i + 1], 'top', 1, -100, function() {
                        aLi2[num + 1].style.top = 0;
                    });
                } else {
                    move(aLi1[i + 2], 'top', 1, 0);
                    move(aLi2[i + 2], 'top', 1, -100, function() {
                        aLi2[num + 2].style.top = 0;
                    });
                }
            }
        }
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
        }, 20);
    }
    function getStyle(obj, attr) {
        return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
    }
    function toTwo(n) {
        return n<10 ? '0' + n : '' + n;
    }
}