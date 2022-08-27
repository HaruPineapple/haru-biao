; (function () {
    'use strict';

    function prepareSlideshow() {
        //确保浏览器支持DOM方法
        if (!document.getElementsByTagName) return false;
        if (!document.getElementById) return false;
        //确保元素存在
        if (!document.getElementById("linklist")) return false;
        if (!document.getElementById("preview")) return false;
        //为图片应用样式
        var preview = document.getElementById("preview");
        preview.style.position = "absolut";
        preview.style.top = "0px";
        preview.style.left = "0px";
        //取得列表中的所有链接
        var list = document.getElementById("linklist");
        var links = list.getElementsByTagName("a");
        //为mouseover事件添加动画效果
        links[0].addEventListener('mouseover', e => {
            moveElement("preview", -100, 0, 10);
        })
        links[1].addEventListener('mouseover', e => {
            moveElement("preview", -200, 0, 10);
        })
        links[2].addEventListener('mouseover', e => {
            moveElement("preview", -300, 0, 10);
        })


        //     links[0].onmouseover=function(){
        //         moveElement("preview",-100,0,10);
        //     }
        //     links[1].onmouseover=function(){
        //         moveElement("preview",-200,0,10);
        //     }
        //     links[2].onmouseover=function(){
        //         moveElement("preview",-300,0,10);
        //     }
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
        elem.style.left = xpos + "px";
        elem.style.top = ypos + "px";
        var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
        movement = setTimeout(request, interval);
    };
})();

