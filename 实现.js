$(document).ready(function () {
    /*
* 确认框
* */
    $("#btn2").on('click', function () {
        $.confirm({
            title: '输入信息',

            //设置展示的内容 包括表单！
            content:
                '<form action="" class="formName">' +
                '<div class="form-group">' +
                '<input type="text" placeholder="输入你的名字" class="name form-control" required />' +
                '</div>' +
                '</form>',
            buttons: {
                formSubmit: {
                    text: '提交',
                    btnClass: 'btn-blue',
                    action: function () {
                        var name = this.$content.find('.name').val();
                        if (!name) {
                            $.alert('提供有效的名称');
                            return false;
                        }
                        $.alert('你的名字是：' + name);
                    }
                },
                cancel: {
                    text: "取消",
                    function() {
                        //close
                        console.log('你选择了取消');
                    }
                }

            },
            onContentReady: function () {
                // bind to events
                var jc = this;
                this.$content.find('form').on('submit', function (e) {
                    // if the user submits the form by pressing enter in the field.
                    e.preventDefault();
                    jc.$$formSubmit.trigger('click'); // reference the button and click it
                });
            }
        });
    })


    /*
    * 2 定制颜色
    * */
    $("#btn3").on('click', function () {
        $.confirm({
            title: 'Encountered an error!',
            content: 'Something went downhill, this may be serious',
            // 改这里调颜色 头部
            type: 'green',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: '再试一次',
                    //这里改按钮颜色
                    btnClass: 'btn-green',
                    action: function () {
                    }
                },
                close: {
                    text: "关闭",
                    btnClass: 'btn-purple',
                    function() {
                    }
                }

            }
        });
    })

    $("#btn4").on('click', function () {
        $.confirm({
            icon: 'fa fa-spinner fa-spin',
            title: 'Working!',
            content: 'Sit back, we are processing your request!'
        });
    })

    $("#btn5").on('click', function () {
        //btn-primary btn-inverse btn-warning btn-info btn-danger btn-success
        $.confirm({
            title: 'Encountered an error!',
            content: 'Something went downhill, this may be serious',
            // 改这里调颜色 头部
            type: 'red',
            typeAnimated: true,

            buttons: {
                tryAgain: {
                    text: '确认',
                    //这里改按钮颜色
                    btnClass: 'btn-primary',
                    action: function () {
                    }
                },
                close: {
                    text: "关闭",
                    btnClass: 'btn-warning',
                    function() {
                    }
                }

            }
        })
    })

    /*
    *   6。 单击后 根据提示来继续提示
    * */
    $("#btn6").on('click', function () {
        $.confirm({
            buttons: {
                hey: {
                    text: "罗邓",
                    btnClass: 'btn-blue',
                    action() {
                        // here the button key 'hey' will be used as the text.
                        $.alert('你单击了罗邓感谢你！');
                    }
                },
                heyThere: {
                    text: '碧梨',
                    btnClass: 'btn-green',
                    action: function () {
                        $.alert('碧梨是最帅的！');
                    }
                }
            }
        });
    })

    /*
    *携带很多按钮
    * 可选: btn-blue btn-green btn-red btn-orange btn-purple btn-default btn-dark
    * */
    $("#btn7").on('click', function () {
        $.confirm({
            buttons: {
                info: {
                    btnClass: 'btn-blue',
                    action: function () {
                        alert("单击 blue")
                    }
                },
                danger: {
                    btnClass: 'btn-red any-other-class', // multiple classes.
                },
                warning: {
                    btnClass: 'btn-warning',
                    action: function () {
                        alert("单击 warning")
                    }
                },
            }
        });
    })


    /*
    * 携带引导倾向的按钮！
    * 可选: btn-blue btn-green btn-red btn-orange btn-purple btn-default btn-dark
    *
    * */
    $("#btn8").on('click', function () {
        $.confirm({
            buttons: {
                MoRen: {
                    text: "默认",
                    btnClass: 'btn-dark',
                    action: function () {
                    }
                },
                info: {
                    text: "信息",
                    btnClass: 'btn-blue',
                    action: function () {
                    }
                },
                access: {
                    text:"成功",
                    btnClass: 'btn-green',
                    action: function () {}
                },
                danger: {
                    text:"危险",
                    btnClass: 'btn-red', // multiple classes.
                    action: function () {}
                },
                warning: {
                    text:"警告",
                    btnClass: 'btn-warning',
                    action: function () {}
                },
            }
        });
    })

    /*
    * 9.能监听键盘、鼠标单击事件
    * */
    $("#btn9").on('click', function () {
        $.confirm({
            content: 'Time to use your keyboard, press shift, alert, A or B',
            buttons: {
                specialKey: {
                    text: 'On behalf of shift',
                    keys: ['shift', 'alt'],
                    action: function(){
                        $.alert('Shift or Alt was pressed');
                    }
                },
                alphabet: {
                    text: 'A, B',
                    keys: ['a', 'b'],
                    action: function(){
                        $.alert('A or B was pressed');
                    }
                }
            }
        });
    })

    /*
    * 10.按钮全部隐藏 只能通过按键来关闭！
    * */
    $("#btn10").on('click', function () {
        $.confirm({
            icon: 'fa fa-warning',
            title: false,
            content: 'Imagine a very critical action here! <br> ' +
                'Please press <strong style="font-size: 20px;">Y</strong> to proceed.',
            buttons: {
                yes: {
                    isHidden: true, // hide the button
                    keys: ['y'],
                    action: function () {
                        $.alert('Critical action <strong>was performed</strong>.');
                    }
                },
                no: {
                    keys: ['N'],
                    action: function () {
                        $.alert('你单击了不');
                    }
                },
            }
        });
    })

    /*
    * 11.为弹窗添加 图标
    * */
    $("#btn11").on('click', function () {
        $.confirm({
            // fa fa-spinner fa-spin    fa fa-warning
            icon: 'fa fa-spinner fa-spin',
            title: 'glyphicon',
            buttons:{
                MoRen: {
                    text: "默认",
                    btnClass: 'btn-dark',
                    action: function () {
                    }
                },
                info: {
                    text: "信息",
                    btnClass: 'btn-blue',
                    action: function () {
                    }
                },
            }
        });
    })


    /*
    * 12.带有关闭图标
    * */
    $("#btn12").on('click', function () {
        $.confirm({
            closeIcon: true,
            closeIconClass: 'fa fa-close' //去掉后就是默认样式
        });
    })


    /*
      * 13.调整弹窗大小
    * */
    $("#btn13").on('click', function () {
        $.confirm({
            boxWidth: '30%',//500px
            useBootstrap: false,
        });
    })


    $("#btn14").on('click', function () {})



})

