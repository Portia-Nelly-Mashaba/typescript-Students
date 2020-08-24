// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let stud = [
  {studentName: "Portia", studentSurname: "Mashaba", Age: 28},
  {studentName: "Xolisile", studentSurname: "Ubisi", Age: 21},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 14},
  {studentName: "Khuliso", studentSurname: "Smith", Age: 30}, 
  {studentName: "Thembi", studentSurname: "Maseko", Age: 48},
  {studentName: "Faith", studentSurname: "Letswalo", Age: 28},
  {studentName: "Palesa", studentSurname: "Msiza", Age: 21},
  {studentName: "Lerato", studentSurname: "Smith", Age: 14},
  {studentName: "Lethabo", studentSurname: "Bongo", Age: 30}, 
  {studentName: "Thabo", studentSurname: "Maseko", Age: 50}
];
let maxAmount = stud.reduce((max, studs) => 
    studs.Age > max.Age ? studs : max , {Age:0}); 
console.log( maxAmount.studentName + " " + maxAmount.studentSurname);