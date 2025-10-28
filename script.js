let addTask = document.getElementById("addTask");
let localStorageArray = JSON.parse(localStorage.getItem("array")) || []; //JSON to JS object
let taskItems = document.getElementById("taskItems");
let title = document.getElementById("title");
let priorityDropdown = document.getElementById("priorityDropdown");
let deadline = document.getElementById("deadline");

let len = localStorageArray.length;
let id = localStorageArray.length > 0 ? localStorageArray[len - 1][id] : 0;

addTask.onclick = function () {
  // len = localStorageArray.length;
  // id = len>0 ? localStorageArray[len-1][id] : 0;

  // id = id + 1;
  let taskItem = {
    // id: id,
    itemTitle: title.value,
    itemPriorityDropdown: priorityDropdown.value,
    itemDeadline: deadline.value,
  };

  localStorageArray.push(taskItem);
  console.log(localStorageArray);
  localStorage.setItem("array", JSON.stringify(localStorageArray)); //to JSON

  taskItems.textContent = "";

  updateDataOnUI();
  title.value = "";
  deadline.value = "";
};

function updateDataOnUI() {
  for (let index of localStorageArray) {
    let taskCard = document.createElement("div");
    taskCard.classList.add(
      "bg-[white]",
      "p-5",
      "rounded-[5px]",
      "w-[50%]",
      "m-[auto]",
      "mt-3",
      "mb-3"
    );
    taskItems.appendChild(taskCard);

    let cardDetails = document.createElement("div");
    cardDetails.classList.add("flex", "flex-col", "justify-center");
    let taskTitle = document.createElement("h1");
    taskTitle.classList.add("mb-2", "font-bold", "text-[15px]");
    taskTitle.textContent = index.itemTitle;
    console.log(index.title);
    cardDetails.appendChild(taskTitle);

    let taskInfo = document.createElement("div");
    let priority = document.createElement("span");
    let date = document.createElement("span");
    // let status = document.createElement("span");

    priority.textContent = index.itemPriorityDropdown;
    console.log(index.priorityDropdown);
    priority.classList.add(
      "bg-orange-100",
      "p-[2px]",
      "rounded-[5px]",
      "text-[red]",
      "text-[12px]",
      "text-[bold]"
    );
    date.textContent = index.itemDeadline;
    console.log(index.deadline);
    date.classList.add("text-[grey]", "text-[12px]");

    taskInfo.classList.add("flex", "justify-between", "w-[200px]");
    taskInfo.appendChild(priority);
    taskInfo.appendChild(date);

    cardDetails.appendChild(taskInfo);
    taskCard.appendChild(cardDetails);
    taskItems.appendChild(taskCard);
  }
}
updateDataOnUI();
