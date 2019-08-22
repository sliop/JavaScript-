window.onload = function(){
    var oDiv = document.getElementById('div');
    var oImg = document.getElementById('img');
    var oText = document.getElementById('text');
    var oBtn = document.getElementById('btn');
    var num = true;
    oImg.onclick = function(){
        if (num) {
            oImg.src = 'img/2.png';
            num = false;
        } else {
            oImg.src = 'img/1.png';
            num = true;
        };
    };
    oBtn.onclick = function() {
        if (oText.value == '') {
            alert('请输入点内容');
        } else if (num) {
            oDiv.innerHTML = '<div><img src="' + oImg.src + '" class="left" />' + '<p class="left">' + oText.value + '</p></div>' + oDiv.innerHTML;
            oText.value = '';
        } else {
            oDiv.innerHTML = '<div><img src="' + oImg.src + '" class="right" />' + '<p class="right">' + oText.value + '</p></div>' + oDiv.innerHTML;
            oText.value = '';
        }
    }
};