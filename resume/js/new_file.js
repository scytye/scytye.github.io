var headCon = document.getElementsByClassName('header')[0];
var bottomDetail = document.getElementsByClassName('bottom_detail')[0].getElementsByTagName('ul')[0];
var project = document.getElementsByClassName('project');
var experDetail = document.getElementsByClassName('exper_detail')[0];
var html = '';
var str = '';
var str1='';
var m=[
	"detail_01",
	"detail_02",
	"detail_03",
	"detail_04",
	"detail_05"
]
headCon.innerHTML = showCon(userInfo);
bottomDetail.innerHTML = showCon(skills);
project[0].innerHTML += showCon(projects);
project[1].innerHTML += showCon(projects);
project[2].innerHTML += showCon(projects);
var projectEx = document.getElementsByClassName("project_ex");
console.log(projectEx)
projectEx[0].innerHTML = projectData(0);
projectEx[1].innerHTML = projectData(1);
projectEx[2].innerHTML = projectData(2);
function showCon(data){
	switch (data){
		case userInfo:
			html = '<div class="hea_con">'+
				'<div class="hea_left">'+
			'<h3>'+data.userName+'</h3>'+
			'<p>'+data.jobWant+'</p>'+
			'</div>'+
			'<div class="hea_right">'+
			'<div class="hea_qq">'+data.userQQ+'</div>'+
			'<div class="hea_mail">'+data.userEmail+'</div>'+
			'</div>'+
			'</div>'

		break;
		case skills:
			html = '';
			for(var i=0;i<data.skillsClassify.length;i++){
				for(var j=0;j<data.skillsClassify[i].skillTooltip.length;j++){
					str += '<p class="word">'+data.skillsClassify[i].skillTooltip[j]+'</p>';
				}
				html += '<li class = '+m[i]+'>'+
					'<div class="percent">'+data.skillsClassify[i].percent+'</div>'+
					'<div class="subject">'+
					'<div class="detail" data-width="'+data.skillsClassify[i].percent+'" style="width:0;padding-left: 1%;transition: 1s;">'+
				'<span>'+data.skillsClassify[i].skillLanguage+'</span>'+
				'<div class="subject_circle" style="display: none; opacity:0;"></div>'+
					'<div class="subject_con" style="display: none; opacity:0;">'+str+'</div>'+
					'<p class="boxbg" style="display: none;opacity: 0;"></p>'+
					'</div>'+
					'</div>'+
					'</li>'
				str = ''
			}
		break;
		case projects:
			html = "";
				html += '<div class="project_ex" style="height: 262px">'+
					'<dl class="pro clearfix">'+
			'<dt><a href="'+data[0].projectWebsite+'"target="_blank"><img src='+data[0].projectThumbnail+'>'+data[0].projectWebsite+'</a></dt>'+
			'<dd>'+
			'<h2 class="project_bt"><a href="'+data[0].projectWebsite+'"target="_blank">'+data[0].projectName+'</a></h2>'+
			'<p class="project_time">'+data[0].startTime+'--'+data[0].endTime+'</p>'+
			'<p class="project_dec">'+data[0].projectExplain+'</p>'+
			'<p class="project_lable">'+
			'<span>html</span>'+
			'<span>css</span>'+
			'<span>css3</span>'+
			'<span>js</span>'+
			'</p>'+
			'</dd>'+
			'</dl>'+
			'</div>'

		break;
	}
	return html;
}
var intro = document.getElementById('intro');
var arr = [
    userInfo.userPhone,
    userInfo.userSeatPlace,
    userInfo.userWeibo,
    userInfo.userAssessment,   
    userInfo.userHobby,
   ]
var n=[
	"手机",
	"所在地",
	"微博",
	"自我评价",
	"爱好"
]
str = '';
for(var i=0;i<arr.length;i++){
	str += '<li>'+
		'<div class="detail_left">'+
		'<p>'+n[i]+'</p>'+
		'</div>'+
		'<div class="detail_right intro_first">'+
		'<p class="intro_firstcon">'+arr[i]+'</p>'+
		'</div>'+
		'<div class="intro_circle"></div>'+
		'</li>'
}
html = '<div class="intro_con clearfix">'+
	'<table class="intro_table" id="intro_table" style="height: 316px;">'+
	'<tbody>'+
	'<tr><td>'+
	'<div class="intro_left">'+
	'<p>'+ userInfo.motto +'<span></span>'+
	'</p>'+
	'</div>'+
	'</td></tr>'+
	'</tbody>'+
	'</table>'+
	'<div class="intro_right">'+
	'<div class="pic" style= "overflow:hidden;"></div>'+
	'<div class="intro_detail">'+
	'<ul>'+str+'</ul>'+
	'</div>'+
	'</div>'+
	'</div>'
intro.innerHTML = html;
var oli = bottomDetail.getElementsByTagName('li');
for(var i=0;i<oli.length;i++){
	oli[i].onmouseover = function(){
		this.getElementsByClassName('subject_circle')[0].style.display = 'block';
		this.getElementsByClassName('subject_circle')[0].style.opacity = '1';
		this.getElementsByClassName('boxbg')[0].style.display = 'block';
		this.getElementsByClassName('boxbg')[0].style.opacity = '1';
		this.getElementsByClassName('subject_con')[0].style.display = 'block';
		this.getElementsByClassName('subject_con')[0].style.opacity = '1';
	}
	oli[i].onmouseout = function(){
		this.getElementsByClassName('subject_circle')[0].style.display = 'none';
		this.getElementsByClassName('subject_circle')[0].style.opacity = '0';
		this.getElementsByClassName('boxbg')[0].style.display = 'none';
		this.getElementsByClassName('boxbg')[0].style.opacity = '0';
		this.getElementsByClassName('subject_con')[0].style.display = 'none';
		this.getElementsByClassName('subject_con')[0].style.opacity = '0';
	}
}
//var tabPro = document.getElementsByClassName('tab-pro')[0];
//var tabHtml = "";
//for(var i=0;i<projects.length;i++){
//	tabHtml += '<span class = "tab-bor">'+(i+1)+'</span>'
//}
//tabPro.innerHTML = tabHtml
//var spans = tabPro.getElementsByTagName('span');
//var proEx = document.getElementsByClassName('project_ex')[0]
//spans[0].style.background = "#1B6D85"
//for(var i=0;i<spans.length;i++){
//	spans[i].index = i;
//	spans[i].onmouseover = function(){
//		for(var i=0;i<spans.length;i++){
//			spans[i].style.background = "";
//		}
//		this.style.background = '#1B6D85';
//	}
//}
function projectData(i){
	html = "";
	var n = i;
	var m= i+1;
	if(i==0){
		n=1/2;
	}
	if(i>1){
		n =1
	}
	console.log(i)
	html = '<dl class="pro clearfix" style="z-index: '+m+'"left='+window.innerWidth*n+'>'+
		'<dt><a href="'+projects[i].projectWebsite+'"target="_blank"><img src='+projects[i].projectThumbnail+'>'+projects[i].projectWebsite+'</a></dt>'+
		'<dd>'+
		'<h2 class="project_bt"><a href="'+projects[i].projectWebsite+'" target="_blank">'+projects[i].projectName+'</a></h2>'+
		'<p class="project_time">'+projects[i].startTime+'--'+projects[i].endTime+'</p>'+
		'<p class="project_dec">'+projects[i].projectExplain+'</p>'+
		'<p class="project_lable">'+
		'<span>html</span>'+
		'<span>css</span>'+
		'<span>css3</span>'+
		'<span>js</span>'+
		'</p>'+
		'</dd>'+
		'</dl>'
	return html;
}
