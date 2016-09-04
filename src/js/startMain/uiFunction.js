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
			buttons: [{
				text: "确定",
				click: function() {
					$( this ).dialog( "close" )
				}
			}, {
				text: "应用",
				click: function() {
					$( this ).dialog( "close" )
				}
			}, {
				text: "关闭",
				click: function() {
					$( this ).dialog( "close" )
				}
			}]
		})
		
	};
	
	(function() {
		PriObj.DispJqueryUI()
	}())
	
}