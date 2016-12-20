var teamBio = document.getElementsByClassName('team_bio');
var Oimg = [];
var socialIcons = [];
var tryNum=0;
var team = document.getElementsByClassName('team')[0];
for(var i=0;i<teamBio.length-1;i++){
	Oimg.push(teamBio[i].getElementsByClassName('view')[0]);
	socialIcons.push(teamBio[i].getElementsByClassName('social_icons')[0]);
}
for(var j=0;j<socialIcons.length;j++){
	if(j%2 == 0){
		socialIcons[j].style.left = Oimg[0].offsetLeft+Oimg[0].offsetWidth/2-41/2 +'px';
		socialIcons[j].style.top =  Oimg[0].offsetTop - 41/2 + 'px';
		if(j==2||j==6){
			socialIcons[j].style.left = Oimg[0].offsetLeft+Oimg[0].offsetWidth/2-41/2 +'px';
			socialIcons[j].style.top =  Oimg[0].offsetTop + 'px';
		}
	}else{
		socialIcons[j].style.left = Oimg[1].offsetLeft+Oimg[1].offsetWidth/2-41/2 +'px';
		socialIcons[j].style.top =  Oimg[1].offsetTop - 41/2 + 'px';
		if(j==1||j==7){
			socialIcons[j].style.left = Oimg[1].offsetLeft+Oimg[1].offsetWidth/2-41/2 +'px';
			socialIcons[j].style.top =  Oimg[1].offsetTop + 'px';
		}
	}
}
window.addEventListener("scroll",fn)
function fn(){
	window.scrollTo(0,0)
}
var sign = 0;
window.onmousedown = function(){
	window.removeEventListener("scroll",fn)
	window.onscroll = function () {
		var  oScrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if ( oScrollTop > sign) {
			sign =  oScrollTop;//更新scrollTop
			showhobby(oScrollTop)
		}
	}

}
window.onkeydown = function(e){
	window.removeEventListener("scroll",fn);
	switch (e.keyCode){
		case 40:
			showhobby(pageYOffset)
			break;
	}
}
document.onmousewheel = function(e){
	window.removeEventListener("scroll",fn);
	if(e.wheelDelta<0){
		showhobby(pageYOffset)
	}
}
function showhobby(page){
	if(page>400){
		var pages = Math.floor((page-400)/teamBio[0].offsetHeight);
		if(pages>8){
			pages = 8;
		}
		socialIcons[pages].style.display = 'block';
		for(var j=0;j<socialIcons.length;j++){
			if(getComputedStyle(socialIcons[j])['display'] == 'block'){
				if(tryNum == j){
					autoplay(j)
					tryNum++;
				}
			}
		}
	}
}
function autoplay(i){
	Oimg[i].innerHTML +=  socialIcons[i].innerHTML;
	socialIcons[i].innerHTML = '';
	var figure = 0;
	var r= 200;
	var oa = Oimg[i].getElementsByTagName('a');
	if(figure>=45){
		clearInterval(timer)
	}
	var timer = setInterval(function(){
		figure += 2
		if(figure >45){
			figure =45;
			clearInterval(timer)
		}
		//半径 200；角度a; left: rsina + 
		if(i == 0) {
			oa[0].style.left = -r * Math.sin(figure * Math.PI / 180) + 94 + r - 20 + 'px';
			oa[0].style.top = r - r * Math.cos(figure * Math.PI / 180)-20 + 'px';
			oa[1].style.left = r * Math.sin(figure * Math.PI / 180) + 94 + r - 20 + 'px';
			oa[1].style.top = r - r * Math.cos(figure * Math.PI / 180) -20+ 'px';
			oa[2].style.left = r * Math.sin(2 * figure * Math.PI / 180) + 94 + r - 20 + 'px';
			oa[2].style.top = r - r * Math.cos(2 * figure * Math.PI / 180)-20 + 'px';

		}
		else if(i == 1){
			oa[0].style.left =  r * Math.sin(figure * Math.PI / 180) + 62 + r - 20 + 'px';
			oa[0].style.top =r - r * Math.cos(figure * Math.PI / 180) + 'px';
			oa[1].style.left =-r * Math.sin(figure * Math.PI / 180) + 62 + r - 20 + 'px';
			oa[1].style.top =r - r * Math.cos(figure * Math.PI / 180)+ 'px';
			oa[2].style.left =r * Math.sin(2 * figure * Math.PI / 180) + 62 + r - 20 + 'px';
			oa[2].style.top= r - r * Math.cos(2 * figure * Math.PI / 180) + 'px';
			oa[3].style.top = r - r * Math.cos(2 * figure * Math.PI / 180) + 'px';
			oa[3].style.left =-r * Math.sin(2 * figure * Math.PI / 180) + 62 + r - 20 + 'px';
		}
		else if( i == 2 ){
			oa[0].style.left =  r * Math.sin(figure * Math.PI / 180) + 92 + r - 20 + 'px';
			oa[0].style.top =r - r * Math.cos(figure * Math.PI / 180) + 'px';
			oa[1].style.left =-r * Math.sin(figure * Math.PI / 180) + 92 + r - 20 + 'px';
			oa[1].style.top =r - r * Math.cos(figure * Math.PI / 180)+ 'px';
			oa[2].style.left =r * Math.sin(2 * figure * Math.PI / 180) + 92 + r - 20 + 'px';
			oa[2].style.top= r - r * Math.cos(2 * figure * Math.PI / 180) + 'px';
			oa[3].style.top = r - r * Math.cos(2 * figure * Math.PI / 180) + 'px';
			oa[3].style.left =-r * Math.sin(2 * figure * Math.PI / 180) + 92 + r - 20 + 'px';
		}
		else if( i == 3 ){
			oa[0].style.left =  r * Math.sin(figure * Math.PI / 180) + 97 + r - 20 + 'px';
			oa[0].style.top =r - r * Math.cos(figure * Math.PI / 180) -20+ 'px';
			oa[1].style.left =-r * Math.sin(figure * Math.PI / 180) + 97 + r - 20 + 'px';
			oa[1].style.top =r - r * Math.cos(figure * Math.PI / 180)-20+ 'px';
			oa[2].style.left =r * Math.sin(2 * figure * Math.PI / 180) + 97 + r - 20 + 'px';
			oa[2].style.top= r - r * Math.cos(2 * figure * Math.PI / 180)-20 + 'px';
			oa[3].style.top = r - r * Math.cos(2 * figure * Math.PI / 180)-20 + 'px';
			oa[3].style.left =-r * Math.sin(2 * figure * Math.PI / 180) + 97 + r - 20 + 'px';
		}
		else if( i == 4 ){
          	oa[0].style.left = -r * Math.sin(figure * Math.PI / 180) + 90 + r - 20 + 'px';
			oa[0].style.top = r - r * Math.cos(figure * Math.PI / 180)-18 + 'px';
			oa[1].style.left = r * Math.sin(figure * Math.PI / 180) + 90 + r - 20 + 'px';
			oa[1].style.top = r - r * Math.cos(figure * Math.PI / 180) -18+ 'px';
		}
		else if( i == 5 ){
        	oa[0].style.left = -r * Math.sin(figure * Math.PI / 180) + 78 + r - 20 + 'px';
			oa[0].style.top = r - r * Math.cos(figure * Math.PI / 180)-20 + 'px';
			oa[1].style.left = r * Math.sin(figure * Math.PI / 180) + 78 + r - 20 + 'px';
			oa[1].style.top = r - r * Math.cos(figure * Math.PI / 180) -20+ 'px';
			oa[2].style.left = -r * Math.sin(2 * figure * Math.PI / 180) + 78 + r - 20 + 'px';
			oa[2].style.top = r - r * Math.cos(2 * figure * Math.PI / 180)-20 + 'px';  
		}
		else if( i == 6 ){
          	oa[0].style.left = -r * Math.sin(figure * Math.PI / 180) + 94 + r - 18 + 'px';
			oa[0].style.top = r - r * Math.cos(figure * Math.PI / 180) + 'px';
			oa[1].style.left = r * Math.sin(figure * Math.PI / 180) + 94 + r - 18 + 'px';
			oa[1].style.top = r - r * Math.cos(figure * Math.PI / 180) + 'px';
			oa[2].style.left = r * Math.sin(2 * figure * Math.PI / 180) + 94 + r - 22 + 'px';
			oa[2].style.top = r - r * Math.cos(2 * figure * Math.PI / 180) + 'px';
		}
		else if( i == 7 ){
          	oa[0].style.left = -180 * Math.sin(figure * Math.PI / 180) + 110 + 180 - 20 + 'px';
			oa[0].style.top = 180 - 180 * Math.cos(figure * Math.PI / 180) + 'px';
			oa[1].style.left = 180 * Math.sin(figure * Math.PI / 180) + 110 + 180 - 20 + 'px';
			oa[1].style.top = 180 - 180 * Math.cos(figure * Math.PI / 180) + 'px';
		}else if( i == 8 ){
         	oa[0].style.left = -r * Math.sin(figure * Math.PI / 180) + 89 + r - 20 + 'px';
			oa[0].style.top = r - r * Math.cos(figure * Math.PI / 180)-18 + 'px';
			oa[1].style.left = r * Math.sin(figure * Math.PI / 180) + 89 + r - 20 + 'px';
			oa[1].style.top = r - r * Math.cos(figure * Math.PI / 180) -18+ 'px';
		}
	},30)
	if(figure == 45){
		timer == null
	}
}
