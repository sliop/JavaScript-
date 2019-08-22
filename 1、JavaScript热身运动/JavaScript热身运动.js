window.onload = function(){
    var oDiv1 = document.getElementById('div1');
    var oBtn1 =document.getElementById('setting');
    var oDiv2 = document.getElementById('div2');
    var oBtn2 =document.getElementById('red');
    var oBtn3 =document.getElementById('yellow');
    var oBtn4 =document.getElementById('blue');
    var oBtn5 =document.getElementById('w1');
    var oBtn6 =document.getElementById('w2');
    var oBtn7 =document.getElementById('w3');
    var oBtn8 =document.getElementById('h1');
    var oBtn9 =document.getElementById('h2');
    var oBtn10 =document.getElementById('h3');
    var oBtn11 =document.getElementById('reset');
    var oBtn12 =document.getElementById('confirm');
    oBtn1.onclick = function(){
        oDiv2.style.display = 'block';
    }
    oBtn2.onclick = function(){
        oDiv1.style.backgroundColor = 'red';
    }
    oBtn3.onclick = function(){
        oDiv1.style.backgroundColor = 'yellow';
    }
    oBtn4.onclick = function(){
        oDiv1.style.backgroundColor = 'blue';
    }
    oBtn5.onclick = function(){
        oDiv1.style.width = '200px';
    }
    oBtn6.onclick = function(){
        oDiv1.style.width = '300px';
    }
    oBtn7.onclick = function(){
        oDiv1.style.width = '400px';
    }
    oBtn8.onclick = function(){
        oDiv1.style.height = '200px';
    }
    oBtn9.onclick = function(){
        oDiv1.style.height = '300px';
    }
    oBtn10.onclick = function(){
        oDiv1.style.height = '400px';
    } 
    oBtn11.onclick = function(){
        oDiv1.style.width = '100px';
        oDiv1.style.height = '100px';
        oDiv1.style.backgroundColor = 'white';
    }
    oBtn12.onclick = function(){
        oDiv2.style.display = 'none';
    }
}