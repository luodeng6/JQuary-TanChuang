// 2024-6-19 日科三离奇挂科，想死的心都有了...
$(document).ready(function () {


    $('.example4').on('click', function () {
        $.confirm({
            icon: 'fa fa-question',
            theme: 'white',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    $('.example5').on('click', function () {
        $.confirm({
            icon: 'fa fa-question',
            theme: 'black',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    $('.example5-3').on('click', function () {
        $.confirm({
            icon: 'fa fa-question',
            theme: 'supervan',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    $('.example5-3-1').on('click', function () {
        $.confirm({
            icon: 'fa fa-question',
            theme: 'material',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    $('.example5-3-2').on('click', function () {
        $.confirm({
            icon: 'fa fa-question',
            theme: 'bootstrap',
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    $('.example5-3-3').on('click', function () {
        $.confirm({
            icon: 'fa fa-grav',//fa-question
            theme: 'modern',
            content:"你好啊！",
            closeIcon: true,
            animation: 'scale',
            type: 'orange',
        });
    });


    /*
    *  32，自动关闭的弹窗
    * */
    $('#btn33').on('click', function () {
        $.confirm({
            title: 'Auto close',
            content: 'Some actions maybe critical, prevent it with the Auto close. This dialog will automatically trigger cancel after the timer runs out.',
            autoClose: 'cancelAction|10000',
            escapeKey: 'cancelAction',
            buttons: {
                confirm: {
                    btnClass: 'btn-red',
                    text: 'Delete ben\'s account',
                    action: function () {
                        $.alert('You deleted Ben\'s account!');
                    }
                },
                cancelAction: {
                    text: 'Cancel',
                    action: function () {
                        $.alert('Ben just got saved!');
                    }
                }
            }
        });
    })

    /*
    * 34. 自动关闭 自动执行
    * */
    $('#btn34').on('click', function () {
        $.confirm({
            title: 'Logout?',
            content: 'Your time is out, you will be automatically logged out in 10 seconds.',
            autoClose: 'logoutUser|10000',
            buttons: {
                logoutUser: {
                    text: 'logout myself',
                    action: function () {
                        $.alert('The user was logged out');
                    }
                },
                cancel: function () {
                    $.alert('canceled');
                }
            }
        });
    })


    /*
    * 35.抖动提示（默认）
    * */
    $('#btn35').on('click', function () {
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'shake',

        });
    })

    /*
    * 36.辉光效果
    * */
    $('#btn36').on('click', function () {
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'glow',

           animation: 'bottom',
            closeAnimation: 'bottom',
            animateFromElement: false,

            icon: 'fa fa-question',
            theme: 'bootstrap',
            closeIcon: true,
            // animation: 'scale',
            type: 'orange',
        });
    })


    $('.example22-1-1-1').on('click', function () {
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'shake',
        });
    });
    $('.example22-1-1-2').on('click', function () {
        $.confirm({
            backgroundDismiss: false,
            backgroundDismissAnimation: 'glow',
        });
    });


})

