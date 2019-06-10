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