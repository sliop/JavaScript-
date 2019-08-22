window.onload = function() {
    var oDiv = document.getElementsByTagName('div')[0];
    var aLi = document.getElementsByTagName('li');
    var oImg = document.getElementsByTagName('img')[0];
    var arrSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg', 'img/9.jpg', 'img/10.jpg', 'img/11.jpg', 'img/12.jpg', 'img/13.jpg', 'img/14.jpg'];
    var timer = null;
    var n1 = 0;
    var n2 = 0;

    fnTab();
    timer = setInterval(sequence, 1000);

    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(sequence, 1000);
    }
    for (var i = 0; i < aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function() {
            aLi[n1].className = '';
            if(n2 <= n1){
                n1 = this.index;
                n2 = this.index - 1;
            } else {
                n1 = this.index;
                n2 = this.index + 1;
            }
            aLi[n1].className = 'active';
            oImg.src = arrSrc[n1];
        }
    }

    function sequence() {
        if( n1 == 13) {
            n2 = 14;
        }else if (n1 == 0) {
            n2 = -1;
        }
        if (n2 <= n1) {
            n2 = n1;
            n1++;
            fnTab();
        } else {
            n2 = n1;
            n1--;
            fnTab();
        }
    }
    function fnTab() {
        aLi[n2].className = '';
        aLi[n1].className = 'active';
        oImg.src = arrSrc[n1];
    }
}