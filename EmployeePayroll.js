const NO_TIME = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;

let empType = Math.floor(Math.random() * 3);

function getWorkingHrs(empType) {
  switch (empType) {
    case IS_PART_TIME: return PART_TIME_HRS;
    case IS_FULL_TIME: return FULL_TIME_HRS;
    default: return 0;
  }
}

let empHrs = getWorkingHrs(empType);
let empWage = empHrs * WAGE_PER_HR;
console.log("Emp Wage: " + empWage);

