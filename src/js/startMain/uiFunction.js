/*
	UI function
	
*/
// let AWP 
// if (!AWP) { AWP = {} }
var AWP = AWP || {}
AWP.DisplayFunc = function() {
	
	let PriObj = {}
	
	PriObj.DispJqueryUI = function() {
		
		$("#LeftTabs").tabs()
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
		
		$(".pixelInput").spinner()
		$(".percentInput").spinner({
			numberFormat: "C",
			step: 0.1,
		})
		
		$(".colorInput").colorPicker({
			// renderCallback: function() {console.log("OKOKOKOK")}
		})
		
		
		// $(".imgEffe").checkboxradio()
		// $(".aniPreview").button()
		// $(".aniTime").spinner({step: 100,})
		// $(".aniName").selectmenu()
		// $(".aniSpeed").selectmenu()
		// $(".aniCount").selectmenu()
		
	};
	
	(function() {
		PriObj.DispJqueryUI()
	}())
	
}