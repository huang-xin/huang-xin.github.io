$(function(){

	debug = true;
	if(debug){
		var githuburl = "https://api.github.com/users/huang-xin";
		$.get(githuburl, function(data){
			console.log(data);
		});
	}

});
