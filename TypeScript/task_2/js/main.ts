// DirectorInterface interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface interface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementing DirectorInterface
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher class implementing TeacherInterface
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Example usage:
  console.log(createEmployee(200));
  // Expected output when logged (actual object instance):
  // Teacher {
  //   workFromHome: [Function: workFromHome],
  //   getCoffeeBreak: [Function: getCoffeeBreak],
  //   workTeacherTasks: [Function: workTeacherTasks]
  // }
  
  console.log(createEmployee(1000));
  // Expected output when logged (actual object instance):
  // Director {
  //   workFromHome: [Function: workFromHome],
  //   getCoffeeBreak: [Function: getCoffeeBreak],
  //   workDirectorTasks: [Function: workDirectorTasks]
  // }
  
  console.log(createEmployee('$500'));
  // Expected output when logged (actual object instance):
  // Director {
  //   workFromHome: [Function: workFromHome],
  //   getCoffeeBreak: [Function: getCoffeeBreak],
  //   workDirectorTasks: [Function: workDirectorTasks]
  // }

// Type predicate function isDirector
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // executeWork function
  function executeWork(employee: Director | Teacher): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Example usage for executeWork:
  console.log("--- executeWork examples ---");
  executeWork(createEmployee(200));
  // Expected output:
  // Getting to work
  
  executeWork(createEmployee(1000));
  // Expected output:
  // Getting to director tasks
  
// String literal type Subjects
type Subjects = "Math" | "History";

// teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    // This case should ideally not be reached if type checking is enforced
    // but good for robustness if called from JS without TS checks.
    return `Cannot teach ${todayClass}`;
  }
}

// Example usage for teachClass:
console.log("--- teachClass examples ---");
console.log(teachClass('Math'));    // Expected: Teaching Math
console.log(teachClass('History')); // Expected: Teaching History
