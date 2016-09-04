/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.ImgElem = function(parentObj) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Type = "Img"
	let tes;
	
	(function() {
		let imgId = "img_1_1"
		let imgArray = new Array()
		while(parentObj.ImgIdArray.indexOf(imgId) !== -1) {
			imgArray = imgId.split("_")
			imgArray[2]++
			imgId = imgArray.join("_")
		}
	
		let imgText = '\n<div class="editImg" id="' + imgId + '" draggable="false">\n</div>\n'
		$("#EditPage").append(imgText)
		
		parentObj.ImgIdArray.push(imgId)
	}())
	
	pubObj.test = function() {
		
	}
}
