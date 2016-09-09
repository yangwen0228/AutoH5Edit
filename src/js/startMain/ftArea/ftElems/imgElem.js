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
	
	PriObj.BindImgEditable = function() {
		
		// parentObj.SeleElemId
		
		// let GSeleItem = $("#"+imgId)
		
		GSeleItem.css("cursor", "move")
		GSeleItem.attr("draggable", "false")
		let eventDX, eventDY, startDX, startDY, dragCt
		GSeleItem.on("mousedown", function(event){
			eventDX = event.clientX
			eventDY = event.clientY
			startDX = parseInt(GSeleItem.css("left"))
			startDY = parseInt(GSeleItem.css("top"))
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
				GSeleItem.css({left : lPos, top : tPos,})
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
		
		
		let pointsClass = ['tl', 'tc', 'tr', 'mr', 'br', 'bc', 'bl', 'ml'];
		let resizePoints = '';
		for(let i=0; i<pointsClass.length; i++){
			resizePoints += '<span class="resizepoint '+pointsClass[i]+'"></span>';
		}
		GSeleItem.append(resizePoints)
		let dpElements = GSeleItem.find('.resizepoint')
		let currentL, currentT, currentW, currentH, eventRX, eventRY, resizeCt
		dpElements.on('mousedown', function(event){
			eventRX = event.clientX
			eventRY = event.clientY
			currentW = GSeleItem.width()
			currentH = GSeleItem.height()
			currentL = GSeleItem.position().left 
			currentT = GSeleItem.position().top 
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

			GSeleItem.css({
				width : w + 'px', 
				height : h + 'px',
				left : l + 'px',
				top : t + 'px'
			})
		}).on('mouseup', function(){
			resizeCt = false 
		})
	}
	
	PriObj.UnBindImgEditable = function() {
		
		let GSeleItem = $("#"+imgId)
		
		GSeleItem.css("cursor", "move")
		GSeleItem.attr("draggable", "false")
		let eventDX, eventDY, startDX, startDY, dragCt
		GSeleItem.on("mousedown", function(event){
			eventDX = event.clientX
			eventDY = event.clientY
			startDX = parseInt(GSeleItem.css("left"))
			startDY = parseInt(GSeleItem.css("top"))
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
				GSeleItem.css({left : lPos, top : tPos,})
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
		
		
		let pointsClass = ['tl', 'tc', 'tr', 'mr', 'br', 'bc', 'bl', 'ml'];
		let resizePoints = '';
		for(let i=0; i<pointsClass.length; i++){
			resizePoints += '<span class="resizepoint '+pointsClass[i]+'"></span>';
		}
		GSeleItem.append(resizePoints)
		let dpElements = GSeleItem.find('.resizepoint')
		let currentL, currentT, currentW, currentH, eventRX, eventRY, resizeCt
		dpElements.on('mousedown', function(event){
			eventRX = event.clientX
			eventRY = event.clientY
			currentW = GSeleItem.width()
			currentH = GSeleItem.height()
			currentL = GSeleItem.position().left 
			currentT = GSeleItem.position().top 
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

			GSeleItem.css({
				width : w + 'px', 
				height : h + 'px',
				left : l + 'px',
				top : t + 'px'
			})
		}).on('mouseup', function(){
			resizeCt = false 
		})
	}
	
	pubObj.test = function() {
		
	}
}
