window.onload = function() {
    var aBtn = document.getElementsByTagName('button');
    var oSpan = document.getElementsByTagName('span')[0];
    var arrText = ['', '很差', '较差', '还行' , '推荐', '力荐'];
    var num = 0;

    oSpan.innerHTML = '';

    for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onmouseover = function() {
            oSpan.innerHTML = arrText[this.index + 1];
            for (var i = 0; i < aBtn.length; i++) {
                if (i > this.index) {
                    aBtn[i].className = 'star';
                } else {
                    aBtn[i].className = 'star star_active'
                }
            }
        }
        aBtn[i].onmouseout = function() {
            oSpan.innerHTML = arrText[num];
            for (var i = 0; i < aBtn.length; i++) {
                if (i < num) {
                    aBtn[i].className = 'star star_active';
                } else {
                    aBtn[i].className = 'star';
                }
            }
        }
        aBtn[i].onclick = function() {
            num = this.index + 1;
            oSpan.innerHTML = arrText[num];
            for (var i = 0; i < aBtn.length; i++) {
                if (i < num) {
                    aBtn[i].className = 'star star_active';
                } else {
                    aBtn[i].className = 'star';
                }
            }
        }
    }
}