window.onload = function() {
    var aUl = document.getElementsByClassName('song');
    var aInp = document.getElementsByTagName('input');
    var str = '';

    for (var i = 0; i < aUl.length; i++) {
        if (i%2 == 0) {
            aUl[i].onOff = true;
        } else {
            aUl[i].onOff = false;
        }
        aUl[i].index = i;
        aInp[i].index = i;
        if (aUl[i].onOff) {
            aUl[i].className = 'song odd';
        }
        aUl[i].onmouseover = function() {
            str = this.className
            this.className = 'song active';
        }
        aUl[i].onmouseout = function() {
            if (aInp[this.index].checked) {
                this.className = 'song active';
            } else if (this.onOff) {
                this.className = 'song odd';
            } else {
                this.className = 'song';
            }
        }
        aInp[i].onclick = function() {
            aInp[aInp.length - 1].checked = true;
            for (var i = 0; i < aUl.length; i++) {
                if (!aInp[i].checked) {
                    aInp[aInp.length - 1].checked = false;
                    break;
                }
            }
        }
    }
    aInp[aInp.length - 1].onclick = function() {
        if (this.checked) {
            for (var i = 0; i < aUl.length; i++) {
                aInp[i].checked = true;
                aUl[i].className = 'song active'
            }
        } else {
            for (var i = 0; i < aUl.length; i++) {
                aInp[i].checked = false;
                if (aUl[i].onOff) {
                    aUl[i].className = 'song odd';
                } else {
                    aUl[i].className = 'song';
                }
            }
        }
    }
}