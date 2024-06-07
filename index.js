let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

//  add to Home scoreboard
function homeOne(){
  let plusOne = parseInt(homeScore.textContent)
  let increaseOne = 1
  if(plusOne >= 0){
    let result = plusOne + increaseOne
    homeScore.textContent =result
  }
}
function homeTwo(){
  let plusTwo = parseInt(homeScore.textContent)
  let increaseTwo = 2
  if (plusTwo >= 0){
   let  result = plusTwo + increaseTwo
   homeScore.textContent =result
  }
}
function homeThree(){
  let plusThree = parseInt(homeScore.textContent)
  let increaseThree = 3
  if(plusThree >= 0){
    let result = plusThree + increaseThree
    homeScore.textContent = result
  }
}
// add to Away scoreboard
function awayOne(){
  let plusOne = parseInt(awayScore.textContent)
  let increaseOne = 1
  if(plusOne >= 0){
    let result = plusOne + increaseOne
    awayScore.textContent =result
  }
}
function awayTwo(){
  let plusTwo = parseInt(awayScore.textContent)
  let increaseTwo = 2
  if (plusTwo >= 0){
   let  result = plusTwo + increaseTwo 
   awayScore.textContent =result
  }
}
function awayThree(){
  let plusThree = parseInt(awayScore.textContent)
  let increaseThree = 3
  if(plusThree >= 0){
    let result = plusThree + increaseThree
    awayScore.textContent = result
  }
}

// reset button
function reset(){
  homeScore.textContent = 0
  awayScore.textContent = 0
}