/*
	UI function
	
*/
const fs = require("fs")
const path = require("path")
const process = require("process")
const remote = require('electron').remote
const dialog = remote.dialog

var AWP = AWP || {}
// AWP.SelePage = "test"
AWP.StartMain = function() {
	
	let myDispFunc = new AWP.DisplayFunc()
	
	let myFlowArea = new AWP.FlowArea()
	
	let myMenuBar = new AWP.MenuBar(myFlowArea)
	
// $(".lseleTD").on("change", function() {console.log("OLOL")})
	
	
}
