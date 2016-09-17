/*
	UI function
	
*/

var AWP = AWP || {}
AWP.FlowArea = function() {
	
	let pubObj = this
	let PriObj = {}
	
	pubObj.SeleFlowPageId = 0,pubObj.SelePagePos = 0, pubObj.PageFlowIdArray = [], pubObj.PageEditIdArray = []
	PriObj.PageObjArray= []
	
	pubObj.displayHeadContent = function() {
		
		let dispText = "第" + pubObj.SelePagePos + "页" + "/共" + pubObj.PageFlowIdArray.length + "页"
		$("#flowHead").text(dispText)
	}
	
	PriObj.AddPage = function() {
		
		let pageObj = new AWP.FTArea.FlowPage(pubObj, "end")
		
		PriObj.PageObjArray.push(pageObj)
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

	pubObj.test = function(pageObj) {
		
	};
	
	(function() {
		$("#AddPage").on("click", PriObj.AddPage)
		pubObj.displayHeadContent()
	}())
}



