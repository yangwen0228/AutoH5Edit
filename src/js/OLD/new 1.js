	contextmenu = {

		select_node : true,
		show_at_node : true,
		items : function (o, cb) {
			return {
				"create" : {
					"separator_before"	: false,
					"separator_after"	: true,
					"_disabled"			: false, //(this.check("create_node", data.reference, {}, "last")),
					"label"				: "Create",
					"action"			: function (data) {
						console.log("create")
					}
				},
				"rename" : {
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
				},
				"remove" : {
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
				},
				"ccp" : {
					"separator_before"	: true,
					"icon"				: false,
					"separator_after"	: false,
					"label"				: "Edit",
					"action"			: false,
					"submenu" : {
						"cut" : {
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
						},
						"copy" : {
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
						},
						"paste" : {
							"separator_before"	: false,
							"icon"				: false,
							"_disabled"			: function (data) {
								return !$.jstree.reference(data.reference).can_paste();
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
			}
		}
	}