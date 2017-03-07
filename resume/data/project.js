
/*		项目池
	*   {
	*       projectName: @value String            *         项目名称
	*       projectWebsite: @value String         *         项目网址
	*       startTime: @value String              *         项目开始时间  格式为：2016.10.09
	*       endTime: @value String 			      *         项目结束时间  格式为：2016.10.09
	*       projectExplain: @value String         *         项目说明
	*       projectLabel: @value Array            *         项目技术标签 
			projectThumbnail: @value String       *         缩略图地址
	*       
	*   }
*/

var projects = [
		{
			projectName:"js整站开发",
			projectWebsite:"https://scytye.github.io/sidagital/",
		    startTime:"2016.09",
			endTime:"至今",
			projectExplain:"主页动画顺序加载，tab页跳转，canvas动画制作，js小游戏制作，时间轴展示，圆周运动动画处理。",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/sidigital.png"
		},
		{
			projectName:"文件交互与数据处理",
			projectWebsite:"https://scytye.github.io/yunpan",
		    startTime:"2016.07",
			endTime:"至今",
			projectExplain:"通过数据动态生成文件，通过控制数据内容改变页面展示；处理交互表现（包括：文件的新建，删除，重命名，多选单选，hover，拖拽，面包屑导航，树形菜单，框选），文件上传预览",
			projectLabel:["html","css3","css","js"],
			projectThumbnail:"images/weiyun.png"
		},
		{
			projectName:"移动端网页天气",
			projectWebsite:"http://louyuanwan.iok.la/mojiApp",
			startTime:"2016.11",
			endTime:"至今",
			projectExplain:"本页面是由网络API为数据支持的，主要实现效果：1、处理API数据，渲染页面2、利用canvas绘制温度图表 3、搜索城市信息>",
			projectLabel:["html","css","js","css3"],
			projectThumbnail:"images/wea.png"
		}
]