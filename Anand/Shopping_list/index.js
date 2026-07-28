const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const list = document.getElementById("list");

const shoppingList = [];

function addItem() {
  const value = input.value.trim();
  if (!value) return;

  const isDuplicate = shoppingList.some(
    (item) => item.text.toLowerCase() === value.toLowerCase(),
  );

  if (isDuplicate) {
    alert("No duplicates!");
    input.value = "";
    return;
  }

  const timestamp = new Date();
  shoppingList.push({
    text: value,
    time: timestamp,
  });

  input.value = "";
  render();
}

addButton.addEventListener("click", addItem);

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addItem();
  }
});
function render() {
  let html = "";
  for (let [index, item] of shoppingList.entries()) {
    const timeString = item.time.toLocaleString();
    html += `
      <li class="list-item">
        <span>${item.text}</span>
        <div>
        <span class="timestamp">${timeString}</span>
        <button data-index="${index}" class="delete-btn">❌</button>
        </div>
      </li>
    `;
  }
  list.innerHTML = html;
}

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const index = Number(e.target.dataset.index);
    shoppingList.splice(index, 1);
    render();
  }
});
