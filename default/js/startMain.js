/*
	UI function
	
*/

var VIP = VIP || {}

VIP.ScoreInfo = {
	
    name:"test",
	LevelOneTime: 0,
	LevelOneStep: 0,
	
	LevelTwoTime: 0,
	LevelTwoStep: 0,
	
	LevelThreeTime: 0,
	LevelThreeRedo: 0,
	LevelThreeTrue: 0,
	
    LevelAllTime: 0,
	
	ShowOnce: 1
}

VIP.StartMain = function() {
	
	var pubObj = this
	
	pubObj.playVideo = function(idArray) {
		for(var i = 0; i < idArray.length; i++) {
			$("#"+idArray[i]).get(0).play();
		}
	};
	
	pubObj.stopVideo = function(idArray) {
		for(var i = 0; i < idArray.length; i++) {
			$("#"+idArray[i]).get(0).pause();
			$("#"+idArray[i]).get(0).currentTime = 0;
		}
	};
	
	pubObj.hideIdDelay = function(idArray, delay) {
		
		var delay = delay||0
		setTimeout(function(){
			for(var i = 0; i < idArray.length; i++) {
				$("#"+idArray[i]).css("display", "none")
			}
		}, delay)
	}
	
	pubObj.showIdDelay = function(idArray, delay) {
		
		var delay = delay||0
		setTimeout(function(){
			for(var i = 0; i < idArray.length; i++) {
				$("#"+idArray[i]).css("display", "block")
			}
		}, delay)
	}
	
	
	var myDispFunc = new VIP.DisplayFunc(pubObj)
	var myCtrlFunc = new VIP.ControlFunc(myDispFunc, pubObj)
}

VIP.StartMain()





