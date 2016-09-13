/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(parentObj, brotherObj) {
	
	let pubObj = this
	let PriObj = {}

	pubObj.SeleElemId = 0, pubObj.ImgIdArray = [], pubObj.TextIdArray = [], pubObj.Position = 0, pubObj.PageId = "0"
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
	
	pubObj.syncBack = function() {
		
		if(parentObj.SelePageId == 0) { return }
		
		$("#EditPage").children().clone(true).appendTo("#"+parentObj.SelePageId)
	}
	
	PriObj.DispInEditPage = function() {
		
		let htmlText = $("#"+pubObj.PageId).html()
		$("#EditPage").empty().html(htmlText)
		
		$("#NewPic").off("click")
		$("#NewPic").on("click", PriObj.AddImg)
		
		$("#NewText").off("click")
		$("#NewText").on("click", PriObj.AddText)
		
		$("#NewAnim").off("click")
		$("#NewAnim").on("click", PriObj.AddAnim)
	}
	
	PriObj.AddImg = function() {
		
		dialog.showOpenDialog({
			title: "Select A File",
			properties: ["openFile", "multiSelections"],
			filters: [{ name: "Image File", extensions: ["png", "jpg"]}]
		}, function(imgPathArray) {
			
			if(!imgPathArray) { return }
			
			for(let imgPath of imgPathArray) {
// console.log(fileArray)
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj, imgPath)
				PriObj.ElemObjArray.push(imgObj)
// console.log(PriObj.ElemObjArray)
			}
		})
	}
	
	PriObj.AddAnim = function() {
// console.log(pubObj.PageId)
		$("#NewPicDL").dialog( "option", "buttons",[{
			text: "确定",
			click: function() {
				
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj)
				PriObj.ElemObjArray.push(imgObj)
				$( this ).dialog( "close" )
			}
		}, {
			text: "关闭",
			click: function() {
				$( this ).dialog( "close" )
			}
		}]).dialog("open")
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
// console.log(pubObj.PageId)
			$(this).css("outline", "#00ff00 solid thick")
			parentObj.SelePagePos = pubObj.Position
			parentObj.displayHeadContent()
			
			pubObj.syncBack()
			PriObj.DispInEditPage()
			
			parentObj.SelePageId = pubObj.PageId
		})
	}())
}















