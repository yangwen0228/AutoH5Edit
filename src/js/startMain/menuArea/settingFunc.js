/*
	MenuBar UI function
	
*/

var AWP = AWP || {}
AWP.MenuArea = AWP.MenuArea || {}
AWP.MenuArea.SettingFunc = function() {
	
	let pubObj = this
	let PixelWidth = 360, PixelHeight = 640, PixelScale = 1, Direction = "V"
	
	let CreateUI = function() {
		
		$("#SettingDL").dialog({
			title: "设置",
			modal: true,
			autoOpen: false,
			position: { my: "top", at: "top", of: window },
			width: 600,
			height: 350
		})
	}
	
	let BindEvent = function() {
		
		$("#Setting").on("click", function() {
			
			$("#SettingDL").dialog("open")
		})
	}
	
	;(function() {
		CreateUI()
		BindEvent()
	}())
}
