/*
	UI function
	
*/
var AWP = AWP || {}
AWP.FTArea = AWP.FTArea || {}
AWP.FTArea.FTElems = AWP.FTArea.FTElems || {}
AWP.FTArea.FTElems.TextElem = function(parentObj) {
	
	let pubObj = this
	let PriObj = {}
	pubObj.Type = "Text"
	let tes;
	
	(function() {
		let textId = "text_1_1"
		let textArray = new Array()
		while(parentObj.TextIdArray.indexOf(textId) !== -1) {
			textArray = textId.split("_")
			textArray[2]++
			textId = textArray.join("_")
		}

		let textText = '\n<div class="editText" id="' + textId + '" draggable="false">\n</div>\n'
		$("#EditPage").append(textText)
		
		parentObj.TextIdArray.push(textId)
	}())
	
	pubObj.test = function() {
		
	}
}