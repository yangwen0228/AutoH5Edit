/*
	leftTab_flowArea.js function
	
*/

let LTFlowArea = function() {
	
	let selfObj = {}
	
	selfObj.displayHeadContent = function() {
		
		let pageNumber = $("#FlowContent").children("div").length
		let dispText = "第" + GSelePage + "页" + "/共" + pageNumber + "页"
		$("#flowHead").text(dispText)
	}
	
	selfObj.pageAddOrInsert = function() {
		
// console.log(SelePage)
	}
	
	
	return selfObj
}

let flowArea = new LTFlowArea()









