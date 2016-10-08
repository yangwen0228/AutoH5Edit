/*
	UI function
	
*/

var AWP = AWP || {}
AWP.FlowArea = function() {
	
	let pubObj = this
	
	pubObj.SeleFlowPageId = "0", pubObj.SeleEditPageId = "0", pubObj.SeleTreePageId = "0"
	pubObj.PageFlowIdArray = [];// pubObj.PageEditIdArray = [], pubObj.PageTreeIdArray = []
	pubObj.SelePagePos = 0
	
	let PageObjArray = [], UniquePageIndex = 0
	
	pubObj.getUniquePageIndex = function() {
		return ++ UniquePageIndex
	}
	
	pubObj.displayHeadContent = function() {
		
		let dispText = "第" + pubObj.SelePagePos + "页" + "/共" + pubObj.PageFlowIdArray.length + "页"
		$("#flowHead").text(dispText)
	}
	
	let AddPage = function() {
		
		let pageObj = new AWP.FTArea.FlowPage(pubObj, "end")
		
		PageObjArray.push(pageObj)
	}
	
	pubObj.copyPage = function(pageObj) {
		
		
	}
	pubObj.cutPage = function(pageObj) {
		
		
	}
	pubObj.deletePage = function(pageObj) {
		
		
	}
	pubObj.beforePage = function(pageObj) {
		
		
	}
	pubObj.appendPage = function(pageObj) {
		
		
	}

	;(function() {
		$("#AddPage").on("click", AddPage)
		pubObj.displayHeadContent()
	}())
}



