/*
	UI function
	
*/
// let AWP 
// if (!AWP) { AWP = {} }
var AWP = AWP || {}
AWP.DisplayFunc = function() {
	
	let selfObj = {}
	
	selfObj.dispJqueryUI = function() {
		
		$("#leftTabs").tabs()
		$("#templateTabs").tabs()
		$("#rightTabs").tabs()
		
		$(".btMenu").button()
		$(".btEditTop").button()
		$(".btEditLeft").button()
		$(".addPage").button()
// console.log("1234")
	}
	
	return selfObj
}