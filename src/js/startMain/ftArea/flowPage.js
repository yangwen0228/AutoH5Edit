/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FlowPage = function(flowObj, brotherObj) {
	
	let pubObj = this

	pubObj.SeleElemId = 0, pubObj.Position = 0, pubObj.PageFlowId = "0", pubObj.PageTreeId = "0", pubObj.PageEditId = "0",
	pubObj.NodeIdArray = [], pubObj.ElemObjArray = []
	pubObj.TreeObj = {}, pubObj.AttrObj = {}
	
	let UPageIndex, UElemIndex = 0
	
	pubObj.getUniqueElemStr = function() {
		UElemIndex ++
		return UPageIndex + "_" + UElemIndex
	}
	
	pubObj.getElemObjByNodeId = function(nodeId) {
		let idIndex = pubObj.NodeIdArray.indexOf(nodeId)
		return pubObj.ElemObjArray[idIndex]
	}
	
	pubObj.removeElemByNodeId = function(nodeId) {
		
		let idIndex = pubObj.NodeIdArray.indexOf(nodeId)
		pubObj.ElemObjArray[idIndex].destroy()
		
		pubObj.NodeIdArray.splice(idIndex, 1)
		pubObj.ElemObjArray.splice(idIndex, 1)
	}
	
	pubObj.destroy = function() {
		
		for(let elemObj of pubObj.ElemObjArray) {
			elemObj.destroy()
		}
		pubObj.TreeObj.destroy()

		$("#"+pubObj.PageFlowId+",#"+pubObj.PageTreeId+",#"+pubObj.PageEditId).remove()
		
		pubObj={}
	}
	
	
	let PageObjIni = function() {
		
		pubObj.AttrObj = new AWP.FTArea.PageCard.PageAttrCard(pubObj)
		
		UPageIndex = flowObj.getUniquePageIndex()
		// let pageArray
		let pageFlowId = "page_flow_"+UPageIndex, pageEditId = "page_eidt_"+UPageIndex, pageTreeId = "page_tree_"+UPageIndex
		
		let pageFlowText = '\n<div class="flowPage" id="' + pageFlowId +'">\n</div>\n'
		let pageEditText = '\n<div class="editPage" id="' + pageEditId +'">\n</div>\n'
		let pageTreeText = '\n<div class="treePage" id="' + pageTreeId +'">\n</div>\n'
		
		if (brotherObj == "end") {
			$("#FlowContent").append(pageFlowText)
			$("#TreeContent").append(pageTreeText)
			$("#EditArea").append(pageEditText)
			
			flowObj.PageObjArray.push(pubObj)
			pubObj.Position = flowObj.PageObjArray.length
			
			pubObj.PageFlowId = pageFlowId, pubObj.PageEditId = pageEditId, pubObj.PageTreeId = pageTreeId
			
			pubObj.TreeObj = $("#"+pageTreeId).jstree({
				"core" : {
					"check_callback" : true,
					"data" : [{"id": "Root"+UPageIndex, "parent": "#", "text": "Root", "type": "root"}]
				},
				"types" : pubObj.AttrObj.defineTreeTypes(),
				"contextmenu" : {
					select_node : true,
					show_at_node : true,
					items : function(obj, cb) { return pubObj.AttrObj.defineTreeMenu(obj, cb) }
				},
				"plugins" : ["wholerow", "contextmenu", "dnd", "types"]
			}).jstree(true)
// console.log(pubObj.Position)
		} else {
			let brotherId = brotherObj.PageFlowId
			$("#"+brotherId).after(pageFlowText)
			
			// flowObj.PageObjArray.push(pubObj)
			// pubObj.Position = flowObj.PageObjArray.length
			
			// pubObj.PageFlowId = pageFlowId
		}
	}
	
	let DispTreeAndEdit = function() {
		
		$("#"+flowObj.SeleEditPageId).css("display", "none")
		$("#"+pubObj.PageEditId).css("display", "inline")
		
		$("#"+flowObj.SeleTreePageId).css("display", "none")
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
// console.log("Root"+UPageIndex)
				let sNode = pubObj.TreeObj.get_selected()
				let sNodeType = pubObj.TreeObj.get_type(sNode)
				let pNode = ["Root"+UPageIndex]
// console.log(sNode)
				let imgName = path.basename(imgPath)
				if(sNodeType != "div") {
					let divObj = new AWP.FTArea.FTElems.ImgElem(pubObj, "none", imgPath)
					
					pubObj.TreeObj.create_node(pNode, {"id": divObj.NodeId, "text": imgName, "type": "imgfile"})
				} else {
					let elemObj = pubObj.getElemObjByNodeId(sNode[0])
					let imgObj = new AWP.FTArea.FTElems.ImgElem(pubObj, elemObj, imgPath)
					
					pubObj.TreeObj.create_node(sNode, {"id": imgObj.NodeId, "text": imgName, "type": "imgfile"})
				}
			}
		})
	}
	let AddText = function() {
// console.log(pubObj.PageFlowId)
		let textObj = new AWP.FTArea.FTElems.TextElem(pubObj)
		
		// pubObj.ElemObjArray.push(textObj)
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
			// if (flowObj.SeleFlowPageId != "") {
			// }
			$("#"+flowObj.SeleFlowPageId).css("outline", "#00ff00 none thick")
			$(this).css("outline", "#00ff00 solid thick")
			
			flowObj.SelePagePos = pubObj.Position
			flowObj.displayHeadContent()
			
			DispTreeAndEdit()
			
			flowObj.SeleFlowPageId = pubObj.PageFlowId
			flowObj.SeleTreePageId = pubObj.PageTreeId
			flowObj.SeleEditPageId = pubObj.PageEditId
		})
		
		$("#"+pubObj.PageTreeId).on("select_node.jstree", function(ev, data) {
// console.log(ev)
// console.log(data.node)
			let sNode = data.node
			if(sNode.type === "root") { return }
			
			let elemObj = pubObj.getElemObjByNodeId(sNode.id)
			elemObj.setElemEditable()
		})
		
		$("#"+pubObj.PageTreeId).on("move_node.jstree", function(ev, data) {
// console.log(data)
			let newEditParentId, dragEditId, newEditPos = data.position
			
			let newNodeId = data.parent, dragNode = data.node
			let newNode = pubObj.TreeObj.get_node(newNodeId)
// console.log(newNode)
			if(newNode.type == "root") {
				newEditParentId = pubObj.PageEditId
			} else {
				newEditParentId = pubObj.getElemObjByNodeId(newNodeId).ElemId
			}

			dragEditId = pubObj.getElemObjByNodeId(dragNode.id).ElemId
			
			if(newEditPos == 0) {
				$("#"+newEditParentId).prepend($("#"+dragEditId))
			} else {
				let broNodeId = newNode.children[newEditPos-1]
				let broEditId = pubObj.getElemObjByNodeId(broNodeId).ElemId
				$("#"+broEditId).after($("#"+dragEditId))
			}
		})
	}())
}




















































