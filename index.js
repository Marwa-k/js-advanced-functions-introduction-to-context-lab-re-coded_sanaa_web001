// Your code here
let createEmployeeRecord = function (data) {
    return {
        firstName: data[0],
        lastName: data[1],
        title: data[2],
        payPerHour: info[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployees(arr) {
  return arr.map(createEmployeeRecord);
}


function createEmployees(arr) {
  return arr.map(createEmployeeRecord);
}

function createTimeInEvent(obj, timestamp) {
  let DateTime = timestamp.split(" ");
  obj.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(DateTime[1]),
    date: DateTime[0]
  });
  return obj;
}

function createTimeOutEvent(employee, timestamp) {
  let DateTime = timestamp.split(" ");
  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(DateTime[1]),
    date: DateTime[0]
  });
  return employee;
}

function hoursWorkedOnDate(employee, date) {
  let timeIn = employee.timeInEvents.find(dayworked => dayworked.date === date);
  let timeOut = employee.timeOutEvents.find(
    dayworked => dayworked.date === date
  );
  return parseInt((timeOut.hour - timeIn.hour) / 100);
}

function wagesEarnedOnDate(employee, date) {
  return employee.payPerHour * hoursWorkedOnDate(employee, date);
}

function allWagesFor(employee) {
  let daysWorked = employee.timeInEvents.map(time => time.date);
  return daysWorked.reduce(function(acc, date) {
    return acc + wagesEarnedOnDate(employee, date);
  }, 0);
}

function calculatePayroll(arr) {
  return arr.reduce((acc, employee) => {
    return acc + allWagesFor(employee);
  }, 0);
}

function createEmployeeRecords(arr) {
  return arr.map(createEmployeeRecord);
}

function findEmployeebyFirstName(allEmployees, employee) {
  return allEmployees.find(emp => {
    return emp.firstName === employee;
  });
}



