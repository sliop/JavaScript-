window.onload = function(){
    var oUl = document.getElementsByClassName('type')[0];
    var aLi = oUl.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('content');
    var num = 0;
    var arrText = [['第一张图片', '第二张图片', '第三张图片', '第四张图片', '第五张图片', '第六张图片'], ['第一张图片', '第二张图片', '第三张图片', '第四张图片', '第五张图片', '第六张图片', '第七张图片'], ['第一张图片', '第二张图片', '第三张图片', '第四张图片'], ['第一张图片', '第二张图片', '第三张图片', '第四张图片', '第五张图片']];
    var arrSrc = [['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'], ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg'], ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg'], ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg','img/5.jpg']];

    function fnTab(){
        for(var i = 0; i < aLi.length; i++){
            aLi[i].className = '';
            aDiv[i].style.display = 'none';
        }
        aLi[num].className = 'active';
        aDiv[num].style.display = 'block';
    }

    fnTab();
    
    for (var i = 0; i < aLi.length; i++){
        aLi[i].index = i;
        aLi[i].onclick = function(){
            num = this.index;
            fnTab();
        }
    }

    for (var i = 0; i < aDiv.length; i++){
        imgTab(aDiv[i],arrText[i],arrSrc[i]);
    }
    
    function imgTab(oDiv,Text,Src){
        var oImg = oDiv.getElementsByTagName('img')[0];
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var aLi0 = oDiv.getElementsByTagName('li');
        // var arrText = ['第一张图片', '第二张图片', '第三张图片', '第四张图片', '第五张图片', '第六张图片'];
        // var arrSrc = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg'];

        for (var i = 0; i < Text.length; i++){
            oUl.innerHTML += '<li>'+ Text[i] +'</li>';
        }

        oImg.src = Src[0];

        for (var i = 0; i < aLi0.length; i++){
            aLi0[i].index = i;
            aLi0[i].onmouseover = function(){
                oImg.src = Src[this.index];
                this.className = 'active';
            }
            aLi0[i].onmouseout = function(){
                this.className = '';
            }
        }
    }
};