
/*		技能展示
	*   {
	*       temp: @value String         				*         模板
	*       skillsClassify: @value Array                *         掌握的技能综合
	*       	{
					skillLanguage: @value String        *         技能名称
	*       		percent: @value String              *         技能百分比
	*       		skillTooltip: @value Array          *         对技能的描述
				}
	*   }
*/

var skills = {
		skillsClassify:[
		{
			skillLanguage:"html5",
			percent:"80%",
			skillTooltip:[
				"熟练掌握各类语义化标签",
				"熟悉对各种标签特性及其相互转换",
				"H5拖拽、视频音频",
				"表格，H5新增表单等……"
			]
		},
		{
			skillLanguage:"CSS3",
			percent:"80%",
			skillTooltip:[
				"掌握浮动及文档流特性",
				"掌握定位、浏览器兼容性",
				"CSS3圆角，关键帧，旋转等样式有实际案例经验",
				"移动端响应式"
			]
		},
		{
			skillLanguage:"javascript",
			percent:"72%",
			skillTooltip:[
				"了解数据类型、作用域闭包等语言特性",
				"掌握定时器、数组字符串及递归、数组去重等",
				"熟练使用DOM\BOM\EVENT",
				"掌握JS的数据调用、ajax实现机制、各类接口调用",
				"对面向对象编程有一定的研究",
				"了解正则表达式，熟悉JS兼容性、JS性能提升"
			]
		},
		{
			skillLanguage:"canvas",
			percent:"30%",
			skillTooltip:[
				"能熟练使用相关接口绘制各类图形",
				"能运用canvas开发小游戏",
				"可封装小型图表等数据可视化技术解决方案"
			]
		},
		{
			skillLanguage:"jQuery",
			percent:"40%",
			skillTooltip:[
				"移动端响应式"
			]
		}
		
	]
}