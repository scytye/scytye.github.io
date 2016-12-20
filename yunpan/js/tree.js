function getMaxId() {
    var maxId = 0;
    for (var i=0; i<data.length; i++) {
        if ( data[i].id > maxId ) {
            maxId = data[i].id;
        }
    }
    return maxId;
}
function getpid(id) {//id为参数
    var arr = [];
    for (var i=0; i<data.length; i++) {
        if ( data[i].pid == id ) {
            arr.push( data[i]);
        }
    }
    return arr;
}
function getChildren(id) {//获取子集元素
    var arr = [];
    for (var i=0; i<data.length; i++) {
        if ( data[i].pid == id ) {
            arr.push( data[i] );
        }
    }
    return arr;
}
function getAllChildren(id, level) {//获取所有的子集元素
    var arr = [];
    var level = level || 0;
    var children = getChildren(id);
    for (var i=0; i<children.length; i++) {
        children[i].level = level;
        arr.push( children[i] );
        arr = arr.concat( getAllChildren(children[i].id, level+1) );
    }
    return arr;
}
function getParents(id) {//得到所有父级
    var arr = [];
    var parent = getParent(id);//data[0]
    if (parent) {
        arr.push(parent);//data[0]
        arr = arr.concat( getParents(parent.id) );//weiyun,只有一个父级data[0
    }
    return arr;
}
function getParent(id) {//得到父级
    var info = getInfo(id);//data[5]
    if (info) {
        return getInfo(info.pid);//data[0]
    }
}
function getInfo(id) { //确定是data里的第几个
    for (var i=0; i<data.length; i++) {
        if (data[i].id == id) {
            return data[i];//data[5]
        }
    }
}
function getChildById(arr,pid){
	var newArr = [];
	for( var i = 0; i < arr.length; i++ ){
		if( arr[i].pid == pid ){
			newArr.push(arr[i]);
		}
	};
	return newArr;
}
function hasChilds(data,id){
	return getChildById(data,id).length !== 0;
}
function getLevelById(data,id){
	return getallParent(data,id).length;
}
function getallParent(data,currentId){
	var arr = [];
	for( var i = 0; i < data.length; i++ ){
		if( data[i].id == currentId ){
			arr.push(data[i]);
			arr = arr.concat(getallParent(data,data[i].pid))
			break;
		}
	}
	return arr;
}
function parents(obj,selector){
	if( selector.charAt(0) === "#" ){
		while(obj.id !== selector.slice(1)){
			obj = obj.parentNode;
		}
	}else if( selector.charAt(0) === "." ){
		while((obj && obj.nodeType !== 9) && ! hasClass(obj,selector.slice(1))){//选择为元素本身存在并且类型不为document;
			obj = obj.parentNode;
		}
	}else{
		while(obj && obj.nodeType !== 9 && obj.nodeName.toLowerCase() !== selector){
			obj = obj.parentNode;
		}
	}
	return obj && obj.nodeType === 9  ? null : obj;//如果是document返回空 不是返回这个元素
}
function hasClass(ele,classNames){
	var classNameArr = ele.className.split("，");
	for( var i = 0; i < classNameArr.length; i++ ){
		if( classNameArr[i] === classNames ){
			return true;
		}
	}
	return false;
}
function changeTips(obj,html,boolean,boolean2){
	var boolean2 = boolean2 || null;
	obj.style.display = "block";
	var spans = obj.getElementsByTagName("span");
	if(boolean){
		spans[0].style.backgroundPositionY = "-16px";
		obj.style.backgroundColor = "#75bc0f";
	}else{
		obj.style.backgroundColor = "#f49918";
		spans[0].style.backgroundPositionY = "-116px";
	}
	if(boolean2){
		spans[0].style.backgroundPositionY = "-66px";
		obj.style.backgroundColor = "#f49918";
	}
	spans[1].innerHTML = html;
	obj.style.top = "0px";
	var timer = setTimeout(function(){
		obj.style.top = "-32px";
	},2000)
}
function deleteAll(arr){
	var idArr = [];
	var dataArr = [];
	for(i=0;i<arr.length;i++){
		if(arr[i].fileid && !arr[i].id){
			idArr.push(arr[i].fileid)
		}
		if(arr[i].id && !arr[i].fileid){
			idArr.push(arr[i].id)
		}
	}
	for(i=0;i<idArr.length;i++){//得到子级
		for(j=0;j<data.length;j++){
			if( idArr[i] == data[j].pid){
				dataArr.push(data[j])
			}
		}
	}
	for(i=0;i<idArr.length;i++){//删除父级
		for(j=0;j<data.length;j++){
			if( idArr[i] == data[j].id){
				data.splice(j,1);
			}
		}
	}
	if(idArr.length == 0 || dataArr.length == 0){
		return false;
	}
	deleteAll(dataArr)//回调删除子级
}
function getUpAndDownLevelid(id){
	var	arr=[parseFloat(id)];

	for(var j=0;j<getChildren(id).length;j++){
		arr.push(getChildren(id)[j].id)
	}
	for(var n=0;n<getParents(id).length;n++){
		if(getParents(id)[n] == undefined){
			arr.push[id]
		}else{
			arr.push(getParents(id)[n].id)
		}
	}
	console.log(arr)
	return arr;
}