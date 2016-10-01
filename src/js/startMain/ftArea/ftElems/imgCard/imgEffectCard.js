/*
	image attribute card obj function
	
*/

var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgCard = AWP.FTArea.FTElems.ImgCard || {}
AWP.FTArea.FTElems.ImgCard.ImgEffectCard = function(imgObj) {
	
	let pubObj = this
	
	pubObj.ImgInControl = false, pubObj.ImgInArray = ["0", "bounce", "swing", "0", "1"]
	pubObj.ImgOutControl = false, pubObj.ImgOutArray = ["0", "bounce", "swing", "0", "1"]
	
	let OriginClass, OriginStyle
	let HasAnimation = false
	
	pubObj.showEffectCard = function() {
		
		$("#TheEffect").children().appendTo("#StoreArea")
		
		$("#ImgEffectCard").appendTo("#TheEffect")
		
		RefreshEffectEvent()
	}
	
	pubObj.hideEffectCard = function() {
		
		$("#TheEffect").children().appendTo("#StoreArea")
	}
	
	pubObj.setValueInOut = function() {
		
		$("#ImgInEffect").prop("checked", pubObj.ImgInControl)
		$("#ImgInAniDelay").val(pubObj.ImgInArray[0])
		$("#ImgInAniName").val(pubObj.ImgInArray[1])
		$("#ImgInAniSpeed").val(pubObj.ImgInArray[2])
		$("#ImgInAniDuring").val(pubObj.ImgInArray[3])
		$("#ImgInAniCount").val(pubObj.ImgInArray[4])
// console.log(pubObj.ImgInArray[0])
		$("#ImgOutEffect").prop("checked", pubObj.ImgOutControl)
		$("#ImgOutAniDelay").val(pubObj.ImgOutArray[0])
		$("#ImgOutAniName").val(pubObj.ImgOutArray[1])
		$("#ImgOutAniSpeed").val(pubObj.ImgOutArray[2])
		$("#ImgOutAniDuring").val(pubObj.ImgOutArray[3])
		$("#ImgOutAniCount").val(pubObj.ImgOutArray[4])
	}
	
	pubObj.stopPreview = function(type) {
		
		if(HasAnimation) {
			$("#"+imgObj.ImgId).attr("class", OriginClass)
			$("#"+imgObj.ImgId).attr("style", OriginStyle)
			
			HasAnimation = false
		}
	}
	
	let StartPreviewIn = function() {
		
		if(!pubObj.ImgInControl) { return }
		
		OriginClass = $("#"+imgObj.ImgId).attr("class")
		
		let classNew = OriginClass + " " + pubObj.ImgInArray[1]
		
		OriginStyle = $("#"+imgObj.ImgId).attr("style")
// console.log(OriginStyle)
		let styleNew = OriginStyle + "animation-duration:" + (parseInt(pubObj.ImgInArray[3])/1000+'s') + "; "
		styleNew += "-webkit-animation-duration:" + (parseInt(pubObj.ImgInArray[3])/1000+'s') + "; "
		styleNew += "animation-delay:" + (parseInt(pubObj.ImgInArray[0])/1000+'s') + "; "
		styleNew += "-webkit-animation-delay:" + (parseInt(pubObj.ImgInArray[0])/1000+'s') + "; "
		styleNew += "transition-timing-function:" + pubObj.ImgInArray[2] + "; "
		styleNew += "-webkit-transition-timing-function:" + pubObj.ImgInArray[2] + "; "
		styleNew += "animation-iteration-count:" + pubObj.ImgInArray[4] + "; "
		styleNew += "-webkit-animation-iteration-count:" + pubObj.ImgInArray[4] + "; "
		
		$("#"+imgObj.ImgId).attr("class", classNew)
		$("#"+imgObj.ImgId).attr("style", styleNew)
		
		HasAnimation = true
	}
	
	let StartPreviewOut = function() {
		if(!pubObj.ImgOutControl) { return }
		
		OriginClass = $("#"+imgObj.ImgId).attr("class")
		
		let classNew = OriginClass + " " + pubObj.ImgOutArray[1]
		
		OriginStyle = $("#"+imgObj.ImgId).attr("style")
// console.log(OriginStyle)
		let styleNew = OriginStyle + "animation-duration:" + (parseInt(pubObj.ImgOutArray[3])/1000+'s') + "; "
		styleNew += "-webkit-animation-duration:" + (parseInt(pubObj.ImgOutArray[3])/1000+'s') + "; "
		styleNew += "animation-delay:" + (parseInt(pubObj.ImgOutArray[0])/1000+'s') + "; "
		styleNew += "-webkit-animation-delay:" + (parseInt(pubObj.ImgOutArray[0])/1000+'s') + "; "
		styleNew += "transition-timing-function:" + pubObj.ImgOutArray[2] + "; "
		styleNew += "-webkit-transition-timing-function:" + pubObj.ImgOutArray[2] + "; "
		styleNew += "animation-iteration-count:" + pubObj.ImgOutArray[4] + "; "
		styleNew += "-webkit-animation-iteration-count:" + pubObj.ImgOutArray[4] + "; "
		
		$("#"+imgObj.ImgId).attr("class", classNew)
		$("#"+imgObj.ImgId).attr("style", styleNew)
		
		HasAnimation = true
	}
	
	let RefreshEffectEvent = function () {
		
		$("#ImgInPreview").off("click")
		$("#ImgInEffect").off("change")
		$("#ImgInAniDelay").off("change")
		$("#ImgInAniName").off("change")
		$("#ImgInAniSpeed").off("change")
		$("#ImgInAniDuring").off("change")
		$("#ImgInAniCount").off("change")
		
		$("#ImgOutPreview").off("click")
		$("#ImgOutEffect").off("change")
		$("#ImgOutAniDelay").off("change")
		$("#ImgOutAniName").off("change")
		$("#ImgOutAniSpeed").off("change")
		$("#ImgOutAniDuring").off("change")
		$("#ImgOutAniCount").off("change")
		
		$("#ImgInPreview").on("click", function() {
// console.log(pubObj.ImgInArray)
// console.log(pubObj.ImgOutArray)
			pubObj.stopPreview()
			StartPreviewIn()
		})
		$("#ImgOutPreview").on("click", function() {
// console.log(1233456)
			pubObj.stopPreview()
			StartPreviewOut()
		})
		
		$("#ImgInEffect").on("change", function() {
			pubObj.ImgInControl = $("#ImgInEffect").prop("checked")
		})
		$("#ImgInAniDelay").on("change", function() {
			pubObj.ImgInArray[0] = $("#ImgInAniDelay").val()
		})
		$("#ImgInAniName").on("change", function() {
			pubObj.ImgInArray[1] = $("#ImgInAniName").val()
		})
		$("#ImgInAniSpeed").on("change", function() {
			pubObj.ImgInArray[2] = $("#ImgInAniSpeed").val()
		})
		$("#ImgInAniDuring").on("change", function() {
			pubObj.ImgInArray[3] = $("#ImgInAniDuring").val()
		})
		$("#ImgInAniCount").on("change", function() {
			pubObj.ImgInArray[4] = $("#ImgInAniCount").val()
		})
// console.log(pubObj.ImgInArray[0])
		$("#ImgOutEffect").on("change", function() {
			pubObj.ImgOutControl = $("#ImgOutEffect").prop("checked")
		})
		$("#ImgOutAniDelay").on("change", function() {
			pubObj.ImgOutArray[0] = $("#ImgOutAniDelay").val()
		})
		$("#ImgOutAniName").on("change", function() {
			pubObj.ImgOutArray[1] = $("#ImgOutAniName").val()
		})
		$("#ImgOutAniSpeed").on("change", function() {
			pubObj.ImgOutArray[2] = $("#ImgOutAniSpeed").val()
		})
		$("#ImgOutAniDuring").on("change", function() {
			pubObj.ImgOutArray[3] = $("#ImgOutAniDuring").val()
		})
		$("#ImgOutAniCount").on("change", function() {
			pubObj.ImgOutArray[4] = $("#ImgOutAniCount").val()
		})
	}
}







