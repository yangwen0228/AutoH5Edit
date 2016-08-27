/*
	editArea_editPage.js function
	
*/

// let EAEditPage = function(){
	
	
// }

// let editPage = new EAEditPage()

let editPage = new function(){
	
	let selfObj = this
	
	selfObj.setImgEditable = function(imgId){
		
		if( GSeleItem != -1 ){
			
		}
		
		GSeleItem = $("#"+imgId)
		
		GSeleItem.css("cursor", "move")
		GSeleItem.attr("draggable", "false")
		let eventDX, eventDY, startDX, startDY, dragCt
		GSeleItem.on("mousedown", function(event){
			eventDX = event.clientX
			eventDY = event.clientY
			startDX = parseInt(GSeleItem.css("left"))
			startDY = parseInt(GSeleItem.css("top"))
			dragCt = true 
			if(this.setCapture){this.setCapture()}
		}).on("mouseup", function(){
			dragCt = false 
			if(this.releaseCapture){this.releaseCapture()}
		})
		
		$(document).on("mousemove", function(event){
			if(dragCt){
				let lPos = startDX + (event.clientX - eventDX)
				let tPos = startDY + (event.clientY - eventDY)
				GSeleItem.css({left : lPos, top : tPos,})
			}
		}).on("mouseup", function(){
			dragCt = false 
		})
		
		
		let pointsClass = ['tl', 'tc', 'tr', 'mr', 'br', 'bc', 'bl', 'ml'];
		let resizePoints = '';
		for(let i=0; i<pointsClass.length; i++){
			resizePoints += '<span class="resizepoint '+pointsClass[i]+'"></span>';
		}
		GSeleItem.append(resizePoints)
		let dpElements = GSeleItem.find('.resizepoint')
		let currentL, currentT, currentW, currentH, eventRX, eventRY, resizeCt
		dpElements.on('mousedown', function(event){
			eventRX = event.clientX
			eventRY = event.clientY
			currentW = GSeleItem.width()
			currentH = GSeleItem.height()
			currentL = GSeleItem.position().left 
			currentT = GSeleItem.position().top 
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

			GSeleItem.css({
				width : w + 'px', 
				height : h + 'px',
				left : l + 'px',
				top : t + 'px'
			})
		}).on('mouseup', function(){
			resizeCt = false 
		})
		
		
		let rotatePoint = '<span class="rotatePoint"></span>'
		GSeleItem.append(rotatePoint)
		let rtElem = GSeleItem.children('.rotatePoint')
		let oldX, oldY, centerX, centerY, rotateCt
		rtElem.on('mousedown', function(event){
			oldX = event.clientX
			oldY = event.clientY
			centerX = GSeleItem.offset().left + GSeleItem.width()/2
			centerY = GSeleItem.offset().top + GSeleItem.height()/2 
			rotateCt = true
			if(this.setCapture){this.setCapture()}
		}).on('mouseup', function(event){
			rotateCt = false 
			if(this.releaseCapture){this.releaseCapture()}
		})
		$(document).on('mousemove', function(event){
			if(!rotateCt)return 
			let newX = event.clientX
			let newY = event.clientY
			let rtAngle = 180 * ( Math.atan(Math.abs(oldX - centerX)/Math.abs(oldY - centerY)) - Math.atan(Math.abs(newX - centerX)/Math.abs(newY - centerX)))
			// let rtAngle = 180 * ( Math.PI - Math.atan(Math.abs(oldX - centerX)/Math.abs(oldY - centerY)) - Math.atan(Math.abs(newX - centerX)/Math.abs(newY - centerX)))
// console.log(oldX.toString() + ' ' + oldY.toString() + ' ' + centerX.toString() + ' ' + centerY.toString() + ' ' + newX.toString() + ' ' + newY.toString() )
// console.log(Math.abs(oldX - centerX)/Math.abs(oldY - centerY))
// console.log(Math.abs(newX - centerX)/Math.abs(newY - centerX))
// console.log(rtAngle)
			
			GSeleItem.css({
				'transform' : 'rotate(' + rtAngle + 'deg)',
				'-ms-transform' : 'rotate(' + rtAngle + 'deg)',
				'-webkit-transform' : 'rotate(' + rtAngle + 'deg)',
			})
		}).on('mouseup', function(){
			rotateCt = false 
		})
	}
	
}











