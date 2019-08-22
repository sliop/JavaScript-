window.onload = function(){
    var oBtn1 = document.getElementById('last');
    var oBtn2 = document.getElementById('next');
    var aImg = document.getElementsByTagName('img');
    var aP = document.getElementsByTagName('p');
    var aSpan = document.getElementsByTagName('span');
    var aSrc0 = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'];
    var aSrc1 = ['img/5.jpg', 'img/6.jpg', 'img/7.jpg'];
    var aText0 = ['第一组第1张', '第一组第2张', '第一组第3张', '第一组第4张'];
    var aText1 = [ '第二组第1张', '第二组第2张', '第二组第3张'];
    num0 = 0; 
    num1 = 0;
    function fnTab(){
        aImg[0].src = aSrc0[num0];
        aP[0].innerHTML = aText0[num0];
        aSpan[0].innerHTML = 1 + num0 + '/' + aSrc0.length;
        aImg[1].src = aSrc1[num1];
        aP[1].innerHTML = aText1[num1];
        aSpan[1].innerHTML = 1 + num1 + '/' + aSrc1.length;
    };
    fnTab();
    oBtn1.onclick = function(){
        num0--;
        num1--;
        if (num0 == -1){
            num0 = aSrc0.length - 1;
        };
        if (num1 == -1){
            num1 = aSrc1.length - 1;
        };
        fnTab();
    };
    oBtn2.onclick = function(){
        num0++;
        num1++;
        if (num0 == aSrc0.length){
            num0 = 0;
        };
        if (num1 == aSrc1.length){
            num1 = 0;
        };
        fnTab();
    };
    aImg[0].onclick = function(){
        num0++;
        if (num0 == aSrc0.length){
            num0 = 0;
        };
        aImg[0].src = aSrc0[num0];
        aP[0].innerHTML = aText0[num0];
        aSpan[0].innerHTML = 1 + num0 + '/' + aSrc0.length;
    };
    aImg[1].onclick = function(){
        num1++;
        if (num1 == aSrc1.length){
            num1 = 0;
        };
        aImg[1].src = aSrc1[num1];
        aP[1].innerHTML = aText1[num1];
        aSpan[1].innerHTML = 1 + num1 + '/' + aSrc1.length;
    };
    /*
    var aSrc = [['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'], ['img/5.jpg', 'img/6.jpg', 'img/7.jpg']];
    var aText = [['第一组第1张', '第一组第2张', '第一组第3张', '第一组第4张'], [ '第二组第1张', '第二组第2张', '第二组第3张']];
    var num = [0, 0];
    function fnTab(){
        for (var i = 0; i < aSrc.length; i++){
            aImg[i].src = aSrc[i][num[i]];
            aP[i].innerHTML = aText[i][num[i]];
            aSpan[i].innerHTML = 1 + num[i] + '/' + aSrc[i].length;
        };
    };
    fnTab();
    oBtn1.onclick = function(){
        num[0]--;
        num[1]--;
        if (num[0] == -1){
         num[0] = aSrc[0].length - 1;
        };
        if (num[1] == -1){
            num[1] = aSrc[1].length - 1;
        };
        fnTab();
    };
    oBtn2.onclick = function(){
        num[0]++;
        num[1]++;
        if (num[0] == aSrc[0].length){
         num[0] = 0;
        };
        if (num[1] == aSrc[1].length){
            num[1] = 0;
        };
        fnTab();
    };
    for (var i = 0; i < aSrc.length; i++){
        aImg[i].index = i;
        aImg[i].onclick = function(){
            num[this.index]++;
            if (num[this.index] == aSrc[this.index].length){
                num[this.index] = 0;
            };
            aImg[this.index].src = aSrc[this.index][num[this.index]];
            aP[this.index].innerHTML = aText[[this.index]][num[this.index]];
            aSpan[this.index].innerHTML = 1 + num[this.index] + '/' + aSrc[this.index].length;
        };
    };
    */
};