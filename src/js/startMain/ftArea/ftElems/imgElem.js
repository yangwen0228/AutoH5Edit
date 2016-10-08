/*
	image element function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgElem = function(parentObj, imgPath) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Type = "Img", pubObj.ImgId = "0", pubObj.ShadowId = "0"
	PriObj.AttrObj = {}, PriObj.EffectObj = {};
	
	pubObj.getId = function () { return pubObj.ImgId }
	pubObj.getShadow = function () { return pubObj.ShadowId }
	
	let ImgObjIni = function() {
		
		let uStr = parentObj.getUniqueElemStr()
		
		let imgId = "img_edit_"+uStr
		// let imgArray = new Array()
		// while(document.getElementById(imgId)) {
			// imgArray = imgId.split("_")
			// imgArray[3]++
			// imgId = imgArray.join("_")
		// }
		let shadowId = "img_shadow_"+uStr
		// let shadowAry = new Array()
		// while(document.getElementById(shadowId)) {
			// shadowAry = shadowId.split("_")
			// shadowAry[3]++
			// shadowId = shadowAry.join("_")
		// }
		
		pubObj.ImgId = imgId
		pubObj.ShadowId = shadowId
	
		let imgText = '\n<div class="editImg" id="' + imgId + '" draggable="false">\n<img src="' + imgPath + '"></img>\n</div>\n'
		$("#"+parentObj.PageEditId).append(imgText)
		
		let shadowText = '\n<div class="flowImg" id="' + shadowId + '" draggable="false">\n<img src="' + imgPath + '"></img>\n</div>\n'
		$("#"+parentObj.PageFlowId).append(shadowText)
		
		pubObj.syncShadowFromImg()
		
		PriObj.AttrObj = new AWP.FTArea.FTElems.ImgCard.ImgAttrCard(pubObj)
		PriObj.EffectObj = new AWP.FTArea.FTElems.ImgCard.ImgEffectCard(pubObj)
	}
	
	pubObj.syncShadowFromImg = function() {
		
		let jqImgObj = $("#"+pubObj.ImgId)
		
		let imgCssAry1 = ["top", "height"]
		for(let imgCss of imgCssAry1) {

			let valueCss = ((parseInt(jqImgObj.css(imgCss))/parseInt(jqImgObj.parent().css("height")))*100).toFixed(2)
			$("#"+pubObj.ShadowId).css(imgCss, valueCss + "%")
		}
		
		let imgCssAry2 = ["left", "width"]
		for(let imgCss of imgCssAry2) {

			let valueCss = ((parseInt(jqImgObj.css(imgCss))/parseInt(jqImgObj.parent().css("width")))*100).toFixed(2)
			$("#"+pubObj.ShadowId).css(imgCss, valueCss + "%")
		}
		
		let imgCssAry3 = ["background"]
		for(let imgCss of imgCssAry3) {
			$("#"+pubObj.ShadowId).css(imgCss, jqImgObj.css(imgCss))
		}
	}
	
	let BindImgDragable = function(jqSeleImg) {
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
				let paWidth = parseInt(jqSeleImg.parent().css("width"))
				let paHeight = parseInt(jqSeleImg.parent().css("height"))
				let lPos = (startDX + (event.clientX - eventDX))/paWidth*100
				let tPos = (startDY + (event.clientY - eventDY))/paHeight*100
// console.log((startDX + (event.clientX - eventDX))/paWidth)
				jqSeleImg.css({"left" : lPos.toFixed(2)+"%", "top" : tPos.toFixed(2)+"%",})
				
				PriObj.AttrObj.setValueTDLRWH()
				PriObj.EffectObj.stopPreview()
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
	}
	let BindImgResizeable = function(jqSeleImg) {
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
			
			let paWidth = parseInt(jqSeleImg.parent().css("width"))
			let paHeight = parseInt(jqSeleImg.parent().css("height"))
			
			let chWidth = (w/paWidth*100).toFixed(2)
			let chHeight = (h/paHeight*100).toFixed(2)
			let chLeft = (l/paWidth*100).toFixed(2)
			let chTop = (t/paHeight*100).toFixed(2)
			jqSeleImg.css({ "width" : chWidth+"%", height : chHeight+"%", left : chLeft+"%", top : chTop+"%"})
			
			PriObj.AttrObj.setValueTDLRWH()
			PriObj.EffectObj.stopPreview()
		}).on('mouseup', function(){
			resizeCt = false 
		})
	}
	let BindImgControl = function(jqSeleImg, jqShadowImg) {
		
		$("#BTTop").on("click", function() {
			jqSeleImg.next().after(jqSeleImg)
			jqShadowImg.next().after(jqShadowImg)
		})
		
		$("#BTDown").on("click", function() {
			jqSeleImg.prev().before(jqSeleImg)
			jqShadowImg.prev().before(jqShadowImg)
		})
		
		$("#BTDel").on("click", function() {
			jqSeleImg.remove()
			jqShadowImg.remove()
			parentObj.SeleElemId == 0
		
			let imgPos = parentObj.ElemObjArray.indexOf(pubObj)
			if(imgPos > -1) {
				parentObj.ElemObjArray.splice(imgPos, 1)
			}
		})
	}
	let UnBindImgEvent = function() {
		if(parentObj.SeleElemId != 0) {
			$("#"+parentObj.SeleElemId).off("mouseup mousedown mousemove")
			$("#"+parentObj.SeleElemId).children("span").remove()
			$("#BTTop").off("click")
			$("#BTDown").off("click")
			$("#BTDel").off("click")
		}
	}
	let BindImgEditable = function() {
		
		UnBindImgEvent()
		
		let jqSeleImg = $("#"+pubObj.ImgId)
		let jqShadowImg = $("#"+pubObj.ShadowId)
		
		BindImgDragable(jqSeleImg)
		BindImgResizeable(jqSeleImg)
		BindImgControl(jqSeleImg, jqShadowImg)
	}

	;(function() {
		
		ImgObjIni()
		
		$("#"+pubObj.ImgId).on("click", function() {
// console.log("OKOKOK")
			BindImgEditable()
			
			parentObj.SeleElemId = pubObj.ImgId
			
			PriObj.AttrObj.showAttrCard()
			PriObj.AttrObj.setValueTDLRWH()
			
			PriObj.EffectObj.showEffectCard()
			PriObj.EffectObj.setValueInOut()
		})
	}())
}

























