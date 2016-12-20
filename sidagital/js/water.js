var ctx0 = $('#l-box')[0].getContext('2d')
var step = 0;
var ctx = $('#bulb canvas')[0].getContext('2d')
var ctx1 = $('#bulb_large canvas')[0].getContext('2d')
var timer3 = null;
function init1(){
	 //清空canvas
    ctx1.clearRect(0,0,90,140);
    ctx1.fillStyle = '#E94B85';
    ctx1.beginPath()
    ctx1.arc(45,90,50,0,180*Math.PI/180,false)
    ctx1.stroke()
    ctx1.fill()
    step+=1;  
    //转化为弧度  
    var stepAngle = step*Math.PI/180;  
    var  deltaHeight = Math.sin(stepAngle)*5;  
    var deltaHeightRight = Math.cos(stepAngle)*5;  
    var y = 70 + deltaHeight;  
    //计算在左半圆上随着y值上下移动，对应的x值  
    var expression = 2500 - Math.pow((70-y),2);  
    var x = 50 - Math.sqrt(expression) ;  
    var rightY = 70 + deltaHeightRight;  
    var expressionRight = 2500 - Math.pow((70-rightY),2);  
    //取右侧的X坐标（同一个y值会有两个x坐标）  
    var rightX = 80 - (50 - Math.sqrt(expressionRight));  
    // alert("rightX:"+rightX+" rightY:"+rightY+" x:"+x+" y:"+y);   
    // ctx.fillStyle = "green";  
    ctx1.fillStyle = "#E94B85";  
    ctx1.beginPath();  
    ctx1.moveTo(x,y);  
    // ctx.lineTo(rightX, rightY);  
    ctx1.bezierCurveTo(40, y-5, 40, rightY-5, rightX,rightY);  
    // ctx.stroke();  
    //计算圆起始点（与X轴平行的直径的右侧端点）与圆左侧给定Y坐标的点  
    var distance = Math.sqrt(Math.pow((80-x),2)+Math.pow((70-y),2));  
    //sina=d/2r   a为夹角的一半  2a为两点的圆心角   Math.asin最终结果为弧度 如asin(1)=1/2*PI  
    var angle = Math.asin(distance/80)*2;  
    var distanceRight = Math.sqrt(Math.pow((80-rightX),2)+Math.pow((70-rightY),2));  
    var angleRight = Math.asin(distanceRight/80)*2;  
    // ctx.beginPath();  
    //如果在左侧上半圆则用2PI-弧度  
    if(y<70){  
      angle = 2*Math.PI - angle;  
    }  
    if(rightY < 70){  
      angleRight = -angleRight;  
    }  
    ctx1.arc(40,70,50,angleRight,angle,false);  
    // ctx.stroke();  
    ctx1.fill();  
    window.requestAnimationFrame(init1);
}
function init0(){
	 //清空canvas
    ctx0.clearRect(0,0,90,140);
    ctx0.fillStyle = '#E94B85';
    ctx0.beginPath()
    ctx0.arc(45,90,50,0,180*Math.PI/180,false)
    ctx0.stroke()
    ctx0.fill()
    step+=1;  
    //转化为弧度  
    var stepAngle = step*Math.PI/180;  
    var  deltaHeight = Math.sin(stepAngle)*5;  
    var deltaHeightRight = Math.cos(stepAngle)*5;  
    var y = 70 + deltaHeight;  
    //计算在左半圆上随着y值上下移动，对应的x值  
    var expression = 2500 - Math.pow((70-y),2);  
    var x = 50 - Math.sqrt(expression) ;  
    var rightY = 70 + deltaHeightRight;  
    var expressionRight = 2500 - Math.pow((70-rightY),2);  
    //取右侧的X坐标（同一个y值会有两个x坐标）  
    var rightX = 80 - (50 - Math.sqrt(expressionRight));  
    // alert("rightX:"+rightX+" rightY:"+rightY+" x:"+x+" y:"+y);   
    // ctx.fillStyle = "green";  
    ctx0.fillStyle = "#ED1165";  
    ctx0.beginPath();  
    ctx0.moveTo(x,y);  
    // ctx.lineTo(rightX, rightY);  
    ctx1.bezierCurveTo(40, y-5, 40, rightY-5, rightX,rightY);  
    // ctx.stroke();  
    //计算圆起始点（与X轴平行的直径的右侧端点）与圆左侧给定Y坐标的点  
    var distance = Math.sqrt(Math.pow((80-x),2)+Math.pow((70-y),2));  
    //sina=d/2r   a为夹角的一半  2a为两点的圆心角   Math.asin最终结果为弧度 如asin(1)=1/2*PI  
    var angle = Math.asin(distance/80)*2;  
    var distanceRight = Math.sqrt(Math.pow((80-rightX),2)+Math.pow((70-rightY),2));  
    var angleRight = Math.asin(distanceRight/80)*2;  
    // ctx.beginPath();  
    //如果在左侧上半圆则用2PI-弧度  
    if(y<70){  
      angle = 2*Math.PI - angle;  
    }  
    if(rightY < 70){  
      angleRight = -angleRight;  
    }  
    ctx0.arc(40,70,50,angleRight,angle,false);  
    // ctx.stroke();  
    ctx0.fill();  
    window.requestAnimationFrame(init0);
}
function init(){
	 //清空canvas
    ctx.clearRect(0,0,90,140);
    ctx.fillStyle = '#E94B85';
    ctx.beginPath()
    ctx.arc(45,90,50,0,180*Math.PI/180,false)
    ctx.stroke()
    ctx.fill()
    step+=1;  
    //转化为弧度  
    var stepAngle = step*Math.PI/180;  
    var  deltaHeight = Math.sin(stepAngle)*5;  
    var deltaHeightRight = Math.cos(stepAngle)*5;  
    var y = 70 + deltaHeight;  
    //计算在左半圆上随着y值上下移动，对应的x值  
    var expression = 2500 - Math.pow((70-y),2);  
    var x = 50 - Math.sqrt(expression) ;  
    var rightY = 70 + deltaHeightRight;  
    var expressionRight = 2500 - Math.pow((70-rightY),2);  
    //取右侧的X坐标（同一个y值会有两个x坐标）  
    var rightX = 80 - (50 - Math.sqrt(expressionRight));  
    // alert("rightX:"+rightX+" rightY:"+rightY+" x:"+x+" y:"+y);   
    // ctx.fillStyle = "green";  
    ctx.fillStyle = "#E94B85";  
    ctx.beginPath();  
    ctx.moveTo(x,y);  
    // ctx.lineTo(rightX, rightY);  
    ctx.bezierCurveTo(40, y-5, 40, rightY-5, rightX,rightY);  
    // ctx.stroke();  
    //计算圆起始点（与X轴平行的直径的右侧端点）与圆左侧给定Y坐标的点  
    var distance = Math.sqrt(Math.pow((80-x),2)+Math.pow((70-y),2));  
    //sina=d/2r   a为夹角的一半  2a为两点的圆心角   Math.asin最终结果为弧度 如asin(1)=1/2*PI  
    var angle = Math.asin(distance/80)*2;  
    var distanceRight = Math.sqrt(Math.pow((80-rightX),2)+Math.pow((70-rightY),2));  
    var angleRight = Math.asin(distanceRight/80)*2;  
    // ctx.beginPath();  
    //如果在左侧上半圆则用2PI-弧度  
    if(y<70){  
      angle = 2*Math.PI - angle;  
    }  
    if(rightY < 70){  
      angleRight = -angleRight;  
    }  
    ctx.arc(40,70,50,angleRight,angle,false);  
    // ctx.stroke();  
    ctx.fill();  
    window.requestAnimationFrame(init);
}
init0()
init()
init1()
var t = new TimelineMax();
t.staggerTo(".stage1 .water",0.3,{height:'100%',width:'100%'},0.3)
t.to('#remind',1,{display:'block'})
t.add('step1')
t.to('#imac',0.4,{background:'rgb(199, 232, 251)'},"+=0.4")
t.add(function(){
	$('#imac .loading').css('display','none')
	$('#imac .imac-browser').css('display','block')
})
t.to('#imac .imac-browser',0.3,{opacity:1})
t.to('#imac .imac-browser',0.3,{opacity:1})
t.to('.browser_header',0.3,{left:39,width: 102})
t.to($('.browser_content')[0],0.3,{top:69})
t.to($('.browser_content.right')[0],0.3,{top:69,left:94})
t.to($('.browser_content')[2],0.3,{top:81})
t.to($('.browser_content.right')[1],0.3,{top:81,left:94})
t.to($('.browser_content')[4],0.3,{top:93})
t.to($('.browser_content.right')[2],0.3,{top:93,left:94})
for(var i=0;i<$('.stage2 .water').length-4;i++){
	t.to($(".stage2 .water")[i],0.4,{height:'100%',width:'100%'})
}
t.to($('#bulb')[0],0.2,{top:306})
for(var i=$('.stage2 .water').length-5;i<$('.stage2 .water').length;i++){
	t.to($(".stage2 .water")[i],0.4,{height:'100%',width:'100%'})
}
t.add(function(){
	$('#ipad .loading').css('display', "none")
	$('#ipad').css('background', "#fff")
})
t.add('step2')
t.to('#ipad .browser',0.4,{width: 155,height: 214})
t.to($('.stage3 .water')[0],0.4,{width:'100%',height:'100%'})
t.to($('.stage3 .water')[1],0.4,{width:'100%',height:'100%'})
t.to($('.stage3 .water')[2],0.4,{width:'100%',height:'100%'})
t.add(function(){
	$('#ipad-mini .loading').css('display', "none")
	$('#ipad-mini').css('background', "#fff")
})
t.to('#ipad-mini .browser',0.4,{width:127,height: 175})
t.to($('.stage3 .water')[3],0.4,{width:'100%',height:'100%'})
t.to($('.stage3 .water')[4],0.4,{width:'100%',height:'100%'})
t.add(function(){
	$('#iphone .loading').css('display', "none")
	$('#iphone').css('background', "#fff")
})
t.to('#iphone .browser',0.3,{width: 54,height: 94})
var tube3 = $('.stage3 .tube')
t.to($('.stage3 .water')[5],0.4,{width:'100%',height:'100%'})
for(var i=6;i<tube3.length;i++){
	t.to($('.stage3 .water')[i],0.4,{width:'100%',height:'100%'})
}
t.add('step3')
t.to($('.stage4 .water')[0],0.4,{width:'100%',height:'100%'})
t.to('#bulb_large',0.2,{top:-13})
t.to($('.stage4 .water')[1],0.4,{width:'100%',height:'100%'})
t.to($('.stage4 .water')[2],0.4,{width:'100%',height:'100%'})
t.to($('.stage4 .water')[3],0.4,{width:'100%',height:'100%'})
t.to($('.stage4 .water')[4],0.4,{width:'100%',height:'100%'})
t.add(function(){
	$('#bag-last').css('display','block')
	$('#bag-middle').css('display','block')
	$('#bag-front').css('display','block')
})
t.to('#bag-last',0.4,{top:123})
t.to('#bag-middle',0.4,{top:105})
t.to('#bag-front',0.4,{top:94})
t.to('#shirt-fill',0.4,{height:84})
for(var i=5;i<$('.stage4 .tube').length;i++){
	t.to($('.stage4 .water')[i],0.3,{width:'100%',height:'100%'})
}
t.add('step4')
for(var i=0;i<14;i++){
	t.to($('.stage5 .water')[i],0.3,{width:'100%',height:'100%'})
}
t.to($('.stage5 .water')[14],0.4,{width:'100%',height:'100%'})
t.to($('.stage5 .water')[15],0.4,{width:'100%',height:'100%'},'-=0.4')
t.to($('.stage5 .water')[16],0.4,{width:'100%',height:'100%'})
t.to($('.stage5 .water')[17],0.4,{width:'100%',height:'100%'},"-=0.4")
t.add('step5')
t.to($('.stage6 .water')[0],0.4,{width:'100%',height:'100%'})
t.to($('.stage6 .water')[1],0.4,{width:'100%',height:'100%'},'-=0.4')
t.to('.stage6 .walter',0.4,{bottom:236})
for(var i=2;i<$(".stage6 .water").length;i++){
	if(i%2==0){
		t.to($('.stage6 .water')[i],0.3,{width:'100%',height:'100%'})
	}else{
		t.to($('.stage6 .water')[i],0.3,{width:'100%',height:'100%'},'-=0.3')
	}
}
t.add('step6')
t.staggerTo(".stage7 .water",0.3,{height:'100%',width:'100%'},0.3)
t.to($('.si-ele')[0],0.3,{display:'block'})
t.to($('.line-bond')[0],0.3,{width:30})
t.to($('.coop')[0],0.3,{display:'block'})
t.to($('.line-bond')[1],0.3,{width:56})
t.to($('.hasbro')[0],0.3,{display:'block'})
t.to($('.line-bond')[2],0.3,{width:30})
t.to($('.si-ele')[1],0.3,{display:'block'})
t.to($('.line-bond')[3],0.3,{height:56})
t.to($('.planefinder')[0],0.3,{display:'block'})
t.to($('.line-bond')[4],0.3,{width:30})
t.to($('.si-ele')[2],0.3,{display:'block'})
t.to($('.line-bond')[5],0.3,{width:56})
t.to($('.more')[0],0.2,{display:'block'})
t.to($('.line-bond')[6],0.2,{width:30})
t.to($('.si-ele')[3],0.2,{display:'block'})
t.to($('.for-logo')[0],0.2,{display:'block'})
t.add("step7")
t.stop();
t.tweenTo('step1')
$(window).bind("scroll",scrollFn);
function scrollFn(){
	$(window).scrollTop(0);
}
document.onmousewheel = function(e){
	$(window).unbind("scroll",scrollFn);
	if(e.wheelDelta<0){
		render(window.pageYOffset)
	}
}
var barrel = $("#container .barrel")[0];
$(".walter")[0].onmousedown = function(e){
	var disX = this.offsetLeft  + Math.random()*100;
	$('.walter')[0].onmouseup = function(){
		var adiv = document.createElement('div')
		adiv.className = 'roll';
		adiv.style.left = disX+'px';
		adiv.style.top = barrel.offsetTop - Math.random()*40 +"px";
		adiv.innerHTML = '+1';
		$('#container')[0].appendChild(adiv)
		if(adiv){
			timer3 = setTimeout(function(){
				$('#container')[0].removeChild(adiv);
			},1000)
		}else{
			timer3 = null;
		}
		$('.walter')[0].onmouseup = null;
	}
	return false;
}
var Oa = $('.formula a');
for(var i=0;i<Oa.length;i++){
	Oa[i].index = i;
	Oa[i].onmouseover = function(){
		if(this.index<2){
			this.style.backgroundPositionY = '-338px';
		}else{
			this.style.backgroundPositionY = '-508px';
		}
	}
	Oa[i].onmouseout = function(){
		if(this.index<2){
			this.style.backgroundPositionY = '0px';
		}else{
			this.style.backgroundPositionY = '-170px';
		}
	}
}
var sign = 0;
$(window).bind("mousedown",function(){
    $(window).unbind("scroll",scrollFn);
    $('#group')[0].style.display = 'block';
    $(window).bind("scroll", function () {
        var  oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        if ( oScrollTop > sign) {
            sign =  oScrollTop;//更新scrollTop
            render(oScrollTop)
        }
    })

});
function render(pageY){
    var h = $('.stage2')[0].offsetTop*2/3
	if(pageY>$('.stage2')[0].offsetTop-h ){
		$('#remind')[0].style.display = 'none';
		$('.stage2 .feature')[0].style.opacity = 1;
		t.tweenTo("step2")
	}
	if(pageY>$('.stage3')[0].offsetTop-h){
		$('.stage3 .feature')[0].style.opacity = 1;
		t.tweenTo("step3")
	}
	if(pageY>$('.stage4')[0].offsetTop-h){
		$('.stage4 .feature')[0].style.opacity = 1;
		t.tweenTo("step4")
	}
	if(pageY>$('.stage5')[0].offsetTop-h){
		$('.stage5 .feature')[0].style.opacity = 1;
		t.tweenTo("step5")
	}
	if(pageY>$('.stage6')[0].offsetTop-h){
		$('.stage6 .feature')[0].style.opacity = 1;
		$("#container .game-btn")[0].style.visibility = 'visible';
		t.tweenTo("step6")
	}
	if(pageY>$('.stage7')[0].offsetTop-h){
		$('.stage7 .feature')[0].style.opacity = 1;
		t.tweenTo("step7")
		$('#group')[0].style.display = 'block';
	}
}