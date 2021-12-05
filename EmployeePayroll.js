const NO_TIME = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const WORKING_DAYS = 20;

function calcWagesForAMonth(WORKING_DAYS) {
  let empHrs = 0;
  let d=0;
  while(d<WORKING_DAYS){
    let empType = Math.floor(Math.random() * 3);
    empHrs+=getWorkingHrs(empType);
    d++;
  }
  let empWageForMonth = empHrs * WAGE_PER_HR;
  return empWageForMonth;
}

function getWorkingHrs(empType) {
  switch (empType) {
    case IS_PART_TIME: return PART_TIME_HRS;
    case IS_FULL_TIME: return FULL_TIME_HRS;
    default: return 0;
  }
}

console.log("Total Wage per a month : " + calcWagesForAMonth(WORKING_DAYS));
