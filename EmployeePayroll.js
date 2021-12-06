const NO_TIME = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HRS = 4;
const FULL_TIME_HRS = 8;
const WAGE_PER_HR = 20;
const WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empHrsAndWageArrayObject = new Array();

function calcWagesForAMonth() {
  let totalEmpHrs = 0;
  let days = 1;

  while (days <= WORKING_DAYS && totalEmpHrs <= MAX_HRS_IN_MONTH) {
    let empType = Math.floor(Math.random() * 3);
    totalEmpHrs += getWorkingHrs(empType)
    empDailyWageArray.push(calculateWage(getWorkingHrs(empType)));
    empDailyWageMap.set(days, calculateWage(getWorkingHrs(empType)));
    empHrsAndWageArrayObject.push(
      {
        day: days,
        dailyHrs: getWorkingHrs(empType),
        dailyWage: calculateWage(getWorkingHrs(empType)),
        toString() {
          return "Day " + this.day + " Working Hours " + this.dailyHrs + " Wage Earned : " + this.dailyWage
        }
      });
    days++;
  }

  let empWageForMonth = totalEmpHrs * WAGE_PER_HR;
  console.log(`    Total working days = ${days - 1} 
    Total Hrs = ${totalEmpHrs}
    Total Wage for Month = ${empDailyWageArray.reduce((totalWage, dailyWage) => totalWage + dailyWage)}`)   //UC-7a Calc total Wage using reduce mehod

  return empWageForMonth;
}

function calculateWage(empHrs) {
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
console.log('First occurance of full time wage is Day: ' + (empDailyWageArray.findIndex(d => d == 160) + 1));

//UC-7e Check if Every Element of Full Time Wage is truly holding Full time wage
console.log(fullTimeWageArray.every(dw => dw.includes(160)));

//UC-7f Check if any part time Wage
console.log('Check is there any part time wage: ' + arrMap.some(dw => dw.includes(80)));

//UC-7g Find number of days employee worked
let workingDays = empDailyWageArray.filter(dw => dw > 0);
console.log("Number of days Employee worked = " + workingDays.length);

//UC-8 Map Functions
console.log(empDailyWageMap);
console.log("\nUC-8: Total Wage for a month = " + Array.from(empDailyWageMap.values()).reduce((totalWage, dailyWage) => totalWage + dailyWage));

//UC9 Working hours on a particular day
console.log('\nUC-9: Full working days = ' + (Array.from(empDailyWageMap.values()).filter(value => value == 160)).length);
console.log('Part working days = ' + (Array.from(empDailyWageMap.values()).filter(value => value == 80)).length);
console.log('Non working days = ' + (Array.from(empDailyWageMap.values()).filter(value => value == 0)).length);

//UC-10 Ability to store day, hrs and wage in a single object
console.log("\nUC10: Daily Hours Worked and Wage Earned : ")
console.log(empHrsAndWageArrayObject);

//UC-11a Calc total Wage and total hours worked
let totalWages = empHrsAndWageArrayObject
  .filter(hrsAndWageObj => hrsAndWageObj.dailyWage > 0)
  .reduce((totalWage, hrsAndWageObj) => totalWage += hrsAndWageObj.dailyWage, 0);

let totalHrs = empHrsAndWageArrayObject
  .filter(hrsAndWageObj => hrsAndWageObj.dailyWage > 0)
  .reduce((totalHrs, hrsAndWageObj) => totalHrs += hrsAndWageObj.dailyHrs, 0);

console.log('\nUC-11a Total hrs = ' + totalHrs + ' Total wages = ' + totalWages);

//UC-11b show the full workings days using foreach
console.log('\nUC-11b Show full working days: ')
empHrsAndWageArrayObject.filter(hrsAndWageObj => hrsAndWageObj.dailyHrs == 8)
  .forEach(hrsAndWageObj => console.log(hrsAndWageObj.toString()));

//UC-11c Show Part working days using Map by reducing to String Array
console.log('\nUC-11c Show part working days: ')
let partWorkingDaysStrArr = empHrsAndWageArrayObject
  .filter(hrsAndWageObj => hrsAndWageObj.dailyHrs == 4)
  .map(hrsAndWageObj => hrsAndWageObj.toString());

console.log(partWorkingDaysStrArr);

//UC-11d No working days only using Map function
let nonWorkingDaysStrArr = empHrsAndWageArrayObject
  .filter(hrsAndWageObj => hrsAndWageObj.dailyHrs == 0)
  .map(hrsAndWageObj => hrsAndWageObj.toString());

console.log(nonWorkingDaysStrArr);


//UC-11 Employee Payroll Data Class
class EmployeePayRollData {
  //Property
  id;
  name;
  salary;
  gender;
  startDate;

  //constructor
  constructor(id, name, salary, gender, startDate) {
    this.setid(id);
    this.setName(name);
    this.setSalary(salary);
    this.setGender(gender);
    this.setStartDate(startDate);
  }

  //getter and setter method
  getName() { return this.name }
  setName(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(name))
      this.name = name;
    else throw '\nName is incorrect\n';
  }
  setid(id) {
    if (id > 0)
      this.id = id;
    else throw '\nID is incorrect\n';
  }
  setSalary(salary) {
    if (salary > 0)
      this.salary = salary;
    else throw '\nSalary is not valid\n';
  }
  setGender(gender) {
    let genderRegex = RegExp('^[MF]{1}$');
    if (genderRegex.test(gender))
      this.gender = gender;
    else throw '\nGender is not valid\n';
  }
setStartDate(startDate) {
  let d = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const empDate = d == undefined ? 'undefined' :
    d.toLocaleDateString('en-US', options);
  let dateCurrent = new Date(empDate);
  let dateJoin = startDate;

  if(dateJoin<dateCurrent)
    this.startDate = startDate;
  else throw '\nDate cant be a future date\n'
}



  //to string method
  toString() {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const empDate = this.startDate == undefined ? 'undefined' :
      this.startDate.toLocaleDateString('en-US', options);
    return 'id=' + this.id + ', name=' + this.name + ', salary=' + this.salary +
      ', gender=' + this.gender + ', startDate= ' + empDate;
  }
}

let employeePayRollData = new EmployeePayRollData(1, 'Mark', 30000, 'M', new Date('12/6/2020'));
console.log(employeePayRollData);
try {
  employeePayRollData.setStartDate('12/6/2025');
  console.log(employeePayRollData);
}
catch (e) {
  console.error(e);
}
console.log(employeePayRollData.toString());
