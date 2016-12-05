
var namespace = "http://www.w3.org/2000/svg"

var turn = "player1"
function ticTac() {
  if (turn == "player1") {
    alert("It's player 1's turn!")
  var canvas = document.getElementById("game-board")
  var circl = document.createElementNS(namespace,"circle")
  circl.setAttribute("cx", 75)
  circl.setAttribute("cy", 75)
  circl.setAttribute("r", 20)
  circl.setAttribute("fill", "white")
  circl.setAttribute("stroke", "purple")
  circl.setAttribute("stroke-width", 5)
  canvas.appendChild(circl)
  turn = "player2"
} else if (turn == "player2") {
  alert("It's player 2's turn!")
 var canvas = document.getElementById("game-board")
 var circ = document.createElementNS(namespace, "circle")
 circ.setAttribute("cx", 75)
 circ.setAttribute("cy", 75)
 circ.setAttribute("r", 20)
 circ.setAttribute("stroke", "black")
 circ.setAttribute("stroke-width", 5)
 circ.setAttribute("fill", "skyblue")
 canvas.appendChild(circ)
 turn = "player1"
 }
}

function topMiddle() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 125)
    circle.setAttribute("cy", 75)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 125)
    circ.setAttribute("cy", 75)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
  }
}

function topRight() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 175)
    circle.setAttribute("cy", 75)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 175)
    circ.setAttribute("cy", 75)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
  }
}

function middleLeft() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 75)
    circle.setAttribute("cy", 125)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 75)
    circ.setAttribute("cy", 125)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}

function center() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 125)
    circle.setAttribute("cy", 125)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 125)
    circ.setAttribute("cy", 125)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}

function middleRight() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 175)
    circle.setAttribute("cy", 125)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 175)
    circ.setAttribute("cy", 125)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}

function bottomLeft() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 75)
    circle.setAttribute("cy", 175)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 75)
    circ.setAttribute("cy", 175)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}

function bottomMiddle() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 125)
    circle.setAttribute("cy", 175)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
      alert("It's player 2's turn!")
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 125)
    circ.setAttribute("cy", 175)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}

function bottomRight() {
  var canvas = document.getElementById("game-board")
  if (turn == "player1") {
    alert("It's player 1's turn!")
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx", 175)
    circle.setAttribute("cy", 175)
    circle.setAttribute("r", 20)
    circle.setAttribute("fill", "white")
    circle.setAttribute("stroke", "purple")
    circle.setAttribute("stroke-width", 5)
    canvas.appendChild(circle)
    turn = "player2"
  } else if (turn == "player2") {
    var circ = document.createElementNS(namespace, "circle")
    circ.setAttribute("cx", 175)
    circ.setAttribute("cy", 175)
    circ.setAttribute("r", 20)
    circ.setAttribute("stroke", "black")
    circ.setAttribute("stroke-width", 5)
    circ.setAttribute("fill", "skyblue")
    canvas.appendChild(circ)
    turn = "player1"
 }
}
