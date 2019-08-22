window.onload = function() {
    var oUp = document.getElementById('up');
    var oImg = document.getElementsByTagName('img')[0];
    var oDown = document.getElementById('down');
    var timer = null;
    var position = 30;

    oUp.onmousedown = function() {
        timer = setInterval(function() {
            if (position > -510){
                position--;
                oImg.style.top = position + 'px';
            }
        } , 5);
    }
    oUp.onmouseup = function() {
        clearInterval(timer);
    }
    oDown.onmousedown = function() {
        timer = setInterval(function() {
            if (position < 30){
                position++;
                oImg.style.top = position + 'px';
            }
        }, 5);
    }
    oDown.onmouseup = function() {
        clearInterval(timer);
    }
}