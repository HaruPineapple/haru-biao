window.onload=function(){
    moveElement();
}

function moveElement(elementID, final_x, final_y, interval) {
    //判段浏览器是否支持DOM
    if (!document.getElementById) return false;
    //判断是否有目标ID
    if (!document.getElementById(elementID)) return false;
    //选中目标参数
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    //设置目标移动方式
    if (xpos == final_x && ypos == final_y) {
        return false;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }
    //配置命定
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
    movement = setTimeout(request, interval);
}