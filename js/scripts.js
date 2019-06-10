function tom(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value.indexOf("@");
    var textArea = document.getElementById("textArea").value;

  if(name == ""){
   alert("enter name");
  }
   
 if( email ==""){
 alert ("enter email");
 }

 if(textArea==""){
 alert("Enter message");
 }
  
 if (name !== "" && email !=="" && textArea !== ""){
     alert (name + " we have  received your message. Thank you for reaching out to us.")
 }

}


$(document).ready(function() {

    $('.tom').hover(function() {
        $(this).find('.phone').fadeIn(300);
    }, function(){
        $(this).find('.phone').fadeOut(100);
    });
});

$(document).ready(function(){
    $('.p1').hide();
    $('.pic1').click(function(){
      $('.p1').slideToggle();
     $('.p1').click()
     $('.pic1').slideToggle();
     
    });

    $('.p2').hide();
    $('.pic2').click(function(){
       $('.p2').slideToggle();
    $('.p2').click()
     $('.pic2').slideToggle();
    });

    $('.p3').hide();
    $('.pic3').click(function(){
      $('.p3').slideToggle();
    $('.p3').click()
     $('.pic3').slideToggle();
    });

});