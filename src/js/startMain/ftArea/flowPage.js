/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(pageId, pagePositon) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Position = pagePositon, pubObj.PageId = pageId;
	
	(function() {
		// if (brotherId === "end") {
			// let pageText = '\n<div class="flowPage" id="' + pubObj.PageId +'">\n</div>\n'
			// $("#flowContent").append(pageText)
		// } else {
			// let pageText = '\n<div class="flowPage" id="' + pubObj.PageId +'">\n</div>\n'
			// $("#"+brotherId).after(pageText)
		// }
	}())
	
	PriObj.BindEvent = function() {
		
		
	}
	pubObj.dispInEditPage = function() {
		
		let htmlText = $("#"+pubObj.PageId).html()
		$("#editPage").empty().html(htmlText)
		
		
	}
	
	pubObj.syncBack = function() {
		
		
	}
	
	pubObj.addImg = function() {
		
		
	}
	
	pubObj.addText = function() {
		
		
	}
	
	pubObj.test = function() {
		
	}
}