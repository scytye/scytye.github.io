var getPidInput = document.getElementById('getPidInput');
var tipsHtml = '';
var tips = document.getElementById('tips');
var imageBox = document.getElementById("image-box");
var imageCon = document.getElementsByClassName("image-con")[0];
var spans = document.getElementsByClassName("pichead")[0].getElementsByTagName("span");
var timer = null;
var ondownFlag = false;
function cefiles(d,filesrc){//渲染页面函数，d为单个文件
	var srcs = filesrc || null;
	//1、先生成需要渲染的文件
	var adiv = document.createElement('div');
	adiv.className = 'file-item';
    var divs = document.createElement('div');
    divs.fileid = d.id;
    divs.className = 'files';
    var checkbox = document.createElement('span');
    checkbox.className = 'checks';
    divs.appendChild(checkbox);
    var image = document.createElement('span');
    image.className = 'ico_img';
    if(d.type == "imgs"){
    	image.style.backgroundImage = "url("+ srcs +")";
		image.style.backgroundSize = "cover";
		divs.nofile = "imgs";
    }else if(d.type == "videos"){
    	image.className = "ico_mp4";
		divs.nofile = "videos";
    }else if(d.type == "txts"){
    	image.className = "ico_txt";
		divs.nofile = "txts";
    }else if(d.type == "musics"){
    	image.className = "ico_mp3";
		divs.nofile = "musics";
    }else{
		divs.nofile = "floder";
	}
    divs.appendChild(image);
    var filesname = document.createElement('div');
    filesname.className = 'file_name';
    filesname.innerHTML = d.filesname;
    divs.appendChild(filesname);
    adiv.appendChild(divs);
    wrapCon.appendChild(adiv)
    //2、渲染数据后添加事件
    divs.onmouseover = function() {
        if (this.checked) {
            divs.className = 'files file-checked';//选中状态
        } else {
            divs.className = 'files file-hover';//移入状态
        }
    }
    divs.onmouseout = function() {
        if (this.checked){
            divs.className = 'files file-checked';
        } else {
            divs.className = 'files';//初始状态
        }
    }
    if(d.type == "floder"){
    	divs.onclick = function(e){
	        currentPid = this.fileid;
	        getPidInput.value = currentPid;
	        render(getChildren(this.fileid));
	        showBread(this.fileid);
	        rendertreedata(treebox,".item")
	        e.cancelBubble = true;
	    }
    }else if(d.type == "imgs"){
    	divs.onclick = function(){
			console.log("点击事件")
    		imageBox.style.display = "block";
    		mask.style.display = "block";
    		imageCon.innerHTML += "<img src='"+srcs+"'>";
			disimg()
			spans[2].onclick = function(){
				imageBox.style.display = "none";
				mask.style.display = "none";
				imageCon.innerHTML = "";
			}
    	}
    }else{
		divs.onclick = function () {
			alert("只支持图片预览")
		}
    }
	//3、得到所有渲染文件的数组，即存在的没有被删除的数据；
	elements.push(divs)
	//drag(divs,box)
    checkbox.onclick = function(e){
    	setStatus(divs,!divs.checked)//判断divs文件夹是否选中
    	if(getChecked().length == elements.length){
			checkall.style.backgroundPositionY = '-312px';
			checkall.oncheck = false;
    	}else{
    		checkall.style.backgroundPositionY = '-262px';
    		checkall.oncheck = true;
    	}
    	if(elements.length == 0){
    		checkall.style.backgroundPositionY = '-262px';
    		checkall.oncheck = true;
    	}
    	del.onclick = function(){
    		deleted(getChecked())
    	}
    	if(getChecked().length>0){
    		filesnum.innerHTML = getChecked().length;
			console.log(getChecked())
    		for(var k=0;k<getChecked().length;k++){
    			drag(getChecked()[k],box,getChecked(),nonechecked())
    		}
	    }
    	e.cancelBubble = true;
    }
	checkbox.onmousedown = function (e) {
		e.cancelBubble = true;
	}
}
function cetext(wrapCon,creatfiles){//新建文件
	var name = '';
	//生成新建的文件
	var odiv = document.createElement('div')
	odiv.className = 'file-item'
	var divs = document.createElement('div');
    divs.className = 'files';
    var checkbox = document.createElement('span');
    checkbox.className = 'checks';
    divs.appendChild(checkbox);
    var image = document.createElement('span');
    image.className = 'ico_img';
    divs.appendChild(image);
    var text = document.createElement('input');
    text.className = 'text';
    text.style.textAlign = 'center'
    divs.appendChild(text)
    odiv.appendChild(divs)
    var firstElement = wrapCon.getElementsByClassName('file-item')[0];
    wrapCon.insertBefore(odiv,firstElement)
    text.select()
	text.style.textAlign = "center";
	var arr = getChildren(currentPid);
	main.onmousedown = null;
	document.body.onmousedown = function(){
		name = text.value;
		if(name == ''){
			document.body.onmousedown = null;
			wrapCon.removeChild(odiv);
			blockselect();
		}else{
			for(var i=0;i<arr.length;i++){
				if(name == arr[i].filesname){
					creatfiles.isok = false;
					tipsHtml = "文件名有冲突，请重新新建";
					changeTips(tips,tipsHtml,creatfiles.isok)
					document.body.onmousedown = null;
					wrapCon.removeChild(odiv);
					blockselect();
					return;
				}
			}
			console.log(currentPid)
			data.unshift({
		        id: new Date().getTime(),
		        pid: currentPid,
		        filesname: name,
		        type: "floder"
			});
			render(getChildren(currentPid))
			reTreeData();
			blockselect();
			console.log(getChildren(currentPid))
			creatfiles.isok = true;
			tipsHtml = "新建文件成功";
			changeTips(tips,tipsHtml,creatfiles.isok)
			document.body.onmousedown = null;
		}
	}
	window.onkeyup = function (e) {
		if(e.keyCode ==  13){
			document.body.onmousedown=null;
			name = text.value;
			if(name == ''){
				window.onkeyup = null;
				wrapCon.removeChild(odiv);
				blockselect();
			}else{
				for(var i=0;i<arr.length;i++){
					if(name == arr[i].filesname){
						creatfiles.isok = false;
						tipsHtml = "文件名有冲突，请重新新建";
						changeTips(tips,tipsHtml,creatfiles.isok)
						window.onkeyup = null;
						wrapCon.removeChild(odiv);
						blockselect();
						return;
					}
				}
				console.log(currentPid)
				data.unshift({
					id: new Date().getTime(),
					pid: currentPid,
					filesname: name,
					type: "floder"
				});
				render(getChildren(currentPid))
				reTreeData();
				blockselect();
				console.log(getChildren(currentPid))
				creatfiles.isok = true;
				tipsHtml = "新建文件成功";
				changeTips(tips,tipsHtml,creatfiles.isok)
				window.onkeyup = null;
			}
		}
	}
}

function render(Data) {//渲染页面
    wrapCon.innerHTML = '';
    elements = [];
    for (var i=0; i<Data.length; i++) {
    	if(Data[i].src){
    		cefiles(Data[i],Data[i].src);
    	}else{
    		cefiles(Data[i]);
    	}
    }
	checkall.style.backgroundPositionY =  '-262px';
	checkall.oncheck = true;
}
function getChecked() {//被选中的元素集合
    var arr = [];
    for (var i=0; i<elements.length; i++) {
        if (elements[i].checked) {
            arr.push(elements[i]);
        }
    }
    return arr;
}
function nonechecked(){//未选中元素的集合
	 var arr = [];
    for (var i=0; i<elements.length; i++) {
        if (!elements[i].checked) {
            arr.push(elements[i]);
        }
    }
    return arr;
}
function setStatus(fileElement, status) {//判断文件是否选中
    fileElement.checked = status;
    fileElement.className = status ? 'files file-checked': 'files';
}
function drag(div1,div2,checked,nochecked){
	div1.onmousedown = function(e){
		ondownFlag = false;
		//if(!div1.checked){
		//	div1.checked = true;
		//	div1.className = 'files file-checked';
		//	checked = [div1];
		//}
		if(div1.className == "files file-hover"){
			return false;
		}
		var divL= div2.offsetLeft;
		var divT = div2.offsetTop;
		var l = e.clientX - divL;
		var t = e.clientY - divT;
		timer = setTimeout(function () {
			div2.style.left = l + 'px';
			div2.style. top = t + 'px';
			div2.getElementsByTagName('span')[0].innerHTML = checked.length;
			ondownFlag = true;
		},200)
		document.onmousemove = function(e){
			if(!ondownFlag)return;
			ondownMove = true;
			if(e.clientX - l > 10 || e.clientY - t > 10){
				div2.className = 'box';
				var leng = checked.length;
				if(leng >4){
					leng =4;
				}
				for(var i=0;i<leng;i++){
					var aspan = document.createElement('span')
					aspan.className = 'movefiles';
					aspan.style.left = -i*5 + 'px';
					aspan.style.top = i*5 + 'px';
					div2.appendChild(aspan)
				}
			}
			div2.style.left = e.clientX +5 +'px';
			div2.style.top = e.clientY +5 + 'px';
		}
		document.onmouseup = function(e){
			if(ondownFlag){
				var l2 = e.clientX - mainbox.offsetLeft;
				var t2 = e.clientY - mainCon.offsetTop;
				document.onmousemove = document.onmouseup = null;
				div2.className = 'nonebox';
				div2.innerHTML = '<span id = "filesnum">'+1+'</span>';
				var a;
				for(var i=0;i<elements.length;i++){
					if(l2>elements[i].offsetLeft && l2<elements[i].offsetLeft + elements[i].offsetWidth && t2>elements[i].offsetTop && t2<elements[i].offsetTop + elements[i].offsetHeight){
						if(elements[i].checked){
							a = undefined;
						}else{
							a = i;
						}
					}
				}
				if(a != undefined){
					if(elements[a].nofile != "floder"){
						tipsHtml = "不能移动到非文件夹目录";
						changeTips(tips,tipsHtml,false,true)
						return;
					}
					var getfileArr = getChildren(elements[a].fileid)
					for(i=0;i<checked.length;i++){
						console.log(checked,getfileArr)
						for(var j=0;j<getfileArr.length;j++){
							console.log(getfileArr[j].filesname,checked[i].children[2].innerHTML);
							if(getfileArr[j].filesname == checked[i].children[2].innerHTML){
								console.log(checked[i].children[2].innerHTML)
								tipsHtml = "所选文件与移动目录的子文件名字重复";
								changeTips(tips,tipsHtml,false)
								return;
							}
						}
					}
					for(i=0;i<checked.length;i++){
						for(j=0;j<data.length;j++){
							if(data[j].id == checked[i].fileid){
								data[j].pid= elements[a].fileid;
							}
						}
					}
				}
				render(getChildren(currentPid));
				reTreeData()
			}else{
				clearTimeout(timer)
			}
		}	
        e.cancelBubble = true;
	}
}
function recreatename(obj){//重命名函数
	var name1 = "";
	if(obj.length == 1){
		var op = obj[0].getElementsByTagName("div")[0];
		var html =op.innerHTML;
		op.innerHTML = ''; 
		var text = document.createElement('input');
	    text.className = 'text';
	    obj[0].appendChild(text)
	    text.select()
	    text.style.textAlign = "center"
	    main.onmousedown = null;
		document.body.onmousedown = function(){
			name1 = text.value;
			console.log(name1)
			var arr = getChildren(currentPid);
			if(name1 != ""){
				console.log(name1)
				for(var i=0;i<arr.length;i++){
					if(name1 != arr[i].filesname){
						op.innerHTML = name1;
						rename.isok = true;
						tipsHtml = "重命名成功";
						changeTips(tips,tipsHtml,rename.isok)
					}else{
						rename.isok = false;
						tipsHtml = "文件名有冲突，请改名";
						changeTips(tips,tipsHtml,rename.isok)
						return;
					}
				}
			}else{
				console.log("重命名内容为空",html)
			    op.innerHTML = html;
			}
			for(var i=0;i<data.length;i++){
				if(data[i].id == obj[0].fileid){
					data[i].filesname = op.innerHTML;
				}
			}
			obj[0].removeChild(text)
			if(obj.length == elements.length){
				checkall.oncheck = true;
				checkall.style.backgroundPositionY = '-262px';
			}
			obj[0].checked = false;
			obj[0].className = "files";
			document.body.onmousedown = null;
			render(getChildren(currentPid))
			blockselect()
			reTreeData()
		}
		cancel(text)
		text.onclick = function(e){
			e.cancelBubble = true
		}
	}else{
		if(obj.length == 0){
			tipsHtml = "请选择文件";
		}
		if(obj.length > 1){
			tipsHtml = "只能对单个文件重命名";
		}
		changeTips(tips,tipsHtml,false,true)
	}
}
function cancel(obj){//阻止冒泡函数
	obj.onmousedown = function(e){
		e.cancelBubble = true
    }
    obj.onmousemove = function(e){
    	e.cancelBubble = true
    }
    obj.onmouseup = function(e){
    	e.cancelBubble = true;
    }
}
//树状结构；
function treeHtml(Data,id){
	var childs = getChildById(Data,id);
	var html = '<ul class ="show">';
	childs.forEach(function(m){
		var level = getLevelById(Data,m.id);
		var havechild = hasChilds(Data,m.id);
		var classname;
		var classname2;
		if(m.type == "floder"){
			classname2 = "link"
		}else if(m.type == "imgs"){
			classname2 = "photo"
		}else if(m.type == "videos"){
			classname2 = "video"
		}else if(m.type == "txts"){
			classname2 = "word"
		}else if(m.type == "musics"){
			classname2 = "music"
		}
		if(havechild){
			classname = 'ico';
		}else{
			classname = 'ico_none';
		}
		html += '<li>'+
				'<div class="item" style = "padding-left:'+level*10+'px";fileid = "'+m.id+'" nofile= "'+m.type+'">'+
			'</div>'+
				'<div class="item" style = "padding-left:'+level*10+'px"; fileid = "'+m.id+'"nofile= "'+m.type+'">'+
					'<a href="#" class="'+classname2+'">'+
						'<span style="display:inline-block;">'+m.filesname+'</span>'+
						'<i class='+classname+'></i>'+
					'</a>'+
				'</div>'+ treeHtml(Data,m.id)+
			'</li>'
	})
	html += '</ul>';
	return html;
}
function rendertreedata(obj,classname,checkall){//树状结构点击事件
	obj.addEventListener("click",function(e){
		var target = e.target;
		if(parents(target,classname)){
			target = parents(target,classname);
			if(hasClass(target.nextElementSibling,"hidden")){
				target.nextElementSibling.className = 'show';	
			}else{
				target.nextElementSibling.className = 'hidden';
			}
			if(target.getAttribute("nofile") ==  "floder"){
				currentPid = target.getAttribute("fileid");
				render(getChildren(currentPid));
				showBread(currentPid);
			}else if(target.getAttribute("nofile") ==  "imgs"){
				imageBox.style.display = "block";
				mask.style.display = "block";
				for(var i=0;i<data.length;i++){
					if(data[i].id == target.getAttribute("fileid")){
						var srcs = data[i].src;
					}
				}
				imageCon.innerHTML = "<img src='"+srcs+"'>";
				disimg()
				spans[2].onclick = function(){
					console.log(1)
					imageBox.style.display = "none";
					mask.style.display = "none";
					imageCon.innerHTML = "";
				}
			}else{
				tipsHtml = "只支持图片预览";
				changeTips(tips,tipsHtml,false,true);
			}
		}
	})
}
function reTreeData(){
	treebox.innerHTML = '<div class="item" fileid="0"nofile = "floder">'+
			'<a href="#" class="link">'+
				'<span style="display:inline-block;">微云</span>'+
				'<i class="ico"></i>'+
			'</a>'+
		'</div>'
	treebox.innerHTML += treeHtml(data,0);
}
function disimg(){
	var imgs = imageCon.getElementsByTagName("img")[0];
	var w = imgs.offsetWidth;
	var h= imgs.offsetHeight;
	if(w>h){
		imgs.style.width = imageCon.offsetWidth + 'px';
		imgs.style.height = imageCon.offsetWidth*h/w +'px';
	}else{
		imgs.style.height = imageCon.offsetHeight + 'px';
		imgs.style.width =imageCon.offsetHeight *w/h +'px'
	}
	imgs.style.left = -imgs.offsetWidth/2 + imageCon.offsetWidth/2 +'px';
	imgs.style.top = 50-imgs.offsetHeight/2 + imageCon.offsetHeight/2+'px';
	var w1 = imgs.offsetWidth;
	var h1 = imgs.offsetHeight;
	var l1 = imgs.offsetLeft;
	var t1 = imgs.offsetTop;
	console.log(imgs)
	document.onmousewheel = function(e){
		if(e.wheelDelta>0){
			imgs.style.width = imgs.offsetWidth + 10  + 'px';
			imgs.style.height = imgs.offsetHeight + 10 +'px';
			imgs.style.left = imgs.offsetLeft - 5 +'px';
			imgs.style.top = imgs.offsetTop - 5 + 'px';
		}else if(e.wheelDelta<0){
			imgs.style.width = imgs.offsetWidth - 10  + 'px';
			imgs.style.height = imgs.offsetHeight - 10 +'px';
			imgs.style.left = imgs.offsetLeft + 5 +'px';
			imgs.style.top = imgs.offsetTop + 5 + 'px';
		}
		if(imgs.offsetWidth < w1/2 || imgs.offsetHeight < h1/2){
			imgs.style.width = w1/2  + 'px'
			imgs.style.height = h1/2 +'px';
			imgs.style.left = 400-w1/4+'px';
			imgs.style.top = 300-h1/4 + 'px';
		}
		if(imgs.offsetWidth > w1 || imgs.offsetHeight > h1){
			imgs.style.width = w1  + 'px'
			imgs.style.height = h1 +'px';
			imgs.style.left =  l1+'px';
			imgs.style.top = t1+ 'px';
		}
		return false;
	}
}