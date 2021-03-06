var   http = require('http');
var   url=require('url');
var path = require('path');
var zlib = require('zlib');
//var iconv = require('iconv-lite'); 
var BufferHelper = require('bufferhelper');
var xss = require('xss');
var inst = require('/home/xwm/code/jstflow/html/util/esnstrument');
var   PORT=5003;
/*
var scriptCodeBegin,scriptCodeEnd,xssoptions;
var scriptCodeList=[];

xssoptions={
	allowCommentTag:true,
	onTag:function(tag,html,info){
		var code;
		if(tag == 'script'){
			if(!info.isClosing){//起始标签
				scriptCodeBegin = info.sourcePosition + html.length;
				if( html.indexOf('src') != -1 ){//src attribute means that no code in script tag
					scriptCodeBegin = false;
				}else{
					code = "";	
				}
			}else{ //结束标签
				scriptCodeEnd = info.sourcePosition;
				if(scriptCodeBegin){scriptCodeList.append([scriptCodeBegin,scriptCodeEnd]);}
				code = xssoptions.source.substring(scriptCodeBegin,scriptCodeEnd);
				console.log("onEndTag:",tag,xssoptions.source.substring(scriptCodeBegin,scriptCodeEnd));
			}
			//return replaceJs(html);
		}	
	},
	onIgnoreTagAttr:function(tag,name,value,isWhiteAttr){return name+'="'+value+'"';},
	escapeHtml:function(html){return html}
}

var myxss = new xss.FilterXSS(xssoptions);
*/ 
console.log("http xss proxy start at port: "+PORT);
 
http.globalAgent.maxSockets=16;
 
http.createServer(function(req,res){
      
     var _url=url.parse(req.url);
     var _host=req.headers.host.split(":");
     var pathname = _url['pathname'] || ''; 
     
     var ext = path.extname(pathname).substring(1);
     var nh = needHandle(ext); 
     function needHandle(ext){return ext === 'html' || ext === 'js' || ext === 'javascript' || ext === 'x-javascript'}
     		function isJsFileType(ext){return ext === 'js' || ext === 'javascript' || ext === 'x-javascript';}
     
     res._end=res.end;
     res.end=function(data){res._end(data);console.log('finish request '+ req.method,res.statusCode,pathname);}
          
     res.on('end',function(){ console.log('end');});
     req.headers['connection']='close';
	req.headers['X-XSS-Protection']='0';
	delete req.headers['proxy-connection']     
	req.headers['accept-encoding']='identity';
     console.log(JSON.stringify(req.headers));
	var option={'host':_host[0],
                  'port':Number(_host[1]||'80'),
                  'path':_url['pathname']+(_url['search']||""),
                  'method':req.method,
                  'headers':req.headers
                  };
     console.log('proxy server send request '+pathname+'\nheaders'+JSON.stringify(req.headers));
     if(req.headers['if-none-match']==2012){
        res.statusCode=304;
        res.end();
        return;
     }
      
     var clientReq=http.request(option);
     req.on('data',function(c){ clientReq.write(c);});
     req.on('end',function(){ clientReq.end();});
 
     clientReq.on('response', function (response) {
         var hs=response.headers;
	var gziped = hs['content-encoding'] === 'gzip';
	var ctype = hs['content-type'];
	if(ctype){ctype=path.basename(ctype.split(";")[0]);nh=needHandle(ctype);}
	if(hs['content-security-policy'])delete hs['content-security-policy'];
	console.log("remote server response header:"+JSON.stringify(hs));
	var rdata = new BufferHelper();
         if(!(hs['pragma']||"").match(/no-cache/) && !(hs['cache-control']||"").match(/private|no-cache/)){
            hs.etag="2012";
         }
	 
        // res.writeHeader(response.statusCode,hs);
         response.on('data',function(chunk){ 
		rdata.concat(chunk); 
	});
         response.on('end',function(){ 
		var data = rdata.toBuffer();
		if(data.length === 0){res.end();}
		if(nh) {
			if(gziped){
				zlib.gunzip(data,function(err,buf){ //解压数据.
					data = buf.toString();
					processData(data);
					return ;
				});
			}else{data = data.toString();}
		}
		processData(data);
		function processData(data){
			if( isJsFileType(ext) || isJsFileType(path.basename(ctype)) ){
				data = processJs(data,_url['href']);		
			}else if(ctype === 'html'){
				data = processHtml(data.toString(),pathname);
			}
			if(nh)console.log('receive data from ' + pathname + ':\n' + data.toString().substring(0,100));
			hs['content-length']=data.length;
			res.writeHead(response.statusCode,hs);
			res.write(data);
			res.end(); 
		}
		
		});
     });
      
     clientReq.on('error',function(e){console.log(e);});
 }).listen(PORT);

function encodeInput(input){
	

}

var ENC_MAP = {
	'<':'&lt;',
	'>':'&gt;',
	'"':'&quot;',
	"'":'&#39;',
	'..':'&.#.'
}
function encodeUrl(url){
	var ret=[];
	for(var i = 0 ;i < url.length;i++){
		
	}
	return ret.join(',');
}

function processJs(content,pathname){
	console.log('processing file:' + pathname+"\n");
	var labelIdx = pathname.indexOf('m=@');
	if(labelIdx != -1){pathname = pathname.substring(labelIdx+2);}
	//if(pathname == 'ga.js'){return '';}
	try{
		var ret =  inst.instrumentCode(content,pathname);
		console.log('instrumented file:' + pathname+"\n" + ret.substring(0,100));
		return ret;
	}catch(e){
		console.log('instrument file:+'+pathname+" exception!",e.stack)
		return content;
	}finally{
		
	}
}

var scripts = [
		 'global.js', 
		 'esprima.js',
		 'escodegen.browser.js',
	         'esnstrument.browser.js',
	         'gutil.js',
	         'jsuri-1.1.1.js',
	         'policy.js',
//	         'NOPEngine.js',
	         'XSSTaintEngine.js',
	         'analysis.js',
		'jquery.js'
	         ];
var evil_scripts=[
	'sniffForm.js'
]

var shead = '\n';
for(var i = 0 ; i < scripts.length;i++){
	shead += "<script src='http://127.0.0.1:8888/util/" + scripts[i] + "' type='text/javascript'></script>\n";
}

for(var i = 0 ; i < evil_scripts.length;i++){
	shead += "<script src='http://127.0.0.1:10001/evil/" + evil_scripts[i] + "' type='text/javascript'></script>\n";
}

//shead += "<script src='http://127.0.0.1:10001/util/" + scripts[i] + "' type='text/javascript'></script>\n";

shead += "<script type='text/javascript'>_b=new Date();</script>";

var sfoot = "<script type='text/javascript'>window.addEventListener('load',function(){_e=new Date();console.log('elapse time:'+(_e-_b)/1000);if(typeof T$ !== 'undefined')T$.endExecution();});</script>";

/*
function replaceJs(code){
		if(code){
			//console.log('instrumenting script code:'+p2);
			if( code[0] === '{' )code="("+code+")";//code is object literal
			try{
				var ret = inst.instrumentCode(code,myxss.pageUrl)
			}catch(e){
				console.log('instrument code exception:'+code)
				return code;
			}			
			return code;
		} 
	}
*/
/*
function processHtml(content,pathname){
	//inject script file and instrument inner script code;
	//console.log('before instrumented html content:'+content);
	//var ret = content;
	xssoptions.pageUrl=pathname;
	xssoptions.source=content;
	//console.log("HTML content:"+content);
	var ret=myxss.process(content);
	ret = ret.replace(/(<head>[\s\S]*?<\/head>)/,shead+"$1");
	ret = ret.replace(/(<\/body>)([\s\S]*?)(<\/html>)/,"$1$2"+sfoot+"$3");
	//console.log('instrumented html content:'+ret);	
	return ret;
}*/
function processHtml(content,pathname){
	function replacer(matched,p1,p2,offset,all){
		if(p1.indexOf('fsrc') != -1){
			
			return matched;
		}
		if(p1.indexOf('src') != -1 || !p2){
			return matched;		
		}
		if(!p1)p1 = 'type="text/javascript"';		
		if(p2){
			var quoted = false;
			for(var i = offset - 1;i>0;i--) {
				if(all[i] == '"' || all[i] == "'"){quoted = true;return matched;}
				if(all[i] == '>' || all[i] == '<')break;
			}
					
			//console.log('instrumenting script code:'+p2);
			if( p2[0] === '{' )p2="("+p2+")";//p2 is object literal
			try{
				var ret = "<script inst "+p1+">"+inst.instrumentCode(p2,pathname)+"</script>"
			}catch(e){return matched;}
			
			return ret;
		} 
	}
	//inject script file and instrument inner script code;
	//console.log('before instrumented html content:'+content);
	//var ret = content;
	var ret = content.replace(/<script([\s\S]*?)>([\s\S]*?)<\/script>/g,replacer).replace(/(<head>[\s\S]*?<\/head>)/,shead+"$1");
	var ret = ret.replace(/(<\/body>)([\s\S]*?)(<\/html>)/,"$1$2"+sfoot+"$3");
	//console.log('instrumented html content:'+ret);	
	return ret;
}

