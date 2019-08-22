window.onload = function(){
    var oBtnLeft = document.getElementById('left');
    var oBtnRight = document.getElementById('right');
    var oImg = document.getElementById('img');
    var oPInfo = document.getElementById('info');
    var oPDesc = document.getElementById('desc');
    var oUl = document.getElementsByTagName('ul')[0];
    var aLi = oUl.getElementsByTagName('li');
    var aImg = [];
    var arrSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg']
    var arrDesc = ['JK', '泳装', 'lolita', '雨中'];
    var num = 0;
    var no = 0;
    for (var i = 0; i < arrSrc.length; i++){
        oUl.innerHTML += '<li><img src="' + arrSrc[i] + '" /></li>';
    };
    for (var i = 0; i < arrSrc.length; i++){
        aLi[i].index = i;
        aImg[i] = aLi[i].getElementsByTagName('img')[0];
    };
    function fnTab() {
        oPInfo.innerHTML = num + 1 + '/' + arrSrc.length;
        oPDesc.innerHTML = arrDesc[num];
        oImg.src = arrSrc[num];
        for (var i = 0; i<arrSrc.length; i++){
           aLi[i].className = ''; 
        }
        aLi[num].className = 'active';
    };
    fnTab();
    oBtnLeft.onclick = function(){
            num --;
            if (num == -1) {
                num = arrSrc.length-1;
            }
            fnTab();
    };
    oBtnRight.onclick = function(){
        num ++;
        if (num == arrSrc.length){
            num = 0;
        }
        fnTab();
    };
    for (var i = 0; i < arrSrc.length; i++){
        aLi[i].onclick = function(){
            num = this.index;
            fnTab();
        };
        aLi[i].onmouseover = function(){
            no = this.index;
            aImg[no].style.display = 'block';
        };
        aLi[i].onmouseout = function(){
            no = this.index;
            aImg[no].style.display = 'none';
        };
    };
};