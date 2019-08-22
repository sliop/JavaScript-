window.onload = function (){
    var aDiv = document.getElementsByTagName('div');
    for (var i = 0; i<10; i++){
        for(var j = 0; j<10; j++){
            aDiv[i * 10 + j].style.top = 10 + i * 60 + 'px';
            aDiv[i * 10 + j].style.left = 10 + j *60 + 'px';
        };
    };
};