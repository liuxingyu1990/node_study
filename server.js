var http=require("http");
var url=require("url");
var querystring=require("querystring");
function start(route,handle){
	http.createServer(function(req,res){
		console.log('url:'+req.url);
		var pathname=url.parse(req.url).pathname;
	 // console.log("pathname:"+url.parse(req.url).pathname);
	 // console.log("query:"+url.parse(req.url).query);
	 console.log("name:"+querystring.parse(url.parse(req.url).query).name);
	 route(handle,pathname);

	res.writeHead('200',{"Content-Type":"text/plain"});
	res.end("Hellow World!");
}).listen(8000);

}

console.log('server start up');
module.exports.start=start;