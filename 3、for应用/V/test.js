window.onload = function(){
    var aDiv = document.getElementsByTagName('div');
    for(var i = 0; i<11; i++ ){
        if (i < 6){
            aDiv[i].style.top = i * 50 + 'px';
        } else {
            aDiv[i].style.top = (10-i) * 50 + 'px';
        };
        aDiv[i].style.left = i * 50 + 'px';
    };
};