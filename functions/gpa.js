function getGrades(inputSelector) {
  let grades = document.querySelector(inputSelector).value;
  const gradesArray = grades.split(",");
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades);
  return cleanGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === "A") { points = 4; } 
  else if (grade === "B") { points = 3; } 
  else if (grade === "C") { points = 2; } 
  else if (grade === "D") { points = 1; }
  return points;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  // calculates the GPA
  // return the GPA
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  
  const gpa = gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
  
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  // calculate the gpa from the grades entered
  // display the gpa
  const grades = getGrades("#grades");
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades); 
  // display the gpa
  outputGpa(gpa, "#output");
}
document.querySelector("#submitButton").addEventListener("click", clickHandler);

