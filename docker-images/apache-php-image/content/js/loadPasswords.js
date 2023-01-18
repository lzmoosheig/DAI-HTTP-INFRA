$(function(){
  console.log("Loading Passwords");
  
  function loadPasswords(){
	$.getJSON("/api", function(passwords){
		console.log(passwords);
		var message = "No passwords";
		if(passwords.length > 0){
			message = passwords[0];
		}
		$("#passwords").text(message);
		});
	};
  loadPasswords();
  setInterval(loadPasswords,2000);
})
