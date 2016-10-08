/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(parentObj, brotherObj) {
	
	let pubObj = this

	pubObj.SeleElemId = 0, pubObj.Position = 0, pubObj.PageFlowId = "0", pubObj.PageTreeId = "0",
	pubObj.PageEditId = "0", pubObj.ElemObjArray = []
	
	let UniquePageIndex, UniqueElemIndex = 0
	
	pubObj.getUniqueElemStr = function() {
		UniqueElemIndex ++
		return UniquePageIndex + "_" + UniqueElemIndex
	}
	
	let PageObjIni = function() {
		
		let uIndex = parentObj.getUniquePageIndex()
		
		UniquePageIndex = uIndex
		// let pageArray
		let pageFlowId = "page_flow_"+uIndex
		let pageEditId = "page_eidt_"+uIndex
		let pageTreeId = "page_tree_"+uIndex
		
		let pageFlowText = '\n<div class="flowPage" id="' + pageFlowId +'">\n</div>\n'
		let pageEditText = '\n<div class="editPage" id="' + pageEditId +'">\n</div>\n'
		let pageTreeText = '\n<div class="treePage" id="' + pageTreeId +'">\n</div>\n'
		
		if (brotherObj == "end") {
			$("#FlowContent").append(pageFlowText)
			$("#TreeContent").append(pageTreeText)
			$("#EditArea").append(pageEditText)
			
			parentObj.PageFlowIdArray.push(pageFlowId)
			parentObj.displayHeadContent()
			
			pubObj.PageFlowId = pageFlowId
			pubObj.PageEditId = pageEditId
			pubObj.PageTreeId = pageTreeId
			pubObj.Position = parentObj.PageFlowIdArray.length
			
			$("#"+pageTreeId).jstree({
				"core" : {
					"check_callback" : true,
					"data" : [
					{"id": "Root"+uIndex, "parent": "#", "text": "Root", "type": "root"}, 
					{"id": "ajson2", "parent": "Root"+uIndex, "text": "folder1", "type": "folder"}, 
					{"id": "ajson3", "parent": "ajson2", "text": "folder2", "type": "folder"}, 
					{"id": "ajson4", "parent": "Root"+uIndex, "text": "img1", "type": "imgfile"}]
				},
				"types" : {
					"#" : {
						"max_children" : 1,
						"valid_children" : ["root"]
					},
					"root" : {
						"valid_children" : ["folder", "imgfile", "textfile"]
					},
					"folder" : {
						"valid_children" : ["folder", "imgfile", "textfile"]
					},
					"imgfile" : {
						"valid_children" : []
					},
					"textfile" : {
						"valid_children" : []
					}
				},
				"plugins" : ["wholerow", "contextmenu", "dnd", "types"]
			})
			
// console.log(pubObj.Position)
		} else {
			let brotherId = brotherObj.PageFlowId
			$("#"+brotherId).after(pageFlowText)
			
			// parentObj.PageFlowIdArray.splice(brotherObj.Position - 1, 0, pageFlowId)
			// parentObj.displayHeadContent()
			
			// pubObj.PageFlowId = pageFlowId
			// pubObj.Position = parentObj.PageFlowIdArray.length
		}
	}
	
	let DispTreeAndEdit = function() {
		
		$("#"+parentObj.SeleEditPageId).css("display", "none")
		$("#"+pubObj.PageEditId).css("display", "inline")
		
		$("#"+parentObj.SeleTreePageId).css("display", "none")
		$("#"+pubObj.PageTreeId).css("display", "block")
		
		$("#NewPic").off("click")
		$("#NewPic").on("click", AddImg)
		
		$("#NewText").off("click")
		$("#NewText").on("click", AddText)
		
		$("#NewAnim").off("click")
		$("#NewAnim").on("click", AddAnim)
	}
	
	let AddImg = function() {
		dialog.showOpenDialog({
			title: "Select A File",
			properties: ["openFile", "multiSelections"],
			filters: [{ name: "Image File", extensions: ["png", "jpg"]}]
		}, function(imgPathArray) {
			if(!imgPathArray) { return }
			
			for(let imgPath of imgPathArray) {
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj, imgPath)
				pubObj.ElemObjArray.push(imgObj)
			}
		})
	}

	let AddText = function() {
// console.log(pubObj.PageFlowId)
		let textObj = new AWP.FTArea.FTElems.TextElem(pubObj)
		
		pubObj.ElemObjArray.push(textObj)
	}
	
	let AddAnim = function() {
// console.log(pubObj.PageFlowId)
		$("#NewPicDL").dialog( "option", "buttons",[{
			text: "确定",
			click: function() {
				
				let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj)
				pubObj.ElemObjArray.push(imgObj)
				$(this).dialog( "close" )
			}
		}, {
			text: "关闭",
			click: function() {
				$(this).dialog( "close" )
			}
		}]).dialog("open")
	}
	
	;(function() {
		
		PageObjIni()
		
		$("#"+pubObj.PageFlowId).on("mousedown", function() {
			
			// if (parentObj.SeleFlowPageId != "") {
			
			// }
			$("#"+parentObj.SeleFlowPageId).css("outline", "#00ff00 none thick")
			$(this).css("outline", "#00ff00 solid thick")
			
			parentObj.SelePagePos = pubObj.Position
			parentObj.displayHeadContent()
			
			DispTreeAndEdit()
			
			parentObj.SeleFlowPageId = pubObj.PageFlowId
			parentObj.SeleEditPageId = pubObj.PageEditId
			parentObj.SeleTreePageId = pubObj.PageTreeId
		})
	}())
}















