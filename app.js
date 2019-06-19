var container=document.getElementById("input").value ;


var todolist={
	iscompleted: false,
	isdeleted:false ,
	name : function(){ return container} 
};
	function add() {
	//document.getElementById("container").innerHTML=todolist.name;
	document.getElementById('container').innerHTML=container ;
	}	

