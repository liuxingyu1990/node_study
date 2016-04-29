var http=require("http");

function start(){
	http.createServer(function(req,res){
	 console.log("Request received.");
	res.writeHead('200',{"Content-Type":"text/plain"});
	res.end("Hellow World!");
}).listen(8000);

}

console.log('server start up');
module.exports=start;