/*


*/

var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.PageCard = AWP.FTArea.PageCard || {}
AWP.FTArea.PageCard.PageAttrCard = function(pageObj) {
	
	let pubObj = this
	
	pubObj.defineTreeTypes = function() {
		return {
			"#" : {
				"max_children" : 10,
				"valid_children" : ["root"]
			},
			"root" : {
				"valid_children" : ["div", "imgfile", "textfile"]
			},
			"div" : {
				"valid_children" : ["div", "imgfile", "textfile"]
			},
			"imgfile" : {
				"icon" : "img/image_x24.png",
				"valid_children" : []
			},
			"textfile" : {
				"valid_children" : []
			}
		}
	}
	
	pubObj.defineTreeMenu = function (obj, cb) { //right click invoke
console.log(obj)
		return {
			"create" : DTMCreate(),
			"rename" : DTMRename(),
			"remove" : DTMRemove(),
			"ccp" : {
				"separator_before"	: true,
				"icon"				: false,
				"separator_after"	: false,
				"label"				: "Edit",
				"action"			: false,
				"submenu" : {
					"cut" : DTMCut(),
					"copy" : DTMCopy(),
					"paste" : DTMPaste()
				}
			}
		}
	}
	let DTMCreate = function() {
		return {
			"separator_before"	: false,
			"separator_after"	: true,
			"_disabled"			: false, //(this.check("create_node", data.reference, {}, "last")),
			"label"				: "Create",
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				
				let sNode = inst.get_selected()
				let sNodeType = inst.get_type(sNode)
				if(sNodeType == false || (sNodeType != "root" && sNodeType != "div")) { return }
				
				let divObj = new AWP.FTArea.FTElems.ImgElem(pageObj, "none")
				inst.create_node(sNode, {"id": divObj.NodeId, "text": "divFolder", "type": "div"})
			}
		}
	}
	let DTMRename = function() {
		return {
			"separator_before"	: false,
			"separator_after"	: false,
			"_disabled"			: false, //(this.check("rename_node", data.reference, this.get_parent(data.reference), "")),
			"label"				: "Rename",
			/*!
			"shortcut"			: 113,
			"shortcut_label"	: 'F2',
			"icon"				: "glyphicon glyphicon-leaf",
			*/
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				inst.edit(obj)
			}
		}
	}
	let DTMRemove = function() {
		return {
			"separator_before"	: false,
			"icon"				: false,
			"separator_after"	: false,
			"_disabled"			: false, //(this.check("delete_node", data.reference, this.get_parent(data.reference), "")),
			"label"				: "Delete",
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				if(inst.is_selected(obj)) {
					inst.delete_node(inst.get_selected())
				}
				else {
					inst.delete_node(obj)
				}
			}
		}
	}
	let DTMCut = function() {
		return {
			"separator_before"	: false,
			"separator_after"	: false,
			"label"				: "Cut",
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				if(inst.is_selected(obj)) {
					inst.cut(inst.get_top_selected())
				}
				else {
					inst.cut(obj)
				}
			}
		}
	}
	let DTMCopy = function() {
		return {
			"separator_before"	: false,
			"icon"				: false,
			"separator_after"	: false,
			"label"				: "Copy",
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				if(inst.is_selected(obj)) {
					inst.copy(inst.get_top_selected())
				}
				else {
					inst.copy(obj)
				}
			}
		}
	}
	let DTMPaste = function() {
		return {
			"separator_before"	: false,
			"icon"				: false,
			"_disabled"			: function (data) {
				return !$.jstree.reference(data.reference).can_paste()
			},
			"separator_after"	: false,
			"label"				: "Paste",
			"action"			: function (data) {
				let inst = $.jstree.reference(data.reference)
				let obj = inst.get_node(data.reference)
				inst.paste(obj)
			}
		}
	}
	
	
	
	
	
}