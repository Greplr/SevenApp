 function doSubscribe(){

        var emailId = document.getElementById("subscribeEmail").value;
        var url = 'http://128.199.128.227:8080/mail/subscribe?email='+emailId;

        // jquery code snippet
        var ajaxRequest = new XMLHttpRequest();
        // Create a function that will receive data sent from the server
        ajaxRequest.onreadystatechange = function(){
          //
        };
        ajaxRequest.open("GET", url, true);
        
        // emailId is the JSON data.
        ajaxRequest.send(emailId);
    };

