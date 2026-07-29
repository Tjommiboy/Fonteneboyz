let people = [];
let count = 0;
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let personName = document.getElementById("person-name");
let entering = document.getElementById("entering");
let total = 0;

entering.addEventListener("click", function () {
  people.push(personName.value);
  personName.value = "";
  console.log(people);
});

function increment() {
  count = count + 1;
  document.getElementById("count-el").innerHTML = count;
  document.getElementById("decrement").disabled = false;
}

function decrement() {
  if (count > 0) {
    count = count - 1;
    document.getElementById("count-el").innerHTML = count;
  }
  if (count === 0) {
    document.getElementById("decrement").disabled = true;
  }
}

function save() {
  let storage = count + " - ";
  total += count;
  saveEl.textContent += storage;
  document.getElementById("count-el").innerHTML = 0;
  totalEl.textContent = "Folk på huset totalt :" + total;

  if (total > 50) {
    alert("🚨 CRITICAL WARNING 🚨\nThe place is reaching maximum capacity!");
  } else if (total > 25) {
    alert("⚠️ WARNING ⚠️\nNå begynner det å koke fint her:)");
  } else if (total > 18) {
    alert("👥 Notice: Nå begynner det å bli god stemning på huset!");
  }
  count = 0;
  document.getElementById("decrement").disabled = true;
}

function leaving() {
  if (total > 0) {
    total = total - 1;
    totalEl.textContent = "Folk på huset totalt :" + total;
  }
}
