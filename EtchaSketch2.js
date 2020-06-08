let square = document.getElementsByClassName("square")
let clearGrid = document.getElementById("clear-grid")
let container = document.getElementById("container")
let resizeGrid = document.getElementById("resize-grid")
let randomColor = document.getElementById("random-color")
let blackId = document.getElementById("black")
let totalSquares = 16 * 16

resizeGrid.addEventListener("click",() => {
  let numOfSqu = Number(prompt("Change the grid size 1-64"))
  totalSquares = numOfSqu * numOfSqu
  while (container.firstChild) {
    container.removeChild(container.firstChild)
  }
  addingSquares();
  blackColor()
  container.style.setProperty('grid-template-columns', 'repeat(' + numOfSqu + ', 1fr)');
  container.style.setProperty('grid-template-rows', 'repeat(' + numOfSqu + ', 1fr)');
})

clearGrid.addEventListener("click", clearSquares)

function clearSquares() {
  for(let i = 0; i < square.length; i++) {
      square[i].style.backgroundColor = ""
  }
}

function addingSquares(){
  for(let i = 0; i < totalSquares; i++){
    let container = document.getElementById("container")
    let div = document.createElement("div")
    div.className = "square"
    container.appendChild(div)
  }
}
addingSquares();

blackId.addEventListener("click", blackColor)

function blackColor(){
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function (event) {
    event.target.style.backgroundColor = "black"
    })
  }
}


randomColor.addEventListener("click",randomColorFun)

function randomColorFun() {
  for(let i = 0; i < square.length; i++) {
    square[i].addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = anyColor()
    })
  }
}

function anyColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let rainBow = "rgb(" + r + "," + g + "," + b + ")";
  return rainBow
}
 



