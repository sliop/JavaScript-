window.onload = function (){
    var aLi = document.getElementsByTagName('li');
    for (var i = 0; i<10; i++){
        aLi[i].onmouseover = function (){
            this.getElementsByTagName('div')[0].style.display = 'block';
        };
        aLi[i].onmouseout = function (){
            this.getElementsByTagName('div')[0].style.display = 'none';
        };
    };
};