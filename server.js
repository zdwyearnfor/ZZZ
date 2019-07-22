//引入http 模块
var http=require('http');

var server=http.createServer(function(req,res){
	console.log(req.url);//输出的是客户请求的目标路径，第二个是收藏夹默认头像路径

	res.writeHead(200,{'Content-Type':'text/html'});
	//明知故问，这是为了支持中文的meta
	res.write('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
	res.write('你好');
	res.end('hello');
}).listen(1337,function(){
	console.log('runing...');
});