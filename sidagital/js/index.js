//Vuejs 和 reactjs,  weex(vuejs 翻版)
//var footCon = document.getElementById('group')
var caseStudies = document.getElementsByClassName('studies_wrap')[0].getElementsByTagName('a')
console.log(caseStudies)
for(var i=0;i<caseStudies.length;i++){
	caseStudies[i].index = i;
	caseStudies[i].onmouseover = function(){
		this.getElementsByTagName('img')[0].style.bottom = '-15px';
		this.getElementsByClassName('study_link')[0]. className = 'study_link change trans';
	}
	caseStudies[i].onmouseout = function(){
		this.getElementsByTagName('img')[0].style.bottom = '-30px'
		this.getElementsByClassName('study_link')[0]. className = 'study_link';
	}
}
