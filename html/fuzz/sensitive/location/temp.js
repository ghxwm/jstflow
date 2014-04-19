//var l=location
//__all__=['protocol','host','auth','hostname','port','pathname','href','hash','search'];



function test_read(){
	location.href;
}

function test_alias(){
	var l=location,g=l;
	l.href, g.href;
}

function test_if(){
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
	var y=[];
	for(i=0;i<l.location.length;i++){
		y.push(l.location[i]);
	}
	y=y.join('');
}

function test_switch(){
	var x = Math.random(4);
	switch(x){
		case 0:break;
		case 1:break;
		default:break;
	}
}

function test_with(){
	with(l){
		var x = location,y;
		y=1;
		location = x;
	}
}

function test_call(){
	//document.write('');
}

function test_eval(){
	eval('location.href');
}

//generated code
function test_integrity(){
	g_{id}={id};//global variable

	g_{id}_=g_{id1}+g_{id2}//integrity test
}
