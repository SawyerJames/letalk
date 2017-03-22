;$(function () {
    var bodyMask = $('#bg'),
	    le_window = $('#log-reg'),
	    exit = $('#close'),
	    enter = $('#enter');
	var loginBtn = $('.loginBtn');
	var validator;
    var radioBoy = $('input:radio[name="reg-sex"][value="boy"]'),
        radioGirl = $('input:radio[name="reg-sex"][value="girl"]'),
        radioVal;
	// function login chick event-----------------------------------//
	loginBtn.on('click',function () {
	    bodyMask.css('display', 'block');
        le_window.css('display', 'block');   
	})
    exit.on('click', function() {
        bodyMask.css('display', 'none');
        le_window.css('display', 'none');
    });
    enter.on('click', function() {
        bodyMask.css('display', 'none');
        le_window.css('display', 'none');
    });
    // function validation event-----------------------------------//
    validator = $("#reg").validate({
        debug: true,
        rules: {
            "reg-email": {
                required: true,
                email:true
            },
            "reg-password": {
                required: true,
                minlength: 2,
                maxlength: 8
            },
            "reg-passconfirm": {
                required: true,
                equalTo: "#reg-password"
            },
            "reg-validation": {
                required: true,
            },            
            "reg-phone": {
                minlength: 11,
                maxlength: 11
            },
            "reg-Ophone": {
                minlength: 11,
                maxlength: 11
            }
        },
        messages: {
            "reg-email": {
                required: '请输入邮箱账号',
                email: '邮箱格式不正确'
            },           
            "reg-phone": {
                minlength: '手机号位数不为11位',
                maxlength: '手机号位数不为11位',
                remote: '手机号不存在'
            },
            "reg-Ophone": {
                minlength: '手机号位数不为11位',
                maxlength: '手机号位数不为11位',
                remote: '手机号不存在'
            },           
            "reg-password": {
                required: '请输入密码',
                minlength: '密码不能小于2个字符',
                maxlength: '密码不能超过8个字符'
            },
            "reg-passconfirm": {
                required: '请再次输入密码',
                equalTo: "两次输入密码不一致"
            },
            "reg-validation": {
                required: '请输入验证码',
            } 
        },
    });
    // function radio & judge chick event-----------------------------------//
    function radioClick () {
        radioBoy.on('click',function(){
            radioBoy.attr('checked',true);
            radioGirl.attr('checked',false);
            radioVal = $('input:radio[name="reg-sex"]:checked').val();
            radioJudge();
        });
        radioGirl.on('click',function(){
            radioGirl.attr('checked',true);
            radioBoy.attr('checked',false);
            radioVal = $('input:radio[name="reg-sex"]:checked').val();
            radioJudge();
        });
    }
    function radioJudge () {
        if (radioVal === "boy") {
            $(".boy").css({'background':'#686868','color':'#ffffff'});
            $(".girl").css({'background':'#ffffff','color':'#5E5E5E'});
        }
        if (radioVal === "girl") {
            $(".girl").css({'background':'#686868','color':'#ffffff'});
            $(".boy").css({'background':'#ffffff','color':'#5E5E5E'});
        }
    }
    // function date event-----------------------------------//
     $("#regDate").calendar();
    // function main event-----------------------------------//
    function main () {
        radioClick();
    }
    main();
});