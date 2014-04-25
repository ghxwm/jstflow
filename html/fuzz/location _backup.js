//var l=location
//__all__=['protocol','host','auth','hostname','port','pathname','href','hash','search'];



function test_read(){
	location.href;
}

function test_alias(){
	var l=location,g=l;
	l.href, g.href;
}

function test_indirect(){
	var x = 0,y=0,dut;
	var v=location.href;
	if(v == v){
		x = 1;
		x = 1 + 1;
	}
	x;
}

function test_implicitTrue(){
	var x = 0,y=0,dut;
	var v=location.href;
	if(v == v){
		x = 1;
	}else{
		y = 1;
	}
	if(y){ //copy sensitive data
		dut = v;
	}

}


function test_for(){
	var y=[],i;
	for(i=0;i<location.href.length;i++){
		y.push(location.href[i]);
	}
	y=y.join('');
}

function test_switch(){
	var x = Math.random(4),y;
	switch(x){
		case 0:y=0;break;
		case 1:y=1;break;
		default:y=location.href;break;
	}
}

function test_with(){
	window.addEventListener('load',function(){
		with(document){
			var x = cookie,y;
			y=1;
			cookie = x;
		}
	});
}

function test_call(){
	//document.write('');
	function test_src(dom,name){
		var body = dom.getElementsByTagName('body')[0];
		var e = dom.createElement(name);
		e.src='';
		e.style.display='none';
		body.appendChild(e);	
	}
	function test_value(dom,type,value){
				var body = dom.getElementsByTagName('body')[0];
				var e = dom.createElement('input');
				e.type=type;
				e.value=value;
				e.style.display='none';
				body.appendChild(e);		
}
	window.addEventListener('load',function(){
		test_src(document,'form');
		test_src(document,'image');
		test_src(document,'iframe');
		test_value(document,'text','t1');
		test_value(document,'password','t2');
		test_value(document,'radio','t3');
		test_value(document,'checkbox','t4');
	});
	
}

function test_eval(){
	eval('location.h');
}


//generated code
function test_integrity(){
if(typeof IdGenerator === 'undefined'){
	var IdGenerator = function(){
		var id = 0,ret;
		ret = {
			next:function(){return id++;},
			size:function(){return id;}
		}
		return ret;
	}()
}
	var id = IdGenerator.next()+1,id1,id2,s;
	window["g_" + id] = ""+id;
	//g_{id}={id};//global variable
	window.addEventListener('load',function(){
		s=IdGenerator.size();
		id1 = Math.ceil(Math.random() * s);
		id2 = Math.ceil(Math.random() * s);
		window["_g_"+id] =window["g_"+id] + "," + window["g_"+id2]//integrity test
	});
}

function test_all(){
	test_read();
	test_alias();
	test_indirect();
	test_for();
	test_switch();
	test_with();
	test_call();
	test_eval();
	//setTimeout(test_integrity,10000);
	test_integrity();
	//test_indirect();
}

test_all();
