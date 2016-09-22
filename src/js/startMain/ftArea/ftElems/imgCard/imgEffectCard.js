/*
	image attribute card obj function
	
*/

var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgCard = AWP.FTArea.FTElems.ImgCard || {}
AWP.FTArea.FTElems.ImgCard.ImgEffectCard = function(imgObj) {
	
	let pubObj = this
	let PriObj = {}
	
	pubObj.ImgInControl = false, pubObj.ImgInArray = ["0", "bounce", "swing", "0", "1"]
	pubObj.ImgOutControl = false, pubObj.ImgOutArray = ["0", "bounce", "swing", "0", "1"]
	PriObj.test = "";
	
	pubObj.showEffectCard = function() {
		
		$("#TheEffect").children().appendTo("#StoreArea")
		
		$("#ImgEffectCard").appendTo("#TheEffect")
		
		PriObj.RefreshEffectEvent()
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
	
	PriObj.StoreValue = function() {
		
		pubObj.ImgInControl = $("#ImgInEffect").prop("checked")
		pubObj.ImgInArray[0] = $("#ImgInAniDelay").val()
		pubObj.ImgInArray[1] = $("#ImgInAniName").val()
		pubObj.ImgInArray[2] = $("#ImgInAniSpeed").val()
		pubObj.ImgInArray[3] = $("#ImgInAniDuring").val()
		pubObj.ImgInArray[4] = $("#ImgInAniCount").val()

		pubObj.ImgOutControl = $("#ImgOutEffect").prop("checked")
		pubObj.ImgOutArray[0] = $("#ImgOutAniDelay").val()
		pubObj.ImgOutArray[1] = $("#ImgOutAniName").val()
		pubObj.ImgOutArray[2] = $("#ImgOutAniSpeed").val()
		pubObj.ImgOutArray[3] = $("#ImgOutAniDuring").val()
		pubObj.ImgOutArray[4] = $("#ImgOutAniCount").val()
	}
	
	PriObj.CleanPreview = function() {
		
		
	}
	
	PriObj.RefreshEffectEvent = function () {
		
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
console.log(pubObj.ImgInArray)
console.log(pubObj.ImgOutArray)
		})
		$("#ImgOutPreview").on("click", function() {
			
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







