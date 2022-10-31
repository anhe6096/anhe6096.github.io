employees={
    "Emp1":
     {
        "firstname": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseeligible": true,
        "wfh": true
     },
    "Emp2":
      {
        "firstname": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseeligible": true,
        "wfh": false,
      },
    "Emp3":
      {
        "firstname": "Bill",
        "department": "HR",
        "designation": "Executive",
        "salary": 21200,
        "raiseeligible": false,
        "wfh": false,
      },
    "Emp4":
      {
        "firstname": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raiseeligible": false,
        "wfh": true,
      },
    },

companies={
    "Comp1":
    {
        "companyName": "Tech Stars",
        "website": "www.techstars.site",
        "employees": [
            "Sam",
            "Mary",
            "Bill",
            "Anna",
        ]
    },
  }

  /*Problem 1*/
console.log((employees.Emp1.salary)+(employees.Emp2.salary)+(employees.Emp3.salary)+(employees.Emp4.salary))
/* 105,300 */

/*Problem 2*/

if ((employees.Emp1.raiseeligible)== true); newSalary1=((employees.Emp1.salary)*1.1); console.log(newSalary1)
if ((employees.Emp1.raiseeligible)== false); console.log(employees.Emp1.salary);
if ((employees.Emp2.raiseeligible)== true); newSalary2=((employees.Emp2.salary)*1.1); console.log(newSalary2)
if ((employees.Emp2.raiseeligible)== false); console.log(employees.Emp2.salary);
if ((employees.Emp3.raiseeligible)== true); newSalary3=((employees.Emp3.salary)*1.1); console.log(newSalary3)
if ((employees.Emp3.raiseeligible)== false); console.log(employees.Emp3.salary);
if ((employees.Emp4.raiseeligible)== true); newSalary4=((employees.Emp4.salary)*1.1); console.log(newSalary4)
if ((employees.Emp4.raiseeligible)== false); console.log(employees.Emp4.salary);