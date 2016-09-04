/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(parentObj, brotherObj) {
	
	let pubObj = this
	let PriObj = {}

	pubObj.SeleElem = "0", pubObj.ImgIdArray = [], pubObj.TextIdArray = [], pubObj.Position = 0, pubObj.PageId = "0"
	PriObj.ElemObjArray = [];
	
	(function() {
		let pageId = "page_1_1"
		let pageArray = new Array()
		while (parentObj.PageIdArray.indexOf(pageId) !== -1 ) {
			pageArray = pageId.split("_")
			pageArray[2] ++
			pageId = pageArray.join("_")
		}
		
		let pageText = '\n<div class="flowPage" id="' + pageId +'">\n</div>\n'
		if (brotherObj == "end") {
			$("#FlowContent").append(pageText)
			
			parentObj.PageIdArray.push(pageId)
			parentObj.displayHeadContent()
			
			pubObj.PageId = pageId
			pubObj.Position = parentObj.PageIdArray.length
// console.log(pubObj.Position)
		} else {
			let brotherId = brotherObj.PageId
			$("#"+brotherId).after(pageText)
			
			// parentObj.PageIdArray.splice(brotherObj.Position - 1, 0, pageId)
			// parentObj.displayHeadContent()
			
			// pubObj.PageId = pageId
			// pubObj.Position = parentObj.PageIdArray.length
		}
	}())
	
	PriObj.DispInEditPage = function() {
		
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
// console.log(pubObj.PageId)
		let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj)
		
		PriObj.ElemObjArray.push(imgObj)
	}
	
	PriObj.AddText = function() {
// console.log(pubObj.PageId)
		let textObj = new AWP.FTArea.FTElems.TextElem(pubObj)
		
		PriObj.ElemObjArray.push(textObj)
	}
	
	pubObj.test = function() {
		
	};
	
	(function() {
		$("#"+pubObj.PageId).on("mousedown", function() {
			
			if (parentObj.SelePageId != "") {
				$("#"+parentObj.SelePageId).css("outline", "#00ff00 none thick")
			}
			parentObj.SelePageId = pubObj.PageId
// console.log(pubObj.PageId)
			$(this).css("outline", "#00ff00 solid thick")
			parentObj.SelePagePos = pubObj.Position
			parentObj.displayHeadContent()
			
			PriObj.DispInEditPage()
		})
	}())
}