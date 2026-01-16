const inputBox = document.querySelector("#input-box");
const listCountainer = document.querySelector("#list-container");

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You Must Write something..");
    return;
  } else {
    let list = document.createElement("li");
    list.innerHTML = inputBox.value;
    listCountainer.appendChild(list);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.setAttribute("title", "Delete task");
    list.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listCountainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listCountainer.innerHTML);
}

function showTask() {
  listCountainer.innerHTML = localStorage.getItem("data");
}
showTask();
