/*
	image attribute card obj function
	
*/

var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgCard = AWP.FTArea.FTElems.ImgCard || {}
AWP.FTArea.FTElems.ImgCard.ImgAttrCard = function(imgObj) {
	
	let pubObj = this
	pubObj.Position = "absolute", pubObj.Top, pubObj.Left, pubObj.Width, pubObj.Height, pubObj.BackGround
	
	pubObj.showAttrCard = function() {
		
		$("#TheAttr").children().appendTo("#StoreArea")
		
		$("#ImgAttrCard").appendTo("#TheAttr")
		
		RefreshAttrEvent()
	}
	
	pubObj.hideAttrCard = function() {
		
		$("#TheAttr").children().appendTo("#StoreArea")
	}
	
	pubObj.setValueTDLRWH = function() {
		
		pubObj.setValueTopDown()
		pubObj.setValueLeftRight()
		pubObj.setValueWidth()
		pubObj.setValueHeight()
		
		imgObj.syncShadowFromImg()
	}
	
	pubObj.setValueTopDown = function() {
		
		let seleTD = $("#ImgTDSele").val()
		if(seleTD === "top") {
			let topPix = parseInt($("#"+imgObj.ElemId).css("top"))
			$("#ImgTDPix").spinner("value", topPix)
			
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let topPer = (topPix/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", topPer)
			
			pubObj.Top = topPer
		} else {
			let botPix = parseInt($("#"+imgObj.ElemId).css("bottom"))
			$("#ImgTDPix").spinner("value", botPix)
			
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let botPer = (botPix/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", botPer)
		}
	}
	
	pubObj.setValueLeftRight = function() {
		
		let seleTD = $("#ImgLRSele").val()
		if(seleTD === "left") {
			let leftPix = parseInt($("#"+imgObj.ElemId).css("left"))
			$("#ImgLRPix").spinner("value", leftPix)
			
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let leftPer = (leftPix/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", leftPer)
			
			pubObj.Left = leftPer
		} else {
			let rightPix = parseInt($("#"+imgObj.ElemId).css("right"))
			$("#ImgLRPix").spinner("value", rightPix)
			
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let rightPer = (rightPix/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", rightPer)
		}
	}
	
	pubObj.setValueWidth = function() {
		
		let widthPix = parseInt($("#"+imgObj.ElemId).css("width"))
		$("#ImgWDPix").spinner("value", widthPix)
		
		let paWidth = $("#"+imgObj.ElemId).parent().width()
		let widthPer = (widthPix/paWidth*100).toFixed(2)
		$("#ImgWDPer").spinner("value", widthPer)
		
		pubObj.Width = widthPer
	}
	
	pubObj.setValueHeight = function() {
		
		let heightPix = parseInt($("#"+imgObj.ElemId).css("height"))
		$("#ImgHTPix").spinner("value", heightPix)
		
		let paHeight = $("#"+imgObj.ElemId).parent().height()
		let heightPer = (heightPix/paHeight*100).toFixed(2)
		$("#ImgHTPer").spinner("value", heightPer)
		
		pubObj.Height = heightPer
	}
	
	let RefreshAttrEvent = function() {
		$("#ImgTDPix, #ImgTDPer, #ImgLRPix, #ImgLRPer, #ImgWDPix, #ImgWDPer, #ImgHTPix, #ImgHTPer").off("spinstop")
		
		$("#ImgTDPix").on("spinstop", function() {
			
			let pixTD = $("#ImgTDPix").spinner("value")
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let perTD = (pixTD/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", perTD)
// console.log(1234)
			pubObj.Top = perTD 
			
			let seleTD = $("#ImgTDSele").val()
			if(seleTD === "top") {
				$("#"+imgObj.ElemId).css({"top": perTD+"%", "bottom": "initial"})
			} else {
				$("#"+imgObj.ElemId).css({"top": "initial", "bottom": perTD+"%"})
			}
		})
		$("#ImgTDPer").on("spinstop", function() {
			
			let perTD = $("#ImgTDPer").spinner("value")
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let pixTD = perTD/100*paHeight
			$("#ImgTDPix").spinner("value", pixTD)
			
			pubObj.Top = perTD 
			
			let seleTD = $("#ImgTDSele").val()
			if(seleTD === "top") {
				$("#"+imgObj.ElemId).css({"top": perTD+"%", "bottom": "initial"})
			} else {
				$("#"+imgObj.ElemId).css({"top": "initial", "bottom": perTD+"%"})
			}
		})
		$("#ImgLRPix").on("spinstop", function() {
			
			let pixLR = $("#ImgLRPix").spinner("value")
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let perLR = (pixLR/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", perLR)
			
			pubObj.Left = perLR
			
			let seleLR = $("#ImgLRSele").val()
			if(seleLR === "left") {
				$("#"+imgObj.ElemId).css({"left": perLR+"%", "right": "auto"})
			} else {
				$("#"+imgObj.ElemId).css({"left": "auto", "right": perLR+"%"})
			}
		})
		$("#ImgLRPer").on("spinstop", function() {
			
			let perLR = $("#ImgLRPer").spinner("value")
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let pixLR = perLR/100*paWidth
			$("#ImgLRPix").spinner("value", pixLR)
			
			pubObj.Left = perLR
			
			let seleLR = $("#ImgLRSele").val()
			if(seleLR === "left") {
				$("#"+imgObj.ElemId).css({"left": perLR+"%", "right": "auto"})
			} else {
				$("#"+imgObj.ElemId).css({"left": "auto", "right": perLR+"%"})
			}
		})
		$("#ImgWDPix").on("spinstop", function() {
			
			let pixWD = $("#ImgWDPix").spinner("value")
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let perWD = (pixWD/paWidth*100).toFixed(2)
			$("#ImgWDPer").spinner("value", perWD)
			
			pubObj.Width = perWD
			
			$("#"+imgObj.ElemId).css({"width": perWD+"%"})
		})
		$("#ImgWDPer").on("spinstop", function() {
			
			let perWD = $("#ImgWDPer").spinner("value")
			let paWidth = $("#"+imgObj.ElemId).parent().width()
			let pixWD = perWD/100*paWidth
			$("#ImgWDPix").spinner("value", pixWD)
			
			pubObj.Width = perWD
			
			$("#"+imgObj.ElemId).css({"width": perWD+"%"})
		})
		$("#ImgHTPix").on("spinstop", function() {
			
			let pixHT = $("#ImgHTPix").spinner("value")
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let perHT = (pixHT/paHeight*100).toFixed(2)
			$("#ImgHTPer").spinner("value", perHT)
			
			pubObj.Height = perHT
			
			$("#"+imgObj.ElemId).css({"height": perHT+"%"})
		})
		$("#ImgHTPer").on("spinstop", function() {
			
			let perHT = $("#ImgHTPer").spinner("value")
			let paHeight = $("#"+imgObj.ElemId).parent().height()
			let pixHT = perHT/100*paHeight
			$("#ImgHTPix").spinner("value", pixHT)
			
			pubObj.Height = perHT
			
			$("#"+imgObj.ElemId).css({"height": perHT+"%"})
		})
		
		$("#ImgTDPix, #ImgTDPer, #ImgLRPix, #ImgLRPer, #ImgWDPix, #ImgWDPer, #ImgHTPix, #ImgHTPer")
		.on("spinstop", function() { 
			imgObj.syncShadowFromImg() 
		})
	}
	
	;(function() {
		pubObj.setValueTDLRWH()
	}())
}











