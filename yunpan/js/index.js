var mainCon = document.getElementById('main-content');
var main = document.getElementById('main-content');
var itembox= document.getElementById('item-box')
var creatfiles = document.getElementById('creatfiles');
var movefiles = document.getElementById('move-files')
var wrapCon =  document.getElementById('section-view');
var mainbox =document.getElementById('main-box');
var mainpath = document.getElementsByClassName('main-path')[0]
var tips = document.getElementById('tips');
var bread = document.getElementById('bread');
var treebox = document.getElementById('sidebox');
var mainNav = document.getElementsByClassName('main-nav')[0];
var treepath = document.getElementById('treepath');
var saveBox = document.getElementsByClassName('save-box')[0];
var closebox = saveBox.getElementsByClassName('close')[0];
var selectA = saveBox.getElementsByClassName('btns')[0].getElementsByTagName('a');
var del = document.getElementById('dele');
var box = document.getElementById('box');
var rename = document.getElementById('rename');
var mask = document.getElementById('mask');
var tipbox = document.getElementById('tipbox');
var inputs = tipbox.getElementsByTagName('input');
var checkall = document.getElementById('checkall');
var textnum = document.getElementsByClassName('text');
var box1 = document.getElementsByClassName('boxselect')[0];
var filesnum = document.getElementById('filesnum');
var box =document.getElementById('box');
var movefileName = saveBox.getElementsByTagName('em');
var dirTree = saveBox.getElementsByClassName('dirTree')[0];
var errors = document.getElementsByClassName('error')[0];
var baseBtn = document.getElementsByClassName('base-btn')[0];
var navbox = document.getElementsByClassName('nav-box')[0];
var f = document.getElementById('f');
var fileMovePathTo = document.getElementsByClassName('fileMovePathTo')[0];
//设置高度
mainCon.style.height = window.innerHeight - 145 +'px';
treebox.style.height = window.innerHeight - 112 +'px'
mainNav.style.height = window.innerHeight - 50 +'px';
window.onresize = function(){
	var viewheight = document.documentElement.clientHeight;
	mainNav.style.height = viewheight - 50 +'px';
	wrapCon.style.height = viewheight - 142+ 'px';
	treebox.style.height = viewheight - 112 + 'px';
}
baseBtn.onclick = function(){
	console.log(hasClass(this,"base-btn btn-focus"))
	if(hasClass(this,"base-btn btn-focus")){
		this.className = "base-btn";
		wrapCon.style.paddingLeft = "0px";
		treepath.style.paddingLeft = "172px";
		treebox.style.display = "none";
		
	}else{
		this.className = "base-btn btn-focus";
		wrapCon.style.paddingLeft = "172px";
		treepath.style.paddingLeft = "344px";
		treebox.style.display = "block";
	}
	
}
if(treebox.style.display = 'block'){
	treepath.style.paddingLeft = '344px';
}
//设置全局变量；
var elements = [];//为了找到所有被渲染的文件
checkall.oncheck = true;
var currentPid = 0;
render(getChildren(currentPid));//括号里得到的是pid 一样的data，也就是 currentPid 就是data的pid
blockselect()
treebox.innerHTML += treeHtml(data,0);
rendertreedata(treebox,".item",checkall);//树状结构点击
creatfiles.onclick = function(){
	main.onmousedown = null;
	if(textnum.length == 0){
		cetext(wrapCon,this)
	}
}
checkall.onclick = function() {
    for (var i=0; i<elements.length; i++) {
        setStatus(elements[i], !elements[i].checked);
		if(checkall.oncheck){
			checkall.style.backgroundPositionY = '-312px';
		    elements[i].className = "files file-checked";
		    elements[i].checked = true;
		}else{
			checkall.style.backgroundPositionY = '-262px';
		    elements[i].className = "files";
		    elements[i].checked = false;
		}
	}
	console.log(getChecked())
	filesnum.innerHTML = getChecked().length;
	for(var k=0;k<getChecked().length;k++){
		drag(getChecked()[k],box,getChecked(),nonechecked())
	}
    checkall.oncheck = !checkall.oncheck;
}
mainpath.onclick = function(e) {
    checkall.style.backgroundPositionY = "-262px"
    if (e.target.tagName.toLowerCase() == 'i') {
        currentPid = e.target.getAttribute('fileid');
        getPidInput.value = currentPid
        showBread(currentPid);
        render(getChildren(currentPid)); 
    }
    if(e.target.tagName.toLowerCase() == 'span'){
    	currentPid = e.target.parentElement.getAttribute('fileid');
    	getPidInput = currentPid;
    	showBread(currentPid);
        render(getChildren(currentPid));
        
    }
    e.cancelBubble = true;
}
movefiles.onclick = function(){
	moveToFile(getChecked())
}
rename.onclick = function(){
	recreatename(getChecked());
}
del.onclick = function(){
	deleted(getChecked())
}
var slectOff = false;
function blockselect(){//框选之后可拖拽
	main.onmousedown = function(e){
		var arr = [];
		var disX = e.clientX-this.offsetLeft;
		var disY = e.clientY- this.offsetTop;
		var timer1 = setTimeout(function () {
			slectOff = true;
			console.log("我是框选")
			box1.style.display = 'block'
			box1.style.left = disX + 'px';
			box1.style.top = disY + 'px';
		},200)
	    document.onmousemove = function(e){
			if(!slectOff)return;
	        box1.style.width = Math.abs(e.clientX - disX) + 'px';
	        box1.style.height = Math.abs(e.clientY - disY-143) + 'px';
	        box1.style.left = Math.min(e.clientX, disX) + 'px';
	        box1.style.top = Math.min(e.clientY-143,disY) + 'px';
	        var l = box1.offsetLeft-170;
	        var t= box1.offsetTop;
	        var w= box1.offsetWidth;
	        var h= box1.offsetHeight;
	       	for(var i = 0;i<elements.length;i++){
       			if(l + w < elements[i].offsetLeft || l > elements[i].offsetLeft + elements[i].offsetWidth || t+h < elements[i].offsetTop || t > elements[i].offsetTop + elements[i].offsetHeight){
	       		 	elements[i].className = 'files';
	       		 	elements[i].checked = false;
	       		 	if(!elements[i].checked){
	       		 		arr.push(elements[i])
	       		 	}
				}else{
					elements[i].className = 'files file-checked';
	       		 	elements[i].checked = true;
				}
	       	}
	       del.onclick = function(){
	       		deleted(getChecked())
	       	}
	   		if(getChecked().length == elements.length){
				console.log("现在没有数字")
				if(elements.length == 0){
					checkall.style.backgroundPositionY =  '-262px';
					checkall.oncheck = true;
				}
			    checkall.style.backgroundPositionY =  '-312px';
                checkall.oncheck = false;
			}else{
		   		checkall.style.backgroundPositionY =  '-262px';
                checkall.oncheck = true;
	   		}
	    }
	    document.onmouseup = function(e) {
			if(slectOff){
				for(var k=0;k<getChecked().length;k++){
					drag(getChecked()[k],box,getChecked(),arr)
				}
				document.onmousemove = null;
				box1.style.display = 'none';
				box1.style.width = 0;
				box1.style.height = 0;
				box1.style.left =0;
				box1.style.top = 0;
				document.onmouseup = null;
			}else{
				clearTimeout(timer1)
			}
			e.cancelBubble = true;
	    }
		e.cancelBubble = true;
	    return false;
	}
}
function showBread(id) {//面包屑导航//id是data里每一项的id
   var parentList = getParents(id);//
    if ( getInfo(id) ) {
        parentList.unshift( getInfo(id) );
    }
    var n = parentList.length + 1
    var html = '';
    for (var i=parentList.length-1; i>=0; i--) {
        html += '<i fileid="'+ parentList[i].id +'"style = "z-index = '+(n--)+'"><span>'+ parentList[i].filesname +'</span></i>';
    }
    bread.innerHTML = html;
}
cancel(checkall)
function deleted(arr){//删除
	console.log(arr)
	if(arr.length==0){
		del.tips = true;
		tipsHtml = "请选择需要删除的文件";
		changeTips(tips,tipsHtml,false,del.tips)
		return;
	}
	tipbox.style.display = 'block';
	mask.style.display = 'block';
	inputs[0].onclick = function(){
		deleteAll(arr)
		console.log(data)
		render(getChildren(currentPid))
		reTreeData();
		tipbox.style.display = 'none';
		mask.style.display = 'none';
		tipsHtml = "删除文件成功"
		changeTips(tips,tipsHtml,true)
		if(elements.length == 0){
			checkall.oncheck = true;
			checkall.style.backgroundPositionY = "-262px";
		}
	}
	inputs[1].onclick = function(){
		tipbox.style.display = 'none';
		mask.style.display = 'none';
	}
}
function moveToFile(arr){//移动
	var str = "";
	var str1 = '<div class="item" fileid="0" nofile = "floder">'+
		'<a href="#" class="link">'+
		'<span style="display:inline-block;">微云</span>'+
		'<i class="ico"></i>'+
		'</a>'+
		'</div>'
	var str2= "";
	var selfid = 0;
	if(arr.length==0 ){
		tipsHtml = "请选择需要移动的文件";
		changeTips(tips,tipsHtml,false,true)
		return;
	}
	saveBox.style.display = 'block';
	mask.style.display = 'block';
	dirTree.innerHTML = str1 + treeHtml(data,0);
	dirTree.addEventListener("click",function(e){
		var target = e.target;
		var item = this.getElementsByClassName('item');
		if(parents(target,".item")){
			target = parents(target,".item");
            if(hasClass(target.nextElementSibling,"hidden")){
                target.nextElementSibling.className = 'show';
            }else{
                target.nextElementSibling.className = 'hidden';
            }
        }
        for(var i=0;i<item.length;i++){
            item[i].style.background = "";
        }
        target.style.background = "#a0c5e8";
        var filetype = parents(target,".item").getAttribute('nofile');
        console.log(filetype)
        if(filetype != "floder"){
           str2 ="移动的目录不是文件夹"
        }else{
            str2 = "";
            selfid = parents(target,".item").getAttribute('fileid');
            var selectid = getUpAndDownLevelid(selfid);
            for(var j=0;j<arr.length;j++){
                for(var k=0;k<selectid.length;k++){
                    console.log(arr[j].fileid,selectid)
                    if(arr[j].fileid == selectid[k]){
                        console.log(arr[j].fileid, selectid[k])
                        str2 = "文件不能移动到自身或其子文件夹下";
                        break;
                    }
                }
				for(var k=0;k<getChildren(selfid).length;k++){
					if(getChildren(selfid)[k].filesname == arr[j].children[2].innerHTML){
						str2 = "所选目录有子文件与要移动的文件名字冲突";
					}
				}
            }
        }
		console.log(str2)
		errors.innerHTML = str2;
		errors.style.fontSize = "12px";
		fileMovePathTo.innerHTML =parents(target,".item").getElementsByTagName("span")[0].innerHTML;
	})
	if(arr.length > 1){
		 str=  " 等"+arr.length+"个文件";
	}else{
		str = "";
	}
	movefileName[1].innerHTML = str;
	movefileName[1].style.color = "#6C6C6C"
	movefileName[0].innerHTML = arr[0].getElementsByTagName('div')[0].innerHTML;
	selectA[0].onclick = function(){
		if(str2 == ""){
			for(var i=0;i<arr.length;i++){
				for(var k=0;k<data.length;k++){
					if(arr[i].fileid == data[k].id ){
						data[k].pid = selfid
					}
				}
			}
			render(getChildren(currentPid))
			reTreeData();
			showBread(currentPid);
			saveBox.style.display = 'none';
			mask.style.display = 'none';
			tipsHtml = "文件移动成功"
			changeTips(tips,tipsHtml,true)
			errors.innerHTML = "";
            checkall.style.backgroundPositionY = "-262px"
		}
	}
	selectA[1].onclick = function(){
		saveBox.style.display = 'none';
		mask.style.display = 'none';
		errors,innerHTML = ""
	}
	closebox.onclick = function(){
		saveBox.style.display = 'none';
		mask.style.display = 'none';
		errors,innerHTML = "";
	}
}

navbox.onclick = function(e){
	var target = e.target;
	console.log(target,target.getAttribute("data-class"))
	switch (target.getAttribute("data-class")){
		case "root":
			render(getChildren(0))
			reTreeData();
			showBread(0);
			break;
		case "recent":
			var arrRecent = [];
			for(var i=0;i<data.length;i++){
				if((new Date().getTime()-data[i].id)<1000*60*60*24){
					arrRecent.push(data[i])
				}
			}
			console.log(arrRecent)
			render(arrRecent)
			break;
		case "word":
			var arrWord = [];
			for(var i=0;i<data.length;i++){
				if(data[i].type == "txts"){
					arrWord.push(data[i])
				}
			}
			render(arrWord)
			break;
		case "photo":
			var photoArr = [];
			for(var i=0;i<data.length;i++) {
				if (data[i].type == "imgs") {
					photoArr.push(data[i])
				}
			}
			render(photoArr)
			break;
		case "music":
			var musicArr = [];
			for(var i=0;i<data.length;i++) {
				if (data[i].type == "musics") {
					musicArr.push(data[i])
				}
			}
			render(musicArr)
			break;
		case "video":
			var videoArr = [];
			for(var i=0;i<data.length;i++) {
				if (data[i].type == "videos") {
					videoArr.push(data[i])
				}
			}
			render(videoArr)
			break;
		case "recycle":
			break;
		default:
			break;
	}
}
//文件上传预览;
function readFiles(obj){
	var read = new FileReader();
	read.readAsDataURL(obj);
	read.onload = function(){
	//当读取文件成功完成的时候触发此事件
//this. result , 来获取读取的文件数据，如果是图片，将返回base64格式的图片数据
		var v = f.value;
		var arr = v.split("\\");
		var arr2 = arr[arr.length-1].split(".");
		var fileType = arr2[arr2.length-1];
		switch (fileType){
			case "png":
			case "jpg":
			case "jpeg":
			case "gif":
                if(!creatimage(arr2[0].substring(0,7),"imgs",read.result))return
				data.unshift(creatimage(arr2[0].substring(0,7),"imgs",read.result))
				render(getChildren(currentPid))
				reTreeData()
				break;
			case "mp4":
                if(!creatimage(arr2[0].substring(0,7),"imgs",read.result))return
				data.unshift(creatimage(arr2[0].substring(0,7),"videos",read.result))
				render(getChildren(currentPid))
				reTreeData()
				break;
			case "mp3":
                if(!creatimage(arr2[0].substring(0,7),"imgs",read.result))return
				data.unshift(creatimage(arr2[0].substring(0,7),"musics",read.result))
				render(getChildren(currentPid))
				reTreeData()
				break;
			case "txt":
                if(!creatimage(arr2[0].substring(0,7),"imgs",read.result))return
				data.unshift(creatimage(arr2[0].substring(0,7),"txts",read.result))
				render(getChildren(currentPid))
				reTreeData()
				break;
			default:
				tipsHtml = "不支持其他格式上传(只支持图片，txt,mp3,mp4)";
				changeTips(tips,tipsHtml,false,true)
				break;
		}
		
	}
}
function readtxt(obj){
	var read = new FileReader();
	read.readAsText(obj,"utf-8");
	read.onload = function(){
	//当读取文件成功完成的时候触发此事件
//this. result , 来获取读取的文件数据，如果是图片，将返回base64格式的图片数据
		var v = f.value;
		var arr = v.split("\\");
		var arr2 = arr[arr.length-1].split(".");
		var fileType = arr2[arr2.length-1];
		console.log(arr,arr2)
		switch (fileType){
			case "txt":
				console.log(read.result)
				data.unshift(creatimage(arr2[0].substring(0,7),"txts",read.result))
				render(getChildren(currentPid))
				reTreeData();
				break;
			default:
				break;
		}
	}
}
f.onchange = function(){
	var fe = this.files;
	for(var i=0;i<fe.length;i++){
		readFiles(fe[i])
	}	
}
function creatimage(name,filetype,result){
	for(var i=0;i<getChildren(currentPid).length;i++){
		if(name == getChildren(currentPid)[i].filesname){
			tipsHtml = "名字有冲突，请修改后上传";
			changeTips(tips,tipsHtml,false,true)
			return false;
		}
	}
	var obj = {
		id: new Date().getTime(),
        pid: currentPid,
        filesname:  name,
        type: filetype,
        src: result
	}
	return obj;
}