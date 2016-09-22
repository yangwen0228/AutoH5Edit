/*
	image attribute card obj function
	
*/

var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgCard = AWP.FTArea.FTElems.ImgCard || {}
AWP.FTArea.FTElems.ImgCard.ImgAttrCard = function(imgObj) {
	
	let pubObj = this
	let PriObj = {}
	
	PriObj.test = "";
	
	
	pubObj.showAttrCard = function() {
		
		$("#TheAttr").children().appendTo("#StoreArea")
		
		$("#ImgAttrCard").appendTo("#TheAttr")
		
		PriObj.RefreshAttrEvent()
	}
	
	pubObj.hideAttrCard = function() {
		
		$("#TheAttr").children().appendTo("#StoreArea")
	}
	
	pubObj.setValueTDLRWH = function() {
		
		pubObj.setValueTopDown()
		pubObj.setValueLeftRight()
		pubObj.setValueWidth()
		pubObj.setValueHeight()
	}
	
	pubObj.setValueTopDown = function() {
		
		let seleTD = $("#ImgTDSele").val()
		if(seleTD === "top") {
			let topPix = parseInt($("#"+imgObj.ImgId).css("top"))
			$("#ImgTDPix").spinner("value", topPix)
			
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let topPer = (topPix/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", topPer)
		} else {
			let botPix = parseInt($("#"+imgObj.ImgId).css("bottom"))
			$("#ImgTDPix").spinner("value", botPix)
			
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let botPer = (botPix/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", botPer)
		}
	}
	
	pubObj.setValueLeftRight = function() {
		
		let seleTD = $("#ImgLRSele").val()
		if(seleTD === "left") {
			let leftPix = parseInt($("#"+imgObj.ImgId).css("left"))
			$("#ImgLRPix").spinner("value", leftPix)
			
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let leftPer = (leftPix/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", leftPer)
		} else {
			let rightPix = parseInt($("#"+imgObj.ImgId).css("right"))
			$("#ImgLRPix").spinner("value", rightPix)
			
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let rightPer = (rightPix/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", rightPer)
		}
	}
	
	pubObj.setValueWidth = function() {
		
		let widthPix = parseInt($("#"+imgObj.ImgId).css("width"))
		$("#ImgWDPix").spinner("value", widthPix)
		
		let paWidth = $("#"+imgObj.ImgId).parent().width()
		let widthPer = (widthPix/paWidth*100).toFixed(2)
		$("#ImgWDPer").spinner("value", widthPer)
	}
	
	pubObj.setValueHeight = function() {
		
		let heightPix = parseInt($("#"+imgObj.ImgId).css("height"))
		$("#ImgHTPix").spinner("value", heightPix)
		
		let paHeight = $("#"+imgObj.ImgId).parent().height()
		let heightPer = (heightPix/paHeight*100).toFixed(2)
		$("#ImgHTPer").spinner("value", heightPer)
	};
	
	PriObj.RefreshAttrEvent = function() {
		
		$("#ImgTDPix").off("spinstop")
		$("#ImgTDPer").off("spinstop")
		$("#ImgLRPix").off("spinstop")
		$("#ImgLRPer").off("spinstop")
		$("#ImgWDPix").off("spinstop")
		$("#ImgWDPer").off("spinstop")
		$("#ImgHTPix").off("spinstop")
		$("#ImgHTPer").off("spinstop")
		
		
		$("#ImgTDPix").on("spinstop", function() {
			
			let pixTD = $("#ImgTDPix").spinner("value")
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let perTD = (pixTD/paHeight*100).toFixed(2)
			$("#ImgTDPer").spinner("value", perTD)
			
			let seleTD = $("#ImgTDSele").val()
			if(seleTD === "top") {
				$("#"+imgObj.ImgId).css({"top": perTD+"%", "bottom": "initial"})
			} else {
				$("#"+imgObj.ImgId).css({"top": "initial", "bottom": perTD+"%"})
			}
		})
		$("#ImgTDPer").on("spinstop", function() {
			
			let perTD = $("#ImgTDPer").spinner("value")
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let pixTD = perTD/100*paHeight
			$("#ImgTDPix").spinner("value", pixTD)
			
			let seleTD = $("#ImgTDSele").val()
			if(seleTD === "top") {
				$("#"+imgObj.ImgId).css({"top": perTD+"%", "bottom": "initial"})
			} else {
				$("#"+imgObj.ImgId).css({"top": "initial", "bottom": perTD+"%"})
			}
		})
		$("#ImgLRPix").on("spinstop", function() {
			
			let pixLR = $("#ImgLRPix").spinner("value")
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let perLR = (pixLR/paWidth*100).toFixed(2)
			$("#ImgLRPer").spinner("value", perLR)
			
			let seleLR = $("#ImgLRSele").val()
			if(seleLR === "left") {
				$("#"+imgObj.ImgId).css({"left": perLR+"%", "right": "auto"})
			} else {
				$("#"+imgObj.ImgId).css({"left": "auto", "right": perLR+"%"})
			}
		})
		$("#ImgLRPer").on("spinstop", function() {
			
			let perLR = $("#ImgLRPer").spinner("value")
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let pixLR = perLR/100*paWidth
			$("#ImgLRPix").spinner("value", pixLR)
			
			let seleLR = $("#ImgLRSele").val()
			if(seleLR === "left") {
				$("#"+imgObj.ImgId).css({"left": perLR+"%", "right": "auto"})
			} else {
				$("#"+imgObj.ImgId).css({"left": "auto", "right": perLR+"%"})
			}
		})
		$("#ImgWDPix").on("spinstop", function() {
			
			let pixWD = $("#ImgWDPix").spinner("value")
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let perWD = (pixWD/paWidth*100).toFixed(2)
			$("#ImgWDPer").spinner("value", perWD)
			
			$("#"+imgObj.ImgId).css({"width": perWD+"%"})
		})
		$("#ImgWDPer").on("spinstop", function() {
			
			let perWD = $("#ImgWDPer").spinner("value")
			let paWidth = $("#"+imgObj.ImgId).parent().width()
			let pixWD = perWD/100*paWidth
			$("#ImgWDPix").spinner("value", pixWD)
			
			$("#"+imgObj.ImgId).css({"width": perWD+"%"})
		})
		$("#ImgHTPix").on("spinstop", function() {
			
			let pixHT = $("#ImgHTPix").spinner("value")
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let perHT = (pixHT/paHeight*100).toFixed(2)
			$("#ImgHTPer").spinner("value", perHT)
			
			$("#"+imgObj.ImgId).css({"height": perHT+"%"})
		})
		$("#ImgHTPer").on("spinstop", function() {
			
			let perHT = $("#ImgHTPer").spinner("value")
			let paHeight = $("#"+imgObj.ImgId).parent().height()
			let pixHT = perHT/100*paHeight
			$("#ImgHTPix").spinner("value", pixHT)
			
			$("#"+imgObj.ImgId).css({"height": perHT+"%"})
		})
	}
}











