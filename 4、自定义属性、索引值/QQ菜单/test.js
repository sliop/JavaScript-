window.onload = function() {
    var oUl = document.getElementById('list');
    var aH2 = document.getElementsByTagName('h2');
    var aUl = oUl.getElementsByTagName('ul');
    var aLi = null;
    var li = [];
    for ( var i = 0; i < aH2.length; i++ ) {
        aH2[i].index = i;
        aH2[i].onclick = function(){
            if(this.className == ''){
                for(var i = 0; i < aH2.length; i++){
                    aH2[i].className = '';
                    aUl[i].style.display = 'none';
                };
                this.className = 'active';
                aUl[this.index].style.display = 'block';
            } else {
                this.className = '';
                aUl[this.index].style.display = 'none';
            };
        };
    };
    for ( var i = 0; i < aUl.length; i++ ){
        aLi = aUl[i].getElementsByTagName('li');
        for ( var j = 0; j < aLi.length; j++ ){
            li.push(aLi[j]);
        };
    };
    for (var i = 0; i < li.length; i++){
        li[i].onclick = function(){
            if(this.className == ''){
                for (var i = 0; i < li.length; i++){
                    li[i].className = '';
                };
                this.className = 'hover';
            } else {
                this.className = '';
            }
        };
    };
};