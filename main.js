// var player1 = "x";
// var player2 = "y";
// var turn = 0;

// var box1;
// var box2;
// var box3;
// var box4;
// var box5;
// var box6;
// var box7;
// var box8;
// var box9;

// var getWinner;
// var winnerIsX = false;
// var winnerIsO = false;


function allowDrop(event) {
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}

 function drop(event) {
 	event.preventDefault();
 	var data = event.dataTransfer.getData("text");
 	event.target.appendChild(document.getElementById(data));
 }