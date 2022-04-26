console.log('square grid')

let grid;
let res = 10;
let width = 800;
let height = 400;
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

function draw() {
	background(0);
	for (let i=0; i<cols; i++){
		for (let j=0; j<rows; j++){
			let x = i*res;
			let y = j*res;
			if(grid[i][j]==1){
				fill(255);
				rect(x,y,res,res);
			}
		}	
	}
}
// setup();
// draw();