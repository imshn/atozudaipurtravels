// "https://api.whatsapp.com/send?phone=1234567890&text=Hello,%20I%20am%20interested%20in%20your%20products.%20Please%20send%20me%20more%20information.

function whatsapp(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("messages").value;
    
    var url = "https://wa.me/9602283839?text="
    +"*Name :* "+name+"%0a"
    +"*Email :* "+email+"%0a"
    +"*Phone :* "+phone+"%0a"+"%0a"
    +message;
    
    window.open(url,'_blank').focus();
    }
    