var starBtn = document.getElementById('start_button')
var startScreen = document.getElementById('start_screen')
var arrPos = document.getElementsByClassName('barrel');
var oa = document.getElementById('scene').getElementsByTagName('a');
var scene = document.getElementById('scene');
var info = document.getElementById('info');
var score = document.getElementById('score');
var point = 0;
var redScore = 0;
var again = document.getElementsByClassName('again-arrow')[0];
oa[oa.length-1].style.zIndex = '3';
oa[oa.length-2].style.zIndex = '3';
var timer1 = null;
var time = 1000;
time-=10
if(time<200){
	time = 200
}
function rand(min,max){
	return parseInt(Math.random()*(max-min)+min);
}
var goal = document.getElementById('goal');
var timer2 = null;
var num= -1;
var myCanvas = document.getElementById('myCanvas')
var ogc = myCanvas.getContext('2d');
function auto(){
	ogc.clearRect(0,0,myCanvas.width,myCanvas.height)
	ogc.fillStyle = '#b3cadb'
	num++
	if(num == 30){
		clearInterval(timer2)
	}
	ogc.beginPath()
	ogc.lineWidth = 6;
	ogc.arc(55,55,52,0,(360-12*num)*Math.PI/180,false)
	ogc.fill()
	ogc.stroke()
	ogc.closePath()
	goal.innerHTML = 30 - num;
}
timer2 = setInterval(auto, 1000)
starBtn.onclick = function(){
	startScreen.style.display = 'none';
	info.style.display = 'block';
	timer1 = setInterval(startGame,time)  
}
function startGame(){	
	//目标随机出现的位置
	var indexs = 0;
	var gameNum = rand(0,7);
	if(oa[gameNum].innerHTML === ""){
		var aspan = document.createElement('span');
		aspan.style.position = "absolute"
		oa[gameNum].appendChild(aspan);
		var t3 =  oa[gameNum].offsetHeight;
		aspan.style.top =  t3;
		tween(aspan,{top: 0},500,'backIn',function(){
			tween(aspan,{top: t3},1000,"linear",function(){
				oa[gameNum].removeChild(aspan);
			})
		});
		for(var i=0;i<oa.length;i++){
			oa[i].style.width = arrPos[i].offsetWidth/2 + 'px';
			oa[i].style.height = arrPos[i].offsetHeight/2 + 'px';
			oa[i].style.left = arrPos[i].offsetWidth/5 + arrPos[i].offsetLeft + 'px';
			oa[i].style.top = -arrPos[i].offsetHeight/3 + arrPos[i].offsetTop + 'px';
			arrPos[i].onmousedown = function(e){
				var disx = e.clientX - this.offsetLeft;
				var disy = e.clientY - this.offsetTop;
				var oi = document.createElement('i');
				oi.className = 'roll';
				oi.style.background = 'red';
				oi.style.opacity = "0.7"
				oi.style.left = disx +'px';
				oi.style.top = 0 +'px';
				if(this.offsetWidth/5 < 16){
					oi.style.lineHeight = '16px';
					oi.style.fontSize = '12px'
					oi.style.width =  '16px';
					oi.style.height  = '16px';
				}else{
					oi.style.width = this.offsetWidth/5 + 'px';
					oi.style.height  = this.offsetWidth/5 +'px';
					oi.style.lineHeight = this.offsetWidth/5 +'px';
					oi.style.fontSize = parseInt(this.offsetHeight/10) + 'px';
				}
				oi.innerHTML = '-2';
				var this1 = this;
				this.onmouseup = function(){
					redScore++
					this1.appendChild(oi);
					tween(oi,{top: -100},800,'easeIn',function(){
						tween(oi,{opacity: 0},150,'easeIn', function () {
							this1.removeChild(oi)
						});
					});

				}
			}
		}
		aspan.onclick = function(){
			indexs++;
			if (indexs>1) {
				return false;		// 鼠标只能点击1次 而不能无限点
			}
			point++;
			var oi = document.createElement('i')
			oi.className = 'roll';
			if(this.offsetWidth/2 < 16){
				oi.style.lineHeight = '16px';
				oi.style.fontSize = '12px'
				oi.style.width =  '16px';
				oi.style.height  = '16px';
			}else{
				oi.style.width = this.offsetWidth/2 + 'px';
				oi.style.height  = this.offsetWidth/2 +'px';
				oi.style.lineHeight = this.offsetWidth/2 +'px';
				oi.style.fontSize = parseInt(this.offsetHeight/8) + 'px';
			}
			oi.style.background = 'green';
			oi.innerHTML = '+1'
			oa[gameNum].appendChild(oi);
			var t1 = oi.offsetTop - 100;
			var t2  = this.offsetHeight;
			var _this = this;
			tween(oi,{top: t1,opacity:0},1000,'easeIn',function(){
				tween(_this,{top: t2},500,'elasticIn',function(){
					oa[gameNum].removeChild(oi)
				})
			});
		}
	}
	score.innerHTML = point - 2*redScore;
	if(num == 30){
		clearInterval(timer1);
		startScreen.style.display = 'block';
		info.style.display = 'none';
		changeCon(point,redScore);
	}
}
function changeCon(point,redScore){
	var title = startScreen.querySelectorAll('h2')[0];
	title.className = 'heading-three'
	title.innerHTML = 'your score';
	var endScore = startScreen.querySelectorAll('.end_score')[0];
	endScore.innerHTML = point-redScore;
	endScore.style.display = 'block'
	var text = startScreen.getElementsByClassName('finish-text')[0];
	text.innerHTML = 'Thanks for playing Breaking Bad. This game was designed to show how we can create fun interactive experiences that engage through topical and trend researched subject matter. ';
	text.style.display = 'block';
	starBtn.style.display='none';
	var pages = startScreen.getElementsByClassName('internal-pages')[0];
	pages.style.display = 'block';
	again.style.display = 'block';
	var op = startScreen.getElementsByTagName('p')
	op[0].style.display= 'none';
	op[1].style.display = 'none';
	for(var i=0;i<oa.length;i++){
		arrPos[i].onmousedown = null;
	}
}
again.onclick = function(){
	point = 0;
	redScore = 0;
	num = 0;
	score.innerHTML = '0';
	timer1 = setInterval(startGame,time)
	info.style.display = 'block';
	timer2 = setInterval(auto, 1000)
	startScreen.style.display = 'none';
}