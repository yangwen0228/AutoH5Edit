/*
	UI function
	
*/
// let AWP 
// if (!AWP) { AWP = {} }
var AWP = AWP || {}
AWP.DisplayFunc = function() {
	
	let PriObj = {}
	
	PriObj.DispJqueryUI = function() {
		
		$("#leftTabs").tabs()
		$("#templateTabs").tabs()
		$("#rightTabs").tabs()
		
		$(".btMenu").button()
		$(".btEditTop").button()
		$(".btEditLeft").button()
		$(".addPage").button()
		
		$("#NewPicDL").dialog({
			title: "导入图片",
			modal: true,
			autoOpen: false,
			position: { my: "top", at: "top", of: window },
			width: 900,
			height: 600
		})
		
	};
	
	(function() {
		PriObj.DispJqueryUI()
	}())
	
}