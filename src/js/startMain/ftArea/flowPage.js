/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(parentObj, brotherObj) {
	
	let pubObj = this
	let PriObj = {}

	pubObj.SeleElemId = 0, pubObj.ElemIdArray = [], pubObj.Position = 0, pubObj.PageFlowId = "0",
	pubObj.PageEditId = "0", pubObj.ElemObjArray = [];
	
	(function() {
		
		let pageArray
		
		let pageFlowId = "page_flow_1_1"
		pageArray = new Array()
		while (parentObj.PageFlowIdArray.indexOf(pageFlowId) !== -1 ) {
			pageArray = pageFlowId.split("_")
			pageArray[3] ++
			pageFlowId = pageArray.join("_")
		}
		
		let pageEditId = "page_eidt_1_1"
		pageArray = new Array()
		while (parentObj.PageEditIdArray.indexOf(pageEditId) !== -1 ) {
			pageArray = pageEditId.split("_")
			pageArray[3] ++
			pageEditId = pageArray.join("_")
		}
		let pageFlowText = '\n<div class="flowPage" id="' + pageFlowId +'">\n</div>\n'
		let pageEditText = '\n<div class="editPage" id="' + pageEditId +'">\n</div>\n'
		if (brotherObj == "end") {
			$("#FlowContent").append(pageFlowText)
			$("#EditArea").append(pageEditText)
			
			parentObj.PageFlowIdArray.push(pageFlowId)
			parentObj.PageEditIdArray.push(pageEditId)
			parentObj.displayHeadContent()
			
			pubObj.PageFlowId = pageFlowId
			pubObj.PageEditId = pageEditId
			pubObj.Position = parentObj.PageFlowIdArray.length
// console.log(pubObj.Position)
		} else {
			let brotherId = brotherObj.PageFlowId
			$("#"+brotherId).after(pageFlowText)
			
			// parentObj.PageFlowIdArray.splice(brotherObj.Position - 1, 0, pageFlowId)
			// parentObj.displayHeadContent()
			
			// pubObj.PageFlowId = pageFlowId
			// pubObj.Position = parentObj.PageFlowIdArray.length
		}
	}())
	
	PriObj.DispEditPage = function() {
		
		$("#"+pubObj.PageEditId).css("display", "inline")
		
		$("#NewPic").off("click")
		$("#NewPic").on("click", PriObj.AddImg)
		
		$("#NewText").off("click")
		$("#NewText").on("click", PriObj.AddText)
		
		$("#NewAnim").off("click")
		$("#NewAnim").on("click", PriObj.AddAnim)
	}
	
	PriObj.AddImg = function() {
// console.log(AWP.SelePage)
		dialog.showOpenDialog({
			title: "Select A File",
			properties: ["openFile", "multiSelections"],
			filters: [{ name: "Image File", extensions: ["png", "jpg"]}]
		}, function(imgPathArray) {
			
			if(!imgPathArray) { return }
			
			for(let imgPath of imgPathArray) {
// console.log(imgPath)
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj, imgPath)
				pubObj.ElemObjArray.push(imgObj)
			}
		})
	}
	
	PriObj.AddAnim = function() {
// console.log(pubObj.PageFlowId)
		$("#NewPicDL").dialog( "option", "buttons",[{
			text: "确定",
			click: function() {
				
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj)
				pubObj.ElemObjArray.push(imgObj)
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
// console.log(pubObj.PageFlowId)
		let textObj = new AWP.FTArea.FTElems.TextElem(pubObj)
		
		pubObj.ElemObjArray.push(textObj)
	}
	
	pubObj.test = function() {
		
	};
	
	(function() {
		$("#"+pubObj.PageFlowId).on("mousedown", function() {
			
			// if (parentObj.SeleFlowPageId != "") {
			$("#"+parentObj.SeleFlowPageId).css("outline", "#00ff00 none thick")
			$("#"+parentObj.SeleEditPageId).css("display", "none")
			// }
// console.log(pubObj.PageFlowId)
			$(this).css("outline", "#00ff00 solid thick")
			parentObj.SelePagePos = pubObj.Position
			parentObj.displayHeadContent()
			
			PriObj.DispEditPage()
			
			parentObj.SeleFlowPageId = pubObj.PageFlowId
			parentObj.SeleEditPageId = pubObj.PageEditId
		})
	}())
}















