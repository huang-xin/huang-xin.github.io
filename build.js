var fs = require("fs");
var path = require("path");
var marked = require("marked");
var mddir = "./md";
var articledir = "./article";

var mdsuffix = ".md";
var jssuffix = ".js";

/**
article template 

define({
	time : date.now(),
	html : "xxx"
	title : ""
	tag : ""	
});

*/
function dist(title, content){

	var prefix = "define(";
	var suffix = ");";
	var contentObj = {
		time : Date.now(),
		html : content,
		title : title
	}

	return (prefix + JSON.stringify(contentObj) + suffix);

}

//单量编译 & 全量编译
!function compile(){

	var mds = fs.readdirSync(mddir);
	mds.forEach(function(md){
		var title = path.basename(md, mdsuffix);
		if(path.extname(md) === mdsuffix){
			var htmlContent = marked( fs.readFileSync(path.join(mddir, md)).toString() );
			var distContent = dist(title, htmlContent);
			fs.writeFileSync(path.join(articledir, title + jssuffix), distContent);
		}
	});

}();