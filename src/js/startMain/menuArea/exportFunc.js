/*
	MenuBar UI function
	
*/

var AWP = AWP || {}
AWP.MenuArea = AWP.MenuArea || {}
AWP.MenuArea.ExportFunc = function(flowObj) {
	
	let pubObj = this
	
	let ExportFolder, ExportName, IndexName = "index.html", MainPath = process.cwd()
	
	let ExportHead = [
		'<!DOCTYPE html>',
		'<html>',
		'	<head>',
		'		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />',
		'		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>',
		'		<title>vipshop</title>',
		'		<link rel="Shortcut Icon" href="img/favicon.ico" type="image/x-icon">',
		'		<link rel="stylesheet" href="lib/swiper/css/swiper-3.3.1.min.css">',
		'		<link rel="stylesheet" href="lib/swiper/css/animate.min.css">',
		'		<link rel="stylesheet" href="css/cssMain.css">',
		'	</head>',
		'',
		'	<body id="Wm">',
		''
	].join("\n")
	
	let ExportFoot = [
		'',
		'		<script type="text/javascript" src="lib/swiper/js/swiper-3.3.1.min.js"></script>',
		'		<script type="text/javascript" src="lib/swiper/js/swiper.animate.min.js"></script>',
		'		<script type="text/javascript" src="lib/jquery/jquery-2.2.3.min.js"></script>',
		'		<script type="text/javascript" src="js/allTest.min.js"></script>',
		'	</body>',
		'</html>'
	].join("\n")

	let BindExportFile = function() {
		
		$("#Export").off("click")
		$("#Export").on("click", function() {
			$("#ExportDL").dialog( "option", "buttons",[{
				text: "确定",
				click: function() {
					
					ExportFunction()
					$(this).dialog( "close" )
				}
			}, {
				text: "关闭",
				click: function() {
					$(this).dialog( "close" )
				}
			}]).dialog("open")
		})
		
		$("#ExportFolderSele").off("click")
		$("#ExportFolderSele").on("click", function() {
			dialog.showOpenDialog({
				title: "Select Or New a Folder",
				properties: ["openDirectory"]
			}, function(foPath) {
		
				ExportFolder = foPath[0]
				$("#ExportFolderPath").text(ExportFolder)
			})
		})
	}
	
	let ExportFunction = function() {

		if(!CheckExportEntry()) { return }
		
		let pageArray = new Array()
		for(let pageObj of flowObj.PageObjArray) {
			
			let treeObj = pageObj.TreeObj
// AWP.TestObj = treeObj
			let pageText = GetFileIteration(pageObj, treeObj, "#", 1)
			pageArray.push(pageText)
		}
		
		let exportText = ExportHead + pageArray.join("") + ExportFoot
		fs.writeFile(path.join(ExportFolder, ExportName, IndexName), exportText)
		
		CopyFolder(path.join(MainPath, "default"), path.join(ExportFolder, ExportName))
	}
	
	let CheckExportEntry = function() {
		
		ExportName = $("#ExportNameEnter").val()
// console.log(ExportFolder)
		if(!fs.existsSync(ExportFolder)) { return false }
		if(typeof(ExportName) === "undefined" ) { return false }
		
		let prjExPath = path.join(ExportFolder, ExportName)
		if(!fs.existsSync(prjExPath)) { fs.mkdirSync(prjExPath) }
		if(!fs.existsSync(path.join(prjExPath, "img"))) { fs.mkdirSync(path.join(prjExPath, "img")) }
		
		return true
	}
	
	let GetFileIteration = function(pageObj, treeObj, preId, spaceCtrl) {
		
		let leftSpace = "", preArray
		for(let i1 = 0; i1 < spaceCtrl; i1 ++) { leftSpace += "\t" }
		
		if(preId === "#") {
			preArray = new Array(leftSpace, leftSpace)
		} else {
			preArray = new Array((leftSpace + "<div>"), (leftSpace + "</div>"))
		}
		
		let elemDivObj = pageObj.getElemObjByNodeId(preId)
		
		let preObj = treeObj.get_node(preId)
		for(let nextId of preObj.children) {
			
			let nodeText, nextObj = treeObj.get_node(nextId)
			switch(nextObj.type) {
				case "root":
				case "div": {
					nodeText = GetFileIteration(pageObj, treeObj, nextId, (spaceCtrl + 1))
					break
				}
				default: {
					let elemObj = pageObj.getElemObjByNodeId(nextId)
					let imgFrPath = elemObj.ImgPath
					let imgExPath = path.join(ExportFolder, ExportName, "img", path.basename(imgFrPath))
					fs.createReadStream(imgFrPath).pipe(fs.createWriteStream(imgExPath))
					
					let styleText = GetElemAttr(elemObj)
					let effectText = GetElemEffect(elemObj)
					nodeText = leftSpace + '\t' + '<img src="img/' + path.basename(imgFrPath) + '"'  + styleText + effectText + '>'
				}
			}
			preArray.splice(-1, 0, nodeText)
		}
		return preArray.join("\n")
	}
	let GetElemAttr = function(elemObj) {
		
		return [
			' style="',
			'position:' + elemObj.AttrObj.Position,
			'top:' + elemObj.AttrObj.Top + '%',
			'left:' + elemObj.AttrObj.Left + '%',
			'width:' + elemObj.AttrObj.Width + '%',
			'height:' + elemObj.AttrObj.Height + '%" '
		].join(";")
	}
	let GetElemEffect = function(elemObj) {
		
		let dataInText = ""
		if(elemObj.EffectObj.ImgInControl) {
			dataInText = [
				' data-slide-in = "at ' + elemObj.EffectObj.ImgInArray[0],
				' from ' + elemObj.EffectObj.ImgInArray[1],
				' use ' + elemObj.EffectObj.ImgInArray[2],
				' during ' + elemObj.EffectObj.ImgInArray[3] + '"'
			].join("")
		}
		
		let dataOutText = ""
		if(elemObj.EffectObj.ImgOutControl) {
			dataOutText = [
				' data-slide-out = "at ' + elemObj.EffectObj.ImgOutArray[0],
				' to ' + elemObj.EffectObj.ImgOutArray[1],
				' use ' + elemObj.EffectObj.ImgOutArray[2],
				' during ' + elemObj.EffectObj.ImgOutArray[3] + ' force" '
			].join("")
		}
		
		return dataInText + dataOutText
	}
	
	let CopyFolder = function(fromPath, targPath) {
		// let dfFolder = path.join(MainPath, "default")
		for(let chName of fs.readdirSync(fromPath)) {
			
			let fromChPath = path.join(fromPath, chName)
			let targChPath = path.join(targPath, chName)
			
			let lStat = fs.lstatSync(fromChPath)
			if(lStat.isDirectory()) {
				if(!fs.existsSync(targChPath)) { fs.mkdirSync(targChPath) }
				CopyFolder(fromChPath, targChPath)
			} else {
				fs.createReadStream(fromChPath).pipe(fs.createWriteStream(targChPath))
			}
		}
	}
	
	;(function() {
		BindExportFile()
	}())
}
























