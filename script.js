var count = 0;

var counterEl = document.getElementById("counter");
var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");

function updateDisplay() {
  counterEl.innerHTML = count;

  if (count === 0) {
    counterEl.className = "counter red";
  } else {
    counterEl.className = "counter blue";
  }
}

incrementBtn.onclick = function () {
  count = count + 1;
  updateDisplay();
};

decrementBtn.onclick = function () {
  if (count > 0) {
    count = count - 1;
    updateDisplay();
  }
};
