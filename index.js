console.log('connected');


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("count-label");
let count = 0;

decreaseBtn.onclick = () => {
  count --;
  countLabel.innerText = count;
}
  
increaseBtn.onclick = () => {
  count ++;
  countLabel.innerText = count;
}


resetBtn.onclick = () => {
  count = 0;
  countLabel.innerText = count;
}

