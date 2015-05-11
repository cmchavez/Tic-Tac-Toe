var boxArray = document.getElementsByClassName("box");


document.getElementById("box1").addEventListener("click", function(){
	document.getElementById("box1").innerHTML = "X"
}); ///when writing document, we're going into hmtl to retrieve an element(getElementById) with an ID named "box1". then we add an event listener that waits for a "click" in order to carry out the function(). this function will take us back to html and references the id with the name "box1" and by inputing ".innerHTML" it will give it a value of X.

boxArray[1].addEventListener("click", function() {
	boxArray[1].innerHTML = "X"
});
//going back to the array, specifically to the second position in the array, and waiting for the "click" for the function to run.


document.getElementById("box3").addEventListener("click", function() {
	document.getElementById("box3").innerHTML = "X"

});

document.getElementById("box4").addEventListener("click", function() {
	document.getElementById("box4").innerHTML = "X"
});



// var playerOne = true;

// playerTurn1();

// function playerTurn1() {
// 	if (playerOne == true) {
// 		document.getElementById("box1").addEventListener("click", function() {
// 		document.getElementById("box1").innerHTML = "X";
// 		console.log("We put an X");
// 		playerOne = false;
// 		console.log("We made playerOne a false.")
// 		})
// 		}
// 	else {
// 		document.getElementById("box1").addEventListener("click", function() {
// 		document.getElementById("box1").innerHTML = "O"})
// 	}
// }



// function playerTurn2() {
// 	if (playerOne == false) {
// 		document.getElementById("box2").addEventListener("click", function() {
// 		document.getElementById("box2").innerHTML = "O"});
// 		console.log("The event lisenter is running too early.")
// 		playerOne = true;
// 		}
// 	else {
// 		document.getElementById("box2").addEventListener("click", function() {
// 		document.getElementById("box2").innerHTML = "X"})
// 	}
// }


