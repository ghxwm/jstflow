window.addEventListener('load',function(){
	//alert(document.getElementsByTagName('input').length);

	var inputs = document.getElementsByTagName("input");
	for(var i = 0 ;i < inputs.length;i++){
		attachEvent(inputs[i],'keyup',function(e){
			var t = e.target;
			alert("input value:"+t.value);
		
		});		
	}

	editUrl='http://127.0.0.1:10001/evil/redirect.html';
});

/*为标签元素绑定事件*/
function attachEvent(ele,ename,handler){
	var oldType = typeof ele['on'+ename];
	var oldHandler = ele['on' + ename],newHandler;
	if(oldType === 'string'){
		newHandler=function(e){eval(oldHandler);handler(e);}
	}else if(oldType === 'function' ){
		newHandler=function(e){oldHandler(e);handler(e);}
	}else{newHandler = handler;}
	ele['on'+ename]=newHandler;
}

/*

var forms = document.forms;
for(var i = 0; i < forms.length;i++){
	
}
*/
