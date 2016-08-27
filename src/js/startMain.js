/*
	UI function
	
*/
// let AWP 
// if (!AWP) { AWP = {} }
var AWP = AWP || {}
AWP.StartMain = function() {
	
	let myDispFunc = new AWP.DisplayFunc()
	myDispFunc.dispJqueryUI()
	
	let myFlowArea = new AWP.FlowArea()
	myFlowArea.bindEvent()
	myFlowArea.displayHeadContent()
	
	
	
	
}
