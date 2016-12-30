var currents = "step1";
$("body").height(8000);
$("#resume_content")[0].style.height = window.innerHeight*2 +'px';
$(".sence").height($(window).height());
$(".hea_intro").css("top",0);
$(".sence:not(':first')").css("top",$(window).height())
$(".sence:not(':first')").height($(window).height()-100);
$(window).resize(function(){
	$(".sence").height($(window).height())
	$(".sence:not(':first')").css("top",$(window).height())
	tScroll()
})
$(window).bind("scroll",scrollT)
function scrollT(){
	$(window).scrollTop(0);
}
$(window).bind("scroll",scrollStatus);
function scrollStatus(){
	var times = scale()*timeScroll.totalDuration();
	timeScroll.seek(times,false)
}
function scale(){
	var scrollNum = $(window).scrollTop();
	var maxH = $("body").height() - $(window).height();
	var s = scrollNum/maxH
	return s;
}
$(window).bind("mousedown",function(){
	$(window).unbind("scroll",scrollT)
})
$(".controls").bind("mouseup",function(){
	$(window).unbind("scroll",scrollT);
	var nexts = timeScroll.getLabelAfter(0);
	timeScroll.tweenTo(nexts);
})
$(window).bind("mouseup",upFn);
function upFn(){
	var s1 = scale();
	var time1 = s1*timeScroll.totalDuration();
	var prevs = timeScroll.getLabelBefore(time1);
	var nexts = timeScroll.getLabelAfter(time1);
	var prevtime = timeScroll.getLabelTime(prevs);
	var nextime = timeScroll.getLabelTime(nexts);
	var prevnum = Math.abs(prevtime - time1);
	var nextnum  = Math.abs(nextime - time1);
	var step = "";
	if( s1 === 0 ){
		step = "step1"
	}else if( s1 === 1 ){
		step = "step3"
	}else if(prevnum < nextnum){
		step = prevs;
	}else{
		step = nexts;
	};
	timeScroll.tweenTo(step);
	var totalTime = timeScroll.totalDuration();
	var afterTime = timeScroll.getLabelTime(step);
	var maxH = $("body").height() - $(window).height();
	var positionY =parseInt(afterTime/totalTime * maxH);
	var d = Math.abs( timeScroll.time() - afterTime );
	var scrollAnimate = new TimelineMax();
	scrollAnimate.to("html,body",d,{scrollTop:positionY});
	currents = step;
}
var timeScroll = null;
function tScroll(){
	var time = timeScroll ? timeScroll.time() : 0;
	if(timeScroll) timeScroll.clear();
	timeScroll = new TimelineMax();
	timeScroll.to("body",0,{"overflow-y":"scroll"})
	timeScroll.add("step1");
	timeScroll.to($(".skills")[0],0.8,{top:100,ease:Cubic.easeInOut});
	timeScroll.add(function () {
		var obj = $(".bottom_detail .detail");
		obj.each(function (i,ele) {
			ele.style.width = ele.getAttribute("data-width")
		})
	})
	timeScroll.add("step2");
	timeScroll.to($(".project")[0],0.8,{top:100,ease:Cubic.easeInOut});
	timeScroll.add("step3");
	timeScroll.to($(".project")[1],0.8,{top:100,ease:Cubic.easeInOut});
	timeScroll.add("step4");
	timeScroll.to($(".project")[2],0.8,{top:100,ease:Cubic.easeInOut,height:window.innerHeight-100});
	timeScroll.add("step5");
	timeScroll.stop();
	timeScroll.seek(time)
}
tScroll();
var timer = null;
function mousefn(e,direction){
	$(window).unbind("scroll",scrollT);
	if(direction<1){
		changes("next")
	}else{
		changes("prev")
	}
	clearTimeout(timer)
	timer = setTimeout(function(){
		$("#resume_content").one("mousewheel",mousefn)
	},1200)	
}
function changes(value){
	if(value === "next"){
		console.log(currents)
		var currentime = timeScroll.getLabelTime(currents);
		var nextStep = timeScroll.getLabelAfter(currentime);
		if(!nextStep)return
		var totalTime = timeScroll.totalDuration();
		var afterTime = timeScroll.getLabelTime(nextStep);
		var maxHeight = $("body").height() - $("window").height();
		var positiony = afterTime/totalTime*maxHeight;
		var d = Math.abs(timeScroll.time() - afterTime);
		var scrollAni = new TimelineMax();
		scrollAni.to("html,body",d,{scrollTop:positiony})
		currents = nextStep;
	}else{
		var currentime = timeScroll.getLabelTime(currents);
		var prevStep = timeScroll.getLabelBefore(currentime);
		if(!prevStep)return
		var totalTime = timeScroll.totalDuration();
		var beforeTime = timeScroll.getLabelTime(prevStep);
		var maxHeight = $("body").height() - $("window").height();
		var positiony = beforeTime/totalTime*maxHeight;
		var d = Math.abs(timeScroll.time() - beforeTime);
		var scrollAni = new TimelineMax();
		scrollAni.to("html,body",d,{scrollTop:positiony})
		currents = prevStep;
	}
}
$("#resume_content").bind("mousewheel",function(e){
	e.preventDefault()
})
$("#resume_content").one("mousewheel",mousefn)
$(".project_ex img").bind("mouseover", function () {
	$(".project_ex dt a").css({ top: "380px", opacity: "1" ,right:"0px"});
})