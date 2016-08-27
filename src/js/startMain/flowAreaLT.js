/*
	UI function
	
*/

var AWP = AWP || {}
AWP.FlowArea = function() {
	
	let pubObj = this
	let PriObj = {}
	
	PriObj.SelePage = 0, PriObj.SelePageId = "", PriObj.PageIdArray = [], PriObj.PageObjArray= [];
	
	(function() {
		
	}())
	
	pubObj.bindEvent = function() {
		
		$("#addPage").on("click", pubObj.addPage)
	}
	
	pubObj.displayHeadContent = function() {
		
		let dispText = "第" + PriObj.SelePage + "页" + "/共" + PriObj.PageObjArray.length + "页"
		$("#flowHead").text(dispText)
	}
	
	PriObj.BindEvent = function(pageId, pageObj) {
		$("#"+pageId).on("click", function() {
			
			if (PriObj.SelePageId != "") {
				$("#"+PriObj.SelePageId).css("outline", "#00ff00 none thick")
			}
			PriObj.SelePageId = pageId
			
			$(this).css("outline", "#00ff00 solid thick")
			PriObj.SelePage = pageObj.Position
			pubObj.displayHeadContent()
			
			pageObj.dispInEditPage()
		})
	}
	pubObj.addPage = function() {
		
		let pageId = "page_1_1"
		let pageArray = new Array()
		while (PriObj.PageIdArray.indexOf(pageId) !== -1 ) {
			pageArray = pageId.split("_")
			pageArray[2] ++
			pageId = pageArray.join("_")
		}
		
		let pagePositon = PriObj.PageIdArray.length + 1
		let pageObj = new AWP.FTArea.FlowPage(pageId, pagePositon)
		
		let pageText = '\n<div class="flowPage" id="' + pageId +'">\n</div>\n'
		$("#flowContent").append(pageText)
		
		PriObj.PageIdArray.push(pageId)
		PriObj.PageObjArray.push(pageObj)
		PriObj.BindEvent(pageId ,pageObj)
		
		pubObj.displayHeadContent()
	}
	
	pubObj.copyPage = function(pageObj) {
		
		
	}
	pubObj.cutPage = function(pageObj) {
		
		
	}
	pubObj.beforePage = function(pageObj) {
		
		
	}
	pubObj.appendPage = function(pageObj) {
		
		
	}

	pubObj.test = function(pageObj) {
console.log(PageIdArray)
	}
}



