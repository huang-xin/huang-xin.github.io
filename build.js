var fs = require("fs");
var path = require("path");
var marked = require("marked");
var mddir = "./md";
var htmldir = "./article";

var mdsuffix = ".md";
var jssuffix = ".js";

function wrap(content){

	var prefix = "define";
	var suffix = "";
	return (prefix + content + suffix);

}

function run(){
	var mds = fs.readdirSync(mddir);
	mds.forEach(function(md){
		if(path.extname(md) === mdsuffix){
			var htmlContent = marked(path.readFileSync(md));
			var fileContent = wrap(content);
			var filename = path.basename(md, mdsuffix) + jssuffix;
			fs.writeFileSync(path.join(htmldir, filename), fileContent);
		}
	});
}

run();