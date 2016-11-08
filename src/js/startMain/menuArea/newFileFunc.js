/*
	MenuBar UI function
	
*/

var AWP = AWP || {}
AWP.MenuArea = AWP.MenuArea || {}
AWP.MenuArea.NewFileFunc = function(flowObj) {
	
	let pubObj = this
	
	
	let BindNewFile = function() {
		
		$("#NewFile").off("click")
		$("#NewFile").on("click",function() {
// console.log(1234)
			flowObj.clear()
		})
	}
	
	let SaveBeforeNew = function() {
//show save dialog
		
	}
	
	
	
	
	
	
	
	;(function() {
		BindNewFile()
	}())
}





