window.onload = function(){
    var oBtnCircle = document.getElementById('circle');
    var oBtnSequence = document.getElementById('sequence');
    var oPDefine = document.getElementById('define');
    var oBtnLeft = document.getElementById('left');
    var oBtnRight = document.getElementById('right');
    var oImg = document.getElementById('img');
    var oPInfo = document.getElementById('info');
    var oPDesc = document.getElementById('desc');
    var arrSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg']
    var arrDesc = ['JK', '泳装', 'lolita', '雨中'];
    var num = 0;
    function fnTab() {
        oPInfo.innerHTML = num + 1 + '/' + arrSrc.length;
        oPDesc.innerHTML = arrDesc[num];
        oImg.src = arrSrc[num];
    };
    function circle() {
        oPDefine.innerHTML = '图片可从最后一张跳转到第一张循环切换';
        oBtnLeft.onclick = function() {
            num --;
            if (num == -1) {
                num = arrSrc.length-1;
            }
            fnTab();
        };
        oBtnRight.onclick = function() {
            num ++;
            if (num == arrSrc.length) {
                num = 0;
            }
            fnTab();
        };
    };
    fnTab();
    circle()
    oBtnCircle.onclick = circle;
    oBtnSequence.onclick = function() {
        oPDefine.innerHTML = '图片只能到最后一张或第一张切换';
        oBtnLeft.onclick = function() {
            num --;
            if (num == -1) {
                num = 0;
                alert('已经是第一张了');
            }
            fnTab();
        };
        oBtnRight.onclick = function() {
            num ++;
            if (num == arrSrc.length) {
                num = 3;
                alert('已经是最后一张了');
            }
            fnTab();
        };
    };
};