console.log('square grid')

let grid;
let res = 40;
let width = 400;
let height = 200;
let rows = height/res;
let cols = width/res;

function make2DArray(){
	let arr = new Array(cols);
	for (let i=0; i<arr.length; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}

function setup(){
	createCanvas(width,height)
	grid = make2DArray();
	for (let i=0; i<cols; i++){
		for (let j=0; j<rows; j++){
			// grid[i][j] = Math.floor(Math.random()*2);
			grid[i][j]=floor(random(2));
		}	
	}
}

let startX, startY, endX, endY;
let start=false;
let end=false;

function draw() {
	background(0);
	for (let i=0; i<cols; i++){
		for (let j=0; j<rows; j++){
			let x = i*res;
			let y = j*res;
			if(grid[i][j]==1){
				fill(255,0,0);
				rect(x,y,res,res);
			}
			if(mouseX>x && mouseX<x+res && mouseIsPressed && mouseY>y && mouseY<y+res && !start){
				// console.log(x,y);
					startX=x;
					startY=y;
					start=true;
					console.log("Start: " + startX + ", " +startY);
					break;
			} 
			if(mouseX>x && mouseX<x+res && mouseIsPressed && mouseY>y && mouseY<y+res && start && !end){
				// console.log(x,y);
					endX=x;
					endY=y;
					end=true;
					console.log("End: " + endX + ", " + endY);
			}

			// 		}
					
			// 	}

			// }

		}	
	}
	if(start){
		fill(0,0,255);
		rect(startX,startY,res,res);
	}
	if(end){
		fill(170);
		rect(endX,endY,res,res);
	}
}
