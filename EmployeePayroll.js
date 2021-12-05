const NO_TIME = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArray = new Array();
let totalWage = 0;

function calcWagesForAMonth() {
  let totalEmpHrs = 0;
  let days=0;

  while(days<WORKING_DAYS && totalEmpHrs<=MAX_HRS_IN_MONTH){
    let empType = Math.floor(Math.random() * 3);
    totalEmpHrs+=getWorkingHrs(empType)
    empDailyWageArray.push(calculateWage(getWorkingHrs(empType)));
    days++;
  }

  let empWageForMonth = totalEmpHrs * WAGE_PER_HR;
  console.log(`    Total working days = ${days} 
    Total Hrs = ${totalEmpHrs}
    Total Wage for Month = ${empDailyWageArray.reduce((totalWage, dailyWage) => totalWage + dailyWage)}`)   //UC-7a Calc total Wage using reduce mehod

  return empWageForMonth;
}

function calculateWage(empHrs){
  return WAGE_PER_HR * empHrs
}

function getWorkingHrs(empType) {
  switch (empType) {
    case IS_PART_TIME: return PART_TIME_HRS;
    case IS_FULL_TIME: return FULL_TIME_HRS;
    default: return 0;
  }
}

calcWagesForAMonth();

//UC-7b show day along with daily wage using array map function
let day = 1;
let arrMap = empDailyWageArray.map(dailyWage => 'Day ' + day++ + ' Wage = ' + dailyWage);
console.log(arrMap);


//UC-7c Show Days when Full time wage of 160 were earned using filter function
let fullTimeWageArray = arrMap.filter(dailyWage => dailyWage.includes(160));
console.log('Days with full time wage: ')
console.log(fullTimeWageArray);

//UC-7d Find the first occurrence when Full Time Wage was earned using find function
console.log('First occurance of full time wage is Day: ' + (empDailyWageArray.findIndex(d => d==160) + 1));

//UC-7e Check if Every Element of Full Time Wage is truly holding Full time wage
console.log(fullTimeWageArray.every(dw => dw.includes(160)));

//UC-7f Check if any part time Wage
console.log('Check is there any part time wage: ' + arrMap.some(dw => dw.includes(80)));

//UC-7g Find number of days employee worked
let workingDays = empDailyWageArray.filter(dw => dw>0);
console.log("Number of days Employee worked = "+workingDays.length);

