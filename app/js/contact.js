Lungo.dom(".submit").tap(function(event) {
  var name = $$(".name").val();
  var mail = $$(".mail").val();
  var message = $$(".message").val();
  
  $$.ajax({
	    type: 'POST', // defaults to 'GET'
	    url: "http://m.frankenman.hk/app/sections/contact.php?name="+name+"&mail="+mail+"&message="+message,
	    data: {name : ""},
	    dataType: 'html', //'json', 'xml', 'html', or 'text'
	    async: true,
	    success: function(response) { 
	      $$(".messages").html(response);  
	      if(response == "Message has been submitted."){
	        $$(".name").val("");
	        $$(".mail").val("");
	        $$(".message").val("");
	      }
	    },
	    error: function(xhr, type) { alert(0); }
	});
  
});