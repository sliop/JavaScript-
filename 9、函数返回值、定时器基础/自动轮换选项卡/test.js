window.onload = function() {
    var oDiv = document.getElementById('wrap');
    var oUl = document.getElementById('nav');
    var aLi1 = oUl.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('content');
    var aImg = document.getElementsByTagName('img');
    var aLi2 = [];
    var list =[];
    var arrSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg']
    var timer = null;
    var n1 = 0;
    var n2 = 0;

    for (var i = 0; i < aDiv.length; i++) {
        list = aDiv[i].getElementsByTagName('li');
        for (var j = 0; j < list.length; j++){
            aLi2.push(list[j]);
        }
    }

    aLi1[0].className = 'active';
    aDiv[0].style.display = 'block';
    aImg[0].src = arrSrc[n1];
    aLi2[n1].className = 'active';
    timer = setInterval(fnTab, 1000);

    oDiv.onmouseover = function(){
        clearInterval(timer);
    };
    oDiv.onmouseout = function(){
        timer = setInterval(fnTab, 1000);
    };

    for (var i = 0; i < aDiv.length; i++) {
        aLi1[i].index = i;
        aLi1[i].onclick = function() {
            if (this.index == 0){
                if (n1 > 2){
                    aLi2[n1].className = '';
                    n1 = 0;               
                    aLi1[0].className = 'active';
                    aDiv[0].style.display = 'block';
                    aLi1[1].className = '';
                    aDiv[1].style.display = 'none';
                    aImg[0].src = arrSrc[n1];
                    aLi2[n1].className = 'active';
                }
            } else {
                if (n1 < 3){
                    aLi2[n1].className = '';
                    n1 = 3;
                    aLi1[0].className = '';
                    aDiv[0].style.display = 'none';
                    aLi1[1].className = 'active';
                    aDiv[1].style.display = 'block';
                    aImg[1].src = arrSrc[n1];
                    aLi2[n1].className = 'active';
                }
            }
        }
    }

    for (var i = 0; i < aLi2.length; i++) {
        aLi2[i].index = i;
        aLi2[i].onmouseover = function() {
            aLi2[n1].className = '';
            n1 = this.index;
            aLi2[n1].className = 'active';
            if( this.index < 3) {
                aImg[0].src = arrSrc[n1];
            } else {
                aImg[1].src = arrSrc[n1];
            }
        }
    }

    function fnTab(){
        n2 = n1;
        n1++;
        n1%=6;
        if(n1 < 3) {
            aLi1[0].className = 'active';
            aDiv[0].style.display = 'block';
            aImg[0].src = arrSrc[n1];
            aLi1[1].className = '';
            aDiv[1].style.display = 'none';
        } else {
            aLi1[0].className = '';
            aDiv[0].style.display = 'none';
            aLi1[1].className = 'active';
            aDiv[1].style.display = 'block';
            aImg[1].src = arrSrc[n1];
        }
        aLi2[n2].className = '';
        aLi2[n1].className = 'active';
    }
}