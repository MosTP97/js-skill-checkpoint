// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
userTaskList.splice(4,0,{id: 5, task: "Walk the dog" })
userTaskList.splice(3,1,{id: 4, task: "Go to the gym"})
userTaskList.splice(userTaskList.length-1)

console.log(userTaskList[userTaskList.length-1])