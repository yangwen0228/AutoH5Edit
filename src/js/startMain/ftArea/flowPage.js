/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(pageId, pagePositon) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Position = pagePositon, pubObj.PageId = pageId
	PriObj.ImgObjArray;
	
	(function() {
		
	}())
	
	pubObj.dispInEditPage = function() {
		
		let htmlText = $("#"+pubObj.PageId).html()
		$("#EditPage").empty().html(htmlText)
		
		$("#NewPic").off("click")
		$("#NewPic").on("click", PriObj.AddImg)
		
		$("#NewText").off("click")
		$("#NewText").on("click", PriObj.AddText)
	}
	
	pubObj.syncBack = function() {
		
		
	}
	
	PriObj.AddImg = function() {
		
console.log(pubObj.PageId)
	}
	
	PriObj.AddText = function() {
		
console.log(pubObj.PageId)
	}
	
	pubObj.test = function() {
		
	};
	
	(function() {
		
	}())
}