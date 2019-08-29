window.onload = function() {
    var oUl1 = document.getElementById('list');
    var aLi1 = oUl1.getElementsByTagName('li');
    var aImg1 = oUl1.getElementsByTagName('img');
    var oUl2 = document.getElementById('list1');
    var aLi2 = oUl2.getElementsByTagName('li');
    var aImg2 = oUl2.getElementsByTagName('img');
    var str = [];
    var aImg = [aImg1, aImg2];
    // var timer = null;

    fnTime(0);
    setTimeout(function() {
        fnTime(1);
    }, 1000);
    // clearInterval(timer);
    // timer = setInterval(function() {
    //     fnTab(5);
    // }, 1000);
    setInterval(function() {
        fnTab(5);
    }, 1000);

    function fnTime(n) {
        var now = new Date();
        var iHour = now.getHours();
        var iMin = now.getMinutes();
        var iSec = now.getSeconds();
        str[n] = toTwo(iHour) + toTwo(iMin) + toTwo(iSec);
        for (var i = 0; i < str[n].length; i++) {
            if (i < 2) {
                aImg[n][i].src = 'img/' + str[n].charAt(i) + '.png';
            } else if(i < 4) {
                aImg[n][i + 1].src = 'img/' + str[n].charAt(i) + '.png';
            } else {
                aImg[n][i + 2].src = 'img/' + str[n].charAt(i) + '.png';
            }
        }
    }
    function fnTab(i) {
        if (i < 2) {
            if (parseInt(getStyle(aLi1[i], 'top')) == -50) {
                aLi1[i].style.top = 50 + 'px';
            } else if (parseInt(getStyle(aLi2[i], 'top')) == -100) {
                aLi2[i].style.top = 0;
            }
            if (parseInt(getStyle(aLi1[i], 'top')) == 0) {
                move(aLi1[i], 'top', 1, -50, function() {
                    setTimeout(function() {
                        fnTime(0);
                    }, 500)
                });
                move(aLi2[i], 'top', 1, -50);
            } else if (parseInt(getStyle(aLi1[i], 'top')) == 50) {
                move(aLi1[i], 'top', 1, 0);
                move(aLi2[i], 'top', 1, -100, function() {
                    setTimeout(function() {
                        fnTime(1);
                    }, 500)
                });
            } 
        } else if (i < 4) {
            if (parseInt(getStyle(aLi1[i + 1], 'top')) == -50) {
                aLi1[i + 1].style.top = 50 + 'px';
            } else if (parseInt(getStyle(aLi2[i + 1], 'top')) == -100) {
                aLi2[i + 1].style.top = 0;
            }
            if (parseInt(getStyle(aLi1[i + 1], 'top')) == 0) {
                move(aLi1[i + 1], 'top', 1, -50, function() {
                    setTimeout(function() {
                        fnTime(0);
                    }, 500)
                });
                move(aLi2[i + 1], 'top', 1, -50);
            } else if (parseInt(getStyle(aLi1[i + 1], 'top')) == 50) {
                move(aLi1[i + 1], 'top', 1, 0);
                move(aLi2[i + 1], 'top', 1, -100, function() {
                    setTimeout(function() {
                        fnTime(1);
                    }, 500)
                });
            }
        } else {
            if (parseInt(getStyle(aLi1[i + 2], 'top')) == -50) {
                aLi1[i + 2].style.top = 50 + 'px';
            } else if (parseInt(getStyle(aLi2[i + 2], 'top')) == -100) {
                aLi2[i + 2].style.top = 0;
            }
            if (parseInt(getStyle(aLi1[i + 2], 'top')) == 0) {
                move(aLi1[i + 2], 'top', 1, -50, function() {
                    setTimeout(function() {
                        fnTime(0);
                    }, 500)
                });
                move(aLi2[i + 2], 'top', 1, -50);
            } else if (parseInt(getStyle(aLi1[i + 2], 'top')) == 50) {
                move(aLi1[i + 2], 'top', 1, 0);
                move(aLi2[i + 2], 'top', 1, -100, function() {
                    setTimeout(function() {
                        fnTime(1);
                    }, 500)
                });
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