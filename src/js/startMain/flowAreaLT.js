/*
	UI function
	
*/

var AWP = AWP || {}
AWP.FlowArea = function() {
	
	let pubObj = this
	
	pubObj.SeleFlowPageId = "0", pubObj.SeleEditPageId = "0", pubObj.SeleTreePageId = "0",
	pubObj.SelePagePos = 0, pubObj.PageObjArray = [] 
	
	let UniquePageIndex = 0
	
	pubObj.getUniquePageIndex = function() {
		return ++ UniquePageIndex
	}
	
	pubObj.displayHeadContent = function() {
		
		let dispText = "第" + pubObj.SelePagePos + "页" + "/共" + pubObj.PageObjArray.length + "页"
		$("#flowHead").text(dispText)
	}
	
	pubObj.clear = function() {
		
		for(let pageObj of pubObj.PageObjArray) {
			pageObj.destroy()
		}
		
		UniquePageIndex = 0
		pubObj.SelePagePos = 0, pubObj.PageObjArray = []
		pubObj.displayHeadContent()
		// pubObj = {} 主界面，不能去掉，还要用
	}
	
	pubObj.copyPage = function(pageObj) {
		
	}
	pubObj.cutPage = function(pageObj) {
		
	}
	
	pubObj.deletePage = function(pageObj) {
		
		let pageIndex = pageObj.Position
		pubObj.PageObjArray.splice(pageIndex, 1)
		
		for(let otherObj of pubObj.PageObjArray) {
			if(otherObj.Position > pageIndex) {
				otherObj.Position -=1
			}
		}
		
		pubObj.SelePagePos = 0
		pubObj.displayHeadContent()
		pageObj.destroy()
	}
	
	pubObj.beforePage = function(pageObj) {
		
		
	}
	pubObj.appendPage = function(pageObj) {
		
		
	}
	
	let FlowAreaIni = function() {
		
		$("#AddPage").on("click", function() {
			let pageObj = new AWP.FTArea.FlowPage(pubObj, "end")
			pubObj.displayHeadContent()
		})
	}

	;(function() {
		FlowAreaIni()
		pubObj.displayHeadContent()
	}())
}



