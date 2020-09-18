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


let createTimeOutEvent = function (employeeRecord, dateStamp) {
    let [date, hour] = dateStamp.split(" ")
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })
    return employeeRecord
}



