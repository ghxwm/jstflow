var xss = require('xss');
var source="<html><title>xss test</title><script>var a;</script><script>var b;</script><script src='abc'></script></html>"
var xssoptions={
	onTag:function(tag,html,info){
		if(tag == 'script'){
			if(!info.isClosing){//起始标签
				scriptBegin = info.sourcePosition + html.length;
				if( html.indexOf('src') != -1 ){
					return html;
				}else{
					code = "";	
				}
			}else{ //结束标签
				scriptEnd = info.sourcePosition;
				console.log("onEndTag:",source.substring(scriptBegin,scriptEnd));
			}
			//return replaceJs(html);
		}	
	},
	escapeHtml:function(html){return html}
}
var myxss = new xss.FilterXSS(xssoptions);
myxss.process(source);
