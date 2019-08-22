window.onload = function(){
    var oUl = document.getElementsByTagName('ul')[0];
    var aLi1 = oUl.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('content');
    var num = 0;

    function fnTab(){
        for (var i = 0; i < aLi1.length; i++){
            aLi1[i].className = '';
            aDiv[i].style.display = 'none';
        }
        aLi1[num].className = 'active'
        aDiv[num].style.display = 'block';
    }

    fnTab();

    for (var i = 0; i < aLi1.length; i++){
        aLi1[i].index = i;
        aLi1[i].onclick = function(){
            num = this.index;
            fnTab();
        }
    }

    for (var i = 0; i< aDiv.length; i++){
        highLight(aDiv[i]);
    }

    function highLight(oDiv) {
        var oOl = oDiv.getElementsByTagName('ol')[0];
        var aLi2 = oOl.getElementsByTagName('li');
        for(var i = 0; i < aLi2.length; i++){
            aLi2[i].onmouseover = function(){
                this.className = 'active';
            }
            aLi2[i].onmouseout = function(){
                this.className = '';
            }
        }
    }
}