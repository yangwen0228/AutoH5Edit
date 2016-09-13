/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgElem = function(parentObj, imgPath) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Type = "Img", pubObj.ImgId = "0"
	let tes;
	
	(function() {
		let imgId = "img_1_1"
		let imgArray = new Array()
		while(parentObj.ImgIdArray.indexOf(imgId) !== -1) {
			imgArray = imgId.split("_")
			imgArray[2]++
			imgId = imgArray.join("_")
		}
		pubObj.ImgId = imgId
	
		let imgText = '\n<div class="editImg" id="' + imgId + '" draggable="false">\n<img src="' + imgPath + '"></img>\n</div>\n'
		$("#EditPage").append(imgText)
		
		parentObj.ImgIdArray.push(imgId)
	}())
	
	PriObj.BindImgDragable = function(jqSeleImg) {
		jqSeleImg.css("cursor", "move")
		jqSeleImg.attr("draggable", "false")
		let eventDX, eventDY, startDX, startDY, dragCt
		jqSeleImg.on("mousedown", function(event){
			eventDX = event.clientX
			eventDY = event.clientY
			startDX = parseInt(jqSeleImg.css("left"))
			startDY = parseInt(jqSeleImg.css("top"))
			dragCt = true 
			if(this.setCapture){this.setCapture()}
		}).on("mouseup", function(){
			dragCt = false 
			if(this.releaseCapture){this.releaseCapture()}
		})
		
		$(document).on("mousemove", function(event){
			if(dragCt){
				let lPos = startDX + (event.clientX - eventDX)
				let tPos = startDY + (event.clientY - eventDY)
				jqSeleImg.css({left : lPos, top : tPos,})
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
	}
	PriObj.BindImgResizeable = function(jqSeleImg) {
		let pointsClass = ['tl', 'tc', 'tr', 'mr', 'br', 'bc', 'bl', 'ml'];
		let resizePoints = '';
		for(let i=0; i<pointsClass.length; i++){
			resizePoints += '<span class="resizepoint '+pointsClass[i]+'"></span>';
		}
		jqSeleImg.append(resizePoints)
		let dpElements = jqSeleImg.find('.resizepoint')
		let currentL, currentT, currentW, currentH, eventRX, eventRY, resizeCt
		dpElements.on('mousedown', function(event){
			eventRX = event.clientX
			eventRY = event.clientY
			currentW = jqSeleImg.width()
			currentH = jqSeleImg.height()
			currentL = jqSeleImg.position().left 
			currentT = jqSeleImg.position().top 
			resizeCt = $(this)[0].className.split(' ')[1];
			if(this.setCapture){this.setCapture();}
		}).on('mouseup', function(event){
			resizeCt = false 
			if(this.releaseCapture){this.releaseCapture();}
		})
		
		$(document).on('mousemove', function(event){
			if(!resizeCt)return 
			let w = currentW, h = currentH, l = currentL, t = currentT, 
				offsetX = event.clientX - eventRX, offsetY = event.clientY - eventRY 
			switch(resizeCt){
				case false : 
				break 
				case 'tl' : 
				w = currentW - offsetX; h = currentH - offsetY; l = currentL + offsetX; t = currentT + offsetY 
				break 
				case 'tc' : 
				h = currentH - offsetY; t = currentT + offsetY 
				break 
				case 'tr' : 
				w = currentW + offsetX; h = currentH - offsetY; t = currentT + offsetY 
				break 
				case 'mr' : 
				w = currentW + offsetX 
				break 
				case 'br' : 
				w = currentW + offsetX; h = currentH + offsetY 
				break 
				case 'bc' : 
				h = currentH + offsetY 
				break 
				case 'bl' : 
				w = currentW - offsetX; h = currentH + offsetY; l = currentL + offsetX 
				break 
				case 'ml' : 
				w = currentW - offsetX; l = currentL + offsetX 
				break 
			}

			jqSeleImg.css({
				width : w + 'px', 
				height : h + 'px',
				left : l + 'px',
				top : t + 'px'
			})
		}).on('mouseup', function(){
			resizeCt = false 
		})
	}
	PriObj.BindImgControl = function(jqSeleImg) {
		
		$("#BTTop").on("click", function() {
			jqSeleImg.next().after(jqSeleImg)
		})
		
		$("#BTDown").on("click", function() {
			jqSeleImg.prev().before(jqSeleImg)
		})
		
		$("#BTDel").on("click", function() {
			jqSeleImg.remove()
			parentObj.SeleElemId == 0
		})
	}
	PriObj.BindImgEditable = function() {
		
		if(parentObj.SeleElemId != 0) {
			$("#"+parentObj.SeleElemId).off("mouseup mousedown mousemove")
			$("#"+parentObj.SeleElemId).children("span").remove()
			$("#BTTop").off("click")
			$("#BTDown").off("click")
			$("#BTDel").off("click")
// console.log("OKOKOK")
		}
		
		let jqSeleImg = $("#"+pubObj.ImgId)
		
		PriObj.BindImgDragable(jqSeleImg)
		PriObj.BindImgResizeable(jqSeleImg)
		PriObj.BindImgControl(jqSeleImg)
	}
	
	pubObj.test = function() {
		
	};
	
	(function() {
		$("#"+pubObj.ImgId).on("click", function() {
// console.log("OKOKOK")
			PriObj.BindImgEditable()
			
			parentObj.SeleElemId = pubObj.ImgId
		})
	}())
}
