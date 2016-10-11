/*
	image element function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.DivElem = function(pageObj) {
	
	let pubObj = this
	pubObj.Type = "Div",  pubObj.DivId = "0", pubObj.ShadowId = "0", pubObj.NodeId = "0"
	
	let AttrObj = {}, EffectObj = {};
	
	let DivObjIni = function() {
		
		let uStr = pageObj.getUniqueElemStr()
		
		let divId = "div_edit_"+uStr
		let shadowId = "div_shadow_"+uStr
		
		pubObj.DivId = divId
		pubObj.ShadowId = shadowId
		pubObj.NodeId = "div_node_"+uStr
	
		let divText = '\n<div class="editDiv" id="' + divId + '" draggable="false">\n</div>\n'
		$("#"+pageObj.PageEditId).append(divText)
		
		let shadowText = '\n<div class="flowDiv" id="' + shadowId + '" draggable="false">\n</div>\n'
		$("#"+pageObj.PageFlowId).append(shadowText)
		
		pubObj.syncShadowFromDiv()
		
		// AttrObj = new AWP.FTArea.FTElems.DivCard.DivAttrCard(pubObj)
		// EffectObj = new AWP.FTArea.FTElems.DivCard.DivEffectCard(pubObj)
	}
	
	pubObj.syncShadowFromDiv = function() {
		
		let jqDivObj = $("#"+pubObj.DivId)
		
		let divCssAry1 = ["top", "height"]
		for(let divCss of divCssAry1) {

			let valueCss = ((parseInt(jqDivObj.css(divCss))/parseInt(jqDivObj.parent().css("height")))*100).toFixed(2)
			$("#"+pubObj.ShadowId).css(divCss, valueCss + "%")
		}
		
		let divCssAry2 = ["left", "width"]
		for(let divCss of divCssAry2) {

			let valueCss = ((parseInt(jqDivObj.css(divCss))/parseInt(jqDivObj.parent().css("width")))*100).toFixed(2)
			$("#"+pubObj.ShadowId).css(divCss, valueCss + "%")
		}
		
		let divCssAry3 = ["background"]
		for(let divCss of divCssAry3) {
			$("#"+pubObj.ShadowId).css(divCss, jqDivObj.css(divCss))
		}
	}
	
	let BindDivDragable = function(jqSeleDiv) {
		jqSeleDiv.css("cursor", "move")
		jqSeleDiv.attr("draggable", "false")
		let eventDX, eventDY, startDX, startDY, dragCt
		jqSeleDiv.on("mousedown", function(event){
			eventDX = event.clientX
			eventDY = event.clientY
			startDX = parseInt(jqSeleDiv.css("left"))
			startDY = parseInt(jqSeleDiv.css("top"))
			dragCt = true 
			if(this.setCapture){this.setCapture()}
		}).on("mouseup", function(){
			dragCt = false 
			if(this.releaseCapture){this.releaseCapture()}
		})
		
		$(document).on("mousemove", function(event){
			if(dragCt){
				let paWidth = parseInt(jqSeleDiv.parent().css("width"))
				let paHeight = parseInt(jqSeleDiv.parent().css("height"))
				let lPos = (startDX + (event.clientX - eventDX))/paWidth*100
				let tPos = (startDY + (event.clientY - eventDY))/paHeight*100
// console.log((startDX + (event.clientX - eventDX))/paWidth)
				jqSeleDiv.css({"left" : lPos.toFixed(2)+"%", "top" : tPos.toFixed(2)+"%",})
				
				PriObj.AttrObj.setValueTDLRWH()
				PriObj.EffectObj.stopPreview()
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
	}
	let BindDivResizeable = function(jqSeleDiv) {
		let pointsClass = ['tl', 'tc', 'tr', 'mr', 'br', 'bc', 'bl', 'ml'];
		let resizePoints = '';
		for(let i=0; i<pointsClass.length; i++){
			resizePoints += '<span class="resizepoint '+pointsClass[i]+'"></span>';
		}
		jqSeleDiv.append(resizePoints)
		let dpElements = jqSeleDiv.find('.resizepoint')
		let currentL, currentT, currentW, currentH, eventRX, eventRY, resizeCt
		dpElements.on('mousedown', function(event){
			eventRX = event.clientX
			eventRY = event.clientY
			currentW = jqSeleDiv.width()
			currentH = jqSeleDiv.height()
			currentL = jqSeleDiv.position().left 
			currentT = jqSeleDiv.position().top 
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
			
			let paWidth = parseInt(jqSeleDiv.parent().css("width"))
			let paHeight = parseInt(jqSeleDiv.parent().css("height"))
			
			let chWidth = (w/paWidth*100).toFixed(2)
			let chHeight = (h/paHeight*100).toFixed(2)
			let chLeft = (l/paWidth*100).toFixed(2)
			let chTop = (t/paHeight*100).toFixed(2)
			jqSeleDiv.css({ "width" : chWidth+"%", height : chHeight+"%", left : chLeft+"%", top : chTop+"%"})
			
			PriObj.AttrObj.setValueTDLRWH()
			PriObj.EffectObj.stopPreview()
		}).on('mouseup', function(){
			resizeCt = false 
		})
	}
	let BindDivControl = function(jqSeleDiv, jqShadowDiv) {
		
		$("#BTTop").on("click", function() {
			jqSeleDiv.next().after(jqSeleDiv)
			jqShadowDiv.next().after(jqShadowDiv)
		})
		
		$("#BTDown").on("click", function() {
			jqSeleDiv.prev().before(jqSeleDiv)
			jqShadowDiv.prev().before(jqShadowDiv)
		})
		
		$("#BTDel").on("click", function() {
			jqSeleDiv.remove()
			jqShadowDiv.remove()
			pageObj.SeleElemId == 0
		
			let divPos = pageObj.ElemObjArray.indexOf(pubObj)
			if(divPos > -1) {
				pageObj.ElemObjArray.splice(divPos, 1)
			}
		})
	}
	let UnBindDivEvent = function() {
		if(pageObj.SeleElemId != 0) {
			$("#"+pageObj.SeleElemId).off("mouseup mousedown mousemove")
			$("#"+pageObj.SeleElemId).children("span").remove()
			$("#BTTop").off("click")
			$("#BTDown").off("click")
			$("#BTDel").off("click")
		}
	}
	let BindDivEditable = function() {
		
		UnBindDivEvent()
		
		let jqSeleDiv = $("#"+pubObj.DivId)
		let jqShadowDiv = $("#"+pubObj.ShadowId)
		
		BindDivDragable(jqSeleDiv)
		BindDivResizeable(jqSeleDiv)
		BindDivControl(jqSeleDiv, jqShadowDiv)
	}

	;(function() {
		
		DivObjIni()
		
		$("#"+pubObj.DivId).on("click", function() {
// console.log("OKOKOK")
			BindDivEditable()
			
			pageObj.SeleElemId = pubObj.DivId
			
			PriObj.AttrObj.showAttrCard()
			PriObj.AttrObj.setValueTDLRWH()
			
			PriObj.EffectObj.showEffectCard()
			PriObj.EffectObj.setValueInOut()
		})
	}())
}

























