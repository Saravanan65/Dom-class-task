
let resulting = document.getElementById("timeoutCounter")
let timeoutCounter = 11;
function countDown() {
//   console.log (timeoutCounter);
  timeoutCounter--;
  const id = setTimeout(countDown, 1000);
  if (timeoutCounter == 0) {
    // console.log ("Time out");
    clearTimeout(id);
    
  }
  resulting.innerHTML= timeoutCounter
 
}
countDown();