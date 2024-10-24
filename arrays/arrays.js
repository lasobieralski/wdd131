//Activity 1 - Map
//const steps = ["one", "two", "three"];
//function listTemplate(step) {
//  return `<li>${step}</li>`;
//}
//const stepsHtml = steps.map(listTemplate);
//document.querySelector("#myList").innerHTML = stepsHtml.join();

//optional:
const steps = ["one", "two", "three"];

const listTemplate = (step) => `<li>${step}</li>`;
  

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

//Activity 2 - Map
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  }
  else if (grade === "B") {
    points = 3;
  }
  return points;
}
//const gpaPoints = grades.map(convertGradeToPoints);

//information given to me from chatGPT to have this load in DOM
//document.addEventListener("DOMContentLoaded", () =>{
  //const output = document.querySelector("#gpaOutput");
  //output.innerHTML = `GPA Points: ${gpaPoints.join(", ")}`;

//});

//Activity 3 - Reduce
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
}, 0);
const gpa = pointsTotal / gpaPoints.length;

document.addEventListener("DOMContentLoaded", () =>{
  const output = document.querySelector("#gpaOutput");
  const totalOutput = document.querySelector("#gpaTotal");
  output.innerHTML = `GPA Points: ${gpaPoints.join(", ")}`;
  totalOutput.innerHTML = `Total Points: ${pointsTotal} <br> GPA: ${gpa.toFixed(2)}`;
});

// two additional ways that actitity 3 could be written:
//const pointsTotal = gpaPoints.reduce ((total, item) => total + item);
//const gpa = pointsTotal / gpaPoints.length;

// OR
//const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

//activity 4 - Filter
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = fruits.filter(function (word){
  return word.length > 6;
});
document.querySelector("#shortWords").innerHTML = shortWords;

//alternate
//const shortWords = words.filter((word) => word.length <6);

//activity 5 - indexOf
const numbers = ["12", "34", "21", "54"];
const luckyNumber = "21";
let luckyIndex = numbers.indexOf(luckyNumber);
document.querySelector("#luckyNumber").innerHTML = luckyIndex;
