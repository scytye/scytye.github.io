var timeline = document.getElementById('timeline');
var timelineHtml = '';
var line  = timeline.getElementsByClassName('line')[0];
for(var i=0;i<data.length;i++){
	timelineHtml += '<div class="month" style="right:' + ((i + 1) * 430 - 150) + 'px" xmlns="http://www.w3.org/1999/html">'+data[i].date1+'</div>'+
		'<div class="event" style="right:'+(i+1)*430+'px;height: 300px;">'+
			'<a href="javascript:;" class="event '+data[i].type+'"></a>'+
			'<span class="stroke"></span>'+
			'<a href="javascript:;" class="content clearfix">'+
				'<span class = "image"><img src = '+data[i].url+'></span>'+
				'<span class="title">'+data[i].title+'</span>'+
			'</a>'+
		'</div>'+
		'<div class="event down" style="right: '+((i+1)*430+200)+'px;height: 300px;">'+
			'<a href="javascript:;" class="event '+data[i].type+'"></a>'+
			'<span class="stroke"></span>'+
			'<a href="javascript:;" class="content">'+
				'<span class = "image"><img src = '+data[i].url+'></span>'+
				'<span class="title">'+data[i].title+'</span>'+
			'</a>'+
		'</div>'
}
line.innerHTML += timelineHtml;
line.style.width = 430*(data.length+1) +'px';
var odiv = timeline.getElementsByTagName('div')
var wl = document.body.offsetWidth;
timeline.onmousedown = function(e){
	var le = line.offsetLeft;
	var disX = e.clientX
	document.onmousemove = function(e){
		var l = e.clientX - disX;
		line.style.left =le + l+'px';
	}
	document.onmouseup = function(){
		if(line.offsetLeft<-3200){
			line.style.left = -2946 + 'px';
		}
		if(line.offsetLeft >100){
			line.style.left = 0;
		}
		document.onmousemove = null;
		document.onmoueup = null;
	}
	return false;
}
