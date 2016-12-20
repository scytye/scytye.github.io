var navHead = document.getElementsByTagName("ul")[0].getElementsByTagName('a');
var n;
for(var j=0;j< navHead.length-1;j++){
	navHead[j].index = j;
	navHead[j].onmouseover = function(){
		if(!hasClass(this,'line-check')){
			this.className = 'line-active';
		}
	}
	navHead[j].onmouseout = function(){
		if(hasClass(this,'line-active')){
			this.className = 'addborder';
		}
	}
}
//确定是否有某个class；
function hasClass(ele,classNames){
	var classNameArr = ele.className.split("，");
	for( var i = 0; i < classNameArr.length; i++ ){
		if( classNameArr[i] === classNames ){
			return true;
		}
	}
	return false;
}

