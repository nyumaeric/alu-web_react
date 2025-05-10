interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number; // Optional property
    //[key: string]: any; // Allow any other dynamic properties
  }
  
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface printTeacherFunction {
      (firstName: string, lastName: string): string;
    }
    
    const printTeacher: printTeacherFunction = (firstName, lastName) => {
      return `${firstName.charAt(0)}. ${lastName}`;
    };
    
    // Example usage:
    console.log(printTeacher("John", "Doe")); // Output: J. Doe
  
  // Example usage:
  const director1: Directors = {
      firstName: 'John',
      lastName: 'Doe',
      location: 'London',
      fullTimeEmployee: true,
      numberOfReports: 17,
      workFromHome: function (): string {
          throw new Error("Function not implemented.");
      },
      getCoffeeBreak: function (): string {
          throw new Error("Function not implemented.");
      },
      workTeacherTasks: function (): string {
          throw new Error("Function not implemented.");
      }
  };
  console.log(director1);
  
  // Interface for the StudentClass constructor
  interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
  }
  
  // Interface defining the structure of a student
  interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Implementation of the StudentClass
  class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;
  
    constructor(firstName: string, lastName: string) {
      // Assign the provided firstName and lastName to the class properties
      this.firstName = firstName;
      this.lastName = lastName;
    }

    workOnHomework(): string {
      return "I am working on my homework.";
    }
  
    displayName(): string {
      return `Student: ${this.firstName}`;
    }
  }
  
  // Example usage for StudentClass (optional, for testing)
  const student = new StudentClass("Jane", "Doe");
  console.log(student.displayName());
  console.log(student.workOnHomework());
  
  