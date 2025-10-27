let addTask = document.getElementById("addTask");
let title = document.getElementById("title");
let priorityDropdown = document.getElementById("priorityDropdown");
let deadline = document.getElementById("deadline");
let localStorageArray = JSON.parse(localStorage.getItem("array")) || []; //JSON to JS object
let taskItems = document.getElementById("taskItems");
let deleteBtn = document.createElement("button");

let id = 0;

addTask.onclick = function () {
  id = id + 1;
  let taskItem = {
    id: id,
    title: title.value,
    priorityDropdown: priorityDropdown.value,
    deadline: deadline.value,
  };

  deleteBtn.textContent = id;
  deleteBtn.classList.add(
    "bg-orange-100",
    "text-[red]",
    "p-2",
    "rounded-[5px]"
  );

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
  taskTitle.textContent = title.value;
  cardDetails.appendChild(taskTitle);

  let taskInfo = document.createElement("div");
  let priority = document.createElement("span");
  let date = document.createElement("span");
  let status = document.createElement("span");

  priority.textContent = priorityDropdown.value;
  priority.classList.add(
    "bg-orange-100",
    "p-[2px]",
    "rounded-[5px]",
    "text-[red]",
    "text-[12px]",
    "text-[bold]"
  );
  date.textContent = deadline.value;
  date.classList.add("text-[grey]", "text-[12px]");

  taskInfo.classList.add("flex", "justify-between");
  taskInfo.appendChild(priority);
  taskInfo.appendChild(date);

  cardDetails.appendChild(taskInfo);
  taskCard.appendChild(cardDetails);
  taskCard.append(deleteBtn);
  taskItems.appendChild(taskCard);

  localStorageArray.push(taskItem);
  console.log(localStorageArray);
  localStorage.setItem("array", JSON.stringify(localStorageArray)); //to JSON
};

deleteBtn.onclick = function (e) {
  console.log(e);
  let array = JSON.parse(localStorage.getItem("array"));
  for (let index in array) {
    if (array[index][id] === id) {
      let updatedArray = array.filter((index) => index.id !== id);
      localStorage.setItem("array", JSON.stringify(updatedArray));
    }
  }
};
