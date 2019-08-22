window.onload = function() {
    var oDiv = document.getElementById('nav');
    var aLi = oDiv.getElementsByTagName('li');
    var aDiv = document.getElementsByClassName('detail');
    var timer = null;
    var n1 = 0;
    var n2 = 0;

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function() {
            n1 = this.index;
            clearTimeout(timer);
            hide();
            show();
            n2 = n1;
        };
        aLi[i].onmouseout = function() {
            timer = setTimeout(hide, 200);
        };
        aDiv[i].onmouseover = function() {
            clearTimeout(timer);
            show();
        }
        aDiv[i].onmouseout = function() {
            timer = setTimeout(hide, 300);
        };
    }
    function show() {
        aDiv[n1].className = 'detail active';
    }
    function hide() {
        aDiv[n2].className = 'detail';
    }
}