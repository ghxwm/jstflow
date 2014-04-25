//generated code
function test_integrity(){
	var id = IdGenerator.next()+1,id1,id2,s;
	window["g_" + id] = ""+id;
	window["s_"+id]=id+"of"+location.protocol;
	//g_{id}={id};//global variable
	window.addEventListener('load',function(){
		s=IdGenerator.size();
		id1 = Math.ceil(Math.random() * s);//随机域1
		id2 = Math.ceil(Math.random() * s);//随机域2
		window["_g_"+id] =window["g_"+id1] + "," + window["s_"+id2]//integrity test
		window["_s_"+id] =window["s_"+id1] + "," + window["s_"+id2]//integrity test
		console.log("window._g_"+id +" = " + window["_g_"+id]);
		console.log("window._s_"+id +" = " + window["_s_"+id]);
		//var s1 = location.href;	
		//window["_s_"]=s1+id1;
	});
}

function test_all(){
	test_integrity();
}

test_all();
