$(document).ready(function(){

    // Available animations:
    // right, left, bottom, top, rotate, none, opacity, scale, zoom,
    // scaleY, scaleX, rotateY, rotateYR (reverse), rotateX, rotateXR (reverse)

    /*
    right: 对话框从右侧滑入或滑出。
    left: 对话框从左侧滑入或滑出。
    bottom: 对话框从底部滑入或滑出。
    top: 对话框从顶部滑入或滑出。
    rotate: 对话框旋转进入或旋转退出。
    none: 没有动画效果，直接显示或隐藏对话框。
    opacity: 对话框通过透明度变化来显示或隐藏。
    scale: 对话框通过缩放效果来显示或隐藏。
    zoom: 对话框通过缩放并淡入淡出来显示或隐藏。
    * */


    /*
    * 15.旋转X模式
    * */
    $("#btn15").on("click", function(){
        $.confirm({
            animation: 'zoom',
            closeAnimation: 'opacity'
        });
    })
    /*
    * 16.旋转Y模式
    * */
    $("#btn16").on("click", function(){
        $.confirm({
            animation: 'zoom',
            closeAnimation: 'rotateY'
        });
    })
    /*
    * 17.旋转rotateYR
    * */
    $("#btn17").on("click", function(){
        $.confirm({
            animation: 'top',
            closeAnimation: 'rotateYR'
        });
    })

    $("#btn19").on("click", function(){
            $.confirm({
                animation: 'right',
                closeAnimation: 'right',
                animateFromElement: false,
            });
    })
    /*
    * 20. 左边飞入,从右到左飞出
    * */
    $("#btn20").on("click", function(){
        $.confirm({
            animation: 'left',
            closeAnimation: 'left',
            animateFromElement: false,
        });
    })
    /*
    * 下出下入
    * */
    $("#btn21").on("click", function(){
        $.confirm({
            animation: 'bottom',
            closeAnimation: 'bottom',
            animateFromElement: false,
        });
    })

    /*
    *上出上入
    * */
    $("#btn22").on("click", function(){
        $.confirm({
            animation: 'top',
            closeAnimation: 'top',
            animateFromElement: false,
        });
    })

    /*
   *旋转进入
   * */
    $("#btn23").on("click", function(){
        $.confirm({
            animation: 'Rotate',
            closeAnimation: 'Rotate',
            animateFromElement: false,
        });
    })


    /*
    *旋转进入
    * */
    $("#btn24").on("click", function(){
        $.confirm({
            animation: 'opacity',
            closeAnimation: 'opacity',
            animateFromElement: false,
        });
    })


    //下面是3d效果--------------------------------------------


    /*
    * 25.zoom
    * */
    $("#btn25").on("click", function(){
        $.confirm({
            animation: 'zoom',
            closeAnimation: 'zoom',
            animateFromElement: false,
        });
    })

    /*
    * 26.上下压缩
    * */
    $("#btn26").on("click", function(){
        $.confirm({
            animation: 'scaleY',
            closeAnimation: 'scaleY',
            animateFromElement: false,
        })
    })

    /*
       * 27.左右压缩
       * */
    $("#btn27").on("click", function(){
        $.confirm({
            animation: 'scaleX',
            closeAnimation: 'scaleX',
            animateFromElement: false,
        })
    })

    /*
       * 28.左右扩张
       * */
    $("#btn28").on("click", function(){
        $.confirm({
            animation: 'rotateYR',
            closeAnimation: 'rotateYR',
            animateFromElement: false,
        });
    })

    /*
      * 29.上下扩张
      * */
    $("#btn29").on("click", function(){
        $.confirm({
            animation: 'rotateXR',
            closeAnimation: 'rotateXR',
            animateFromElement: false,
        });
    })

    /*
    * 30.弹跳效果
    * */
    $("#btn30").on("click", function(){
        $.confirm({
            animationBounce: 100 //调整即可
        });
    })

    /*
    * 31.调整弹窗出现消失时间快慢
    * */
    $("#btn31").on("click", function(){
        $.confirm({
            animationSpeed: 200// 0.2 seconds
        });
    })

    /* .jconfirm .jconfirm-box.jconfirm-animation-news {
        /!*the animation name is bob*!/
        transform: rotate(400deg) scale(0);
    }*/

    $('#btn32').on('click', function(){
        $.confirm({
            icon: 'fa fa-question',
            theme: 'black',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });

})


