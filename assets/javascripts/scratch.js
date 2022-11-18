// establish variables
let toDoArray = [];
let toDoObject = { toDoList: toDoArray };

// create iterate function to evaluate and build list
function buildList() {
  toDoArray.forEach(function (item, index) {
    toDoObject[index] = item;
    return toDoObject;
  });
}

function addItem(item) {
  toDoArray.push(item);
  buildList();
  return toDoObject;
}

// function removeItem(item) {
//   let findItem = toDoArray.indexOf(item);
//   toDoArray[findItem].pop();
//   buildList;
//   return toDoObject;
// }

addItem("Workout");

addItem("Clean");

let findItem = toDoArray.indexOf("Workout");

console.log("To Do: " + toDoObject.toDoList);

console.log(toDoArray[0]);
