jQuery.fn.reverse = [].reverse;

//Radio buttons checked:
$('.radio').change(function(){
   $('.radio').each(function (i, elem) {
        if ($('.radio')[i].checked) {
            $("#picsSrc").attr('src', 'img/img' + i + '.png');
        }
    })
})

//Right arrow key:
$("#right").click(function(){
    $('.radio').each(function (i, elem) {
        if ($('.radio')[i].checked) {
            if ($('.radio')[14].checked){
                $('.radio')[0].checked = "true"
                $("#picsSrc").attr('src', 'img/img' + 0 + '.png');
                return false;
            } else {
                $('.radio')[i+1].checked = "true";
                 $("#picsSrc").attr('src', 'img/img' + [i+1] + '.png');
                return false;
            }

        }
    })
})


//Left arrow key:
$('#left').click(function () {
    $('.radio').reverse().each(function (i, elem) {
        if ($('.radio')[i].checked) {
            if ($('.radio')[0].checked){
                $('.radio')[14].checked = "true"
                $("#picsSrc").attr('src', 'img/img' + 14 + '.png');
                return false;
            } else {
                $('.radio')[i-1].checked = "true";
                 $("#picsSrc").attr('src', 'img/img' + [i-1] + '.png');
                return false;
            }

        }
    })
})

//1.-13. options (Digits only)
$('.text').on('keydown',function(e){
    var deleteKeyCode = 8;
    var backspaceKeyCode = 46;
    if (e.which === 9 || e.which === 27 || e.which === 116 || e.which === 17 || e.which === 13 || e.which ===18 || (e.which>=48 && e.which<=57) || (e.which>=96 && e.which<=105) || (e.which>=112 && e.which<=123) || e.which === deleteKeyCode || e.which === backspaceKeyCode) 
    {
        $(this).removeClass('error');
        $('.errmsg').remove();
        return true;
    }
    else
    {
        $(this).addClass('error');
        $(this).after('<div class="errmsg">Digits Only</div>');
        $(".errmsg").fadeOut(5000);
        return false;
    }
});

//check name
$('#name').on('change', function(){
    var name = /^[a-zа-яёЁіІїЇъЪ]{3,35}$/gi; // check name
    var a = $(this).val();
    var check = name.test(a);
    if (check){
        $(this).removeClass('error');
        $(this).attr('placeholder', "П.І.Б. Вашої мавпи");
        $('.errmsg2').remove();
    } else {
        $(this).addClass('error');
        $(this).after('<div class="errmsg2">Incorrect name</div>');
        $(this).attr('placeholder', "П.І.Б. Вашої мавпи (Allowed from 3 to 35 letters only)");
        $(this).val("");
        return false;
    }
})

//check phone
$('#phone').on('change', function(){
    var phone = /^(\(?\+?[0-9]{0,11}\)?)?[0-9\- \(\)]{10,15}$/; // check phone
    var a = $(this).val();
    var check = phone.test(a);
    if (check == true || a == ''){
        $(this).removeClass('error');
        $(this).attr('placeholder', "№ телефону мавпи");
        $('.errmsg2').remove();
    } else {
        $(this).addClass('error');
        $(this).after('<div class="errmsg2">Incorrect phone number</div>');
        $(this).attr('placeholder', "№ телефону мавпи (should contain minimum 10 digits, (), +,- only)");
        $(this).val("");
        return false;
    }
})


//check e-mail
$('#mail').on('change', function(){
    var mail = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-qs-z]{2,4})$/gi; // check email addresses
    var a = $(this).val();
    var check = mail.test(a);
    if (check == true || a == ''){
        $(this).removeClass('error');
        $(this).attr('placeholder', "E-mail мавпи");
        $('.errmsg2').remove();
    } else {
        $(this).addClass('error');
        $(this).after('<div class="errmsg2">Incorrect e-mail address</div>');
        $(this).attr('placeholder', "E-mail мавпи (e.g. mail@mail.com ***.com.ua etc. (ru domain is prohibited))");
        $(this).val("");
        return false;
    }
})

//check height
$('#height').on('change', function(){
    var height = /^[0-9]{0,3}$/; // check height
    var a = $(this).val();
    var check = height.test(a);
    if (check){
        $(this).removeClass('error');
        $(this).attr('placeholder', "Зріст мавпи, см");
        $('.errmsg2').remove();
    } else {
        $(this).addClass('error');
        $(this).after('<div class="errmsg2">Incorrect height value</div>');
        $(this).attr('placeholder', "Зріст мавпи, см (allowed 3 digits only)");
        $(this).val("");
        return false;
    }
})

//add + onclick to form with phone number
$('#phone').on('click', function() {
    if ($(this).val().length == 0){
        $(this).val ($(this).val() + "+");
    }

});

//automactically add symbols to phone number
$('#phone').on('keyup', function(e){
  var element = this;
  var key = e.keyCode || e.which;
  insertSymbol(element,key)
})
function insertSymbol(element,key){
  var inputValue = element.value;
  if(element.value.trim().length == 3 && key !== 8){
    element.value = element.value + '(';
  } else if (element.value.trim().length == 7 && key !== 8){
     element.value = element.value + ')-';
  } else if (element.value.trim().length == 12 && key !== 8){
     element.value = element.value + '-';
  } else if (element.value.trim().length == 15 && key !== 8){
     element.value = element.value + '-';
  }
}


//check if inputs are filled out after click "OK" key
$('#ok').on('click', function(){
    $(".text").each(function() {
       if ($(this).val() == "") {
           alert('All fields with sizes (1-13) should be filled out');
           return false;
       }  
    })
    $('#bottomText input').each(function(){
       if ($(this).val() == "") {
           alert('Please, make sure that name, phone, e-mail and height fields are filled out');
           return false;
       } 
    })
})